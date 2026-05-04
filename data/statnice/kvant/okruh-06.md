# Okruh 6 – Matematické modelování: definice, struktura, typy modelů

## Co je matematický model?

**Matematický model** je formální (matematický) popis vybraných vlastností reálného systému nebo jevu, sestavený za konkrétním účelem. Model je vždy **zjednodušením reality** – zachycuje jen ty aspekty, které jsou relevantní pro daný účel, a ignoruje vše ostatní.

> „All models are wrong, but some are useful." (George Box)

Modelování není cílem samo o sobě – model je **nástroj pro porozumění, predikci nebo optimalizaci**.

---

## Proč modelovat?

Přímé experimenty s reálným systémem mohou být:
- **Příliš drahé** (testování nového letadla zničením prototypu).
- **Nebezpečné** (simulace jaderné havárie).
- **Časově náročné** (zkoumání demografického vývoje po desetiletí).
- **Neetické** (experimenty na lidech).
- **Fyzicky nemožné** (retroaktivní analýza historické události).

Model umožňuje provádět experimenty **in silico** – rychle, levně a bezpečně.

---

## Postup matematického modelování

Modelování je iterativní proces, ne lineární postup. Standardní kroky:

**1. Formulace problému**
Jasné vymezení: Co chceme zjistit nebo rozhodnout? Jaké jsou dostupné zdroje dat? Jaká je požadovaná přesnost? Špatně formulovaný problém = model odpovídající na špatnou otázku.

**2. Konceptualizace systému**
Identifikace klíčových proměnných, vazeb a mechanismů. Vytvoření konceptuálního schématu (diagram, slovní popis). Volba hranice modelu – co je endogenní (uvnitř modelu), co exogenní (vstup z okolí).

**3. Formalizace (matematická formulace)**
Překlad konceptuálního modelu do rovnic, nerovnic, grafů, matic. Výběr vhodného matematického aparátu (diferenciální rovnice, LP, pravděpodobnostní model, …).

**4. Parametrizace**
Odhad hodnot parametrů modelu z dat (statistická estimace, expertní odhady, kalibrace).

**5. Verifikace**
Technická kontrola: Dělá model to, co jsme zamýšleli? Jsou rovnice správně? Odpovídá chování modelu logickým očekáváním?

**6. Validace**
Věcná kontrola: Odpovídá model realitě? Testujeme na historických datech (back-testing) nebo srovnáváme s nezávislými pozorováními.

**7. Analýza a experimentování**
Simulace scénářů, citlivostní analýza (jak výsledky závisí na parametrech), optimalizace.

**8. Interpretace a komunikace výsledků**
Výsledky modelu musí být srozumitelné pro rozhodující osoby. Model je zjednodušení – nejistoty a předpoklady musí být transparentní.

---

## Definice a struktura modelu

Matematický model obecně obsahuje:

- **Proměnné stavu** (state variables) – popisují stav systému v čase: zásoby, populace, kapitál.
- **Vstupní proměnné** (inputs / exogenní proměnné) – vnější vlivy na systém.
- **Výstupní proměnné** (outputs) – výstupy modelu, které nás zajímají.
- **Parametry** – konstanty charakterizující strukturu systému (sazby, koeficienty).
- **Rovnice** – matematické vztahy popisující dynamiku nebo strukturu.

---

## Typy modelů

Modely lze klasifikovat podle mnoha hledisek:

### Dle účelu
| Typ | Účel | Příklady |
|-----|------|---------|
| **Popisné (deskriptivní)** | Popsat chování systému | Regresní model spotřeby |
| **Prediktivní** | Předpovídat budoucí vývoj | Prognóza prodeje, meteorologie |
| **Normativní (preskriptivní / optimalizační)** | Najít nejlepší rozhodnutí | LP model výroby, portfolio optimalizace |
| **Explanační** | Vysvětlit mechanismus | Epidemiologický model šíření nemoci |

### Dle zacházení s časem
- **Statický model**: Čas nehraje roli; popisuje rovnovážný stav. Příklad: LP, rovnováha trhu.
- **Dynamický model**: Stav se mění v čase; obsahuje diferenciální nebo diferenční rovnice. Příklad: systémová dynamika, ARIMA pro časové řady.

### Dle zacházení s neurčitostí
- **Deterministický model**: Stejné vstupní podmínky vedou vždy ke stejným výsledkům. Parametry jsou přesně dány.
- **Stochastický (probabilistický) model**: Zahrnuje náhodnost – parametry nebo výsledky jsou náhodné veličiny. Příklady: Monte Carlo simulace, Markovské řetězce.

### Dle vztahu k reálnému systému
- **Analytický (exaktní)**: Řešení je vyjádřeno uzavřenou formulí. Rychlé, ale omezené na jednoduché systémy.
- **Numerický**: Řešení se hledá iterativním výpočtem (diferenční rovnice, FEM). Obecnější, ale výpočetně náročnější.
- **Simulační**: Model se „spustí" a sleduje se jeho chování v čase. Nejflexibilnější, ale výsledky jsou obtížněji generalizovatelné.

### Dle matematické struktury
| Typ | Charakteristika | Příklady metod |
|-----|----------------|---------------|
| **LP / MIP** | Lineární / celočíselný optimalizační model | Simplex, Branch & Bound |
| **Diferenciální rovnice** | Spojitá dynamika | Systémová dynamika, populační modely |
| **Pravděpodobnostní** | Náhodné proměnné, distribuce | Markovské řetězce, THO |
| **Grafové** | Uzly a hrany | Síťová analýza, CPM/PERT |
| **Regresní / statistické** | Empirické vztahy z dat | OLS, logistická regrese |
| **Agentní** | Autonomní agenti s pravidly chování | Multiagentní simulace |

---

## Validace a limity modelů

### Typy chyb v modelování

- **Chyba specifikace**: Model má špatnou strukturu (zapomněli jsme klíčovou vazbu).
- **Chyba parametrizace**: Parametry jsou špatně odhadnuty.
- **Chyba numerická**: Zaokrouhlování, nestabilita algoritmů.

### Citlivostní analýza

Systematická změna parametrů modelu a sledování dopadu na výstupy. Identifikuje **klíčové parametry** (na jejichž přesnosti záleží nejvíce) a **robustnost** závěrů.

### Princip parsimonie (Occamova břitva)

Ze dvou modelů se stejnou vysvětlovací silou preferujeme jednodušší. Složitý model může přesněji fitovat historická data, ale hůře generalizuje (overfitting).

---

## Vztah k ostatním okruhům

Matematické modelování je meta-téma, které zastřešuje většinu ostatních metod v kurzu:
- LP (Okruh 1) = normativní, deterministický, analytický model
- Dopravní úlohy (Okruh 2) = speciální LP model
- Teorie her (Okruh 3) = strategický (normativní/popisný) model
- Systémová dynamika (Okruh 7) = dynamický, deterministický simulační model
- Monte Carlo (Okruh 8) = dynamický, stochastický simulační model
- Markovské řetězce (Okruh 9) = stochastický, analytický/numerický model
