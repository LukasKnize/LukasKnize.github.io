# Okruh 17 – Testování statistických hypotéz: parametrické a neparametrické testy

## Princip testování hypotéz

**Testování statistických hypotéz** je formální postup, který rozhoduje, zda jsou data dostatečně silným důkazem **proti** určitému tvrzení o parametru populace.

### Pojmy

- **Nulová hypotéza $H_0$**: Výchozí tvrzení (status quo), které testujeme. Formuluje se jako rovnost nebo nerovnost parametru. Příklad: $H_0: \mu = 50$.
- **Alternativní hypotéza $H_1$**: Tvrzení, které chceme prokázat (obhájit); platí, pokud zamítneme $H_0$. Příklad: $H_1: \mu \neq 50$ (oboustranná), $H_1: \mu > 50$ (pravostranná).
- **Testová statistika**: Funkce výběrových dat, jejíž rozdělení je pod $H_0$ známé.
- **Hladina významnosti $\alpha$**: Pravděpodobnost chyby I. druhu (odmítnutí $H_0$, i když je pravdivá). Typicky $\alpha = 0{,}05$ nebo $0{,}01$.
- **p-hodnota**: Pravděpodobnost, že bychom při platnosti $H_0$ dostali tak extrémní nebo extrémnější výsledek jako pozorovaný. Pokud $p \leq \alpha$, zamítneme $H_0$.
- **Kritický obor**: Oblast hodnot testové statistiky, kde zamítáme $H_0$.

### Chyby testování

| | $H_0$ platí | $H_0$ neplatí |
|-|------------|--------------|
| **Nezamítneme $H_0$** | Správné rozhodnutí | **Chyba II. druhu** ($\beta$) |
| **Zamítneme $H_0$** | **Chyba I. druhu** ($\alpha$) | Správné rozhodnutí (síla testu $1-\beta$) |

**Síla testu** ($1-\beta$) = pravděpodobnost, že test odhalí skutečný efekt. Roste s $n$, velikostí efektu a $\alpha$.

### Postup testování

1. Formulace $H_0$ a $H_1$.
2. Volba hladiny $\alpha$.
3. Výběr vhodného testu.
4. Výpočet testové statistiky.
5. Určení kritického oboru nebo p-hodnoty.
6. Rozhodnutí: zamítnout / nezamítnout $H_0$.
7. Věcná interpretace.

---

## Parametrické testy

Parametrické testy předpokládají určité **rozdělení dat** (nejčastěji normalitu).

### Test o průměru jednoho výběru

**Z-test** (znám $\sigma$ nebo $n \geq 30$):
$$Z = \frac{\bar{x} - \mu_0}{\sigma/\sqrt{n}} \sim N(0,1)$$

**Jednovýběrový t-test** (neznám $\sigma$, normální data):
$$T = \frac{\bar{x} - \mu_0}{s/\sqrt{n}} \sim t(n-1)$$

Kritický obor (oboustranný test): $|T| > t_{\alpha/2, n-1}$.

### Dvouvýběrový t-test (porovnání dvou průměrů)

Testujeme $H_0: \mu_1 = \mu_2$.

**Při rovnosti rozptylů** ($\sigma_1^2 = \sigma_2^2$, ověřeno F-testem):
$$T = \frac{\bar{x}_1 - \bar{x}_2}{s_p\sqrt{1/n_1 + 1/n_2}} \sim t(n_1+n_2-2)$$

kde $s_p^2 = \frac{(n_1-1)s_1^2 + (n_2-1)s_2^2}{n_1+n_2-2}$ je sdružený rozptyl.

**Welchův t-test** (při nerovnosti rozptylů): Upravené stupně volnosti dle Welch-Satterthwaitovy aproximace.

**Párový t-test**: Párová měření (stejné objekty, dvě podmínky). Počítá se se diferencemi $d_i = x_{i1} - x_{i2}$, pak jednovýběrový t-test na $d_i$. Eliminuje inter-individuální variabilitu.

### Test o rozptylu (F-test)

