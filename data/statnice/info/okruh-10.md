# Okruh 10 – Síťové prvky, síťová řešení a topologie sítí

## Úvod do počítačových sítí

**Počítačová síť** je soubor zařízení propojených komunikačními médii za účelem sdílení dat a zdrojů. Sítě jsou základem moderní informatiky – bez sítí by neexistoval web, cloud ani vzdálená správa serverů.

Síť popisujeme pomocí tří dimenzí: **topologie** (jak jsou uzly propojeny), **prvky** (co sítě tvoří) a **protokoly** (jak spolu uzly komunikují).

---

## Referenční model ISO/OSI a TCP/IP

Aby různá zařízení od různých výrobců mohla spolupracovat, jsou síťové funkce rozděleny do **vrstev**. Každá vrstva řeší specifický problém a komunikuje jen se sousední vrstvou.

### ISO/OSI model (7 vrstev)

| Vrstva | Název | Protokoly/Funkce | PDU |
|--------|-------|-----------------|-----|
| 7 | **Aplikační** | HTTP, FTP, DNS, SMTP | Data |
| 6 | **Prezentační** | Šifrování (TLS), kódování (JPEG, MP3) | Data |
| 5 | **Relační** | Správa relací (otevření/uzavření spojení) | Data |
| 4 | **Transportní** | TCP, UDP – segmentace, spolehlivost | Segment |
| 3 | **Síťová** | IP, ICMP – adresování, routing | Paket |
| 2 | **Linková** | Ethernet, WiFi – přístup k médiu, MAC | Rámec (Frame) |
| 1 | **Fyzická** | Kabely, optika, WiFi signál, konektory | Bit |

### TCP/IP model (4 vrstvy)

Prakticky používaný model internetu zjednodušuje OSI:

| TCP/IP vrstva | Odpovídá OSI | Příklady |
|---------------|-------------|---------|
| **Aplikační** | 5–7 | HTTP, HTTPS, DNS, SMTP, SSH |
| **Transportní** | 4 | TCP, UDP |
| **Internetová** | 3 | IPv4, IPv6, ICMP |
| **Síťového rozhraní** | 1–2 | Ethernet, WiFi, ARP |

### TCP vs. UDP

| | TCP | UDP |
|-|-----|-----|
| Spojení | Stavové (handshake) | Bezstavové |
| Spolehlivost | Zaručené doručení, pořadí | Žádná záruka |
| Overhead | Větší (potvrzení, flow control) | Minimální |
| Použití | HTTP, SSH, e-mail, databáze | DNS, VoIP, video streaming, hry |

---

## Topologie sítí

**Topologie** popisuje, jak jsou uzly sítě fyzicky nebo logicky propojeny. Fyzická topologie = skutečné kabely; logická topologie = jak data teče.

### Sběrnicová (Bus)

Všechna zařízení sdílí jeden kabel. Data vidí všechny – komu je paket adresován, ten ho přijme. Výhoda: jednoduché a levné. Nevýhoda: jeden přerušený kabel = celá síť nefunguje; kolize.

```
 PC1 ──┬── PC2 ──┬── PC3 ──┬── PC4
       │         │         │
   terminát                terminát
```

Historicky používáno (10BASE-5, 10BASE-2 – koaxiál). Dnes prakticky nevyužívané.

### Hvězdicová (Star)

Všechna zařízení jsou připojena k centrálnímu prvku (switch, hub). Dnes nejrozšířenější.

```
        PC1
         │
PC4 ─── Switch ─── PC2
         │
        PC3
```

Výhoda: výpadek jednoho kabelu neovlivní ostatní; snadná správa. Nevýhoda: výpadek switche = celá síť nefunguje.

### Kruhová (Ring)

Uzly jsou propojeny do kruhu, data obíhají jedním směrem. Používala technologie **Token Ring** (IBM) – přístup k médiu řídí „token" (přenosný žeton).

```
 PC1 → PC2 → PC3 → PC4
  ↑________________________↓
```

