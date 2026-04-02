# Základní statistické charakteristiky

## 3.1 Rozdělení četností

### 3.1.1 Prosté rozdělení četností

- **Absolutní četnost** ($n_i$) – skutečný počet jednotek
- **Relativní četnost** ($f_i$) – poměrná část souboru: $f_i = \frac{n_i}{n}$, kde $\sum_{i=1}^{k} f_i = 1$
- **Kumulativní četnosti** – součty četností od prvního intervalu
  - Absolutní: $N_i = n_1 + n_2 + ... + n_i$
  - Relativní: $F_i = f_1 + f_2 + ... + f_i$

### 3.1.2 Intervalové rozdělení četností

- Používá se pro spojitý znak nebo diskrétní znak s velkým počtem obměn
- **Sturgesovo pravidlo** pro určení počtu intervalů: $k \cong 1 + 3,3 \log n$
- Délka intervalu: $h = \frac{R}{k}$, kde $R$ = variační rozpětí

---

## 3.2 Základní statistické charakteristiky

### 3.2.1 Charakteristiky polohy (střední hodnoty)

**Aritmetický průměr**

- Prostý: $\bar{x} = \frac{\sum_{i=1}^{n} x_i}{n}$
- Vážený (pro tříděná data): $\bar{x} = \frac{\sum_{i=1}^{k} x_i n_i}{\sum_{i=1}^{k} n_i}$

**Medián** ($\tilde{x}$)

- Střední hodnota uspořádané řady pozorování
- Lichý počet hodnot: hodnota s pořadovým číslem $\frac{n+1}{2}$
- Sudý počet hodnot: průměr dvou prostředních hodnot
- Vlastnost: necitlivý k extrémním hodnotám

**Modus** – nejčetnější hodnota znaku

---

### 3.2.2 Charakteristiky variability

**Variační rozpětí** (R): $R = x_{max} - x_{min}$

**Výběrový rozptyl** ($s^2$):

- Základní vzorec: $s^2 = \frac{1}{n-1} \sum_{i=1}^{n} (x_i - \bar{x})^2$
- Výpočetní tvar: $s^2 = \frac{\sum_{i=1}^{n} x_i^2 - n\bar{x}^2}{n-1}$
- Vážený (tříděná data): $s^2 = \frac{\sum_{i=1}^{k} (x_i - \bar{x})^2 n_i}{n-1}$

**Výběrová směrodatná odchylka** ($s$): $s = +\sqrt{s^2}$

**Variační koeficient** (V): $V = \frac{s}{\bar{x}} \cdot 100$ [%]

---

### 3.2.3 Kvantilové charakteristiky

**Kvantily** – hodnoty dělící uspořádaný soubor na stejné části:

- **Kvartily** – dělí na 4 části (Q1 = 25%, Q2 = medián, Q3 = 75%)
- **Decily** – dělí na 10 částí
- **Percentily** – dělí na 100 částí

**Kvartilové rozpětí** (IQR): $IQR = \tilde{x}_{0,75} - \tilde{x}_{0,25}$

**Kvartilová odchylka**: $s_K = \frac{\tilde{x}_{0,75} - \tilde{x}_{0,25}}{2}$

**Pětičíselný souhrn** (five-number summary): $x_{min}, Q1, \tilde{x}, Q3, x_{max}$

**Boxplot** (box-and-whisker plot):

- Grafické znázornění pětičíselného souhrnu
- Obdélník mezi Q1 a Q3, přímka v místě mediánu
- "Vousy" určeny podmínkou: $0,5 \cdot IQR \leq |x - \tilde{x}| \leq 1,5 \cdot IQR$
- Hodnoty mimo tento interval = **odlehlá pozorování** (outliers)

# Výpisky: Základy pravděpodobnosti a náhodných veličin

## 1. Základní pojmy

### Náhodný jev

- Jev, který v závislosti na náhodě **může, ale nemusí** nastat při uskutečňování daného komplexu podmínek
- Značíme velkými písmeny ze začátku abecedy (A, B, C...)
- **Náhodný pokus** = realizace určitého komplexu podmínek

### Krajní případy

| Jev         | Značení | Popis                                  |
| ----------- | ------- | -------------------------------------- |
| Jev jistý   | U       | Za daných podmínek nastává vždy        |
| Jev nemožný | V       | Za daných podmínek nemůže nastat nikdy |

### Operace s jevy

**1) Sjednocení** (A ∪ B nebo A + B)

- Nastoupení alespoň jednoho z jevů A nebo B

**2) Průnik** (A ∩ B nebo A · B)

- Současná realizace jevu A i jevu B

**3) Jev opačný** (Ā)

- Nenastoupení jevu A
- Platí: A ∪ Ā = U, A ∩ Ā = V
- **De Morganovy zákony**: A ∩ B = Ā ∪ B̄

**4) Neslučitelné (disjunktní) jevy**

- A ∩ B = V (nemohou nastat současně)

**5) Úplná skupina jevů**

- Sjednocení tvoří jev jistý: A₁ ∪ A₂ ∪ ... ∪ Aₙ = U
- Úplná skupina neslučitelných jevů = navíc jsou po dvou disjunktní

### Elementární jevy

- Jevy, které nelze dále rozložit
- **Prostor elementárních jevů** = množina všech elementárních jevů

---

## 2. Pravděpodobnost

### Klasická definice (Laplace)

$$P(A) = \frac{m}{n} = \frac{\text{počet příznivých případů}}{\text{počet všech možných případů}}$$

**Podmínky:** konečný počet výsledků, všechny stejně pravděpodobné

### Statistická definice

$$P(A) = \lim_{N \to \infty} \frac{M}{N}$$

kde N = počet pokusů, M = počet výskytů jevu A

### Axiomatická definice (Kolmogorov)

| Axiom | Formulace                                                     |
| ----- | ------------------------------------------------------------- |
| 1     | P(A) ≥ 0                                                      |
| 2     | P(U) = 1                                                      |
| 3     | Pro neslučitelné jevy: P(A₁ ∪ A₂ ∪ ...) = P(A₁) + P(A₂) + ... |

### Základní vlastnosti

- 0 ≤ P(A) ≤ 1
- P(U) = 1, P(V) = 0

---

## 3. Věty o počítání pravděpodobnosti

### Věta o sčítání

**Obecný případ:**
$$P(A \cup B) = P(A) + P(B) - P(A \cap B)$$

**Neslučitelné jevy:**
$$P(A \cup B) = P(A) + P(B)$$

### Podmíněná pravděpodobnost

$$P(A/B) = \frac{P(A \cap B)}{P(B)}, \quad P(B) > 0$$

**Nezávislost:** A je nezávislé na B, když P(A/B) = P(A)

### Věta o násobení

**Obecný případ:**
$$P(A \cap B) = P(A) \cdot P(B/A) = P(B) \cdot P(A/B)$$

**Nezávislé jevy:**
$$P(A \cap B) = P(A) \cdot P(B)$$

**Zobecnění pro n jevů:**

- Závislé: P(A₁ ∩ A₂ ∩ ... ∩ Aₙ) = P(A₁) · P(A₂/A₁) · P(A₃/A₁∩A₂) · ... · P(Aₙ/A₁∩...∩Aₙ₋₁)
- Nezávislé: P(A₁ ∩ A₂ ∩ ... ∩ Aₙ) = P(A₁) · P(A₂) · ... · P(Aₙ)

---

## 4. Náhodné veličiny

### Definice

- Kvantitativní charakteristika náhodného pokusu
- Značíme X, Y, Z... (konkrétní hodnoty x, y, z...)

### Dělení

| Typ           | Popis                                         | Příklady                                   |
| ------------- | --------------------------------------------- | ------------------------------------------ |
| **Diskrétní** | Konečně nebo spočetně mnoho oddělených hodnot | počet poruch, počet vajec, počet účastníků |
| **Spojitá**   | Libovolné hodnoty z intervalu                 | výška, hmotnost, spotřeba paliva           |

### Zákon rozdělení

Pravidlo přiřazující pravděpodobnosti hodnotám/intervalům hodnot

---

## 5. Formy zákonu rozdělení

### Řada rozdělení (diskrétní)

| x      | x₁  | x₂  | ... | xₙ  |
| ------ | --- | --- | --- | --- |
| P(X=x) | p₁  | p₂  | ... | pₙ  |

