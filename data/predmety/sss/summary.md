# Průzkumová analýza dat (EDA)

## 1. Typy proměnných

| Typ               | Podtyp    | Vysvětlení                                  | Příklad                                     |
| ----------------- | --------- | ------------------------------------------- | ------------------------------------------- |
| **Kvantitativní** | Spojité   | Mohou nabývat libovolné hodnoty v intervalu | výška, váha, příjem                         |
|                   | Diskrétní | Celá čísla, počty                           | počet studentů, vadných výrobků             |
| **Kvalitativní**  | Nominální | Kategorie bez pořadí                        | pohlaví, barva očí, region                  |
|                   | Ordinální | Kategorie s uspořádáním                     | věková kategorie, známka, míra spokojenosti |

---

## 2. Popisná statistika kvantitativních proměnných

### Charakteristiky polohy

- **Průměr** – aritmetický průměr všech hodnot
- **Medián** – prostřední hodnota seřazeného souboru (odolný vůči odlehlým hodnotám)
- **Modus** – nejčastěji se vyskytující hodnota

### Charakteristiky variability

- **Rozptyl** – průměrná kvadratická odchylka od průměru
- **Směrodatná odchylka** – odmocnina rozptylu, ve stejných jednotkách jako data
- **Variační koeficient** – relativní míra variability (v %)

### Tvar rozdělení

- **Šikmost** – míra asymetrie rozdělení (pravostranná/levostranná)
- **Špičatost** – míra koncentrace hodnot kolem průměru a "těžkosti" konců

### Kvantilové charakteristiky

- **Kvantily** – hodnoty dělící data na stejné části
- **Kvartily** – Q1 (25 %), Q2/medián (50 %), Q3 (75 %)
- **Decily** – dělení na 10 skupin

### Vizualizace

- **Histogram** – zobrazení tvaru rozdělení dat
- **Box plot** – přehled kvartilů, mediánu a odlehlých hodnot
- **Bodový graf** – vztah dvou proměnných

---

## 3. Popisná statistika kvalitativních proměnných

### Číselné charakteristiky

- **Absolutní četnosti** – počet výskytů každé kategorie
- **Relativní četnosti** – podíl kategorie na celku (v %)
- **Kumulativní četnosti** – součet četností od začátku

### Vizualizace

- **Sloupcový graf** – porovnání četností kategorií
- **Koláčový graf** – znázornění struktury celku (podíly 100 %)

# Korelační analýza

## Motivace: kdy korelaci potřebujeme?

Korelace měří, zda se dvě veličiny mění společně – např. výška a hmotnost, počet hodin učení a výsledek testu. **Korelace ≠ kauzalita** – pouze proto, že dvě věci spolu souvisejí, neznamená, že jedna způsobuje druhou.

## Co korelace říká (a co neříká)

- **Říká:** směr vztahu (kladný/záporný) a sílu lineární závislosti
- **Neříká:** že jedna proměnná ovlivňuje druhou, že vztah je nutně přímka, nebo že nejsou odlehlé hodnoty

## Scatterplot (bodový graf)

První krok před výpočtem – vizualizace dat. Hledáme směřování, tvar a případné odlehlé hodnoty. Pearsonova korelace funguje nejlépe pro přibližně lineární vztahy.

## Od kovariance ke korelaci

**Kovariance** měří, zda se proměnné mění společně, ale její velikost závisí na jednotkách měření. **Korelace** je standardizovaná kovariance – bezrozměrná veličina mezi -1 a 1.

## Pearsonův korelační koeficient (r)

- r = 1: silná kladná lineární souvislost
- r = -1: silná záporná lineární souvislost
- r = 0: žádná lineární souvislost

Orientační pravidlo pro interpretaci |r|: 0.00–0.19 velmi slabá, 0.20–0.39 slabá, 0.40–0.59 střední, 0.60–0.79 silná, 0.80–1.00 velmi silná.

## Spearmanův koeficient korelace

Alternativa k Pearsonovi – měří **monotónní** (ne nutně lineární) závislost. Pracuje s pořadím hodnost (ranky) místo přesných čísel, je odolnější vůči odlehlým hodnotám.

# Regresní model

## 1. Jednoduchá lineární regrese: odhad parametrů

**Koncept:** Popisuje vztah mezi dvěma proměnnými – vysvětlující X a závislou Y. Cílem je najít přímku, která nejlépe aproximuje systematickou závislost Y na X.

