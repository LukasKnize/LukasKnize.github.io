# Okruh 12 – Teorie omezení a lidský činitel v projektovém řízení

## Teorie omezení (TOC – Theory of Constraints)

**Teorie omezení** je management filozofie vyvinutá Eliyahu Goldratt a popularizovaná v románu „Cíl" (The Goal, 1984). Základní teze:

> Každý systém má alespoň jedno **omezení (bottleneck / constraint)** – místo, které limituje výkonnost celého systému. Zlepšení kdekoliv jinde než na omezení nezlepší celkový výkon.

### Pět kroků TOC (Goldrattův proces trvalého zlepšování)

**1. IDENTIFIKUJ omezení**
Najdi část systému (zdroj, pravidlo, trh), která limituje celkový průtok. V projektu: nejdelší řetězec aktivit (analogie kritické cesty), nejpřetíženější zdroj.

**2. ROZHODNÍ SE, jak omezení co nejlépe využít**
Vytěžuj omezení na maximum – ztracená kapacita na omezení je ztracena navždy. Eliminuj prostoje omezení (čekání na materiál, přepracování, výpadky).

**3. PODŘIĎ vše ostatní rozhodnutí z kroku 2**
Zbytek systému musí sloužit omezení, ne naopak. Necritické aktivity/zdroje záměrně pracují podoptimálně, aby omezení mohlo fungovat na 100 %.

**4. ZVEDNI kapacitu omezení**
Investice do rozšíření omezení (nový stroj, přesčasy, outsourcing) – až po kroky 2 a 3, aby se neplytvalo na neefektivní omezení.

**5. VARUJ před inercií – vrať se ke kroku 1**
Po odstranění omezení vznikne nové. Zlepšování je nepřetržitý cyklus.

### TOC v projektovém kontextu: Critical Chain Project Management (CCPM)

**CCPM** (Goldratt, 1997) aplikuje TOC na projektové řízení:

#### Problém s tradičním CPM/PERT

Tradičně manažeři a odhadci stavají do dob trvání aktivit **bezpečnostní rezervy** (padding) – obvykle 50–100 % skutečné doby. Proč to nefunguje?

- **Studentův syndrom**: Lidé začínají pracovat na úkolu na poslední chvíli (deadline je daleko → proč spěchat?).
- **Parkinsonův zákon**: Práce se roztáhne na celý přidělený čas – i když aktivita mohla být hotova dříve, dodání se neuspíší.
- **Multitasking**: Pracovníci skáčou mezi úkoly → žádný nedokončí rychle.

Výsledek: Individuální rezervy jsou plýtvány, ale projekt jako celek se zpozdí.

#### Řešení CCPM

1. **Odstraň individuální rezervy** z odhadů aktivit – pracuj s mediánovými odhady (50% pravděpodobnost dokončení), ne pesimistickými.

2. **Soustřeď rezervy do sdílených bufferů:**
   - **Project Buffer (PB)**: Na konci kritického řetězce (chrání datum dokončení projektu).
   - **Feeding Buffer (FB)**: Na vstupu necritických řetězců do kritického řetězce (chrání kritický řetězec před zpožděním z necritical aktivit).
   - **Resource Buffer**: Upozornění klíčových zdrojů, že brzy budou potřeba.

3. **Řiď projekt podle stavu bufferů** (ne podle procent dokončení aktivit):
   - Zelená zóna (0–33 % čerpání bufferu): V pořádku.
   - Žlutá zóna (33–67 %): Sledovat, připravit nápravná opatření.
   - Červená zóna (67–100 %): Okamžitá akce.

4. **Eliminuj multitasking**: Každý pracovník pracuje na jedné věci, dokud ji nedokončí. Priorita = práce na kritickém řetězci.

---

## Lidský činitel v projektovém řízení

Technické nástroje (CPM, Gantt, EVM) jsou nutné, ale nestačí. Projekty realizují **lidé** – a lidské faktory jsou příčinou většiny projektových selhání.

