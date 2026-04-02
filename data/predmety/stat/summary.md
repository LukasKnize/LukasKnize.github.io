
## 1. Základy pravděpodobnosti

### 1.1 Náhodný jev a jeho vlastnosti

**Náhodný jev** je výsledek náhodného pokusu, o kterém lze jednoznačně rozhodnout, zda nastal či nenastal. Základní typy jevů:

- **Jistý jev** — nastane při každém provedení pokusu.
- **Nemožný jev** — nemůže nikdy nastat.
- **Náhodný jev** — může, ale nemusí nastat.

**Neslučitelné (disjunktní) jevy** jsou takové, které nemohou nastat současně — pokud nastane jeden, nemůže nastat druhý. Formálně: $A \cap B = \emptyset$.

**Opačné (komplementární) jevy** musí splňovat dvě podmínky: (1) jsou neslučitelné ($A \cap B = \emptyset$) a (2) dohromady tvoří jistý jev ($A \cup B = \Omega$). Pokud se jev $A$ neuskuteční, nutně se uskuteční jev opačný $\bar{A}$, přičemž $P(\bar{A}) = 1 - P(A)$.

**Průnik jevů** ($A \cap B$) představuje jev, který nastane tehdy a jen tehdy, když nastanou oba jevy současně.

**Sjednocení jevů** ($A \cup B$) nastane, pokud nastane alespoň jeden z jevů.

### 1.2 Stanovení pravděpodobnosti — tři základní metody

1. **Klasická (apriorní) pravděpodobnost** — poměr počtu příznivých výsledků $m$ ku celkovému počtu všech stejně možných výsledků $n$: $P(A) = \frac{m}{n}$.
2. **Statistická (empirická, aposteriorní) pravděpodobnost** — při rostoucím počtu pokusů kolísá relativní četnost jevu ve stále užších mezích kolem určitého čísla, které považujeme za pravděpodobnost jevu. Tento přístup vychází ze zákona velkých čísel.
3. **Subjektivní pravděpodobnost** — odhad pravděpodobnosti na základě odborného úsudku, zkušeností a dostupných informací.

### 1.3 Věta o sčítání pravděpodobností

Použijeme, když nás zajímá pravděpodobnost, že nastane **alespoň jeden** z více jevů (sjednocení):

$$P(A \cup B) = P(A) + P(B) - P(A \cap B)$$

Pro neslučitelné jevy se zjednodušuje na $P(A \cup B) = P(A) + P(B)$.

### 1.4 Věta o násobení pravděpodobností

Použijeme, když nás zajímá pravděpodobnost, že nastanou **oba** jevy současně (průnik). Pro nezávislé jevy:

$$P(A \cap B) = P(A) \cdot P(B)$$

Pro závislé jevy s podmíněnou pravděpodobností:

$$P(A \cap B) = P(A) \cdot P(B|A)$$

### 1.5 Věta o úplné pravděpodobnosti

Použijeme, pokud se celkový prostor výsledků dá rozložit na navzájem neslučitelné a vyčerpávající „příčiny" $B_1, B_2, \ldots, B_n$ a chceme zjistit celkovou pravděpodobnost jevu $A$:

$$P(A) = \sum_{i=1}^{n} P(B_i) \cdot P(A|B_i)$$

---

## 2. Náhodná veličina a její rozdělení

### 2.1 Co je náhodná veličina

**Náhodná veličina** je funkce, která každému výsledku náhodného pokusu přiřazuje reálné číslo. Pokud je výsledek pokusu charakterizován kvantitativně (číslem), jedná se o náhodnou veličinu. Pokud je výsledek charakterizován slovně (kvalitativně), jedná se o **náhodný jev**.

### 2.2 Diskrétní vs. spojitá náhodná veličina

- **Diskrétní NV** nabývá izolovaných, od sebe navzájem oddělených hodnot (konečně nebo spočetně mnoho). Její rozdělení popisuje **pravděpodobnostní funkce** $P(X = x_i) = p_i$.
- **Spojitá NV** nabývá libovolných hodnot z určitého intervalu. Její rozdělení popisuje **hustota pravděpodobnosti** $f(x)$, přičemž pravděpodobnost se počítá jako plocha pod křivkou hustoty.

