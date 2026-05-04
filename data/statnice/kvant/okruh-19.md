# Okruh 19 – Regresní a korelační analýza

## Účel regresní a korelační analýzy

Regresní a korelační analýza zkoumají **statistické závislosti** mezi proměnnými:

- **Korelační analýza**: Měří **sílu a směr** lineárního (nebo obecného) vztahu mezi dvěma proměnnými. Nepředpokládá kauzalitu.
- **Regresní analýza**: Modeluje **funkční vztah** – jak se mění závislá proměnná $Y$ v závislosti na nezávislé proměnné (prediktorech) $X$. Slouží k predikci a vysvětlení.

> **Korelace ≠ kauzalita.** Dvě proměnné mohou být silně korelovány bez příčinného vztahu (spuriózní korelace způsobená třetí proměnnou, nebo shoda). Kauzalitu lze dovodit jen z teorie nebo experimentu.

---

## Jednoduchá lineární regrese a korelace

### Model jednoduché lineární regrese

$$Y_i = \beta_0 + \beta_1 X_i + \varepsilon_i$$

kde:
- $\beta_0$ = intercept (průsečík s osou $Y$ při $X = 0$)
- $\beta_1$ = směrnice (o kolik se změní $Y$, když $X$ vzroste o 1)
- $\varepsilon_i \sim N(0, \sigma^2)$ = náhodná chyba (nezávislé, stejně rozdělené)

### Odhad metodou nejmenších čtverců (OLS – Ordinary Least Squares)

Minimalizujeme součet čtverců residuí:

$$SSE = \sum_{i=1}^{n} (y_i - \hat{y}_i)^2 = \sum_{i=1}^{n} (y_i - \hat{\beta}_0 - \hat{\beta}_1 x_i)^2 \to \min$$

Analytické řešení:

$$\hat{\beta}_1 = \frac{\sum(x_i - \bar{x})(y_i - \bar{y})}{\sum(x_i - \bar{x})^2} = \frac{S_{XY}}{S_{XX}}$$

$$\hat{\beta}_0 = \bar{y} - \hat{\beta}_1 \bar{x}$$

Regresní přímka vždy prochází bodem $(\bar{x}, \bar{y})$.

### Hodnocení kvality modelu: koeficient determinace $R^2$

$$R^2 = 1 - \frac{SSE}{SST} = 1 - \frac{\sum(y_i - \hat{y}_i)^2}{\sum(y_i - \bar{y})^2} \in [0, 1]$$

$R^2$ udává, jaký podíl celkové variability $Y$ je vysvětlen regresním modelem. $R^2 = 0{,}85$: model vysvětluje 85 % variability.

### Pearsonův korelační koeficient

$$r = \frac{\sum(x_i - \bar{x})(y_i - \bar{y})}{\sqrt{\sum(x_i-\bar{x})^2 \cdot \sum(y_i-\bar{y})^2}} = \frac{S_{XY}}{\sqrt{S_{XX} \cdot S_{YY}}} \in [-1, 1]$$

- $r = 1$: dokonalá kladná lineární závislost.
- $r = -1$: dokonalá záporná lineární závislost.
- $r = 0$: žádná lineární závislost (může existovat nelineární!).
- $R^2 = r^2$ (pro jednoduchou lineární regresi).

**Test $H_0: \rho = 0$** (žádná lineární korelace v populaci):
$$T = \frac{r\sqrt{n-2}}{\sqrt{1-r^2}} \sim t(n-2)$$

### Reziduální analýza

Po odhadu modelu ověřujeme předpoklady OLS:
- **Linearita**: Scatter plot residuí vs. $\hat{y}$ by měl být náhodný (bez vzoru).
- **Homoskedasticita**: Konstantní rozptyl residuí – bez trychtýřovitého vzoru.
- **Normalita residuí**: Q-Q plot nebo Shapiro-Wilk test.
- **Nezávislost residuí**: Durbin-Watson test (důležité pro časové řady).

---

## Nelineární regrese a korelace

Vztah mezi $X$ a $Y$ může být nelineární. Přístupy:

### Linearizovatelné modely

Transformací proměnných převedeme na lineární model a aplikujeme OLS:

