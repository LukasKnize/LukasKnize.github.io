# Okruh 19 – Dotazovací jazyky, SQL, QBE, standardizace SQL, kritika SQL

## Proč potřebujeme dotazovací jazyky?

Data v databázi jsou k ničemu, pokud k nim nemáme způsob, jak se ptát. **Dotazovací jazyk** umožňuje uživateli popsat, *co* chce, aniž by musel říkat, *jak* to databázový stroj má najít. Tato vlastnost se nazývá **deklarativnost** – zásadní rozdíl oproti procedurálním jazykům (C, Python), kde popisuješ každý krok.

```python
# Procedurálně (Python) – musím popsat JAK:
výsledek = []
for student in studenti:
    if student.obor == 'Informatika' and student.věk > 20:
        výsledek.append(student.jméno)
výsledek.sort()

# Deklarativně (SQL) – říkám jen CO chci:
SELECT jméno FROM Studenti
WHERE obor = 'Informatika' AND věk > 20
ORDER BY jméno;
```

---

## SQL – Structured Query Language

**SQL** (Structured Query Language) je dominantní jazyk pro relační databáze. Vznikl v IBM v 70. letech (původně SEQUEL), standardizován ISO/ANSI.

SQL se dělí na čtyři podjazyky:

| Podjazyk | Zkratka | Příkazy | Účel |
|----------|---------|---------|------|
| **Data Definition Language** | DDL | CREATE, ALTER, DROP, TRUNCATE | Správa struktury databáze |
| **Data Manipulation Language** | DML | SELECT, INSERT, UPDATE, DELETE | Práce s daty |
| **Data Control Language** | DCL | GRANT, REVOKE | Správa přístupových práv |
| **Transaction Control Language** | TCL | BEGIN, COMMIT, ROLLBACK | Správa transakcí |

---

## DDL – Definice struktury

```sql
-- Vytvoření tabulky
CREATE TABLE Studenti (
    id          SERIAL PRIMARY KEY,      -- auto-inkrementální PK
    jméno       VARCHAR(50) NOT NULL,
    příjmení    VARCHAR(50) NOT NULL,
    email       VARCHAR(100) UNIQUE,
    věk         INT CHECK (věk >= 16 AND věk <= 100),
    obor        VARCHAR(50) DEFAULT 'Nezapsáno',
    datum_přijetí DATE
);

-- Přidání sloupce
ALTER TABLE Studenti ADD COLUMN stipendium DECIMAL(10,2);

-- Přejmenování sloupce
ALTER TABLE Studenti RENAME COLUMN jméno TO first_name;

-- Smazání tabulky (+ všechna data)
DROP TABLE Studenti;

-- Smazání dat, zachování struktury
TRUNCATE TABLE Studenti;
```

---

## DML – Manipulace s daty

### SELECT – dotazování

```sql
-- Základní dotaz
SELECT jméno, příjmení, věk
FROM Studenti
WHERE obor = 'Informatika'
ORDER BY příjmení ASC
LIMIT 10;

-- Všechny sloupce
SELECT * FROM Studenti;

-- Agregační funkce
SELECT obor, COUNT(*) AS počet, AVG(věk) AS průměrný_věk
FROM Studenti
GROUP BY obor
HAVING COUNT(*) > 5;     -- HAVING filtruje skupiny (ne řádky jako WHERE)
```

### Pořadí zpracování SELECT (logické, ne syntaktické)

```
FROM → JOIN → WHERE → GROUP BY → HAVING → SELECT → ORDER BY → LIMIT
```

Pochopení tohoto pořadí vysvětluje, proč nelze použít alias ze SELECT ve WHERE (WHERE se zpracovává dříve).

### JOIN – spojení tabulek

```sql
-- INNER JOIN: jen záznamy, které mají shodu v obou tabulkách
SELECT s.jméno, p.název
FROM Studenti s
INNER JOIN Zápisy z ON s.id = z.id_student
INNER JOIN Předměty p ON z.id_předmět = p.id;

-- LEFT JOIN: všichni studenti, i ti bez zápisů (NULL)
SELECT s.jméno, z.id_předmět
FROM Studenti s
LEFT JOIN Zápisy z ON s.id = z.id_student;

-- RIGHT JOIN: analogicky, všechny z pravé tabulky
-- FULL OUTER JOIN: všechny záznamy z obou tabulek
-- CROSS JOIN: kartézský součin (všechny kombinace)
```

