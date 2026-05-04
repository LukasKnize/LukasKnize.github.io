# Okruh 20 – Analýza časových řad

## Co je časová řada?

**Časová řada (time series)** je posloupnost hodnot statistického ukazatele $y_1, y_2, \ldots, y_T$ zaznamenaných v **pravidelných časových intervalech** – denně, měsíčně, kvartálně, ročně. Každá hodnota je realizací náhodné veličiny $Y_t$ v čase $t$.

Příklady: měsíční tržby firmy, čtvrtletní HDP, denní kurz měny, roční průměrná teplota.

Cíle analýzy časových řad:
- **Popis a dekompozice**: Rozložit řadu na složky (trend, sezónnost, cyklus, náhoda).
- **Predikce**: Odhadnout budoucí hodnoty.
- **Kauzální analýza**: Zjistit vztahy mezi více časovými řadami.

---

## Základní charakteristiky časových řad

### Absolutní ukazatele

**Hodnota ukazatele $y_t$**: Základní hodnota v čase $t$.

**Přírůstek (diference)**:
$$\Delta_1 y_t = y_t - y_{t-1} \quad \text{(první diference)}$$

Pokud jsou první diference přibližně konstantní → lineární trend.

$$\Delta_2 y_t = \Delta_1 y_t - \Delta_1 y_{t-1} = y_t - 2y_{t-1} + y_{t-2} \quad \text{(druhá diference)}$$

**Tempo růstu (growth rate)**:
$$k_t = \frac{y_t}{y_{t-1}} \quad \text{(koeficient růstu)}$$
$$\delta_t = \frac{y_t - y_{t-1}}{y_{t-1}} \times 100 \, [\%] \quad \text{(procentní tempo růstu)}$$

### Průměrné ukazatele

**Průměrná hodnota**: $\bar{y} = \frac{1}{T}\sum_{t=1}^{T} y_t$ (pro intervalové řady, kde hodnoty platí po celý interval).

**Průměrný koeficient růstu** (geometrický průměr koeficientů):
$$\bar{k} = \sqrt[T-1]{\frac{y_T}{y_1}} = \left(\frac{y_T}{y_1}\right)^{1/(T-1)}$$

---

## Dekompozice časové řady

Klasická dekompozice předpokládá, že řada se skládá ze čtyř složek:

$$y_t = T_t + S_t + C_t + E_t \quad \text{(aditivní model)}$$
$$y_t = T_t \cdot S_t \cdot C_t \cdot E_t \quad \text{(multiplikativní model)}$$

kde:
- $T_t$ = **trendová složka** – dlouhodobý směr vývoje (rostoucí, klesající, konstantní).
- $S_t$ = **sezónní složka** – pravidelné opakující se výkyvy v rámci roku (nebo kratšího/delšího cyklu).
- $C_t$ = **cyklická složka** – nepravidelné výkyvy s délkou > 1 rok (hospodářský cyklus).
- $E_t$ = **náhodná (reziduální) složka** – nepravidelné fluktuace po odstranění ostatních složek.

> **Aditivní model**: Amplituda sezónnosti je konstantní v čase. **Multiplikativní model**: Amplituda sezónnosti roste s úrovní řady (typičtější v ekonomických datech).

---

## Analýza periodických (sezónních) časových řad

**Sezónní řada** vykazuje pravidelné výkyvy, které se opakují v pevném období (1 rok, 1 týden, 1 den).

### Sezónní indexy

Sezónní index $s_j$ udává, o kolik % se průměrná hodnota v sezóně $j$ liší od celkového průměru:

$$s_j = \frac{\bar{y}_j}{\bar{y}} \times 100 \, [\%]$$

kde $\bar{y}_j$ = průměr přes všechna pozorování ve stejné sezóně $j$ (např. průměr přes všechna lednová pozorování).

$\sum_j s_j = 1200$ (pro měsíční data) nebo $= 400$ (pro čtvrtletní).

### Metoda klouzavých průměrů (Moving Average)

Klouzavý průměr délky $m$ vyhlazuje krátkodobé výkyvy a extrahuje trend+cyklus:

$$MA_t = \frac{1}{m}\sum_{k=-(m-1)/2}^{(m-1)/2} y_{t+k} \quad \text{(pro liché } m\text{)}$$

Pro sezónní data o délce sezóny $s$ (12 pro měsíční, 4 pro čtvrtletní) volíme $m = s$ nebo $m = 2s$ (centrovaný klouzavý průměr) – sezónnost se vyruší.

### Dekompozice (Census X-11, STL, klasická metoda)

Klasický postup:
1. Výpočet centrovaného klouzavého průměru (trend-cyklus $\hat{T}_t$).
2. Eliminace trendu: $y_t / \hat{T}_t$ (multiplikativní) nebo $y_t - \hat{T}_t$ (aditivní) → sezónnost + šum.
3. Průměrování přes stejné sezóny → sezónní indexy $\hat{S}_t$.
4. Sezónní očištění: $y_t^{SA} = y_t / \hat{S}_t$ (desezónalizace).

