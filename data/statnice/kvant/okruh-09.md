# Okruh 9 – Stochastické modely: Markovské řetězce, teorie hromadné obsluhy, Bernoulliho schéma

## Úvod do stochastických modelů

**Stochastické modely** explicitně pracují s náhodností – stav systému nebo výsledky procesů jsou náhodné veličiny popsané pravděpodobnostními rozděleními. Na rozdíl od deterministických modelů neposkytují jediný „správný" výsledek, ale rozdělení možných výsledků.

---

## Bernoulliho schéma

**Bernoulliho schéma** je základní pravděpodobnostní model pro sekvenci **opakovaných nezávislých pokusů**, přičemž každý pokus má právě dva možné výsledky: „úspěch" (pravděpodobnost $p$) nebo „neúspěch" (pravděpodobnost $q = 1-p$).

### Podmínky Bernoulliho schématu

1. Konečný počet pokusů $n$.
2. Každý pokus je **nezávislý** na ostatních.
3. Pravděpodobnost úspěchu $p$ je **konstantní** v každém pokusu.

### Binomické rozdělení

Počet úspěchů $X$ v $n$ Bernoulliho pokusech má **binomické rozdělení** $X \sim B(n, p)$:

$$P(X = k) = \binom{n}{k} p^k (1-p)^{n-k}, \quad k = 0, 1, \ldots, n$$

Střední hodnota: $\mathbb{E}[X] = np$

Rozptyl: $D(X) = np(1-p)$

> **Příklad**: Výrobní linka má 5% míru zmetků. Z dávky 100 kusů: jaká je pravděpodobnost, že bude více než 8 zmetků? $X \sim B(100; 0{,}05)$, $P(X > 8) = 1 - P(X \leq 8) = \sum_{k=9}^{100}\binom{100}{k}0{,}05^k \cdot 0{,}95^{100-k}$.

### Poissonovo přiblížení

Při velkém $n$ a malém $p$ (vzácné události) přibližuje $B(n,p)$ **Poissonovo rozdělení** $\text{Pois}(\lambda = np)$:

$$P(X = k) \approx \frac{\lambda^k e^{-\lambda}}{k!}$$

### Geometrické a negativní binomické rozdělení

- **Geometrické** $\text{Geom}(p)$: Počet pokusů do prvního úspěchu. $P(X = k) = (1-p)^{k-1}p$, $\mathbb{E}[X] = 1/p$.
- **Negativní binomické**: Počet pokusů do $r$-tého úspěchu.

---

## Markovské řetězce

**Markovský řetězec** (Markov Chain) je stochastický proces $\{X_0, X_1, X_2, \ldots\}$ s diskrétními stavy, který splňuje **Markovskou podmínku (vlastnost bez paměti)**:

$$P(X_{n+1} = j \mid X_n = i, X_{n-1}, \ldots, X_0) = P(X_{n+1} = j \mid X_n = i) = p_{ij}$$

Budoucí stav závisí **pouze na aktuálním stavu**, ne na historii. Přechodové pravděpodobnosti $p_{ij}$ tvoří **přechodovou matici** $P$:

$$P = \begin{pmatrix} p_{11} & p_{12} & \cdots \\ p_{21} & p_{22} & \cdots \\ \vdots & & \ddots \end{pmatrix}, \quad \sum_j p_{ij} = 1 \text{ pro každé } i$$

### Klasifikace stavů

- **Rekurentní stav**: Systém se do něj s pravděpodobností 1 vrátí.
- **Přechodný (transientní) stav**: Systém ho může navštívit konečněkrát.
- **Absorbující stav**: $p_{ii} = 1$ – jakmile systém vstoupí, nikdy neodejde.
- **Ergodický řetězec**: Ireducibilní (každý stav je dosažitelný z každého) a aperiodický → existuje jediné stacionární rozdělení.

### Stacionární (limitní) rozdělení

Pro ergodický Markovský řetězec existuje **stacionární rozdělení** $\pi$ takové, že:

$$\pi = \pi \cdot P, \quad \sum_j \pi_j = 1$$

$\pi_j$ je dlouhodobý podíl času, který systém stráví ve stavu $j$.

> **Příklad**: Počasí modelujeme jako Markovský řetězec. Stavy: {Slunečno, Déšť}. Matice přechodu: z Slunečna → Slunečno s $p = 0{,}8$, Déšť s $p = 0{,}2$; z Deště → Slunečno $p = 0{,}4$, Déšť $p = 0{,}6$. Stacionární rozdělení: $\pi_S = 2/3$, $\pi_D = 1/3$ (řeší se ze soustavy $\pi P = \pi$).