### Projektový tým a jeho dynamika

**Tuckmanův model vývoje skupiny** (1965): Týmy procházejí fázemi:

1. **Forming (formování)**: Lidé se poznávají, jsou zdvořilí, nejistí rolemi. Produktivita nízká.
2. **Storming (bouření)**: Konflikty o role, přístupy, priority. Nezbytná fáze – tým si vyjasňuje pravidla.
3. **Norming (normování)**: Vznikají normy, role jsou jasné, kooperace roste.
4. **Performing (výkon)**: Tým funguje efektivně, synergie, vysoká produktivita.
5. **Adjourning (rozchod)**: Ukončení projektu, rozpad týmu.

Projektový manažer musí rozpoznat, v jaké fázi tým je, a odpovídajícím způsobem vést.

### Motivace projektového týmu

Projektové týmy mají specifické motivační výzvy:
- Dočasnost: Team members vědí, že tým skončí → méně investují do vztahů.
- Dvojí podřízenost: Projekt vs. liniový manažer (matice) → konflikty loajalit.
- Nejistota: Projekty jsou ze své podstaty neurčité → stres.

Klíčové motivátory v projektech: jasný cíl a smysl, autonomie, sdílení úspěchů, uznání přínosu, profesní rozvoj (viz motivační teorie – Okruh EKO 19).

### Komunikace v projektu

**Počet komunikačních kanálů** v projektu roste kvadraticky s počtem členů:
$$n_c = \frac{n(n-1)}{2}$$

Při 5 členech: 10 kanálů. Při 20 členech: 190 kanálů. Komunikační složitost je jednou z hlavních příčin projektových problémů při škálování.

**Plán komunikace**: kdo dostává jaké informace, jak často, jakým kanálem (porady, zprávy, dashboard). Předchází informačním přetížením i informačním vakuům.

### Psychologické jevy v projektech

**Dunning-Kruger efekt**: Méně zkušení členové nadhodnocují svou schopnost a odhadují doby trvání příliš optimisticky.

**Optimism bias (optimistická zkreslenost)**: Lidé systematicky podhodnocují čas a náklady na budoucí aktivity. Historické průměry a referenční třídy jsou lepší základ pro odhady než subjektivní expertní odhady.

**Planning fallacy**: Projekt A trvá déle, než bylo plánováno. Učíme se? Projekt B plánujeme s podobným optimismem – chyba se opakuje. Kahneman: Lidé plánují v „inside view" (zaměřeni na specifika svého projektu). „Outside view" (referenční třída: jak dlouho trvaly podobné projekty?) je přesnější.

**Eskalace závazku (Sunk Cost Fallacy)**: Projekt je opožděn a předražen, ale manažeři ho odmítají zastavit, protože „už do toho bylo tolik investováno". Racionálním kriteriem pro pokračování by měly být budoucí přínosy vs. budoucí náklady, ne minulé výdaje.

### Stakeholder management

**Zainteresované strany (stakeholders)** jsou všichni, kdo mají zájem na výsledku projektu nebo ho mohou ovlivnit: zadavatel, uživatelé, sponzor, dodavatelé, regulátoři, konkurence.

Analýza stakeholders:
- **Mocenský zájem (Power/Interest Grid)**: Dle vlivu a zájmu stakeholders rozdělíme do čtyř skupin → různé strategie (manage closely, keep satisfied, keep informed, monitor).
- Negativně zainteresované stakeholders (odpůrci změny) jsou rizikovým faktorem; je třeba je aktivně zapojit nebo neutralizovat.

### Změnový odpor

Projekty přinášejí změny – a lidé se změnám přirozeně brání. Řízení změn zahrnuje:
- Vysvětlení „proč" (smysl změny).
- Zapojení dotčených do plánování.
- Komunikace, komunikace, komunikace.
- Podpora při přechodu (školení, koučing).

Kubler-Rossova křivka změny: Šok → Popření → Frustrace → Deprese → Experimentování → Rozhodnutí → Integrace.
