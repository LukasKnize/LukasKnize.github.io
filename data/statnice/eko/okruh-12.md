# Okruh 12 – Investice v podnicích

## Co je investice?

**Investice** je záměrné vynaložení kapitálu dnes s cílem získat ekonomický prospěch v budoucnu. Z pohledu podniku jde o **pořízení dlouhodobého majetku** (strojů, budov, technologií, licencí), jehož ekonomický přínos se projeví v průběhu více let.

> **Investice ≠ provozní výdaj.** Koupě suroviny je provozní výdaj – spotřebuje se v jednom výrobním cyklu. Koupě stroje je investice – slouží 10 let. Toto rozlišení je klíčové pro správnou účetní i ekonomickou analýzu.

---

## Druhy investic

**Podle předmětu investice:**
- **Hmotné (reálné) investice** – budovy, stroje, dopravní prostředky, pozemky.
- **Nehmotné investice** – software, patenty, licence, výzkum a vývoj (R&D), vzdělávání zaměstnanců.
- **Finanční investice** – nákup akcií, dluhopisů, podílů v jiných podnicích (portfolio investice nebo přímá investice do dceřiné společnosti).

**Podle účelu:**
- **Obnovovací investice** – náhrada opotřebeného nebo zastaralého majetku. Nutné pro udržení stávající kapacity.
- **Rozšiřovací (rozvojové) investice** – zvýšení výrobní kapacity, vstup na nový trh.
- **Mandatorní investice** – vynucené legislativou (ekologické normy, BOZP), nepřinášejí přímý zisk, ale jsou povinné.
- **Strategické investice** – akvizice, fúze, vstup do nového odvětví.

---

## Způsoby pořízení investic

**Koupě za vlastní prostředky (hotovostní koupě)** – nejjednodušší, firma platí okamžitě z vlastních zdrojů. Výhoda: žádné úrokové náklady. Nevýhoda: jednorázový odliv cash flow.

**Koupě na úvěr** – firma si půjčí od banky, splácí postupně včetně úroků. Výhoda: rozložení plateb, úroky jsou daňově uznatelným nákladem (daňový štít). Nevýhoda: zadlužení, úrokové náklady.

**Finanční leasing** – pronajímatel (leasingová společnost) pořídí majetek a pronajme ho firmě. Firma platí pravidelné splátky, na konci leasingu odkoupí majetek za zůstatkovou cenu. Majetek je po dobu leasingu ve vlastnictví pronajímatele, ale ekonomicky patří nájemci (dle IFRS se vykazuje v rozvaze nájemce). Leasing je de facto skryté financování.

**Operativní leasing** – nájemce majetek pouze dočasně používá a vrátí ho. Žádné pořízení, žádné odpisy na straně nájemce. Vhodné pro rychle zastarávající majetek (auta, IT).

**Vlastní výroba (aktivace)** – firma si DM vyrobí sama (výstavba budovy vlastními dělníky). Výrobní náklady se aktivují = přejdou do hodnoty aktiva.

**Dotace** – státní nebo evropské dotace snižují investiční výdaj. Podmínkou jsou dotační pravidla (udržitelnost, zprávy).

---

## Investiční výdaje a ekonomické efekty

**Investiční výdaje (CAPEX – Capital Expenditures)** jsou veškeré peněžní výdaje spojené s pořízením investice:
- Pořizovací cena (kupní cena, doprava, montáž, clo)
- Přírůstek čistého pracovního kapitálu (zásoby a pohledávky spojené s rozšířením výroby)
- Ostatní přímé výdaje (projektová dokumentace, školení)

**Ekonomické efekty (přínosy investice)** se vyjadřují jako **provozní cash flow** (operating cash flow) generovaný investicí v jednotlivých letech:

$$CF_t = (\Delta\text{Tržby} - \Delta\text{Provozní náklady bez odpisů}) \times (1-t) + \Delta\text{Odpisy} \times t$$

nebo zjednodušeně jako **přírůstek čistého zisku + odpisy** (EAT + odpisy), protože odpisy jsou náklad bez výdaje.

Na konci životnosti se přičítá **terminální (likvidační) hodnota** – výtěžek z prodeje majetku po zdanění.

---

## Statické ukazatele ekonomické efektivnosti

Statické ukazatele **nezohledňují časovou hodnotu peněz** – 1 000 Kč za rok a 1 000 Kč za 10 let jsou pro ně stejné. Jsou jednoduché a vhodné pro rychlé porovnání, zejména u krátkodobých investic.

### Průměrná roční výnosnost (ARR – Accounting Rate of Return)

$$ARR = \frac{\overline{EAT}}{\text{Průměrná hodnota investice}} \times 100 \; [\%]$$

kde $\overline{EAT}$ je průměrný čistý zisk za rok. Porovnáváme s požadovanou výnosností nebo s jinými investicemi. Nevýhoda: pracuje se ziskem (ne cash flow) a ignoruje časování.

### Prostá doba návratnosti (PP – Payback Period)

Kolik let trvá, než kumulativní cash flow pokryje počáteční investici.

$$PP = \frac{\text{Investiční výdaj}}{CF_{\text{průměrný roční}}}$$

