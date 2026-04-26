# Okruh 3 – Produkční funkce, nákladová funkce, maximalizace zisku a tržeb

## Produkční funkce

### Co vyjadřuje?

**Produkční funkce** zachycuje technologický vztah mezi množstvím použitých **vstupů** (výrobních faktorů) a maximálním **výstupem** (produkcí), kterého lze dosáhnout.

Nejjednodušší forma se dvěma vstupy – **kapitálem K** (stroje, budovy) a **prací L** (zaměstnanci):

$$Q = f(K, L)$$

Říká: „Pokud použiji K jednotek kapitálu a L jednotek práce, vyrobím maximálně Q jednotek produktu."

> **Příklad**: Pekárna s jednou pecí (K=1) a dvěma pekaři (L=2) upeče 100 bochníků denně. Přidáme-li třetího pekaře (L=3), bude to třeba 130 bochníků.

### Celkový produkt, mezní produkt, průměrný produkt

V krátkém období je K fixní, měníme jen L. Sledujeme tři veličiny:

**Celkový produkt (TP – Total Product)**
Celkový výstup při dané úrovni práce: $TP = f(K_{fixní}, L)$

**Mezní produkt práce (MP – Marginal Product)**
O kolik vzroste výstup přidáním jedné další jednotky práce:

$$MP_L = \frac{\Delta TP}{\Delta L}$$

**Průměrný produkt práce (AP – Average Product)**
Průměrný výstup na jednoho pracovníka:

$$AP_L = \frac{TP}{L}$$

### Zákon klesajících mezních výnosů

Při přidávání jednoho variabilního vstupu (práce) při fixním ostatním (stroje) platí:

**Po určitém bodě začne mezní produkt každé další jednotky práce klesat.**

> Pekárna má jednu pec. První pekař – vyrobí 100 bochníků. Druhý pekař pomůže, specializace zvýší výstup – celkem 220 bochníků, mezní produkt druhého = 120. Třetí pekař – celkem 300 bochníků, MP = 80. Čtvrtý pekař – pec je vytížena, musí čekat – celkem 340, MP = 40. Pátý pekař – překáží, celkem 340 nebo méně.

Graficky: TP nejdřív roste rychle (rostoucí MP), pak stále pomaleji (klesající MP), nakonec může i klesat (záporný MP).

```
TP
↑          ___
│        /    \
│       /      (MP záporný)
│      /
│    /
│  /
└────────────→ L

MP
↑   /\
│  /  \
│ /    \
│/      \____
└────────────→ L  (MP nejdřív roste, pak klesá, nakonec záporný)
       ↑
    inflexní bod TP
```

---

## Nákladová funkce

### Co vyjadřuje?

**Nákladová funkce** vyjadřuje minimální náklady potřebné k výrobě daného množství Q. Je to „ekonomická strana" produkční funkce – jaký je nejlevnější způsob, jak vyrobit Q kusů?

### Druhy nákladů v krátkém období

**Celkové náklady (TC – Total Cost)**

$$TC = FC + VC$$

**Fixní náklady (FC – Fixed Cost)**
Náklady, které se nemění s objemem výroby – platíme je i při Q = 0.

> Nájemné za výrobní halu, leasing strojů, pojistné, základní mzdy managementu.

Fixní náklady v grafu jsou **vodorovná přímka** – nezávisejí na Q.

**Variabilní náklady (VC – Variable Cost)**
Náklady, které rostou s výrobou – materiál, energie, odpracované hodiny dělníků.

VC zpočátku rostou pomalu (klesající MP → potřebujeme relativně méně vstupů), ale po inflexním bodě začnou růst rychleji (klesající MP → na každou jednotku výstupu potřebujeme více vstupů).

### Průměrné náklady

**Průměrné celkové náklady (AC nebo ATC)**

$$AC = \frac{TC}{Q}$$

Cena, za kterou musíme prodávat, abychom neprodělali (pokryli všechny náklady). Křivka AC má typicky tvar **U** – nejdřív klesá (rozložení FC na více kusů), pak roste (klesající MP zvyšuje VC na kus).

**Průměrné fixní náklady (AFC)**

$$AFC = \frac{FC}{Q}$$

Vždy klesají s Q – fixní náklady se rozloží na více kusů.

**Průměrné variabilní náklady (AVC)**

$$AVC = \frac{VC}{Q}$$

Také tvar U, ale mělčí. Minimální bod AVC je níže než minimální bod AC.

### Mezní náklady (MC – Marginal Cost)

**Mezní náklady** = o kolik vzrostou celkové náklady při výrobě jednoho dalšího kusu:

$$MC = \frac{\Delta TC}{\Delta Q}$$

