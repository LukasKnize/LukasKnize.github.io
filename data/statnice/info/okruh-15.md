# Okruh 15 – Statické a dynamické datové struktury: fronta, zásobník, spojový seznam, strom

## Datové struktury – proč na nich záleží?

**Datová struktura** je způsob organizace dat v paměti tak, aby s nimi šlo efektivně pracovat. Výběr správné datové struktury je jedním z nejdůležitějších rozhodnutí v programování – o výkonu aplikace rozhoduje více než samotný algoritmus.

Každá struktura má jiné časové komplexity pro operace **přístup, vyhledávání, vkládání, mazání**. Není jedna nejlepší – záleží na tom, co program nejčastěji dělá.

---

## Statické vs. dynamické datové struktury

| | Statické | Dynamické |
|-|----------|----------|
| Velikost | Pevná, určena při kompilaci | Mění se za běhu programu |
| Paměť | Zásobník nebo statická sekce | Halda (heap), alokace za běhu |
| Příklady | Pole (array) | Spojový seznam, strom, fronta, zásobník |
| Výhoda | Rychlý přístup (index), cache-friendly | Flexibilita, neomezená velikost |
| Nevýhoda | Pevná kapacita, vkládání doprostřed O(n) | Overhead ukazatelů, cache-unfriendly |

### Pole (Array) – základ statické struktury

```c
int pole[5] = {10, 20, 30, 40, 50};
//             [0] [1] [2] [3] [4]

pole[2] = 99;     // přístup: O(1) – přímý výpočet adresy
```

Prvky jsou uloženy **sekvenčně v paměti**. Adresa prvku `i` = `bázová_adresa + i × velikost_typu`. Proto je přístup konstantně rychlý – O(1).

Nevýhoda: vložení doprostřed vyžaduje posun všech dalších prvků – O(n). Mazání také O(n).

---

## Zásobník (Stack)

**Zásobník** je datová struktura pracující na principu **LIFO** (Last In, First Out) – jako hromada talířů: přidáváte i berete vždy z vrcholu.

### Operace

| Operace | Popis | Složitost |
|---------|-------|----------|
| `push(x)` | Vloží prvek na vrchol | O(1) |
| `pop()` | Odebere a vrátí prvek z vrcholu | O(1) |
| `peek() / top()` | Vrátí vrchol bez odebrání | O(1) |
| `isEmpty()` | Je zásobník prázdný? | O(1) |

### Vizualizace

```
push(1) → push(2) → push(3) → pop() → pop()

    [3] ← vrchol         [2] ← vrchol      [1] ← vrchol
    [2]                  [1]
    [1]
```

### Implementace (Python)

```python
class Stack:
    def __init__(self):
        self._data = []

    def push(self, item):
        self._data.append(item)

    def pop(self):
        if self.is_empty():
            raise IndexError("Zásobník je prázdný")
        return self._data.pop()

    def peek(self):
        return self._data[-1]

    def is_empty(self):
        return len(self._data) == 0
```

### Použití zásobníku v praxi

- **Zásobník volání (call stack)** – OS ukládá rámce funkcí při rekurzi.
- **Undo/Redo** – v textových editorech; každá akce jde na zásobník.
- **Vyhodnocení výrazů** – kalkulačka s operátory: `3 + 4 * 2` (shunting-yard algoritmus).
- **DFS** (Depth-First Search) – prohledávání grafu do hloubky.
- **Kontrola závorek** – `{[(` – závorky se tlačí na zásobník, při uzavírací se porovnají.

---

## Fronta (Queue)

**Fronta** pracuje na principu **FIFO** (First In, First Out) – jako fronta u pokladny: kdo přijde první, odchází první.

### Operace

| Operace | Popis | Složitost |
|---------|-------|----------|
| `enqueue(x)` | Přidá prvek na konec fronty | O(1) |
| `dequeue()` | Odebere a vrátí prvek ze začátku | O(1) |
| `front()` | Vrátí první prvek bez odebrání | O(1) |
| `isEmpty()` | Je fronta prázdná? | O(1) |

### Vizualizace

```
Začátek (front) ← dequeue     enqueue → Konec (rear)

[1] [2] [3] [4]   →   po enqueue(5):   [1] [2] [3] [4] [5]
                       po dequeue():        [2] [3] [4] [5]
```

### Varianty

- **Cyklická fronta** – pole s ukazateli front/rear, které obíhají (efektivní využití paměti).
- **Prioritní fronta (Priority Queue)** – každý prvek má prioritu; dequeue vrátí prvek s nejvyšší prioritou. Implementace: binární halda (heap). Použití: Dijkstrův algoritmus, plánovač procesů OS.
- **Oboustranná fronta (Deque)** – přidávání i odebírání z obou konců.

### Použití fronty v praxi

- **BFS** (Breadth-First Search) – prohledávání grafu do šířky (nejkratší cesta v neohodnoceném grafu).
- **Plánovač procesů** – OS řadí procesy do fronty připravených.
- **Tiskový spooler** – tiskové úlohy čekají ve frontě.
- **Síťové pakety** – buffery v routerech jsou fronty.

---

## Spojový seznam (Linked List)

**Spojový seznam** je dynamická datová struktura složená z **uzlů (nodes)**. Každý uzel obsahuje **data** a **ukazatel** na další uzel. Uzly nejsou nutně sekvenčně v paměti – jsou propojeny ukazateli.

### Jednosměrný spojový seznam