Testuje $H_0: \sigma_1^2 = \sigma_2^2$:
$$F = \frac{s_1^2}{s_2^2} \sim F(n_1-1, n_2-1)$$

### ANOVA (Analysis of Variance)

Testuje rovnost průměrů tří a více skupin: $H_0: \mu_1 = \mu_2 = \cdots = \mu_k$.

Princip: Porovnává **variabilitu mezi skupinami** (Between-Group Variance) s **variabilitou uvnitř skupin** (Within-Group / Error Variance):

$$F = \frac{MS_B}{MS_W} \sim F(k-1, N-k)$$

kde $MS_B = SS_B/(k-1)$, $MS_W = SS_W/(N-k)$. Při $F$ > kritická hodnota zamítneme $H_0$.

Zamítnutí ANOVA pouze říká, že alespoň dvě skupiny se liší – **post-hoc testy** (Tukey HSD, Bonferroni) určí, které dvojice.

### Test o parametru $p$

$H_0: p = p_0$, testová statistika:
$$Z = \frac{\hat{p} - p_0}{\sqrt{p_0(1-p_0)/n}} \sim N(0,1) \quad \text{(pro velká } n\text{)}$$

---

## Neparametrické testy

Neparametrické testy **nepředpokládají normalitu** – pracují s pořadími nebo znaky. Vhodné pro:
- Ordinální data.
- Silně šikmá data nebo data s odlehlými hodnotami.
- Malé výběry, kde normalitu nelze ověřit.
- Robustní alternativy k parametrickým testům.

**Nevýhoda**: Nižší statistická síla než parametrické testy, pokud jsou podmínky normality splněny.

### Jednovýběrový Wilcoxonův test (znaménkový test pořadí)

Neparametrická alternativa k jednovýběrovému t-testu. Testuje $H_0:$ medián $= m_0$.

Postup: Spočítáme $d_i = x_i - m_0$, seřadíme $|d_i|$, přiřadíme pořadí (ranky), součty kladných a záporných ranků $W^+$, $W^-$. Testová statistika $W = \min(W^+, W^-)$.

### Mann-Whitneyův U-test

Neparametrická alternativa k dvouvýběrovému t-testu. Testuje $H_0:$ obě skupiny mají stejné rozdělení (ekvivalentně: stejné mediány).

Postup: Spoléme oba výběry, přidělíme pořadí, spočítáme součty pořadí $R_1$, $R_2$, z nichž odvodíme statistiku $U$.

### Wilcoxonův párový test

Neparametrická alternativa k párovému t-testu.

### Kruskal-Wallisův test

Neparametrická alternativa k jednocestné ANOVA – testuje rovnost mediánů tří a více skupin. Pracuje s pořadími z poolovaného souboru.

### Chí-kvadrát test dobré shody

Testuje, zda výběrová data pocházejí z určitého teoretického rozdělení.

$$\chi^2 = \sum_{i=1}^{k} \frac{(O_i - E_i)^2}{E_i} \sim \chi^2(k - 1 - m)$$

kde $O_i$ = pozorované četnosti, $E_i$ = očekávané četnosti dle teoretického rozdělení, $m$ = počet odhadnutých parametrů.

> Podmínka: $E_i \geq 5$ pro každou kategorii (jinak sloučíme kategorie).

### Spearmanův korelační koeficient (viz Okruh 19)

Neparametrická míra korelace – pracuje s pořadími, robustní vůči outliers a nelinearitě.

---

## Ověřování normality

Před parametrickými testy je vhodné ověřit normalitu:

- **Q-Q plot**: Vizuálně. Body na přímce → normalita.
- **Shapiro-Wilk test**: Preferovaný pro malé výběry ($n < 50$). $H_0:$ data jsou normálně rozdělena.
- **Kolmogorov-Smirnov test**: Pro větší výběry; srovnává empirickou a teoretickou distribuční funkci.
- **Jarque-Bera test**: Založen na šikmosti a špičatosti.

> Při velkých výběrech ($n > 200$) testy normality téměř vždy zamítnou $H_0$ i pro malé odchylky – praxe: spoléháme na CLV a vizuální kontrolu.
