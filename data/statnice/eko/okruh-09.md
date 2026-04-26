# Okruh 9 – Kapitál podniku, WACC, zadlužení, překapitalizování, likvidita

## Co je kapitál podniku?

**Kapitál podniku** (pasiva) představuje **zdroje financování** majetku. Zatímco aktiva říkají „co podnik má", pasiva říkají „odkud to pochází". Bilanční rovnice:

$$\text{Aktiva} = \text{Vlastní kapitál} + \text{Cizí zdroje (+ časové rozlišení)}$$

Kapitál se dělí podle vlastnictví a právního vztahu k podniku.

---

## Struktura kapitálu (pasiv) dle české účetní legislativy

### A. Vlastní kapitál (VK)

Zdroj financování, který **vložili vlastníci** nebo který **vznikl z hospodářské činnosti** podniku. Vlastníci nemají nárok na splacení ve stanoveném termínu – jsou poslední v řadě při likvidaci (za věřiteli).

| Složka | Obsah |
|--------|-------|
| **Základní kapitál** | Vklady společníků zapsané v obchodním rejstříku (u s.r.o. min. 1 Kč, u a.s. min. 2 mil. Kč); u a.s. = jmenovitá hodnota vydaných akcií |
| **Ážio a kapitálové fondy** | Emisní ážio (rozdíl mezi emisní a jmenovitou cenou akcie), dary, příplatky společníků |
| **Fondy ze zisku** | Rezervní fond (zákonný – dnes povinný jen pro a.s. dle starší úpravy), ostatní fondy ze zisku dle stanov |
| **VH minulých let** | Nerozdělený zisk (nebo neuhrazená ztráta) z předchozích účetních období |
| **VH běžného účetního období** | Hospodářský výsledek (zisk nebo ztráta) aktuálního roku – po schválení valnou hromadou se přesune do VH min. let nebo se vyplatí jako dividenda |

### B. Cizí zdroje (CZ)

Zdroje získané od **věřitelů** – musí být **splaceny** (mají splatnost a zpravidla nesou úrok).

| Složka | Obsah |
|--------|-------|
| **Rezervy** | Závazky neurčité výše nebo termínu (rezerva na opravy DHM, na záruky, na restrukturalizaci). Nejsou totéž co rezervní fond! |
| **Dlouhodobé závazky** | Bankovní úvěry se splatností > 1 rok, emitované dluhopisy, závazky z leasingu, dlouhodobé zálohy přijaté od zákazníků |
| **Krátkodobé závazky** | Závazky z obchodních vztahů (nezaplacené faktury dodavatelům), závazky k zaměstnancům (nevyplacené mzdy), závazky k institucím (DPH, daně, ZP, SP), krátkodobé bankovní úvěry a kontokorenty |

### C. Časové rozlišení (pasiva)
Výdaje příštích období, výnosy příštích období.

---

## Hodnocení vývoje a struktury kapitálu

Stejně jako u aktiv provádíme:
- **Horizontální analýzu**: vývoj vlastního a cizího kapitálu v čase.
- **Vertikální analýzu**: podíl VK a CZ na celkových pasivech → **kapitálová struktura**.

$$\text{Podíl vlastního kapitálu} = \frac{\text{VK}}{\text{Pasiva celkem}} \times 100 \; [\%]$$

$$\text{Míra zadluženosti} = \frac{\text{Cizí zdroje}}{\text{Pasiva celkem}} \times 100 \; [\%]$$

---

## Cena vlastního a cizího kapitálu

### Cena cizího kapitálu

Cizí kapitál má **explicitní cenu** – úrokovou sazbu. Navíc platí, že **úroky jsou daňově uznatelný náklad** (snižují základ daně z příjmů) → vzniká tzv. **daňový štít** (tax shield).

$$\text{Efektivní cena cizího kapitálu} = r_d \times (1 - t)$$

kde $r_d$ = smluvní úroková sazba, $t$ = sazba daně z příjmů.

