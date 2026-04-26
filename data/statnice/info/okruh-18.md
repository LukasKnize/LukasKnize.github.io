# Okruh 18 – Databázové transakce, smysl a principy, varianty řešení

## Co je transakce a proč ji potřebujeme?

Představte si převod peněz z účtu A na účet B:

```sql
UPDATE Účty SET zůstatek = zůstatek - 1000 WHERE id = 'A';
UPDATE Účty SET zůstatek = zůstatek + 1000 WHERE id = 'B';
```

Co se stane, když po prvním příkazu dojde k výpadku proudu? Účet A přijde o 1000 Kč, ale účet B nic nedostane. Peníze zmizely. Přesně tomuto scénáři mají zabránit **transakce**.

**Transakce** je posloupnost databázových operací, která se tváří jako **nedělitelná atomická jednotka** – buď se provede celá, nebo se neprovede vůbec, a databáze se vrátí do stavu před jejím začátkem.

---

## Vlastnosti ACID

Každá korektní transakce musí splňovat čtyři vlastnosti **ACID**:

### A – Atomicita (Atomicity)

„Všechno nebo nic." Transakce je nedělitelná – nemůže proběhnout jen částečně. Pokud jakákoli operace selže, celá transakce se odvolá (**rollback**) a databáze se vrátí do původního stavu.

### C – Konzistence (Consistency)

Transakce převede databázi z jednoho **konzistentního stavu** do jiného konzistentního stavu. Nesmí porušit žádné integritní omezení (cizí klíče, CHECK constraints…). Definuje, co je „správný" stav.

### I – Izolace (Isolation)

Konkurující transakce se **navzájem neovlivňují** – každá transakce vidí databázi, jakoby běžela sama. Mezivýsledky jedné transakce jsou před ostatními skryty, dokud transakce neskončí.

### D – Trvanlivost (Durability)

Po úspěšném potvrzení transakce (**commit**) jsou změny **permanentně uloženy**, i při výpadku hardware. Data musí přežít restart systému.

---

## Průběh transakce

```sql
BEGIN;                          -- zahájení transakce

UPDATE Účty SET zůstatek = zůstatek - 1000 WHERE id = 'A';
UPDATE Účty SET zůstatek = zůstatek + 1000 WHERE id = 'B';

-- Pokud vše OK:
COMMIT;                         -- potvrzení, změny jsou trvalé

-- Pokud nastane chyba:
-- ROLLBACK;                    -- odvolání, vše vráceno
```

### Savepoint

Vnořený bod, kam lze rollbacknout bez zrušení celé transakce:

```sql
BEGIN;
INSERT INTO Objednávky ...;
SAVEPOINT po_objednavce;

INSERT INTO Platby ...;       -- toto selže
ROLLBACK TO po_objednavce;    -- vrátí jen platbu, objednávka zůstane

COMMIT;
```

---

## Problémy souběžného přístupu (Concurrency Anomalies)

Bez správné izolace může souběžný přístup více transakcí způsobit:

### Špinavé čtení (Dirty Read)

Transakce T2 přečte data, která T1 **zatím nepotvrdila** (a může je odvolat).

```
T1: UPDATE cena = 50 (zatím COMMIT)
T2: SELECT cena → vidí 50          ← dirty read
T1: ROLLBACK → cena je zpět 100
T2 pracovala s neplatnými daty!
```

### Neopakovatelné čtení (Non-repeatable Read)

T2 čte stejný řádek dvakrát a dostane **různé výsledky**, protože T1 mezitím řádek změnila a commitla.

```
T2: SELECT zůstatek → 1000
T1: UPDATE zůstatek = 500, COMMIT
T2: SELECT zůstatek → 500    ← jiná hodnota!
```

### Fantomové čtení (Phantom Read)

T2 spustí stejný dotaz dvakrát a dostane **různý počet řádků**, protože T1 mezitím vložila nebo smazala záznamy.

```
T2: SELECT COUNT(*) WHERE věk > 18 → 10
T1: INSERT nový student věk=20, COMMIT
T2: SELECT COUNT(*) WHERE věk > 18 → 11   ← nový "fantom"
```

---

## Úrovně izolace transakcí

SQL standard definuje čtyři úrovně izolace – kompromis mezi konzistencí a výkonem (vyšší izolace = více zamykání = nižší propustnost):

| Úroveň | Dirty Read | Non-repeatable | Phantom |
|--------|-----------|----------------|---------|
| **READ UNCOMMITTED** | možné | možné | možné |
| **READ COMMITTED** | ne | možné | možné |
| **REPEATABLE READ** | ne | ne | možné |
| **SERIALIZABLE** | ne | ne | ne |