**Podmínka:** Σpᵢ = 1

**Grafické znázornění:** polygon rozdělení pravděpodobnosti

### Distribuční funkce F(x)

$$F(x) = P(X < x)$$

**Vlastnosti:**

- 0 ≤ F(x) ≤ 1
- F(-∞) = 0, F(+∞) = 1
- Neklesající funkce
- P(x₁ ≤ X &lt; x₂) = F(x₂) - F(x₁)

**Grafy:**

- Diskrétní: schodovitá čára (nespojitá)
- Spojitá: spojitá křivka

### Hustota pravděpodobnosti f(x) (spojité)

$$f(x) = F'(x) = \frac{dF(x)}{dx}$$

$$F(x) = \int_{-\infty}^{x} f(t)\,dt$$

**Vlastnosti:**

- f(x) ≥ 0
- $\int_{-\infty}^{+\infty} f(x)\,dx = 1$
- P(a &lt; X &lt; b) = $\int_{a}^{b} f(x)\,dx$

**Paradox nulové pravděpodobnosti:** P(X = x₁) = 0 u spojité veličiny

---

## 6. Číselné charakteristiky

### Střední hodnota E(X)

**Diskrétní:**
$$E(X) = \sum_{i} x_i \cdot p_i$$

**Spojitá:**
$$E(X) = \int_{-\infty}^{+\infty} x \cdot f(x)\,dx$$

**Vlastnosti:**

- E(C) = C
- E(aX + b) = a·E(X) + b
- E(X₁ + X₂ + ... + Xₙ) = E(X₁) + E(X₂) + ... + E(Xₙ)
- E(X·Y) = E(X)·E(Y) pro nezávislé veličiny

### Rozptyl D(X)

**Diskrétní:**
$$D(X) = \sum_{i} [x_i - E(X)]^2 \cdot p_i$$

**Spojitá:**
$$D(X) = \int_{-\infty}^{+\infty} [x - E(X)]^2 \cdot f(x)\,dx$$

**Výpočetní tvar:**
$$D(X) = E(X^2) - [E(X)]^2$$

**Vlastnosti:**

- D(C) = 0
- D(a + bX) = b²·D(X)
- D(X₁ + X₂ + ... + Xₙ) = D(X₁) + D(X₂) + ... + D(Xₙ) pro nezávislé veličiny

### Směrodatná odchylka

$$\sigma(X) = \sqrt{D(X)}$$

### Normovaná (standardizovaná) veličina

$$U = \frac{X - E(X)}{\sigma(X)}$$

Vlastnosti: E(U) = 0, D(U) = 1

---

## 7. Důležitá rozdělení

### Diskrétní rozdělení

| Rozdělení            | Parametry | E(X)    | D(X)                      | Pravděpodobnostní funkce                                     |
| -------------------- | --------- | ------- | ------------------------- | ------------------------------------------------------------ |
| **Alternativní**     | p         | p       | p(1-p)                    | P(X=k) = pᵏ(1-p)¹⁻ᵏ, k∈{0,1}                                 |
| **Binomické**        | n, p      | np      | np(1-p)                   | P(X=k) = $\binom{n}{k} p^k (1-p)^{n-k}$                      |
| **Poissonovo**       | λ (λ=np)  | λ       | λ                         | P(X=k) = $\frac{\lambda^k e^{-\lambda}}{k!}$                 |
| **Hypergeometrické** | M, N, n   | n·(M/N) | np(1-p)·$\frac{N-n}{N-1}$ | P(X=m) = $\frac{\binom{M}{m}\binom{N-M}{n-m}}{\binom{N}{n}}$ |

### Spojitá rozdělení

| Rozdělení              | Parametry | E(X)    | D(X)      | Hustota / Distribuční funkce                                          |
| ---------------------- | --------- | ------- | --------- | --------------------------------------------------------------------- |
| **Rovnoměrné**         | a, b      | (a+b)/2 | (b-a)²/12 | f(x) = $\frac{1}{b-a}$, F(x) = $\frac{x-a}{b-a}$                      |
| **Exponenciální**      | λ         | 1/λ     | 1/λ²      | f(x) = λe^(-λx), F(x) = 1 - e^(-λx) pro x ≥ 0                         |
| **Normální**           | μ, σ²     | μ       | σ²        | f(x) = $\frac{1}{\sigma\sqrt{2\pi}} e^{-\frac{(x-\mu)^2}{2\sigma^2}}$ |
| **Normované normální** | 0, 1      | 0       | 1         | φ(z) = $\frac{1}{\sqrt{2\pi}} e^{-\frac{z^2}{2}}$                     |

### Normální rozdělení N(μ, σ²)

**Standardizace:**
$$Z = \frac{X - \mu}{\sigma}, \quad Z \sim N(0,1)$$

**Pravděpodobnosti intervalů:**

- P(μ - σ &lt; X &lt; μ + σ) ≈ 0,683
- P(μ - 2σ &lt; X &lt; μ + 2σ) ≈ 0,955
- P(μ - 3σ &lt; X &lt; μ + 3σ) ≈ 0,997

**3σ pravidlo:** Prakticky všechny hodnoty leží v intervalu (μ - 3σ, μ + 3σ)

### Aproximace rozdělení

| Původní          | Podmínka                         | Aproximace          |
| ---------------- | -------------------------------- | ------------------- |
| Binomické        | n ≥ 30, p ≤ 0,1                  | Poissonovo (λ = np) |
| Hypergeometrické | n/N &lt; 0,1                     | Binomické           |
| Hypergeometrické | n/N &lt; 0,1, M/N &lt; 0,1       | Poissonovo          |
| Binomické        | dostatečně velký rozptyl (&gt;9) | Normální            |

# 4. Teorie odhadu

## 4.1. Základní principy odhadu

**Statistická indukce** = souhrn metod pro činění závěrů o základním souboru na základě náhodného výběru. Dělí se na:

- **teorii odhadu**
- **testování statistických hypotéz**

### Typy odhadů:

| Typ                        | Popis                                                                                                  |
| -------------------------- | ------------------------------------------------------------------------------------------------------ |
| **Bodový odhad**           | Jedno číslo vypočtené z výběrových dat, které považujeme za odhad parametru základního souboru         |
| **Interval spolehlivosti** | Interval, který s předem danou pravděpodobností obsahuje neznámou hodnotu parametru základního souboru |

### Označení charakteristik:

| Charakteristika     | Výběrový soubor | Základní soubor (populační) |
| ------------------- | --------------- | --------------------------- |
| Průměr              | x̄               | μ                           |
| Rozptyl             | s²              | σ²                          |
| Směrodatná odchylka | s               | σ                           |
| Medián              | x̃               | M                           |
| Relativní četnost   | m/n             | p                           |
| Rozsah souboru      | n               | N                           |

---

## 4.2. Bodový odhad

Bodovým odhadem parametru θ je statistika T = T(x₁, x₂, ..., xₙ) — funkce výběrových hodnot.

### Požadované vlastnosti odhadové statistiky:

| Vlastnost          | Definice                                                           |
| ------------------ | ------------------------------------------------------------------ | ----- | ---------------------------------------- |
| **a) Nestrannost** | E(T) = θ (střední hodnota statistiky rovná odhadovanému parametru) |
| **b) Konzistence** | lim(n→∞) P(                                                        | θ - T | ) &lt; ε = 1 pro libovolně malé ε &gt; 0 |
| **c) Výdatnost**   | Ze všech nestranných odhadů má nejmenší rozptyl                    |
| **d) Postačující** | Obsahuje všechny informace o populaciční charakteristice θ         |

### Odchylky od nestrannosti:

- **Pozitivně vychýlený odhad**: E(T) &gt; θ
- **Negativně vychýlený odhad**: E(T) &lt; θ
- **Vychýlení odhadu**: E(T) - θ
- **Asymptoticky nestranný odhad**: lim(n→∞) [E(T) - θ] = 0

### 4.2.1. Bodový odhad průměru základního souboru

**Výběrový průměr x̄**:

- E(x̄) = μ → **nestranný odhad**
- D(x̄) = σ²/n → **konzistentní odhad**
- Pro normální rozdělení: výdatný a postačující odhad

### 4.2.2. Bodový odhad rozptylu základního souboru

**Výběrový rozptyl s²**:

- E(s²) = σ² → **nestranný odhad**
- Konzistentní odhad populacečního rozptylu σ²

---

## 4.3. Intervalový odhad

Metoda určující meze intervalu, který s předem danou pravděpodobností obsahuje neznámou hodnotu populaceční charakteristiky.

### Základní pojmy:

| Pojem                                                  | Definice                                                                     |
| ------------------------------------------------------ | ---------------------------------------------------------------------------- |
| **Hranice meze spolehlivosti**                         | Hranice intervalu spolehlivosti                                              |
| **Spolehlivost odhadu** / **Koeficient spolehlivosti** | Pravděpodobnost, že interval obsahuje neznámou charakteristiku; značí se 1-α |
| **Hladina významnosti**                                | α (obvykle 0,1; 0,05; 0,01)                                                  |

### Typy intervalů spolehlivosti:

1. **Jednostranné** — omezeny pouze shora nebo pouze zdola
   - _Pravostranný_ — omezen shora
   - _Levostranný_ — omezen zdola
2. **Dvoustranné** — omezeny zdola i shora

### 4.3.1. Intervalový odhad průměru základního souboru

**Připustná chyba odhadu Δ** = polovina délky intervalu spolehlivosti

Pro normální rozdělení základního souboru:
&gt; P(x̄ - Δ &lt; μ &lt; x̄ + Δ) = 1 - α

#### Vzorce pro interval spolehlivosti pro průměr μ:

| Podmínka                                | Typ intervalu | Vzorec                         |
| --------------------------------------- | ------------- | ------------------------------ |
| **Známe σ²**, výběr **s opakováním**    | Dvoustranný   | x̄ ± uₐ · σ/√n                  |
| **Neznáme σ²**, výběr **s opakováním**  | Dvoustranný   | x̄ ± tₐ · s/√n                  |
| **Známe σ²**, výběr **bez opakování**   | Dvoustranný   | x̄ ± uₐ · σ/√n · √((N-n)/(N-1)) |
| **Neznáme σ²**, výběr **bez opakování** | Dvoustranný   | x̄ ± tₐ · s/√n · √((N-n)/(N-1)) |

Kde:

- **uₐ** — kritická hodnota normovaného normálního rozdělení
- **tₐ(f)** — kritická hodnota Studentova rozdělení, f = n-1 stupňů volnosti
- **n** — rozsah výběrového souboru
- **N** — rozsah základního souboru

### Stanovení rozsahu souboru:

**Výběr s opakováním** (známé σ²):
&gt; n = (uₐ² · σ²) / Δ²

**Výběr bez opakování** (známé σ²):
&gt; n = (uₐ² · σ² · N) / [Δ²(N-1) + uₐ²σ²]

**Dvoufázový náhodný výběr** (neznámé σ²):

1. Předvýběr o rozsahu m → výpočet s²
2. Výběr s opakováním: n = [tₐ²(m-1) · s²] / Δ²
3. Výběr bez opakování: n = [tₐ²(m-1) · s² · N] / [Δ²(N-1) + tₐ²(m-1)s²]

### 4.3.2. Intervalový odhad rozptylu σ² normálně rozděleného základního souboru

Pro **neznámé μ** — používá se χ² (chi-kvadrát) rozdělení:

| Typ intervalu | Vzorec                                      |
| ------------- | ------------------------------------------- |
| Dvoustranný   | [(n-1)s²/χ²ₐ/₂(n-1) ; (n-1)s²/χ²₁₋ₐ/₂(n-1)] |

**Poznámka**: Interval pro rozptyl **není symetrický** vzhledem k s².

### Interval spolehlivosti pro směrodatnou odchylku σ:

| Typ intervalu | Vzorec                                            |
| ------------- | ------------------------------------------------- |
| Dvoustranný   | [s·√((n-1)/χ²ₐ/₂(n-1)) ; s·√((n-1)/χ²₁₋ₐ/₂(n-1))] |

Pro **velké výběry** (n &gt; 120): s má přibližně N(σ; σ²/2n)

### 4.3.3. Intervalový odhad parametru p alternativního rozdělení

Bodový odhad: **výběrový podíl** m/n (výběrová relativní četnost) — nestranný odhad parametru p.

Pro **velké rozsahy** — aproximace normálním rozdělením se střední hodnotou p a směrodatnou odchylkou √[p(1-p)/n]

#### Vzorce pro interval spolehlivosti pro parametr p (velký rozsah):

| Typ výběru        | Typ intervalu | Vzorec                                     |
| ----------------- | ------------- | ------------------------------------------ |
| **S opakováním**  | Dvoustranný   | m/n ± uₐ · √[(m/n)(1-m/n)/n]               |
| **Bez opakování** | Dvoustranný   | m/n ± uₐ · √[(m/n)(1-m/n)/n · (N-n)/(N-1)] |

**Oprava pro spojitost** (tabulka 4.6): přidává se člen ±1/(2n)

---

## 4.4. Neparametrický odhad mediánu základního souboru

**Předpoklad**: spojitost náhodné veličiny.

Postup:

1. Náhodný výběr uspořádat do **variační řady** (vzestupně podle velikosti)
2. Pro rozsah n a hladinu významnosti α najít v tabulkách číslo **k**

**Interval spolehlivosti pro medián M**:
&gt; P(xₖ ≤ M ≤ xₙ₋ₖ₊₁) ≥ 1-α

Kde xₖ je k-tá hodnota v uspořádané variační řadě.

# 2. Náhodný výběr

## 2.1. Základní statistické pojmy

### Statistika

- Metody získávání, popisu a analýzy experimentálních dat
- Přistupuje k pozorování z pravděpodobnostního hlediska (jako výsledek náhodného pokusu)
- Prakticky všechna pozorování vykazují náhodná kolísání

### Základní pojmy

| Pojem                    | Definice                                                                                                    |
| ------------------------ | ----------------------------------------------------------------------------------------------------------- |
| **Statistický soubor**   | Konečná neprázdná množina prvků (předmětů, případů, jednotek) majících určité společné vlastnosti           |
| **Statistická jednotka** | Prvek statistického souboru                                                                                 |
| **Rozsah souboru**       | Počet statistických jednotek v souboru                                                                      |
| **Statistický znak**     | Vlastnost sledovaná na statistických jednotkách (životnost, spotřeba, teplota, hmotnost, rozměry, barva...) |

#### Dělení souborů podle rozsahu:

- **Malé**: &lt; 30 jednotek
- **Střední**: 30–100 jednotek
- **Velké**: &gt; 100 jednotek

### Druhy statistických souborů

- **Jednorozměrné**: Zjišťujeme pouze jeden statistický znak na jednotce
- **Vícerozměrné** (dvourozměrné, trojrozměrné...): Zjišťujeme více znaků a zkoumáme jejich vzájemný vztah

### Dělení statistických znaků

#### 1. Kvantitativní znaky (vyjádřitelné čísly)

- **Diskrétní (nespojité)**: Nábývají izolovaných hodnot (počet zrn v klasu, počet rostlin na m², počet zaměstnanců)
- **Spojité**: Nábývají libovolných reálných hodnot z intervalu (hektarový výnos, doba trvání, výkon motoru, teplota, spotřeba paliva)

#### 2. Kvalitativní znaky

- Popisují se slovně nebo definicí (vzhled výrobku, druh půdy, příčina poruchy, barva květu, národnost, pohlaví)

---

## 2.2. Základní soubor, náhodný výběr

### Základní soubor

- Soubor všech statistických jednotek, na něž se vztahuje statistické zkoumání
- Může být **konečný** nebo **nekonečný** (lze za stálých podmínek opakovat)

### Druhy statistického zjišťování

| Typ                           | Popis                                                                                          |
| ----------------------------- | ---------------------------------------------------------------------------------------------- |
| **Úplné (vyčerpávající)**     | Prošetřeny všechny jednotky souboru (sčítání lidu, soupis hospodářského zvířectva, agrocenzus) |
| **Neúplné (nevyčerpávající)** | Prošetřena pouze část souboru – **výběrové šetření**                                           |

### Výhody a nevýhody úplného zjišťování

**Výhody:**

1. Za předpokladu bezchybné registrace poskytuje zcela přesné charakteristiky souboru (parametry rozdělení, míry závislosti)
2. Umožňuje informaci nejen o souboru jako celku, ale i o každém prvku jednotlivě (nezastupitelné pro řízení a kontrolu)