### 2.3 Zákon rozdělení pravděpodobnosti

Pravidlo, které každé hodnotě nebo množině hodnot (intervalu) přiřazuje pravděpodobnost, že náhodná veličina nabude této hodnoty nebo hodnoty z tohoto intervalu, se nazývá **zákon rozdělení pravděpodobnosti** (neboli **rozdělení náhodné veličiny**).

### 2.4 Přehled důležitých rozdělení

**Binomické rozdělení** $\text{Bi}(n, p)$ — modeluje počet úspěchů v $n$ nezávislých pokusech se stejnou pravděpodobností úspěchu $p$. Odpovídá situaci **výběru s vracením** (pravděpodobnost se nemění mezi pokusy).

**Hypergeometrické rozdělení** — modeluje počet úspěchů při **výběru bez vracení** z konečné populace. Pravděpodobnost úspěchu se mění v závislosti na předchozích výsledcích.

**Poissonovo rozdělení** $\text{Po}(\lambda)$ — modeluje počet výskytů vzácného jevu za určitý časový úsek nebo na určité ploše. Parametr $\lambda$ je průměrný počet výskytů.

**Rovnoměrné (uniformní) rozdělení** — spojitá NV s konstantní hustotou pravděpodobnosti na daném intervalu. Používá se, když všechny hodnoty z intervalu jsou stejně pravděpodobné (např. generátory náhodných čísel, zaokrouhlovací chyby).

**Exponenciální rozdělení** — modeluje dobu mezi dvěma po sobě následujícími výskyty jevu, resp. dobu čekání na první výskyt. Používá se v **teorii front** a teorii spolehlivosti.

**Normální (Gaussovo) rozdělení** $N(\mu, \sigma^2)$ — nejdůležitější rozdělení ve statistice. Hustota má tvar zvonové křivky, symetrické kolem střední hodnoty $\mu$. Směrodatná odchylka $\sigma$ určuje šíři křivky.

### 2.5 Centrální limitní věta a zákon velkých čísel

**Zákon velkých čísel** — s rostoucím počtem pokusů se empirické (výběrové) hodnoty přibližují hodnotám teoretickým. Jedná se o pravděpodobnostní konvergenci.

**Centrální limitní věta (CLV)** — součet (resp. průměr) velkého počtu nezávislých nebo omezeně závislých náhodných veličin má přibližně normální rozdělení, bez ohledu na rozdělení jednotlivých veličin. Variabilita se vzájemně „ruší". Konvergence má charakter **konvergence v distribuci**.

**Moivrova–Laplaceova věta** — speciální případ CLV pro binomické rozdělení: s rostoucím $n$ konverguje binomické rozdělení k normálnímu.

### 2.6 Čebyševovy nerovnosti

Umožňují odhadnout pravděpodobnost, že se náhodná veličina odchýlí od své střední hodnoty o více než danou mez, i **bez znalosti konkrétního rozdělení** veličiny. Jsou tedy užitečné právě tehdy, když rozdělení neznáme.

---

## 3. Popisná statistika

### 3.1 Základní pojmy

**Statistický znak** je vlastnost statistické jednotky, která je předmětem zkoumání (např. cena jablek, výška osob, pohlaví). Rozlišujeme znaky **kvantitativní** (vyjádřitelné číslem) a **kvalitativní** (slovní kategorie).

**Základní soubor (populace)** je množina všech statistických jednotek, o nichž chceme získat informace. Má přesně definovaný rozsah (věcný, prostorový, časový).

**Výběrový soubor** je podmnožina základního souboru, na které provádíme měření. Musí být reprezentativní, aby bylo možné zobecnit závěry na celou populaci.

### 3.2 Charakteristiky polohy (míry úrovně)

Informují o tom, kolem jaké hodnoty jsou data soustředěna — udávají „typickou" nebo „středovou" hodnotu souboru.

**Aritmetický průměr** — součet všech hodnot dělený jejich počtem. Citlivý na odlehlé hodnoty. **Vážený aritmetický průměr** se používá, pokud jednotlivé hodnoty mají různou důležitost (váhu) — typicky při práci s intervalovým rozdělením četností.

