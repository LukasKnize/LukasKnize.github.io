## Projektové řízení – definice

- **Plánování, organizování a řízení úkolů a jejich zdrojů** v rámci uceleného projektu za respektování časových, zdrojových a nákladových omezení (obvykle s cílem maximálního ekonomického efektu).
- Dva úhly pohledu:
  - **Personalistika / Teorie organizace** – důraz na lidské zdroje (motivace, odpovědnost), zaměření na realizaci projektu.
  - **Operační výzkum / Systémová analýza** – exaktní přístupy (analýza rezerv, optimalizace zdrojů, minimalizace nákladů), zaměření na projektovou osnovu.

## Projekt – definice a charakteristiky

- **Řízený proces** aplikace úkolů a zdrojů s definovaným cílem v určeném časovém rámci.
- **Souhrn vzájemně provázaných činností** k dosažení stanoveného cíle.
- Projekt je vždy charakterizován:
  - Jasně definovaným začátkem a koncem
  - Jasně definovaným cílem
  - Disponibilními zdroji
  - Omezenými náklady a časem
  - Požadovanou kvalitou
  - Systémovostí, jedinečností
  - Nejistotou s rizikem

## Komponenty projektu

### Zdroj (Resource)

- Faktor zabezpečující činnost – žádná činnost neprobíhá beze zdrojů.
- **Obnovitelné zdroje** (pracovní) – např. zedník, řidič, traktor.
- **Neobnovitelné zdroje** (materiálové) – např. písek, PHM.
- Finance z pohledu projektového řízení **nejsou zdrojem**.

### Úkol / Činnost (Task)

- Základní stavební kámen projektu, má desítky parametrů.
- Např. kopání základů, pracovní směna.

### Náklad (Cost)

- Na zdroj (sazby, náklad na použití).
- Pevný náklad na úkol.

## Uplatnění projektového řízení

- **ANO:** Jedinečné projekty s jasným počátkem a koncem (stavebnictví, marketing); typové projekty (sériová výroba, normování).
- **NE:** Kontinuální procesy; procesy vyžadující velký podíl operativního řízení (služby, zásobování).

## Proces řízení projektu

### Z hlediska manažerských činností

1. Definování projektových cílů
2. Plánování (trojimperativ: **CO – KDY – ZA KOLIK**)
3. Vedení (lidských zdrojů)
4. Sledování průběhu (monitoring)
5. Ukončení

### Z hlediska fází projektu

1. Zadávací
2. Plánovací
3. Schvalovací
4. Realizační a provozní

### Z hlediska úrovní projektu

- **Směrný plán** (Baseline)
- **Aktuální plán** (Current)
- **Skutečnost** (Actual)

## Z historie projektového řízení

- **Henry L. Gantt** (1861–1919) – zakladatel, Ganttův diagram.
- **50. léta** – rozvoj metod síťové analýzy: CPM (1957, DuPont), PERT (1958, program Polaris), MPM (1958, Bernard Roy).
- **60. léta** – GERT (stochastická struktura).
- **80. léta** – rozvoj uzlových grafů.
- **90. léta** – měkké přístupy, teorie omezení – metoda Critical Chain (Goldratt, 1996).

## Typy úkolů

- **Obyčejný úkol** – např. úklid.
- **Milník (Milestone)** – důležitá činnost, často fiktivní (nulová délka).
- **Souhrnný úkol (Summary Task)** – obsahuje dílčí podčinnosti.
- **Periodicky opakovaný úkol (Recurring Task)** – např. kontrolní den.
- **Subprojekt** – samostatný síťový subprojekt s jiným správcem.
- **Externí úkol (External Task)**.

## Základní parametry úkolů

### Identifikace

- Název, číslo (ID), hierarchické postavení (WBS kód), úroveň osnovy.

### Typy omezení (Constraint Type)

- **Neukotvené:** ASAP (co nejdříve), ALAP (co nejpozději).
- **Částečně ukotvené zleva:** SNET, FNET.
- **Částečně ukotvené zprava:** SNLT, FNLT.
- **Pevně ukotvené:** MSO, MFO.

### Časové parametry

- Doba trvání (Duration), Uplynulá doba trvání
- Nejdříve možné zahájení (ES), Zahájení (Start), Nejpozději možné zahájení (LS)
- Nejdříve možné dokončení (EF), Dokončení (Finish), Nejpozději možné dokončení (LF)
- **Celková časová rezerva (Total Slack)** – ST
- **Volná časová rezerva (Free Slack)** – SF
- Platí: ST ≥ SF; úkoly kde ST = 0 jsou **kritické**.
- Pevně ukotvené činnosti jsou vždy kritické (ES = LS, ST = 0).

### Nákladové parametry

- **Pevné (přímé) náklady** na činnost (Fixed Cost) – nezávisí na zdrojích.
- Metoda nabíhání: na začátku / průběžně / na konci.
- **Variabilní náklady** (Cost of Work) – souvisí s náklady na zdroje.

## Parametry přiřazení zdrojů

### Základní vzorec

**Doba trvání = max(Práce / Jednotky)** pro všechny přiřazené zdroje.

### Řízení úsilím (Effort-Driven)

- Celková práce zůstává konstantní při přidání/ubrání zdroje.
- Práce se proporcionálně rozpočte mezi zbývající zdroje.

### Typy výpočtu doby trvání

- **Pevné jednotky** – neměnná intenzita čerpání; změna práce mění dobu trvání. Vhodné pro manuální/normované práce.
- **Pevná doba trvání** – neměnná doba trvání; změna práce mění jednotky. Vhodné pro činnosti nezávislé na počtu lidí.
- **Pevná práce** – neměnná práce; změna jednotek mění dobu. Řízení úsilím je vždy zapnuto.

## Parametry vazeb

### Typy vazeb

- **FS (Finish to Start)** – nejběžnější
- **SS (Start to Start)**
- **FF (Finish to Finish)**
- **SF (Start to Finish)**

### Prodlevy a překryvy

- **Absolutní prodleva** – např. SS+10d
- **Absolutní překryv** – např. FS-10d
- **Relativní prodleva** – např. SS+25%
- **Relativní překryv** – např. FF-10%

