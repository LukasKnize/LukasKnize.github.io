# Okruh 14 – Náhodný jev, náhodná veličina, pravděpodobnost, číselné charakteristiky, rozdělení

## Náhodný pokus a náhodný jev

**Náhodný pokus** je experiment, jehož výsledek nelze předem přesně předpovědět, i když jsou podmínky provedení fixní. Příklady: hod mincí, měření výrobní odchylky, čas příchodu zákazníka.

**Výběrový prostor (sample space)** $\Omega$ je množina všech možných výsledků náhodného pokusu.

**Náhodný jev (event)** $A$ je podmnožina $\Omega$ – nastane, pokud výsledek pokusu patří do $A$.

- **Jistý jev**: $\Omega$ – nastane vždy.
- **Nemožný jev**: $\emptyset$ – nenastane nikdy.
- **Elementární jev**: jednoprvková podmnožina $\{ω\}$.

---

## Definice pravděpodobnosti

### Klasická definice (Laplace)

Za předpokladu **stejně pravděpodobných elementárních jevů**:

$$P(A) = \frac{|A|}{|\Omega|} = \frac{\text{počet příznivých výsledků}}{\text{celkový počet výsledků}}$$

Platí pouze pro konečný rovnoměrný výběrový prostor.

### Statistická (frekvenční) definice

Pravděpodobnost je **limitní relativní četnost** výskytu jevu při neomezeném opakování pokusu:

$$P(A) = \lim_{n \to \infty} \frac{n_A}{n}$$

kde $n_A$ je počet výskytů jevu $A$ v $n$ pokusech.

### Axiomatická definice (Kolmogorov)

Pravděpodobnost je funkce $P: \mathcal{F} \to [0,1]$ splňující tři axiomy:

1. $P(A) \geq 0$ pro každý jev $A$.
2. $P(\Omega) = 1$.
3. **Sigma-aditivita**: Pro neslučitelné jevy $A_1, A_2, \ldots$ (tj. $A_i \cap A_j = \emptyset$ pro $i \neq j$):
$$P\!\left(\bigcup_{i=1}^{\infty} A_i\right) = \sum_{i=1}^{\infty} P(A_i)$$

---

## Věty o pravděpodobnosti

### Pravidlo doplňku

$$P(\bar{A}) = 1 - P(A)$$

### Věta o sčítání (Addition Rule)

Pro libovolné dva jevy $A$ a $B$:

$$P(A \cup B) = P(A) + P(B) - P(A \cap B)$$

Pro **neslučitelné (disjunktní)** jevy ($A \cap B = \emptyset$): $P(A \cup B) = P(A) + P(B)$.

### Podmíněná pravděpodobnost

Pravděpodobnost jevu $A$ za podmínky, že nastalo $B$ (s $P(B) > 0$):

$$P(A \mid B) = \frac{P(A \cap B)}{P(B)}$$

### Věta o násobení (Multiplication Rule)

$$P(A \cap B) = P(A \mid B) \cdot P(B) = P(B \mid A) \cdot P(A)$$

### Nezávislé jevy

Jevy $A$ a $B$ jsou **nezávislé**, pokud:

$$P(A \cap B) = P(A) \cdot P(B) \quad \Leftrightarrow \quad P(A \mid B) = P(A)$$

Nastání $B$ neovlivňuje pravděpodobnost $A$.

### Věta o úplné pravděpodobnosti

Pokud $B_1, B_2, \ldots, B_n$ tvoří **úplný systém jevů** (neslučitelné, $\bigcup_i B_i = \Omega$):

$$P(A) = \sum_{i=1}^{n} P(A \mid B_i) \cdot P(B_i)$$

### Bayesova věta

$$P(B_i \mid A) = \frac{P(A \mid B_i) \cdot P(B_i)}{\sum_{j=1}^{n} P(A \mid B_j) \cdot P(B_j)}$$

Aktualizuje pravděpodobnost hypotézy $B_i$ po pozorování jevu $A$. Základ **bayesovské statistiky**.

> **Příklad**: Test na nemoc má 99% senzitivitu a 95% specificitu. Nemoc postihuje 1 % populace. Pokud test vyjde pozitivně, jaká je pravděpodobnost, že jste skutečně nemocní?
> $P(\text{nemoc} | +) = \frac{0{,}99 \times 0{,}01}{0{,}99 \times 0{,}01 + 0{,}05 \times 0{,}99} \approx 16{,}7\,\%$. Překvapivě nízké – vzácnost nemoci dominuje.

---

## Náhodná veličina

**Náhodná veličina (NV)** $X$ je funkce $X: \Omega \to \mathbb{R}$, která každému elementárnímu jevu přiřazuje reálné číslo. NV „přeloží" výsledky pokusu do čísel, se kterými lze počítat.

### Diskrétní náhodná veličina

Nabývá konečně nebo spočetně mnoha hodnot. Popsána **pravděpodobnostní funkcí**:
$$p_i = P(X = x_i), \quad \sum_i p_i = 1$$

### Spojitá náhodná veličina

Nabývá hodnot z intervalu. Popsána **hustotou pravděpodobnosti** $f(x)$:
$$P(a \leq X \leq b) = \int_a^b f(x) \, dx, \quad \int_{-\infty}^{\infty} f(x) \, dx = 1$$

### Distribuční funkce

Pro obě typy: $F(x) = P(X \leq x)$. Neklesající, $F(-\infty) = 0$, $F(+\infty) = 1$.