Výhoda: deterministický přístup k médiu. Nevýhoda: výpadek jednoho uzlu přeruší celý kruh (ošetřuje se duálním kruhem – FDDI).

### Stromová (Tree / Hierarchical)

Hierarchie hvězdic – switche jsou propojeny do stromu. Typická topologie podnikových sítí.

```
              Core switch
             /            \
    Dist. switch         Dist. switch
    /    \                /    \
 Access  Access       Access  Access
```

### Plně propojená (Mesh / Full Mesh)

Každý uzel přímo propojen s každým jiným. Maximální odolnost, ale extrémně drahé (N uzlů = N×(N-1)/2 spojení).

```
 PC1 ─── PC2
  │╲     ╱│
  │  ╲ ╱  │
  │   ╳   │
  │  ╱ ╲  │
  │╱     ╲│
 PC4 ─── PC3
```

Používá se v páteřních sítích (ISP backbone) ve formě **partial mesh** (ne všechny uzly propojeny se všemi).

### Hybridní topologie

Kombinace předchozích – nejběžnější v praxi (hvězda+strom, mesh+hvězda).

---

## Síťové prvky

### Opakovač (Repeater)

**Vrstva 1 (fyzická).** Zesiluje a regeneruje signál na větší vzdálenost. Dnes integrován do aktivních prvků.

### Hub (Rozbočovač)

**Vrstva 1.** Příchozí signál posílá na **všechny** porty (broadcast). Všechna zařízení sdílejí přenosové pásmo a kolizní doménu. Dnes nahrazen switchem.

### Switch (Přepínač)

**Vrstva 2 (linková).** Základní stavební kámen moderní LAN. Switch se **učí** MAC adresy zařízení na jednotlivých portech (MAC tabulka / CAM table) a přeposílá rámce **jen na správný port** – ostatní porty nerušeni.

```
Příchozí rámec na port 3 (cíl: MAC AA:BB:CC):
1. Switch zkontroluje CAM tabulku: AA:BB:CC → port 7
2. Rámec odešle jen na port 7 (ne na port 1,2,4,5,6)
```

Výhody: každé spojení má plnou šířku pásma, izolace kolizních domén. **Managed switch** umí VLAN, QoS, port mirroring, spanning tree. **Unmanaged switch** je plug-and-play bez konfigurace.

### Router (Směrovač)

**Vrstva 3 (síťová).** Spojuje různé sítě a rozhoduje, kudy poslat IP paket (routing). Udržuje **směrovací tabulku** (routing table):

```
Cílová síť         Maska          Gateway           Rozhraní
192.168.1.0        /24            0.0.0.0           eth0       ← přímo dostupná
10.0.0.0           /8             192.168.1.1       eth0       ← přes gateway
0.0.0.0            /0             192.168.1.254     eth0       ← výchozí brána (default route)
```

