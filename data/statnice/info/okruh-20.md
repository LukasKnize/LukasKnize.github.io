# Okruh 20 – Relační a objektová databázová řešení, uložení dat, přístup k datům, ochrana dat

## Přehled databázových paradigmat

Za 50 let vývoje databází vzniklo několik zásadně odlišných přístupů k ukládání a dotazování dat. Žádný není univerzálně nejlepší – každý vyniká v jiném kontextu.

---

## Relační databázové systémy (RDBMS)

Relační DBMS jsou dominantním typem databází a implementují principy z Okruhu 16–19. Klíčové vlastnosti:

- Data organizována do **tabulek** propojených cizími klíči.
- Dotazování pomocí **SQL**.
- Garantují **ACID** transakce.
- Silná **datová integrita** přes constraints.

### Přední RDBMS a jejich charakteristiky

| DBMS | Licence | Silné stránky | Typické použití |
|------|---------|--------------|-----------------|
| **PostgreSQL** | Open-source | Standardy, rozšiřitelnost, JSON, full-text | Webové aplikace, GIS, analytika |
| **MySQL / MariaDB** | Open-source | Rychlost, snadnost, ekosystém | LAMP stack, WordPress, e-shopy |
| **Oracle DB** | Komerční | Výkon, Enterprise funkce, RAC | Bankovnictví, telekomunikace |
| **Microsoft SQL Server** | Komerční | .NET integrace, BI nástroje | Windows prostředí, ERP |
| **SQLite** | Public domain | Bezzásobníkový, jeden soubor | Mobilní aplikace, embedded, testování |
| **IBM Db2** | Komerční | Mainframe, velká data | Podnikové mainframy |

---

## Objektové a objektově-relační databáze

### Objektová databáze (OODBMS)

Ukládá přímo **objekty** tak, jak je zná OOP – se zapouzdřením, dědičností a polymorfismem. Odpadá impedance mismatch (viz Okruh 19). Objekt se uloží a načte beze změny struktury.

```python
# Příklad: objekt přímo v databázi (Python + ZODB)
root['student'] = Student(jméno='Novák', kurzy=[Kurz('Matematika')])
transaction.commit()
```

**Výhody**: přirozená reprezentace složitých objektů, žádný ORM.  
**Nevýhody**: slabší standardizace, méně nástrojů, ad-hoc dotazování složitější.  
**Příklady**: ZODB (Python), ObjectDB (Java), Versant.

### Objektově-relační DBMS (ORDBMS)

Kompromis: relační základ rozšířený o objektové koncepty (uživatelské typy, dědičnost tabulek, metody). PostgreSQL je de facto OR databáze:

```sql
-- Uživatelský typ
CREATE TYPE adresa AS (
    ulice VARCHAR(100),
    město VARCHAR(50),
    PSČ   CHAR(5)
);

-- Tabulka s uživatelským typem
CREATE TABLE Zákazníci (
    id      SERIAL PRIMARY KEY,
    jméno   VARCHAR(50),
    bydliště adresa           -- uživatelský typ jako sloupec
);

-- Dědičnost tabulek (PostgreSQL)
CREATE TABLE Osoby (jméno VARCHAR(50));
CREATE TABLE Zaměstnanci () INHERITS (Osoby);  -- dědí sloupce
```

---

## NoSQL databáze

**NoSQL** (Not Only SQL) označuje rodinu databázových systémů, které se odklánějí od relačního modelu. Vznikly pro potřeby webových gigantů (Google BigTable, Amazon Dynamo, Facebook Cassandra), kde relační DBMS nestíhaly škálovat.

### Společné vlastnosti NoSQL

- **Horizontální škálování** – přidáme servery, kapacita roste (oproti vertikálnímu škálování relačních DB).
- **Schéma-less** – struktura dat není pevně daná předem.
- **BASE místo ACID**:
  - **B**asically Available – databáze reaguje, i při výpadku části
  - **S**oft state – stav se může měnit i bez vstupu (replikace)
  - **E**ventually consistent – systém se nakonec dostane do konzistentního stavu

### Typy NoSQL databází

#### Dokumentové (Document stores)

Data jsou uložena jako **JSON/BSON dokumenty** – hierarchické, bez pevného schématu. Dokument = jeden přirozený celek (objednávka i s položkami).

```json
{
  "_id": "order_123",
  "zákazník": { "jméno": "Novák", "email": "novak@email.cz" },
  "položky": [
    { "produkt": "Notebook", "cena": 25000, "ks": 1 },
    { "produkt": "Myš",      "cena": 500,   "ks": 2 }
  ],
  "celkem": 26000
}
```

**Výhody**: flexibilita schématu, přirozená reprezentace dat, snadné horizontální škálování.  
**Příklady**: **MongoDB**, CouchDB, Firestore (Google).

#### Klíč-hodnota (Key-Value stores)

Nejjednodušší typ – asociativní pole (hash mapa) v distribuovaném prostředí. Extrémně rychlé, ale bez možnosti dotazování na obsah hodnoty.

