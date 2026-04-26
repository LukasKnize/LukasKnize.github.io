# Okruh 17 – Integrita dat, integritní omezení, triggery, normalizace, normální formy

## Integrita dat

**Integrita dat** znamená, že data v databázi jsou **přesná, konzistentní a smysluplná**. Bez integrity by databáze mohla obsahovat objednávku od neexistujícího zákazníka, záporný věk nebo studenta zapsaného do předmětu, který neexistuje.

Integritu zajišťují **integritní omezení (constraints)** – pravidla definovaná ve schématu, která DBMS automaticky vynucuje při každém INSERT, UPDATE nebo DELETE.

---

## Druhy integritních omezení

### 1. Doménová integrita

Každý atribut smí nabývat jen hodnot ze své **domény** (datového typu a rozsahu):

```sql
věk    INT CHECK (věk >= 0 AND věk <= 150)
email  VARCHAR(255) NOT NULL
cena   DECIMAL(10,2) CHECK (cena >= 0)
pohlaví CHAR(1) CHECK (pohlaví IN ('M', 'F', 'X'))
```

- **NOT NULL** – atribut nesmí být prázdný (NULL).
- **CHECK** – libovolná booleovská podmínka nad hodnotou.
- **Datový typ** – INT nepřijme text, DATE nepřijme neplatné datum.

### 2. Entitní integrita

**Primární klíč** každé relace musí být **unikátní** a **nesmí být NULL**. Každý řádek musí být jednoznačně identifikovatelný.

```sql
CREATE TABLE Studenti (
    id      INT PRIMARY KEY,   -- unikátní + NOT NULL automaticky
    jméno   VARCHAR(50) NOT NULL,
    ...
);
```

### 3. Referenční integrita

**Cizí klíč (FK)** musí odkazovat na existující primární klíč v rodičovské tabulce – žádné „sirotčí" záznamy.

```sql
CREATE TABLE Zápisy (
    id          INT PRIMARY KEY,
    id_student  INT REFERENCES Studenti(id),   -- FK
    id_předmět  INT REFERENCES Předměty(id),   -- FK
    rok         INT NOT NULL
);
```

Při pokusu vložit zápis s `id_student = 999`, který v tabulce Studenti neexistuje, DBMS vrátí chybu.

#### Akce při porušení referenční integrity

Co se stane, když smažu studenta, který má záznamy v Zápisech?

| Akce | Popis | Vhodné pro |
|------|-------|-----------|
| `RESTRICT / NO ACTION` | Odmítne smazání (výchozí) | Ochrana důležitých dat |
| `CASCADE` | Smaže i závislé záznamy | Log záznamy, detail tabulky |
| `SET NULL` | Nastaví FK na NULL | Volitelné vazby |
| `SET DEFAULT` | Nastaví FK na výchozí hodnotu | Specifické případy |

```sql
FOREIGN KEY (id_student) REFERENCES Studenti(id)
    ON DELETE CASCADE
    ON UPDATE CASCADE
```

### 4. Unikátní omezení (UNIQUE)

Zakazuje duplicitní hodnoty v sloupci (nebo kombinaci sloupců), ale na rozdíl od PK dovoluje NULL:

```sql
email VARCHAR(255) UNIQUE   -- dva uživatelé nemohou mít stejný email
```

### 5. Omezení výchozí hodnoty (DEFAULT)

```sql
datum_vytvoření TIMESTAMP DEFAULT CURRENT_TIMESTAMP
aktivní         BOOLEAN DEFAULT TRUE
```

---

## Database Triggers

**Trigger** (spoušť) je procedura automaticky spuštěná databází jako **reakce na událost** (INSERT, UPDATE, DELETE na dané tabulce). Uživatel ho nevolá přímo.

### Kdy se trigger hodí?

- **Auditní log** – zaznamenat každou změnu do logovací tabulky.
- **Odvozená data** – automaticky aktualizovat sumarizační sloupec.
- **Komplexní validace** – pravidla, která CHECK constraint nezvládne.
- **Kaskádní aktualizace** – nad rámec referenční integrity.

### Syntaxe (PostgreSQL)

```sql
-- 1. Nejdřív funkce triggeru
CREATE FUNCTION log_zmeny()
RETURNS TRIGGER AS $$
BEGIN
    INSERT INTO AuditLog(tabulka, operace, čas, starý_id)
    VALUES ('Studenti', TG_OP, NOW(), OLD.id);
    RETURN NEW;
END;
$$ LANGUAGE plpgsql;

-- 2. Pak samotný trigger
CREATE TRIGGER tr_studenti_audit
AFTER UPDATE OR DELETE ON Studenti
FOR EACH ROW
EXECUTE FUNCTION log_zmeny();
```

### BEFORE vs. AFTER trigger

- **BEFORE** – spustí se před provedením operace; může hodnoty změnit nebo operaci zrušit.
- **AFTER** – spustí se po provedení operace; typicky pro logování nebo kaskádní akce.

