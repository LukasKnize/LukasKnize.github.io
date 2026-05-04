# Okruh 8 – Simulační modely a postupy

## Co je simulace?

**Simulace** je metoda zkoumání systému prostřednictvím jeho počítačového modelu – místo reálného experimentu „spouštíme" model a pozorujeme jeho chování. Simulace je nezbytná tehdy, když jsou analytická (uzavřená) řešení nedostupná nebo příliš složitá.

Simulace je **výpočetní experiment**: definujeme model, nastavíme počáteční podmínky, spustíme a analyzujeme výsledky.

### Kdy použít simulaci?

- Systém je příliš složitý pro analytické řešení (mnoho interakcí, nelinearity, náhodnost).
- Experimenty s reálným systémem jsou drahé, nebezpečné nebo neproveditelné.
- Chceme porovnat scénáře nebo politiky před implementací.
- Chceme porozumět dynamice systému v čase.

---

## Simulace Monte Carlo

**Monte Carlo simulace** (MCS) je metoda řešení deterministických i stochastických problémů pomocí **opakovaného náhodného vzorkování**. Jméno odkazuje na kasino v Monte Carlu.

### Princip

1. Identifikujeme **náhodné vstupy** systému (proměnné s nejistotou: cena, poptávka, doba trvání projektu).
2. Pro každý vstup definujeme **pravděpodobnostní rozdělení** (normální, trojúhelníkové, uniformní, …).
3. Opakovaně (**tisíce až miliony iterací**) náhodně vzorkujeme hodnoty vstupů z jejich rozdělení a spočítáme výstup modelu.
4. Z histogramu výsledků odhadneme **rozdělení výstupu** (střední hodnotu, rozptyl, percentily, pravděpodobnost překročení prahu).

$$\mathbb{E}[f(X)] \approx \frac{1}{N} \sum_{i=1}^{N} f(x_i), \quad x_i \sim F_X$$

Chyba odhadu klesá jako $\sim 1/\sqrt{N}$ – pro zdvojnásobení přesnosti potřebujeme 4× více iterací.

### Aplikace MCS

- **Finanční riziko**: VaR (Value at Risk) portfolia, ocenění opcí (Black-Scholes MCS).
- **Projektové řízení**: Rozdělení délky projektu při nejistých dobách trvání aktivit (PERT).
- **Spolehlivostní analýza**: Pravděpodobnost selhání systémů.
- **Fyzika a věda**: Výpočet integrálu $\pi$, neutronová fyzika (původní použití – Manhattan Project, Ulam a von Neumann).

> **Příklad**: Projekt má 3 aktivity. Délky trvání jsou náhodné: A ~ N(5, 1²), B ~ N(3, 0.5²), C ~ N(4, 1²). MCS: vzorkujeme délky, spočítáme celkovou dobu (A+B+C), opakujeme 10 000×. Výsledek: střední délka projektu = 12 dní, 90% kvantil = 14,5 dne.

### Variance reduction techniques

Pro větší efektivitu MCS se používají techniky redukce variance:
- **Stratifikované vzorkování**: Rozdělíme obor vstupů do strat a vzorkujeme proporcionálně.
- **Latin Hypercube Sampling (LHS)**: Zajistí rovnoměrné pokrytí oboru vstupů s menším počtem vzorků.
- **Antitetické proměnné**: Pro každý vzorek $u$ vezmeme i $1-u$ – snižuje rozptyl odhadů.

---

## Diskrétní simulace událostí (DES – Discrete Event Simulation)

**Diskrétní simulace** modeluje systémy, jejichž stav se mění skokově v diskrétních časových okamžicích – při výskytu **událostí** (příchod zákazníka, dokončení obsluhy, porucha stroje).

### Klíčové pojmy

- **Entita**: Objekt, který prochází systémem (zákazník, dílec, paket).
- **Událost**: Diskrétní změna stavu systému v čase (příchod entity, začátek/konec obsluhy).
- **Zdroj (server)**: Komponenta systému, která obsluhuje entity.
- **Fronta**: Entita čeká, pokud je zdroj obsazen.
- **Kalendář událostí**: Seřazená množina naplánovaných událostí – simulační hodiny přeskakují od události k události (ne krok za krokem v čase).