**Desezónalizovaná řada** $y_t^{SA}$ umožňuje smysluplné mezičasové porovnání (např. čtvrtletní HDP po sezónním očištění).

---

## Analýza neperiodických (trendových) časových řad

### Analýza trendu

**Lineární trend**: $T_t = \beta_0 + \beta_1 t$. Odhadujeme OLS regresí $y_t$ na $t$.

**Polynomiální trend**: $T_t = \beta_0 + \beta_1 t + \beta_2 t^2 + \cdots$

**Exponenciální trend**: $T_t = a \cdot b^t$, linearizujeme $\ln T_t = \ln a + t \ln b$.

**Logistický trend**: $T_t = \frac{K}{1 + e^{-(\alpha + \beta t)}}$ – S-křivka s horní mezí $K$ (saturace).

### Exponenciální vyhlazování (Exponential Smoothing)

Vychází z myšlenky, že novější pozorování mají větší váhu. Jednoduché exponenciální vyhlazování:

$$\hat{y}_{t+1} = \alpha y_t + (1-\alpha)\hat{y}_t = \hat{y}_t + \alpha(y_t - \hat{y}_t)$$

kde $\alpha \in (0,1)$ je **parametr vyhlazování**. Pro $\alpha$ blízké 1: model rychle reaguje, málo vyhlazuje. Pro $\alpha$ blízké 0: pomalá reakce, silné vyhlazování.

**Holt-Wintersova metoda**: Rozšiřuje exponenciální vyhlazování na trend (Holtovo) a sezónnost (Holt-Wintersovo). Tři parametry: $\alpha$ (úroveň), $\beta$ (trend), $\gamma$ (sezónnost).

### ARIMA modely (Box-Jenkins metodologie)

**ARIMA($p, d, q$)** je rodina statistických modelů pro stacionární časové řady:

- **AR($p$)** – Autoregresní model: $y_t = c + \phi_1 y_{t-1} + \cdots + \phi_p y_{t-p} + \varepsilon_t$
  (Aktuální hodnota závisí na posledních $p$ hodnotách.)

- **MA($q$)** – Model klouzavých průměrů: $y_t = \mu + \varepsilon_t + \theta_1\varepsilon_{t-1} + \cdots + \theta_q\varepsilon_{t-q}$
  (Aktuální hodnota závisí na posledních $q$ chybách.)

- **I($d$)** – Integrace (diferenciace): Pro nestacionární řady se $d$-krát diferencuje. $d=1$: první diference $\Delta y_t = y_t - y_{t-1}$.

- **ARIMA($p,d,q$)**: Kombinace všech tří složek.

- **SARIMA($p,d,q$)($P,D,Q$)$_s$**: Sezónní rozšíření ARIMA.

### Stacionarita

**Stacionární řada** má konstantní střední hodnotu, rozptyl a autokovarianční strukturu v čase. Většina modelů vyžaduje stacionaritu.

Testy: **Augmented Dickey-Fuller (ADF)** test, **KPSS** test.

**Nestacionarita** se řeší diferenciací ($d = 1$ nebo $2$) nebo logaritmickou transformací.

### Autokorelace a parciální autokorelace

**Autokorelační funkce (ACF)**: Korelace řady se svou zpožděnou verzí o $k$ kroků.
$$\rho_k = \text{Corr}(y_t, y_{t-k})$$

**Parciální autokorelační funkce (PACF)**: Korelace $y_t$ a $y_{t-k}$ po eliminaci vlivu $y_{t-1}, \ldots, y_{t-k+1}$.

ACF a PACF grafy (korelogramy) slouží k identifikaci řádu AR a MA:
- AR($p$): PACF se ustálí po řádu $p$; ACF klesá exponenciálně.
- MA($q$): ACF se ustálí po řádu $q$; PACF klesá exponenciálně.

### Hodnocení předpovědí

**MAE** (Mean Absolute Error): $\frac{1}{h}\sum|\hat{y}_{T+i} - y_{T+i}|$ – průměrná absolutní chyba.

**RMSE** (Root Mean Square Error): $\sqrt{\frac{1}{h}\sum(\hat{y}_{T+i} - y_{T+i})^2}$ – penalizuje velké chyby.

**MAPE** (Mean Absolute Percentage Error): $\frac{1}{h}\sum\left|\frac{\hat{y}_{T+i} - y_{T+i}}{y_{T+i}}\right| \times 100\,\%$ – relativní chyba, nezávislá na škále.

**AIC / BIC** (Akaike / Bayesian Information Criterion): Pro srovnání modelů na trénovacích datech s penalizací za počet parametrů.