**Metoda nejmenších čtverců (MNČ/OLS):** Minimalizuje součet čtverců svislých odchylek (reziduí) pozorování od regresní přímky. Výsledkem jsou odhady parametrů a (průsečík) a b (směrnice).

**Normální rovnice:** Soustava dvou rovnic vzniklá parciálními derivacemi kritériální funkce, ze které se odvodí uzavřené vzorce pro parametry.

---

## 2. Jednoduchá lineární regrese: shoda modelu a dat

**Koeficient determinace R²:** Měří, jaký podíl variability závislé proměnné model vysvětluje. Hodnota mezi 0 a 1, vyšší = lepší přizpůsobení. Rozklad variability: TSS = ESS + RSS (celková = vysvětlená + nevysvětlená).

**Odhad rozptylu chyb:** Nevysvětlená variabilita (RSS) slouží k odhadu σ² – rozptylu náhodné složky. Stupně volnosti jsou n-2 (odhadujeme dva parametry).

---

## 3. Jednoduchá lineární regrese: test parametrů

**t-test směrnice:** Testuje hypotézu, zda je lineární vztah statisticky významný (H₀: β₁ = 0). Testová statistika t = b / s_b má Studentovo rozdělení s n-2 stupni volnosti.

**ANOVA a F-test:** Celková významnost modelu. F = MSR/MSE, kde MSR je vysvětléná variabilita na stupeň volnosti a MSE je průměrná nevysvětléná variabilita. Ve jednoduché regresi platí F = t².

---

## 4. Vícenásobná lineární regrese

**Koncept:** Závislá proměnná je vysvětlována více nezávislými proměnnými současně. Model: y = a + b₁x₁ + b₂x₂ + ... + bₖxₖ + ε.

