# Okruh 2 – Dopravní úlohy bez tranzitu a okružní dopravní úlohy

## Klasická dopravní úloha (Transportation Problem)

**Dopravní úloha** je speciální případ lineárního programování, který modeluje přepravu homogenního zboží od $m$ **dodavatelů** (zdrojů) k $n$ **odběratelům** (destinacím) s cílem **minimalizovat celkové dopravní náklady** – bez tranzitu (zboží jde přímo od dodavatele k odběrateli, nepřestupuje).

### Formální definice

- $a_i$ = kapacita (nabídka) $i$-tého dodavatele, $i = 1, \ldots, m$
- $b_j$ = požadavek (poptávka) $j$-tého odběratele, $j = 1, \ldots, n$
- $c_{ij}$ = náklad na přepravu jedné jednotky z $i$ do $j$
- $x_{ij}$ = množství přepravované z $i$ do $j$ (rozhodovací proměnné)

**Účelová funkce:**
$$z = \sum_{i=1}^{m} \sum_{j=1}^{n} c_{ij} \cdot x_{ij} \to \min$$

**Omezení dodavatelů** (celkem expedováno = kapacita):
$$\sum_{j=1}^{n} x_{ij} = a_i \quad \forall i$$

**Omezení odběratelů** (celkem přijato = poptávka):
$$\sum_{i=1}^{m} x_{ij} = b_j \quad \forall j$$

**Podmínka nezápornosti:** $x_{ij} \geq 0$

### Bilanční podmínka

Dopravní úloha je **vyvážená (balanced)**, pokud:
$$\sum_{i=1}^{m} a_i = \sum_{j=1}^{n} b_j$$

Pokud $\sum a_i > \sum b_j$ (přebytek nabídky): Přidáme **fiktivního odběratele** s $b_{n+1} = \sum a_i - \sum b_j$ a nulovými náklady $c_{i,n+1} = 0$.

Pokud $\sum a_i < \sum b_j$ (přebytek poptávky): Přidáme **fiktivního dodavatele** s $a_{m+1} = \sum b_j - \sum a_i$ a nulovými náklady.

---

## Hledání počátečního přípustného řešení

Před optimalizací potřebujeme **počáteční přípustné řešení** (výchozí přiřazení). Metody:

### Metoda severozápadního rohu (NW Corner Method)

Začínáme v levém horním (severozápadním) rohu tabulky a přiřazujeme maximum možného. Pak posuneme doprava nebo dolů.

> Jednoduchá, ale ignoruje náklady → výchozí řešení bývá daleko od optima.

### Metoda nejmenšího prvku (Minimum Cost Method)

Vždy vybereme políčko s **nejnižším nákladem** $c_{ij}$ a přiřadíme maximum. Opakujeme.

> Lepší než NW corner, ale stále ne vždy optimální.

### Vogelova aproximační metoda (VAM)

Pro každý řádek a sloupec spočítáme **penalizaci** = rozdíl mezi druhým nejnižším a nejnižším nákladem v daném řádku/sloupci. Přiřadíme maximum v řádku/sloupci s nejvyšší penalizací, a to do políčka s nejnižším nákladem.

> Dává nejblíže optimu ze všech iniciálních metod; v praxi preferovaná.

---

## Optimalizace: MODI metoda (Modified Distribution Method)

Po nalezení počátečního řešení ověříme optimalitu a případně zlepšíme pomocí **MODI metody (U-V metody)**:

1. **Přiřadíme duální proměnné** $u_i$ (řádky) a $v_j$ (sloupce) tak, aby pro obsazená políčka platilo:
$$u_i + v_j = c_{ij}$$

2. **Spočítáme redukované náklady** pro neobsazená políčka:
$$\bar{c}_{ij} = c_{ij} - u_i - v_j$$

3. Pokud $\bar{c}_{ij} \geq 0$ pro všechna neobsazená políčka → **optimum nalezeno**.