**Medián** — hodnota, která dělí seřazený soubor na dvě stejně velké poloviny. Robustní vůči odlehlým hodnotám. Vhodný, pokud je rozdělení dat silně zešikmené.

**Modus** — hodnota s nejvyšší četností. Jediná míra polohy použitelná i pro **kvalitativní znaky**.

**Kvartily** — dělí seřazený soubor na čtvrtiny (dolní kvartil $Q_1$, medián $Q_2$, horní kvartil $Q_3$).

### 3.3 Charakteristiky variability (míry rozptýlení)

Vyjadřují, jak moc jsou data rozptýlená kolem své středové hodnoty.

**Rozptyl (variance)** — průměr čtverců odchylek od střední hodnoty. Vyjadřuje variabilitu jednotlivých hodnot znaku mezi sebou a zároveň ve smyslu odchylek od průměru.

**Směrodatná odchylka** — odmocnina z rozptylu, ve stejných jednotkách jako data. Pokud jsou hodnoty seskupeny blízko střední hodnoty, směrodatná odchylka bude **malá**. Pokud jsou rozptýleny daleko, bude **velká**.

**Průměrná absolutní odchylka** — průměr absolutních hodnot odchylek od střední hodnoty.

**Relativní míry variability** (např. variační koeficient) slouží k porovnání variability souborů s různými jednotkami nebo různým řádem průměrů. Variační koeficient je poměr směrodatné odchylky a průměru, často vyjádřený v procentech.

### 3.4 Charakteristiky šikmosti a špičatosti

**Míry šikmosti** porovnávají stupeň nahuštěnosti hodnot kolem středu se stupněm nahuštěnosti v „chvostech" rozložení. Symetrické rozdělení má šikmost nulovou; kladná šikmost = pravý chvost je delší; záporná šikmost = levý chvost delší.

---

## 4. Metody výběru

### 4.1 Úplné vs. neúplné statistické zjišťování

**Úplné (vyčerpávající) zjišťování** — zkoumáme všechny jednotky základního souboru (sčítání lidu, census). **Neúplné zjišťování** — zkoumáme pouze část jednotek (výběrové šetření) a výsledky zobecňujeme na celou populaci.

### 4.2 Náhodný výběr

Každá jednotka základního souboru má známou nenulovou pravděpodobnost být vybrána. Techniky:

- **Losování** — klasická technika, vhodná pro malé soubory.
- **Tabulky náhodných čísel** — generování výběru pomocí předem připravených tabulek.
- **Generátor náhodných čísel** — nejčastěji používaná moderní technika.

Pozn.: **Anketa** nepatří mezi techniky náhodného výběru, protože respondenti se sami rozhodují, zda se zúčastní.

**Prostý náhodný výběr** — všechny jednotky mají stejnou pravděpodobnost být vybrány a výběr každé jednotky je nezávislý na ostatních.

### 4.3 Výběr s vracením vs. bez vracení

- **Výběr s vracením** — vybraná jednotka se vrací zpět do souboru, může být vybrána znovu. Pravděpodobnost vybrání zůstává stejná ve všech krocích → binomické rozdělení.
- **Výběr bez vracení** — vybraná jednotka se nevrací, nemůže být vybrána znovu. Pravděpodobnost vybrání se mění → hypergeometrické rozdělení. Všechny zbývající jednotky mají v každém kroku stejnou pravděpodobnost vybrání.

### 4.4 Další typy výběru

**Oblastní (stratifikovaný) výběr** — základní soubor se rozdělí do několika samostatných homogenních skupin (strat), v rámci každé skupiny se provede prostý náhodný výběr.

**Metoda základního masívu** — adresně se oslovuje pouze určitá vybraná část statistických jednotek (obvykle největší nebo nejdůležitější jednotky, které pokrývají většinu zkoumaného znaku).

**Kvótní záměrný výběr** — při zařazování jednotek do výběru spolurozhodují logická hlediska a názory výzkumníka. Výběr je sestaven tak, aby struktura výběrového souboru odpovídala známým charakteristikám populace (kvóty dle pohlaví, věku apod.). Jedná se o **nenahodilý** výběr.

