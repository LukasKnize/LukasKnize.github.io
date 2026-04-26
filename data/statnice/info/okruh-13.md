# Okruh 13 – Modulární programování, funkce, rekurze, paměť, ukazatele

## Modulární programování

Představte si, že celý rozsáhlý program napíšete jako jeden velký soubor se stovkami řádků. Najít chybu je noční můra, stejný kód opisujete na třiceti místech a každá úprava hrozí rozbitím něčeho jiného. **Modulární programování** tento problém řeší rozdělením programu na samostatné, znovupoužitelné celky – **moduly** (v C soubory `.c`/`.h`, v Pythonu `.py` moduly, v Javě třídy).

### Výhody modularity

- **Znovupoužitelnost** – funkci `vypocitej_dan()` napíšete jednou a voláte kdekoliv.
- **Čitelnost** – funkce s dobrým jménem je samopopisující dokumentace.
- **Testovatelnost** – každou funkci lze testovat izolovaně.
- **Týmová práce** – různé moduly může vyvíjet různé lidi paralelně.
- **Udržovatelnost** – oprava chyby na jednom místě se projeví všude.

---

## Funkce

**Funkce** (v jiných jazycích metoda, procedura, podprogram) je pojmenovaný blok kódu, který provádí specifický úkol. Přijímá **vstupní parametry** a vrací **výsledek**.

### Anatomie funkce (C)

```c
// Deklarace (hlavička) – říká překladači, že funkce existuje
int secti(int a, int b);

// Definice – samotná implementace
int secti(int a, int b) {   // ← parametry (formální)
    int vysledek = a + b;
    return vysledek;         // ← návratová hodnota
}

// Volání – použití funkce
int soucet = secti(3, 5);   // ← argumenty (skutečné), soucet = 8
```

### Parametry funkcí

**Parametry** jsou vstupní hodnoty funkce. Záleží na tom, jak jsou předávány:

#### Předávání hodnotou (call by value)
Funkce dostane **kopii** hodnoty. Změna uvnitř funkce se neprojeví venku:

```c
void zdvoj(int x) {
    x = x * 2;    // mění jen lokální kopii
}

int main() {
    int a = 5;
    zdvoj(a);
    printf("%d\n", a);  // stále 5 – funkce nezměnila originál
}
```

#### Předávání odkazem (call by reference)
Funkce dostane **adresu** proměnné (ukazatel) a může změnit originál:

```c
void zdvoj(int *x) {      // přijímá ukazatel
    *x = *x * 2;          // dereference – mění hodnotu na adrese
}

int main() {
    int a = 5;
    zdvoj(&a);            // předáme adresu proměnné a
    printf("%d\n", a);   // 10 – funkce změnila originál
}
```

V Pythonu, Javě pro primitivní typy se předává hodnotou; pro objekty se předává reference (ale nejde o stejné reference jako v C).

### Návratová hodnota

- `return` ukončí funkci a předá výsledek volajícímu.
- Funkce bez návratové hodnoty má typ `void` (C) nebo nevrací nic (Python `None`).
- Funkce může vracet jen **jednu** hodnotu – pro více výsledků se vrací struktura, pole nebo se předají ukazatele.

```c
// Funkce vracející více hodnot přes ukazatele (C)
void min_max(int *pole, int n, int *min, int *max) {
    *min = *max = pole[0];
    for (int i = 1; i < n; i++) {
        if (pole[i] < *min) *min = pole[i];
        if (pole[i] > *max) *max = pole[i];
    }
}
```

---

## Rekurze

**Rekurze** je technika, kdy funkce **volá sama sebe**. Je to přirozený způsob řešení problémů, které mají rekurzivní strukturu – strom, fraktál, matematická definice faktoriálu.

### Dvě povinné části každé rekurze

1. **Základní případ (base case)** – podmínka, která rekurzi zastaví. Bez ní nastane nekonečná rekurze → přetečení zásobníku (stack overflow).
2. **Rekurzivní případ** – volání sama sebe s menším/jednodušším vstupem, který se blíží základnímu případu.

### Příklad: faktoriál

Matematická definice: `n! = n × (n-1)!`, `0! = 1`

```c
int faktorial(int n) {
    if (n == 0) return 1;              // základní případ
    return n * faktorial(n - 1);      // rekurzivní případ
}
```

Průběh `faktorial(4)`:
```
faktorial(4)
  = 4 * faktorial(3)
        = 3 * faktorial(2)
              = 2 * faktorial(1)
                    = 1 * faktorial(0)
                          = 1           ← základní případ
                    = 1 * 1 = 1
              = 2 * 1 = 2
        = 3 * 2 = 6
  = 4 * 6 = 24
```

### Příklad: Fibonacciho čísla

```c
int fib(int n) {
    if (n <= 1) return n;                    // fib(0)=0, fib(1)=1
    return fib(n - 1) + fib(n - 2);
}
```

Pozor: tato implementace má exponenciální složitost O(2ⁿ) – `fib(50)` by trvalo věčnost. Řeší se **memoizací** (cachování výsledků) nebo iterativním přístupem.

### Zásobník volání (call stack)

Každé volání funkce vytvoří na zásobníku **rámec** (stack frame) s lokálními proměnnými a adresou návratu. Při rekurzi se rámce hromadí:

```
fib(4)
  fib(3)
    fib(2)
      fib(1) ← base case, vrátí 1
      fib(0) ← base case, vrátí 0
    vrátí 1
    fib(1) ← base case, vrátí 1
  vrátí 2
  fib(2)
    …
```

