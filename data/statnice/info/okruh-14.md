# Okruh 14 – Výroková logika, výrok, logické spojky, výrokové formule

## Co je výroková logika?

**Výroková logika** (propozicionální logika) je nejjednodušší forma formální logiky. Studuje, jak z pravdivých tvrzení (výroků) odvozovat další pravdivá tvrzení pomocí přesně definovaných pravidel.

Je základem matematického dokazování, návrhu digitálních obvodů (hradla AND, OR, NOT = logické spojky), databázových dotazů (WHERE a AND OR NOT), umělé inteligence a programování obecně (podmínky v kódu jsou výrokové formule).

---

## Výrok (Propozice)

**Výrok** je oznamovací věta, o které má smysl říci, zda je **pravdivá (TRUE, 1)** nebo **nepravdivá (FALSE, 0)**. Tato vlastnost se nazývá **pravdivostní hodnota**.

### Příklady výroků

| Věta | Je výrok? | Pravdivostní hodnota |
|------|----------|---------------------|
| Praha je hlavní město ČR. | ANO | TRUE |
| 2 + 2 = 5 | ANO | FALSE |
| Venku prší. | ANO | TRUE nebo FALSE (závisí na kontextu) |
| Zavři okno! | NE – příkaz | – |
| Je toto věta? | NE – otázka | – |
| Tato věta je nepravdivá. | NE – paradox (Liarův paradox) | – |

### Výroková proměnná

Výroky označujeme písmeny: **p, q, r, s, …** (nebo A, B, C…). Každá proměnná nabývá hodnoty TRUE (1) nebo FALSE (0).

---

## Logické spojky (Logické operátory)

Ze základních výroků tvoříme složené výroky pomocí **logických spojek**. Pro každou spojku existuje **pravdivostní tabulka** – vyčerpávající přehled, kdy je složený výrok pravdivý.

### 1. Negace (NOT) – ¬p, ~p, !p

Obrátí pravdivostní hodnotu. „Není pravda, že p."

| p | ¬p |
|---|-----|
| 0 | 1 |
| 1 | 0 |

### 2. Konjunkce (AND) – p ∧ q, p && q

„p a zároveň q." Pravdivá jen tehdy, když jsou **oba** výroky pravdivé.

| p | q | p ∧ q |
|---|---|-------|
| 0 | 0 | 0 |
| 0 | 1 | 0 |
| 1 | 0 | 0 |
| 1 | 1 | **1** |

### 3. Disjunkce (OR) – p ∨ q, p \|\| q

„p nebo q (nebo oboje)." Pravdivá, když aspoň jeden výrok je pravdivý. (Inkluzivní OR.)

| p | q | p ∨ q |
|---|---|-------|
| 0 | 0 | 0 |
| 0 | 1 | **1** |
| 1 | 0 | **1** |
| 1 | 1 | **1** |

### 4. Exkluzivní disjunkce (XOR) – p ⊕ q

„p nebo q, ale ne oboje." Pravdivá, když jsou výroky **různé**.

| p | q | p ⊕ q |
|---|---|-------|
| 0 | 0 | 0 |
| 0 | 1 | **1** |
| 1 | 0 | **1** |
| 1 | 1 | 0 |

### 5. Implikace (IF … THEN) – p → q

„Jestliže p, pak q." / „p implicitně znamená q." Klíčové: implikace je **nepravdivá jen tehdy, když předpoklad (p) je pravdivý, ale závěr (q) je nepravdivý**.

| p | q | p → q |
|---|---|-------|
| 0 | 0 | **1** |
| 0 | 1 | **1** |
| 1 | 0 | 0 |
| 1 | 1 | **1** |

> Intuice: „Jestliže prší, vezmu deštník." – Pokud neprší (p = 0), nic jsem neslíbil – výrok je pravdivý ať deštník beru či ne. Výrok mohu porušit pouze pokud prší (p = 1) a já deštník nevezmu (q = 0).

**Speciální případy implikace:**
- **Obrácená implikace (konverze):** q → p
- **Obměna (kontrapozice):** ¬q → ¬p (ekvivalentní s p → q)
- **Negace:** ¬(p → q) ≡ p ∧ ¬q

### 6. Ekvivalence (IF AND ONLY IF) – p ↔ q

„p právě tehdy, když q." Pravdivá, když oba výroky mají **stejnou** pravdivostní hodnotu.

| p | q | p ↔ q |
|---|---|-------|
| 0 | 0 | **1** |
| 0 | 1 | 0 |
| 1 | 0 | 0 |
| 1 | 1 | **1** |

Ekvivalence p ↔ q je totéž jako (p → q) ∧ (q → p).

---

## Výrokové formule

**Výroková formule** je výraz sestavený z výrokových proměnných, logických spojek a závorek podle syntaktických pravidel.

### Priorita operátorů (od nejvyšší)

