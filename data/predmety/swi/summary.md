# Softwarové inženýrství – Souhrn

---

## 1. Základy softwarového inženýrství

### Co je softwarové inženýrství (SWI)?

Softwarové inženýrství je podle **IEEE Standard 610.12** definováno jako *„systematický, disciplinovaný a měřitelný přístup k vývoji, provozu a údržbě software"*.

**Rozdíl mezi programováním a SWI:**

| Aspekt | Programování | Softwarové inženýrství |
|--------|-------------|------------------------|
| Zaměření | Psaní kódu, algoritmy | Celý životní cyklus IS |
| Rozsah | Jednotlivec, malý tým | Týmová práce, organizace |
| Otázka | JAK naprogramovat | CO, PRO KOHO, ZA KOLIK |
| Výstup | Funkční kód | Systém s dokumentací a údržbou |

**Historický kontext:** V 60.–70. letech nastal tzv. **softwarová krize** – projekty systematicky překračovaly rozpočty a termíny. NATO konference (1968) poprvé použila termín „software engineering" jako řešení.

### Klíčové koncepty SWI

- **Modularita** – rozdělení systému na nezávislé, znovupoužitelné komponenty s jasně definovanými rozhraními
- **Hierarchie** – organizace do úrovní abstrakce od vysokoúrovňové architektury po implementaci
- **Standardizace** – využití osvědčených postupů, návrhových vzorů a průmyslových standardů

---

## 2. Životní cyklus vývoje IS (SDLC)

**Software Development Life Cycle (SDLC)** je strukturovaný proces definující fáze vývoje software od počátečního nápadu po vyřazení.

**Proč je SDLC důležitý?** Zajišťuje předvídatelnost, kontrolu kvality, řízení rizik, efektivitu a dokumentaci.

### Fáze SDLC

#### Fáze 1: Plánování a analýza (10–35 % času)
- Studie proveditelnosti (technická, ekonomická, organizační)
- Analýza požadavků (funkční a nefunkční)
- Definice rozsahu a identifikace rizik
- Odhad nákladů a harmonogramu
- **Výstup:** SRS dokument, projektový plán, konceptuální datový model

#### Fáze 2: Návrh systému (15–30 %)
- Architektura systému, návrh databáze, UI, výběr technologií
- **Technická specifikace** = klíčový výstup; obsahuje: ERD/Class diagram, Use Case, Sequence/Activity/State diagramy, DFD, prototypy UI, plán implementace
- Moderně: cloud-native architektura, API-first design, security architecture, CI/CD pipeline design

#### Fáze 3: Implementace (20–40 %)
- Kódování, code review, unit testy
- Moderně: Continuous Integration, feature flags, AI-asistovaný vývoj, kontejnerizace
- Klíčové praktiky: TDD, BDD, SOLID principy, čistý kód

#### Fáze 4: Testování (10–20 %, moderně kontinuální)
- **Unit testy** – testování jednotlivých funkcí
- **Integrační testy** – fungují komponenty společně?
- **Systémové testy** – splňuje systém specifikace?
- **Akceptační testy** – přijme zákazník systém?
- **Výkonnostní testy** – zvládne systém zátěž?
- **Bezpečnostní testy** – SAST, DAST, IAST, penetrační testování
- Moderní přístup **„shift-left"**: odhalování chyb co nejdříve; každá chyba odhalená dříve je oprávit **1× až 1000× levnější**

#### Fáze 5: Nasazení (5–15 %)
- **Blue-Green deployment** – dvě identická prostředí, rychlý přepoj; rollback za sekundy
- **Canary deployment** – nová verze pro 5 % uživatelů, postupné zvyšování
- **Feature toggles** – zapínání funkcí bez nového nasazení
- Cloudové nasazení: Kubernetes, Serverless (AWS Lambda), CDN, Load balancer

#### Fáze 6: Údržba (nejdelší a nejdražší fáze)
- **Corrective** – opravy chyb
- **Adaptive** – přizpůsobení novému prostředí
- **Perfective** – vylepšení funkcionality
- **Preventive** – prevence budoucích problémů
- **DevOps metriky (DORA):** Deployment frequency, Lead time for changes, Time to restore service, Change failure rate