### 4.5 Anketa — výhody a nevýhody

Výhody: nízké náklady, jednoduchost provedení, možnost oslovit velký počet lidí. Nevýhody: nízká návratnost, **nereprezentativnost** (odpovídají jen ti, kteří chtějí), nelze zobecnit na populaci, riziko zkreslení (self-selection bias).

---

## 5. Bodové a intervalové odhady

### 5.1 Bodový odhad

Bodový odhad je konkrétní číselná hodnota, která slouží jako odhad neznámého parametru základního souboru (např. výběrový průměr $\bar{x}$ jako odhad střední hodnoty $\mu$).

Požadované vlastnosti bodového odhadu:

- **Nestrannost (nevychýlenost)** — střední hodnota odhadu se rovná skutečné hodnotě odhadovaného parametru. Odhad systematicky nenadhodnocuje ani nepodhodnocuje.
- **Konzistence** — s rostoucím rozsahem výběru se odhad stává přesnějším, konverguje k pravé hodnotě parametru.
- **Postačitelnost (dostatečnost)** — odhad využívá veškerou informaci o odhadovaném parametru, která je obsažena ve výběru. Žádná další statistika nepřidá novou informaci.
- **Vydatnost (eficience)** — ze všech nestranných odhadů má nejmenší rozptyl.

### 5.2 Intervalový odhad (interval spolehlivosti)

Interval spolehlivosti je rozmezí hodnot, ve kterém s danou pravděpodobností (spolehlivostí) leží skutečná hodnota parametru.

**Spolehlivost odhadu** $(1 - \alpha)$ — pravděpodobnost, že interval spolehlivosti pokrývá skutečnou hodnotu parametru. Obvykle se volí 0,95 nebo 0,99.

**Přesnost odhadu (přípustná chyba)** — polovina šířky intervalu spolehlivosti. Čím užší interval, tím přesnější odhad.

Klíčové vztahy:

- Zvětšení **rozsahu výběru** $n$ → interval spolehlivosti se **zúží** (přesnost se zvýší).
- Zvýšení **spolehlivosti** $(1 - \alpha)$ → interval spolehlivosti se **rozšíří** (přesnost se sníží). Spolehlivost a přesnost jsou tedy při konstantním $n$ v protikladu.
- Pokud se šířka intervalu zvyšuje → spolehlivost se **zvyšuje** (ale přesnost klesá).

### 5.3 Vzorec přípustné chyby

Vzorec pro přípustnou chybu odhadu lze použít k:

- Stanovení **rozsahu výběru** při dané spolehlivosti.
- Stanovení **intervalu spolehlivosti** při daném rozsahu výběru.
- Stanovení **přesnosti odhadu** při dané šířce intervalu.

Nelze jej použít ke stanovení pravděpodobnosti chyby prvého druhu — ta je záležitostí testování hypotéz.

### 5.4 Interval spolehlivosti pro rozptyl

Interval spolehlivosti pro odhad rozptylu základního souboru **není symetrický** vzhledem k hodnotě výběrového rozptylu $s^2$, protože je založen na $\chi^2$ rozdělení, které je nesymetrické.

### 5.5 Intervalový odhad korelačního koeficientu (malé výběry)

Při malých rozsazích výběrů se pro intervalový odhad korelačního koeficientu používá **Fisherova Z-transformace**: hodnota $r$ se transformuje na veličinu s přibližně normálním rozdělením, pro ni se sestrojí interval spolehlivosti a výsledek se zpětně transformuje.

---

## 6. Testování statistických hypotéz

### 6.1 Základní pojmy

**Statistická hypotéza** je jakékoli tvrzení o tvaru nebo charakteristikách rozdělení jednoho či několika statistických znaků.

**Nulová hypotéza** $H_0$ — tvrzení, že neexistuje (statisticky významný) rozdíl mezi dvěma nebo více charakteristikami. Je to hypotéza, kterou testujeme a případně zamítáme.

**Alternativní hypotéza** $H_1$ — tvrzení opačné k $H_0$, přijímáme ji v případě zamítnutí nulové hypotézy. Formuluje se podle vědecké hypotézy výzkumníka.