Nebo přesněji: hledáme rok $T$, kdy $\sum_{t=1}^{T} CF_t \geq I_0$.

> **Příklad**: Investice 500 000 Kč, roční CF = 125 000 Kč. PP = 4 roky.

**Interpretace**: Čím kratší doba návratnosti, tím lépe. Firma může mít stanovenou maximální přípustnou dobu návratnosti (cut-off period).

**Nevýhody**: Ignoruje CF po době návratnosti. Nezohledňuje časovou hodnotu peněz. Nevhodné pro srovnání investic různé délky.

---

## Dynamické ukazatele ekonomické efektivnosti

Dynamické ukazatele **zohledňují časovou hodnotu peněz** – budoucí peníze jsou diskontovány (přepočítávány na současnou hodnotu). Základ: 1 Kč dnes je cennější než 1 Kč za rok, protože dnešní Kč lze investovat a přinese výnos.

### Diskontování a současná hodnota

$$PV = \frac{CF_t}{(1+r)^t}$$

kde $r$ je **diskontní sazba** (požadovaná výnosnost, WACC nebo jiná). Čím vyšší $r$ a čím vzdálenější CF, tím nižší současná hodnota.

### NPV – Čistá současná hodnota (Net Present Value)

$$NPV = -I_0 + \sum_{t=1}^{n} \frac{CF_t}{(1+r)^t}$$

kde $I_0$ = počáteční investiční výdaj, $CF_t$ = čistý cash flow v roce $t$, $r$ = diskontní sazba, $n$ = doba životnosti.

**Rozhodovací pravidlo**:
- $NPV > 0$ → investice tvoří hodnotu pro vlastníky → **přijmout**
- $NPV < 0$ → investice ničí hodnotu → **odmítnout**
- $NPV = 0$ → investice přesně splňuje požadovanou výnosnost

NPV je považována za **nejlepší ukazatel** – přímo měří přírůstek hodnoty podniku v peněžním vyjádření.

> **Příklad**: Investice 1 000 000 Kč, $r$ = 10 %, CF = 350 000 Kč/rok po 4 roky.
> $NPV = -1\,000\,000 + \frac{350\,000}{1{,}1} + \frac{350\,000}{1{,}1^2} + \frac{350\,000}{1{,}1^3} + \frac{350\,000}{1{,}1^4}$
> $= -1\,000\,000 + 318\,182 + 289\,256 + 263\,051 + 239\,137 = 109\,626 \; \text{Kč}$
>
> NPV > 0 → investice přijatelná.

### IRR – Vnitřní výnosové procento (Internal Rate of Return)

IRR je taková diskontní sazba $r^*$, při které je $NPV = 0$:

$$0 = -I_0 + \sum_{t=1}^{n} \frac{CF_t}{(1+r^*)^t}$$

**Rozhodovací pravidlo**:
- $IRR > r$ (požadovaná výnosnost) → **přijmout**
- $IRR < r$ → **odmítnout**

IRR se interpretuje jako „vlastní výnosnost" investice. Pokud IRR = 15 % a WACC = 10 %, investice vydělává 5 procentních bodů nad požadavek.

**Nevýhody IRR**: Může mít více řešení (při nepravidelných CF s více změnami znaménka). Neumožňuje přímé srovnání projektů různé velikosti (projekt s IRR 30 % ale investicí 100 Kč může mít nižší NPV než projekt s IRR 20 % a investicí 10 mil. Kč). Proto NPV > IRR pro rozhodování o výběru projektů.

### PI – Index ziskovosti (Profitability Index)

$$PI = \frac{\sum_{t=1}^{n} \frac{CF_t}{(1+r)^t}}{I_0} = 1 + \frac{NPV}{I_0}$$

**Rozhodovací pravidlo**: $PI > 1$ → přijmout. Vhodný při **kapitálovém omezení** (rationing) – seřadíme projekty dle PI a realizujeme od nejvyššího dolů, dokud má firma kapitál.

### Diskontovaná doba návratnosti (DPP)

Jako prostá PP, ale pracuje s diskontovanými CF. Hledáme rok $T$, kdy $\sum_{t=1}^{T} \frac{CF_t}{(1+r)^t} \geq I_0$. Vždy delší než prostá PP – zohledňuje ztrátu hodnoty v čase.

---

## Srovnání ukazatelů

| Ukazatel | Zohledňuje čas | Vyjadřuje | Primární použití |
|----------|---------------|-----------|-----------------|
| ARR | Ne | % výnosnost | Rychlé srovnání |
| PP | Ne | Roky | Riziko, likvidita |
| NPV | Ano | Kč (absolutní přírůstek hodnoty) | Hlavní kritérium výběru |
| IRR | Ano | % výnosnost | Srovnání s náklady kapitálu |
| PI | Ano | Poměrový | Kapitálové omezení |
| DPP | Ano | Roky | Doplněk k PP |

---

## Postaudit investic

Po realizaci investice by měl podnik porovnat skutečné výsledky s původním plánem (**postaudit / post-completion audit**). Slouží k identifikaci chyb v plánování, zlepšení budoucích odhadů a k motivaci zodpovědných manažerů být realisti při sestavování projekcí.
