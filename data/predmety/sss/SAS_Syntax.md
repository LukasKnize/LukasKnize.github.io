# 📊 SAS Studio – Přehled kódů pro písemku

> Tento soubor shrnuje základní procedury a datové kroky používané v SAS Studio.  
> Kódy jsou rozděleny do tematických sekcí s popisem, co který kód dělá.

---

## Obsah

1. [Základní zobrazení dat](#1-základní-zobrazení-dat)
2. [Frekvenční tabulky a překódování proměnných](#2-frekvenční-tabulky-a-překódování-proměnných)
3. [Řazení a vizualizace kategorických proměnných](#3-řazení-a-vizualizace-kategorických-proměnných)
4. [Popisná statistika číselných proměnných](#4-popisná-statistika-číselných-proměnných)
5. [Kategorizace číselné proměnné a výpočet nové proměnné](#5-kategorizace-číselné-proměnné-a-výpočet-nové-proměnné)
6. [Korelační analýza a jednoduchá lineární regrese](#6-korelační-analýza-a-jednoduchá-lineární-regrese)
7. [Vícenásobná lineární regrese a diagnostika](#7-vícenásobná-lineární-regrese-a-diagnostika)
8. [Analýza časových řad](#8-analýza-časových-řad)

---

## 1. Základní zobrazení dat

### Zobrazení celé tabulky

```sas
proc print data=work.LIDE;
run;
```

> **Co dělá:** Vypíše celý dataset `LIDE` z knihovny `work` do výstupního okna.

### Zobrazení prvních N řádků (limit)

```sas
proc print data=work.LIDE (obs=10);
run;
```

> **Co dělá:** Vypíše jen prvních 10 pozorování. Možnost `obs=` omezí počet zobrazených řádků.  
> **Tip:** Užitečné pro velké datasety, kdy nechcete zobrazit vše.

---

## 2. Frekvenční tabulky a překódování proměnných

### Frekvenční (četnostní) tabulka

```sas
proc freq data=work.lide;
    tables vzdelani;
run;
```

> **Co dělá:** Zobrazí tabulku četností pro proměnnou `vzdelani` – kolik lidí má jakou hodnotu, v procentech i absolutně.

### Překódování proměnné (vytvoření nové kategoriální proměnné)

```sas
data work.LIDE;
    set work.LIDE;
    length EduCat $5;                        /* Definice délky textové proměnné */
    if vzdelani="Z"   then EduCat="1_Z";
    else if vzdelani="S"   then EduCat="2_S";
    else if vzdelani="VOS" then EduCat="3_VOS";
    else if vzdelani="VS"  then EduCat="4_VS";
    else EduCat = "really silly";            /* Zachycení neočekávaných hodnot */
proc print;
run;
```

> **Co dělá:** Načte existující dataset, přidá novou textovou proměnnou `EduCat` s prefixem čísla (pro správné řazení).  
> **Proč čísla v prefixu?** Aby se kategorie seřadily správně (1_Z < 2_S < ...).

### Ověření překódování frekvenční tabulkou

```sas
proc freq data=work.lide;
    tables EduCat;
run;
```

> **Co dělá:** Ověří, že překódování proběhlo správně – zobrazí nové kategorie.

---

## 3. Řazení a vizualizace kategorických proměnných

### Seřazení datasetu

```sas
proc sort data=work.LIDE out=sort;
    by descending EduCat;
run;
```

> **Co dělá:** Seřadí dataset `LIDE` sestupně podle `EduCat` a výsledek uloží do nového datasetu `sort`.  
> **`out=`** – výstupní dataset (původní data se nezmění).  
> **`descending`** – sestupné řazení (bez toho je řazení vzestupné).

### Frekvenční tabulka v pořadí dat + sloupcový graf

```sas
proc freq data=work.sort order=data;
    tables EduCat / nocum plots=(freqplot);
run;
```

> **Co dělá:**
>
> - `order=data` – zachová pořadí hodnot tak, jak jsou v datasetu (tedy naše seřazené pořadí)
> - `nocum` – potlačí zobrazení kumulativních četností
> - `plots=(freqplot)` – zobrazí sloupcový graf četností

---

## 4. Popisná statistika číselných proměnných

### Krabicový graf (boxplot)

```sas
proc sgplot data=work.LIDE;
    VBOX vyska;
    yaxis grid;
run;
```

> **Co dělá:** Zobrazí boxplot proměnné `vyska` – medián, kvartily, odlehlé hodnoty.

### Histogram s křivkou hustoty

```sas
proc sgplot data=work.LIDE;
    histogram vyska;
    yaxis grid;
    density vyska;
run;
```

> **Co dělá:** Histogram četností + překrytá křivka hustoty pravděpodobnosti.  
> **`density`** – přidá odhadovanou křivku normálního rozdělení.

### Popisná statistika (proc means)

```sas
proc means data=work.LIDE N mean stderr clm median var std min max range qrange;
    var prijem;
run;
```

> **Co dělá:** Vypočítá popisné statistiky pro proměnnou `prijem`.

| Statistika    | Popis                              |
| ------------- | ---------------------------------- |
| `N`           | Počet pozorování                   |
| `mean`        | Průměr                             |
| `stderr`      | Standardní chyba průměru           |
| `clm`         | 95% interval spolehlivosti průměru |
| `median`      | Medián                             |
| `var`         | Rozptyl                            |
| `std`         | Směrodatná odchylka                |
| `min` / `max` | Minimum / Maximum                  |
| `range`       | Rozsah (max − min)                 |
| `qrange`      | Mezikvartilové rozpětí (Q3 − Q1)   |

---

## 5. Kategorizace číselné proměnné a výpočet nové proměnné

### Kategorizace příjmu

```sas
data work.LIDE;
    set work.LIDE;
    length PrijemCat $20;
    if prijem < 150000      then PrijemCat="1_Broke X3";
    else if prijem < 250000 then PrijemCat="2_Stredni";
    else                         PrijemCat="3_Vysoky";
proc print;
run;
```

> **Co dělá:** Rozdělí číselnou proměnnou `prijem` do tří kategorií.  
> **Pozor:** Podmínky se vyhodnocují postupně – `else if` zaručí správné pásmo.

### Popisná statistika pro podskupinu (filtr pomocí WHERE)

```sas
proc means data=work.LIDE;
    var prijem;
    where vzdelani="Z";
run;
```

> **Co dělá:** Spočítá statistiky příjmu pouze pro osoby se základním vzděláním.

### Výpočet nové proměnné (disponibilní příjem DMP)

```sas
data work.lide;
    set work.lide;
    DMP = prijem - (vydaje/12) - najem;
proc print;
run;
```

> **Co dělá:** Vytvoří novou proměnnou `DMP` (disponibilní měsíční příjem) jako aritmetický výraz.  
> **`vydaje/12`** – roční výdaje převedené na měsíční.

---

## 6. Korelační analýza a jednoduchá lineární regrese

### Zadání dat přímo v kódu (datalines)

```sas
data skore;
    input Prubezny Konecny;
datalines;
64 63
64 68
...
;
```

> **Co dělá:** Vytvoří dataset přímo ze zadaných hodnot, bez potřeby externího souboru.

### Přiřazení ID pozorováním

```sas
data skore;
    set skore;
    ID = _N_;
run;
```

> **Co dělá:** Přidá novou proměnnou `ID` s automatickým číslem řádku (`_N_` je systémová proměnná SAS).

### Bodový graf (scatter plot)

```sas
ods graphics / reset width=6.4in height=4.8in imagemap;
proc sgplot data=WORK.SKORE;
    scatter x=Prubezny y=Konecny / datalabel=ID markerattrs=(symbol=diamondfilled)
        datalabelattrs=(size=10);
    xaxis grid;
    yaxis grid;
run;
ods graphics / reset;
```

> **Co dělá:** Zobrazí bodový graf se štítky ID u každého bodu.  
> **`datalabel=ID`** – zobrazí hodnotu proměnné ID u každého bodu.  
> **`markerattrs`** – nastavení vzhledu bodů.

### Korelační analýza – Pearson a Spearman

```sas
proc corr data=work.skore pearson spearman cov plots=none;
    var Konecny;
    with Prubezny;
run;
```

> **Co dělá:** Spočítá korelační koeficienty mezi `Prubezny` a `Konecny`.

| Parametr   | Popis                                                            |
| ---------- | ---------------------------------------------------------------- |
| `pearson`  | Pearsonův koeficient (lineární závislost, předpokládá normalitu) |
| `spearman` | Spearmanův koeficient (pořadový, neparametrický)                 |
| `cov`      | Zobrazí i kovarianční matici                                     |
| `nosimple` | Potlačí základní statistiky                                      |
| `noprob`   | Potlačí p-hodnoty                                                |

### Jednoduchá lineární regrese

```sas
proc reg data=WORK.SKORE alpha=0.05 plots(only)=(diagnostics residuals fitplot observedbypredicted);
    model Konecny = Prubezny;
run;
```

> **Co dělá:** Odhadne lineární regresní model `Konecny = β₀ + β₁·Prubezny + ε`.  
> **`alpha=0.05`** – hladina významnosti 5 %.  
> **`plots(...)`** – zobrazí diagnostické grafy (rezidua, fitplot, apod.).

### Regrese s diagnostikou

```sas
proc reg data=work.skore;
    model Konecny = Prubezny / r spec influence;
run;
```

> **`r`** – vypíše rezidua  
> **`spec`** – test specifikace (homoskedasticita)  
> **`influence`** – vlivové statistiky (Cook's D, leverage, apod.)

### Vymazání odlehlého pozorování

```sas
data skore2;
    set skore;
    where ID not in (11);
run;
```

> **Co dělá:** Vytvoří nový dataset bez pozorování s ID=11 (odlehlá hodnota).

### Predikce pro novou hodnotu x = 85

```sas
/* Nová tabulka s hodnotou x */
data work.predikce;
    input Prubezny;
    datalines;
    85
    ;
run;

/* Sloučení s původními daty */
data work.combine;
    set work.skore2 work.predikce;
    drop Predicted;
proc print;
run;

/* Výpočet predikce */
proc reg data=work.combine;
    model Konecny = Prubezny;
    output out=work.skore2 predicted=predicted;
proc print;
run;
```

> **Co dělá:** Přidá nový řádek s x=85 (bez y), přiřadí ho k datům a spustí regresi – SAS automaticky dopočítá predikovanou hodnotu i pro nový řádek.

---

## 7. Vícenásobná lineární regrese a diagnostika

### Přidání popisků proměnných (labels)

```sas
data work.zemedelska;
    set work.zemedelska;
    label x1="zamestnanci" x2="traktory" x3="material" x4="jecmen" y="produkce";
run;
```

> **Co dělá:** Přiřadí čitelné názvy proměnným – zobrazují se místo x1, x2... ve výstupech.

### Multikolinearita – korelační matice prediktorů

```sas
proc corr data=work.zemedelska pearson nosimple noprob;
    var x1 x2 x3 x4;
run;
```

> **Co dělá:** Zobrazí vzájemné korelace mezi všemi prediktory.  
> **Pravidlo:** Pokud jsou dva prediktory silně korelovány (|r| > 0,9), hrozí multikolinearita → jeden vyřadíme.

### Vícenásobný lineární regresní model (VLRM)

```sas
proc reg data=work.zemedelska plots=none;
    model y = x1 x3 x4;
run;
```

> **Co dělá:** Odhadne model se třemi prediktory. `plots=none` potlačí grafický výstup.

### Výpočet reziduí a predikovaných hodnot

```sas
proc reg data=work.zemedelska noprint;
    model y = x3 x4;
    output out=work.zemedelska predicted=pred residual=res;
proc print;
run;
```

> **Co dělá:** Spustí regresi a uloží predikované hodnoty (`pred`) a rezidua (`res`) zpět do datasetu.  
> **`noprint`** – potlačí tabulkový výstup.

### Test normality reziduí

```sas
proc univariate data=work.zemedelska normal;
    histogram res / normal;
    qqplot res / normal(mu=est sigma=est);
run;
```

> **Co dělá:** Otestuje, zda rezidua mají normální rozdělení.
>
> - **`normal`** – přidá testy normality (Shapiro-Wilk, Kolmogorov-Smirnov)
> - **`histogram`** – histogram s překrytou normální křivkou
> - **`qqplot`** – Q-Q graf (body by měly ležet na přímce)

### Test homoskedasticity a VIF

```sas
proc reg data=work.zemedelska;
    model y = x3 x4 / r vif spec;
proc print;
run;
```

> **`vif`** – Variance Inflation Factor (VIF > 10 → problém s multikolinearitou)  
> **`spec`** – White test homoskedasticity (p > 0,05 → homoskedasticita OK)

---

## 8. Analýza časových řad

### Spojnicový graf časové řady

```sas
proc sgplot data=work.psenice;
    series x=t y=vynos;
    xaxis type=discrete grid;
    yaxis grid;
run;
```

> **Co dělá:** Zobrazí průběh časové řady `vynos` v čase `t`.  
> **`type=discrete`** – osa x je diskrétní (čas, roky, měsíce...).

### Regresní trend (lineární)

```sas
proc reg data=work.psenice plots(only)=(fitplot);
    model vynos = t;
    output out=psenice2 p=pred_vynos;
proc print data=work.psenice2;
run;
```

> **Co dělá:** Odhadne lineární trend a uloží predikované (trendové) hodnoty.  
> **`p=pred_vynos`** – nová proměnná s predikovanými hodnotami.

### Pseudo-prognóza a relativní chyba odhadu (REF)

```sas
proc reg data=work.psenice noprint;
    model vynos_10 = t;
    output out=pseudo_forecast p=pred_vynos_10;
run;

data work.pseudo_forecast;
    set work.pseudo_forecast;
    /* REF jen pro řádky, kde skutečná hodnota chybí */
    if vynos_10 = . then REF = abs((pred_vynos_10 - vynos) / vynos);
    else REF = .;
proc print data=work.pseudo_forecast;
run;
```

> **Co dělá:** Odhadne model bez posledních 10 hodnot a pomocí REF (relativní chyba) porovná predikci se skutečností.  
> **REF = |predikce − skutečnost| / skutečnost** – čím blíže 0, tím lepší prognóza.

### Analýza periodické časové řady (dekompozice)

#### Trendová složka

```sas
proc reg data=work.park plots=none;
    model navstevnost = t;
    output out=work.park p=pred;
run;
```

> Odhadne lineární trend návštěvnosti.

#### Výpočet indexu sezónnosti

```sas
data work.park;
    set work.park;
    index = navstevnost / pred;
run;

proc means data=work.park mean;
    var index;
    class mesic;
    output out=work.sezonnost mean=SI;
run;
```

> **Co dělá:** Pro každý měsíc vypočítá průměrný sezónní index SI = skutečnost / trend.  
> SI > 1 → nadprůměrná sezóna, SI < 1 → podprůměrná sezóna.

#### Čištění výstupní tabulky

```sas
data work.sezonnost;
    set work.sezonnost;
    if cmiss(of mesic) then delete;   /* Odstraní souhrnný řádek */
    drop _TYPE_ _FREQ_;               /* Odstraní pomocné proměnné od proc means */
run;
```

#### Dekompozice a sloučení dat

```sas
proc sort data=work.park out=sort1;      by mesic;
proc sort data=work.sezonnost out=sort2; by mesic;

data work.dekompozice;
    merge sort1 sort2;
    by mesic;
proc sort data=work.dekompozice;
    by t;
run;

data work.dekompozice;
    set work.dekompozice;
    S = SI * pred;   /* Složená hodnota: trend × sezóna */
run;
```

> **Co dělá:** Spojí trendové hodnoty se sezónními indexy a vypočítá modelovanou hodnotu `S`.

#### Predikce budoucích hodnot

```sas
/* Přidání budoucích časových bodů do sezónnosti */
data work.sezonnost;
    set work.sezonnost;
    t = 60 + mesic;
run;

/* Sloučení dat pro regresi */
data work.forett;
    set work.dekompozice work.sezonnost;
run;

/* Trendová predikce */
proc reg data=work.forett plots(only)=fitplot;
    model navstevnost = t;
    output out=work.forett p=forett;
run;

/* Finální predikce: trend × sezónní index */
data work.forett;
    set work.forett;
    SF = SI * forett;
run;

/* Výpis predikovaných hodnot */
proc print data=work.forett;
    var t mesic SI forett SF;
    where t > 60;
run;
```

> **Co dělá:** Extrapoluje trend do budoucnosti a vynásobí sezónním indexem → finální prognóza `SF`.  
> **`SF = SI × forett`** – prognóza = sezónní index × trendová predikce.

---

## 🔑 Klíčové pojmy a procedury – rychlý přehled

| Procedura / příkaz | K čemu slouží                                        |
| ------------------ | ---------------------------------------------------- |
| `proc print`       | Zobrazení dat                                        |
| `proc freq`        | Četnostní tabulky                                    |
| `proc means`       | Popisná statistika                                   |
| `proc sort`        | Řazení dat                                           |
| `proc sgplot`      | Grafy (histogram, scatter, boxplot, series)          |
| `proc corr`        | Korelační analýza                                    |
| `proc reg`         | Lineární regrese                                     |
| `proc univariate`  | Testy normality                                      |
| `data ... set ...` | Datový krok – úprava/tvorba datasetu                 |
| `where`            | Filtrování pozorování                                |
| `length`           | Definice délky textové proměnné                      |
| `output out=`      | Uložení výstupu (rezidua, predikce) do datasetu      |
| `_N_`              | Systémová proměnná – číslo aktuálního řádku          |
| `cmiss()`          | Funkce – true pokud jsou hodnoty chybějící (missing) |

---

