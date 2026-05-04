# Okruh 10 – Aplikace teorie grafů v projektovém řízení: CPM, PERT, GERT, MPM

## Teorie grafů v projektovém řízení

Složitý projekt se skládá ze stovek nebo tisíců **aktivit (činností)**, které mají vzájemné závislosti (B nemůže začít, dokud není dokončeno A) a každá vyžaduje určitý čas a zdroje. Manuální sledování takového projektu je nepraktické.

**Síťová analýza** (Network Analysis) modeluje projekt jako **orientovaný graf**, kde:
- **Uzly** nebo **šipky** reprezentují aktivity (závisí na notaci).
- **Závislosti** mezi aktivitami určují pořadí.

Cílem je:
1. Určit **nejdříve možný** a **nejpozději přípustný** termín každé aktivity.
2. Identifikovat **kritickou cestu** – sekvenci aktivit bez časové rezervy, jejichž zpoždění zpožďuje celý projekt.
3. Analyzovat riziko překročení termínu.

---

## CPM – Critical Path Method (Metoda kritické cesty)

**CPM** (1957, DuPont) je deterministická metoda – doby trvání aktivit jsou **přesně dány** (konstantní).

### Notace: AOA vs. AON

**AOA (Activity on Arrow)**: Aktivity jsou na šipkách, uzly jsou události (milníky). Někdy nutné fiktivní aktivity (dummy) k zachycení závislostí.

**AON (Activity on Node)**: Aktivity jsou v uzlech, šipky pouze zobrazují závislosti. Přehlednější, dnes preferovaná (např. MS Project používá AON).

### Výpočet CPM (AON)

Pro každou aktivitu $i$ s dobou trvání $d_i$:

**Dopředný průchod** (forward pass) – výpočet nejdříve možných termínů:
$$ES_i = \max_j \{EF_j\} \quad \text{(přes všechny předchůdce } j\text{)}$$
$$EF_i = ES_i + d_i$$

**Zpětný průchod** (backward pass) – výpočet nejpozději přípustných termínů (od konce projektu):
$$LF_i = \min_k \{LS_k\} \quad \text{(přes všechny následníky } k\text{)}$$
$$LS_i = LF_i - d_i$$

**Celková rezerva (Total Float)**:
$$TF_i = LF_i - EF_i = LS_i - ES_i$$

**Kritická aktivita**: $TF_i = 0$ – nesmí se zpozdit bez zpožd ění projektu.

**Kritická cesta**: Nepřerušená sekvence kritických aktivit od začátku do konce projektu. Délka kritické cesty = minimální možná délka projektu.

### Volná rezerva (Free Float)

$$FF_i = ES_{\text{následník}} - EF_i$$

Aktivita může být zpožděna o $FF_i$ bez dopadu na následníky (i kdyby ostatní začaly co nejdříve).

> **Příklad**: Projekt výstavby s 6 aktivitami. Po výpočtu ES/EF/LS/LF: aktivity A-C-F mají $TF = 0$ → tvoří kritickou cestu délky 14 dní.

---

## PERT – Program Evaluation and Review Technique

**PERT** (1958, US Navy – projekt Polaris) rozšiřuje CPM o **stochastické doby trvání** aktivit – vhodné tehdy, když doby trvání nejsou přesně známy.

### Tří bodový odhad

Pro každou aktivitu se odhadují tři hodnoty:
- $a$ = **optimistická** doba (nejkratší v nejlepším případě; pravděpodobnost výskytu ≈ 1 %)
- $m$ = **nejpravděpodobnější** doba (modus)
- $b$ = **pesimistická** doba (nejdelší v nejhorším případě; pravděpodobnost ≈ 1 %)

**PERT předpokládá betarozd ělení** pro každou aktivitu. Aproximace:

$$\mu_i = \frac{a + 4m + b}{6} \quad \text{(střední hodnota)}$$

$$\sigma_i^2 = \left(\frac{b - a}{6}\right)^2 \quad \text{(rozptyl)}$$

### Délka projektu (CPM na středních hodnotách)

Délka kritické cesty se počítá jako CPM s $d_i = \mu_i$. Střední délka projektu:

$$\mu_T = \sum_{i \in \text{KP}} \mu_i$$

