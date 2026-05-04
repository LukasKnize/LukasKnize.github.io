# Okruh 11 – Projektové řízení: principy a nástroje

## Co je projekt a projektové řízení?

**Projekt** je dočasné úsilí podnikané za účelem vytvoření jedinečného produktu, služby nebo výsledku. Klíčové znaky projektu:
- **Dočasnost** – má jasný začátek a konec.
- **Jedinečnost** – výsledek je nový, neopakuje se rutinně.
- **Cílovost** – sleduje definovaný cíl.
- **Omezenost zdrojů** – omezený čas, rozpočet, lidé.

**Projektové řízení (Project Management)** je soubor znalostí, dovedností, nástrojů a technik aplikovaných na projektové aktivity za účelem splnění požadavků projektu.

Standardy: **PMBOK** (Project Management Body of Knowledge – PMI), **PRINCE2**, **ISO 21500**, agilní rámce (Scrum, SAFe).

---

## Trojimperativ projektu (Iron Triangle)

Každý projekt je omezen třemi navzájem propojenými parametry:

```
        Rozsah (Scope)
           /\
          /  \
         /    \
        /      \
Čas ──────────── Náklady
```

Změna jednoho parametru ovlivňuje ostatní:
- Zkrátíme čas → musíme zvýšit náklady (více zdrojů) nebo snížit rozsah.
- Přidáme rozsah → prodloužíme čas nebo zvýšíme náklady.
- Snížíme náklady → prodloužíme čas nebo zúžíme rozsah.

Moderní pojetí přidává čtvrtý rozměr: **Kvalita** (nebo spokojenost zákazníka).

---

## Životní cyklus projektu

Projekt prochází fázemi, které tvoří jeho životní cyklus:

### 1. Iniciace
- Definice cíle projektu a jeho přínosů.
- Analýza proveditelnosti (feasibility study).
- Jmenování projektového manažera.
- Výstup: **Zakládací listina projektu (Project Charter)** – formální souhlas s existencí projektu.

### 2. Plánování
- Nejkritičtější fáze – „kdo, co, kdy, za kolik, jak".
- Výstupy: **WBS** (Work Breakdown Structure), harmonogram, rozpočet, plán rizik, plán komunikace.

### 3. Realizace (Executing)
- Provádění prací dle plánu, koordinace týmu, řízení dodavatelů.
- Průběžná komunikace se stakeholders.

### 4. Monitoring a kontrola
- Probíhá **souběžně s realizací** – měření odchylek od plánu.
- **Earned Value Management (EVM)**, sledování rizik, řízení změn.

### 5. Uzavření
- Formální předání výsledků, akceptace zákazníkem.
- Lessons learned (ponaučení pro budoucí projekty).
- Uvolnění zdrojů.

---

## Klíčové principy projektového řízení

### Trojimperativ (viz výše)

### Dekompozice: WBS (Work Breakdown Structure)

**WBS** je hierarchický rozklad rozsahu projektu na menší, zvládnutelné pracovní balíky. Každá úroveň dělí nadřazenou komponentu na konkrétnější části. Nejnižší úroveň = **pracovní balík (Work Package)** – konkrétní, přiřaditelný, odhadovatelný.

WBS odpovídá na otázku „CO se má udělat" (ne jak, ne kdo, ne kdy).

### Plánování harmonogramu

Na základě WBS se definují aktivity, jejich závislosti a doby trvání → síťový diagram → kritická cesta (viz Okruh 10). Výsledek: **Ganttův diagram** – vizualizace aktivit v čase na časové ose.

### Řízení rozsahu (Scope Management)

**Scope creep** (plíživé rozšiřování rozsahu) je jeden z nejčastějších důvodů neúspěchu projektů. Každá změna rozsahu musí projít **procesem řízení změn** – schválení, přecenění dopadu na čas a náklady, aktualizace plánu.

### Řízení rizik

Cyklus: **Identifikace → Analýza → Plánování reakcí → Monitoring**.

- **Pravděpodobnost × dopad** = skóre rizika → priority.
- Strategie reakce: vyhnutí (avoid), přenos (transfer – pojistka, smlouva), zmírnění (mitigate), přijetí (accept).
- **Registr rizik**: živý dokument evidující všechna identifikovaná rizika.

### Earned Value Management (EVM)

Integrované měření rozsahu, harmonogramu a nákladů. Základní veličiny:

| Zkratka | Název | Interpretace |
|---------|-------|-------------|
| **PV** | Planned Value | Plánovaná hodnota práce, která měla být hotova |
| **EV** | Earned Value | Plánovaná hodnota práce, která **skutečně byla** hotova |
| **AC** | Actual Cost | Skutečné náklady na provedenou práci |

**Odchylky:**

$$SV = EV - PV \quad \text{(Schedule Variance; záporné = zpoždění)}$$
$$CV = EV - AC \quad \text{(Cost Variance; záporné = překročení nákladů)}$$

**Výkonnostní indexy:**

$$SPI = \frac{EV}{PV} \quad \text{(Schedule Performance Index; < 1 = opožděni)}$$
$$CPI = \frac{EV}{AC} \quad \text{(Cost Performance Index; < 1 = dražší než plán)}$$

**Odhadovaný celkový náklad:**

$$EAC = \frac{BAC}{CPI} \quad \text{(Budget at Completion / Cost Performance Index)}$$

---

## Nástroje projektového řízení

### Ganttův diagram

Nejrozšířenější vizualizace harmonogramu – aktivity na ose Y, čas na ose X, délka pruhů odpovídá délce aktivity. Zobrazuje závislosti, milníky, kritickou cestu.

**Výhody**: Přehledný, snadno srozumitelný pro všechny stakeholders.
**Nevýhody**: Při stovkách aktivit nepřehledný; obtížně zachycuje složité závislosti.

### Síťový diagram (viz Okruh 10)

CPM/PERT/MPM – identifikace kritické cesty, rezerv, analýza rizik doby dokončení.

### RACI matice

Matice odpovědností: pro každý úkol a každou roli definuje:
- **R**esponsible – kdo vykonává práci.
- **A**ccountable – kdo je zodpovědný za výsledek (vždy jen jeden).
- **C**onsulted – kdo je konzultován.
- **I**nformed – kdo je informován.

### Registr zainteresovaných stran (Stakeholder Register)

Identifikace všech stakeholders, jejich zájmů, vlivu a postoje k projektu → komunikační strategie.

### Agilní nástroje (Scrum)

Krátké iterace (**sprinty**, 1–4 týdny), průběžná dodávka hodnoty, adaptace na změny. Klíčové artefakty: **Product Backlog**, **Sprint Backlog**, **Burndown chart**.

---

## Faktory úspěchu a neúspěchu projektů

**Chaos Report (Standish Group)**: Dlouhodobě sleduje úspěšnost IT projektů. Typická zjištění: ~30 % projektů je „úspěšných" (včas, v rozpočtu, v rozsahu), ~50 % je „challenged" (s překročením), ~20 % selhává úplně.

**Nejčastější příčiny neúspěchu:**
- Nejasné nebo měnící se požadavky (scope creep).
- Nedostatečná podpora top managementu.
- Nerealistické odhady (čas, náklady).
- Selhání komunikace.
- Špatné řízení rizik.
- Nedostatečné kompetence projektového manažera.