| Model | Transformace | Linearizovaný tvar |
|-------|-------------|-------------------|
| **Mocninný**: $Y = aX^b$ | $\ln Y$, $\ln X$ | $\ln Y = \ln a + b \ln X$ |
| **Exponenciální**: $Y = ae^{bX}$ | $\ln Y$ | $\ln Y = \ln a + bX$ |
| **Logaritmický**: $Y = a + b\ln X$ | $\ln X$ | $Y = a + b\ln X$ |

### Polynomiální regrese

$$Y = \beta_0 + \beta_1 X + \beta_2 X^2 + \cdots + \beta_k X^k + \varepsilon$$

Nelineárnost ve $X$, ale lineárnost v parametrech $\beta$ → stále lze odhadnout OLS. Riziko přeučení (overfitting) pro vysoké $k$.

### Nelineární regrese (NLS)

Pro modely nelineární v parametrech (logistická křivka, Gompertzova křivka): iterativní optimalizační algoritmy (Gauss-Newton, Levenberg-Marquardt).

---

## Vícenásobná regrese a korelace

### Model

$$Y_i = \beta_0 + \beta_1 X_{i1} + \beta_2 X_{i2} + \cdots + \beta_p X_{ip} + \varepsilon_i$$

Odhadujeme $p+1$ parametrů z $n$ pozorování ($n > p+1$). OLS v maticovém zápisu:

$$\hat{\boldsymbol{\beta}} = (\mathbf{X}^T\mathbf{X})^{-1}\mathbf{X}^T\mathbf{y}$$

### Upravené $R^2$ (Adjusted $R^2$)

Přidání libovolného prediktoru zvyšuje $R^2$, i když prediktor nemá informační hodnotu. Upravené $R^2$ penalizuje za počet prediktorů:

$$\bar{R}^2 = 1 - \frac{SSE/(n-p-1)}{SST/(n-1)}$$

Vhodné pro srovnání modelů s různým počtem prediktorů.

### F-test celkové signifikance

$H_0: \beta_1 = \beta_2 = \cdots = \beta_p = 0$ (model jako celek nemá vysvětlovací sílu):

$$F = \frac{(SST - SSE)/p}{SSE/(n-p-1)} \sim F(p, n-p-1)$$

### t-testy individuálních koeficientů

Pro každý $\hat{\beta}_j$: $H_0: \beta_j = 0$:
$$T_j = \frac{\hat{\beta}_j}{SE(\hat{\beta}_j)} \sim t(n-p-1)$$

### Problémy vícenásobné regrese

**Multikolinearita**: Silná korelace mezi prediktory → nestabilní odhady $\hat{\beta}$, velké standardní chyby. Detekce: VIF (Variance Inflation Factor). $VIF_j > 10$ → problematická multikolinearita.

**Výběr proměnných**: Stepwise regrese (forward/backward/both), AIC/BIC kritéria, Lasso regularizace.

**Dummy proměnné**: Kategorické prediktory kódujeme jako sadu binárních proměnných ($k-1$ dummy pro $k$ kategorií). Jedna kategorie = referenční.

---

## Pořadová korelace (Spearmanův koeficient)

**Spearmanův korelační koeficient** $r_s$ je neparametrická alternativa Pearsonova $r$. Měří sílu **monotónního vztahu** (ne nutně lineárního) a je robustní vůči outliers.

Postup:
1. Každou hodnotu $x_i$ a $y_i$ nahradíme jejím **pořadím** (rankem) v příslušném souboru. Při shodách přiřadíme průměrné pořadí.
2. Spočítáme Pearsonův $r$ na pořadích.

Alternativní vzorec (přesný jen bez shodných pořadí):
$$r_s = 1 - \frac{6\sum d_i^2}{n(n^2-1)}$$

kde $d_i$ = rozdíl pořadí $i$-tého páru.

**Interpretace** jako Pearsonovo $r$: $r_s \in [-1, 1]$, $r_s = 1$ = dokonalá monotónní rostoucí závislost.

**Test $H_0: \rho_s = 0$**: Pro $n > 10$ přibližně $T = r_s\sqrt{(n-2)/(1-r_s^2)} \sim t(n-2)$.

**Kendallovo $\tau$**: Alternativní pořadová korelace – počítá podíl souhlasných a nesouhlasných párů. Robustnější interpretace, složitější výpočet.