4. Pokud existuje $\bar{c}_{ij} < 0$ → přesuneme zboží po **přechodové smyčce** (alternující cesta přes obsazená políčka) tak, aby se snížily celkové náklady.

5. Opakujeme, dokud nejsou všechna $\bar{c}_{ij} \geq 0$.

> Dopravní úloha $m \times n$ má optimální bázi s $m + n - 1$ obsazenými políčky (při nevykradarované úloze). Méně obsazených políček = degenerace (řeší se přidáním $\varepsilon$ do prázdného políčka).

---

## Přiřazovací úloha (Assignment Problem)

Speciální případ dopravní úlohy: $m = n$, $a_i = b_j = 1$. Každý dodavatel (pracovník) jde přesně k jednomu odběrateli (úkolu).

$$z = \sum_{i=1}^{n} \sum_{j=1}^{n} c_{ij} x_{ij} \to \min, \quad x_{ij} \in \{0,1\}$$

Řeší se efektivně **Maďarskou metodou (Hungarian Algorithm)** v čase $O(n^3)$.

---

## Okružní dopravní úlohy (Vehicle Routing / Travelling Salesman)

### Problém obchodního cestujícího (TSP – Travelling Salesman Problem)

Nejznámější okružní úloha: obchodní cestující musí **navštívit každé z $n$ měst právě jednou** a vrátit se do výchozího města. Cílem je najít trasu s minimální celkovou délkou (nebo cenou).

**Formálně**: Hledáme Hamiltonovský cyklus s minimální délkou v úplném grafu.

**Složitost**: TSP je **NP-hard** – pro $n$ měst existuje $(n-1)!/2$ různých okružních tras. Pro $n = 20$ je to přes $6 \times 10^{16}$ variant. Přesné řešení je výpočetně nezvládnutelné pro větší instance.

### Heuristické metody řešení TSP

Protože přesné řešení je nepraktické pro větší instance, používají se **heuristiky** – rychlé metody, které dají dobré (ne nutně optimální) řešení:

**Metoda nejbližšího souseda (Nearest Neighbor Heuristic)**:
1. Začni v libovolném městě.
2. Vždy přejdi do nejbližšího **dosud nenavštíveného** města.
3. Po navštívení všech měst se vrať do výchozího.

> Jednoduchá, rychlá, ale dává řešení typicky 20–25 % horší než optimum.

**Vkládací heuristika (Insertion Heuristic)**:
Začni s malou okružní cestou (např. 3 města), pak postupně vkládej zbývající města na **nejlevnější pozici** (místo s nejmenším nárůstem délky trasy).

**2-OPT a 3-OPT zlepšování**:
Vezmi existující trasu a zkoušej **přehodit úseky** (odeber 2 nebo 3 hrany a přidej je jinak). Pokud nové zapojení zkrátí trasu, přijmi ho. Opakuj, dokud lze zlepšovat. Velmi efektivní v kombinaci s iniciální heuristikou.

**Metaheuristiky**: Pro velké instance se používají simulated annealing, genetické algoritmy, ant colony optimization – umožňují „uniknout" z lokálního optima.

### Obecnější VRP (Vehicle Routing Problem)

Realita je složitější než TSP: **více vozidel**, kapacity vozidel, časová okna u zákazníků, depot... To vše modeluje **VRP (Vehicle Routing Problem)** – celá rodina úloh, které jsou jádrem logistické optimalizace (rozvozové trasy supermarketů, doručovací firmy, odvoz odpadu).

---

## Shrnutí: typy úloh a metody

| Úloha | Typ | Metoda |
|-------|-----|--------|
| Dopravní úloha (přímá přeprava) | LP speciální forma | NW roh / VAM → MODI |
| Přiřazovací úloha | Speciální případ dopravní | Maďarská metoda |
| TSP (jedna okružní trasa) | NP-hard kombinatorická | Heuristiky (NN, 2-OPT) |
| VRP (více vozidel) | NP-hard | Metaheuristiky, ILP |