*Příklad: Úvěr 5 %, daň z příjmů 21 %. Efektivní cena = 5 % × (1 − 0,21) = **3,95 %**.*

### Cena vlastního kapitálu

Vlastní kapitál nemá smluvní cenu, ale má cenu **implicitní** – **náklady příležitosti vlastníků** (co by vydělali, kdyby investovali jinam se stejným rizikem). Vyjadřuje se jako **požadovaná míra výnosu vlastníků** $r_e$.

Stanovení $r_e$ je obtížnější než cena dluhu. Používané metody:
- **CAPM** (Capital Asset Pricing Model): $r_e = r_f + \beta \times (r_m - r_f)$, kde $r_f$ = bezriziková sazba, $\beta$ = míra systematického rizika, $r_m$ = průměrný výnos trhu.
- **Stavebnicový model**: $r_e = r_f + \text{rizikové přirážky}$ (za finanční stabilitu, podnikatelské riziko atd.) – používá ho mimo jiné MPO ČR pro benchmarking.

### Průměrné náklady kapitálu – WACC

**WACC** (Weighted Average Cost of Capital) jsou průměrné náklady všech zdrojů financování vážené jejich podílem na celkovém kapitálu:

$$WACC = \frac{VK}{VK + CK} \times r_e + \frac{CK}{VK + CK} \times r_d \times (1 - t)$$

kde:
- $VK$ = vlastní kapitál (tržní hodnota), $CK$ = cizí úročený kapitál (tržní hodnota)
- $r_e$ = požadovaná výnosnost vlastního kapitálu
- $r_d$ = úroková sazba cizího kapitálu
- $t$ = sazba daně z příjmů

WACC je **minimální požadovaná výnosnost investice** – investice s výnosností nad WACC tvoří hodnotu pro vlastníky, pod WACC ji ničí.

---

## Finanční páka a optimalizace kapitálové struktury

### Efekt finanční páky (Financial Leverage)

Použití cizího kapitálu může zvýšit rentabilitu vlastního kapitálu (ROE), pokud je rentabilita aktiv (ROA) vyšší než cena cizího kapitálu.

$$ROE = ROA + (ROA - r_d) \times \frac{CK}{VK}$$

- Pokud **ROA > $r_d$**: zvyšování zadluženosti zvyšuje ROE → páka působí **kladně**.
- Pokud **ROA < $r_d$**: zvyšování zadluženosti snižuje ROE → páka působí **záporně** (destrukce hodnoty).

> *Příklad*: ROA = 10 %, cena dluhu = 6 %, daň 21 %, CK/VK = 1. Páka zvyšuje ROE o (10 % − 6 % × 0,79) × 1 ≈ 5,3 procentního bodu.

Cizí kapitál je zpravidla **levnější** než vlastní (věřitelé nesou menší riziko) → WACC klesá s rostoucím zadlužením. Ale vysoké zadlužení zvyšuje **finanční riziko** → věřitelé i vlastníci požadují vyšší výnosy → nad určitou mírou WACC roste.

**Optimální kapitálová struktura** minimalizuje WACC (a maximalizuje hodnotu firmy). V praxi ji ovlivňují: odvětví, daňové prostředí, přístup k trhům, preference vlastníků.

---

## Zadlužení, překapitalizování, podkapitalizování

### Ukazatele zadluženosti

**Celková zadluženost (Debt Ratio)**

$$\text{Celková zadluženost} = \frac{\text{Cizí zdroje}}{\text{Aktiva celkem}} \times 100 \; [\%]$$

Banky zpravidla považují za přijatelné cca 50–60 %. Nad 70 % je firma vysoce zadlužena.

**Koeficient samofinancování (Equity Ratio)**

$$\text{Koeficient samofinancování} = \frac{\text{Vlastní kapitál}}{\text{Aktiva celkem}} \times 100 \; [\%]$$

Doplněk celkové zadluženosti do 100 %.

**Ukazatel zadluženosti vlastního kapitálu (Debt-to-Equity)**

$$D/E = \frac{\text{Cizí zdroje}}{\text{Vlastní kapitál}}$$

