# Okruh 15 – Základní statistické charakteristiky, výběrové techniky, průzkumová analýza dat

## Statistika: základní pojmy

**Statistika** je věda o sběru, organizaci, analýze a interpretaci dat za účelem vyvozování závěrů o studovaném jevu.

- **Základní soubor (populace)** – úplná množina všech objektů nebo pozorování, o nichž chceme vyvozovat závěry (všichni zákazníci, všechny vyrobené kusy).
- **Výběr (sample)** – podmnožina základního souboru, která je skutečně pozorována.
- **Statistický znak** – měřená vlastnost jednotky souboru.
- **Parametr** – charakteristika základního souboru (fixní, ale zpravidla neznámá).
- **Statistika** – charakteristika vypočítaná z výběru (náhodná veličina).

---

## Typy statistických znaků

| Typ | Popis | Příklady |
|-----|-------|---------|
| **Nominální** | Kategorie bez pořadí | Pohlaví, barva, kraj |
| **Ordinální** | Kategorie s pořadím | Vzdělání (ZŠ/SŠ/VŠ), hodnocení (1–5) |
| **Intervalový** | Číselný, bez přirozené nuly | Teplota ve °C, rok narození |
| **Poměrový** | Číselný s přirozenou nulou | Výška, plat, čas, vzdálenost |

Typ znaku určuje, jaké statistické metody jsou vhodné.

---

## Základní statistické charakteristiky

### Míry polohy (Location)

**Aritmetický průměr** (výběrový):

$$\bar{x} = \frac{1}{n} \sum_{i=1}^{n} x_i$$

Citlivý na odlehlé hodnoty (outliers). Pro data s extrémy může být zavádějící.

**Vážený průměr**: $\bar{x}_w = \sum_i w_i x_i / \sum_i w_i$ – různé záznamy mají různou důležitost.

**Medián** $\tilde{x}$: Prostřední hodnota seřazeného souboru. Pro sudé $n$ průměr dvou středních hodnot. Robustní vůči odlehlým hodnotám.

**Modus** (moda): Nejčastěji se vyskytující hodnota. U spojitých dat: hodnota s maximální hustotou. Soubor může mít více módů (bimodální, multimodální).

**Geometrický průměr**: $\bar{x}_g = \sqrt[n]{x_1 \cdot x_2 \cdots x_n}$ – vhodný pro multiplikativní data (procenta růstu, výnosy akcií).

**Harmonický průměr**: $\bar{x}_h = n / \sum(1/x_i)$ – vhodný pro průměrování sazeb (rychlost, cena za jednotku).

### Míry variability (Spread)

**Rozptyl** (výběrový) – používá $n-1$ (Besselova korekce pro nestranný odhad):

$$s^2 = \frac{1}{n-1} \sum_{i=1}^{n} (x_i - \bar{x})^2$$

**Směrodatná odchylka**: $s = \sqrt{s^2}$ – ve stejných jednotkách jako data.

**Variační rozpětí**: $R = x_{\max} - x_{\min}$ – nejjednodušší míra, ale citlivá na extrémy.

**Mezikvartilové rozpětí (IQR)**: $IQR = Q_3 - Q_1$ – robustní míra variability, základ pro box plot.

**Koeficient variace**: $CV = (s / \bar{x}) \times 100\,\%$ – relativní variabilita, srovnatelná napříč různými datovými soubory.

### Míry tvaru rozdělení

**Šikmost (skewness)**:

$$\gamma_1 = \frac{\frac{1}{n}\sum(x_i - \bar{x})^3}{s^3}$$

$\gamma_1 = 0$: symetrické, $\gamma_1 > 0$: pravostranně šikmé (delší pravý ocas), $\gamma_1 < 0$: levostranně šikmé.

**Špičatost (kurtosis)**:

$$\gamma_2 = \frac{\frac{1}{n}\sum(x_i - \bar{x})^4}{s^4} - 3$$

$\gamma_2 = 0$: normální rozdělení (mezokurtické), $\gamma_2 > 0$: leptokurtické (ostré vrcholy, těžké ocasy), $\gamma_2 < 0$: platykurtické (plochý vrchol).

---

## Výběrové techniky (Sampling Methods)

Výběr musí být **reprezentativní** – musí věrně odrážet základní soubor, jinak jsou závěry zkreslené.

### Pravděpodobnostní výběry

Každá jednotka základního souboru má nenulovou a **známou** pravděpodobnost zařazení do výběru.

**Prostý náhodný výběr (Simple Random Sampling)**:
Každá jednotka má stejnou pravděpodobnost výběru. Realizuje se losováním nebo generátorem náhodných čísel. Výhoda: jednoduché, statisticky čisté. Nevýhoda: při heterogenním souboru může nedostatečně pokrýt menšinové skupiny.

