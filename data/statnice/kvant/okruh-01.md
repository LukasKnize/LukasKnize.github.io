# Okruh 1 – Lineární optimalizační modely a jejich praktické aplikace

## Co je lineární programování?

**Lineární programování (LP)** je matematická metoda hledání optimálního řešení (maximálního zisku, minimálních nákladů apod.) v situaci, kdy existují **omezené zdroje** a **konkurující si aktivity**. Modely LP jsou základním nástrojem operačního výzkumu.

LP je použitelné v obrovském množství praktických situací: od plánování výroby přes logistiku a nutriční plánování až po investiční rozhodování.

---

## Předpoklady lineárního programování

Aby bylo možné použít LP, musí platit čtyři základní předpoklady:

1. **Linearita (proporcionalita)**: Příspěvek každé aktivity k účelové funkci a ke spotřebě zdrojů je přímo úměrný jejímu rozsahu. Dvojnásobné množství výrobku = dvojnásobná spotřeba materiálu.

2. **Aditivita**: Celkový příspěvek je součtem příspěvků jednotlivých aktivit. Neexistují interakce (synergie ani kanibalizace) mezi proměnnými.

3. **Dělitelnost**: Proměnné mohou nabývat libovolné (i neceločíselné) hodnoty. Pokud musí být proměnné celá čísla (kusy výrobků, lidé), jde o **celočíselné programování (ILP)**.

4. **Determinismus**: Všechny parametry modelu jsou přesně známy (žádná neurčitost).

---

## Struktura LP modelu

Každý LP model obsahuje tři složky:

### 1. Rozhodovací proměnné

$x_1, x_2, \ldots, x_n$ – veličiny, o jejichž hodnotách rozhodujeme. Například: kolik kusů výrobku A a kolik kusů výrobku B vyrobit?

### 2. Účelová funkce

Matematické vyjádření cíle – co chceme minimalizovat nebo maximalizovat:

$$z = c_1 x_1 + c_2 x_2 + \cdots + c_n x_n \quad \to \quad \max \; (\text{nebo} \; \min)$$

$c_j$ jsou koeficienty účelové funkce (zisk z kusu, náklad na jednotku).

### 3. Omezující podmínky (constraints)

Vyjadřují omezení zdrojů nebo technologické požadavky:

$$a_{11}x_1 + a_{12}x_2 + \cdots + a_{1n}x_n \leq b_1$$
$$a_{21}x_1 + a_{22}x_2 + \cdots + a_{2n}x_n \leq b_2$$
$$\vdots$$
$$x_j \geq 0 \quad \text{(podmínka nezápornosti)}$$

$a_{ij}$ je spotřeba $i$-tého zdroje na jednotku $j$-té aktivity. $b_i$ je disponibilní množství $i$-tého zdroje.

---

## Grafická metoda řešení (2 proměnné)

Pro modely se dvěma proměnnými lze LP řešit graficky:

1. **Nakreslit přípustnou oblast (feasible region)**: Oblast všech bodů $(x_1, x_2)$, které splňují všechna omezení. Tvoří konvexní mnohostěn (nebo je prázdná/neomezená).

2. **Vykreslit účelovou funkci**: Přímka $z = c_1 x_1 + c_2 x_2$ pro různé hodnoty $z$.

3. **Posunovat přímku** ve směru maximalizace (nebo minimalizace) až do posledního bodu, který leží v přípustné oblasti.

4. **Optimum** leží vždy ve **vrcholu přípustné oblasti** (rohový bod, corner point). Výjimka: pokud je přímka účelové funkce rovnoběžná s hranou mnohostěnu, je optim nekonečně mnoho (celá hrana).

> **Příklad**: Firma vyrábí stoly ($x_1$) a židle ($x_2$). Zisk: $z = 50x_1 + 30x_2 \to \max$. Omezení: $2x_1 + x_2 \leq 100$ (truhláři, hod/týden), $x_1 + 2x_2 \leq 80$ (lakýrníci). Graficky najdeme přípustnou oblast a optimum v jednom z rohových bodů.

