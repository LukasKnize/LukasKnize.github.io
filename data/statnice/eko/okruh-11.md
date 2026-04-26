# Okruh 11 – Kalkulace nákladů na výkony

## Co je kalkulace nákladů?

**Kalkulace** je propočet nákladů (příp. ceny nebo zisku) na **kalkulační jednici** – přesně definovanou jednotku výkonu (výrobek, zakázka, 1 kg výrobku, 1 hodina služby, 1 m² plochy). Kalkulace odpovídá na otázku: „Kolik nás stojí vyrobit/poskytnout jednu jednotku výkonu?"

Kalkulace je klíčový nástroj **manažerského účetnictví** – na rozdíl od finančního účetnictví (které je určeno externím uživatelům a regulováno zákonem) slouží internímu rozhodování: stanovení cen, posouzení ziskovosti produktů, rozhodování o výrobním mixu.

---

## Úplná kalkulace nákladů (absorpční metoda)

### Princip

Úplná kalkulace (také **absorpční** nebo **plná**) přiřazuje na kalkulační jednici **všechny náklady** – přímé i nepřímé (režijní). Každý výrobek „absorbuje" svůj podíl fixních nákladů.

### Typový kalkulační vzorec

Česká praxe standardně používá tento vzorec:

```
 1. Přímý materiál
 2. Přímé mzdy
 3. Ostatní přímé náklady (energie pro stroj, speciální nářadí, podíl odpisů přímého stroje)
─────────────────────────────────
 4. Přímé náklady celkem  (1+2+3)
 5. Výrobní (provozní) režie
─────────────────────────────────
 6. Vlastní náklady výroby (4+5)
 7. Správní (závodová) režie
─────────────────────────────────
 8. Vlastní náklady výkonu (6+7)
 9. Odbytová režie (prodejní náklady)
─────────────────────────────────
10. Úplné vlastní náklady (8+9)
11. Zisk (nebo ztráta)
─────────────────────────────────
12. Prodejní cena
```

### Přímé vs. nepřímé náklady

**Přímé náklady** lze jednoznačně přiřadit na konkrétní výrobek: přímý materiál (dřevo pro konkrétní stůl), přímé mzdy (hodinová sazba dělníka na konkrétní zakázce), přímé odpisy (speciální stroj používaný jen pro jeden výrobek).

**Nepřímé (režijní) náklady** nelze přiřadit přímo – sdílí je více výrobků. Nájem haly, mzda ředitele výroby, energie pro osvětlení. Přiřazují se pomocí **rozvrhové základny** (allocation base):

$$\text{Sazba režie} = \frac{\text{Celková režie}}{\text{Rozvrhová základna}}$$

Rozvrhovou základnou může být: objem přímých mezd, počet strojních hodin, objem přímého materiálu. Volba základny ovlivňuje výsledek – je to slabé místo metody.

### Výhody a nevýhody úplné kalkulace

**Výhody**: Poskytuje úplný obraz o nákladovosti. Slouží pro stanovení ceny (cost-plus pricing). Povinná pro skladové ocenění dle účetních standardů.

**Nevýhody**: Fixní náklady závisí na objemu produkce – při změně objemu se sazba mění. Kalkulace tak „lže": při nižší produkci vychází vyšší náklady na kus, i když skutečné variabilní náklady jsou stejné. Přiřazení fixních nákladů přes rozvrhové základny je vždy zjednodušení.

---

## Neúplná kalkulace nákladů (příspěvková / marginální metoda)

### Princip

Neúplná (příspěvková) kalkulace přiřazuje na výrobek **pouze variabilní (přímé) náklady**. Fixní náklady se nepřiřazují na jednotlivé výrobky – jsou považovány za náklady **celého podniku za období** a kryjí se z celkového příspěvku na úhradu.

$$\text{Příspěvek na úhradu (PÚ)} = \text{Cena} - \text{Variabilní náklady na jednotku}$$

$$\text{Příspěvek na úhradu celkem} = PÚ \times Q$$

$$\text{Zisk} = \text{Příspěvek na úhradu celkem} - \text{Fixní náklady celkem}$$

> **Příklad**: Výrobek se prodává za 500 Kč. Variabilní náklady jsou 300 Kč/ks. PÚ = 200 Kč/ks. Pokud podnik prodá 1 000 ks, celkový PÚ = 200 000 Kč. Fixní náklady jsou 150 000 Kč. Zisk = 50 000 Kč.

### Výhody a nevýhody neúplné kalkulace