```
INNER JOIN:  A ∩ B
LEFT JOIN:   A + (A ∩ B)
RIGHT JOIN:  B + (A ∩ B)
FULL OUTER:  A ∪ B
```

### Poddotazy (Subqueries)

```sql
-- Poddotaz ve WHERE
SELECT jméno FROM Studenti
WHERE id IN (
    SELECT id_student FROM Zápisy WHERE id_předmět = 42
);

-- Korelovaný poddotaz (závisí na vnějším dotazu)
SELECT jméno, věk FROM Studenti s
WHERE věk > (
    SELECT AVG(věk) FROM Studenti WHERE obor = s.obor
);

-- Poddotaz v FROM (odvozená tabulka)
SELECT obor, průměr
FROM (
    SELECT obor, AVG(věk) AS průměr
    FROM Studenti GROUP BY obor
) AS OborovéPrůměry
WHERE průměr > 21;
```

### Množinové operace

```sql
-- Studenti informatiky NEBO ekonomiky
SELECT id FROM Studenti WHERE obor = 'Informatika'
UNION
SELECT id FROM Studenti WHERE obor = 'Ekonomika';

-- UNION odstraňuje duplikáty, UNION ALL je zachovává (rychlejší)

-- Průnik – studenti zapsaní do předmětu A I B
SELECT id_student FROM Zápisy WHERE id_předmět = 1
INTERSECT
SELECT id_student FROM Zápisy WHERE id_předmět = 2;

-- Rozdíl – studenti zapsaní do A, ale NE do B
SELECT id_student FROM Zápisy WHERE id_předmět = 1
EXCEPT
SELECT id_student FROM Zápisy WHERE id_předmět = 2;
```

### INSERT, UPDATE, DELETE

```sql
-- Vložení jednoho řádku
INSERT INTO Studenti (jméno, příjmení, obor)
VALUES ('Lukáš', 'Novák', 'Informatika');

-- Vložení více řádků najednou
INSERT INTO Studenti (jméno, příjmení, obor) VALUES
    ('Anna', 'Dvořák', 'Ekonomika'),
    ('Petr', 'Kříž', 'Informatika');

-- Aktualizace
UPDATE Studenti
SET obor = 'Kybernetika', věk = věk + 1
WHERE id = 42;

-- Smazání
DELETE FROM Studenti WHERE věk < 16;
```

---

## Pokročilé funkce SQL

### Window funkce (analytické funkce)

Window funkce počítají přes skupinu řádků **bez jejich sloučení** (na rozdíl od GROUP BY):

```sql
SELECT jméno, plat,
       RANK() OVER (PARTITION BY oddělení ORDER BY plat DESC) AS pořadí,
       AVG(plat) OVER (PARTITION BY oddělení) AS průměr_oddělení
FROM Zaměstnanci;
```

### CTE – Common Table Expression

Pojmenovaný dočasný výsledek dotazu, zpřehledňuje komplexní dotazy:

```sql
WITH InformatikaStudenti AS (
    SELECT id, jméno, věk FROM Studenti WHERE obor = 'Informatika'
),
StarsiStudenti AS (
    SELECT * FROM InformatikaStudenti WHERE věk > 22
)
SELECT * FROM StarsiStudenti ORDER BY věk;
```

---

## QBE – Query By Example

**QBE** (Query By Example) navrhl Moshe Zloof v IBM (1977) jako vizuální alternativu k SQL pro uživatele bez programátorských znalostí. Uživatel vyplňuje tabulkový formulář – „příklad" toho, co chce najít.

```
Tabulka Studenti:
| id | jméno | příjmení | obor         | věk |
|----|-------|----------|--------------|-----|
|    | P.    |          | Informatika  | >20 |
```

Zápis `P.` (Present) v sloupci jméno říká: „chci zobrazit tuto hodnotu". Podmínky se zapisují přímo do buněk. Výsledek odpovídá: `SELECT jméno FROM Studenti WHERE obor = 'Informatika' AND věk > 20`.

QBE implementovaly: IBM DB2, Microsoft Access (grafický návrhář dotazů je varianta QBE), LibreOffice Base.