Klíčová vlastnost: MC klesají (díky rostoucím výnosům ze specializace), pak rostou (díky klesajícím mezním výnosům).

**Vztah MC a průměrných nákladů:**
- Když MC < AC → AC klesají (přidaná jednotka je levnější než průměr → snižuje průměr).
- Když MC > AC → AC rostou.
- Když MC = AC → AC jsou v minimu.

Totéž platí pro MC a AVC.

```
Náklady
 ↑        MC
 │       /    AC
 │      /   /  \
 │     /  /      \___
 │    / /    AVC      \_
 │   //
 │  /
 └──────────────────→ Q
     ↑    ↑
    min  min
    AVC   AC
```

---

## Maximalizace zisku

### Podmínka maximalizace zisku

Firma maximalizuje zisk, když produkuje takové množství Q, při kterém se **mezní příjem rovná mezním nákladům**:

$$MR = MC$$

**Proč?** Logika je intuitivní:
- Pokud MR > MC: výroba dalšího kusu přinese víc peněz, než stojí → vyplatí se vyrábět více → zisk roste.
- Pokud MR < MC: výroba dalšího kusu stojí víc, než přinese → vyplatí se vyrábět méně → tím se zisk zvýší.
- Pokud MR = MC: přidání dalšího kusu nezmění zisk → jsme v optimu.

### Mezní příjem (MR – Marginal Revenue)

**Mezní příjem** = o kolik vzrostou celkové tržby při prodeji jednoho dalšího kusu:

$$MR = \frac{\Delta TR}{\Delta Q}$$

V **dokonalé konkurenci** firma prodává za tržní cenu P (nemůže ji ovlivnit), takže MR = P (každý prodaný kus přinese P Kč).

U **monopolu** musí firma snížit cenu, aby prodala více → MR < P.

### Zisk jako plocha v grafu

$$\Pi = (P - AC) \times Q^*$$

- Pokud P > AC: firma dosahuje zisku (kladný ekonomický zisk).
- Pokud P = AC: normální zisk (nulový ekonomický zisk) – firma přežívá.
- Pokud AVC < P < AC: firma vyrábí se ztrátou, ale kryje variabilní náklady → dočasně vyrábí.
- Pokud P < AVC: firma zastaví výrobu (uzavírací podmínka).

### Příklad

Firma vyrábí tričká:
- Cena na trhu: P = 150 Kč
- MC při Q=100: 130 Kč → MR (150) > MC (130) → vyrob více
- MC při Q=120: 150 Kč → MR = MC → optimum, vyrob 120 triček
- MC při Q=130: 170 Kč → MR (150) < MC (170) → přestaň zvyšovat

---

## Maximalizace tržeb

Někdy firma místo zisku maximalizuje **celkové tržby (TR)**:

$$TR = P \times Q$$

Tržby jsou maximální, když **mezní příjem = 0** (MR = 0), protože:
- MR > 0: prodej dalšího kusu tržby zvyšuje → vyrob více.
- MR < 0: prodej dalšího kusu tržby snižuje → sniž výrobu.
- MR = 0: tržby jsou v maximu.

Firma maximalizující tržby **produkuje více** než firma maximalizující zisk (MR=MC vs. MR=0), a za **nižší cenu**. Zisk nemusí být maximální – může být nižší nebo dokonce nulový.

### Porovnání cílů

| Kritérium | Max. zisku | Max. tržeb |
|-----------|-----------|-----------|
| Podmínka | MR = MC | MR = 0 |
| Objem výroby | Nižší | Vyšší |
| Cena | Vyšší | Nižší |
| Zisk | Maximální | Nižší než max. |
| Tržby | Nižší | Maximální |

---

## Úspory z rozsahu (Economies of Scale)

V dlouhém období, kdy lze měnit i fixní vstupy, sledujeme, co se děje s průměrnými náklady při zvětšení celého podniku:

- **Rostoucí výnosy z rozsahu (úspory z rozsahu)**: zdvojnásobením vstupů výstup více než zdvojnásobíme → AC klesají. Příčiny: specializace, rozložení fixních nákladů, vyjednávací síla u dodavatelů.

- **Konstantní výnosy z rozsahu**: výstup roste proporcionálně → AC se nemění.

- **Klesající výnosy z rozsahu (neúspory z rozsahu)**: zdvojnásobením vstupů výstup méně než zdvojnásobíme → AC rostou. Příčiny: koordinační problémy, byrokracie velkých organizací.

**Minimální efektivní rozsah (MES)** je nejnižší objem výroby, při němž jsou AC minimální. Odvětví s nízkým MES (holičství) je fragmentované, s vysokým MES (elektrárenství) přirozený monopol.