**Nevýhody:**

- Nákladné, časově náročné, někdy nemožné provést (destruktivní zkoumání)

### Druhy neúplného zjišťování

| Metoda                       | Popis                                                                            |
| ---------------------------- | -------------------------------------------------------------------------------- |
| **Náhodný výběr**            | Nejpoužívanější – každá jednotka má stejnou pravděpodobnost výběru               |
| **Anketa**                   | Rozesílání dotazníků – problém s nízkou návratností a reprezentativností         |
| **Metoda základního masivu** | Pro soubory s několika velkými a mnoha malými jednotkami – prošetří se jen velké |
| **Stratifikovaný výběr**     | Základní soubor rozdělen do vrstev, z každé se vybírá samostatně                 |
| **Dvoustupňový výběr**       | Výběr nejprve větších skupin, pak jednotek uvnitř nich                           |

---

## 2.2.1. Náhodný výběr

### Prostý náhodný výběr

- Každá jednotka má **stejnou pravděpodobnost** zařazení do výběru
- Základní soubor se rozdělí na **výběrové jednotky** (totožné s elementárními nebo jejich skupiny)

### Dělení podle způsobu výběru:

| Typ                             | Popis                                                                                                                            |
| ------------------------------- | -------------------------------------------------------------------------------------------------------------------------------- |
| **S opakováním (s vracením)**   | Jednotka se po prozkoumání vrátí zpět – rozsah souboru se nemění, pravděpodobnost zůstává stejná                                 |
| **Bez opakování (bez vracení)** | Jednotka se nevrací – rozsah souboru se zmenšuje, pravděpodobnost výběru dalších jednotek roste (u velkých souborů zanedbatelné) |

### Opora výběru

- Seznam všech značek (zástupců) jednotek – listky se jmény, seznamy, mapy
- Musí být **úplná**, aktuální, jednoznačná korespondence mezi značkou a jednotkou

### Techniky náhodného vybírání

| Technika                           | Popis                                                                                               |
| ---------------------------------- | --------------------------------------------------------------------------------------------------- |
| **Losování**                       | Důkladné promíchání všech jednotek/zástupců, výběr bez pravidel                                     |
| **Tabulky náhodných čísel**        | Jednotky očíslovány, vybírá se podle náhodných čísel z tabulky                                      |
| **Systematický výběr**             | Jednotky seřazeny do posloupnosti, vybírá se každý k-tý prvek od náhodně zvoleného startu           |
| **Výběr pomocí nezávislého znaku** | Výběr podle znaku nezávislého na zkoumaném (např. datum narození matky, počáteční písmeno příjmení) |

**Podmínky pro systematický výběr jako ekvivalent náhodného:**

1. Seřazení musí být zcela objektivní
2. Seřazení nesmí souviset se zkoumanou skutečností (vhodné: abecední pořadí, geografické umístění)

---

## 2.2.2. Anketa

- Rozesílání dotazníků určitému okruhu osob/podniků/institucí
- Odpoví zpravidla jen menší část (cca 1/3)
- **Problémy:**
  - Nízká návratnost
  - Vztah mezi ochotou odpovídat a dotazovanou skutečností (zkreslení)
  - Příprava otázek – nesmí být sugestivní, musí být srozumitelné
  - Zpracování otevřených otázek je obtížné

---

## 2.2.3. Metoda základního masivu

- Použitelná, když soubor tvoří několik velkých (objemných) jednotek a velký počet malých
- Prošetří se jen velké jednotky, malé se vynechají
- **Výhoda:** Úspora práce a času, podchycena převážná část zkoumaného jevu
- **Nevýhoda:** Neumožňuje zobecňovat na celý soubor (jev vykazuje jiné zákonitosti u malých jednotek)

---

## Klíčové požadavky na výběrové šetření

**Reprezentativnost výběru** – výběr musí obsahovat podstatné a charakteristické rysy základního souboru, aby bylo možné provést zobecnění výsledků

# Statistické metody II – Výpisky

## 1. Závislost kvalitativních znaků

**Kvalitativní znaky** – znaky vyjádřené slovně.

| Typ znaku    | Popis             | Typ závislosti      |
| ------------ | ----------------- | ------------------- |
| Alternativní | 2 obměny (Ano/Ne) | Asociační závislost |
| Množný       | více obměn        | Kontingence         |

Při zpracování tabulek řešíme dvě otázky:

1. Zda mezi znaky **existuje** závislost
2. Jaká je **síla** závislosti

---

## 1.1 Asociační tabulky (2 × 2)

| Znak A \ Znak B | Ano | Ne  | Celkem |
| --------------- | --- | --- | ------ |
| Ano             | a   | b   | a+b    |
| Ne              | c   | d   | c+d    |
| Celkem          | a+c | b+d | n      |

- **Vnitřní pole** = sdružené četnosti
- **Okrajové (marginální) četnosti** = výsledky třídění podle jednoho znaku

---

## Testy nezávislosti v asociační tabulce

**H₀: mezi sledovanými znaky neexistuje závislost**

### Pravidla pro volbu testu

| Podmínka    | Test                                         |
| ----------- | -------------------------------------------- |
| n > 40      | χ² test nezávislosti                         |
| n < 20      | Fisherův faktoriálový test                   |
| 20 < n < 40 | Vypočítat teoretické četnosti a₀, b₀, c₀, d₀ |

Při 20 < n < 40 platí:

- Všechny teoretické četnosti > 5 → **χ² test**
- Alespoň jedna teoretická četnost < 5 → **Fisherův test**

### Vzorce pro teoretické četnosti

```
a₀ = (a+b)(a+c) / n
b₀ = (a+b)(b+d) / n
c₀ = (c+d)(a+c) / n
d₀ = (c+d)(b+d) / n
```

---

## χ² test nezávislosti (asociační tabulka)

**Testové kritérium:**

```
χ² = n(ad − bc)² / [(a+b)(a+c)(b+d)(c+d)]       (1.1)
```

**Rozhodnutí:** Je-li χ² > χ²_α(1), nulovou hypotézu zamítáme.  
Kritická hodnota: χ²_0,05(1) = 3,841

---

## Fisherův faktoriálový test

**Postup:**

1. Najít nejmenší skutečnou sdruženou četnost
2. Postupně ji zmenšovat o 1 až na 0 (při zachování okrajových četností)
3. Pro každou tabulku vypočítat pravděpodobnost pᵢ:

```
pᵢ = (a+b)!(c+d)!(a+c)!(b+d)! / (n! · a! · b! · c! · d!)     (1.2)
```

4. Součet všech pᵢ = hodnota testového kritéria

**Rozhodnutí:** Je-li Σpᵢ < α, nulovou hypotézu zamítáme.

---

## Síla závislosti v asociační tabulce

### Koeficient asociace V

```
V = (ad − bc) / √[(a+b)(c+d)(a+c)(b+d)]          (1.3)
```

Nebo ze spočítané hodnoty χ²:

```
|V| = √(χ²/n)                                      (1.4)
```

- Nabývá hodnot z intervalu (−1 ; 1)
- 0 = nezávislost, ±1 = úplná závislost
- Hodnotí se podobně jako korelační koeficient

---

## 1.2 Kontingenční tabulky (k × m)

**Kontingence** = vztah dvou či více kvalitativních znaků, z nichž alespoň jeden je množný.

### Teoretické četnosti

```
n_oj = (n_i• · n_•j) / n                          (1.5)
```

### χ² test nezávislosti (kontingenční tabulka)

```
χ² = ΣΣ (n_ij − n_oj)² / n_oj                    (1.6)
```

Porovnáváme s kritickou hodnotou χ²_α(k−1)(m−1).

**Podmínka použití χ² testu:**

- Podíl teoretických četností < 5 nesmí překročit **20 %**
- Žádná teoretická četnost nesmí být < 1

Pokud podmínka není splněna → **slučujeme slabé skupiny** (řádky nebo sloupce) a postup opakujeme.

---

## Síla závislosti v kontingenční tabulce

### Pearsonův koeficient kontingence

```
C = √(χ² / (χ² + n))                              (1.7)
```

Nenabývá hodnoty 1 → je nutné normalizovat:

```
Cₙ = C / C_max                                     (1.8)
```

Hodnota C_max se vyhledá v tabulkách podle počtu obměn znaku s méně obměnami.