### 6.2 Testové kritérium a kritická hodnota

**Testové kritérium (testová statistika)** je hodnota vypočtená z naměřených dat výběrového souboru. Shrnuje informaci obsaženou ve výběru a slouží jako **míra souhlasu (nesouhlasu) výsledků pokusu s testovanou hypotézou**.

**Kritická hodnota** je hraniční hodnota odečtená z tabulek příslušného rozdělení (na zvolené hladině významnosti). Odděluje **obor přijetí** od **kritického oboru (oboru zamítnutí)**.

- Pokud testové kritérium padne do **oboru přijetí** → $H_0$ nezamítáme.
- Pokud testové kritérium padne do **kritického oboru** → $H_0$ zamítáme.

**Obor přijetí** je množina hodnot testového kritéria, pro které nezamítáme nulovou hypotézu.

### 6.3 Hladina významnosti a chyby testování

**Hladina významnosti** $\alpha$ — pravděpodobnost zamítnutí $H_0$, pokud ve skutečnosti platí. Obvykle 0,05 nebo 0,01.

| | $H_0$ platí | $H_0$ neplatí |
|---|---|---|
| Zamítneme $H_0$ | **Chyba I. druhu** (pst. $\alpha$) | Správné rozhodnutí |
| Nezamítneme $H_0$ | Správné rozhodnutí | **Chyba II. druhu** (pst. $\beta$) |

- **Chyba I. druhu** — zamítneme správnou $H_0$. Pravděpodobnost = $\alpha$.
- **Chyba II. druhu** — nezamítneme nesprávnou $H_0$. Pravděpodobnost = $\beta$.
- Když přijmeme nulovou hypotézu, která je správná → **nedopouštíme se žádné chyby**.

Pro minimalizaci chyby I. druhu volíme $\alpha$ **velmi malou**.

### 6.4 Síla testu

**Síla testu** $= 1 - \beta$ je schopnost (pravděpodobnost) testu zamítnout nesprávnou nulovou hypotézu. Informuje nás o tom, jak dobře je test schopen odhalit skutečný rozdíl nebo efekt.

Vztah síly testu a chyb:

- S klesající silou testu ($\beta$ roste) se pravděpodobnost chyby I. druhu $\alpha$ **snižuje** (a naopak). Existuje tedy trade-off mezi oběma typy chyb.
- Snížení síly testu znamená zvýšení rizika chyby II. druhu (nezamítnutí nesprávné $H_0$).

### 6.5 Parametrické vs. neparametrické testy

**Parametrický test** předpokládá, že data pocházejí z rozdělení známého typu (zpravidla normálního), a testuje jeho parametry (průměr, rozptyl apod.).

**Neparametrický test** nevyžaduje předpoklad o konkrétním tvaru rozdělení. Používá se, když data nesplňují předpoklady parametrických testů (např. nemají normální rozdělení, jsou ordinální apod.).

### 6.6 Jednovýběrové vs. dvouvýběrové testy

Rozlišení je dáno **počtem souborů** zapojených do testu.

**Jednovýběrové testy** — posuzujeme shodu odhadnuté výběrové statistiky s předpokládanou hodnotou parametru základního souboru (např. porovnáváme výběrový průměr s hypotetickou hodnotou $\mu_0$).

**Dvouvýběrové testy** — porovnáváme charakteristiky dvou souborů (např. průměry dvou nezávislých skupin).

### 6.7 Závislé vs. nezávislé soubory

**Závislé (párové) soubory** — každé pozorování v jednom souboru má svůj protějšek v druhém souboru (měření na stejných jedincích za různých podmínek, např. výkon dělníků při 19 °C a 23 °C). Používá se **párový t-test**.

**Nezávislé soubory** — pozorování v jednom souboru nemají žádný vztah k pozorováním v druhém souboru.

### 6.8 Přehled nejčastějších testů

**Jednovýběrový t-test** — testuje, zda se průměr populace liší od hypotetické hodnoty. Použije se pro ověření $H_0\!: \mu = \mu_0$ (např. spotřeba benzínu se neliší od udávané hodnoty).