**Stack overflow** nastane, pokud je rekurze příliš hluboká – zásobník má omezenou velikost (typicky 1–8 MB).

### Tail rekurze

**Tail-recursive** funkce volá sebe jako **poslední operaci** – překladač ji může optimalizovat na iteraci (žádné hromadění rámců):

```c
// Tail-recursive faktoriál (acc = akumulátor)
int fakt_tail(int n, int acc) {
    if (n == 0) return acc;
    return fakt_tail(n - 1, n * acc);   // volání je poslední operace
}
int faktorial(int n) { return fakt_tail(n, 1); }
```

---

## Proměnné a jejich reprezentace v paměti

### Typy a velikosti

Každá proměnná je oblast paměti s daným typem. Typ určuje:
- **Velikost** v bajtech (kolik paměti zabere).
- **Interpretaci** bitů (celé číslo, desetinné číslo, znak…).

| Typ (C) | Velikost | Rozsah |
|---------|---------|--------|
| `char` | 1 B | -128 až 127 (nebo 0–255) |
| `short` | 2 B | -32 768 až 32 767 |
| `int` | 4 B | ~-2,1 mld. až ~2,1 mld. |
| `long long` | 8 B | ~-9,2 × 10¹⁸ až ~9,2 × 10¹⁸ |
| `float` | 4 B | ~±3,4 × 10³⁸, 7 platných číslic |
| `double` | 8 B | ~±1,8 × 10³⁰⁸, 15 platných číslic |
| `pointer` | 4 nebo 8 B | adresa v paměti (32-bit / 64-bit) |

### Rozsahy paměti (memory layout)

Paměť procesu je rozdělena do několika oblastí:

```
Vyšší adresy
┌─────────────────────────────┐
│         Stack               │ ← lokální proměnné, parametry funkcí
│         (roste dolů ↓)      │   automaticky alokováno/uvolněno
├─────────────────────────────┤
│           ↕                 │ (prázdné místo)
├─────────────────────────────┤
│         Heap                │ ← dynamická alokace (malloc/new)
│         (roste nahoru ↑)    │   vývojář řídí alokaci/uvolnění
├─────────────────────────────┤
│    BSS (neinicializovaná)   │ ← globální/statické proměnné (= 0)
├─────────────────────────────┤
│    Data (inicializovaná)    │ ← globální/statické proměnné (≠ 0)
├─────────────────────────────┤
│    Text (kód programu)      │ ← strojové instrukce (read-only)
└─────────────────────────────┘
Nižší adresy
```

### Scope (oblast platnosti) proměnných

- **Lokální proměnná** – platí jen uvnitř funkce/bloku; žije na zásobníku.
- **Globální proměnná** – platí v celém souboru; žije v datové sekci.
- **Statická lokální proměnná** (`static` v C) – platí jen uvnitř funkce, ale žije v datové sekci (nepomíjí se mezi voláními).

---

## Ukazatele (Pointery)

**Ukazatel** je proměnná, jejíž hodnotou je **adresa v paměti**. Namísto samotné hodnoty uchovává, *kde* v paměti se hodnota nachází.

### Základní operace

```c
int cislo = 42;         // proměnná
int *ptr = &cislo;      // ptr uchovává adresu proměnné cislo
                        // operátor & = "adresa-of"

printf("%d\n", cislo);  // 42  – hodnota proměnné
printf("%p\n", ptr);    // 0x7ffd... – adresa (hexadecimálně)
printf("%d\n", *ptr);   // 42  – dereference: hodnota na adrese
                        // operátor * = "hodnota-na-adrese"

*ptr = 100;             // změna hodnoty přes ukazatel
printf("%d\n", cislo);  // 100 – cislo se změnilo!
```

### Proč jsou ukazatele důležité?

1. **Předávání odkazem** – funkce může měnit proměnné volajícího.
2. **Dynamická alokace paměti** – `malloc` vrací ukazatel na nově alokovanou paměť na haldě.
3. **Pole** – název pole je vlastně ukazatel na první prvek.
4. **Datové struktury** – spojové seznamy, stromy, grafy jsou tvořeny uzly propojenými ukazateli.

### Dynamická alokace (C)

```c
// Alokace pole 10 intů na haldě
int *pole = malloc(10 * sizeof(int));
if (pole == NULL) { /* chyba alokace */ }

pole[0] = 42;       // přístup jako k normálnímu poli
*(pole + 1) = 100;  // ekvivalentní zápispy

free(pole);         // NUTNÉ uvolnit! Jinak memory leak
pole = NULL;        // dobrý zvyk: zruš ukazatel po free
```

### Časté chyby s ukazateli

| Chyba | Popis | Důsledek |
|-------|-------|---------|
| **NULL dereference** | `*ptr` kde `ptr == NULL` | Segmentation fault |
| **Dangling pointer** | Použití ukazatele po `free()` | Undefined behavior |
| **Memory leak** | Zapomenutý `free()` | Postupné plýtvání pamětí |
| **Buffer overflow** | Zápis za konec pole | Přepsání jiných dat, bezpečnostní zranitelnost |
| **Double free** | `free()` dvakrát | Poškození alokátoru |

### Ukazatele vs. reference (C++)

C++ přidává **reference** (`int &ref = cislo;`) – jsou podobné ukazatelům, ale nemohou být NULL, nelze je přesměrovat a dereferenci provádí automaticky (syntakticky čistší).

Moderní C++ preferuje **smart pointers** (`unique_ptr`, `shared_ptr`) – automaticky uvolní paměť při zničení objektu (RAII princip), eliminují memory leaky.