### Postup DES

1. Inicializace (nastavení počátečního stavu, naplnění kalendáře první událostí).
2. Vyjmutí nejbližší události z kalendáře.
3. Zpracování události (změna stavu, naplánování dalších událostí).
4. Sběr statistik.
5. Opakování, dokud nenastane podmínka zastavení.

### Aplikace DES

Výrobní linky, logistické systémy, nemocniční provoz, call centra, letišťní terminály, síťové protokoly.

**Softwarové nástroje**: Arena, Simul8, AnyLogic, SimPy (Python).

---

## Spojitá simulace

**Spojitá simulace** modeluje systémy, jejichž stav se mění plynule v čase – popsané **diferenciálními rovnicemi** (ODE/PDE). Čas se diskretizuje na malé kroky $\Delta t$.

Numerické metody integrace: Eulerova metoda (jednoduché, méně přesné), Runge-Kutta 4. řádu (standardní). Krok $\Delta t$ musí být dostatečně malý pro přesnost, ale ne příliš malý (výpočetní náklady).

Systémová dynamika (Okruh 7) je typickým přístupem ke spojité simulaci.

**Aplikace**: fyzikální systémy, chemické reakce, demografické modely, klimatické modely, ekonomická dynamika.

---

## Multiagentní simulace (MAS – Multi-Agent Simulation)

**Multiagentní simulace** modeluje systém jako **soustavu autonomních agentů**, kteří interagují navzájem a s prostředím podle lokálních pravidel chování. Globální (emergentní) chování systému vzniká ze zdola (bottom-up) – není naprogramováno explicitně.

### Co je agent?

Agent je autonomní výpočetní entita s vlastnostmi:
- **Autonomní**: Rozhoduje sám na základě svého stavu a pravidel.
- **Reaktivní**: Reaguje na prostředí.
- **Proaktivní**: Sleduje vlastní cíle.
- **Sociální**: Komunikuje a interaguje s dalšími agenty.

### Příklady agentů a jejich pravidel

- Zákazník na trhu: nakupuje nejlevnější dostupné zboží, pokud má dostatek rozpočtu.
- Pták v hejnu (Boids model, Reynolds): letí tak, aby 1) byl blízko sousedům, 2) nenarážel do sousedů, 3) letěl stejným směrem jako sousedi. → Emerguje realistické hejno.
- Automobil v dopravní simulaci: udržuje bezpečnou vzdálenost, přizpůsobuje rychlost.

### Typické výsledky MAS

- **Emergentní jevy**: Hejnové chování, tržní ceny, segregace (Schellingův model), šíření epidemie.
- **Analýza politiky**: Co se stane, když změníme pravidla chování agentů (daňová politika, epidemiologická opatření)?

### Aplikace MAS

Finanční trhy (agent-based modeling of markets), epidemiologie, dopravní simulace, ekologie, sociální dynamika, obranné simulace.

**Softwarové nástroje**: NetLogo, AnyLogic, Mesa (Python), JADE.

---

## Srovnání přístupů

| Přístup | Čas | Náhodnost | Pohled na systém | Typická aplikace |
|---------|-----|-----------|-----------------|-----------------|
| **Monte Carlo** | Statický / Dynamický | Vysoká | Parametrická nejistota | Finanční riziko, integrace |
| **DES** | Diskrétní skoky | Střední | Tok entit, fronty | Výroba, logistika, zdravotnictví |
| **Spojitá simulace** | Spojitý | Nízká | Diferenciální rovnice | Fyzika, demografie, makroekonomika |
| **MAS** | Diskrétní / Spojitý | Střední | Autonomní agenti | Trhy, ekologie, doprava, sociologie |

---

## Postup simulační studie

Bez ohledu na typ simulace platí obecný postup:

1. **Definice cíle** studie.
2. **Sběr dat** a analýza vstupních distribucí.
3. **Tvorba modelu** (konceptuální → implementace).
4. **Verifikace** (model funguje správně?).
5. **Validace** (model odpovídá realitě?).
6. **Design experimentů** (jaké scénáře spustit?).
7. **Spuštění a analýza** výsledků.
8. **Dokumentace a komunikace**.
