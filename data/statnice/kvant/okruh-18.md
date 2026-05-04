# Okruh 18 – Analýza závislosti kvalitativních znaků a kontingenční tabulky

## Kvalitativní (kategorická) data

Kvalitativní znaky nabývají hodnot z konečné množiny kategorií – mohou být nominální (pohlaví, kraj) nebo ordinální (spokojenost: nízká/střední/vysoká). Na rozdíl od číselných dat nelze pro ně počítat průměry – analyzujeme **četnosti** a **podíly** výskytu kombinací kategorií.

Základní otázka: **Existuje statisticky významná závislost (asociace) mezi dvěma kategorickými znaky?**

---

## Kontingenční tabulka

**Kontingenční tabulka** (cross-tabulation) je dvourozměrná tabulka četností, která zachycuje společný výskyt dvou kategorických znaků. Řádky odpovídají kategoriím znaku $X$ ($r$ kategorií), sloupce kategoriím znaku $Y$ ($c$ kategorií).

$$\begin{array}{c|cccc|c}
 & Y_1 & Y_2 & \cdots & Y_c & \text{Řádkový součet} \\\hline
X_1 & n_{11} & n_{12} & \cdots & n_{1c} & n_{1\cdot} \\
X_2 & n_{21} & n_{22} & \cdots & n_{2c} & n_{2\cdot} \\
\vdots & & & & & \vdots \\
X_r & n_{r1} & n_{r2} & \cdots & n_{rc} & n_{r\cdot} \\\hline
\text{Sloupcový součet} & n_{\cdot1} & n_{\cdot2} & \cdots & n_{\cdot c} & n
\end{array}$$

- $n_{ij}$ = pozorovaná (absolutní) četnost kombinace $(X_i, Y_j)$.
- $n_{i\cdot} = \sum_j n_{ij}$ = řádkový marginální součet.
- $n_{\cdot j} = \sum_i n_{ij}$ = sloupcový marginální součet.
- $n = \sum_{i,j} n_{ij}$ = celkový počet pozorování.

### Relativní četnosti v kontingenční tabulce

- **Celková relativní četnost**: $f_{ij} = n_{ij}/n$
- **Řádková podmíněná četnost**: $f_{ij|i} = n_{ij}/n_{i\cdot}$ – jak jsou kategorie $Y$ zastoupeny uvnitř kategorie $X_i$.
- **Sloupcová podmíněná četnost**: $f_{ij|j} = n_{ij}/n_{\cdot j}$

Podmíněné četnosti slouží k popisu **profilu** každé kategorie.

---

## Nezávislost vs. závislost

Znaky $X$ a $Y$ jsou **statisticky nezávislé**, pokud výskyt jedné kategorie $X$ neovlivňuje pravděpodobnost výskytu žádné kategorie $Y$. Formálně:

$$P(X = X_i, Y = Y_j) = P(X = X_i) \cdot P(Y = Y_j) \quad \forall i, j$$

Při nezávislosti platí:

$$E_{ij} = \frac{n_{i\cdot} \cdot n_{\cdot j}}{n}$$

kde $E_{ij}$ jsou **očekávané četnosti** za předpokladu nezávislosti. Pokud se pozorované četnosti $n_{ij}$ výrazně liší od $E_{ij}$, svědčí to pro závislost.

---

## Chí-kvadrát test nezávislosti

**Pearsonův chí-kvadrát test** testuje $H_0:$ znaky $X$ a $Y$ jsou nezávislé.

**Testová statistika:**

$$\chi^2 = \sum_{i=1}^{r} \sum_{j=1}^{c} \frac{(n_{ij} - E_{ij})^2}{E_{ij}} \sim \chi^2\!\left((r-1)(c-1)\right)$$

za předpokladu platnosti $H_0$ má přibližně chí-kvadrát rozdělení s $(r-1)(c-1)$ stupni volnosti.

**Podmínky aplikovatelnosti:**
- Všechna $E_{ij} \geq 5$ (pravidlo pěti). Pokud není splněno: sloučit kategorie, nebo použít Fisherův exaktní test.
- Pozorování jsou nezávislá.

**Rozhodnutí:** Pokud $\chi^2 > \chi^2_{\alpha, (r-1)(c-1)}$ (nebo p-hodnota $\leq \alpha$), zamítneme $H_0$ – existuje statisticky významná závislost.

> **Pozor**: Statistická významnost ≠ praktická významnost. Při velkém $n$ lze zamítnout $H_0$ i pro triviálně slabou závislost.

---

## Míry síly asociace

Zamítnutí $H_0$ říká jen, že závislost existuje – ne jak silná je. Pro měření síly asociace slouží:

### Cramérovo V

$$V = \sqrt{\frac{\chi^2}{n \cdot \min(r-1, c-1)}} \in [0, 1]$$

$V = 0$: žádná závislost. $V = 1$: dokonalá závislost. Srovnatelné napříč tabulkami různých rozměrů.

Interpretace (orientační): $V < 0{,}1$ slabá; $0{,}1$–$0{,}3$ střední; $> 0{,}3$ silná.

### Pearsonův koeficient kontingence $C$

$$C = \sqrt{\frac{\chi^2}{\chi^2 + n}} \in [0, 1)$$

Maximální hodnota závisí na rozměru tabulky ($< 1$ vždy), proto méně vhodný pro srovnávání.

### Phi koeficient $\phi$ (pouze pro tabulku 2×2)

$$\phi = \sqrt{\frac{\chi^2}{n}} = \frac{n_{11}n_{22} - n_{12}n_{21}}{\sqrt{n_{1\cdot} n_{2\cdot} n_{\cdot 1} n_{\cdot 2}}}$$

Nabývá hodnot $[-1, 1]$; interpretace jako Pearsonova korelace.

---

## Speciální případy: tabulka 2×2

Pro tabulku $2 \times 2$ existují doplňkové míry:

**Relativní riziko (Risk Ratio, RR):**
$$RR = \frac{n_{11}/n_{1\cdot}}{n_{21}/n_{2\cdot}}$$
Poměr pravděpodobnosti výskytu jevu v exponované vs. neexponované skupině. Využití: epidemiologie, klinické studie.

**Poměr šancí (Odds Ratio, OR):**
$$OR = \frac{n_{11} \cdot n_{22}}{n_{12} \cdot n_{21}}$$
Poměr šancí výskytu v obou skupinách. Klíčová míra v logistické regresi a case-control studiích. $OR = 1$: žádná asociace; $OR > 1$: pozitivní asociace; $OR < 1$: negativní asociace.

**Fisherův exaktní test**: Alternativa k $\chi^2$ testu pro malé výběry nebo nízké očekávané četnosti. Počítá exaktní p-hodnotu přímo z hypergeometrického rozdělení.

---

## Analýza vícerozměrných kontingenčních tabulek

Při třech a více proměnných může dojít k **Simpsonovu paradoxu**: závislost zdánlivě platná v celém souboru zmizí nebo se obrátí po rozdělení do podskupin (stratifikaci). Příklad: lék se jeví účinnější celkově, ale po stratifikaci dle závažnosti nemoci vychází horší v každé skupině.

Řešení: Mantel-Haenszel test (kombinuje evidence přes vrstvy), loglineární modely, logistická regrese.
