# Okruh 2 – Výpočetní modely a operační systémy

## Úvod

Způsob, jakým uživatel využívá výpočetní výkon, se v průběhu desetiletí zásadně proměnil. Každý výpočetní model odráží technologické možnosti a ekonomické podmínky své doby. Porozumění těmto modelům pomáhá pochopit, proč dnešní cloud computing funguje právě tak, jak funguje.

---

## 1. Dávkové zpracování (Batch Processing)

### Jak to fungovalo

V 50. a 60. letech byl počítač obrovský, drahý stroj a nikdo si nemohl dovolit nechat ho čekat. Programátoři napsali program na **děrné štítky**, odevzdali obsluze, která v dávkách spouštěla programy za sebou bez přerušení, a o několik hodin (nebo dní) si přišli pro výtisk výsledků.

### Klíčové vlastnosti

- **Žádná interakce** s uživatelem za běhu – program se musí připravit dopředu celý.
- **Maximální využití CPU** – přechod na další úlohu okamžitě po dokončení předchozí.
- **Job queue** – fronta úloh čeká na zpracování podle priority nebo pořadí.
- **Spooling** (Simultaneous Peripheral Operations On-Line) – data se odkládají na rychlejší médium (disk) místo přímého toku na pomalou tiskárnu, takže CPU může pokračovat.

### Dnes

Batch processing nezmizel – spouští se **nočně** pro velké datové operace: generování výpisů z bank, zpracování logů, trénování ML modelů (dávkové ETL pipeline).

---

## 2. Model host/terminál (Time-sharing)

### Problém batch modelu

Programátoři čekali hodiny na výsledek a pak zjistili, že udělali překlep na řádku 3. Plýtvání časem i penězi.

### Řešení: sdílení času

V 60.–70. letech přišel model **time-sharing** (sdílení času): jeden výkonný mainframe obsluhuje **desítky nebo stovky terminálů** najednou. Terminál je hloupé zařízení – jen klávesnice a obrazovka (nebo tiskárna), bez vlastního výpočetního výkonu.

```
 Terminál 1 ─┐
 Terminál 2 ─┤──→ Mainframe (host) ──→ výsledky
 Terminál 3 ─┘
```

OS přiděluje každému uživateli krátký **časový kvantum** (typicky 10–100 ms) a mezi nimi rychle přepíná. Každý uživatel má **iluzi**, že má počítač jen pro sebe.

### Klíčové vlastnosti

- **Interaktivita** – uživatel zadá příkaz a brzy dostane odpověď.
- **Izolace uživatelů** – každý vidí jen svá data.
- **Centralizovaná správa** – vše řeší administrátor na jednom místě.
- Vznik konceptů jako **soubory, uživatelské účty, přístupová práva**.

### Dnes

Terminálový model přežívá jako **SSH připojení** na vzdálené servery – zásadní nástroj každého správce systémů.

---

## 3. Klient/Server

### Motivace

S příchodem levných osobních počítačů (80. léta) vznikla otázka: proč nechat veškerou práci na drahém mainframe, když každý má výkonný PC? Výpočetní výkon se **distribuoval** – část práce provede klient, část server.

### Architektura

```
 Klient (PC, prohlížeč) ──→ Požadavek ──→ Server
                        ←── Odpověď  ←──
```

**Klient** je aplikace, která:
- Zobrazuje data a ovládá uživatelské rozhraní.
- Posílá požadavky serveru (přihlášení, dotaz na data…).
- Provádí lokální výpočty.

**Server** je aplikace, která:
- Čeká na požadavky od (mnoha) klientů.
- Přistupuje k databázím a sdíleným zdrojům.
- Vrací výsledky.

### Varianty

| Model | Popis | Příklad |
|-------|-------|---------|
| **Tenký klient** | Skoro vše na serveru | Webový prohlížeč, terminál |
| **Tlustý klient** | Hodně logiky na klientovi | Desktop aplikace s DB na serveru |
| **Třívrstvá architektura** | Presentation → Business Logic → Data | Typická webová aplikace |
| **Peer-to-peer (P2P)** | Každý uzel je zároveň klient i server | BitTorrent, blockchain |

### Komunikace

Klient a server komunikují po síti přes **protokoly** – nejčastěji TCP/IP. Nad TCP stojí aplikační protokoly: HTTP/HTTPS (web), SMTP (e-mail), FTP (soubory), SSH (vzdálená správa).

---

## 4. Cloud Computing

### Co je cloud?

**Cloud computing** znamená přístup k výpočetním zdrojům (servery, úložiště, databáze, software) **přes internet**, na vyžádání, s platbou za skutečné využití. Fyzické servery jsou v obrovských datových centrech – uživatel neví ani nemusí vědět, kde konkrétně jeho data leží.

Klíčové charakteristiky podle definice NIST:
1. **On-demand self-service** – zdroje si sám objednám, bez telefonu s techniky.
2. **Broad network access** – přístup odkudkoli přes internet.
3. **Resource pooling** – sdílení zdrojů mezi zákazníky (multi-tenancy).
4. **Rapid elasticity** – okamžité škálování nahoru i dolů.
5. **Measured service** – platím za to, co reálně spotřebuji.

### Modely nasazení

| Model | Popis | Příklad |
|-------|-------|---------|
| **Veřejný cloud** | Infrastruktura sdílena veřejně | AWS, Azure, Google Cloud |
| **Privátní cloud** | Infrastruktura jen pro jednu organizaci | OpenStack v podniku |
| **Hybridní cloud** | Kombinace veřejného a privátního | Citlivá data lokálně, web na AWS |
| **Multi-cloud** | Více různých cloudových poskytovatelů | Redukce závislosti na jednom |

### Modely služeb (XaaS)

```
 ┌────────────────────────────────────┐
 │  SaaS  │ E-mail, Google Docs, CRM  │ ← spravuje poskytovatel vše
 ├────────┼───────────────────────────┤
 │  PaaS  │ Heroku, Google App Engine  │ ← spravuješ aplikaci
 ├────────┼───────────────────────────┤
 │  IaaS  │ EC2, Azure VM, GCE         │ ← spravuješ OS a výše
 └────────┴───────────────────────────┘
   (zákazník spravuje víc ↑, méně ↓)
```

- **IaaS (Infrastructure as a Service)** – pronajmeš si virtuální stroje, sítě, úložiště. Plná kontrola, plná zodpovědnost za OS a software.
- **PaaS (Platform as a Service)** – nahraje se jen kód aplikace, vše ostatní (OS, runtime, databáze) řeší poskytovatel.
- **SaaS (Software as a Service)** – hotová aplikace dostupná přes prohlížeč. Žádná instalace, žádná správa.

### Výhody a nevýhody

| Výhody | Nevýhody |
|--------|----------|
| Žádné počáteční investice do HW | Závislost na internetu |
| Okamžité škálování | Vendor lock-in |
| Platba za skutečné využití | Obavy o bezpečnost a soukromí |
| Globální dostupnost | Latence pro kritické aplikace |
| Automatické zálohy a aktualizace | Riziko změny cen |

### Srovnání modelů

| | Batch | Host/Terminál | Klient/Server | Cloud |
|--|-------|---------------|---------------|-------|
| Kde běží výpočet | Centrálně | Centrálně | Distribuovaně | Vzdáleně |
| Interakce | Žádná | Ano | Ano | Ano |
| Škálování | Fixní | Fixní | Omezené | Elastické |
| Cena přístupu | Drahý stroj | Drahý mainframe | PC + server | Platba za využití |
