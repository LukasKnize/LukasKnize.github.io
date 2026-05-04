# Okruh 13 – Softwarové nástroje pro řízení projektů: MS Excel a MS Project

## Softwarové nástroje v projektovém řízení

Projektové řízení bez softwarové podpory je při větším počtu aktivit prakticky nezvládnutelné. Nástroje pomáhají s:
- Tvorbou a vizualizací harmonogramu.
- Sledováním průběhu a odchylek.
- Správou zdrojů a nákladů.
- Sdílením informací v týmu.

---

## MS Excel jako nástroj projektového řízení

MS Excel není primárně projektový nástroj, ale díky svojí flexibilitě a rozšíření je hojně používán, zejména u menších projektů nebo jako doplněk specializovaných nástrojů.

### Ganttův diagram v Excelu

Ganttův diagram lze v Excelu vytvořit ručně pomocí **pruhového grafu (Bar Chart / Gantt hack)**:
1. Tabulka aktivit: název, datum zahájení, délka trvání.
2. Pruhový graf s dvěma datovými řadami: „skrytý" pruh od počátku osy do zahájení aktivity (průhledný), a viditelný pruh délky trvání.
3. Podmíněné formátování může zjednodušit tvorbu vizuálního harmonogramu přímo v buňkách (buňka = den, barva = aktivita).

### Síťová analýza v Excelu

Excel lze použít pro výpočet CPM:
- Tabulka aktivit s dobami trvání, předchůdci.
- Vzorce pro výpočet ES, EF, LS, LF, TF.
- Funkce `MAX`, `MIN`, podmíněné výpočty.
- Limitace: Závislosti musí být ručně zakódovány; pro velké projekty nepraktické.

### Monte Carlo simulace v Excelu

Excel podporuje MCS pomocí:
- **Funkce `RAND()` a `NORM.INV()`**: Generování náhodných čísel z normálního rozdělení.
- **Datové tabulky (Data Tables)**: Opakované výpočty modelu s různými náhodně vygenerovanými vstupy.
- **Doplněk @RISK nebo SimulTools**: Profesionální MCS v prostředí Excelu.

### Sledování projektu v Excelu

- **Pivot tabulky**: Analýza nákladů podle fáze, zdroje, typu.
- **Podmíněné formátování**: Vizualizace stavu (zelená/žlutá/červená).
- **EVM výpočty**: PV, EV, AC, SV, CV, SPI, CPI ze zadaných dat.
- **Dashboardy**: Přehledná zobrazení pro management.

### Výhody a omezení Excelu

**Výhody**: Všudypřítomný, flexibilní, nízká cena, snadné přizpůsobení, export do dalších nástrojů.

**Omezení**: Chybí nativní podpora závislostí aktivit, automatické přeplánování, správa zdrojů, sdílená práce více uživatelů (částečně řeší SharePoint/Teams). Při desítkách aktivit se správa stává chaotickou a náchylnou k chybám v odkazech.

---

## MS Project

**MS Project** (Microsoft) je specializovaný software pro projektové řízení, standard v mnoha organizacích. Podporuje celý životní cyklus projektu.

### Základní pohled: Ganttův diagram s tabulkou

Hlavní obrazovka kombinuje:
- **Levá část (tabulka)**: Seznam aktivit, doby trvání, předchůdci, přiřazené zdroje, náklady.
- **Pravá část (Ganttův diagram)**: Vizualizace harmonogramu, kritická cesta (červeně), závislosti (šipky).

### Definice struktury projektu v MS Project

**WBS (Work Breakdown Structure)**: Aktivity se organizují do hierarchie pomocí odsazení (outline). Nadřazená aktivita = souhrn (summary task), automaticky počítá dobu a náklady z podúkolů.

**Závislosti (Links)**: MS Project podporuje všechny typy MPM závislostí:
- **FS** (Finish-to-Start) – výchozí.
- **SS** (Start-to-Start).
- **FF** (Finish-to-Finish).
- **SF** (Start-to-Finish).
- Lze přidat lag (kladné zpoždění) nebo lead (záporný lag).