**Systematický výběr (Systematic Sampling)**:
Ze seřazeného souboru vybereme každou $k$-tou jednotku ($k = N/n$). Výchozí bod se volí náhodně z $[1, k]$. Výhoda: snadná realizace v praxi (každý desátý zákazník). Riziko: periodické vzory v datech mohou způsobit zkreslení.

**Stratifikovaný výběr (Stratified Sampling)**:
Soubor rozdělíme do **vrstev (strat)** dle relevantní proměnné (věk, region, pohlaví). Z každé vrstvy vybereme samostatný náhodný výběr (proporcionálně nebo nepropoc ionálně).

Výhoda: Zajistí reprezentaci všech vrstev; nižší rozptyl odhadu než prostý náhodný výběr při stejném $n$.

**Shlukový výběr (Cluster Sampling)**:
Základní soubor rozdělíme na **shluky (clustery)** a náhodně vybereme celé shluky (ne jednotlivé prvky). Příklad: Namísto náhodného výběru studentů ze všech škol ČR vybereme náhodně 50 škol a dotážeme se všech jejich studentů.

Výhoda: Levné a logisticky jednoduché. Nevýhoda: Větší chyba výběru (prvky ve shluku si jsou podobné).

**Vícestupňový výběr**: Kombinace výše uvedených; výběr probíhá ve více krocích.

### Nepravděpodobnostní výběry

- **Úsudkový (Judgmental)**: Výběr na základě expertního úsudku.
- **Dostupnostní (Convenience)**: Výběr nejsnáze dostupných jednotek – nejlevnější, ale nejzkreslení.
- **Kvótní**: Kvóty pro různé skupiny, ale výběr v rámci kvóty je nepravděpodobnostní.
- **Snowball**: Každý respondent doporučí dalšího – pro těžko dostupné skupiny.

---

## Průzkumová analýza dat (EDA – Exploratory Data Analysis)

**EDA** (Tukey, 1977) je filosofie analýzy dat zaměřená na **vizuální a deskriptivní porozumění** datům před formálními statistickými testy. Cíl: odhalit vzory, odlehlé hodnoty, závislosti, navrhnout hypotézy.

### Vizualizační nástroje EDA

**Histogram**: Sloupcový graf četností hodnot v intervalech. Zobrazuje tvar rozdělení, modus, asymetrii, outliers.

**Box plot (krabicový diagram)**:
```
   |       ┌──────┬──────┐        |
───┤───────│  Q1  │  Q3  │────────┤───
   |       └──────┴──────┘        |
   Min   Q1     Medián    Q3     Max
         ←──── IQR ─────→
```
- Střed krabice = medián.
- Okraje krabice = $Q_1$ a $Q_3$.
- „Vousy" = $Q_1 - 1{,}5 \cdot IQR$ a $Q_3 + 1{,}5 \cdot IQR$.
- Body za vousy = **outliers**.

**Scatter plot (bodový diagram)**: Závislost mezi dvěma číselnými proměnnými. Vizualizuje korelaci, nelinearity, shluky, outliers.

**Q-Q plot (Quantile-Quantile)**: Porovnání kvantilů dat s kvantily teoretického rozdělení (typicky normálního). Pokud body leží na přímce → data odpovídají danému rozdělení.

**Violin plot**: Kombinace box plotu a odhadnuté hustoty pravděpodobnosti.

**Heatmap / korelační matice**: Vizualizace korelací mezi mnoha proměnnými najednou.

### Odlehlé hodnoty (Outliers)

Outliery detekujeme:
- Z-score: $|z_i| = |(x_i - \bar{x})/s| > 3$ (pravidlo 3$\sigma$).
- IQR pravidlo: Hodnota mimo $[Q_1 - 1{,}5 \cdot IQR,\ Q_3 + 1{,}5 \cdot IQR]$.

Outlier může být: chyba měření (opravit nebo odstranit), skutečná vzácná hodnota (zachovat, pozorně analyzovat), znak jiné subpopulace.

### Transformace dat

Pokud data nejsou normálně rozdělena (podmínka mnoha testů), aplikujeme transformaci:
- **Logaritmická** $\ln(x)$: Pro pravostranně šikmá data (platy, ceny akcií).
- **Odmocninová** $\sqrt{x}$: Pro počtová data (Poissonova).
- **Box-Cox**: Obecná rodina parametrických transformací k normalitě.

### Dvouvariační EDA

- **Kontingenční tabulka**: Četnosti kombinací dvou kategorických proměnných.
- **Podmíněné průměry**: Průměr numerické proměnné pro každou kategorii.
- **Korelační koeficient (Pearson)**: $r \in [-1, 1]$, lineární závislost dvou číselných proměnných.
