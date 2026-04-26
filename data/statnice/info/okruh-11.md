# Okruh 11 – Vlastnosti algoritmu, strukturované algoritmy, vývojové diagramy

## Co je algoritmus?

**Algoritmus** je přesný, konečný postup (recept) pro řešení nějakého problému. Slovo pochází od jména perského matematika Al-Chorezmího (9. stol.). Algoritmus existoval dávno před počítači – kuchařský recept, matematický postup dělení, Eukleidův algoritmus pro GCD.

Počítač sám o sobě nic „neumí" – pouze vykonává instrukce. Algoritmem říkáme počítači *přesně*, co má dělat krok za krokem.

---

## Vlastnosti správného algoritmu

Aby byl postup skutečně algoritmem, musí splňovat těchto pět vlastností:

### 1. Konečnost (Finiteness)
Algoritmus musí skončit po **konečném počtu kroků** pro každý přípustný vstup. Nekonečná smyčka není algoritmus – je to chyba. Existují sice programy navržené k věčnému běhu (servery), ale ty nejsou algoritmy ve formálním smyslu.

### 2. Určitost / Jednoznačnost (Definiteness)
Každý krok musí být **přesně a jednoznačně definován** – bez možnosti dvojího výkladu. „Přidej trochu soli" není algoritmický krok. „Přidej 5 gramů NaCl" je.

### 3. Vstup (Input)
Algoritmus má nula nebo více **vstupů** – hodnot přijatých před nebo v průběhu výpočtu. (Algoritmus bez vstupu vždy vrátí totéž.)

### 4. Výstup (Output)
Algoritmus produkuje jeden nebo více **výstupů** – výsledků, které mají definovaný vztah ke vstupům.

### 5. Efektivnost / Proveditelnost (Effectiveness)
Každý krok musí být **dostatečně základní**, aby ho bylo možné provést přesně a v konečném čase. Krok „najdi největší prvočíslo" není efektivní, protože nevíme, jak ho provést v konečném čase.

---

## Algoritmická složitost

Nestačí, aby algoritmus byl správný – záleží i na tom, jak **rychle** a s kolika **zdroji** pracuje.

### Časová složitost

Vyjadřuje, jak počet operací roste s velikostí vstupu *n*. Zapisuje se notací **O (velké O)**:

| Složitost | Název | Příklad |
|-----------|-------|---------|
| O(1) | Konstantní | Přístup k prvku pole podle indexu |
| O(log n) | Logaritmická | Binární vyhledávání |
| O(n) | Lineární | Průchod celým polem |
| O(n log n) | Linearitmická | Merge sort, heap sort |
| O(n²) | Kvadratická | Bubble sort, porovnání všech dvojic |
| O(2ⁿ) | Exponenciální | Procházení všech podmnožin |

> Prakticky: O(n²) je při n=10 000 problém (10⁸ operací), O(n log n) zvládne n=10⁶ bez potíží.

### Prostorová složitost

Kolik paměti algoritmus potřebuje v závislosti na vstupu. Rekurzivní algoritmy mohou mít velkou prostorovou složitost (zásobník volání).

---

## Strukturované algoritmy

**Strukturované programování** (Dijkstra, 1968) je principem, že každý algoritmus lze sestavit pouze ze tří základních řídících struktur – bez `goto`:

### 1. Sekvence (posloupnost)

Instrukce se provádějí jedna za druhou v pořadí zápisu:

```
krok 1
krok 2
krok 3
```

### 2. Větvení (selekce / podmínka)

Na základě podmínky se vybere jedna z alternativních větví:

```
if podmínka:
    větev A
else:
    větev B
```

### 3. Opakování (iterace / cyklus)

Blok instrukcí se opakuje, dokud platí podmínka:

```
while podmínka:
    opakovaný blok
```

**Teorém o strukturovaném programování** (Böhm, Jacopini, 1966) dokazuje, že tyto tři struktury jsou dostačující – jakýkoli algoritmus lze zapsat bez `goto`. Výsledný kód je čitelnější, testovatelný a udržovatelný.

