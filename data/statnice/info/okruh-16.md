# Okruh 16 – Relační datový model, relační algebra, terminologie, Coddova pravidla

## Proč relační databáze?

Před relačními databázemi se data ukládala hierarchicky nebo síťově – program musel přesně vědět, jak jsou data fyzicky uložena a jak po nich „navigovat". Každá změna struktury dat si vyžádala přepsání aplikace.

V roce 1970 Edgar F. Codd z IBM publikoval článek „A Relational Model of Data for Large Shared Data Banks", který změnil celý obor. Klíčová myšlenka: **data oddělme od způsobu jejich fyzického uložení**. Uživatel pracuje s logickými tabulkami a říká *co* chce, ne *jak* to najít. Fyzické uspořádání řeší databázový systém.

---

## Základní terminologie

| Pojem | Synonyma | Popis |
|-------|----------|-------|
| **Relace** | Tabulka (table) | Dvourozměrná struktura dat |
| **Atribut** | Sloupec (column), pole (field) | Pojmenovaná vlastnost entity |
| **Ntice** | Řádek (row), záznam (record) | Jedna konkrétní datová položka |
| **Doména** | Datový typ | Množina přípustných hodnot atributu |
| **Schéma relace** | – | Název relace + seznam atributů s doménami |
| **Stupeň relace** | – | Počet atributů (sloupců) |
| **Kardinalita** | – | Počet ntic (řádků) |

### Příklad

```
Relace: Studenti

| id  | jméno   | příjmení | věk | obor        |
|-----|---------|----------|-----|-------------|
| 1   | Lukáš   | Novák    | 22  | Informatika |  ← ntice (řádek)
| 2   | Anna    | Dvořák   | 21  | Ekonomika   |
| 3   | Petr    | Kříž     | 23  | Informatika |

Stupeň = 5 (sloupců), Kardinalita = 3 (řádků)
```

### Klíče

- **Superklíč** – libovolná množina atributů, která jednoznačně identifikuje ntici.
- **Kandidátní klíč** – minimální superklíč (žádný atribut nelze odebrat, aniž by přestal být superklíčem).
- **Primární klíč (PK)** – jeden zvolený kandidátní klíč; nesmí být NULL, musí být unikátní.
- **Alternativní klíč** – kandidátní klíče, které nebyly zvoleny jako primární.
- **Cizí klíč (FK)** – atribut, jehož hodnoty odkazují na PK jiné (nebo téže) relace; zajišťuje referenční integritu.

```
Relace Zápisy (id_záp, id_student, id_předmět, rok)
                       ↑                ↑
              FK → Studenti.id   FK → Předměty.id
```

---

## Coddova pravidla

Codd v roce 1985 formuloval **12 pravidel** (+ nulté), která musí systém splňovat, aby se mohl nazývat „relačním DBMS". V praxi žádný DBMS nesplňuje všech 12 – slouží spíše jako ideální cíl.

| Pravidlo | Název | Popis |
|---------|-------|-------|
| **0** | Správa pomocí relací | Systém musí spravovat databáze výhradně relačními schopnostmi |
| **1** | Informační pravidlo | Veškerá data jsou reprezentována jako hodnoty v tabulkách |
| **2** | Garantovaný přístup | Každý datový prvek je přístupný kombinací název tabulky + PK + název sloupce |
| **3** | Systematická podpora NULL | NULL odlišná od 0 a prázdného řetězce – „chybějící nebo neaplikovatelná informace" |
| **4** | Aktivní online katalog | Metadata (schéma) jsou uložena v relacích přístupných stejným dotazovacím jazykem |
| **5** | Komprehenzivní datový jazyk | Systém musí mít jazyk pro DDL, DML, transakce i práva |
| **6** | Pravidlo aktualizace pohledů | Všechny teoreticky aktualizovatelné pohledy (views) musí být aktualizovatelné |
| **7** | Vkládání, aktualizace, mazání | Operace musí pracovat s množinami, ne pouze s jednotlivými řádky |
| **8** | Fyzická datová nezávislost | Změna fyzického uložení neovlivní aplikace |
| **9** | Logická datová nezávislost | Změna logického schématu (přidání sloupce) neovlivní existující aplikace |
| **10** | Nezávislost integrity | Pravidla integrity jsou uložena v katalogu, ne v aplikacích |
| **11** | Distribuční nezávislost | Aplikace nesmí záviset na tom, zda jsou data distribuovaná nebo centrální |
| **12** | Pravidlo neobcházení | Nízkoúrovňový přístup nesmí obejít relační pravidla a integritu |