### Cramérův koeficient kontingence

```
V = √(χ² / (n(q−1))),  kde q = min(r, s)          (1.9)
```

> Chí-kvadrátové míry jsou citlivé na rozměry tabulky a marginální rozdělení. Jasnou interpretaci mají pouze krajní hodnoty 0 a 1.

---

## PRE míry (Proportional Reduction of Error)

Preferované v moderním statistickém softwaru. Měří redukci chyby predikce znaku B při znalosti znaku A.

### Pro nominální znaky

| Míra                               | Popis                                                                        |
| ---------------------------------- | ---------------------------------------------------------------------------- |
| Goodmanův koeficient lambda        | Informační přínos A pro predikci B; 0 = žádná info, 1 = jednoznačná predikce |
| Symetrizovaný koef. lambda         | Pro oboustrannou závislost                                                   |
| Goodmanovo-Kruskalovo tau          | 0 = nezávislost                                                              |
| Symetrizovaný koef. prop. predikce | Pro symetrickou závislost                                                    |

### Pro ordinální znaky

| Míra                                    | Popis                                  |
| --------------------------------------- | -------------------------------------- |
| Somersův koeficient                     | Konkordantní vs. diskordantní páry     |
| Koeficient gamma                        | Pro symetricky závislé ordinální znaky |
| Kendallův koeficient ordinální korelace | Míra pořadové korelace                 |

---

## 1.3 Znaménkové schéma odchylek

Určuje, které kombinace znaků **nejvíce ovlivňují** výslednou závislost.

**Postup:**

1. Pro každé políčko kontingenční tabulky sestavit čtyřpolní tabulku 2 × 2
2. Pro každou tabulku provést dílčí χ² test
3. Porovnat s kritickými hodnotami a přiřadit znaménka:

| Hodnota χ²        | Znaménko     |
| ----------------- | ------------ |
| χ² < 3,84         | 0            |
| 3,84 < χ² < 6,62  | + nebo −     |
| 6,62 < χ² < 10,83 | ++ nebo −−   |
| χ² > 10,83        | +++ nebo −−− |

- **Kladné znaménko**: skutečná četnost > teoretická
- **Záporné znaménko**: skutečná četnost < teoretická

Políčka s nejvyšším počtem znamének = kombinace znaků s nejsilnějším vlivem na závislost.

---

## 1.4 Další testy pro tabulky 2 × 2

### McNemerův test

Pro závislá pozorování (měření **před a po** zákroku).

**Podmínka:** b + c > 10

```
χ² = (b − c)² / (b + c)                           (1.10)
```

**Rozhodnutí:** χ² > χ²_α(1) → zamítáme H₀

---

### Mediánový test

Pro **dva nezávislé výběry**. Oba výběry se sloučí, určí se medián a data se roztřídí.

```
χ² = n(ad − bc)² / [(a+b)(a+d)(a+c)(b+d)]         (1.11)
```

**Rozhodnutí:** χ² > χ²_α(1) → zamítáme H₀

---

## Míry rizika (pro asociační tabulky 2 × 2)

| Expozice \ Ohrožení | Ano | Ne  |
| ------------------- | --- | --- |
| Ano                 | a   | b   |
| Ne                  | c   | d   |

### Relativní riziko (RR)

> „Kolikrát se zvýší pravděpodobnost ohrožení"

```
RR = [a(c+d)] / [c(a+b)]                          (1.12)
```

- RR = 1 → ohrožení nezávisí na expozici
- RR > 1 → větší pravděpodobnost ohrožení u exponovaných

### Křížový poměr / Odds ratio (OR)

> „Kolikrát je vyšší šance na ohrožení"

```
OR = ad / bc                                       (1.13)
```

### Atributivní riziko (AR)

> „O kolik se změní pravděpodobnost rizika"

```
AR = a/(a+b) − c/(c+d)                            (1.14)
```

### Relativní atributivní riziko (AF)

> „O kolik procent se změní pravděpodobnost rizika"

```
AF = [a/(a+b) − c/(c+d)] / [a/(a+b)] · 100 (%)   (1.15)
```

---

# Analýza časových řad – výpisky

---

## 1. Základní pojmy

**Časová řada** – množina pozorování kvantitativní charakteristiky (ukazatele), uspořádaná v čase. Jednotlivé úrovně závisle proměnné Y jsou uvažovány jako funkce času.

### Typy časových řad

| Kritérium           | Typy                                                                                    |
| ------------------- | --------------------------------------------------------------------------------------- |
| Charakter ukazatele | **Okamžikové** (hodnoty k určitému datu) / **Intervalové** (hodnoty za určitý interval) |
| Periodicita         | **Krátkodobé** (periodicita < 1 rok) / **Dlouhodobé** (periodicita ≥ 1 rok)             |
| Obsah               | **Původních hodnot** / **Odvozených charakteristik**                                    |

---

## 2. Elementární charakteristiky

### Absolutní charakteristiky

**První diference** (absolutní přírůstky):

$$dy_t = y_t - y_{t-1}, \quad t = 2, 3, \ldots, n$$

**Druhé absolutní diference** (absolutní zrychlení/zpomalení):

$$d^{(2)}y_t = dy_t - dy_{t-1} = y_t - 2y_{t-1} + y_{t-2}, \quad t = 3, \ldots, n$$

### Relativní charakteristiky

**Koeficient růstu:**

$$k_t = \frac{y_t}{y_{t-1}}, \quad t = 2, 3, \ldots, n$$

Vyjádřený v procentech = **tempo růstu**.

**Průměrný koeficient růstu** (geometrický průměr):

$$\bar{k} = \sqrt[n-1]{\frac{y_n}{y_1}}$$

> ⚠️ Má smysl pouze při **monotónním vývoji** řady – závisí pouze na krajních hodnotách!

### Průměry časových řad

- **Intervalová řada** → prostý nebo vážený aritmetický průměr (váhy = délky intervalů)
- **Okamžiková řada** → **chronologický průměr**:

$$\bar{y} = \frac{\frac{y_1}{2} + y_2 + y_3 + \cdots + y_{n-1} + \frac{y_n}{2}}{n-1}$$

Při nestejně dlouhých intervalech se používá **vážený chronologický průměr**.

---

## 3. Modely časových řad

### Složky časové řady

1. **Trend** (T) – dlouhodobá celková tendence vývoje
2. **Periodická složka** (P) – periodicky se opakující výkyvy okolo trendu:
   - _Cyklické kolísání_ – perioda > 1 rok
   - _Sezónní kolísání_ – roční perioda
   - _Krátkodobé kolísání_ – perioda < 1 rok
3. **Náhodná složka** (ε) – nepravidelné, nepředvídatelné výkyvy

### Typy modelů

**Aditivní model:**
$$y_t = T_t + P_t + \varepsilon_t$$

**Multiplikativní model:**
$$y_t = T_t \cdot P_t \cdot \varepsilon_t$$

> Multiplikativní model lze logaritmickou transformací převést na aditivní.

- Stálá relativní amplituda periodických kolísání → **aditivní model**
- Amplituda úměrná úrovni trendu → **multiplikativní model**

### Typy řad podle složek

| Typ řady             | Podmínka                                       |
| -------------------- | ---------------------------------------------- |
| **Periodická**       | obsahuje trend + periodická + náhodná kolísání |
| **Sezónně zatížená** | P zastoupena sezónní složkou S                 |
| **Neperiodická**     | P = 0                                          |
| **Stacionární**      | T = konst.                                     |

---

## 4. Vyrovnávání neperiodických časových řad

### Mechanické vyrovnávání – klouzavé průměry

**k-členné klouzavé průměry** – posloupnost aritmetických průměrů k sousedních hodnot.

**Výhody:** jednoduchost, nevyžaduje znalost kauzálního mechanismu, snadná interpretace.

**Nevýhody:**

- Pouze aproximace skutečného trendu
- Citlivost na extrémní hodnoty
- k−1 hodnot zůstane nevyrovnáno
- Subjektivní volba počtu členů
- Nevhodné pro prognózování

### Analytické vyrovnávání

Trend se vyjadřuje jako funkce času se známým analytickým tvarem. Parametry se odhadují metodou nejmenších čtverců (MNČ):