```
SET uživatel:42:session "abc123xyz" EX 3600   # Redis
GET uživatel:42:session  → "abc123xyz"
```

**Příklady**: **Redis** (in-memory, caching, pub/sub), DynamoDB, Riak.

#### Sloupcové (Wide-column / Column-family)

Data jsou organizována **po sloupcích**, ne po řádcích – ideální pro analytické dotazy, které čtou jen vybrané sloupce z miliard řádků.

```
Row key: uživatel_123
  Rodina 'profil':   jméno="Novák", věk=22, email="..."
  Rodina 'aktivity': poslední_přihlášení=..., počet_přihlášení=1547
```

**Příklady**: **Apache Cassandra**, HBase, Google Bigtable.

#### Grafové (Graph databases)

Data jsou uložena jako **uzly a hrany grafu** s vlastnostmi. Ideální pro vztahová data (sociální sítě, doporučovací systémy, znalostní grafy).

```cypher
// Cypher dotaz (Neo4j): Najdi přátele přátel
MATCH (já:Osoba {jméno: 'Novák'})-[:PŘÁTELÍ_SE]->(přítel)-[:PŘÁTELÍ_SE]->(ppp)
WHERE ppp <> já
RETURN ppp.jméno
```

**Příklady**: **Neo4j**, Amazon Neptune, TigerGraph.

### Kdy relační, kdy NoSQL?

| Kritérium | Relační | NoSQL |
|-----------|---------|-------|
| Schéma | Pevné, předem definované | Flexibilní, mění se za běhu |
| Vztahy | Silné, cizí klíče | Slabé nebo denormalizované |
| Transakce | ACID | BASE (případně ACID jen lokálně) |
| Škálování | Vertikální (větší server) | Horizontální (více serverů) |
| Dotazování | Komplexní SQL | Jednoduché (klíč), nebo vlastní jazyk |
| Typické použití | ERP, bankovnictví, e-commerce | Sociální sítě, IoT, caching, velká data |

---

## Fyzické uložení dat

### Jak RDBMS ukládá data na disk

Data jsou uložena v **stránkách (pages)** – nejmenší jednotka I/O, typicky 8 KB (PostgreSQL) nebo 16 KB (MySQL). Tabulka je logicky soubor stránek.

```
Stránka (8 KB):
┌─────────────────────────────────────┐
│ Hlavička stránky (metadata)         │
├─────────────────────────────────────┤
│ Ntice 1 | Ntice 2 | Ntice 3 | ...   │
├─────────────────────────────────────┤
│           (volné místo)              │
└─────────────────────────────────────┘
```

### Indexy

**Index** je datová struktura (nejčastěji **B+ strom**), která urychluje vyhledávání za cenu extra místa na disku a pomalejšího zápisu.

```sql
-- Vytvoření indexu
CREATE INDEX idx_studenti_obor ON Studenti(obor);
CREATE UNIQUE INDEX idx_studenti_email ON Studenti(email);
CREATE INDEX idx_složený ON Objednávky(id_zákazník, datum);

-- Zobrazení plánu dotazu (klíčové pro optimalizaci)
EXPLAIN ANALYZE SELECT * FROM Studenti WHERE obor = 'Informatika';
```

**B+ strom** (nejčastější typ indexu):
- Listy obsahují skutečná data (nebo ukazatele na řádky).
- Vnitřní uzly obsahují jen klíče pro navigaci.
- Všechny listy jsou propojeny → efektivní skenování rozsahu (BETWEEN, <, >).
- Vyhledávání, vkládání, mazání: O(log n).

**Hash index** – O(1) přístup, ale jen pro rovnostní podmínky (`=`), ne pro rozsahy.

**Plný textový index (Full-text)** – pro vyhledávání v textu (TF-IDF, inverted index).

### WAL – Write-Ahead Log

Pro zaručení trvanlivosti (D v ACID) používají DBMS **WAL** (Write-Ahead Log): před zápisem změny do datového souboru se změna zapíše do logu. Po havárii se log přehraje a databáze se obnoví.

---

## Přístup k datům z aplikací

### JDBC / ODBC

- **JDBC** (Java Database Connectivity) – Java API pro přístup k libovolné SQL databázi.
- **ODBC** (Open Database Connectivity) – standardní C API, funguje z mnoha jazyků přes drivery.

```java
// JDBC – Java
Connection conn = DriverManager.getConnection(
    "jdbc:postgresql://localhost:5432/mydb", "user", "heslo");
PreparedStatement stmt = conn.prepareStatement(
    "SELECT * FROM Studenti WHERE obor = ?");
stmt.setString(1, "Informatika");
ResultSet rs = stmt.executeQuery();
while (rs.next()) {
    System.out.println(rs.getString("jméno"));
}
```

### ORM – Object-Relational Mapping

**ORM** knihovna mapuje databázové tabulky na objekty v kódu – vývojář pracuje s objekty, ORM generuje SQL automaticky.