#### Fáze 7: Vyřazení
- Migrace na nový systém, archivace dat, GDPR compliance (právo na zapomenutí), kryptografické vymazání

### Metodologie vývoje

#### Waterfall (Vodopád)
Lineární, sekvenční postup – každá fáze musí být dokončena před přechodem k další.
- ✅ Jednoduché řízení, jasná dokumentace, snazší plánování
- ❌ Rigidní, zákazník vidí produkt až na konci, vysoké riziko při nejasných požadavcích
- **Použití:** Projekty s jasnými stabilními požadavky (embedded systémy)

#### Iterativní/Inkrementální model
Kombinuje iterativní vývoj a inkrementální dodávky; systém se buduje v cyklech.
- ✅ Flexibilnější, rychlá zpětná vazba, průběžné úpravy
- ❌ Složitější plánování, riziko architektonické eroze

#### Agilní metodiky (dnes nejpoužívanější)
Adaptivní přístup dle **Agile Manifesta**:
- **Jednotlivci a interakce** před procesy a nástroji
- **Fungující software** před vyčerpávající dokumentací
- **Spolupráce se zákazníkem** před vyjednáváním smluv
- **Reakce na změny** před dodržováním plánu
I když mají věci vpravo hodnotu, věci vlevo jsou cennější.

**Scrum:** Sprints (2–4 týdny), role: Product Owner, Scrum Master, tým; ceremonie: planning, daily standup, review, retrospective.

**Kanban:** Vizualizace toku práce na tabuli, WIP limity, kontinuální dodávání.

- ✅ Maximální flexibilita, rychlá hodnota, vysoká motivace
- ❌ Náročné na komunikaci, těžká predikce nákladů, riziko tech. dluhu

#### Prototyping
Rychlé vytvoření zjednodušeného modelu pro ověření konceptu.
- **Throwaway** – prototyp se zahodí po ověření
- **Evolutionary** – prototyp se postupně vyvíjí v produkt

---

## 3. Role při vývoji IS

| Role | Zaměření | Zodpovědnost |
|------|----------|--------------|
| **Projektový manažer** | Proces (jak a kdy) | WBS, Gantt, rozpočet, rizika, reporting |
| **Systémový analytik** | CO a JAK technicky | Specifikace, modelování (ERD, UML, DFD), koordinace s vývojáři |
| **Softwarový inženýr** | Technická realizace | Návrh řešení, složité algoritmy, code review, best practices |
| **Business analytik** | Business procesy | Business case, ROI, stakeholder management |
| **Software architekt** | Celková architektura | Výběr technologií, standardy, technický leadership |
| **Security specialist** | Kybernetická bezpečnost | Security audit, pen-testing, incident response |
| **DBA** | Databáze | Návrh DB, optimalizace, backup/recovery |
| **UX/UI Designer** | Uživatelská zkušenost | User research, wireframy, prototypy, usability |
| **DevOps engineer** | Nasazení a provoz | CI/CD pipeline, IaC, monitoring |
| **Product Owner (Agile)** | Hlas zákazníka | Product vision, backlog, prioritizace |

---

## 4. Modelování informačních systémů

### Entity-Relationship Diagram (ERD)

ERD popisuje **datový model** – jak systém strukturuje data.

**Základní pojmy:**
- **Entita** – objekt reálného světa (Student, Objednávka) → implementace jako tabulka
- **Atribut** – vlastnost entity → implementace jako sloupec
- **Vztah/Vazba** – asociace mezi entitami s **kardinalitou** (1:1, 1:N, M:N)

**Typy vztahů:**
- **1:1** – Osoba ↔ Občanský průkaz (cizí klíč s UNIQUE)
- **1:N** – Oddělení → Zaměstnanci (cizí klíč na straně N)
- **M:N** – Student ↔ Předmět (vyžaduje asociační tabulku)

**Povinnost vazby (required):** vždy uvádět dolní limit (0 nebo 1), např. `0..n`, `1..n`.