**Maticový zápis:** Kompaktní forma y = Xβ + ε, kde X je matice vysvětlujících proměnných (první sloupec jedniček). Odhad: β̂ = (X'X)⁻¹X'y.

**Upravený R² (adjusted):** Penalizuje přidávání nových proměnných – koriguje čistý R², který by vždy rostl s počtem regresorů.

**Cookova vzdálenost:** Měří vlivnost jednotlivých pozorování – jak moc by se změnily odhady parametrů, kdybychom daný bod vynechali.

---

## 5. MNČ: předpoklady

**Linearita v parametrech:** Model musí být lineární v odhadovaných koeficientech (ne nutně v proměnných).

**Normalita reziduí:** Náhodná složka má normální rozdělení N(0, σ²). Důležité pro validitu t-testů a intervalů spolehlivosti, u velkých vzorků méně kritické.

**Homoskedasticita:** Konstantní rozptyl chyb nezávislý na hodnotách X. Porušení vede k neefektivním odhadům a zkresleným testům.

**Whiteův test:** Ověřuje homoskedasticitu pomocí pomocné regrese reziduí na původní proměnné, jejich čtverce a interakce. Testová statistika LM = n·R² má χ² rozdělení.

**Absence multikolinearity:** Vysvětlující proměnné nesmějí být lineárně závislé. Vede k nestabilním odhadům a velkým směrodatným chybám. Diagnostika: VIF (variance inflation factor).

---

## 6. Jednoduchá nelineární regrese

**Linearizovatelné modely:** Nelineární vztahy převeditelné na lineární regresi vhodnou transformací (např. logaritmování, substituce).

**Parabolický model:** Y = a + bx + cx² – kvadratická závislost, modeluje zakřivené vztahy.

**Hyperbolický model:** Y = a + b/x – klesající nelineární vztahy, transformací z = 1/x se převede na lineární.

**Logaritmický model:** Y = a + b·ln(x) – zpomalující růst, citlivost na relativní změny X.

**Exponenciální model:** Y = a·e^(bx) – konstantní tempo růstu, linearizuje se logaritmováním: ln(Y) = ln(a) + bx.

**Skutečně nelineární modely:** Vyžadují numerickou optimalizaci (iterační metody), nelze převést na lineární regresi.

# Úvod do analýzy časových řad

## 1. Úvodem do tématu

### Co je časová řada?

Časová řada je posloupnost hodnot statistického znaku uspořádaných v čase. Jednoduše řečeno: sledujeme, jak se nějaká veličina mění v průběhu času. Příklady: roční produkce pšenice, měsíční tržby firmy, denní teplota vzduchu, počet nezaměstnaných podle čtvrtletí.

### Cíl analýzy časových řad

Hlavním cílem je popsat vývoj ukazatele v čase, identifikovat základní tendence, měřit dynamiku změn, odhalit složky vývoje (trend, sezónnost, cykličnost, náhodné vlivy) a predikovat budoucí vývoj. Odpovídá na otázky jako: Jak se ukazatel mění? Roste, klesá, stagnuje? Jakou hodnotu lze očekávat v budoucnu?

### Druhy časových řad

- **Podle povahy ukazatele**: okamžikové (stav k určitému datu, např. počet obyvatel k 31.12.) vs. intervalové/tokové (objem za určité období, např. měsíční tržby)
- **Podle časového kroku**: roční, čtvrtletní, denní
- **Podle počtu ukazatelů**: jednorozměrné (jeden ukazatel) vs. vícerozměrné (více ukazatelů)

### Složky časové řady

- **Trend** – dlouhodobá tendence růstu nebo poklesu
- **Sezónní složka** – pravidelné kolísání během roku
- **Cyklická složka** – dlouhodobější vlnění (např. hospodářský cyklus)
- **Náhodná složka** – nepravidelné vlivy

---

## 2. Elementární charakteristiky

### Charakteristiky úrovně

Popisují typickou velikost sledovaného ukazatele. Nejčastěji se používají různé druhy průměrů – aritmetický průměr pro intervalové řady, chronologický průměr pro momentové řady (lepší vyjádření průměrného stavu v čase).

### Míry dynamiky

Zachycují změny mezi jednotlivými obdobími. Rozlišujeme absolutní změny (v původních jednotkách) a relativní změny (poměrově, v procentech). Podle způsobu srovnání dělíme na řetězové (srovnání s předchozím obdobím) a bazické (srovnání s pevným základem).

### Klíčové pojmy

- **První diference** – rozdíl dvou po sobě jdoucích hodnot, sleduje bezprostřední změny
- **Průměrný absolutní přírůstek** – průměrná změna ukazatele za jedno období
- **Koeficient růstu** – relativní změna mezi dvěma hodnotami (řetězový nebo bazický index)
- **Tempo růstu** – koeficient růstu vyjádřený v procentech

---

## 3. Analýza neperiodických časových řad

### Trend v časové řadě

Trend vyjadřuje dlouhodobou tendenci vývoje. Může být rostoucí, klesající nebo stagnující. Cílem trendové analýzy je vyjádřit dlouhodobý vývoj matematickou funkcí, odstranit náhodné kolísání a umožnit predikci.

### Mechanické vyrovnání – metoda klouzavých průměrů

Jednoduchá metoda vyhlazování, která nevyžaduje znát tvar trendu. Princip: každá hodnota je nahrazena průměrem několika sousedních hodnot. Výhody: potlačí náhodné výkyvy, zvýrazní dlouhodobý trend. Nevýhody: ztráta hodnot na začátku a konci řady, neumožňuje snadnou extrapolaci, výsledek závisí na volbě délky okna.

### Trendová funkce

Trend lze popsat matematickou funkcí. Nejjednodušší je **lineární trend** (přímka), kde parametr _a_ představuje výchozí úroveň a parametr _b_ směrnici (průměrnou změnu za období). Parametry se odhadují metodou nejmenších čtverců – minimalizuje součet čtverců odchylek od skutečných hodnot.

### Hodnocení kvality trendu

**Koeficient determinace (R²)** vyjadřuje, jak velkou část variability časové řady trend vysvětluje. Hodnota 0–1, čím vyšší, tím lépe trend aproximuje vývoj. Např. R² = 0,85 znamená, že 85 % variability je vysvětleno trendem.

### Predikce pomocí trendu

- **Bodový odhad** – jedna konkrétní predikovaná hodnota dosazením do trendové funkce
- **Intervalový odhad** – rozmezí, ve kterém se budoucí hodnota nachází s danou pravděpodobností (např. 95% predikční interval)

**Pseudoprognoza** – metoda ověření kvality predikce: zkrátíme řadu o poslední období, odhadneme model na zkrácených datech a porovnáme predikci se skutečnou hodnotou. Relativní chyba prognózy říká, o kolik procent se predikce liší od reality.

---

## 4. Analýza periodických časových řad

### Časové řady se sezónností

U mnoha řad se kromě trendu objevuje pravidelné sezónní kolísání (typicky u měsíčních/čtvrtletních dat způsobené počasím, zvyklostmi, ekonomikou). Cílem je oddělit trendovou a sezónní složku.

### Dekompozice časové řady

Rozklad řady na jednotlivé složky. Používá se **multiplikativní model** (y = trend × sezónnost) nebo aditivní model (y = trend + sezónnost).

### Sezónní index

Vyjadřuje, o kolik se skutečná hodnota odchyluje od trendu. Vypočítá se jako podíl skutečné a trendové hodnoty. Interpretace: index > 1 znamená hodnotu nad trendem, < 1 pod trendem. Např. 1,20 = o 20 % výš než trend.

### Postup analýzy

1. Odhadnout trendovou složku (např. lineární trend)
2. Odstranit trend ze série
3. Vypočítat sezónní indexy podle období (12 pro měsíční data, 4 pro čtvrtletní)
4. Normalizovat indexy (jejich průměr musí být 1)
5. Očistit řadu od sezónnosti – výsledkem je řada bez sezónních vlivů, vhodná pro další analýzu a predikci

Dekompozice umožňuje lépe pochopit strukturu řady, odstranit sezónnost a zpřesnit predikci budoucího vývoje.

# Analýza vztahů mezi kvalitativními znaky

## Základní principy

- **Kvalitativní znaky** = kategoriální proměnné (např. ano/ne, barva, typ)
- Analýza zjišťuje, zda mezi nimi existuje **závislost** (asociace)

---

## Chi-kvadrát test (χ²)

**K čemu slouží:** Testuje nezávislost dvou kategoriálních proměnných v kontingenční tabulce.

**Princip:** Porovnává **pozorované četnosti** (co jsme naměřili) s **očekávanými četnostmi** (co by platilo při nezávislosti).

**Kdy ho použít:**

- Pro tabulky typu r×s (řádky × sloupce)
- Pokud očekávané četnosti jsou dostatečně velké (ideálně ≥5)

**Výsledek:** p-hodnota – pokud je malá (<0,05), zamítáme hypotézu o nezávislosti.

---

## Fisherův exaktní test

**K čemu slouží:** Alternativa chi-kvadrátu pro **malé vzorky** (když očekávané četnosti <5).

**Princip:** Vypočítá přesnou pravděpodobnost konkrétní tabulky za podmínky nezávislosti.

**Kdy ho použít:** Především pro tabulky 2×2 s malými četnostmi.

---

## Relativní riziko (RR)

**Co to je:** Poměr pravděpodobnosti "úspěchu" (např. onemocnění) u exponované skupiny vs. neexponované.

**Interpretace:**

- RR = 1 → žádný rozdíl
- RR > 1 → vyšší riziko u exponovaných
- RR < 1 → nižší riziko (ochranný efekt)

**Použití:** Hlavně v **kohortových studiích** (sledujeme skupiny v čase).

---

## Poměr šancí (OR – Odds Ratio)

**Co to je:** Poměr šancí (odds) výskytu jevu mezi exponovanými a neexponovanými. Na rozdíl od RR pracuje se šancemi, ne přímo s pravděpodobnostmi.

**Použití:**

- **Případové studie** (case-control)
- **Logistická regrese** (základní měřítko vlivu prediktorů)

---

## Analýza reziduí

**K čemu slouží:** Chi-kvadrát říká, že závislost existuje, ale ne **kde**. Rezidua identifikují konkrétní buňky, které se významně liší od očekávání.

**Typy:**

- **Neadjustovaná** – jednoduchý rozdíl
- **Standardizovaná (adjustovaná)** – zohledňují velikost vzorku, lze testovat statisticky

**Znaménkové schéma:** Rychlá vizualizace – plusy a mínusy ukazují, kde je pozorovaná četnost vyšší/nižší než očekávaná.

---

## Shrnutí postupu

1. Nejprve chi-kvadrát test (pokud jsou četnosti dostatečné)
2. Pokud je test významný → analýza reziduí pro lokalizaci závislosti
3. Pro malé četnosti → Fisherův exaktní test
4. V tabulkách 2×2 lze doplnit RR a OR pro interpretaci síly vztahu