## Základní pojmy teorie grafů

### Graf
- **G = (U, E)** – množina vrcholů U a množina hran E (neuspořádané dvojice prvků z U).
- **Podgraf** H = (U', E') kde U' ⊆ U, E' ⊆ E.
- **Úplný podgraf** – podgraf se všemi vrcholy (U' = U).
- **Incidentní (sousední) vrcholy** – vrcholy spojené hranou.
- **Stupeň vrcholu** deg(Uᵢ) – počet incidujících hran.

### Typy grafů
- **Konečný / Nekonečný** – dle konečnosti množin U, E.
- **Orientovaný** – hrany mají přiřazený směr.
- **Hranově ohodnocený** – každé hraně přiřazeno číslo.
- **Uzlově ohodnocený** – každému uzlu přiřazeno číslo.

### Cesty a sledy (obecné grafy)
- **Sled** – posloupnost uzlů, kde mezi sousedními existuje hrana.
- **Uzavřený sled** – první a poslední uzel jsou totožné.
- **Řetěz (Cesta)** – sled, kde se každý vrchol vyskytuje právě jednou.
- **Kružnice** – uzavřený řetěz.
- **Hamiltonovská kružnice** – kružnice procházející všemi vrcholy.
- **Rovinný graf** – lze nakreslit bez křížení hran.
- **Souvislý graf** – mezi každými dvěma vrcholy existuje sled.

### Orientované grafy
- **Koncentrický uzel** – více hran v něm končí než začíná.
- **Excentrický uzel** – více hran v něm začíná než končí.
- **Cesta (orientovaná)** – sled bez opakování vrcholů.
- **Hamiltonovská cesta** – prochází všemi vrcholy.
- **Cyklus** – uzavřený orientovaný sled.

## Typy grafů

### Graf typu STROM
- Souvislý graf neobsahující kružnici.
- Mezi každými dvěma vrcholy právě jeden řetěz.
- n vrcholů → n-1 hran.
- V každém souvislém grafu existuje podgraf typu strom (**kostra grafu**).
- V hranově ohodnoceném grafu existuje **minimální kostra**.

### Graf typu SÍŤ
- Konečný, souvislý, orientovaný, acyklický.
- S jedním počátkem a jedním koncem.

## Síťový model projektu

### Hranově definované grafy (AOA – Activity on Arc)
- Činnosti = hrany (ohodnocené), vazby = uzly (neohodnocené).
- **Výhody:** Teoretická rozpracovanost, snadná aplikace CPM, snazší výpočet rezerv.
- **Nevýhody:** Horší přehlednost, obtížné modelování jiných vazeb než FS.

### Uzlově definované grafy (AON – Activity on Node)
- Činnosti = uzly (ohodnocené), vazby = hrany.
- **Výhody:** Přehlednost, možnost modelování různých typů vazeb.
- **Nevýhody:** Obtížnější výpočet některých parametrů, menší všeobecná znalost.
- V současnosti se prosazují AON na úkor AOA.

## Lineární (Ganttův) diagram

- Hlavní formalizační nástroj soudobého projektového řízení.
- Výhody Ganttova diagramu = nevýhody síťového diagramu a naopak.
- Síťový diagram: dobrý přehled o návaznostech a kritické cestě, ale nelze zobrazit časovou osu.
- Ganttův diagram: dobrý přehled o časových termínech, ale horší zobrazení návazností.

## Incidenční matice sítě

- Incidenční matice orientovaného grafu.
- Matice precedence – pro vyjádření vazeb předcházení.
- Matice druhých, třetích incidencí.

## WBS diagramy

- Work Breakdown Structure – hierarchický rozklad projektu na činnosti.

## Formalizace problému do síťového grafu AOA

- Postup: sestavení tabulky předchůdců → konstrukce sítě → doplnění fiktivních úkolů → zajištění podmínek sítě.

## Číslování uzlů

- **Řád uzlu** – maximální počet hran spojujících uzel s počátečním.
- **Metoda přeškrtávání hran:**
  1. Počáteční uzel = 0. řád (nemá vstupní hrany).
  2. Vyloučí se jeho výstupní hrany → uzly bez vstupních hran = 1. řád.
  3. Postup se opakuje pro další řády.
  4. V rámci téhož řádu je číslování libovolné.

## Kritická cesta

- **Nejdelší cesta v grafu** = nejdelší posloupnost činností (tzv. kritických činností).
- Její délka určuje **nejkratší možnou dobu trvání projektu**.
- Nutná a postačující podmínka pro kritičnost činnosti:
  - Činnosti ASAP: nulová celková rezerva (v závislosti na předchůdcích/následnících).
  - Činnosti SNET, SNLT, FNET, FNLT: současně splněna podmínka ukotvení + nulová celková rezerva.
  - Činnosti MSO, MFO, ALAP: **vždy kritické**.

## CPM (Critical Path Method)

- Graf AOA, deterministická struktura, deterministické trvání úkolů.

### Výpočty termínů uzlů
- **Výpočet vpřed** – nejdříve možné termíny (ES, EF).
- **Výpočet vzad** – nejpozději přípustné termíny (LS, LF).
- Kritická cesta prochází vrcholy s **nulovou interferenční rezervou**.

### Výpočty rezerv
- **Celková rezerva (Total Slack)** – o kolik lze zpozdit činnost bez narušení termínu projektu.
- **Volná rezerva (Free Slack)** – o kolik lze zpozdit činnost bez narušení nejdříve možného začátku následující činnosti.

## PERT (Program Evaluation and Review Technique)

- Odvozena 1958 pro americký válečný program Polaris.
- **Stochastická modifikace CPM** – doba trvání činností je náhodnou veličinou.
- Dodnes jedna z nejužívanějších metod v praxi.

### Doba trvání činnosti
- Náhodná veličina s **Beta rozdělením pravděpodobnosti**.
- Definována třemi odhady:
  - **a** – optimistický odhad
  - **m** – nejpravděpodobnější odhad (modus)
  - **b** – pesimistický odhad

### Vzorce
- **Střední hodnota:** t = (a + 4m + b) / 6
- **Rozptyl:** σ² = ((b − a) / 6)²

### Postup výpočtu PERT (3 kroky)

1. **Výpočet středních hodnot a rozptylů** pro jednotlivé činnosti.
2. **Výpočet termínů** nejdříve možných a nejpozději přípustných pro všechny uzly; stanovení **očekávané kritické cesty**.
3. **Pravděpodobnostní analýza** – posouzení pravděpodobností:
   - Vzniku časové rezervy uzlů
   - Konkrétní kritické cesty
   - Dodržení plánovaného termínu dokončení

### Pravděpodobnostní analýza

- Vychází z **centrálního limitního teorému** – časové termíny uzlů se blíží normálnímu rozdělení.
- Normalizace: **z = (Ts − T₀) / σ**
- Pravděpodobnost P(Tn ≤ Ts) = F(z), kde F je distribuční funkce normálního rozdělení.

### Příklad interpretace
- v 68 % případů projekt skončí v intervalu ±1σ od střední hodnoty
- v 95 % případů v intervalu ±2σ
- v 99 % případů v intervalu ±3σ

### Výhoda PERT oproti CPM
- Časové termíny uzlů mohou mít při stejné střední hodnotě **rozdílnou variabilitu** (rozdílný rozptyl), což umožňuje lépe posoudit pravděpodobnost dodržení termínů.

## Metoda GERT

- Odvozena začátkem 60. let, několikrát modifikována.
- **Stochastická modifikace CPM** – realizace činností a uzlů je dána pravděpodobností p(a).
- V praxi se užívá zřídka, především pro analýzu reálné realizace projektu.

### Typy uzlů v zobecněném síťovém grafu
- **Disjunktivně deterministický** – realizuje se právě jedna vstupní/výstupní hrana.
- **Inkluzívně deterministický** – realizuje se alespoň jedna hrana.
- **Konjunktivně deterministický** – realizují se všechny hrany (CPM, PERT).
- **Disjunktivně stochastický** – stochastická varianta disjunktivního uzlu.
- **Inkluzívně stochastický** – stochastická varianta inkluzívního uzlu.
- **Konjunktivně stochastický** – stochastická varianta konjunktivního uzlu.

### Pravděpodobnostní výpočet výskytu uzlů
- Pro konjunktivní uzel: součin pravděpodobností všech vstupních hran.
- Pro inkluzívní uzel: 1 − součin komplementů.
- Pro disjunktivní uzel: součet pravděpodobností (vzájemně se vylučující).

### Výpočet kritické cesty
- Postup je stejný jako u CPM, rozdíl je ve výpočtu disjunktivních/inkluzívních uzlů.
- Provádí se pravděpodobnostní analýza výskytu uzlů (zejména koncového).

---

## Základní principy AON metod

### Výhody AON zobrazení
- Přirozenější pohled na modelování reality.
- Možnost modelování různých vazeb (FS, SS, FF, SF).
- Jednodušší modelace stochastických struktur.
- Snazší doplnění fiktivních činností.
- Možnost modelování souhrnných činností.

### Nevýhody AON zobrazení
- Obtížné propojení s grafovými algoritmy.
- Některé algoritmy odvozeny „na tvrdo" z AOA.
- Obtížnější modelování milníků.

### Vazby v AON
- **Definice typem:** FS, FF, SS, SF – obsahují podmínku „nejdříve".
- U každé vazby lze přidat absolutní/relativní prodlevu nebo přesah.
- **Definice potenciálem:**
  - 1. potenciál (kladný) – minimální vzdálenost počátků.
  - 2. potenciál (záporný) – maximální vzdálenost počátků.

### Vliv vazeb na rezervy
- U vazeb FS → jednotná rezerva.
- U ostatních vazeb → rezerva zahájení vs. rezerva dokončení.

---

## MPM – Metra Potential Method

- Základní metoda pro **deterministické grafy AON**.
- Odvozena 1958, Bernard Roy.
- Vazby dány dvojicí potenciálů (aᵢⱼ, bᵢⱼ) v intervalové formě.

### Značení
- tᵢ – doba trvání činnosti i
- ⁰T⁰ᵢ – nejdříve možné zahájení (ES)
- ⁰T¹ᵢ – nejpozději přípustné zahájení (LS)
- ¹T⁰ᵢ – nejdříve možné dokončení (EF)
- ¹T¹ᵢ – nejpozději přípustné dokončení (LF)

### Postup výpočtu

#### Výpočet vpřed
1. Stanovení počátku projektu, výpočet termínů nejdříve možných počátků s kladnými potenciály.
2. **Korekce** termínů se zápornými potenciály (případný návrat ke kroku 1).
3. Výpočet termínů nejdříve možných dokončení a stanovení termínu ukončení projektu Tn.

#### Výpočet vzad
4. Výpočet termínů nejpozději přípustných počátků s kladnými potenciály.
5. **Korekce** se zápornými potenciály (případný návrat zpět).
6. Výpočet termínů nejpozději přípustných dokončení.

#### Výpočet rezerv
- **Celková rezerva** → stanovení kritických činností.
- **Volná rezerva**.

### Důležité vlastnosti MPM
- Výpočet neprobíhá přímo, ale za použití **zpětných korekcí**.
- Činnosti jsou stacionární, nestacionaritu lze snadno modelovat.
- **Problém nemusí být řešitelný** – absolutní hodnota součtu záporných potenciálů musí být větší než součet kladných potenciálů.

## Kritická cesta jako úloha matematického programování

### Členění úloh MP
- **Dle typu proměnných:** spojitá, IP (celočíselné), MIP (smíšené), 0-1 IP (bivalentní).
- Úlohy IP, MIP jsou obecně **NP obtížné** – neexistuje polynomiální algoritmus.
- Řešení: **exaktní** (Gomoryho algoritmus, Branch and Bound, metoda řezných nadrovin) a **heuristická**.

### Cesta v grafu jako soustava lineárních rovnic
- Bivalentní proměnná: hrana leží / neleží na hledané cestě.

### Kritická cesta v AOA
- Hrany ohodnoceny dobou trvání (konstantou).
- Řešení pomocí Branch and Bound, ve speciálních případech simplexovým algoritmem.
- **Rezervy:** celková rezerva odvozena od intervalu stability (analýza citlivosti).
- Analýza citlivosti umožňuje stanovit dolní mez doby trvání kritické činnosti.

### Kritická cesta v AON
- Uzly ohodnoceny dobou trvání, hrany ohodnoceny:
  - **Model A** – prodleva/překryv pro vazby FS
  - **Model B** – potenciálem
  - **Model C** – typem vazby

---

## Simulace stochastických projektů

### Simulace obecně
- **Numerická metoda** experimentování se speciálním matematickým modelem reálného systému na počítači.
- Zkoumaný proces se generuje na základě vlastností parametrů zobrazovaného systému.

### Komponenty simulačního modelu
- **Vstupní proměnné** – parametry modelu.
- **Stavové proměnné** – popisují stav systému.
- **Výstupní proměnné** – výsledky simulace.
- **Funkční vztahy** – mezi vstupy a výstupy.

### Prvky simulačního modelu

#### Deterministické prvky
- Přiřazení hodnoty proměnné, elementární operace.

#### Stochastický prvek
- Generátor (pseudo)náhodných čísel s daným rozdělením pravděpodobnosti.
- Požadavky: dobré statistické vlastnosti, efektivní procedura.

#### Příznak a Filtr
- Příznak – určuje budoucí děj, přiřadí hodnotu filtru.
- Filtr – slouží k větvení děje.

#### Dynamické prvky
- **Pevný časový krok** – fixní interval.
- **Proměnný časový krok** – dle událostí.
- **Kombinovaný** – kombinace obou přístupů.

### Výhody a nevýhody simulací
- **Výhody:** Není nutné experimentovat přímo se systémem; pomáhají, když analytické řešení je obtížné.
- **Nevýhody:** Model není obecně platný; nezjistíme závislost mezi vstupy a výstupy.

### Techniky tabulkové simulace
- Realizace modelů v řádcích/sloupcích/na listech (Excel).
- Využití integrovaných funkcí: NÁHČÍSLO(), NORMINV(), BETAINV(), NORMDIST() apod.

### Simulační model kritické cesty
- Doby trvání úkolů = náhodné veličiny s Beta (resp. normálním) rozdělením.
- AOA graf ohodnocen střední hodnotou a směrodatnou odchylkou.
- Opakovaná simulace → rozdělení doby trvání projektu.

## Typy zdrojů
- **Materiálové** (neobnovitelné) – spotřebovávají se.
- **Pracovní** (obnovitelné) – mohou být opakovaně využity.
- **Smíšené** – např. rychle opotřebitelné součástky.

## Parametry zdrojů

- **Mohutnost zdroje** Aₖ – maximální počet jednotek.
- **Náklady na zdroje:**
  - Založené na sazbách / na použití.
  - Časově a věcně rozlišené.
  - Metoda nabíhání: na začátku / průběžně / na konci.
- **Pracovní kalendář zdroje** – výjimky z projektového kalendáře.
- **Dostupnost zdroje** – změny oproti max. počtu jednotek v průběhu projektu.

## Parametry přiřazení zdrojů

- **Intenzita čerpání** rᵢₖ – počet jednotek k-tého zdroje přiřazených i-té činnosti (konstantní nebo funkce času).
- **Souhrnná intenzita čerpání:** rₖ(t) = Σ rᵢₖ pro všechny činnosti probíhající v čase t.
- **Disponibilita:** aₖ(t) = Aₖ − rₖ(t).

## Zdrojově přípustný projekt

- Podmínkou je nejprve **časová přípustnost** (CPM, MPM, PERT).
- Projekt je zdrojově přípustný, pokud: **rₖ(t) ≤ Aₖ** pro všechny časy t.
- Nesplnění podmínky = **zdrojový konflikt**.

## Řešení zdrojových konfliktů

### Algoritmické řešení
1. **Algoritmy matematického programování** – vázaný extrém funkce.
2. **Kombinatorické algoritmy** – NP úplný problém, velké množství variant.
3. **Heuristické metody** – zaměření na pravděpodobné varianty, posuzování důležitosti úkolů:
   - Kritické úkoly důležitější než nekritické.
   - Úkoly s vazbou FS důležitější než SS.
   - Delší úkoly významnější než kratší.
   - Úkoly blíže k počátku spíše ohrozí termíny.

### Základní metoda
- **Minimalizace zpožďování počátku** zdrojově nepřípustných úkolů.

### Doplňkové metody
- Změna přiřazení úkolu.
- Rozdělení zbývající práce.
- Vyrovnání v rámci časové rezervy (jen nekritické činnosti – nemá vliv na dokončení).

### Ruční řešení (7 způsobů)

1. **Navýšení mohutnosti zdrojů** – extenzivní, dočasné, nemění dobu trvání ani náklady.
2. **Přesčasová práce** – vliv na náklady, nemění dobu trvání ani práci.
3. **Změna intenzity čerpání** – snížení prodlužuje činnost; může ovlivnit dobu trvání, neovlivní náklady.
4. **Změna rozvrhu práce** – z rovnoměrného na jiné; pro kritický zdroj vliv na dobu trvání.
5. **Přerušení práce** – extrémní případ rozvržení; může ovlivnit dobu trvání.
6. **Posun počátku práce** – vzniká parametr zpoždění; pokud < celková rezerva, neovlivní projekt.
7. **Substituce** – nahrazení jednoho zdroje jiným; vliv na náklady a dobu trvání.

### Důležité pravidlo
- Žádná z alternativ nemá (by neměla mít) vliv na **práci**.
- Výjimkou jsou zdroje přiřazené souhrnným úkolům.
- **Zrušení úkolu není řešení!**

## Sledování průběhu projektu

- Třetí úroveň projektu (**Actual** – skutečnost).
- **Ukazatele:** Skutečná doba trvání, začátek, práce, náklady; zbývající hodnoty; % dokončení; skluz (Slippage).

### Principy sledování
- Sleduje se ke **stavovému datu** (Status Date).
- **Aktualizace:**
  - Podle plánu (Update as Scheduled).
  - Podle skutečnosti (lišící se od plánu) → buď lze plán dohnat, nebo je nutné **přeplánování**.

---

## Analýza vytvořené hodnoty (EVA – Earned Value Analysis)

- Porovnání předpokládaného průběhu úkolů s přiřazenými zdroji a se skutečným průběhem.

### Základní ukazatele

| Zkratka | Název | Popis |
|---------|-------|-------|
| **BCWS** (PV) | Budgeted Cost of Work Scheduled | Plánované náklady = BAC × plán. % dokončení |
| **BCWP** (EV) | Budgeted Cost of Work Performed | Vytvořená hodnota = BAC × skutečné % dokončení |
| **ACWP** (AC) | Actual Cost of Work Performed | Skutečné náklady na provedenou práci |
| **BAC** | Budget At Completion | Celkový rozpočet při dokončení |

### Odvozené ukazatele

- **Odchylka nákladů (CV):** CV = BCWP − ACWP
  - Rozdíl mezi odhadovanými a skutečnými náklady.
- **Odchylka plánování (SV):** SV = BCWP − BCWS
  - Rozdíl mezi aktuálním a plánovaným průběhem (v nákladech).

### Indexy EVA

- **CPI** (Cost Performance Index) = BCWP / ACWP – index čerpání nákladů.
- **SPI** (Schedule Performance Index) = BCWP / BCWS – index plnění plánu.
- SVP = (SV / BCWS) × 100
- CVP = (CV / BCWP) × 100

### S-křivka nákladů
- Grafické zobrazení kumulativních nákladů v čase (BCWS, BCWP, ACWP).

---

## Minimalizace nákladů na projekt (Cost CPM)

### Předpoklady
- Projekt zobrazen sítí AOA.
- Každá činnost má **intervalové rozpětí doby trvání** [dᵢⱼ, Dᵢⱼ].
- Náklady na činnost jsou **nepřímo úměrné** její době trvání.
- Náklady jsou rovněž intervalově dány.

### Lineární aproximace
- Nákladová křivka mezi body dᵢⱼ a Dᵢⱼ se aproximuje přímkou.

### Typy optimalizačních problémů

#### Optimální plán bez rezerv

**Model A** – délku kritické cesty nelze překročit:
- Nejlevnější plán vzhledem k nejkratší možné době trvání.
- Doby trvání kritických činností zůstávají nezměněny.
- Podkritické činnosti budou nejlevnější, jak mohou být (prodlouženy na maximum).

**Model B** – povoleno prodloužit projekt na délku T > TCP:
- Nejlevnější plán vzhledem ke stanovenému termínu T.
- Doby trvání kritických činností se mohou měnit.
- Hledáme nejlevnější ze všech plánů provedených do termínu T.

#### Optimální plán při existenci rezerv
- Doba trvání každé činnosti vymezena intervalem.
- Proměnnými jsou termíny uzlů Tⱼ i doby trvání činností tᵢⱼ.
- Základní model v oblasti minimalizace nákladů – řeší se jako úloha lineárního programování.
- Některé činnosti mohou mít rezervu, kterou nelze využít pro snížení nákladů.

## Teorie omezení (Theory of Constraints)

### Základní princip
- **„Najděme slabé místo a zlepšeme ho."**
- Hledá nejslabší článek z řetězu vzájemných událostí, který omezuje celý systém.

### Pět kroků teorie omezení
1. **Identifikace** kritického (nejužšího) místa.
2. **Maximální využití** kritického místa.
3. **Podřízení** všech nekritických míst tomuto místu.
4. **Odstranění omezení** – rozšíření kritického místa.
5. **Neustálé opakování** tohoto postupu.

### Instance teorie omezení
- **Drum-Buffer-Rope (DBR)** – harmonizace výrobního řetězce.
  - **Drum:** Plán výroby podle kritického místa (určuje rytmus).
  - **Buffer:** Časové a materiálové zásobníky před kritickým místem.
  - **Rope:** Plán pro nekritické zdroje (nesmí být přetěžovány).
- **Critical Chain (CC)** – konfrontace kritické cesty a alokace zdrojů.

---

## Metoda kritického řetězu (Critical Chain)

- Autorem je **E. M. Goldratt** (90. léta).
- Zobecnění kritické cesty – zahrnuje nejen logické a časové návaznosti, ale i **dostupnost zdrojů**.
- Pracuje s „očišťováním" dob trvání a přidáváním **bufferů**.

### Východiska – vliv lidského činitele

1. **Parkinsonův zákon:** „Práce přibývá úměrně s tím, kolik času na ni můžeme vynaložit."
   - Prodloužení činnosti vede k prodloužení cesty, ale zkrácení činnosti **nevede** ke zkrácení cesty.

2. **Rezervy v časových odhadech:** Lidé přidávají bezpečnostní rezervu – nikdo nezvolí odhad s 50% šancí neúspěchu.

3. **Studentský syndrom:** Časová rezerva je spotřebována dříve, než je potřeba – málokdo dokončí práci dříve, než je nutné.

4. **Multitasking:** Přebíhání zdrojů mezi činnostmi v multiprojektovém prostředí zpomaluje vše.

### Algoritmus metody CC

1. **Očištění od rezerv** – doby trvání zkráceny (Goldratt doporučuje na 50 %).
2. **Všechny činnosti ALAP** (co nejpozději).
3. **Vyrovnání zdrojů** – řešení zdrojových konfliktů (nové vazby).
4. **Identifikace kritického řetězu**.
5. **Vložení BUFFERŮ:**
   - **Project Buffer** – časový nárazník na konci kritického řetězu.
   - **Feeding Buffer** – časový nárazník podpůrných cest.
   - **Resource Buffer** – zdrojový nárazník (čas na přípravu/přesun zdroje).
6. **Sledování průniku do bufferů** v průběhu realizace.

### Příklad
- Původní kritická cesta: 14 dní (činnosti A, C, E, F).
- Po očištění na 50 % + buffery → kritický řetěz: **10,75 dne** (činnosti A, C, D, F).
- Kritický řetěz se může **výrazně lišit** od kritické cesty.

### Sledování průběhu – průnik do bufferů
- Zpoždění „ukrajuje" z bufferů.
- Dle velikosti průniku se provádí předběžná a obranná opatření.

---

## Agilní přístupy

### Základní myšlenka
- Rezignace na kompletní definici rozsahu projektu.
- Soustředění na **nosnou vizi** a iterativní přibližování se k ní.
- Krátké intervaly minimalizují riziko špatného směru.
- Neustálá neformální interakce se zákazníkem.

### Agilní manifest (2001) – 4 priority
1. **Lidé a spolupráce** před procesy a nástroji.
2. **Fungující software (produkt)** před obsáhlou dokumentací.
3. **Spolupráce se zákazníkem** před sjednáváním smluv.
4. **Reakce na změnu** před dodržováním plánu.

### 12 principů (vybrané)
- Nejvyšší prioritou je uspokojit zákazníka průběžnými dodávkami.
- Změnové požadavky jsou vítány i v průběhu vývoje.
- Dodávejte fungující software často (týdny až měsíce).
- Pracujte s motivovanými jedinci.
- Nejúčinnější sdílení informací = osobní setkání.
- Tým pravidelně vyhodnocuje a upravuje své postupy.

### Agile vs. Waterfall
- Waterfall: fáze oddělené sekvenčně (analýza → návrh → vývoj → testování → provoz).
- Agile: vhodné pro projekty s **vysokou neurčitostí a komplexitou**.

### Agilní metodiky
- **Scrum** – daily standups, Sprinty (1–4 týdny), role: Product Owner, Scrum Master, Scrum Team Member.
- **Extrémní programování (XP)**
- **FDD (Feature Driven Development)**
- **Lean Development**
- **TDD (Test Driven Development)**
- **Crystal metodiky**

## Životní cyklus projektu

### Typické fáze
1. Sběr projektových požadavků.
2. Příprava projektu.
3. Realizace projektu.
4. Užívání výsledků projektu.

### Procesy řízení projektu
- **Zahajovací** – na počátku projektu.
- **Plánovací** – definují a zpřesňují cíle, výběr nejlepších alternativ.
- **Prováděcí** – koordinují zdroje k provedení naplánovaných činností.
- **Sledovací** – zajišťují plnění cílů, provádějí nápravné akce.
- **Uzavírací** – formalizují přijetí výsledků, řádně ukončují práce.

### Zahájení projektu
- Iniciace, specifikace cílů a rozsahu.
- Sestavení **organizační struktury** (sponzoři, řídící rada, vedoucí, týmy).
- Sestavení **věcné struktury** (etapy, činnosti, odhady pracnosti, identifikace zdrojů).
- Sestavení **harmonogramu** (směrný plán), rozpočtu a cash flow.
- Specifikace procedur (kvalita, postup, komunikace, změny, krize).
- Analýza rizik, analýza výnosů a nákladů, kritéria úspěšnosti.

### Řízení projektu
- Řízení postupu etap, subdodavatelů, změn, kvality, krizí.

### Uzavření projektu
- Závěrečná kontrola produktů, ukončení, zjištění přínosů, zdokonalení postupu.

### Základní dokumentace
- **Před zahájením:** Studie příležitosti, proveditelnosti, investiční studie.
- **Při zahájení:** Identifikační listina projektu (ILP), revidovaná studie proveditelnosti, plán řízení projektu, směrný plán.
- **Po skončení:** Závěrečná zpráva.

---

## Logický rámec (Logical Framework)

- Mezinárodně uznávaný nástroj pro inicializaci projektu.
- Kvalita návrhu závisí na logických vazbách → základní parametry projektu.
- Návrh je nutné provádět **v týmu**.

### Sloupce logického rámce

#### 1. Sloupec popisu (strom cílů)
- **Cíl** – proč chceme dosáhnout změny.
- **Účel (změna)** – zaměření projektu, co a čeho chceme dosáhnout.
- **Konkrétní výstupy** – jak chceme změny dosáhnout.
- **Klíčové činnosti** – rozhodují o realizaci výstupů.

#### 2. Objektivně ověřitelné ukazatele
- Prokazují dosažení cílů, výstupů a činností.
- Mělo by jich být více než jeden a měly by být měřitelné.

#### 3. Způsob ověření
- Jak budou ukazatele zjištěny? Kdo zodpovídá? Náklady a čas ověření? Kdy? Jakým způsobem dokumentovány?

#### 4. Předpoklady a rizika
- Předpoklady podmiňující realizaci projektu.
- Významné skutečnosti ohrožující projekt.
- Podklad pro analýzu rizik.

---

## Řízení rizik v projektu

### Definice (PMBOK)
- **Riziko projektu:** Neurčitý jev nebo podmínka s pozitivním nebo negativním efektem na cíle.
- **Řízení rizik:** Sled aktivit s preventivními/korektivními zásahy proti ohrožujícím událostem.

### Fáze řízení rizik

#### 1. Plánování řízení rizik
- Stanovení globální úrovně rizikovosti.
- Posouzení hlavních rizik, klasifikace.
- Navržení metod a přístupů.

#### 2. Identifikace rizik
- Systematická analýza, identifikace, kategorizace, dokumentace.
- Metody: **Brainstorming, Delphi, SWOT analýza**.

#### 3. Kvalitativní analýza rizik
- Závažnost, předvídatelnost, vazby, kontrolovatelnost, odvratitelnost.
- Výstup: **Registr rizik** (součást dokumentace projektu).

#### 4. Kvantitativní analýza rizik
- Číselné vyjádření pravděpodobností vzniku a velikosti dopadů.
- Podklady pro prioritizaci opatření a rozpočtové rezervy.

##### Kvantifikace rizika
- **Pravděpodobnost vzniku** jednotlivých rizik.
- **Celková ohrožená hodnota** v projektu.
- **Očekávaný dopad** rizika.
- **Očekávaná hodnota rizika** = Pravděpodobnost × Dopad.

##### Nástroje kvantitativní analýzy
- **Rozhodovací stromy**
- **Mapa (graf) rizik** – bodová stupnice (0–10) na osách pravděpodobnost × dopad.
- **Matice rizik** – dopad a výskyt ohodnocen 1–3 body, celková hodnota = součin.

##### Práce s náhodnými jevy
- Nezávislé jevy: P(A∪B) = P(A) + P(B) − P(A∩B); P(A∩B) = P(A) × P(B).
- Závislé (neslučitelné) jevy: P(A∪B) = P(A) + P(B); P(A∩B) = 0.

#### 5. Plánování obrany proti rizikům
- **Odmítnutí** – změna projektu.
- **Omezení výskytu** – monitoring + záložní plán.
- **Akceptace** – vytvoření rezerv.
- **Převod** – pojištění, přenesení na jiný subjekt.
- **Simulace a výzkum** – další zkoumání.
- Výstup: Aktualizovaný Registr rizik, Plán projektu a Plán řízení rizik.

#### 6. Monitorování a kontrola rizik
- Průběžně a stále až do uzavření projektu.
- Sledování stávajících i nových rizik = pravidelný bod porad.
- Hodnota v ohrožení v životním cyklu **roste**, ale riziko **klesá**.

## Přehled standardů

Vysoký počet neúspěšných projektů vede k vytváření standardů. Čtyři nejpoužívanější:

1. **ICB4 (IPMA)**
2. **PMBOK (PMI)**
3. **PRINCE2**
4. **ISO 21 500**

Standardy se osvojují **certifikací** u certifikačních autorit.

---

## ICB – Individual Competence Baseline (IPMA)

- Globální standard definující **kompetence** pro řízení projektů, programů a portfolií.
- **Kompetence** = soubor znalostí, osobních přístupů, dovedností a zkušeností.
- ICB verze 3 (2006): 46 kompetencí ve 3 kategoriích.
- ICB verze 4 (2015): **29 kompetencí** – zjednodušení a zpřehlednění.

### Oko kompetencí IPMA – 3 oblasti

#### 1. Kontextové kompetence (5 elementů)
- **Strategie** – transformace strategie organizace do projektů.
- **Systém řízení, struktura a procesy** – propojení se strukturami organizace.
- **Shoda se standardy a předpisy** – vyrovnání s vnějšími a vnitřními omezeními.
- **Moc a zájmy** – rozlišení neformálních zájmů jedinců a skupin.
- **Kultura a hodnoty** – vliv kulturních faktorů na projekt.

#### 2. Behaviorální kompetence (10 elementů)
- Sebereflexe a sebeřízení
- Osobní integrita a spolehlivost
- Komunikační dovednosti
- Zainteresovanost a vztahy
- Vůdcovství
- Týmová práce
- Konflikty a krize
- Kreativita, vynalézavost a důvtip
- Vyjednávání
- Orientace na výsledky

#### 3. Technické kompetence (13 elementů)
- Návrh projektu, Požadavky a cíle, Scope, Čas
- Organizace projektu a práce s informacemi
- Kvalita, Finance, Zdroje, Obstarávání
- Plánování a operativní řízení
- Rizika a příležitosti, Zainteresované strany, Změny

### Certifikace IPMA
- **Level D** – Certified Project Management Associate
- **Level C** – Certified Project Manager
- **Level B** – Certified Senior Project Manager
- **Level A** – Certified Project Director
- Certifikační autorita v ČR: **Společnost pro projektové řízení (SPŘ)**, Brno.

---

## PMBOK – Project Management Body of Knowledge (PMI)

- Mezinárodně uznávaný standard od PMI (Project Management Institute).
- Nejstarší a nejobecnější standard, nejrozšířenější v Severní Americe a Asii.
- Vznikl na konci 60. let v USA, aktuální verze 6.0 (2017).
- Primárně zaměřen na firmy dodávající výrobky/služby pomocí projektů.

### 5 skupin procesů
1. Zahajovací
2. Plánovací
3. Realizační
4. Monitorovací a kontrolní
5. Uzavírací

### 10 znalostních oblastí
1. Řízení integrace projektu
2. Řízení rozsahu projektu
3. Řízení času projektu
4. Řízení nákladů projektu
5. Řízení kvality projektu
6. Řízení lidských zdrojů projektu
7. Řízení komunikace projektu
8. Řízení rizik projektu
9. Řízení subdodávek projektu
10. Řízení zainteresovaných stran projektu

### Certifikace PMI
- **PMP** – Project Management Professional
- **CAPM** – Certified Associate in Project Management
- **PgMP** – Program Management Professional
- **PfMP** – Portfolio Management Professional
- **PMI-ACP** – Agile Certified Practitioner
- **PMI-RMP** – Risk Management Professional
- **PMI-SP** – Scheduling Professional

---

## PRINCE2 – Projects In Controlled Environments

- Vytvořena 150+ společnostmi, nejrozšířenější PM metodika v Evropě.
- Vznikla 1989, autor: britská vládní agentura OCG (nyní Axelos).
- Procesně orientovaná metoda.

### Základní principy
- Projekt řízen **obchodním případem** (Business Case).
- Projekt orientován na **produkt**.

### Struktura PRINCE2
- **7 principů**
- **7 procesů**
- **7 témat**

### Certifikace PRINCE2
1. **Foundation**
2. **Practitioner**
3. **Agile Practitioner**

---

## ISO 21 500

- Mezinárodní norma (od 2012, nahrazuje ISO 10 006).
- V ČR jako **ČSN ISO 21 500**, certifikační autorita: Český normalizační institut (ČNI).
- Obsah a struktura se pojmově shoduje s PMBOK verze 5, doplněno o kompetence lidí (blíže k ICB).
- Použitelná pro jakýkoli typ organizace a projektu bez ohledu na složitost, rozsah nebo dobu trvání.

---

## Principy při řízení projektů

- **Systematický přístup** – vyhněte se nahodilosti.
- **Strukturování problému** – rozděl a panuj.
- **Strukturování v čase** – přiměřené kroky.
- **Týmová práce** – víc hlav víc ví.
- **Přiměřené prostředky** – ne kanón na komára.
- **Systémový přístup** – vzájemné souvislosti (5 stupňů poznání).
- **Počítačová podpora** – rutinu nechte strojům.
- **Integrace** – nikdy nestavíte na zelené louce.

## Přístupy k řízení projektů

### Tradiční přístup
- **Fixní:** Scope (rozsah).
- **Flexibilní:** Náklady, čas.
- Cíl/účel je uvnitř trojúhelníku rozsahu.

### Agilní přístup
- **Fixní:** Náklady, čas.
- **Flexibilní:** Scope (rozsah).
- Mezi nimi existuje **hybridní přístup** (How much agile?).

---

## Proč agilní přístupy?

### Problémy tradičního řízení
- Dlouhý cyklus vývoje software.
- Nízká flexibilita, pozdní reakce na chyby.
- Nesplnění harmonogramu a rozpočtu.
- **Krize v 90. letech** (CHAOS Report, 1994): polovina projektů překročila rozpočet/termín, třetina zrušena.

### Cesta k agile
- Snaha o zlepšení: přesnější plánování, detailnější dokumentace, lepší kontrola.
- **Iterativní metodologie:** Rational Unified Process, spirální model.
- **Lean principy** (z výroby): redukce plýtvání, zaměření na hodnotu pro zákazníka.

---

## Agilní manifest (2001)

### 4 základní hodnoty
1. **Jednotlivci a interakce** nad procesy a nástroji.
2. **Fungující software** nad obsáhlou dokumentací.
3. **Spolupráce se zákazníkem** nad vyjednáváním smluv.
4. **Reakce na změny** nad dodržováním plánu.

### Klíčové vlastnosti agile
- Iterativní přístup, inkrementální dodávky.
- Aktivní přístup týmu, účast zákazníka.
- Multifunkční týmy, rychlá zpětná vazba.

### Přínosy agile
- Inovace a adaptabilita.
- Reakce na změny v dynamickém prostředí.
- Reakce na skutečné potřeby zákazníka.
- Rychlé prototypování, lepší kvalita a spolehlivost.

---

## Přehled agilních metodik
- **Scrum** – nejpoužívanější (87 % dle State of Agile Report, 2022).
- **Kanban**
- **ScrumBan**
- **SAFe** (Scaled Agile Framework)
- **LeSS** (Large Scale Scrum)

---

## Scrum

### Charakteristika
- Agilní metoda a framework implementující agilní principy.
- Flexibilní a vysoce adaptabilní.
- Vhodný pro dynamicky se měnící prostředí, inovace, startupy.
- Založen na **empirismu** a **lean přístupu**.

### Sprint – základní cyklus

**Průběh sprintu:**
Product Goal → Product Backlog → **Planning** → Sprint Backlog → Sprint Goal → **Scrum Team** (Daily Scrum) → Increment (Definition of Done) → **Review** → **Retrospective** → zpět k Refinement.

### Sprint Events (události)
1. **Planning** – plánování práce pro další sprint.
2. **Daily Scrum** – denní krátký standup.
3. **Review (Demo)** – prezentace výstupů sprintu stakeholderům.
4. **Retrospective** – poučení, zlepšování týmu a procesů.
5. **Refinement** – příprava práce pro budoucí sprinty.

### Scrum tým
- **Křížově-funkční struktura** – komplementární znalosti a dovednosti.
- **Samoorganizace** – tým rozhoduje, jak bude práci vykonávat.
- Členové odpovědní za své výstupy.
- **Optimální velikost:** 5–7 členů.

### Role ve Scrumu

**Scrum Master:**
- Prosazuje používání Scrumu.
- Pomáhá týmu i Product Ownerovi.
- Řídí události, odstraňuje překážky.

**Product Owner:**
- Odpovědný za produkt a hodnotu pro zákazníka.
- Spravuje Product Backlog.
- Specifikuje požadavky a priority.

**Developer(s):**
- Odpovědní za tvorbu použitelných inkrementů.
- Spravují Sprint Backlog.
- Specifické dovednosti se liší dle projektu.

---

## User Stories

### Struktura
- **Cílová role** (koncový uživatel), který potřebuje funkci.
- **Popis** nové funkce.
- **Přidaná hodnota** pro uživatele.

### Formát
> Jako **[role]** potřebuji **[funkci]**, abych mohl/a **[přínos]**.

### Příklad
> Jako kapitán hvězdné lodi potřebuji kapitánské křeslo, abych mohl pohodlně velít své lodi po delší dobu bez fyzické námahy.

---

## Scrum artefakty

### Product Backlog
- Prioritizovaný seznam všech User Stories.
- Vytvořen na základě požadovaných funkcionalit.
- Průběžně aktualizován podle potřeb zákazníka.

### Sprint Backlog
- Seznam User Stories vybraných pro daný sprint.
- Výběr probíhá při Planningu.
- Vizualizace pomocí **Scrum Board**.

### Increment
- Přidaná hodnota dodaná po každém sprintu.

---

## Scrum Board

- Vizualizace User Stories v aktuálním sprintu.
- Zobrazuje přiřazení a stavy.
- Klíčový nástroj pro Daily Scrum.

### Základní stavy
- **To Do** – co je třeba udělat.
- **Doing** – na čem se pracuje.
- **Done** – co je hotovo.

---

## Agilní estimační techniky

### Principy
- Efektivní plánování a prioritizace na základě empirické zkušenosti.
- Vyhýbání se nadměrným detailům, falešné přesnosti a absolutním číslům.

### Story Points
- Abstraktní jednotky pracovního úsilí.
- Záměrně se nepoužívají absolutní hodiny/dny.
- Hodnota Story Pointu je specifická pro tým.

### Planning Poker
- Karty s čísly (**modifikovaná Fibonacciho posloupnost**: ½, 1, 2, 3, 5, 8, 13, 20, ∞).
- Členové týmu nezávisle vyberou číslo (skrytě).
- Diskuze o komplexitě User Story.
- Dosažení **konsenzu** o přidělených Story Points.

### Další techniky
- **T-Shirt estimates** (XS, S, M, L, XL).
- **Relative sizing** (relativní porovnávání).

---

## Užitečné zdroje
- [Agile Manifesto (2001)](https://agilemanifesto.org/)
- [Scrum Guides (2020)](https://scrumguides.org/)
- [Scrum.org](https://www.scrum.org/)
- Kniha: *Scrum: The Art of Doing Twice the Work in Half the Time* (2014)
