# Okruh 15 – Organizační systém podniku, dekompozice a vztahy subsystémů

> Tato látka vychází z předmětu Teorie řízení organizačních systémů (TŘOS) a pracuje se specifickou terminologií a konceptuálním rámcem dle skript Hron, Macák (2015). Definice, zkratky a členění jsou závazné pro zkoušku z tohoto předmětu.

---

## Systém – základní vymezení

Než definujeme organizační systém, je třeba ujasnit pojem **systém** obecně.

**Systém** je uspořádaná množina prvků a vazeb mezi nimi, která jako celek vykazuje vlastnosti, jiné než mají jednotlivé prvky (tzv. **emergentní vlastnosti**). Celek je více (nebo jiný) než součet částí.

Každý systém lze popsat třemi rozměry:
1. **Prvky** – základní stavební kameny systému.
2. **Vazby** – vztahy a toky mezi prvky.
3. **Stupeň rozlišovací úrovně** – míra podrobnosti, na které systém analyzujeme (agregace/desagregace).

---

## Organizační systém (OS) – definice

**Organizační systém** (OS) je v rámci TŘOS definován jako:

> Množina hmotných prvků a lidí, propojených hospodářsko-ekonomickými, informačními a sociálně-výchovnými vazbami, která jako celek realizuje definovaný účel (hlavní cíl).

Prakticky: podnik, závod, úřad, škola – každá organizace, která má definovaný cíl a k jeho dosažení využívá lidi a hmotné prostředky.

### Vlastnosti organizačního systému

OS je charakterizován jako systém:
- **Reálný** – existuje fyzicky (lidé, stroje, budovy), nejde o abstraktní model.
- **Relativně uzavřený** – má hranice, ale interaguje s okolím (odběratelé, dodavatelé, stát).
- **Redukovaný** – při popisu vždy volíme určitou rozlišovací úroveň; vše, co je pod ní, ignorujeme.
- **Velmi složitý** – velký počet prvků a vazeb.
- **Stochastický** – chování lidí (klíčových prvků) nelze zcela předvídat; OS není deterministický.

---

## Prvky organizačního systému

OS obsahuje tři typy prvků:

| Typ | Označení | Obsah |
|-----|----------|-------|
| **Lidé** | L | Pracovníci, manažeři, specialisté |
| **Hmotné prvky** | HP | Stroje, zařízení, budovy, suroviny, finance |
| **Smíšené prvky** | SP | Kombinace L a HP (pracoviště, tým + stroj) |

---

## Vazby v organizačním systému

Prvky OS jsou propojeny třemi typy vazeb:

| Zkratka | Název | Obsah |
|---------|-------|-------|
| **HE** | Hospodářsko-ekonomické vazby | Toky materiálu, energie, peněz, výrobků |
| **I** | Informační vazby | Toky dat, zpráv, příkazů, hlášení |
| **SV** | Sociálně-výchovné vazby | Vztahy mezi lidmi: autorita, komunikace, motivace, vzdělávání |

---

## Rozlišovací úroveň a dekompozice

TŘOS zavádí pojem **rozlišovací úroveň** jako klíčový nástroj analýzy systémů. Každý systém lze zkoumat na různě podrobné úrovni:

- **1. rozlišovací úroveň (nejhrubší)**: OS jako celek, jeden prvek – černá skříňka s vstupy a výstupy.
- **2. rozlišovací úroveň**: OS se rozkládá na **subsystémy 1. řádu** – 9 subsystémů (viz níže).
- **3. rozlišovací úroveň**: Každý subsystém se dále dělí na subsystémy 2. řádu.
- … a tak dál (desagregace).

**Agregace** = přechod na hrubší úroveň (ze 2. na 1.). **Desagregace** = přechod na podrobnější úroveň (z 1. na 2.).

Volba rozlišovací úrovně závisí na **účelu analýzy** – pro strategické rozhodování stačí hrubší pohled, pro operativní řízení potřebujeme detailnější.

---

## Subsystémy 1. řádu (2. rozlišovací úroveň)

Na 2. rozlišovací úrovni se OS rozpadá na **9 subsystémů 1. řádu**, propojených vazbami HE, I a SV.

Formální zápis:

$$OS = \{[PS_1, TS_1, TS_2, EES, OSS, EIS, PS_2, MOS, ŘSS], [HE, SV, I]\}$$

### Přehled subsystémů

| Zkratka | Název | Dominující prvek | Obsah |
|---------|-------|-----------------|-------|
| **PS₁** | Primární (výrobní) subsystém | SP | Vlastní výroba/produkce – přeměna vstupů na výstupy (CO se vyrábí?) |
| **TS₁** | Technický subsystém 1 | HP | Zásobování materiálem, surovinami, energiemi |
| **TS₂** | Technický subsystém 2 | HP | Technická obsluha výroby (údržba, opravy, metrologie) |
| **EES** | Ekonomicko-evidenční subsystém | L | Ekonomika, účetnictví, controlling, evidence |
| **OSS** | Organizačně-správní subsystém | SP | Organizační struktura, administrativa, personalistika |
| **EIS** | Evidenčně-informační subsystém | HP | Informační systémy, IT infrastruktura, datové báze |
| **PS₂** | Prodejní subsystém | L | Prodej, marketing, vztahy se zákazníky |
| **MOS** | Manažersko-obchodní subsystém | L | Strategické řízení, obchodní politika, vrcholový management |
| **ŘSS** | Řídící subsystém | L | Operativní řízení, koordinace, dispečink |

