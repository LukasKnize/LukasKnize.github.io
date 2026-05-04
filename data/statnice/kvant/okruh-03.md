# Okruh 3 – Teorie rozhodování, rozhodovací modely, modely teorie her

## Co je teorie rozhodování?

**Teorie rozhodování** je disciplína, která studuje, jak racionálně vybírat mezi alternativami v situacích s nejistotou. Kombinuje matematiku, statistiku a ekonomii, aby pomohla rozhodovatelům strukturovat problémy a vybírat nejlepší akci.

Rozhodovací situace popisujeme pomocí:
- **Alternativy (strategie)** $A_1, A_2, \ldots, A_m$ – možné akce rozhodující osoby.
- **Stavy světa (scénáře)** $S_1, S_2, \ldots, S_n$ – možné situace v okolí (mimo kontrolu rozhodující osoby).
- **Výsledky (payoff)** $v_{ij}$ – výsledek (zisk, ztráta, užitek) při volbě alternativy $A_i$ a nastání stavu $S_j$.
- **Výplatní matice** – tabulka $v_{ij}$.

---

## Rozhodování za jistoty

Každá alternativa vede k jednoznačnému výsledku – stav světa je znám. Jde o triviální případ: stačí spočítat výsledky všech alternativ a vybrat nejlepší.

Příklady: optimalizace výroby (LP), plánování harmonogramu.

---

## Rozhodování za rizika

Stavy světa nastávají s **known pravděpodobnostmi** $p_j$ ($\sum p_j = 1$). Základní kritérium:

### Očekávaná peněžní hodnota (EMV – Expected Monetary Value)

$$EMV(A_i) = \sum_{j=1}^{n} p_j \cdot v_{ij}$$

Vybereme alternativu s nejvyšším EMV. EMV je průměrný výsledek při opakování rozhodnutí mnoho krát.

> **Příklad**: Firma zvažuje investici. Při příznivém trhu (p = 0,6) vydělá 200 tis. Kč, při nepříznivém (p = 0,4) prodělá 50 tis. Kč. EMV = 0,6 × 200 + 0,4 × (−50) = 120 − 20 = **100 tis. Kč**.

**Hodnota dokonalé informace (EVPI)**: O kolik by se zlepšil EMV, kdybychom předem věděli, jaký stav světa nastane?

$$EVPI = EMV_{\text{s dokonalou informací}} - EMV_{\text{bez informace}}$$

$EMV_{\text{s dok. inf.}} = \sum_j p_j \cdot \max_i v_{ij}$ (pro každý stav světa zvolíme nejlepší alternativu).

### Rozhodovací stromy

Pro sekvenciální rozhodnutí (více rozhodnutí jdou po sobě) se používají **rozhodovací stromy**:
- **Čtvercové uzly** = rozhodovací uzly (rozhodující si volí větev).
- **Kruhové uzly** = uzly šance (příroda si volí stav s pravděpodobnostmi).
- Listové uzly = výsledky.

Strom se vyhodnocuje **zprava doleva**: v uzlech šance počítáme EMV, v rozhodovacích uzlech vybíráme větev s nejvyšším EMV.

---

## Rozhodování za nejistoty

Pravděpodobnosti stavů světa **nejsou známy**. Různá kritéria odrážejí různé postoje k riziku:

### Maximaxové kritérium (optimistické)

$$A^* = \arg\max_i \left( \max_j v_{ij} \right)$$

Vyber alternativu, která při nejlepším scénáři přinese nejvyšší výsledek. Optimistický přístup – ignoruje možnost špatných výsledků.

### Maximinové kritérium / Waldovo kritérium (pesimistické)

$$A^* = \arg\max_i \left( \min_j v_{ij} \right)$$

Vyber alternativu, jejíž **nejhorší možný výsledek** je co nejlepší. Konzervativní přístup – chrání před nejhorším.

### Minimax lítosti / Savageovo kritérium

Transformujeme výplatní matici na **matici lítosti (regret matrix)**:

$$r_{ij} = \max_i v_{ij} - v_{ij}$$

(pro každý stav světa odečteme od nejlepšího výsledku v daném sloupci). Pak:

$$A^* = \arg\min_i \left( \max_j r_{ij} \right)$$

Minimalizujeme maximální lítost – jak moc budeme litovat svého rozhodnutí, když uvidíme, co se stalo.

### Hurwiczovo kritérium

Kompromis mezi optimismem a pesimismem pomocí **koeficientu optimismu** $\alpha \in [0,1]$:

$$H(A_i) = \alpha \cdot \max_j v_{ij} + (1-\alpha) \cdot \min_j v_{ij}$$

$$A^* = \arg\max_i H(A_i)$$

Pro $\alpha = 1$ jde o maximax; pro $\alpha = 0$ o maximin.

### Laplaceovo kritérium (princip nedostatečného důvodu)