**Výhody QBE**: přístupné pro netechnické uživatele, vizuální.  
**Nevýhody QBE**: omezené pro složité dotazy, méně expresivní než SQL.

---

## Standardizace SQL

SQL je standardizován organizacemi **ISO** a **ANSI**. Každá verze standardu přidává nové funkce:

| Verze | Rok | Klíčové přídavky |
|-------|-----|-----------------|
| SQL-86 | 1986 | První standard |
| SQL-89 | 1989 | Drobné opravy |
| SQL-92 | 1992 | JOIN syntaxe, poddotazy, více datových typů |
| SQL:1999 | 1999 | Rekurze (CTE), objektové rozšíření, triggery |
| SQL:2003 | 2003 | Window funkce, XML podpora, MERGE |
| SQL:2008 | 2008 | TRUNCATE, FETCH FIRST (LIMIT) ve standardu |
| SQL:2011 | 2011 | Temporální databáze (history tables) |
| SQL:2016 | 2016 | JSON podpora, polymorfní funkce |
| SQL:2023 | 2023 | Grafy (property graphs), rozšíření JSON |

**Realita**: Žádný DBMS plně neimplementuje standard – každý má vlastní dialekt s rozšířeními a odchylkami:

```sql
-- Automatické ID:
PostgreSQL: SERIAL nebo GENERATED ALWAYS AS IDENTITY
MySQL:      AUTO_INCREMENT
SQL Server: IDENTITY(1,1)
Oracle:     SEQUENCE + TRIGGER nebo GENERATED AS IDENTITY

-- Limit výsledků:
PostgreSQL/MySQL: LIMIT 10
SQL Server:       TOP 10 nebo FETCH FIRST 10 ROWS ONLY
Oracle (starší): ROWNUM <= 10
```

---

## Kritika SQL

Navzdory dominanci SQL čelí řadě kritik:

### 1. Impedance mismatch (nesoulad reprezentace)

SQL pracuje s **tabulkami a množinami**, aplikace pracují s **objekty**. Mapování mezi nimi (ORM – Object-Relational Mapping) je nepohodlné a výkonnostně nákladné. Označuje se jako „object-relational impedance mismatch".

### 2. NULL – trojhodnotová logika

NULL v SQL neznamená 0 ani prázdný řetězec – znamená „neznámá hodnota". To vede k neintuitivnímu chování:

```sql
SELECT * FROM T WHERE x = NULL;    -- nikdy nic nevrátí!
SELECT * FROM T WHERE x IS NULL;   -- správně

NULL = NULL   →  NULL (ne TRUE!)
NULL + 5      →  NULL
NOT NULL      →  NULL
```

### 3. Duplikáty – SQL není čistý množinový jazyk

Relační algebra pracuje s množinami (bez duplikátů). SQL pracuje s **multimnožinami** (bag sémantika) – SELECT vrací duplikáty, pokud explicitně nenapíšeme DISTINCT. Je to historické rozhodnutí pro výkon.

### 4. Pořadí sloupců a řádků

SQL standard říká, že tabulky jsou **množiny** bez pořadí. Přesto:
- SELECT bez ORDER BY vrací řádky v nespecifikovaném pořadí (nelze na pořadí spoléhat).
- Pořadí sloupců v SELECT záleží na pořadí výpisu – zdroj chyb při `INSERT INTO ... SELECT *`.

### 5. Komplexnost standardu

Standard SQL:2023 má přes 4 000 stránek. Nikdo ho celý nezná, DBMS ho celý neimplementují – interoperabilita je mýtus.

### 6. Deklarativnost má hranice

Pro složité analytické výpočty (rekurze, iterativní algoritmy) je SQL velmi nepohodlné. Procedurální rozšíření (PL/pgSQL, T-SQL, PL/SQL) tuto mezeru zaplňují, ale každý DBMS jinak – bez přenositelnosti.

### Alternativy k SQL

- **LINQ** (.NET) – dotazování přímo v kódu, typová kontrola při kompilaci.
- **GraphQL** – dotazovací jazyk pro API, ne pro databáze přímo.
- **Cypher** – pro grafové databáze (Neo4j).
- **MQL** (MongoDB Query Language) – pro dokumentové databáze.
- **SPARQL** – pro RDF/trojice (sémantický web).
