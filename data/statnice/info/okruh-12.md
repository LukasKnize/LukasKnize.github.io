# Okruh 12 – Řídící struktury: podmínky, větvení switch, cykly while a do-while

## Řídící struktury

**Řídící struktury** určují pořadí, v jakém se instrukce programu provádějí. Bez nich by program byl jen lineární seznam příkazů – stejný výsledek pokaždé, bez ohledu na vstup. Řídící struktury přidávají rozhodování a opakování.

Existují tři základní druhy (viz Okruh 11):
1. **Sekvence** – příkazy za sebou
2. **Větvení** – rozhodnutí na základě podmínky
3. **Iterace** – opakování bloku kódu

---

## Podmínky: if / else if / else

### Základní if

Blok kódu se provede **jen tehdy, když podmínka platí**:

```c
if (podmínka) {
    // provede se, pokud podmínka == true
}
```

Příklad:
```c
int vek = 20;
if (vek >= 18) {
    printf("Smí volit.\n");
}
```

### if–else

Větev `else` se provede, **když podmínka neplatí**:

```c
if (teplota > 37.5) {
    printf("Horečka!\n");
} else {
    printf("Teplota v normě.\n");
}
```

### if–else if–else (vícenásobné větvení)

Testují se podmínky jedna po druhé. Jakmile jedna platí, provede se odpovídající blok a zbytek se přeskočí:

```c
int skore = 75;

if (skore >= 90) {
    printf("Výborně (A)\n");
} else if (skore >= 75) {
    printf("Chvalitebně (B)\n");    // ← toto se provede
} else if (skore >= 60) {
    printf("Dobře (C)\n");
} else {
    printf("Nevyhověl (F)\n");
}
```

> **Pořadí podmínek záleží!** Podmínky se testují shora dolů – první platná vyhraje. Specifičtější podmínky pište nahoře, obecné níže.

### Ternární operátor

Zkrácený zápis jednoduché podmínky:
```c
int max = (a > b) ? a : b;
// Čteme: "je-li a > b, pak max = a, jinak max = b"
```

### Vnořené podmínky

Podmínky lze libovolně vnořovat:
```c
if (prihlaseny) {
    if (je_admin) {
        // admin sekce
    } else {
        // běžný uživatel
    }
} else {
    // nepřihlášen
}
```

Příliš hluboké vnořování snižuje čitelnost – preferujte **early return** nebo přepis podmínek.

---

## Větvení switch

`switch` je elegantní alternativa k řadě `if–else if`, když porovnáváme **jednu proměnnou s více konkrétními hodnotami**.

### Syntaxe

```c
switch (výraz) {
    case hodnota1:
        // blok pro hodnota1
        break;
    case hodnota2:
        // blok pro hodnota2
        break;
    case hodnota3:
    case hodnota4:
        // sdílený blok pro hodnota3 i hodnota4
        break;
    default:
        // žádná case nesedí
}
```

### Příklad: dny v týdnu

```c
int den = 3;  // 1 = pondělí, …, 7 = neděle

switch (den) {
    case 1:
        printf("Pondělí\n"); break;
    case 2:
        printf("Úterý\n"); break;
    case 3:
        printf("Středa\n"); break;    // ← provede se toto
    case 4:
        printf("Čtvrtek\n"); break;
    case 5:
        printf("Pátek\n"); break;
    case 6:
    case 7:
        printf("Víkend!\n"); break;   // středa i neděle sdílejí
    default:
        printf("Neplatný den\n");
}
```

### Fall-through

Pokud vynecháte `break`, provádění **„propadne"** do další case. To je někdy záměrné (sdílení kódu), ale nejčastěji jde o chybu:

```c
switch (x) {
    case 1:
        printf("jedna\n");
        // CHYBÍ break → propadne do case 2!
    case 2:
        printf("dvě\n");
        break;
}
// Pro x=1 se vytiskne: "jedna" i "dvě"
```

### Omezení switch

- V jazyce C/C++/Java výraz musí být **celočíselný nebo znakový** typ (int, char, enum) – ne float ani řetězec.
- Python `switch` nemá (místo toho `match` od verze 3.10 nebo slovník funkcí).
- Java (od 14) a C# mají modernější `switch expression` s lepší syntaxí.

### switch vs. if–else if – kdy co

| switch | if–else if |
|--------|-----------|
| Porovnání jedné hodnoty s konstantami | Libovolné podmínky |
| Přehledný, rychlý (jump table) | Flexibilnější |
| Jen rovnost (`==`) | Relace (<, >, …), rozsahy, logické výrazy |