Předpokládáme, že všechny stavy světa jsou **stejně pravděpodobné** ($p_j = 1/n$):

$$A^* = \arg\max_i \frac{1}{n} \sum_j v_{ij}$$

---

## Teorie her (Game Theory)

**Teorie her** studuje strategická rozhodnutí hráčů, jejichž výsledky závisí na volbách více hráčů. Zakladatelé: von Neumann a Morgenstern (1944), Nash (1950).

### Základní pojmy

- **Hráči**: Rozhodující subjekty (firmy, státy, jednotlivci).
- **Strategie**: Souhrn pravidel, podle nichž hráč volí v každé situaci.
- **Výplatní funkce**: Výsledek každého hráče jako funkce zvolených strategií.
- **Hra s nulovým součtem**: Zisk jednoho hráče = ztráta druhého ($\sum_i v_i = 0$). Čistě konkurenční.
- **Hra s nenulovým součtem**: Možnost vzájemného zisku nebo ztráty (kooperace i konflikt).

### Maticová hra dvou hráčů s nulovým součtem

Hráč I (řádky) volí strategii $A_i$, hráč II (sloupce) volí $B_j$. Výplatní matice $v_{ij}$ udává výplatu hráče I (hráč II dostane $-v_{ij}$).

Každý hráč se snaží maximalizovat svůj zisk, ale druhý hráč se mu snaží zabránit.

### Dominance strategií

Strategie $A_i$ **dominuje** strategii $A_k$, pokud $v_{ij} \geq v_{kj}$ pro všechna $j$ (a pro alespoň jedno $j$ ostře). Dominovanou strategii lze bez ztráty obecnosti odstranit – racionální hráč ji nikdy nezvolí.

Opakovanou eliminací dominovaných strategií (IESDS) lze někdy zredukovat hru na jediné řešení.

### Sedlový bod (řešení v čistých strategiích)

**Sedlový bod** je prvek $v_{i^*j^*}$ výplatní matice, který je:
- **Minimem svého řádku** (hráč I nemůže svou volbou $A_{i^*}$ polepšit, i kdyby znal volbu hráče II), a zároveň
- **Maximem svého sloupce** (hráč II nemůže svou volbou $B_{j^*}$ polepšit).

Formálně: sedlový bod je **Nashova rovnováha v čistých strategiích**.

$$v_{i^*j} \leq v_{i^*j^*} \leq v_{ij^*} \quad \forall i, j$$

Hodnota hry: $v^* = v_{i^*j^*}$.

> Sedlový bod existuje tehdy, když $\max_i \min_j v_{ij} = \min_j \max_i v_{ij}$ (maximin = minimax).

### Smíšené strategie (Mixed Strategies)

Pokud sedlový bod neexistuje, hráči **randomizují** (náhodně volí mezi strategiemi podle pravděpodobnostní distribuce). Racionální hráč volí distribuci, která **maximalizuje jeho minimální očekávanou výplatu** bez ohledu na strategii soupeře.

**Von Neumannův minimax teorém (1928)**: Každá konečná hra s nulovým součtem dvou hráčů má řešení ve smíšených strategiích. Platí:

$$\max_{p} \min_{q} \; p^T V q = \min_{q} \max_{p} \; p^T V q = v^*$$

kde $p$ jsou smíšené strategie hráče I, $q$ hráče II, $V$ je výplatní matice.

Pro hru $2 \times 2$ bez sedlového bodu se optimální smíšené strategie počítají analyticky (soustava rovnic z podmínky indifference).

### Nashova rovnováha

**Nashova rovnováha** (Nash Equilibrium) je profil strategií $(\sigma_1^*, \sigma_2^*, \ldots)$ takový, že **žádný hráč si nemůže jednostranně polepšit** změnou své strategie, pokud ostatní hráči své strategie nemění.

$$u_i(\sigma_i^*, \sigma_{-i}^*) \geq u_i(\sigma_i, \sigma_{-i}^*) \quad \forall i, \forall \sigma_i$$

**Nashův teorém**: Každá konečná hra má alespoň jednu Nashovu rovnováhu (v čistých nebo smíšených strategiích).

### Vězňovo dilema (Prisoner's Dilemma)

Klasický příklad hry s nenulovým součtem, kde **individuálně racionální chování vede ke společensky suboptimálnímu výsledku**:

|  | **B: Mlčí** | **B: Přizná** |
|--|------------|-------------|
| **A: Mlčí** | (−1, −1) | (−10, 0) |
| **A: Přizná** | (0, −10) | (−5, −5) |

Každý hráč má dominantní strategii „Přiznat" → Nashova rovnováha (−5, −5), ačkoliv oboustranné mlčení (−1, −1) by bylo lepší pro oba. Modeluje selhání kooperace: oligopolní kolize, zbrojení, společné statky.