**Notace:**
- **Chenova notace** – obdélníky (entity), ovály (atributy), kosočtverce (vztahy)
![Chenova notace](https://raw.githubusercontent.com/LukasKnize/LukasKnize.github.io/refs/heads/main/data/predmety/swi/chen.png)
- **Crow's Foot** – kompaktnější průmyslový standard; symboly: kruh (0), svislá čára (1), crow's foot (mnoho)
![Crow's foot notace](https://raw.githubusercontent.com/LukasKnize/LukasKnize.github.io/refs/heads/main/data/predmety/swi/crow.png)

### Data Flow Diagram (DFD)

DFD zobrazuje **tok informací** systémem – co systém dělá s daty.

**Komponenty:**
- **Proces** – transformace dat (kruh/zaoblený obdélník, sloveso + objekt, např. „Ověřit platbu")
- **Datový tok** – pohyb dat (šipka s názvem podstatného jména); musí být napojen na proces
- **Externí entita (Terminátor)** – zdroj/příjemce dat mimo systém (obdélník)
- **Datové úložiště** – persistentní data (dvě paralelní čáry, název v množném čísle)
![Data flow diagram](https://raw.githubusercontent.com/LukasKnize/LukasKnize.github.io/refs/heads/main/data/predmety/swi/flow.png)

**Hierarchická dekompozice:**
- **Kontextový diagram (úroveň 0)** – celý systém jako jeden proces
- **Úroveň 1** – 5–9 hlavních procesů
- Každá nižší úroveň dekomponuje jeden proces z vyšší; **datové toky se musí zachovat**

**Nejčastější chyby:**
- **Black Holes** – proces má vstup, ale žádný výstup
- **Miracles (Zázraky)** – proces má výstup, ale žádný vstup
- **Grey Holes** – výstupy obsahují více informací, než je možné ze vstupů
- **Zakázané spojení:** externí entita ↔ datový sklad (přímý přístup); dvě ext. entity; dva datové sklady

### Objektový přístup (OOP)

Modeluje systém jako kolekci spolupracujících objektů.

#### Základní principy OOP

| Princip | Popis |
|---------|-------|
| **Zapouzdření** | Skrytí vnitřní implementace; přístup pouze přes veřejné metody; privátní atributy |
| **Dědičnost** | Potomek (subclass) získává vlastnosti rodiče; přidává vlastní atributy a přepisuje metody |
| **Polymorfismus** | Stejná metoda, různé implementace v různých třídách; `override`, abstraktní třídy |

### UML (Unified Modeling Language)

UML je standardizovaný jazyk pro vizuální modelování (14 typů diagramů):

**Strukturní diagramy (statická struktura):**
- **Class Diagram** – třídy, atributy, metody, vztahy (nejpoužívanější; ekvivalent ERD pro OOP)
- **Component Diagram** – modularita, závislosti komponent
- **Deployment Diagram** – rozmístění software na hardware

**Diagramy chování:**
- **State Machine Diagram** – stavy objektu a přechody (životní cyklus)

**Diagramy interakce:**
- **Use Case Diagram** – funkcionality z pohledu uživatele (kdo a co dělá se systémem)
- **Sequence Diagram** – zprávy mezi objekty v chronologickém pořadí
- **Activity Diagram** – workflow; swimlanes pro různé role

### Use Case Diagram podrobně

- **Systém** – obdélník s názvem
- **Aktor** – panáček mimo systém (uživatel nebo jiný systém)
- **Use Case** – ovál uvnitř systému; sloveso v infinitivu (Přihlásit se)
- **«include»** – povinně zahrnutá funkce (šipka k zahrnutému UC)
- **«extend»** – volitelné rozšíření (šipka od rozšiřujícího UC)

### Class Diagram – vztahy

- **Asociace** – obecný vztah (čára); lze přidat název, kardinalitu, role, navigabilitu
- **Agregace (◇)** – „skládá se z"; části existují nezávisle (Tým ◇── Hráč)
- **Kompozice (◆)** – silné vlastnictví; části bez celku neexistují (Faktura ◆── Položka)
- **Dědičnost (△)** – šipka od potomka k rodiči; dědí atributy, metody i vazby

**Mapování na databázi:**
- Třída → Tabulka; Instance → Řádek; Atribut → Sloupec
- Agregace → Cizí klíč s NULL, ON DELETE SET NULL
- Kompozice → Cizí klíč NOT NULL, ON DELETE CASCADE

**Strategie mapování dědičnosti:**
- **Single Table Inheritance** – jedna tabulka pro celou hierarchii + sloupec type; jednoduché, ale mnoho NULL
- **Table per Class** – samostatná tabulka pro každou třídu; bez NULL, ale duplikace sloupců
- **Joined Tables** – tabulka pro každou úroveň hierarchie; normalizované, ale složité JOIN dotazy

### Enterprise architektura – ArchiMate

ArchiMate je otevřený standard pro modelování **celé organizace** (ne jen software).

**Tři vrstvy:**
1. **Business Layer** – obchodní role, procesy, služby (Zákazník, Nákupní proces)
2. **Application Layer** – informační systémy (CRM, ERP, API)
3. **Technology Layer** – fyzická infrastruktura (servery, sítě, databáze)

**Tři aspekty** (procházejí všemi vrstvami): Pasivní struktura, Aktivní struktura, Chování

**Použití:** Velké organizace, transformační projekty (AS-IS → TO-BE), strategické plánování IT, governance, integrace po fúzích.

### BPMN – Modelování obchodních procesů

BPMN (Business Process Model and Notation) = mezinárodní standard pro modelování obchodních procesů.

**Základní elementy:**
- **Events** (kruhy) – start, průběh, konec
- **Activities** (zaoblené obdélníky) – úkoly
- **Gateways** (kosočtverce) – větvení a spojování (XOR, AND, OR)
- **Sequence Flow** – pořadí aktivit
- **Swimlanes/Pools** – organizace podle rolí/oddělení

**Použití:** Process improvement, dokumentace pro certifikace (ISO 9001), automatizace workflow, školení zaměstnanců.

---

## 5. Analýza požadavků

Až 70 % neúspěšných IT projektů selhává kvůli špatně definovaným požadavkům.

**Náklady na opravu chyby:**
| Fáze | Relativní náklad |
|------|-----------------|
| Analýza | 1× |
| Návrh | 5–10× |
| Implementace | 10–100× |
| Produkce | 100–1 000× |

### Metody sběru požadavků

- **Interview** – strukturované / nestrukturované / semi-strukturované; nejpřímější způsob
- **Dotazníky** – vhodné pro kvantitativní data od mnoha respondentů; nízká návratnost (20–30 %)
- **Pozorování (Shadowing)** – odhaluje skutečné pracovní postupy a skryté požadavky
- **Workshopy (JAD)** – skupinová sezení; rychlé dosažení konsenzu
- **Prototypování** – vizuální reprezentace; low-fidelity (papír) vs. high-fidelity (interaktivní)
- **User Stories** – „Jako [role] chci [funkcionalita] abych [důvod]"
- **Studium dokumentů** – existující systémy, legislativa, standardy

### Typy požadavků

**Funkční požadavky** – CO systém musí dělat:
- Uživatelské funkce, CRUD operace, business logika, integrace, reporty

**Nefunkční požadavky** – JAK DOBŘE to systém dělá:
- Výkonnost (odezva), spolehlivost (dostupnost 99,9 %), bezpečnost, použitelnost, škálovatelnost, kompatibilita

### Prioritizace – MoSCoW

| Kategorie | Popis |
|-----------|-------|
| **Must have** | Kritické; bez nich systém nefunguje |
| **Should have** | Důležité; výrazně zlepší systém |
| **Could have** | Žádoucí; implementace při dostatku zdrojů |
| **Won't have** | V této verzi se neimplementuje |

### Specifikace (SRS)
Software Requirements Specification – formální dokumentace požadavků; kontrakt mezi zadavatelem a vývojovým týmem.

---

## 6. Datové modelování

### Tři úrovně datového modelu

| Úroveň | Popis | Obsah |
|--------|-------|-------|
| **Konceptuální** | Nezávislý na technologii; komunikace se zákazníkem | Entity, vztahy, atributy, logické identifikátory |
| **Logický** | Přizpůsoben databázovému paradigmatu | + datové typy, PK, FK, řešení M:N vazbou přes asociační tabulku |
| **Fyzický** | Konkrétní implementace | + indexy, partitioning, vendor-specifické optimalizace |

### Relační datový model

**Terminologie:**
- Relace = tabulka; N-tice = řádek; Atribut = sloupec
- Primární klíč (PK) – unikátní, NOT NULL, neměnný, minimální
- Cizí klíč (FK) – odkaz na PK jiné tabulky; zajišťuje referenční integritu

### ACID vlastnosti transakcí

| Vlastnost | Popis |
|-----------|-------|
| **Atomicity** | Transakce je nedělitelná – buď celá, nebo vůbec |
| **Consistency** | DB je vždy v konzistentním stavu; splněna integritní omezení |
| **Isolation** | Souběžné transakce se neovlivňují |
| **Durability** | Potvrzené změny jsou permanentní i po pádu systému |

### SQL kategorie příkazů

| Kategorie | Příkazy | Účel |
|-----------|---------|------|
| **DDL** | CREATE, ALTER, DROP | Definice struktury |
| **DML** | SELECT, INSERT, UPDATE, DELETE | Manipulace s daty |
| **DCL** | GRANT, REVOKE | Přístupová práva |
| **TCL** | COMMIT, ROLLBACK, SAVEPOINT | Správa transakcí |

### Datová normalizace

**Cíle:** eliminace redundance, zajištění integrity, flexibilita, úspora místa.

**Problémy nenormalizovaných dat:**
- **Update anomálie** – změna musí proběhnout na více místech
- **Insert anomálie** – nelze vložit data bez jiných dat
- **Delete anomálie** – smazáním záznamu ztratíme i jiné informace

**Normální formy:**

| Forma | Podmínka |
|-------|----------|
| **1NF** | Atomické hodnoty; každý řádek unikátní; definovaný PK |
| **2NF** | 1NF + všechny neklíčové atributy závisí na celém PK (jen u složených klíčů) |
| **3NF** | 2NF + žádné tranzitivní závislosti mezi neklíčovými atributy |
| **BCNF** | 3NF + pro každou funkční závislost X→Y je X superklíčem |
| **4NF** | BCNF + žádné multivalued dependencies |
| **5NF** | 4NF + žádné join dependencies |

> V praxi se normalizuje obvykle do 3NF nebo BCNF. Systémy OLAP (analytické) se záměrně **denormalizují** pro rychlost dotazů.

### NoSQL databáze

Alternativa k relačním databázím pro specifické use cases:

| Typ | Příklady | Použití |
|-----|---------|---------|
| Dokumentové | MongoDB | Flexibilní schéma, JSON dokumenty |
| Klíč-hodnota | Redis | Cache, sessions |
| Sloupcové | Cassandra | Big data, časové řady |
| Grafové | Neo4j | Sociální sítě, doporučovací systémy |

---

## 7. Pořízení IS a IT governance

### IT strategie
IT strategie zajišťuje soulad technologických investic s obchodními cíli. Obsahuje: vizi a cíle IT, architektonické standardy, rozpočet, roadmap projektů.

**Tvorba:** Analýza současného stavu (AS-IS) → Definice cílového stavu (TO-BE) → Gap analýza → Plán transformace.

### IT Governance – COBIT

**COBIT (Control Objectives for Information and Related Technologies)** = framework pro správu a řízení IT.

Klíčové oblasti: Plánování, Realizace, Provoz, Monitoring. Měření pomocí **KPI** (Key Performance Indicators).

### Zadávací dokumentace

V ČR se řídí zákonem o zadávání veřejných zakázek (134/2016 Sb.) u veřejných subjektů.

**Struktura:**
- Technická specifikace (viz fáze Návrh)
- Obchodní podmínky, SLA, harmonogram
- Kritéria hodnocení (cena, kvalita, reference)

### Smlouva o dílo na IS

**Klíčové části:**
- Předmět plnění a specifikace
- Cena a platební podmínky (fixed price / T&M)
- Harmonogram a milníky
- **Akceptace** – akceptační kritéria a postup přebírání
- **Záruky** a odpovědnost za vady
- **Změnové řízení** – jak se řeší změny požadavků
- Duševní vlastnictví, mlčenlivost

### SLA (Service Level Agreement)

SLA definuje úroveň poskytovaných IT služeb.

**Klíčové metriky:**
- **Dostupnost (Availability)** – 99,9 % = max. 8,76 hod/rok výpadku
- **RTO (Recovery Time Objective)** – max. čas obnovy po výpadku
- **RPO (Recovery Point Objective)** – max. ztráta dat
- **MTTR (Mean Time to Repair)** – průměrná doba opravy

**Sankce** – penalizace za nedodržení SLA; **bonusy** za překročení.

**Help Desk úrovně:** L1 (první linie), L2 (technická podpora), L3 (vývojáři/specialisté).

### Maintenance modely

| Model | Popis |
|-------|-------|
| **Fixed Price** | Pevná cena za definovaný rozsah; jistota pro obě strany |
| **Time & Materials (T&M)** | Platba za skutečně odpracovaný čas; flexibilní, ale nejistá cena |
| **Hybridní** | Kombinace obou přístupů |

### Vendor Lock-in a GDPR

**Vendor Lock-in** = silná závislost na konkrétním dodavateli. Exit strategie: dokumentace, standardní formáty, SLA pro ukončení.

**GDPR** – nařízení EU o ochraně osobních údajů. Klíčové role: správce dat, zpracovatel. Požadavky: souhlas, právo na zapomenutí, DPO, hlášení incidentů.

---

## 8. Architektura IS

### Architektonické vzory

| Vzor | Popis | Výhody/Nevýhody |
|------|-------|----------------|
| **Monolitická** | Celá aplikace jako jeden celek | Jednoduché, ale těžko škálovatelné |
| **Vrstvená (N-tier)** | Prezentační / Business logika / Datová vrstva | Přehledné, snadná výměna vrstev |
| **Mikroservisní** | Malé nezávislé služby komunikující přes síť | Škálovatelnost, ale složitá orchestrace |
| **MVC** | Model / View / Controller | Separace zájmů; standard pro webové frameworky |
| **Event-driven** | Komunikace pomocí událostí (events) | Volná vazba komponent |
| **SOA** | Business funkce jako znovupoužitelné služby | Integrace podnikových systémů |
| **Serverless** | Kód běží na vyžádání bez správy serverů | Platba za využití, automatické škálování |

### Návrhové principy

**SOLID:**
- **S** – Single Responsibility: každá třída má jednu zodpovědnost
- **O** – Open/Closed: otevřené pro rozšíření, uzavřené pro modifikaci
- **L** – Liskov Substitution: potomek lze nahradit rodičem
- **I** – Interface Segregation: raději více malých rozhraní
- **D** – Dependency Inversion: záviset na abstrakcích, ne konkrétních třídách

**Další principy:**
- **DRY (Don't Repeat Yourself)** – každá informace na jednom místě
- **KISS (Keep It Simple and Stupid)** – nejjednodušší řešení je nejlepší
- **YAGNI (You Aren't Gonna Need It)** – neimplementuj „pro jistotu"
- **Separation of Concerns** – oddělovat různé aspekty

---

## 9. Kvalita a testování

### Dimenze kvality software

- **Funkčnost a spolehlivost** – dělá to, co má; konzistentně
- **Použitelnost** – intuitivní; srozumitelné chybové hlášky
- **Výkonnost a škálovatelnost** – odezva pod 3 s; zvládne růst
- **Bezpečnost** – ochrana dat a reputace
- **Udržovatelnost** – snadné úpravy; dobrá dokumentace

### Typy testů

| Typ | Co testuje |
|-----|-----------|
| **Unit testy** | Jednotlivé funkce/metody izolovaně |
| **Integrační testy** | Spolupráce komponent |
| **Systémové testy** | Celá aplikace dle specifikace |
| **Akceptační testy** | Splnění zákazníkových požadavků |
| **Výkonnostní testy** | Zátěž, rychlost odezvy |
| **Regresní testy** | Nová změna nic nerozbila |
| **Bezpečnostní testy** | SAST, DAST, pen-testing |

### TDD a CI/CD

**TDD (Test-Driven Development):** Nejprve napíšeš test, pak kód, který test splní. → Lepší design, vyšší kvalita.

**CI/CD (Continuous Integration / Continuous Deployment):** Každá změna kódu automaticky prochází sestavením, testováním a nasazením. Výsledek: nasazování několikrát denně.

### Technický dluh

Technický dluh = důsledky rychlých řešení pod tlakem. Nutno pravidelně „splácet" refaktorizací. Sleduje se pomocí metrik: code coverage, cyclomatic complexity, code duplication.

---

## 10. Bezpečnost IS

### CIA triáda

| Pilíř | Popis | Nástroje |
|-------|-------|---------|
| **Confidentiality (Důvěrnost)** | Pouze oprávnění vidí data | Šifrování, přístupová práva, autentizace |
| **Integrity (Integrita)** | Data nebyla neoprávněně změněna | Kontrolní součty, digitální podpisy, audit logy |
| **Availability (Dostupnost)** | Systém funguje, když je potřeba | Redundance, zálohy, DDoS ochrana |

### Časté bezpečnostní hrozby

- **Malware** – viry, trojské koně, ransomware, spyware
- **Phishing** – sociální inženýrství; spear phishing (cílený), whaling (manažeři), vishing (telefon), smishing (SMS)
- **SQL Injection** – vložení SQL příkazu do formuláře; obejde přihlášení, vymaže data
- **XSS (Cross-Site Scripting)** – vložení škodlivého scriptu do webové stránky
- **DDoS** – zahlcení serveru požadavky

### Bezpečnostní principy

- **Zero-trust model** – „nevěř nikomu, ověř všechno"
- **Defense in depth** – více vrstev ochrany
- **Principle of least privilege** – minimální potřebná práva
- **Security by design** – bezpečnost od začátku, ne jako afterthought

---

## 11. Cloud a nasazení

### Cloud vs. On-premise

| Kritérium | Cloud | On-premise |
|-----------|-------|-----------|
| Náklady | OPEX (provozní) | CAPEX (kapitálové) |
| Škálovatelnost | Okamžitá, elastická | Omezená hardwarem |
| Správa | Sdílená s poskytovatelem | Plně vlastní |
| Bezpečnost | Certifikovaná, sdílená odpovědnost | Plná kontrola |

### Modely cloud služeb

- **IaaS (Infrastructure as a Service)** – virtuální servery, storage, síť (AWS EC2)
- **PaaS (Platform as a Service)** – platforma pro vývoj; bez správy OS (Heroku, Azure App Service)
- **SaaS (Software as a Service)** – hotová aplikace přes prohlížeč (Gmail, Salesforce)

### Deployment modely

- **Public cloud** – sdílená infrastruktura (AWS, Azure, GCP)
- **Private cloud** – dedikovaná infrastruktura pro jednu organizaci
- **Hybrid cloud** – kombinace; citlivá data on-premise, ostatní v cloudu

### Kontejnerizace

**Docker** – balíčkuje aplikaci i závislosti do kontejneru; „funguje na mém počítači → funguje všude".

**Kubernetes** – orchestrace kontejnerů; automatické škálování, restartování padlých kontejnerů, load balancing.

**Výhody kontejnerizace:** konzistentní prostředí, rychlé nasazení, snadné škálování, izolace aplikací.

---

## 12. API a integrace systémů

**API (Application Programming Interface)** = rozhraní pro komunikaci mezi systémy.

- **REST API** – bezstavové, HTTP metody (GET/POST/PUT/DELETE), JSON/XML; nejrozšířenější
- **GraphQL** – klient specifikuje přesně, jaká data potřebuje; efektivní pro složité dotazy
- **WebSocket** – obousměrná komunikace v reálném čase

**Verzování API:** `v1/`, `v2/` – zpětná kompatibilita pro existující klienty.

---

## 13. Verzování kódu – Git

**Git** = distribuovaný systém správy verzí.

**Klíčové koncepty:**
- **Commit** – snímek změn s popiskem
- **Branch** – větev pro vývoj nové funkce
- **Merge** – sloučení větví
- **Pull Request / Merge Request** – žádost o code review a začlenění

**Git Flow:** main → develop → feature/xxx; hotfix větve pro urgentní opravy.

**Výhody:** historický přehled změn, paralelní vývoj, rollback, code review workflow.