---

## Cyklus while

`while` opakuje blok kódu, **dokud platí podmínka**. Podmínka se testuje **před** každou iterací – pokud podmínka neplatí hned na začátku, blok se neprovede ani jednou.

### Syntaxe

```c
while (podmínka) {
    // tělo cyklu
}
```

### Příklad: součet čísel 1 až n

```c
int n = 10, i = 1, součet = 0;

while (i <= n) {
    součet += i;   // součet = součet + i
    i++;           // i = i + 1
}
printf("Součet = %d\n", součet);  // 55
```

### Průběh

```
i=1: 1<=10? ANO → součet=1,  i=2
i=2: 2<=10? ANO → součet=3,  i=3
…
i=10: 10<=10? ANO → součet=55, i=11
i=11: 11<=10? NE → konec
```

### Nekonečný cyklus

Záměrný nekonečný cyklus se zapíše `while (true)` nebo `while (1)`. Musí mít uvnitř podmínku s `break`:

```c
while (true) {
    char cmd = nacti_prikaz();
    if (cmd == 'q') break;   // výjimka z cyklu
    zpracuj(cmd);
}
```

### Typické chyby s while

```c
// Off-by-one error: má se provést 10× nebo 11×?
int i = 0;
while (i < 10) { ...; i++; }   // 10 iterací (i: 0..9) ← správně
while (i <= 10) { ...; i++; }  // 11 iterací (i: 0..10) ← pozor

// Zapomenutý inkrement → nekonečný cyklus
while (i < 10) {
    printf("%d\n", i);
    // CHYBÍ i++ → navždy tiskne 0
}
```

---

## Cyklus do-while

`do-while` je varianta cyklu, kde se podmínka testuje **po** každé iteraci. Tělo cyklu se tedy provede **vždy aspoň jednou**.

### Syntaxe

```c
do {
    // tělo cyklu
} while (podmínka);
```

> Pozor na **středník** za závorkou podmínky – na rozdíl od `while` je zde povinný!

### Příklad: validace uživatelského vstupu

Klasické použití `do-while`: uživatel musí zadat číslo aspoň jednou, opakujeme dokud nezadá platné:

```c
int cislo;
do {
    printf("Zadej číslo 1–10: ");
    scanf("%d", &cislo);
} while (cislo < 1 || cislo > 10);

printf("Zadal jsi: %d\n", cislo);
```

Logika: ptáme se aspoň jednou, pak kontrolujeme platnost.

### while vs. do-while

| | while | do-while |
|-|-------|---------|
| Testování podmínky | Před tělem | Za tělem |
| Min. počet provedení | 0 (může se neprovést) | 1 (vždy aspoň jednou) |
| Typické použití | Opakování podmíněné od začátku | Vstup od uživatele, menu |

### Přepis do-while na while

Každý `do-while` lze přepsat na `while` – jen se první iterace provede nepodmíněně:

```c
// do-while:
do { tělo; } while (podmínka);

// Ekvivalentní while:
tělo;                    // první provedení vždy
while (podmínka) { tělo; }
```

---

## Cyklus for (pro srovnání)

`for` je syntaktický cukr pro `while` – kompaktní zápis inicializace, podmínky a inkrementu na jednom řádku:

```c
for (inicializace; podmínka; inkrement) {
    tělo;
}

// Je ekvivalentní:
inicializace;
while (podmínka) {
    tělo;
    inkrement;
}
```

Příklad:
```c
for (int i = 0; i < 10; i++) {
    printf("%d\n", i);
}
```

`for` se preferuje, když **předem víme počet iterací**. `while` se používá, když počet iterací závisí na podmínce, která se mění uvnitř cyklu.

---

## Řídicí příkazy uvnitř cyklů

| Příkaz | Efekt |
|--------|-------|
| `break` | Okamžitě ukončí cyklus (nebo switch) |
| `continue` | Přeskočí zbytek aktuální iterace, přejde na další |
| `return` | Ukončí celou funkci (a tím i cyklus) |
| `goto` | Skočí na označené místo (nedoporučuje se!) |

```c
for (int i = 0; i < 10; i++) {
    if (i == 3) continue;  // přeskočí i=3
    if (i == 7) break;     // skončí při i=7
    printf("%d\n", i);     // vytiskne: 0 1 2 4 5 6
}
```