**Milníky**: Aktivity s nulovou dobou trvání – klíčové body (schválení, dodávka, spuštění).

### Správa zdrojů (Resource Management)

**Typy zdrojů**:
- **Pracovní zdroje** (Work): Lidé, stroje – přiřazují se aktivitám, mají kapacitu (hodin/týden).
- **Materiálové zdroje** (Material): Spotřebovatelné materiály.
- **Nákladové zdroje** (Cost): Fixní náklady (letenka, licence).

**Resource Leveling (vyrovnání zdrojů)**: Automatická detekce a řešení konfliktů zdrojů (overallocation) – MS Project přesune aktivity v rámci jejich rezerv, aby zdroj nebyl přetížen. Může prodloužit projekt.

**Histogram zdrojů**: Vizualizace vytížení zdroje v čase – přetížení zobrazeno červeně.

### Výpočet a sledování kritické cesty

MS Project automaticky počítá ES, EF, LS, LF pro všechny aktivity na základě závislostí a dob trvání. Kritická cesta je zobrazena barevně. Po zadání skutečných hodnot (`Actual Start`, `Actual Duration`, `% Complete`) se plán automaticky přepočítá.

### Baseline (výchozí plán)

**Uložení baseline**: Zachytíme stav plánu v momentě schválení. Baseline = původní plán (PV pro EVM).

**Sledování odchylek**: MS Project porovnává aktuální plán s baseline:
- `Start Variance` = Actual Start − Baseline Start.
- `Cost Variance` = Baseline Cost − Current Cost.
- EVM veličiny (PV, EV, AC, SV, CV, SPI, CPI) lze zobrazit ve specializovaných pohledech.

### Pohledy (Views) v MS Project

MS Project nabízí různé pohledy na stejná data:

| Pohled | Účel |
|--------|------|
| **Gantt Chart** | Harmonogram, závislosti |
| **Network Diagram** | Síťový diagram (AON), kritická cesta |
| **Resource Sheet** | Seznam zdrojů, kapacity, náklady |
| **Resource Usage** | Vytížení zdrojů v čase |
| **Task Usage** | Přiřazení zdrojů k aktivitám |
| **Calendar** | Pracovní kalendář projektu |
| **Tracking Gantt** | Porovnání baseline vs. aktuální stav |

### MS Project Online / Project for the Web

Cloudová verze umožňuje sdílení projektu v týmu, přiřazování úkolů, aktualizace průběhu přes webový prohlížeč nebo Teams. Integrace s Power BI pro pokročilé reporty.

---

## Srovnání nástrojů

| Kritérium | MS Excel | MS Project |
|-----------|---------|-----------|
| **Cena** | Součást MS 365 | Dražší licence |
| **Závislosti aktivit** | Manuálně | Automaticky, všechny typy |
| **Přeplánování** | Ruční | Automatické |
| **Správa zdrojů** | Omezená | Plnohodnotná |
| **Kritická cesta** | Výpočet vzorci | Automaticky, vizuálně |
| **EVM** | Vzorce | Vestavěné |
| **Flexibilita** | Velmi vysoká | Nižší |
| **Vhodné pro** | Malé projekty, analýzy, dashboardy | Střední a velké projekty |

---

## Další projektové nástroje (přehled)

- **Jira**: Agilní projekty, sledování úkolů (issues), integrace s vývojářskými nástroji.
- **Trello / Asana / Monday.com**: Kanban boardy, lehčí nástroje pro menší týmy.
- **Oracle Primavera**: Velké stavební a inženýrské projekty (tisíce aktivit, portfolia).
- **Smartsheet**: Excel-like rozhraní s projektovými funkcemi, cloudový.
- **Power BI**: Reporting a dashboardy nad daty z projektových nástrojů.