---

## Simplexová metoda

Pro modely s více než dvěma proměnnými se používá **simplexová metoda** (Dantzig, 1947) – algebraický algoritmus, který systematicky prochází rohové body přípustné oblasti a vždy se přesouvá do sousedního rohu se **lepší hodnotou účelové funkce**.

### Princip:
1. **Standardní tvar**: Nerovnosti se převedou na rovnice přidáním **skluzových proměnných** (slack variables): $a_{i1}x_1 + \ldots + a_{in}x_n + s_i = b_i$.
2. **Počáteční základní přípustné řešení**: Nastavíme $x_j = 0$, $s_i = b_i$ (začínáme v počátku).
3. **Iterace**: Vybereme vstupující proměnnou (nejlepší zlepšení účelové funkce), určíme vystupující proměnnou (pivotní prvek), aktualizujeme simplex tabulku.
4. **Zastavení**: Žádná proměnná již nemůže zlepšit $z$ → optimum nalezeno.

### Speciální případy LP:
- **Degenerované řešení**: Více než $n$ aktivních omezení v optimálním bodě – možné cyklení (řeší se Blandovo pravidlo).
- **Neomezená úloha**: Přípustná oblast je neomezená a účelová funkce může růst donekonečna.
- **Neřešitelná úloha (infeasible)**: Přípustná oblast je prázdná – omezení jsou navzájem rozporná.
- **Více optimálních řešení**: Účelová funkce je rovnoběžná s jednou z hran – každý bod na hraně je optimální.

---

## Dualita v LP

Ke každému LP modelu (primál) existuje **duální model**. Duální proměnné ($y_i$) mají ekonomický význam: jsou to **stínové ceny (shadow prices)** – o kolik se zlepší optimální hodnota účelové funkce, pokud zvýšíme disponibilní množství $i$-tého zdroje o jednotku.

$$\text{Primál: } z^* = \min c^T x \quad \leftrightarrow \quad \text{Duál: } w^* = \max b^T y$$

**Slabá dualita**: $c^T x \geq b^T y$ pro každé přípustné primální $x$ a duální $y$.
**Silná dualita**: $z^* = w^*$ (hodnoty optim se rovnají).

Stínové ceny říkají: „Kolik bychom maximálně zaplatili za jednotku dalšího zdroje?"

---

## Praktické aplikace LP

| Oblast | Příklad úlohy |
|--------|-------------|
| **Výrobní plánování** | Jaký mix výrobků maximalizuje zisk při omezené kapacitě strojů a pracovníků? |
| **Dietní / blendingové úlohy** | Jak namíchat krmivo z dostupných složek s minimálními náklady při splnění nutričních norem? |
| **Plánování směn** | Jak přiřadit pracovníky do směn, aby byly pokryty požadavky s minimálními náklady? |
| **Přiřazovací úlohy** | Jak přiřadit $n$ úkolů $n$ pracovníkům, aby celkové náklady/čas byly minimální? |
| **Finanční portfolio** | Jak alokovat investice do aktiv, aby byl maximalizován výnos při omezeném riziku? |
| **Logistika a doprava** | Jak naplánovat přepravu zboží ze skladů k zákazníkům s minimálními náklady? (viz Okruh 2) |
| **Energetika** | Jak naplánovat výrobu elektřiny z různých zdrojů s minimálními náklady při splnění poptávky? |

---

## Celočíselné a nelineární rozšíření

**Celočíselné LP (ILP / MIP)**: Proměnné musí být celá čísla (kusy zboží, počet lidí). Řeší se metodou **Branch and Bound** (větvení a ohraničování). Výrazně náročnější než LP.

**0-1 LP (binární)**: Proměnné jsou buď 0 nebo 1 – modelování ano/ne rozhodnutí (otevřít sklad nebo ne, přijmout projekt nebo ne).

**Nelineární programování (NLP)**: Účelová funkce nebo omezení nejsou lineární (kvadratická, exponenciální). Obecně mnohem obtížnější – lokální vs. globální optima, gradientní metody.