### Nevýhody triggerů

Triggery jsou „skrytá logika" – při čtení kódu aplikace nevidíte, že se něco děje navíc. Nadměrné použití triggerů komplikuje ladění a výkon. Moderní přístup preferuje logiku v aplikační vrstvě nebo uložených procedurách.

---

## Datová normalizace

**Normalizace** je proces organizace schématu databáze tak, aby se **eliminovala redundance** (duplicitní data) a **anomálie při manipulaci s daty**.

### Proč je redundance problém?

Nezormalizovaná tabulka:

```
| id_obj | zákazník | email_zákazníka | produkt  | cena |
|--------|----------|-----------------|----------|------|
| 1      | Novák    | novak@email.cz  | Notebook | 25000|
| 2      | Novák    | novak@email.cz  | Myš      | 500  |
| 3      | Dvořák   | dvorak@email.cz | Klávesnice| 1200|
```

**Anomálie:**
- **Vkládací anomálie** – Nemůžu přidat zákazníka bez objednávky (email nemá kde žít).
- **Aktualizační anomálie** – Novák změní e-mail → musím aktualizovat *všechny* řádky s ním.
- **Mazací anomálie** – Smažu jedinou objednávku Dvořáka → ztratím i jeho e-mail.

---

## Normální formy

Normalizace probíhá postupně – každá **normální forma (NF)** přidává přísnější požadavky.

### 1NF – První normální forma

**Pravidla:**
- Každý atribut obsahuje **atomické** (nedělitelné) hodnoty – žádné seznamy nebo vnořené tabulky.
- Každý řádek je unikátní (existuje PK).

**Porušení 1NF:**
```
| student | telefony              |
|---------|----------------------|
| Novák   | 123456789, 987654321 |   ← více hodnot v buňce!
```

**Po 1NF:**
```
| student | telefon   |
|---------|-----------|
| Novák   | 123456789 |
| Novák   | 987654321 |
```

### 2NF – Druhá normální forma

**Podmínka:** Je v 1NF a každý neklíčový atribut závisí na **celém** primárním klíči (žádná částečná závislost).

Relevantní jen pro tabulky s **složeným PK** (více sloupců).

**Porušení 2NF** (PK = id_student + id_předmět):
```
| id_student | id_předmět | jméno_studenta | název_předmětu | známka |
|------------|------------|----------------|----------------|--------|
```
- `jméno_studenta` závisí jen na `id_student` (část PK) → částečná závislost.
- `název_předmětu` závisí jen na `id_předmět` → částečná závislost.

**Řešení** – rozdělit do tří tabulek: Studenti, Předměty, Zápisy.

### 3NF – Třetí normální forma

**Podmínka:** Je v 2NF a žádný neklíčový atribut **tranzitivně nezávisí** na PK přes jiný neklíčový atribut.

**Porušení 3NF:**
```
| id_zaměstnance | id_oddělení | název_oddělení |
|----------------|-------------|----------------|
```
- `název_oddělení` závisí na `id_oddělení`, které závisí na `id_zaměstnance` → tranzitivní závislost.

**Řešení:**
```
Zaměstnanci: (id_zaměstnance, id_oddělení)
Oddělení:    (id_oddělení, název_oddělení)
```

### BCNF – Boyce-Coddova normální forma

Silnější než 3NF: pro každou **funkční závislost X → Y** musí platit, že X je superklíč. Řeší okrajové případy, kde 3NF nestačí (více kandidátních klíčů se překrývají).

### 4NF a 5NF

Řeší vícehodnotové závislosti a závislosti spojení – v praxi se vyskytují vzácně, při standardním návrhu schématu je obvykle nepotřebujete.

---

## Funkční závislosti

**Funkční závislost** X → Y říká: hodnota X jednoznačně určuje hodnotu Y. Je to matematický základ normalizace.

Příklady:
- `id_student → jméno, příjmení, věk` (PK → ostatní atributy)
- `PSČ → město` (PSČ určuje město)
- `id_předmět, semestr → garant` (složená závislost)

### Armstrongova axiomata (pravidla odvozování)

1. **Reflexivita**: Pokud Y ⊆ X, pak X → Y.
2. **Rozšíření**: Pokud X → Y, pak XZ → YZ.
3. **Tranzitivita**: Pokud X → Y a Y → Z, pak X → Z.

---

## Praktické shrnutí normalizace

```
Nenormalizovaná tabulka
         ↓ 1NF: atomické hodnoty, unikátní řádky
1NF
         ↓ 2NF: bez částečných závislostí (na složeném PK)
2NF
         ↓ 3NF: bez tranzitivních závislostí
3NF  ← pro většinu praktických aplikací postačuje
         ↓ BCNF: každá závislost X→Y, X je superklíč
BCNF
```

> **Zlaté pravidlo**: Normalizujte do 3NF. Denormalizujte záměrně jen tam, kde to výkon vyžaduje (OLAP, data warehouses) – a dokumentujte proč.
