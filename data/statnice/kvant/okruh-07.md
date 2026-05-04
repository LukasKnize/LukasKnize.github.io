# Okruh 7 – Systémová dynamika

## Východiska systémové dynamiky

**Systémová dynamika (SD)** je metodologie pro modelování a simulaci **složitých dynamických systémů** s důrazem na zpětnovazební strukturu a chování v čase. Vyvinul ji Jay W. Forrester na MIT v 50.–60. letech 20. století.

### Klíčové teze

1. **Chování systému je způsobeno jeho strukturou** – ne vnějšími událostmi. Krizové výkyvy trhu, firemní cykly, přeprodukce – vše pramení ze struktury zpětných vazeb, ne z „nepředvídatelných šoků".

2. **Svět je kruhový, ne lineární** – tradiční myšlení: A způsobuje B. Systémové myšlení: A způsobuje B, ale B zpětně ovlivňuje A. Zpětné vazby jsou všude.

3. **Intuice o chování složitých systémů je systematicky špatná** – lidský mozek je špatný v odhadování chování nelineárních zpětnovazebních systémů. Počítačová simulace je nezbytná.

### Oblasti aplikace

Průmyslová dynamika (plánování výroby, inventáře), urbánní a regionální rozvoj, ekologie, epidemiologie, energetická politika, strategický management, ekonomická makropolicy.

---

## Nástroje systémové dynamiky

### CLD – Causal Loop Diagram (Diagram příčinných smyček)

CLD zachycuje **strukturu zpětných vazeb** – jak jsou proměnné navzájem kauzálně propojeny.

**Šipky** znázorňují kauzální vlivy s polaritou:
- **Polarita + (kladná/přímá)**: Zvýšení příčiny zvyšuje důsledek (nebo snížení snižuje). Proměnné se mění stejným směrem.
- **Polarita − (záporná/inverzní)**: Zvýšení příčiny snižuje důsledek (a naopak). Proměnné se mění opačným směrem.

**Typy zpětnovazebních smyček:**

**Posilující smyčka (R – Reinforcing)**: Součin polarit šipek v cyklu je kladný. Způsobuje exponenciální růst nebo kolaps – samozesilující chování.

> Příklad: Populace → (+) Porodnost → (+) Populace. Více lidí → více porodů → ještě více lidí.

**Vyrovnávací smyčka (B – Balancing)**: Součin polarit je záporný. Způsobuje přibližování k cíli nebo oscilace – stabilizující chování.

> Příklad: Zásoby → (+) Zásilka → (−) Objednávky → (+) Zásoby. Nízké zásoby → více objednávek → zásoby rostou → objednávky klesají.

**Zpoždění**: Kauzální vliv se projeví se zpožděním. Zpoždění v systémech způsobují oscilace, přehmaty (overshooting) a nestabilitu.

### SFD – Stock and Flow Diagram (Diagram zásoby a toků)

CLD je kvalitativní – SFD přidává **kvantitativní strukturu** pro simulaci.

**Zásoby (Stocks)** jsou akumulace – integrály toků v čase. Reprezent ují stav systému:
$$\text{Zásoba}(t) = \text{Zásoba}(t_0) + \int_{t_0}^{t} (\text{Přítok} - \text{Odtok}) \, d\tau$$

Zásoby se mění pomalu – jsou **paměť** systému. Příklady: voda v nádrži, peníze na účtu, počet zaměstnanců, populace.

**Toky (Flows)** jsou rychlosti změn zásoby za čas (jednotky: zásoba/čas). Příklady: porodnost [osoby/rok], nájemné [Kč/měsíc], výroba [ks/den].

**Pomocné proměnné (Auxiliaries)**: Zprostředkovávají vztahy mezi zásobami a toky (vzorce, konstanty, tabulkové funkce).

> Analogie: Zásoby = vana s vodou. Přítok = kohoutek. Odtok = výpusť. Výška hladiny závisí na integrovaném rozdílu přítoků a odtoků – ne na okamžitém průtoku.

---