### Aplikace Markovských řetězců

- **Analýza spolehlivosti**: Modelování strojů v různých stavech (funkce, porucha, oprava).
- **Marketing**: Věrnost zákazníků (přechody mezi značkami).
- **Finance**: Kreditní rating (přechody mezi ratingovými kategoriemi AAA → BBB → …).
- **Genetika**: Šíření alel v populaci.
- **PageRank (Google)**: Markovský řetězec náhodného surfaře po webových stránkách.
- **Fronta zákazníků** (viz THO níže).

---

## Teorie hromadné obsluhy (THO / Queueing Theory)

**Teorie hromadné obsluhy** studuje systémy, kde **požadavky (zákazníci)** přicházejí, čekají ve frontě a jsou obsluhovány **obslužnými kanály (servery)**. Cílem je analýza výkonnosti: průměrná délka fronty, průměrná čekací doba, vytížení serveru.

### Kendallova notace

Systémy THO se popisují notací $A/B/c/K/N$:
- $A$ = rozdělení mezidobí příchodů (M = Markovské = exponenciální, D = deterministické, G = obecné)
- $B$ = rozdělení doby obsluhy
- $c$ = počet obslužných kanálů (serverů)
- $K$ = kapacita systému (max. počet v systému, včetně obsluhy; $\infty$ pokud není omezení)
- $N$ = velikost zdrojové populace ($\infty$ pokud neomezená)

Nejčastěji se vynechávají $K$ a $N$ (předpokládají se $\infty$).

### Základní model M/M/1

**Poissonovy příchody** (intenzita $\lambda$, tj. průměrně $\lambda$ zákazníků za čas), **exponenciální obsluha** (intenzita $\mu$), **jeden server**.

**Podmínka stability**: $\rho = \lambda / \mu < 1$ (server musí být v průměru rychlejší než příchody).

$\rho$ = **vytížení serveru** (podíl času, kdy server pracuje).

Výkonnostní charakteristiky v ustáleném stavu:

| Veličina | Symbol | Vzorec |
|---------|--------|--------|
| Průměrný počet zákazníků v systému | $L$ | $\dfrac{\rho}{1-\rho}$ |
| Průměrný počet v čekací frontě | $L_q$ | $\dfrac{\rho^2}{1-\rho}$ |
| Průměrná doba v systému | $W$ | $\dfrac{1}{\mu - \lambda}$ |
| Průměrná čekací doba ve frontě | $W_q$ | $\dfrac{\rho}{\mu - \lambda}$ |

**Littleův zákon** (platí obecně, nejen pro M/M/1):
$$L = \lambda \cdot W, \quad L_q = \lambda \cdot W_q$$

### Model M/M/c

$c$ serverů, Poissonovy příchody, exponenciální obsluha. Podmínka stability: $\rho = \lambda/(c\mu) < 1$.

Řeší se přes Erlangovy vzorce (Erlang C formule). Standardně se využívá tabulkách nebo software.

### Model M/D/1

Deterministická (konstantní) doba obsluhy. Fronty jsou kratší než u M/M/1 – variabilita obsluhy zvyšuje čekání.

### Aplikace THO

Bankovní přepážky, call centra, nemocniční pohotovosti, letišťní bezpečnostní kontroly, výrobní linky, síťové směrovače (paketové fronty), dopravní křižovatky.

> **Příklad**: Call centrum přijímá 20 hovorů/hod ($\lambda = 20$). Průměrná obsluha trvá 4 min ($\mu = 15$ hovorů/hod). Pro 2 operátory: $\rho = 20/30 = 0{,}67$. Z Erlang C: pravděpodobnost čekání ≈ 40 %, průměrná čekací doba ≈ 1,3 min.

---

## Shrnutí: volba stochastického modelu

| Situace | Model |
|---------|-------|
| Opakované nezávislé pokusy s úspěchem/neúspěchem | Bernoulliho schéma / binomické rozdělení |
| Vzácné události (velký $n$, malé $p$) | Poissonovo rozdělení |
| Systém přechází mezi diskrétními stavy | Markovský řetězec |
| Zákazníci přicházejí a čekají na obsluhu | Teorie hromadné obsluhy (M/M/1, M/M/c) |
