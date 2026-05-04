# Okruh 4 – Vícekriteriální rozhodování a vícekriteriální analýza variant

## Co je vícekriteriální rozhodování?

V reálných rozhodovacích situacích nestačí optimalizovat jeden ukazatel – manažer chce zároveň minimalizovat náklady, maximalizovat kvalitu, minimalizovat environmentální dopad a dodržet termíny. Tyto cíle si navzájem odporují.

**Vícekriteriální rozhodování (MCDM – Multiple Criteria Decision Making)** je soubor metod pro výběr nejlepší alternativy (nebo uspořádání alternativ) při hodnocení **podle více kritérií současně**.

### Základní pojmy

- **Alternativy** $A_1, A_2, \ldots, A_m$ – objekty hodnocení (varianty, projekty, kandidáti).
- **Kritéria** $K_1, K_2, \ldots, K_k$ – hlediska hodnocení (může jít o maximalizační nebo minimalizační kritéria).
- **Hodnotící matice** $y_{ij}$ – hodnota $i$-té alternativy podle $j$-tého kritéria.
- **Váhy kritérií** $w_j$ – relativní důležitost kritérií ($w_j \geq 0$, $\sum_j w_j = 1$).

---

## Paretova optimálnost

Alternativa $A_i$ **dominuje** alternativu $A_k$, pokud je $A_i$ alespoň tak dobrá jako $A_k$ ve všech kritériích a přísně lepší alespoň v jednom.

**Paretova množina** (množina nedominovaných alternativ) obsahuje alternativy, které nikdo dominuje. Pouze tyto alternativy mají smysl dále analyzovat – Paretovská analýza eliminuje zjevně horší varianty.

---

## Stanovení vah kritérií

Před samotnou analýzou variant je třeba zjistit **preference rozhodující osoby** – jak jsou pro ni jednotlivá kritéria důležitá.

### Přímé přiřazení (Point Allocation)

Rozhodující osoba přidělí každému kritériu body (např. ze 100), kde větší počet bodů = větší důležitost. Váha $w_j = \text{body}_j / \sum \text{body}$.

Jednoduchá metoda, ale vyžaduje od rozhodující osoby přesné numerické odhady, což bývá obtížné.

### Pořadová metoda (Rank Order)

Kritéria se seřadí od nejdůležitějšího ($r = 1$) po nejméně důležité ($r = k$). Váhy se odvozují z pořadí, např. metodou reverzního pořadí:

$$w_j = \frac{k - r_j + 1}{\sum_{l=1}^{k}(k - r_l + 1)}$$

### Metoda párového porovnávání (Pairwise Comparison)

Pro každý pár kritérií $(K_i, K_j)$ rozhodující osoba určí, které je důležitější (nebo zda jsou stejně důležité). Váhy se odvozují z počtu preferencí.

### Saatyho metoda (AHP váhy)

Rozhodující osoba porovnává každý pár kritérií pomocí **Saatyho stupnice** (1 = stejně důležité, 3 = mírně důležitější, 5 = výrazně důležitější, 7 = velmi silně, 9 = absolutně důležitější; sudá čísla jsou kompromisy).

Tvoříme **matici párového porovnání** $S$, kde $s_{ij}$ = o kolik je $K_i$ důležitější než $K_j$ (tedy $s_{ji} = 1/s_{ij}$). Váhy se odhadují jako **normalizovaný vlastní vektor** příslušející největšímu vlastnímu číslu matice $S$.

**Index konzistence (CI)** a **poměr konzistence (CR)** ověřují, zda jsou soudy rozhodující osoby dostatečně konzistentní ($CR < 0{,}10$ je přijatelné).

---

## Metody vícekriteriální analýzy variant

### Metoda váženého součtu (WSA – Weighted Sum Approach / SAW)

Nejjednodušší metoda. Postup:

1. **Normalizace**: Hodnoty kritérií převedeme do intervalu $[0, 1]$. Pro maximalizační kritérium:
$$\hat{y}_{ij} = \frac{y_{ij} - y_j^{\min}}{y_j^{\max} - y_j^{\min}}$$
Pro minimalizační kritérium obráceně (nebo $1 - \hat{y}_{ij}$).