## Elementární modelovací struktury

Systémová dynamika pracuje s několika základními vzory chování, které vznikají z elementárních strukturálních prvků:

### Exponenciální růst
Jedna posilující smyčka: zásoba → (+) tok → (+) zásoba.

$$\frac{dN}{dt} = r \cdot N \quad \Rightarrow \quad N(t) = N_0 \cdot e^{rt}$$

Příklady: bakteriální kolonie, složené úročení, virální šíření (v počátku).

### Exponenciální pokles (první řád)
Jedna vyrovnávající smyčka: zásoba → odtok proporcionální zásobě.

$$\frac{dN}{dt} = -\frac{N}{\tau} \quad \Rightarrow \quad N(t) = N_0 \cdot e^{-t/\tau}$$

Příklady: radioaktivní rozpad, odeznívání léku v těle, zastarávání kapitálu.

### Logistický (S-křivkový) růst
Posilující smyčka + omezující vyrovnávací smyčka (kapacita prostředí):

$$\frac{dN}{dt} = r \cdot N \cdot \left(1 - \frac{N}{K}\right)$$

Systém roste exponenciálně na začátku, pak se zpomaluje a ustálí na nosné kapacitě $K$.
Příklady: šíření technologie na trhu, populační dynamika.

### Oscilace
Vyrovnávací smyčka se zpožděním. Systém „přestřelí" cíl, koriguje, ale opět přestřelí druhým směrem → kmitání.
Příklady: skladové zásoby v dodavatelském řetězci (Bullwhip Effect), kyvadlo, trh nemovitostí.

---

## Systémové archetypy

**Systémové archetypy** jsou opakující se vzory struktury a chování, které se vyskytují v nejrůznějších systémech. Pomáhají rozpoznat „pasti" a typické problémy.

### Meze růstu (Limits to Growth)
Posilující smyčka pohání růst, ale vyvolává tlak na omezující vyrovnávací smyčku. Čím více systém roste, tím více narůstá odpor (konkurence, saturace trhu, čerpání zdrojů).

**Poloměr**: Nepokoušej se zvyšovat hnací sílu (tlačit na pilu) – zpevni nebo odstraň omezení (zvyš kapacitu, změň strategii).

### Přenesení zátěže (Shifting the Burden)
Symptom problému je řešen krátkodobou „rychlou záplatou" místo základního (fundamentálního) řešení. Rychlá záplata sice funguje, ale odvádí pozornost a zdroje od základního řešení, které atrofuje.

Příklady: léčba příznaků místo příčin, závislost na návykových látkách, dotace průmyslu místo restrukturalizace.

### Eskalace
Dvě posilující smyčky: akce jednoho hráče je vnímána jako hrozba druhým, který reaguje protiakcí, což hrozbu pro prvního zvyšuje atd.

Příklady: zbrojení, cenová válka, vzájemné odvetné cla.

### Tragédie společného (Tragedy of the Commons)
Sdílený zdroj je přetěžován individuálně racionálními hráči. Každý hráč vidí osobní zisk z využití zdroje, ale degradaci zdroje sdílí se všemi.

Příklady: nadměrný rybolov, znečišťování ovzduší, přetěžování internetu.

---

## Proces systémové dynamiky

Praktický postup tvorby SD modelu:

1. **Definice problému**: Formulace dynamické hypotézy – jaká struktura způsobuje pozorované chování?
2. **Tvorba CLD**: Zachycení kauzální struktury kvalitativně.
3. **Tvorba SFD**: Operacionalizace – zásoby, toky, rovnice.
4. **Parametrizace**: Odhadnutí hodnot parametrů z dat nebo literatury.
5. **Simulace a testování**: Ověření základního chování, porovnání s historickými daty.
6. **Analýza scénářů a politik**: Co se stane, když změním parametr $X$? Která intervenční strategie je nejúčinnější?
7. **Komunikace**: Sdílení výsledků se stakeholders.

**Softwarové nástroje**: Vensim, Stella/iThink, AnyLogic, PowerSim.