```python
# SQLAlchemy (Python) – ORM
class Student(Base):
    __tablename__ = 'studenti'
    id    = Column(Integer, primary_key=True)
    jméno = Column(String(50), nullable=False)
    obor  = Column(String(50))

# Dotaz přes ORM
studenti = session.query(Student).filter(Student.obor == 'Informatika').all()
```

**Výhody**: rychlejší vývoj, přenositelnost mezi DBMS, bezpečnost (parametrizované dotazy automaticky).  
**Nevýhody**: výkonnostní problémy (N+1 problém), abstrakce skrývá SQL → těžší optimalizace.

**Příklady ORM**: Hibernate (Java), SQLAlchemy (Python), Entity Framework (.NET), ActiveRecord (Ruby), Eloquent (PHP/Laravel).

---

## Ochrana dat v databázích

### Autentizace a autorizace

```sql
-- Vytvoření uživatele (PostgreSQL)
CREATE USER analytik WITH PASSWORD 'silné_heslo';

-- Přidělení práv (GRANT)
GRANT SELECT ON Studenti TO analytik;         -- jen čtení
GRANT SELECT, INSERT ON Objednávky TO appuser;
GRANT ALL PRIVILEGES ON DATABASE mydb TO admin;

-- Odebrání práv (REVOKE)
REVOKE INSERT ON Objednávky FROM analytik;

-- Role (skupiny práv)
CREATE ROLE readonly;
GRANT SELECT ON ALL TABLES IN SCHEMA public TO readonly;
GRANT readonly TO analytik, reporter;
```

### Šifrování dat

- **Šifrování přenosu (in-transit)**: TLS/SSL pro připojení klient–server. `psql "sslmode=require"`.
- **Šifrování dat v klidu (at-rest)**: šifrování celého disku (LUKS, BitLocker) nebo šifrování na úrovni DBMS (Oracle TDE – Transparent Data Encryption, SQL Server TDE, PostgreSQL pgcrypto).
- **Šifrování na úrovni sloupce**: citlivé hodnoty (rodná čísla, hesla) se uloží zašifrované; klíč spravuje aplikace.

```sql
-- pgcrypto (PostgreSQL) – šifrování sloupce
INSERT INTO Uživatelé (email, heslo_hash)
VALUES ('novak@email.cz', crypt('moje_heslo', gen_salt('bf')));

-- Ověření hesla
SELECT * FROM Uživatelé
WHERE email = 'novak@email.cz'
  AND heslo_hash = crypt('zadané_heslo', heslo_hash);
```

**Hesla se nikdy neukládají jako plaintext** – vždy jako hash (bcrypt, Argon2, scrypt), ideálně s solí.

### SQL Injection – největší bezpečnostní hrozba

```python
# ŠPATNĚ – zranitelné na SQL injection!
dotaz = "SELECT * FROM Studenti WHERE jméno = '" + vstup_uživatele + "'"
# Útočník zadá: ' OR '1'='1 → dotaz vrátí VŠECHNY záznamy

# SPRÁVNĚ – parametrizovaný dotaz
cursor.execute("SELECT * FROM Studenti WHERE jméno = %s", (vstup_uživatele,))
# Uživatelský vstup je automaticky escapován, nemůže změnit strukturu dotazu
```

### Zálohy a obnova

- **Logické zálohy** (`pg_dump`, `mysqldump`) – SQL příkazy pro obnovení dat. Přenositelné, ale pomalejší.
- **Fyzické zálohy** (kopie datových souborů, pg_basebackup) – rychlé, vyžaduje stejný DBMS.
- **Point-in-Time Recovery (PITR)** – kombinace zálohy + WAL logu umožní obnovit databázi do libovolného okamžiku v minulosti.
- **Replikace** – real-time kopie dat na záložním serveru (synchronní / asynchronní).

### Auditní log

Auditní log zaznamenává, kdo co kdy udělal – klíčový nástroj pro bezpečnostní analýzu a splnění regulatorních požadavků (GDPR, PCI-DSS).

```sql
-- Příklad auditní tabulky
CREATE TABLE AuditLog (
    id          BIGSERIAL PRIMARY KEY,
    tabulka     VARCHAR(50),
    operace     CHAR(1),        -- I=insert, U=update, D=delete
    uživatel    VARCHAR(50) DEFAULT CURRENT_USER,
    čas         TIMESTAMP DEFAULT NOW(),
    starý_data  JSONB,
    nový_data   JSONB
);
```

### GDPR a ochrana osobních údajů

Nařízení GDPR (EU, 2018) přináší databázové povinnosti:
- **Právo na výmaz** – systém musí umožnit smazat všechna data konkrétní osoby.
- **Pseudonymizace** – nahrazení identifikátorů pseudonymy (ID místo jména).
- **Minimalizace dat** – ukládat jen to, co je nutné.
- **Šifrování** – citlivá data musí být chráněna.
- **Logy přístupu** – kdo, kdy a k čemu přistupoval.