- **READ UNCOMMITTED** – transakce vidí i nepotvrzené změny jiných. Nejrizikovější, nejrychlejší. Téměř nikdy nepoužívané.
- **READ COMMITTED** – transakce vidí pouze potvrzené změny. Výchozí pro **PostgreSQL, Oracle, SQL Server**.
- **REPEATABLE READ** – opakované čtení stejného řádku vrátí stejný výsledek. Výchozí pro **MySQL/InnoDB**.
- **SERIALIZABLE** – transakce se chovají, jako by probíhaly sériově (jedna po druhé). Nejsilnější izolace, ale nejpomalejší.

```sql
SET TRANSACTION ISOLATION LEVEL REPEATABLE READ;
BEGIN;
-- ...
COMMIT;
```

---

## Zamykání (Locking)

Tradiční mechanismus pro zajištění izolace – transakce zamkne zdroje, aby jiné transakce nemohly data číst nebo měnit.

### Typy zámků

- **Sdílený zámek (S-lock, Read lock)** – čtení. Více transakcí může současně sdílet S-lock na jednom záznamu. Žádná ale nemůže záznamu přiřadit X-lock.
- **Výlučný zámek (X-lock, Write lock)** – zápis. Pouze jedna transakce drží X-lock; ostatní musí čekat.

### Matice kompatibility

| | S-lock | X-lock |
|-|--------|--------|
| **S-lock** | Kompatibilní ✓ | Nekompatibilní ✗ |
| **X-lock** | Nekompatibilní ✗ | Nekompatibilní ✗ |

### Uváznutí (Deadlock)

```
T1 drží zámek na A, čeká na B
T2 drží zámek na B, čeká na A
→ oba čekají navždy = deadlock
```

**Řešení deadlocku:**
- DBMS detekuje cyklus v grafu čekání → jedna transakce je obětována (rollback).
- Prevence: transakce zamykají zdroje vždy ve stejném pořadí.
- Timeout: transakce, která čeká příliš dlouho, se automaticky odvolá.

### Dvoufázové zamykání (2PL – Two-Phase Locking)

Protokol zaručující serializovatelnost:
1. **Fáze rozšiřování** – transakce smí jen zamykat (ne odemykat).
2. **Fáze smršťování** – po prvním odemčení smí jen odemykat.

---

## MVCC – Multiversion Concurrency Control

Moderní alternativa k zamykání při čtení. Místo blokování čtenářů udržuje DBMS **více verzí každého záznamu**:

- Každá transakce vidí **snapshot** databáze z okamžiku svého začátku.
- Zapisovatelé nevytvářejí konflikty s čtenáři (čtení nikdy nečeká na zápis a naopak).
- Staré verze se periodicky čistí (**vacuum** v PostgreSQL).

MVCC používají: **PostgreSQL, Oracle, MySQL (InnoDB), SQLite**.

```
Čas:   T1 začne  T2 updateuje  T1 čte
                 ↓              ↓
Verze záznamu:  [v1] → [v2]    T1 stále vidí v1 (svůj snapshot)
```

### Optimistické vs. pesimistické zamykání

| | Pesimistické | Optimistické |
|-|-------------|-------------|
| Filosofie | Předpokládej konflikt → zamkni předem | Předpokládej klid → ověř při commitu |
| Vhodné pro | Časté konflikty | Vzácné konflikty (čtení > zápisy) |
| Implementace | `SELECT ... FOR UPDATE` | Verze/timestamp sloupec, kontrola při commitu |
| Problém | Deadlocky, čekání | Rollback při konfliktu |

---

## Distribuované transakce

Když transakce zasahuje více databází nebo mikroservis, nestačí lokální commit – je potřeba koordinace.

### Dvoufázový commit (2PC – Two-Phase Commit)

**Koordinátor** řídí účastníky ve dvou fázích:

1. **Prepare (Hlasovací) fáze** – koordinátor se ptá všech účastníků: „Jste připraveni commitnout?" Každý odpoví ANO nebo NE.
2. **Commit/Abort fáze** – pokud všichni řekli ANO, koordinátor pošle COMMIT. Pokud kdokoli řekl NE, pošle ABORT všem.

**Problém**: koordinátor může selhat mezi fázemi → účastníci čekají na rozhodnutí (blokující protokol).

### Saga

Moderní pattern pro mikroservisy. Místo distribuované transakce jde o **sérii lokálních transakcí** – každý krok má definovanou **kompenzační transakci** pro případ selhání. Místo rollbacku se provede kompenzace (opačná akce).