**Dvouvýběrový t-test** — testuje shodu průměrů dvou nezávislých souborů (předpokládá se rovnost rozptylů).

**Welchův (Behrens–Fisherův) test** — modifikace dvouvýběrového t-testu, pokud rozptyly nejsou shodné.

**Párový t-test** — testuje, zda střední hodnota rozdílů párových pozorování je nulová. Pro testování $H_0\!: \mu_d = 0$ na párových datech.

**F-test** — testuje shodu rozptylů dvou souborů.

**Test dobré shody ($\chi^2$)** — testuje, zda empirické četnosti odpovídají teoretickému rozdělení.

---

## 7. Regresní analýza

### 7.1 Cíl regresní analýzy

Hlavním cílem regresní analýzy je **stanovení průběhu (tvaru) závislosti** mezi proměnnými — konkrétně vyjádřit, jak se mění závisle proměnná $Y$ v závislosti na změnách nezávisle proměnné $X$, a to pomocí vhodné matematické funkce (regresní funkce).

### 7.2 Regrese — stanovení průběhu závislosti

**Regrese** představuje stanovení průběhu závislosti (na rozdíl od korelace, která měří její sílu/těsnost).

### 7.3 Jednoduchá vs. vícenásobná závislost

**Jednoduchá (jednoduché) závislost** — závislost mezi dvěma proměnnými (jednou závislou a jednou nezávislou).

**Vícenásobná závislost** — závislost jedné závisle proměnné na dvou a více nezávisle proměnných.

### 7.4 Jednostranná vs. oboustranná závislost

**Jednostranná závislost** — role proměnných je jednoznačně dána: $X$ je příčina, $Y$ je následek. Hovoříme o jedné regresní přímce.

**Oboustranná (sdružená) závislost** — obě proměnné se vzájemně ovlivňují, nelze jednoznačně určit příčinu a následek. Popisuje se dvěma sdruženými regresními přímkami — regresí $Y$ na $X$ a regresí $X$ na $Y$.

### 7.5 Sdružené regresní přímky

Sdružené regresní přímky jsou **různoběžné ve stejném směru** (protínají se v bodě $[\bar{x}, \bar{y}]$). Obecně splývají pouze v případě dokonalé funkční závislosti ($|r| = 1$).

### 7.6 Regresní koeficient a jeho interpretace

**Regresní koeficient** $b$ (sklon regresní přímky) vyjadřuje **průměrnou změnu závisle proměnné** $Y$ **při jednotkové změně nezávisle proměnné** $X$. Pokud $b = 2{,}5$, pak při zvýšení $X$ o 1 jednotku se $Y$ v průměru zvýší o 2,5 jednotek.

### 7.7 Odhad konkrétní hodnoty závisle proměnné

Pro odhad konkrétní hodnoty $y_i$ dosadíme příslušnou hodnotu $x_i$ do rovnice **regresní přímky** (či obecněji regresní funkce): $\hat{y}_i = a + b \cdot x_i$.

### 7.8 Metoda nejmenších čtverců

Parametry regresní funkce se odhadují tak, aby **součet čtverců odchylek** pozorovaných hodnot od hodnot vyrovnaných (predikovaných) regresní funkcí byl minimální. O minimalizaci součtu čtverců odchylek se hovoří v souvislosti s **odhadem parametrů regresního modelu** (metoda OLS — Ordinary Least Squares).

### 7.9 Pevná (funkční) vs. statistická závislost

**Pevná (funkční) závislost** — výskytu jednoho jevu nutně odpovídá výskyt druhého jevu. Každé hodnotě $X$ odpovídá přesně jedna hodnota $Y$.

**Statistická (stochastická) závislost** — jeden jev podmiňuje jev jiný jen s určitou pravděpodobností a v dané intenzitě. Stejné hodnotě $X$ mohou odpovídat různé hodnoty $Y$.

---

## 8. Korelační analýza

### 8.1 Korelace — měření těsnosti závislosti

Na rozdíl od regrese, která stanovuje průběh závislosti, **korelace** měří **sílu (těsnost)** závislosti mezi proměnnými.