1. ¬ (negace)
2. ∧ (konjunkce)
3. ∨ (disjunkce)
4. → (implikace)
5. ↔ (ekvivalence)

Stejně jako v aritmetice: `*` má vyšší prioritu než `+`, závorky přepisují vše.

```
p ∨ q ∧ r  =  p ∨ (q ∧ r)      ← AND má vyšší prioritu než OR
¬p ∧ q     =  (¬p) ∧ q          ← NOT má nejvyšší prioritu
```

### Tautologie, kontradikce, splnitelnost

| Pojem | Definice | Příklad |
|-------|---------|---------|
| **Tautologie** | Pravdivá pro **všechny** kombinace hodnot proměnných | p ∨ ¬p |
| **Kontradikce** | Nepravdivá pro **všechny** kombinace | p ∧ ¬p |
| **Splnitelná** | Existuje aspoň jedna kombinace, pro kterou je pravdivá | p ∧ q |

Ověření se provede úplnou pravdivostní tabulkou (2ⁿ řádků pro n proměnných).

### Příklad: ověření tautologie

Je formule `(p → q) ↔ (¬p ∨ q)` tautologie?

| p | q | p → q | ¬p ∨ q | (p→q)↔(¬p∨q) |
|---|---|-------|--------|--------------|
| 0 | 0 | 1 | 1 | **1** |
| 0 | 1 | 1 | 1 | **1** |
| 1 | 0 | 0 | 0 | **1** |
| 1 | 1 | 1 | 1 | **1** |

Ano – tautologie. Implikaci lze vždy přepsat jako `¬p ∨ q`.

---

## Logické zákony (Ekvivalence)

Tyto zákony lze používat pro **zjednodušení formulí** – jako algebraické úpravy, ale pro logiku:

### De Morganovy zákony
```
¬(p ∧ q) ≡ ¬p ∨ ¬q        "negace konjunkce = disjunkce negací"
¬(p ∨ q) ≡ ¬p ∧ ¬q        "negace disjunkce = konjunkce negací"
```

Prakticky: „není pravda, že prší A svítí slunce" = „neprší NEBO nesvítí slunce".

### Komutativita
```
p ∧ q ≡ q ∧ p
p ∨ q ≡ q ∨ p
```

### Asociativita
```
(p ∧ q) ∧ r ≡ p ∧ (q ∧ r)
(p ∨ q) ∨ r ≡ p ∨ (q ∨ r)
```

### Distributivita
```
p ∧ (q ∨ r) ≡ (p ∧ q) ∨ (p ∧ r)
p ∨ (q ∧ r) ≡ (p ∨ q) ∧ (p ∨ r)
```

### Další důležité zákony
```
p ∧ 1 ≡ p          (identita pro AND)
p ∨ 0 ≡ p          (identita pro OR)
p ∧ 0 ≡ 0          (nulový zákon pro AND)
p ∨ 1 ≡ 1          (nulový zákon pro OR)
p ∧ p ≡ p          (idempotence)
p ∨ ¬p ≡ 1         (vyloučení třetího)
p ∧ ¬p ≡ 0         (spor)
¬(¬p) ≡ p          (dvojitá negace)
```

---

## Normální formy

Každou formuli lze převést do standardního tvaru:

### DNF (Disjunktivní normální forma)

Součet součinů (OR konjunkcí). Vhodná pro tvorbu pravdivostní tabulky (každý řádek s hodnotou 1 odpovídá jedné konjunkci):

```
(p ∧ ¬q) ∨ (¬p ∧ q) ∨ (p ∧ q)
```

### CNF (Konjunktivní normální forma)

Součin součtů (AND disjunkcí). Používá se v SAT solverech a automatickém dokazování:

```
(p ∨ q) ∧ (¬p ∨ r) ∧ (q ∨ ¬r)
```

---

## Propojení s programováním a elektronikou

### V kódu

Logické spojky se přímo mapují na programovací operátory:

```python
# Python (přirozený jazyk)
if (vek >= 18) and (ma_prukaz or je_v_doprovodu):
    povol_vstup()

# C/Java (symbolické operátory)
if (vek >= 18 && (ma_prukaz || je_v_doprovodu)) {
    povolVstup();
}
```

### V logických obvodech

Každá logická spojka odpovídá **logickému hradlu** (gate):

| Hradlo | Symbol | Funkce |
|--------|--------|--------|
| AND | `▷◁` | Konjunkce |
| OR | `▷)` | Disjunkce |
| NOT | `▷○` | Negace |
| NAND | AND + NOT | ¬(p ∧ q) – universální hradlo |
| NOR | OR + NOT | ¬(p ∨ q) – universální hradlo |
| XOR | `▷⊕` | Exkluzivní disjunkce |

Celý počítač je postaven z miliard takových hradel – sčítačka, komparátor, multiplexer, paměť jsou složeny výhradně z AND, OR, NOT.