Rozptyl délky projektu (kritická cesta):

$$\sigma_T^2 = \sum_{i \in \text{KP}} \sigma_i^2$$

### Pravděpodobnostní analýza

Délka projektu $T$ se aproximuje **normálním rozdělením** $T \sim N(\mu_T, \sigma_T^2)$ (CLV – Centrální limitní věta).

Pravděpodobnost dokončení do termínu $T_D$:

$$P(T \leq T_D) = \Phi\left(\frac{T_D - \mu_T}{\sigma_T}\right)$$

kde $\Phi$ je distribuční funkce standardního normálního rozdělení.

> **Příklad**: Kritická cesta má $\mu_T = 20$ týdnů, $\sigma_T = 2$ týdny. Jaká je pravděpodobnost dokončení do 23 týdnů? $z = (23-20)/2 = 1{,}5$. $P = \Phi(1{,}5) \approx 93{,}3\,\%$.

### Omezení PERT

- Předpokládá, že délka projektu je dána **kritickou cestou** – ignoruje, že skoro-kritické cesty mohou projekt zpozdit (merge bias).
- Normalitní aproximace může být nepřesná pro malý počet aktivit.
- Pro komplexnější analýzu se používá Monte Carlo simulace sítě.

---

## MPM – Metra Potential Method (Metoda potenciálů)

**MPM** (Roy, 1964) je varianta síťové analýzy v AON notaci, která umožňuje modelovat různé typy **závislostí** mezi aktivitami – nejen „B začne po dokončení A", ale i:

| Typ vazby | Zkratka | Popis |
|-----------|---------|-------|
| Finish-to-Start | FS | B začne $\delta$ po dokončení A (klasická závislost) |
| Start-to-Start | SS | B začne $\delta$ po zahájení A |
| Finish-to-Finish | FF | B skončí $\delta$ po skončení A |
| Start-to-Finish | SF | B skončí $\delta$ po zahájení A (vzácné) |

$\delta$ je **zpoždění (lag)** nebo předstih (lead, negativní lag).

MPM je výpočetně analogická CPM, ale pracuje s bohatší strukturou závislostí. Je základem pro moderní software (MS Project, Oracle Primavera).

---

## GERT – Graphical Evaluation and Review Technique

**GERT** rozšiřuje PERT o dvě klíčové vlastnosti:

1. **Stochastická síť**: Uzly mohou mít **probabilistické větvení** – z uzlu vedou výstupní šipky s pravděpodobnostmi (jako rozhodovací uzel, ne vždy se provede každá aktivita).

2. **Opakování a smyčky**: Na rozdíl od CPM/PERT, kde síť je acyklická, GERT umožňuje cykly – aktivita nebo smyčka se může opakovat (zkušební testy, iterativní vývoj).

GERT je vhodný pro projekty s rozhodovacími body, alternativními cestami a iteracemi (R&D projekty, testování, vývoj softwaru). Řeší se analyticky pomocí **momentotvorných funkcí** nebo simulačně.

---

## Srovnání metod

| Metoda | Doby trvání | Závislosti | Větvení | Smyčky | Typické použití |
|--------|------------|-----------|---------|--------|----------------|
| **CPM** | Deterministické | FS | Ne | Ne | Stavebnictví, investiční projekty |
| **PERT** | Stochastické (3 odhady) | FS | Ne | Ne | R&D, vojenské programy |
| **MPM** | Deterministické | FS, SS, FF, SF | Ne | Ne | Komplexní projekty (MS Project) |
| **GERT** | Stochastické | Obecné | Ano | Ano | Iterativní vývoj, R&D |

---

## Využití výsledků síťové analýzy

Mimo identifikaci kritické cesty síťová analýza umožňuje:

- **Resource leveling (vyrovnání zdrojů)**: Přesunutí necritical aktivit v rámci jejich rezerv tak, aby se snížily výkyvy v požadavcích na zdroje.
- **Time-cost trade-off (zkracování projektu)**: „Crashing" – identifikace kritických aktivit, kde lze zkrátit dobu zvýšením nákladů; hledáme nejlevnější způsob zkrácení projektu o požadovaný čas.
- **Aktualizace plánu**: Průběžné překalkulování ES/EF/LS/LF se skutečným stavem (earned value management).
