# Okruh 16 – Teorie odhadu

## Základní principy odhadu

Cílem **statistického odhadu** je odhadnout neznámý parametr základního souboru (populace) na základě výběrových dat. Parametr je fixní (ale neznámý), výběrová statistika je náhodná (závisí na konkrétním výběru).

### Bodový odhad

**Bodový odhad** přiřazuje jednu konkrétní hodnotu jako odhad parametru:

$$\hat{\theta} = g(x_1, x_2, \ldots, x_n)$$

kde $g$ je **odhadová funkce (estimátor)**. Požadované vlastnosti odhadů:

- **Nestrannost (unbiasedness)**: $\mathbb{E}[\hat{\theta}] = \theta$ – odhadová funkce nemá systematické zkreslení. Výběrový rozptyl $s^2 = \frac{1}{n-1}\sum(x_i - \bar{x})^2$ je nestranný odhad $\sigma^2$ (proto $n-1$, ne $n$).
- **Vydatnost (efficiency)**: Ze všech nestranných odhadů má nejmenší rozptyl (Cramér-Rao dolní mez).
- **Konzistence (consistency)**: S rostoucím $n$ se odhad přibližuje k pravdivé hodnotě: $\hat{\theta} \xrightarrow{p} \theta$.
- **Dostatečnost (sufficiency)**: Odhadová funkce využívá veškerou informaci obsaženou ve výběru.

**Standardní bodové odhady:**
- $\bar{x}$ je nestranný a konzistentní odhad $\mu$.
- $s^2$ je nestranný odhad $\sigma^2$.
- Výběrový podíl $\hat{p} = k/n$ je nestranný odhad $p$ (parametr alternativního rozdělení).

**Metody odhadu:**
- **Metoda momentů (MOM)**: Ztotožníme výběrové momenty s teoretickými a vyřešíme pro parametry.
- **Metoda maximální věrohodnosti (MLE)**: Hledáme parametry, které maximalizují věrohodnostní funkci $L(\theta | \mathbf{x})$ – parametry, pro které jsou pozorovaná data nejpravděpodobnější.

---

## Intervalový odhad (Interval of Confidence)

Bodový odhad neříká nic o přesnosti. **Intervalový odhad** udává interval $[\hat{\theta}_L, \hat{\theta}_U]$, který s předem stanovenou pravděpodobností $1 - \alpha$ (**hladina spolehlivosti**) pokrývá pravdivou hodnotu parametru.

$$P(\hat{\theta}_L \leq \theta \leq \hat{\theta}_U) = 1 - \alpha$$

Typicky $\alpha = 0{,}05$ → 95% interval spolehlivosti.

> **Správná interpretace**: Interval spolehlivosti **neříká**, že parametr leží v intervalu s 95% pravděpodobností (parametr je fixní, ne náhodný). Říká: Kdybychom postup opakovali mnohokrát s různými výběry, 95 % takto sestrojených intervalů by obsahovalo pravdivý parametr.

---

## Intervalový odhad průměru $\mu$

### Případ 1: Znám $\sigma^2$ (nebo velký výběr $n \geq 30$)

Výběrový průměr $\bar{X} \sim N(\mu, \sigma^2/n)$, tedy:

$$Z = \frac{\bar{X} - \mu}{\sigma / \sqrt{n}} \sim N(0, 1)$$

**Interval spolehlivosti:**

$$\bar{x} \pm z_{\alpha/2} \cdot \frac{\sigma}{\sqrt{n}}$$

kde $z_{\alpha/2}$ je $\alpha/2$-kvantil standardního normálního rozdělení:
- Pro 95 %: $z_{0{,}025} = 1{,}960$
- Pro 99 %: $z_{0{,}005} = 2{,}576$

### Případ 2: Neznám $\sigma^2$, malý výběr ($n < 30$)

Odhadujeme $\sigma$ pomocí $s$. Statistika má **Studentovo $t$-rozdělení** s $n-1$ stupni volnosti:

$$T = \frac{\bar{X} - \mu}{s / \sqrt{n}} \sim t(n-1)$$

**Interval spolehlivosti:**

$$\bar{x} \pm t_{\alpha/2, n-1} \cdot \frac{s}{\sqrt{n}}$$

kde $t_{\alpha/2, n-1}$ je $\alpha/2$-kvantil $t$-rozdělení s $n-1$ stupni volnosti. Pro velká $n$ se blíží $z_{\alpha/2}$.

> **Příklad**: Výběr $n = 16$, $\bar{x} = 52{,}4$, $s = 8{,}2$. 95% IS pro $\mu$:
> $t_{0{,}025; 15} = 2{,}131$. IS $= 52{,}4 \pm 2{,}131 \cdot 8{,}2/\sqrt{16} = 52{,}4 \pm 4{,}37 = [48{,}0;\; 56{,}8]$.

---

## Intervalový odhad rozptylu $\sigma^2$

Výběrový rozptyl transformovaný na chi-kvadrát rozdělení:

$$\chi^2 = \frac{(n-1)s^2}{\sigma^2} \sim \chi^2(n-1)$$

**Interval spolehlivosti pro $\sigma^2$:**

$$\left[\frac{(n-1)s^2}{\chi^2_{\alpha/2,\, n-1}};\; \frac{(n-1)s^2}{\chi^2_{1-\alpha/2,\, n-1}}\right]$$

kde $\chi^2_{\alpha/2}$ a $\chi^2_{1-\alpha/2}$ jsou příslušné kvantily $\chi^2(n-1)$ rozdělení.

Interval pro $\sigma$ dostaneme odmocněním obou mezí.

> Interval pro rozptyl je **asymetrický** (chi-kvadrát rozdělení není symetrické).

---

## Intervalový odhad parametru $p$ alternativního rozdělení

Parametr $p$ je pravděpodobnost úspěchu. Výběrový podíl $\hat{p} = k/n$ (kde $k$ = počet úspěchů). Pro dostatečně velké $n$ (platí přibližně pro $np \geq 5$ a $n(1-p) \geq 5$) platí CLV:

$$Z = \frac{\hat{p} - p}{\sqrt{p(1-p)/n}} \approx N(0,1)$$

**Interval spolehlivosti (Waldův):**

$$\hat{p} \pm z_{\alpha/2} \cdot \sqrt{\frac{\hat{p}(1-\hat{p})}{n}}$$

> **Příklad**: Z $n = 200$ zákazníků bylo $k = 54$ spokojených. $\hat{p} = 0{,}27$. 95% IS:
> $0{,}27 \pm 1{,}96 \cdot \sqrt{0{,}27 \cdot 0{,}73 / 200} = 0{,}27 \pm 0{,}062 = [0{,}208;\; 0{,}332]$.

---

## Určení potřebné velikosti výběru

Před sběrem dat lze určit $n$ tak, aby šířka intervalu spolehlivosti nepřekročila požadovanou přesnost $\Delta$:

**Pro průměr** (při znalosti $\sigma$):
$$n \geq \left(\frac{z_{\alpha/2} \cdot \sigma}{\Delta}\right)^2$$

**Pro podíl $p$** (konzervativní odhad $p = 0{,}5$ dává největší $n$):
$$n \geq \left(\frac{z_{\alpha/2}}{2\Delta}\right)^2$$

> Čtyřnásobné zpřesnění (polovina délky IS) vyžaduje čtyřnásobně větší výběr.