Protokoly dynamického routování: **OSPF** (link-state, vnitřní sítě), **BGP** (path-vector, internet – „protokol internetu"), **RIP** (distance-vector, starý).

### Firewall

**Vrstva 3–7.** Filtruje provoz dle pravidel (povoluj/blokuj podle IP, portu, protokolu, obsahu). Chrání síť před neoprávněným přístupem.

- **Packet filter** – jednoduché pravidla (iptables, nftables na Linuxu).
- **Stateful firewall** – sleduje stav spojení; povoluje odpovědi na legitimní dotazy.
- **Next-Generation Firewall (NGFW)** – deep packet inspection, IPS, aplikační povědomí.

### Access Point (AP)

**Vrstva 2.** Bezdrátový přístupový bod – propojuje WiFi klienty do drátové sítě.

### Modem

Převádí digitální signál počítače na signál přenositelný komunikačním médiem (telefonní linkou, koaxiálem, optickým vláknem) a zpět. Název: **mo**dulátor + **dem**odulátor.

### Proxy server

Prostředník mezi klientem a serverem. Využití: cache (urychlení), filtrování obsahu, anonymizace, load balancing.

### NAT (Network Address Translation)

Router překládá soukromé IP adresy (192.168.x.x) na jednu veřejnou IP – takto celá domácí síť „vystupuje" navenek pod jednou IP. Řeší nedostatek IPv4 adres.

---

## IP adresování

### IPv4

32-bitová adresa, zápis čtyři oktetů: `192.168.1.100`. Celkem ~4,3 miliardy adres – vyčerpány (~2011).

**Privátní rozsahy** (RFC 1918 – neroutovatné na internetu):
- `10.0.0.0/8`
- `172.16.0.0/12`
- `192.168.0.0/16`

**Maska podsítě (subnet mask)** určuje, která část adresy je síťová a která hostitelská:
- `192.168.1.0/24` → síť `192.168.1.`, hosté `.1` až `.254`, broadcast `.255`

### IPv6

128-bitová adresa, zápis hexadecimálně: `2001:0db8:85a3::8a2e:0370:7334`. ~3,4 × 10³⁸ adres – prakticky nevyčerpatelné. Nativní podpora IPsec, zjednodušená hlavička paketu, žádný NAT potřeba.

---

## Typy sítí podle rozsahu

| Typ | Rozsah | Příklady |
|-----|--------|---------|
| **PAN** (Personal Area Network) | < 10 m | Bluetooth sluchátka, NFC platba |
| **LAN** (Local Area Network) | Místnost–budova | Kancelářská síť, domácí WiFi |
| **MAN** (Metropolitan Area Network) | Město | Metropolitní WiFi, kabelová TV |
| **WAN** (Wide Area Network) | Stát–svět | Internet, MPLS páteř firmy |
| **WLAN** | LAN bezdrátově | WiFi dle IEEE 802.11 |
| **VPN** | Logická síť přes WAN | Vzdálený přístup do firmy |

---

## Přenosová média

| Médium | Rychlost | Dosah | Použití |
|--------|---------|-------|---------|
| **UTP Cat5e** | 1 Gbit/s | 100 m | Kancelář, domácnost |
| **UTP Cat6/6a** | 10 Gbit/s | 55/100 m | Datová centra, moderní LAN |
| **Optické vlákno (SM)** | 100 Gbit/s+ | km–stovky km | Páteřní sítě, ISP |
| **Optické vlákno (MM)** | 10–40 Gbit/s | < 550 m | Datová centra |
| **WiFi 5 (802.11ac)** | až 3,5 Gbit/s | ~50 m indoor | Domácnost, kanceláře |
| **WiFi 6 (802.11ax)** | až 9,6 Gbit/s | ~50 m | Moderní AP |
| **5G** | až 20 Gbit/s | stovky metrů až kilometr | Mobilní internet |

---

## VLAN (Virtual LAN)

**VLAN** logicky rozděluje fyzickou síť na více izolovaných sítí. Managed switch přiřazuje porty do VLAN – provoz mezi VLAN prochází pouze přes router.

Výhody: bezpečnost (HR síť oddělena od výrobní), snížení broadcast domén, flexibilita (zařízení v různých místnostech mohou být ve stejné VLAN).

---

## Síťová řešení v praxi

### Domácí síť

```
Internet (ISP)
    │ optika / ADSL / kabel
  Modem/Router (NAT, DHCP, WiFi AP)
    │ Ethernet
   Switch
  ├── PC1
  ├── NAS (síťové úložiště)
  └── (WiFi) Laptop, Telefon, SmartTV
```

### Podniková síť (třívrstvý model)

```
Internet ─── Firewall ─── Core switch (L3)
                              │
                    ┌─────────┴─────────┐
               Dist. switch        Dist. switch
                    │                   │
              Access switch       Access switch
              ├── PC, IP tel.     ├── WiFi AP
              └── Tiskárna        └── Kamera
```

- **Access vrstva** – přímé připojení zařízení
- **Distribution vrstva** – politiky, VLAN routing
- **Core vrstva** – vysokorychlostní přepínání, redundance