$$\sum_{t=1}^{n}(y_t - y_t')^2 = \min$$

---

## 5. Klasické modely trendu

| Typ           | Vzorec                          |
| ------------- | ------------------------------- |
| Lineární      | $T_t = a + bt$                  |
| Kvadratická   | $T_t = a + bt + ct^2$           |
| Logaritmická  | $T_t = a + b \log t$            |
| Exponenciální | $T_t = a \cdot b^t$             |
| Mocninná      | $T_t = a \cdot t^b$             |
| Odmocninná    | $T_t = a + b\sqrt{t}$           |
| Kombinovaná   | $T_t = a + bt + c\sqrt{t}$      |
| Logistická    | $T_t = \dfrac{k}{1 + e^{a+bt}}$ |

### Výběr trendové funkce – vodítka

| Vlastnost dat                            | Doporučená funkce |
| ---------------------------------------- | ----------------- |
| Absolutní přírůstky přibližně konstantní | **Lineární**      |
| Relativní přírůstky přibližně konstantní | **Exponenciální** |
| Abs. přírůstky ∝ relativním přírůstkům t | **Logaritmická**  |
| Rel. přírůstky ∝ relativním přírůstkům t | **Mocninná**      |

V praxi se výběr doplňuje grafickou analýzou a porovnáním měr shody.

### Odhad parametrů lineárního trendu (MNČ)

$$b = \frac{n\sum ty_t - \sum t \sum y_t}{n\sum t^2 - \left(\sum t\right)^2}$$

$$a = \bar{y} - b\bar{t}$$

---

## 6. Volba vhodného modelu trendu

### Index determinace

$$I^2 = 1 - \frac{\sum_{t=1}^{n}(y_t - y_t')^2}{\sum_{t=1}^{n}(y_t - \bar{y})^2}, \quad 0 \leq I^2 \leq 1$$

Čím blíže 1, tím lepší model. Nejlepší model = **maximální I²**.

**Index korelace:** $I = \sqrt{I^2}$

### Reziduální směrodatná odchylka

$$s = \sqrt{\frac{\sum_{t=1}^{n}(y_t - y_t')^2}{n - k}} = \sqrt{\frac{\sum e_t^2}{n-k}}$$

kde k = počet odhadovaných parametrů.

### Další kritéria (implementována v SAS, STATGRAPHICS, SPSS apod.)

| Zkratka  | Název                           | Vzorec                                                 |
| -------- | ------------------------------- | ------------------------------------------------------ |
| ME       | Mean Error                      | $\frac{\sum(y_t - y_t')}{n}$                           |
| MSE      | Mean Squared Error              | $\frac{\sum(y_t-y_t')^2}{n-k}$                         |
| RMSE     | Root MSE                        | $\sqrt{MSE}$                                           |
| MAE      | Mean Absolute Error             | $\frac{1}{n}\sum\|y_t-y_t'\|$                          |
| MPE      | Mean Percent Error              | $\frac{100}{n}\sum\frac{y_t-y_t'}{y_t}$                |
| **MAPE** | **Mean Absolute Percent Error** | $\frac{100}{n}\sum\left\|\frac{y_t-y_t'}{y_t}\right\|$ |

> Preferujeme model s **nejnižšími hodnotami** těchto ukazatelů.
> Pro srovnání různých řad používáme jen relativní míry (MPE, MAPE).
> Za dostatečně kvalitní modely se orientačně pokládají ty s **MAPE < 10 %**.

---

## 7. Statistická verifikace trendového modelu

Test významnosti parametrů lineárního trendu $T_t = a + bt$ (analogie s regresní analýzou).

**Test H₀: β = 0** (koeficient b statisticky nevýznamný):

$$t = \frac{b}{s_b}, \quad s_b = \frac{s}{\sqrt{\sum t^2 - n\bar{t}^2}}$$

Statistika má Studentovo t-rozdělení s f = n − 2 stupni volnosti.
Zamítáme H₀, pokud |t| > t_α(n−2).

**Test H₀: α = 0:**

$$t = \frac{a}{s_a}, \quad s_a = s\sqrt{\frac{\sum t^2}{n\sum t^2 - (n\bar{t})^2}}$$

---

## 8. Adaptivní prognostické modely

### Klasické vs. adaptivní modely

- **Klasické modely** – vhodné při stabilních vnějších podmínkách (_princip ceteris paribus_)
- **Adaptivní modely** – nepředpokládají stabilitu trendu ani jeho parametrů; průběžně se aktualizují na základě nových dat

### Brownovy modely exponenciálního vyrovnávání

Využívají systém diskontních vah – starší pozorování mají exponenciálně klesající váhu.

| Varianta                    | Charakter trendu v krátkých úsecích |
| --------------------------- | ----------------------------------- |
| Jednoduché exp. vyrovnávání | konstantní                          |
| Dvojité exp. vyrovnávání    | lineární                            |
| Trojité exp. vyrovnávání    | kvadratický                         |

**Rekurentní vzorec (jednoduché exp. vyrovnávání):**

$$y_t' = \alpha y_t + (1 - \alpha)y_{t-1}'$$

kde $\alpha \in (0, 1)$ je **vyrovnávací konstanta**.

| Hodnota α | Situace                           |
| --------- | --------------------------------- |
| blízká 1  | rychlé, nepravidelné změny trendu |
| blízká 0  | pomalé, postupné změny trendu     |

Optimální α se hledá metodou zkoušek a omylů (minimalizace MSE).

**Prognóza:** $y_{t+h}' = y_t'$ pro libovolný horizont h > 0.

---

## 9. Sezónnost v časových řadách

Sezónní složka se vyskytuje v **krátkodobých** časových řadách (perioda sledování < 1 rok).

### Sezónní indexy

$$s_t = \frac{y_t}{y_t'}$$

kde $y_t'$ je:

- **aritmetický průměr za periodu** – pro řady bez trendu nebo se zanedbatelným trendem
- **vyrovnaná hodnota** (klouzavé průměry nebo analytické vyrovnávání) – pro řady s výrazným trendem

**Průměrné sezónní indexy** = aritmetické průměry individuálních indexů pro stejná období.

**Standardizace (normování):** Součet průměrných sezónních indexů by měl být roven počtu sezón. Pokud není, vynásobí se korekčním koeficientem → vznikají **sezónní faktory**.

**Sezónní očišťování:** Původní hodnoty se vydělí odpovídajícími sezónními faktory → umožňuje vzájemné porovnání po sobě jsoucích údajů uvnitř roku.

---

## 10. Korelace časových řad

### Zdánlivá korelace

Paralelní průběh dvou časových řad (zvl. se stejným trendem) způsobuje vysoké hodnoty korelačního koeficientu, aniž by existovala skutečná příčinná závislost → **zdánlivá (spuriózní) korelace**.

### Správný postup

1. **Očistit** obě řady od trendu (příp. i periodické složky)
2. Určit **reziduální složky**: $e_t = y_t - y_t'$
3. Vypočítat **koeficient korelace reziduí** $r(e_x, e_y)$

Skutečná závislost mezi časovými řadami se projevuje v **paralelním průběhu náhodných (reziduálních) složek**.

# 5. Testování statistických hypotéz

## 5.1. Úvod do obecné teorie testování statistických hypotéz

**Statistická hypotéza** – tvrzení o tvaru nebo charakteristikách rozdělení statistických znaků.

**Test** – postup ověřující platnost hypotézy na základě náhodného výběru.

- **Parametrické hypotézy** – týkají se hodnot parametrů rozdělení
- **Neparametrické hypotézy** – tvrzení o zákonu rozdělení bez precizování parametrů

**Nulová hypotéza (H₀)** – testovaná hypotéza, obvykle tvrzení o rovnosti parametru s konkrétní hodnotou: H₀: θ = θ₀

**Alternativní hypotéza (H₁)** – popírá platnost H₀, přijímá se při zamítnutí H₀:

| Typ          | Zápis         |
| ------------ | ------------- |
| Oboustranná  | H₁: θ ≠ θ₀    |
| Pravostranná | H₁: θ &gt; θ₀ |
| Levostranná  | H₁: θ &lt; θ₀ |

**Testové kritérium (testová statistika)** – T = T(x₁, x₂, ..., xₙ), míra nesouladu s H₀

**Kritický obor K** – obor zamítnutí H₀ (hodnoty T, jejichž výskyt je za platnosti H₀ málo pravděpodobný)

**Obor přijetí** – hodnoty T, které nejsou v rozporu s H₀

**Kritické hodnoty** – hodnoty oddělující kritický obor a obor přijetí

### Chyby při testování

- **Chyba 1. druhu** – zamítnutí H₀, když platí (falešně pozitivní)
- **Chyba 2. druhu** – nezamítnutí H₀, když neplatí (falešně negativní)

**Hladina významnosti (α)** – pravděpodobnost chyby 1. druhu:
$$\alpha = P(T \in K \mid H_0)$$

**Pravděpodobnost chyby 2. druhu (β)**:
$$\beta = P(T \notin K \mid H_1)$$

**Síla testu** – 1 - β, pravděpodobnost správného zamítnutí H₀

Běžné hodnoty α: 0,05 (5% hladina) nebo 0,01 (1% hladina)

### Postup testování statistických hypotéz

1. Formulace nulové a alternativní hypotézy
2. Volba hladiny významnosti
3. Volba testového kritéria
4. Určení kritického oboru
5. Výpočet hodnoty testového kritéria z výběrových hodnot
6. Rozhodnutí: padne-li hodnota do kritického oboru → zamítnutí H₀

---

## 5.2. Vybrané parametrické testy

### 5.2.1. Test hypotézy o rozptylu normálního rozdělení

H₀: σ² = σ₀²

Testové kritérium:
$$\chi^2 = \frac{(n-1)s^2}{\sigma_0^2}$$

Kritické obory (tabulka):

| Alternativa     | Kritický obor                                        |
| --------------- | ---------------------------------------------------- |
| H₁: σ² ≠ σ₀²    | χ² &gt; χ²*{α/2,(n-1)} nebo χ² &lt; χ²*{1-α/2,(n-1)} |
| H₁: σ² &gt; σ₀² | χ² &gt; χ²\_{α,(n-1)}                                |
| H₁: σ² &lt; σ₀² | χ² &lt; χ²\_{1-α,(n-1)}                              |

### 5.2.2. Test hypotézy o průměru normálního rozdělení (jednovýběrový t-test)

H₀: μ = μ₀

Testová statistika:
$$t = \frac{\bar{x} - \mu_0}{s}\sqrt{n}$$

kde $s^2 = \frac{1}{n-1}\sum_{i=1}^{n}(x_i - \bar{x})^2$

Kritické obory (tabulka 5.2):

| Alternativa   | Kritický obor           |
| ------------- | ----------------------- |
| H₁: μ ≠ μ₀    | \|t\| &gt; t\_{α,(n-1)} |
| H₁: μ &gt; μ₀ | t &gt; t\_{2α,(n-1)}    |
| H₁: μ &lt; μ₀ | t &lt; -t\_{2α,(n-1)}   |

### 5.2.3. Test hypotézy o parametru p alternativního rozdělení

H₀: p = p₀

Pro dostatečně velký výběr (n &gt; 9/(p₀(1-p₀)) nebo n &gt; 5/p₀):

$$u = \frac{\frac{m}{n} - p_0}{\sqrt{\frac{p_0(1-p_0)}{n}}}$$

nebo při absolutních četnostech:
$$u = \frac{m - np_0}{\sqrt{np_0(1-p_0)}}$$

### 5.2.4. Srovnání rozptylů dvou normálních rozdělení (F-test)

H₀: σ₁² = σ₂²

Testové kritérium:
$$F = \frac{s_1^2}{s_2^2}, \quad s_1^2 \geq s_2^2$$

kde $s_1^2 = \frac{1}{m-1}\sum_{i=1}^{m}(x_i - \bar{x})^2$, $s_2^2 = \frac{1}{n-1}\sum_{i=1}^{n}(y_i - \bar{y})^2$

### 5.2.5. Porovnání průměrů dvou normálních rozdělení

H₀: μ₁ = μ₂

**a) Při stejných rozptylech (dvouvýběrový t-test):**
$$t = \frac{\bar{x} - \bar{y}}{s\sqrt{\frac{1}{m} + \frac{1}{n}}}$$

kde $s^2 = \frac{1}{m+n-2}[(m-1)s_1^2 + (n-1)s_2^2]$

**b) Při nestejných rozptylech (Welchův test):**
$$t = \frac{\bar{x} - \bar{y}}{\sqrt{\frac{s_1^2}{m} + \frac{s_2^2}{n}}}$$

Stupně volnosti:
$$f = \frac{\left(\frac{s_1^2}{m} + \frac{s_2^2}{n}\right)^2}{\frac{(s_1^2/m)^2}{m-1} + \frac{(s_2^2/n)^2}{n-1}}$$

### 5.2.6. Párový t-test

Pro závislé výběry (párová měření). Testuje se H₀: μ_d = 0, kde d_i = x_i - y_i

Testové kritérium:
$$t = \frac{\bar{d}}{s_d}\sqrt{n}$$

### 5.2.7. Test hypotézy o parametrech p₁ a p₂ dvou alternativních rozdělení

H₀: p₁ = p₂

$$u = \frac{\frac{m_1}{n_1} - \frac{m_2}{n_2}}{\sqrt{\bar{p}(1-\bar{p})\left(\frac{1}{n_1} + \frac{1}{n_2}\right)}}$$

kde $\bar{p} = \frac{m_1 + m_2}{n_1 + n_2}$

### 5.2.8. Porovnání průměrů více než dvou normálních rozdělení (analýza rozptylu)

H₀: μ₁ = μ₂ = ... = μₘ

**Jednoduchá analýza rozptylu** – model: x*{ij} = μ + a_i + e*{ij}

Tabulka ANOVA (zkráceně):

| Variabilita              | Součet čtverců | Stupně volnosti | Rozptyl          | Testové kritérium |
| ------------------------ | -------------- | --------------- | ---------------- | ----------------- |
| Mezi třídami             | S₁             | m-1             | s₁² = S₁/(m-1)   | F = s₁²/s_r²      |
| Uvnitř tříd (reziduální) | S_r = S - S₁   | n-m             | s_r² = S_r/(n-m) |                   |
| Celková                  | S              | n-1             |                  |                   |

Kritický obor: F &gt; F\_{α,(m-1,n-m)}

### 5.2.9. Mnohorůzné porovnávání

- **Scheffého metoda (S-metoda)**: univerzální, funguje i pro nevyvážené plány
- **Tukeyova metoda (T-metoda)**: citlivější, vyžaduje vyvážený plán (n₁ = n₂ = ... = nₘ = N)

### 5.2.10. Porovnání rozptylů více než dvou normálních rozdělení

- **Bartlettův test**: citlivý na normalitu, vyžaduje n_i &gt; 6
- **Hartleyův test** (pro vyvážené třídění): F_max = s²_max / s²_min

---

## 5.3. Testy dobré shody

Ověřují, zda náhodný výběr pochází z daného rozdělení.

**χ²-test shody:**
$$\chi^2 = \sum_{j=1}^{k}\frac{(n_j - np_j)^2}{np_j}$$

Stupně volnosti: f = k - c - 1 (k = počet tříd, c = počet odhadnutých parametrů)

Kritický obor: χ² &gt; χ²\_{α,(k-c-1)}

**Davidův test normality:**
$$T = \frac{R}{s} = \frac{x_{max} - x_{min}}{s}$$

---

## 5.4. Vybrané neparametrické testy

Neparametrické testy nevyžadují specifikované rozdělení základního souboru.

### 5.4.1. Dvouvýběrový Wilcoxonův test

Neparametrická analogie dvouvýběrového t-testu. Hodnoty se uspořádají a přiřadí pořadová čísla.

$$U_x = mn + \frac{m(m+1)}{2} - T_x, \quad U_y = mn + \frac{n(n+1)}{2} - T_y$$

Pro velké rozsahy:
$$U_0 = \frac{U_x - \frac{1}{2}mn}{\sqrt{\frac{mn}{12}(m+n+1)}}$$

### 5.4.2. Wilcoxonův test (párový)

Neparametrická analogie párového t-testu. Pracuje s absolutními hodnotami diferencí d_i = x_i - y_i.

W = min(W⁺, W⁻) ≤ W_α → zamítnutí H₀

Pro velké rozsahy:
$$U_W = \frac{W^+ - \frac{1}{4}n(n+1)}{\sqrt{\frac{1}{24}n(n+1)(2n+1)}}$$

### 5.4.3. Znaménkový test

Jednodušší, ale slabší test. Počítá znaménka kladných (Z⁺) a záporných (Z⁻) diferencí.

Z = min(Z⁺, Z⁻) &lt; Z\_{α,(n)} → zamítnutí H₀

### 5.4.4. Kruskalův-Wallisův test

Neparametrická obdoba jednoduché analýzy rozptylu.

$$H = \frac{12}{n(n+1)}\sum_{i=1}^{m}\frac{T_i^2}{n_i} - 3(n+1)$$

kde n = Σn_i, T_i = součet pořadových čísel i-tého výběru

Asymptoticky χ²-rozdělení s f = m-1 stupni volnosti.

### 5.4.5. Neparametrické metody mnohorůzného porovnávání

- **Neményiho metoda** – pro vyvážené plány
- **Dunnův test** – pro nevyvážené plány

### 5.4.6. Dixonův test extrémních odchylek

Testuje, zda extrémní hodnota je zatížena hrubou chybou.

Pro nejnižší hodnotu:
$$Q_1 = \frac{x_2 - x_1}{x_n - x_1}$$

Pro nejvyšší hodnotu:
$$Q_n = \frac{x_n - x_{n-1}}{x_n - x_1}$$

Q₁ nebo Q*n &gt; Q*{α,(n)} → zamítnutí H₀, hodnota je zatížena hrubou chybou

# 6. Korelační a regresní analýza

## 6.1. Úvodní poznámky

**Základní typy závislostí:**

- **Funkční závislost**: dané hodnotě jednoho znaku odpovídá jediná hodnota druhého znaku
- **Statistická (stochastická) závislost**: dané hodnotě jednoho znaku odpovídá několik hodnot druhého znaku

**Druhy závislostí:**

- **Jednoduchá závislost**: mezi dvěma náhodnými veličinami X a Y
- **Vícenásobná (mnohonásobná) závislost**: závislost Y na n&gt;2 veličinách X₁, X₂, ..., Xₙ

**Dva základní úkoly:**

- **Regresní úloha**: Zjistit formu závislosti a vyjádřit ji matematickou (regresní) funkcí
- **Korelační úloha**: Určit stupeň síly, s jakou se daná závislost projevuje

---

## 6.2. Jednoduchá lineární regrese

**Základní model:**
$$y_i = f(x_i) + e_i$$

**Lineární regresní funkce:**
$$y_i = \alpha + \beta x_i + e_i$$

kde $e_i$ jsou náhodné chyby s rozdělením $N(0; \sigma^2)$

**Odhady parametrů metodou nejmenších čtverců:**

$$b = \frac{n\sum x_iy_i - \sum x_i \sum y_i}{n\sum x_i^2 - (\sum x_i)^2}$$

$$a = \bar{y} - b\bar{x}$$

**Přímka odhadu:**
$$y' = a + bx$$

**Reziduální rozptyl:**
$$s_r^2 = \frac{\sum(y_i - a - bx_i)^2}{n-2}$$

**Sdružené regresní přímky** (pro oboustrannou závislost):

- Regrese Y na X: $y' = a_{yx} + b_{yx}x$
- Regrese X na Y: $x' = a_{xy} + b_{xy}y$

---

## 6.3. Testy hypotéz o parametrech lineární regrese

**Test regresního koeficientu β:**

Testovací kritérium:
$$t = \frac{b - \beta}{s_b}$$

kde:
$$s_b = \sqrt{\frac{s_r^2}{\sum(x_i - \bar{x})^2}} = \frac{s_y}{s_x}\sqrt{\frac{1-r^2}{n-2}}$$

**Test H₀: β = 0** (test významnosti lineární závislosti):
$$t = \frac{b}{s_b}$$

má Studentovo rozdělení s f = n-2 stupni volnosti.

**Interval spolehlivosti pro β:**
$$(b - t_{\alpha(n-2)} \cdot s_b; b + t_{\alpha(n-2)} \cdot s_b)$$

**Konfidenční pás pro regresní přímku:**
$$(a + bx_k - t_{\alpha(n-2)} \cdot s_y; a + bx_k + t_{\alpha(n-2)} \cdot s_y)$$

---

## 6.4. Nelineární regrese

**Metoda linearizující transformace:**

| Typ           | Funkce                            | Transformace                        |
| ------------- | --------------------------------- | ----------------------------------- |
| Logaritmická  | $f(x) = \alpha + \beta \ln x$     | $z = \ln x$                         |
| Hyperbolická  | $f(x) = \alpha + \frac{\beta}{x}$ | $z = \frac{1}{x}$                   |
| Exponenciální | $f(x) = \alpha \cdot \beta^x$     | $\ln f(x) = \ln\alpha + x\ln\beta$  |
| Mocninná      | $f(x) = \alpha \cdot x^\beta$     | $\ln f(x) = \ln\alpha + \beta\ln x$ |

---

## 6.5. Měření těsnosti závislosti

**Výběrový korelační koeficient:**
$$r = \frac{s_{xy}}{s_x s_y} = \frac{n\sum x_iy_i - \sum x_i \sum y_i}{\sqrt{[n\sum x_i^2 - (\sum x_i)^2][n\sum y_i^2 - (\sum y_i)^2]}}$$

**Vztah mezi r a regresními koeficienty:**
$$r = b_{yx}\frac{s_x}{s_y} = b_{xy}\frac{s_y}{s_x}$$
$$|r| = \sqrt{b_{yx} \cdot b_{xy}}$$

**Vlastnosti korelačního koeficientu:**

- $-1 \leq r \leq 1$
- $|r| = 1$ → lineární funkční závislost
- $r = 0$ → lineární nezávislost

**Orientační stupnice:**

- $0 < |r| \leq 0,3$ → slabá závislost
- $0,3 < |r| \leq 0,8$ → mírná (střední) závislost
- $0,8 < |r| \leq 1$ → silná závislost

**Koeficient determinace:** $r^2$ (procento vysvětlitelné variability)

**Index korelace** (pro nelineární regresi):
$$I_{yx} = \sqrt{1 - \frac{\sum(y_i - y'_i)^2}{\sum(y_i - \bar{y})^2}}$$

---

## 6.6. Testy hypotéz o korelačním koeficientu

**Test významnosti korelačního koeficientu (H₀: ρ = 0):**
$$t = \frac{r}{\sqrt{1-r^2}}\sqrt{n-2}$$

má Studentovo rozdělení s f = n-2 stupni volnosti.

**Fisherova Z-transformace:**
$$Z = \frac{1}{2}\ln\frac{1+r}{1-r}$$

**Test H₀: ρ = ρ₀:**
$$u = (Z - Z_0)\sqrt{n-3}$$

**Interval spolehlivosti pro ρ:**
$$(Z_1, Z_2) = \left(Z - u_\alpha\frac{1}{\sqrt{n-3}}; Z + u_\alpha\frac{1}{\sqrt{n-3}}\right)$$

---

## 6.6.5. Pořadová korelace

**Spearmanův koeficient pořadové korelace:**
$$r_s = 1 - \frac{6\sum d_i^2}{n(n^2-1)}$$

kde $d_i = p_i - q_i$ (rozdíl pořadových čísel)

---

## 6.7. Mnohonásobná regrese a korelace

**Model mnohonásobné lineární regrese:**
$$y_i = \beta_0 + \beta_1x_{i1} + \beta_2x_{i2} + ... + \beta_kx_{ik} + e_i$$

**Maticový zápis:**
$$\mathbf{y} = \mathbf{X}\boldsymbol{\beta} + \mathbf{e}$$

**Odhad metodou nejmenších čtverců:**
$$\mathbf{b} = (\mathbf{X}'\mathbf{X})^{-1}(\mathbf{X}'\mathbf{y})$$

**Koeficient mnohonásobné determinace:**
$$R^2_{y\bullet x_1...x_k} = 1 - \frac{\sum(y_i - y'_i)^2}{\sum(y_i - \bar{y})^2}$$

**Test významnosti mnohonásobné korelace:**
$$F = \frac{R^2}{1-R^2} \cdot \frac{n-k-1}{k}$$

**Parciální korelační koeficient** (příklad pro 3 veličiny):
$$r_{xy.z} = \frac{r_{xy} - r_{xz}r_{yz}}{\sqrt{(1-r_{xz}^2)(1-r_{yz}^2)}}$$