**Úrokové krytí (Interest Coverage)**

$$\text{Úrokové krytí} = \frac{EBIT}{\text{Nákladové úroky}}$$

Kolikrát provozní zisk pokryje nákladové úroky. Hodnota < 1 znamená, že firma nevydělá ani na úroky. Banky typicky požadují > 3.

### Překapitalizování (Overcapitalization)

Firma má **příliš mnoho vlastního kapitálu** v poměru k aktivům a tržbám. Symptomy:
- Nízká zadluženost, velké množství hotovosti nebo nevyužitého majetku.
- ROE je nízké, protože jmenovatel (VK) je velký.
- Firma nevyužívá přínosy finanční páky.

Řešení: výplata dividend, zpětný odkup akcií, investice do expanze.

### Podkapitalizování (Undercapitalization)

Firma má **příliš málo vlastního kapitálu** vůči potřebám podnikání. Symptomy:
- Vysoká zadluženost, problémy s likviditou.
- Závislost na krátkodobých cizích zdrojích k financování dlouhodobého majetku (**porušení zlatého pravidla financování**: dlouhodobý majetek by měl být financován dlouhodobými zdroji).
- Riziko platební neschopnosti, problém získat nové úvěry.

**Zlaté bilanční pravidlo**: Dlouhodobý majetek = dlouhodobé zdroje (VK + dlouhodobý CK). Oběžný majetek ≥ krátkodobé CZ.

---

## Likvidita

### Likvidita vs. likvidnost

- **Likvidnost** je vlastnost **aktiva** – jak rychle a bez ztráty hodnoty lze aktivum přeměnit na peníze. Peníze jsou nejlikvidnější, pozemky nejméně.
- **Likvidita podniku** je schopnost **podniku** včas a v plné výši splácet své závazky. Podnik může být ziskový, ale nelikvidní (vydělává, ale nemá hotovost na zaplacení faktury).

### Ukazatele likvidity

Ukazatele porovnávají oběžný majetek (v různé míře likvidity) s krátkodobými závazky.

**Běžná likvidita (Current Ratio) – likvidita 3. stupně**

$$L_3 = \frac{\text{Oběžná aktiva}}{\text{Krátkodobé cizí zdroje}}$$

Doporučené rozmezí: **1,5 – 2,5**.

Interpretace: kolikrát pokryjí oběžná aktiva krátkodobé závazky. Pod 1 → podnik nemá dostatek oběžných aktiv na pokrytí krátkodobých závazků → hrozí platební neschopnost.

**Pohotová likvidita (Quick Ratio / Acid-Test) – likvidita 2. stupně**

$$L_2 = \frac{\text{Oběžná aktiva} - \text{Zásoby}}{\text{Krátkodobé cizí zdroje}}$$

Doporučené rozmezí: **1,0 – 1,5**.

Zásoby jsou nejméně likvidní složkou OA (musíme je nejdřív prodat) → jejich vyloučení dává realističtější obraz.

**Okamžitá likvidita (Cash Ratio) – likvidita 1. stupně**

$$L_1 = \frac{\text{Peněžní prostředky a krátkodobý finanční majetek}}{\text{Krátkodobé cizí zdroje}}$$

Doporučené rozmezí: **0,2 – 0,5** (ČNB metodika: min. 0,2).

Nejpřísnější ukazatel – zahrnuje jen skutečně okamžitě dostupné prostředky.

> **Pozor**: Příliš vysoká likvidita není vždy dobrá – velké zásoby hotovosti jsou nevýnosné, peníze „leží ladem". Cílem je optimální, ne maximální likvidita.

### Pracovní kapitál (Working Capital)

$$\text{Čistý pracovní kapitál (ČPK)} = \text{Oběžná aktiva} - \text{Krátkodobé cizí zdroje}$$

Kladný ČPK = „polštář bezpečnosti" – firma má přebytek oběžných aktiv nad krátkodobými závazky. Záporný ČPK = krátkodobými zdroji jsou financována dlouhodobá aktiva → rizikové.