**Výhody**: Není zkreslena změnami objemu výroby. Lépe odráží ekonomické rozhodování (v krátkém období: dokud je PÚ > 0, výroba má smysl). Vhodná pro rozhodnutí „vyrobit nebo koupit" (make-or-buy), výrobní mix při kapacitním omezení.

**Nevýhody**: Není vhodná pro long-run pricing (fixní náklady musí být také pokryty). Není uznána pro účetní ocenění zásob.

### Kdy použít kterou metodu?

- **Úplná kalkulace**: pro tvorbu prodejních cen (musíme krýt vše), pro oceňování zásob.
- **Neúplná kalkulace**: pro krátkodobá rozhodnutí (přijmout/odmítnout zakázku za nižší cenu), optimalizaci výrobního mixu, analýzu ziskovosti produktové řady.

---

## Analýza bodu zvratu (Break-Even Analysis)

### Co je bod zvratu?

**Bod zvratu (BEP – Break-Even Point)** je objem produkce, při kterém se celkové výnosy rovnají celkovým nákladům – zisk je nulový. Nad BEP podnik tvoří zisk, pod BEP realizuje ztrátu.

Funguje na předpokladech: cena je konstantní, variabilní náklady na kus jsou konstantní, fixní náklady se v daném rozsahu nemění.

### Výpočet bodu zvratu

**BEP v kusech:**

$$Q_{BEP} = \frac{FN}{p - vn} = \frac{\text{Fixní náklady}}{\text{Cena} - \text{Variabilní náklady/ks}} = \frac{FN}{PÚ/ks}$$

**BEP v tržbách (Kč):**

$$T_{BEP} = \frac{FN}{1 - \frac{vn}{p}} = \frac{FN}{\text{Příspěvkový poměr (PÚ\%/100)}}$$

kde **příspěvkový poměr** (contribution margin ratio) = PÚ/ks ÷ cena.

> **Příklad**: FN = 120 000 Kč, cena = 200 Kč/ks, variabilní náklady = 80 Kč/ks.
> PÚ = 120 Kč/ks.
> $Q_{BEP}$ = 120 000 / 120 = **1 000 ks**
> $T_{BEP}$ = 1 000 × 200 = **200 000 Kč**

### Grafická interpretace

```
Kč
  │         /Tržby
  │        / /TC (celkové náklady)
  │   BEP ✕/
  │      /
  │    FC (fixní náklady – vodorovná čára)
  │
  └──────────────────────────── Q (ks)
```

Tržby rostou od 0 strmě (sklon = cena). TC začínají od výše FN (konstantní základ) a rostou se sklonem = vn/ks. BEP je průsečík.

### Využití BEP při plánování

**Plánovaný zisk**: Kolik musím prodat, abych dosáhl cílového zisku $Z$?

$$Q_{cíl} = \frac{FN + Z}{PÚ/ks}$$

**Bezpečnostní marže (Margin of Safety, MOS)**: O kolik % může klesnout prodej oproti plánu, než podnik začne tratit.

$$MOS = \frac{Q_{plánované} - Q_{BEP}}{Q_{plánované}} \times 100 \; [\%]$$

Vysoká MOS = podnik je odolný vůči poklesu poptávky.

**Provozní (operační) páka (Operating Leverage)**: Jak citlivý je zisk na změnu tržeb.

$$\text{Provozní páka} = \frac{\text{Příspěvek na úhradu celkem}}{\text{Provozní zisk (EBIT)}}$$

Podnik s vysokými fixními náklady a nízkou variabilní složkou (výrobní firma s drahými stroji) má vysokou provozní páku – malá změna tržeb způsobí velkou změnu zisku (oba směry). Podnik s nízkými FN (obchod) má nízkou páku – zisky jsou stabilnější, ale méně explozivní.

### Víceprodukční analýza

Pokud podnik vyrábí více produktů, počítá se **průměrný příspěvkový poměr** vážený podílem produktů na tržbách (sales mix). BEP celkových tržeb se pak dopočítá z průměrného příspěvkového poměru a FN.

---

## Shrnutí: kdy co použít

| Otázka | Vhodná metoda |
|--------|--------------|
| Jaká cena pokryje všechny náklady? | Úplná kalkulace |
| Vyplatí se přijmout zakázku za nižší cenu? | Příspěvková kalkulace (PÚ > 0 → ano) |
| Od jakého objemu prodeje jsme v zisku? | Analýza bodu zvratu |
| O kolik mohou klesnout tržby bez ztráty? | Bezpečnostní marže |
| Jaký vliv má nárůst prodeje na zisk? | Provozní páka |