```
  head
   │
  [10 | •]──→[20 | •]──→[30 | •]──→[40 | NULL]
   uzel1       uzel2      uzel3       uzel4
```

```c
struct Node {
    int data;
    struct Node *next;  // ukazatel na další uzel
};
```

### Operace a složitosti

| Operace | Složitost |
|---------|----------|
| Přístup k i-tému prvku | O(n) – musíme projet od head |
| Vyhledávání | O(n) |
| Vložení na začátek | O(1) |
| Vložení na konec (s tail ukazatelem) | O(1) |
| Vložení doprostřed (za daný uzel) | O(1) – poté co máme ukazatel |
| Smazání prvku | O(1) – poté co máme ukazatel na předchozí |

### Obousměrný spojový seznam (Doubly Linked List)

Každý uzel má ukazatel na **předchozí i následující** uzel – procházení oběma směry:

```
NULL ←[10 | •]↔[20 | •]↔[30 | •]↔[40 | •]→ NULL
       head                           tail
```

### Cyklický spojový seznam

Poslední uzel ukazuje zpět na první (místo NULL). Používá se např. v round-robin plánovačích.

### Pole vs. spojový seznam

| | Pole | Spojový seznam |
|-|------|---------------|
| Přístup k i-tému prvku | O(1) | O(n) |
| Vkládání na začátek | O(n) | O(1) |
| Vkládání na konec | O(1) amortizovaně | O(1) s tail ptr |
| Paměť | Kompaktní, cache-friendly | Overhead ukazatelů |
| Dynamická velikost | Složitá (realokace) | Přirozená |

---

## Strom (Tree)

**Strom** je hierarchická datová struktura složená z uzlů. Jeden speciální uzel je **kořen (root)**, každý uzel může mít nula nebo více **potomků (children)**. Uzel bez potomků je **list (leaf)**.

### Terminologie

```
          A          ← kořen (root)
        /   \
       B     C       ← vnitřní uzly
      / \     \
     D   E     F    ← listy (leaves)
```

- **Rodič (parent)** – A je rodič B a C.
- **Potomek (child)** – B, C jsou potomci A.
- **Sourozenci (siblings)** – B a C jsou sourozenci.
- **Hloubka uzlu** – počet hran od kořene (A má hloubku 0, D hloubku 2).
- **Výška stromu** – maximální hloubka (výše = 2).
- **Stupeň uzlu** – počet potomků (A má stupeň 2).

### Binární strom (Binary Tree)

Každý uzel má **nejvýše dva** potomky: **levý** a **pravý**.

```c
struct BSTNode {
    int data;
    struct BSTNode *left;
    struct BSTNode *right;
};
```

### Binární vyhledávací strom (BST)

Speciální binární strom s vlastností: **levý podstrom < uzel < pravý podstrom**.

```
        8
       / \
      3   10
     / \    \
    1   6    14
       / \   /
      4   7 13
```

| Operace | Průměrná složitost | Nejhorší případ |
|---------|--------------------|-----------------|
| Vyhledávání | O(log n) | O(n) – zdegenerovaný strom |
| Vkládání | O(log n) | O(n) |
| Mazání | O(log n) | O(n) |

Nejhorší případ nastane při vkládání seřazených dat (strom se stane lineárním seznam). Řeší se **samovyvažující stromy**: AVL strom, Red-Black strom (B-stromy v databázích).

### Průchody stromem

Záleží na pořadí, ve kterém navštívíme uzly:

#### In-order (levý – kořen – pravý)
Pro BST dá **seřazenou posloupnost**. Pro strom výše: 1, 3, 4, 6, 7, 8, 10, 13, 14.

```python
def inorder(node):
    if node is None: return
    inorder(node.left)
    print(node.data)
    inorder(node.right)
```

#### Pre-order (kořen – levý – pravý)
Kopírování stromu, serializace: 8, 3, 1, 6, 4, 7, 10, 14, 13.

#### Post-order (levý – pravý – kořen)
Mazání stromu, vyhodnocení výrazů: 1, 4, 7, 6, 3, 13, 14, 10, 8.

### Halda (Heap)

**Binární halda** je úplný binární strom splňující haldu vlastnost:
- **Max-heap**: každý uzel ≥ jeho potomci → kořen je maximum.
- **Min-heap**: každý uzel ≤ jeho potomci → kořen je minimum.

Efektivní implementace **prioritní fronty**: `insert` O(log n), `extractMax/Min` O(log n).

### Další typy stromů

| Typ | Popis |
|-----|-------|
| **B-strom** | Vyvážený, uzly mohou mít mnoho klíčů; používán v databázích a FS |
| **Trie (prefix strom)** | Každý uzel = jeden znak; efektivní vyhledávání slov |
| **Červeno-černý strom** | Samovyvažující BST; základ `std::map` v C++, `TreeMap` v Javě |
| **AVL strom** | Samovyvažující BST s výškovým vyvážením |

---

## Shrnutí – kdy co použít

| Datová struktura | Typické použití |
|-----------------|----------------|
| **Pole** | Indexovaný přístup, matematické vektory/matice |
| **Zásobník** | Undo, volání funkcí, DFS, parsování výrazů |
| **Fronta** | BFS, plánování, zpracování událostí |
| **Prioritní fronta** | Dijkstra, A*, plánovač procesů |
| **Spojový seznam** | Časté vkládání/mazání, neznámá velikost |
| **BST** | Setříděná data, rychlé vyhledávání, range queries |
| **Hešovací tabulka** | O(1) vyhledávání podle klíče (slovník, množina) |