---

## Maticové uspořádání – hlavní diagonála a oblasti

Devět subsystémů lze uspořádat do **matice 3×3**, která odhaluje logiku jejich vztahů:

```
         Vstupy (zásobování)   Transformace (výroba)   Výstupy (prodej)
Hmotné:      TS₁                    PS₁                    PS₂
Smíšené:     EES                    OSS                    MOS
Řídící:      EIS                    ŘSS                    ???
```

Přesnější schéma dle TŘOS (řádky = dominující prvek, sloupce = fáze procesu):

|  | **Produkce (CO?)** | **Organizace** | **Obchod/Řízení** |
|--|-------------------|---------------|-------------------|
| **Dominance HP** | PS₁ | TS₁ | TS₂ |
| **Smíšené** | EES | OSS | EIS |
| **Dominance L** | PS₂ | MOS | ŘSS |

### Hlavní diagonála

Hlavní diagonálu tvoří: **PS₁ – OSS – ŘSS**

- **PS₁** určuje, *co* podnik produkuje (výrobní/produkční jádro).
- **OSS** zajišťuje organizační podmínky (struktury, role, pravidla).
- **ŘSS** realizuje řídicí procesy (koordinace, plánování, operativa).

Tyto tři subsystémy jsou ve vzájemném cyklu: výroba potřebuje organizaci → organizace potřebuje řízení → řízení se zaměřuje na výrobu.

### Nad hlavní diagonálou (dominance L – lidé)

Subsystémy **EES, MOS, PS₂** mají převahu lidského faktoru:
- EES: ekonomové, účetní, controlleři.
- MOS: manažeři, obchodníci.
- PS₂: obchodní zástupci, marketéři.

### Pod hlavní diagonálou (dominance HP – hmotné prvky)

Subsystémy **TS₁, EIS, TS₂** mají převahu hmotných prostředků:
- TS₁: sklady, dopravní prostředky, suroviny.
- EIS: servery, databáze, informační systémy.
- TS₂: dílny, měřicí přístroje, náhradní díly.

---

## Tři oblasti organizačního systému

Subsystémy se sdružují do tří **funkčních oblastí**:

| Oblast | Subsystémy | Funkce |
|--------|-----------|--------|
| **Produkčně-technická** | PS₁, TS₁, TS₂ | Zásobování, vlastní výroba, technická obsluha |
| **Organizačně-informační** | EES, OSS, EIS | Ekonomika, organizace, informační systémy |
| **Obchodně-řídící** | PS₂, MOS, ŘSS | Prodej, strategické a operativní řízení |

---

## Tři základní procesy v OS

Vztahy mezi subsystémy realizují tři typy procesů:

1. **Proces produkčního řízení** – tok HE vazeb: materiál → PS₁ → výrobek → PS₂. Jde o fyzický tok hmoty a energie přes výrobní jádro.

2. **Proces nepřímého řízení** – tok I a SV vazeb přes EES, OSS, EIS: sběr dat, jejich zpracování, tvorba rozhodovacích podkladů, plánování, organizování. Nepůsobí přímo na výrobu, ale vytváří podmínky.

3. **Proces přímého řízení** – tok I a SV vazeb přes MOS a ŘSS: přímé řídicí impulzy od managementu na PS₁ a PS₂. Bezprostřední koordinace výroby a prodeje.

---

## Vztahy mezi subsystémy

Vazby mezi subsystémy nejsou nahodilé. Každý subsystém komunikuje s okolními prostřednictvím:

- **HE vazeb**: fyzické toky (materiál z TS₁ do PS₁, hotový výrobek z PS₁ do PS₂).
- **I vazeb**: informační toky (data z EIS do MOS, plány z OSS do ŘSS).
- **SV vazeb**: mezilidské vztahy (motivace z MOS na PS₁, vzdělávání přes EES).

Klíčové je, že žádný subsystém nefunguje izolovaně – každý je propojen s ostatními a výpadek jednoho ovlivňuje celý systém.

---

## Shrnutí: struktura organizačního systému

```
OS = 9 subsystémů + 3 typy vazeb

Subsystémy (2. rozlišovací úroveň):
  Produkčně-technická oblast:     PS₁, TS₁, TS₂
  Organizačně-informační oblast:  EES, OSS, EIS
  Obchodně-řídící oblast:         PS₂, MOS, ŘSS

Vazby:
  HE – hospodářsko-ekonomické (materiál, peníze)
  I  – informační (data, příkazy)
  SV – sociálně-výchovné (lidské vztahy)

Klíčová osa: PS₁ – OSS – ŘSS (co se vyrábí – jak je organizováno – jak je řízeno)
```