---

## Relační algebra

**Relační algebra** je formální matematický jazyk pro manipulaci s relacemi. SQL je v podstatě „přátelštější" syntaxe nad relační algebrou. Porozumění algebře pomáhá pochopit, co dotaz skutečně dělá.

Operace pracují s relacemi jako celky (množiny ntic) a vracejí novou relaci.

### 1. Selekce (Selection) – σ

Vybere řádky splňující podmínku. Analogie: `WHERE` v SQL.

```
σ_podmínka(R)

σ_(obor = 'Informatika')(Studenti)
→ vrátí jen studenty informatiky
```

### 2. Projekce (Projection) – π

Vybere pouze určité sloupce (a odstraní duplikáty). Analogie: `SELECT` v SQL.

```
π_seznam_atributů(R)

π_(jméno, příjmení)(Studenti)
→ vrátí tabulku jen se jménem a příjmením
```

### 3. Kartézský součin (Cartesian Product) – ×

Kombinuje každou ntici R s každou nticí S. Pro R o m řádcích a S o n řádcích výsledek má m×n řádků.

```
R × S
```

Samotný kartézský součin je zřídka užitečný – kombinuje i nesouvisející záznamy. Základ pro operaci Join.

### 4. Přirozené spojení (Natural Join) – ⋈

Kombinuje řádky z R a S, kde **hodnoty sdílených atributů jsou shodné**. Hlavní operace pro kombinaci tabulek.

```
Studenti ⋈ Zápisy
→ ke každému studentovi přidá jeho zápisy (spárování podle id_student)
```

### 5. Theta Join – ⋈_θ

Spojení s libovolnou podmínkou (nejen rovnost sdílených atributů):

```
R ⋈_(R.a > S.b) S
```

### 6. Sjednocení (Union) – ∪

Sloučí řádky dvou relací (odstraní duplikáty). Relace musí mít stejné schéma.

```
CeskiStudenti ∪ SlovenskiStudenti
```

### 7. Průnik (Intersection) – ∩

Řádky společné oběma relacím.

### 8. Rozdíl (Difference) – −

Řádky v R, které nejsou v S.

```
VsichniStudenti − StudentiBezZapisu
→ studenti, kteří mají aspoň jeden zápis
```

### 9. Přejmenování (Rename) – ρ

Přejmenuje relaci nebo atributy (užitečné při sebespojení).

```
ρ_(S)(Studenti)   → přejmenuje relaci na S
```

### Příklad – kombinace operací

„Najdi jméno a příjmení studentů informatiky starších 21 let":

```
π_(jméno, příjmení)( σ_(obor='Informatika' ∧ věk>21)(Studenti) )
```

Odpovídající SQL:
```sql
SELECT jméno, příjmení
FROM Studenti
WHERE obor = 'Informatika' AND věk > 21;
```

---

## Pohled (View)

**Pohled (View)** je pojmenovaný dotaz uložený v databázi – virtuální tabulka. Nepřidává fyzická data, jen ukládá definici dotazu. Použití pohledů:

- **Bezpečnost** – uživatel vidí jen povolené sloupce/řádky.
- **Zjednodušení** – komplexní join schovat za jednoduchý název.
- **Zpětná kompatibilita** – po změně schématu pohled adaptuje starý pohled na nové tabulky.

```sql
CREATE VIEW InformatikaStudenti AS
SELECT id, jméno, příjmení
FROM Studenti
WHERE obor = 'Informatika';
```