---

## Vývojové diagramy (Flowcharts)

**Vývojový diagram** (flowchart) je grafický zápis algoritmu pomocí standardizovaných symbolů. Umožňuje vizualizovat tok řízení bez nutnosti znát konkrétní programovací jazyk.

### Standardní symboly

| Symbol | Tvar | Význam |
|--------|------|--------|
| **Terminál** | Zaoblený obdélník (ovál) | Start / Konec algoritmu |
| **Proces** | Obdélník | Výpočet, přiřazení (a = b + c) |
| **Rozhodnutí** | Kosočtverec | Podmínka (ano/ne) |
| **Vstup/výstup** | Rovnoběžník | Načtení vstupu / tisk výstupu |
| **Konektor** | Kroužek s písmenem | Propojení vzdálených částí diagramu |
| **Šipka** | Linie se šipkou | Tok řízení |

### Příklad: vývojový diagram pro výpočet faktoriálu

```
       ┌──────────┐
       │  START   │
       └────┬─────┘
            │
       ┌────▼─────┐
       │  n = ?   │  (vstup)
       └────┬─────┘
            │
       ┌────▼─────┐
       │ výsl = 1 │  (inicializace)
       │  i = 1   │
       └────┬─────┘
            │
       ┌────▼──────┐    NE
       │  i <= n ? ├──────────→ tisk výsl → KONEC
       └────┬──────┘
            │ ANO
       ┌────▼──────────┐
       │ výsl = výsl*i │
       │    i = i + 1  │
       └────┬──────────┘
            │
            └──────────→ (zpět na podmínku)
```

### Strukturované diagramy (Nassi-Shneiderman / Chapin charts)

Alternativou k flowchartu jsou **strukturogramy** (Nassi-Shneiderman diagramy) – místo šipek používají vnořené obdélníky. Reflektují strukturu kódu přesněji, nemohou vyjádřit skok `goto`.

```
┌──────────────────────────────────┐
│ výsl = 1; i = 1                  │
├──────────────────────────────────┤
│ DOKUD i <= n                     │
│ ┌────────────────────────────┐   │
│ │ výsl = výsl * i            │   │
│ │ i = i + 1                  │   │
│ └────────────────────────────┘   │
├──────────────────────────────────┤
│ Tisk výsl                        │
└──────────────────────────────────┘
```

---

## Příklady základních algoritmů

### Euklidův algoritmus (GCD)

Největší společný dělitel dvou čísel – jeden z nejstarších algoritmů (~ 300 př. n. l.):

```
Vstup: a, b (přirozená čísla)
Dokud b ≠ 0:
    r = a mod b
    a = b
    b = r
Výstup: a (= GCD)
```

Příklad: GCD(48, 18) → 48 mod 18 = 12 → GCD(18,12) → 18 mod 12 = 6 → GCD(12,6) → 12 mod 6 = 0 → **výsledek 6**.

### Binární vyhledávání

Hledání hodnoty v **seřazeném** poli v O(log n):

```
levo = 0, pravo = n-1
Dokud levo <= pravo:
    střed = (levo + pravo) / 2
    Jestliže pole[střed] == hledaný: NALEZENO
    Jestliže pole[střed] < hledaný: levo = střed + 1
    Jinak: pravo = střed - 1
NENALEZENO
```

Při 1 000 000 prvcích stačí max. 20 porovnání (log₂(10⁶) ≈ 20).

---

## Zásady dobrého algoritmu

- **Korektnost** – produkuje správné výsledky pro všechny přípustné vstupy (včetně hraničních).
- **Eficience** – přiměřená časová i prostorová složitost.
- **Čitelnost** – jiný člověk (nebo autor za rok) algoritmus pochopí.
- **Robustnost** – ošetřuje chybné vstupy (dělení nulou, prázdný vstup…).
- **Obecnost** – řeší třídu problémů, ne jen jeden konkrétní případ.