---

## Číselné charakteristiky náhodné veličiny

### Střední hodnota (Expected Value)

$$\mathbb{E}[X] = \mu = \begin{cases} \sum_i x_i \cdot p_i & \text{(diskrétní)} \\ \int_{-\infty}^{\infty} x \cdot f(x) \, dx & \text{(spojitá)} \end{cases}$$

Měří polohu těžiště rozdělení. Lineárnost: $\mathbb{E}[aX + b] = a\mathbb{E}[X] + b$.

### Rozptyl (Variance)

$$D(X) = \sigma^2 = \mathbb{E}\left[(X - \mu)^2\right] = \mathbb{E}[X^2] - \mu^2$$

Měří průměrné kvadratické odchylení od střední hodnoty – rozptýlenost rozdělení.

### Směrodatná odchylka

$$\sigma = \sqrt{D(X)}$$

Má stejné jednotky jako $X$ – srozumitelnější než rozptyl.

### Koeficient variace

$$CV = \frac{\sigma}{\mu} \times 100\,\%$$

Relativní míra variability – umožňuje srovnávat variabilitu veličin s různými středními hodnotami.

### Medián, kvantily, modus

- **Medián** $\tilde{x}$: Hodnota, pod níž leží 50 % pravděpodobnosti. $F(\tilde{x}) = 0{,}5$.
- **Kvantil $x_p$**: $F(x_p) = p$. Kvartily: $Q_1 = x_{0{,}25}$, $Q_3 = x_{0{,}75}$.
- **Modus**: Nejpravděpodobnější hodnota (maximum hustoty/pravděpodobnostní funkce).

### Šikmost a špičatost

- **Šikmost (skewness)**: Asymetrie rozdělení. Kladná = delší pravý ocas (výnosy aktiv), záporná = delší levý ocas.
- **Špičatost (kurtosis)**: Výška a tloušťka „ocásků". Normální rozdělení má kurtosis = 3. Vyšší = více extrémních hodnot (heavy tails).

---

## Základní rozdělení náhodných veličin

### Diskrétní rozdělení

| Rozdělení | Parametry | Střední hodnota | Rozptyl | Typické použití |
|-----------|-----------|----------------|---------|----------------|
| **Alternativní $A(p)$** | $p \in (0,1)$ | $p$ | $p(1-p)$ | Jeden pokus, úspěch/neúspěch |
| **Binomické $B(n,p)$** | $n, p$ | $np$ | $np(1-p)$ | Počet úspěchů v $n$ pokusech |
| **Poissonovo $\text{Pois}(\lambda)$** | $\lambda > 0$ | $\lambda$ | $\lambda$ | Vzácné události, počty příchodů |
| **Geometrické $\text{Geom}(p)$** | $p$ | $1/p$ | $(1-p)/p^2$ | Počet pokusů do prvního úspěchu |
| **Hypergeometrické** | $N, K, n$ | $nK/N$ | — | Výběr bez vracení |

### Spojitá rozdělení

| Rozdělení | Parametry | Střední hodnota | Rozptyl | Typické použití |
|-----------|-----------|----------------|---------|----------------|
| **Rovnoměrné $U(a,b)$** | $a < b$ | $(a+b)/2$ | $(b-a)^2/12$ | Základ pro generátory náhodných čísel |
| **Normální $N(\mu, \sigma^2)$** | $\mu, \sigma^2$ | $\mu$ | $\sigma^2$ | Měřicí chyby, výška, IQ; CLV |
| **Exponenciální $\text{Exp}(\lambda)$** | $\lambda > 0$ | $1/\lambda$ | $1/\lambda^2$ | Čas do události (bez paměti) |
| **Gamma $\Gamma(\alpha, \beta)$** | $\alpha, \beta > 0$ | $\alpha\beta$ | $\alpha\beta^2$ | Součet exp. veličin, čekací doby |
| **Chi-kvadrát $\chi^2(k)$** | $k$ (stupně volnosti) | $k$ | $2k$ | Testování hypotéz, intervaly spolehlivosti |
| **Studentovo $t(k)$** | $k$ | 0 (pro $k>1$) | $k/(k-2)$ | Testování střední hodnoty (malý výběr) |
| **Fischerovo-Snedecorovo $F(k_1,k_2)$** | $k_1, k_2$ | — | — | Testování rozptylů, ANOVA |

### Normální rozdělení – detailněji

$X \sim N(\mu, \sigma^2)$, hustota:

$$f(x) = \frac{1}{\sigma\sqrt{2\pi}} \exp\!\left(-\frac{(x-\mu)^2}{2\sigma^2}\right)$$

**Standardizace**: $Z = (X - \mu)/\sigma \sim N(0,1)$.

**Pravidlo $3\sigma$**:
- $P(\mu - \sigma < X < \mu + \sigma) \approx 68{,}3\,\%$
- $P(\mu - 2\sigma < X < \mu + 2\sigma) \approx 95{,}4\,\%$
- $P(\mu - 3\sigma < X < \mu + 3\sigma) \approx 99{,}7\,\%$

**Centrální limitní věta (CLV)**: Součet (nebo průměr) velkého počtu nezávislých náhodných veličin má přibližně normální rozdělení – bez ohledu na původní rozdělení. To vysvětluje všudypřítomnost normálního rozdělení v přírodě a praxi.