Pokud mají určité hodnoty jedné proměnné tendenci vyskytovat se společně s určitými hodnotami druhé proměnné, označujeme tyto proměnné jako **korelované**.

### 8.2 Korelační pole (bodový diagram)

**Korelační pole** je grafické znázornění vztahu mezi dvěma proměnnými, kde každé pozorování je vyneseno jako bod v rovině. Z korelačního pole lze získat informaci o: (1) směru závislosti (přímá/nepřímá), (2) síle závislosti (těsnost bodů kolem trendu), (3) tvaru závislosti (lineární/nelineární), (4) případných odlehlých pozorováních.

### 8.3 Pearsonův korelační koeficient

Měří těsnost **lineární** závislosti. Nabývá hodnot z intervalu $\langle -1;\, 1 \rangle$.

- $r = 1$ → dokonalá přímá lineární závislost.
- $r = -1$ → dokonalá nepřímá (inverzní) lineární závislost. Pokud je mezi znaky prokázána nepřímá funkční lineární závislost, korelační koeficient = $-1$.
- $r = 0$ → lineární nezávislost (pozor: nemusí znamenat nezávislost obecně).
- $0 < |r| < 1$ → částečná lineární závislost.

### 8.4 Koeficient determinace

$R^2 = r^2$ — vyjadřuje, jaký **podíl variability závisle proměnné** $Y$ je vysvětlitelný zvolenou regresní funkcí (nezávisle proměnnou $X$). Nabývá hodnot od 0 do 1 (resp. 0 % až 100 %).

Příklad: $r = -0{,}9 \Rightarrow R^2 = 0{,}81$, tedy 81 % variability $Y$ je vysvětleno modelem.

### 8.5 Spearmanův koeficient pořadové korelace

**Neparametrická** charakteristika korelace. Používá se při měření těsnosti závislosti **monotónních** (ne nutně lineárních) vztahů. Pracuje s pořadími hodnot místo s hodnotami samotnými.

**Pořadová korelace** je přístup k měření závislosti, kdy se místo původních hodnot pracuje s pořadími — vhodný pro ordinální data nebo když chceme eliminovat vliv odlehlých hodnot.

### 8.6 Porovnání síly závislosti — příklad

Z korelačních koeficientů $r = -0{,}99$; $r = -0{,}7$; $r = -0{,}98$; $r = 0{,}65$; $r = 0{,}53$ ukazuje na **nejnižší sílu závislosti** hodnota $r = 0{,}53$, protože rozhoduje absolutní hodnota koeficientu (čím blíže k nule, tím slabší závislost).

---

## 9. Shrnutí klíčových vztahů a konceptů

### Rozdělení a jejich použití

| Rozdělení | Typ NV | Typické použití |
|---|---|---|
| Binomické | diskrétní | počet úspěchů, výběr s vracením |
| Hypergeometrické | diskrétní | výběr bez vracení |
| Poissonovo | diskrétní | počet vzácných jevů za čas/plochu |
| Rovnoměrné | spojité | stejně pravděpodobné hodnoty na intervalu |
| Exponenciální | spojité | doba čekání, teorie front |
| Normální | spojité | univerzální, CLV, testování |

### Odhady — shrnutí vztahů

| Zvýšíme... | Důsledek pro interval spolehlivosti |
|---|---|
| Rozsah výběru $n$ | Interval se zúží (přesnost roste) |
| Spolehlivost $1 - \alpha$ | Interval se rozšíří (přesnost klesá) |

### Testování — rozhodovací logika

1. Formuluj $H_0$ a $H_1$.
2. Zvol hladinu významnosti $\alpha$.
3. Vyber vhodný test a vypočti testové kritérium.
4. Najdi kritickou hodnotu z tabulek.
5. Porovnej: padne-li testové kritérium do kritického oboru → zamítni $H_0$.

### Regrese vs. korelace

| | Regrese | Korelace |
|---|---|---|
| Cíl | Průběh (tvar) závislosti | Síla (těsnost) závislosti |
| Výstup | Regresní funkce, regresní koeficient | Korelační koeficient, determinace |
| Odpovídá na | „Jak se mění $Y$ s $X$?" | „Jak silně spolu $X$ a $Y$ souvisí?" |