2. **Vážený součet**:
$$u(A_i) = \sum_{j=1}^{k} w_j \cdot \hat{y}_{ij}$$

3. Alternativa s nejvyšším $u(A_i)$ je nejlepší.

**Výhoda**: Transparentní, snadno interpretovatelný.
**Nevýhoda**: Předpokládá kompenzovatelnost (špatná hodnota v jednom kritériu může být kompenzována výbornou v jiném).

### TOPSIS (Technique for Order Preference by Similarity to Ideal Solution)

TOPSIS vybírá alternativu, která je **nejblíže ideálnímu řešení** a **nejdál od bazálního (anti-ideálního) řešení** zároveň.

**Postup:**

1. **Normalizace** hodnot (zpravidla vektorová):
$$r_{ij} = \frac{y_{ij}}{\sqrt{\sum_i y_{ij}^2}}$$

2. **Vážená matice**: $v_{ij} = w_j \cdot r_{ij}$

3. **Ideální alternativa** $A^+$: pro každé kritérium nejlepší hodnota z vážené matice.
**Bazální alternativa** $A^-$: pro každé kritérium nejhorší hodnota.

4. **Vzdálenosti** každé alternativy od $A^+$ a $A^-$ (Euklidovská vzdálenost):
$$d_i^+ = \sqrt{\sum_j (v_{ij} - v_j^+)^2}, \quad d_i^- = \sqrt{\sum_j (v_{ij} - v_j^-)^2}$$

5. **Relativní blízkost ideálu**:
$$C_i = \frac{d_i^-}{d_i^+ + d_i^-} \in [0, 1]$$

Čím vyšší $C_i$, tím lepší alternativa. $C_i = 1$: alternativa je ideálem. $C_i = 0$: je anti-ideálem.

### ELECTRE (Elimination Et Choix Traduisant la Réalité)

Metoda **outranking (přepřahání)** – nehledá absolutní optimum, ale určuje, zda alternativa $A_i$ „přepřahá" alternativu $A_k$ (je lepší nebo stejná v dostatečném počtu kritérií, aniž by byla výrazně horší v jiných).

**Základní myšlenka**: Pro každý pár alternativ spočítáme:
- **Konkordanční index** $c(i,k)$ = vážený podíl kritérií, ve kterých $A_i \geq A_k$.
- **Diskordanční index** $d(i,k)$ = maximální vážená odchylka v neprospěch $A_i$.

$A_i$ přepřahá $A_k$, pokud $c(i,k) \geq c_{\text{práh}}$ a $d(i,k) \leq d_{\text{práh}}$.

Výsledkem je **graf přepřahání** → alternativy, které nikdo nepřepřahá, tvoří jádro.

**Výhoda**: Nepotřebuje kompenzovatelnost – špatná hodnota v jednom kritériu nemůže být zcela kompenzována dobrými v jiných (pokud je diskordance vysoká).

### AHP (Analytic Hierarchy Process)

Kompletní metoda vyvinutá Saatym:
1. **Hierarchická struktura**: Cíl → Kritéria → (Podkritéria) → Alternativy.
2. Párové porovnání na každé úrovni hierarchie.
3. Výpočet lokálních vah vlastními vektory.
4. **Agregace**: Globální váhy alternativ jsou součinem vah na každé úrovni.

AHP je rozšířený nástroj pro komplexní strategická rozhodnutí.

---

## Srovnání metod

| Metoda | Kompenzovatelnost | Složitost | Transparentnost | Vhodné pro |
|--------|-------------------|-----------|----------------|------------|
| WSA/SAW | Ano (plná) | Nízká | Vysoká | Rychlé analýzy, mnoho alternativ |
| TOPSIS | Ano (přes vzdálenost) | Střední | Střední | Technicko-ekonomické analýzy |
| ELECTRE | Ne (prahová) | Vysoká | Nízká | Strategická rozhodnutí, kvalitativní kritéria |
| AHP | Ano | Střední | Střední | Komplexní hierarchické problémy |

---

## Citlivostní analýza

Po výběru nejlepší alternativy je vhodné provést **citlivostní analýzu** – jak se změní výsledek, když změníme váhy kritérií nebo hodnoty alternativ? Robustní výsledek (nezávislý na malých změnách parametrů) dává větší jistotu při rozhodnutí.
