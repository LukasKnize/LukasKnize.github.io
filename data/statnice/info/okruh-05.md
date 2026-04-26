# Okruh 5 – Architektura OS a principy výstavby OS

## Proč záleží na architektuře OS?

Operační systém je jeden z nejsložitějších softwarových systémů vůbec – miliony řádků kódu, stovky vývojářů, musí běžet spolehlivě roky bez restartu. Způsob, jakým je OS vnitřně strukturován, zásadně ovlivňuje jeho výkon, bezpečnost, přenositelnost a udržovatelnost. Tato oblast je tedy o tom, jak správně navrhnout tak složitý systém.

---

## 1. Monolitické jádro (Monolithic Kernel)

### Princip

Celý OS je jeden velký program běžící v **kernel módu**. Všechny služby OS (správa procesů, paměti, souborový systém, ovladače, síť) jsou součástí jednoho adresního prostoru jádra a vzájemně si přímo volají funkce.

```
 ┌─────────────────────────────────────────┐
 │            Uživatelský prostor           │
 │   [App 1]   [App 2]   [App 3]           │
 └─────────────────┬───────────────────────┘
                   │ syscall
 ┌─────────────────▼───────────────────────┐
 │              Kernel mód                  │
 │  ┌──────┬───────┬────────┬──────────┐   │
 │  │ Proc.│ Paměť │ Soub.  │Ovladače  │   │
 │  │ mgmt │ mgmt  │ systém │ zařízení │   │
 │  └──────┴───────┴────────┴──────────┘   │
 └─────────────────────────────────────────┘
                   │
           [ Hardware ]
```

### Výhody

- **Výkon** – přímá volání mezi komponentami bez overhead komunikace.
- **Jednoduché sdílení dat** – komponenty přímo sdílejí struktury v paměti.

### Nevýhody

- **Chyba kdekoliv = pád celého systému** – chyba v ovladači způsobí kernel panic (Blue Screen of Death).
- **Obtížná údržba** – při přidání nové funkce se modifikuje velký modul.

### Příklady

Linux, FreeBSD (oba jsou ale **modulární monolity** – ovladače lze dynamicky přidávat jako moduly, ale stále běží v kernel prostoru).

---

## 2. Hierarchická vrstvená architektura

### Princip

OS je rozdělen do vrstev, kde každá vrstva komunikuje **pouze se sousední vrstvou**. Nižší vrstva nabízí vyšší vrstvě služby přes dobře definované rozhraní.

```
 ┌─────────────────────────────┐
 │  Vrstva 5: Uživatelský UI   │
 ├─────────────────────────────┤
 │  Vrstva 4: Správa I/O       │
 ├─────────────────────────────┤
 │  Vrstva 3: Správa procesů   │
 ├─────────────────────────────┤
 │  Vrstva 2: Správa paměti    │
 ├─────────────────────────────┤
 │  Vrstva 1: Hardware HAL     │
 └─────────────────────────────┘
```

### Výhody

- **Čistý design** – každá vrstva má jasně definovanou odpovědnost.
- **Snadné testování** – vrstvu lze otestovat izolovaně (mockujeme nižší vrstvu).
- **Přenositelnost** – výměna nejnižší vrstvy (Hardware Abstraction Layer) umožní přenesení na nový HW.

### Nevýhody

- **Výkon** – volání musí projít každou vrstvou; přidává overhead.
- **Rigidní** – ne každá funkce přesně odpovídá jedné vrstvě.

### Příklady

THE OS (Dijkstra, 1968 – původní vrstvený OS), Windows NT (HAL, kernel, subsystémy).

---

## 3. Mikrojádro (Microkernel)

### Princip

V kernel módu je jen absolutní minimum: správa procesů, komunikace mezi procesy (IPC) a správa paměti. Vše ostatní – souborové systémy, ovladače zařízení, síťový zásobník – běží jako **procesy v uživatelském prostoru**.

```
 ┌──────────────────────────────────────────┐
 │            Uživatelský prostor            │
 │  [Ovladač]  [Soub. systém]  [Síť]  [App] │
 └─────────────────┬────────────────────────┘
                   │ IPC (zprávy)
 ┌─────────────────▼────────────────────────┐
 │        Mikrojádro (kernel mód)            │
 │    [IPC] [Správa procesů] [Virtuální paměť]│
 └──────────────────────────────────────────┘
                   │
             [ Hardware ]
```

### Komunikace přes zprávy (IPC)

Protože ovladač a souborový systém jsou oddělené procesy, nemohou si volat funkce přímo. Komunikují zasíláním **zpráv** přes jádro – jako e-mail mezi procesy.

### Výhody

- **Bezpečnost a stabilita** – chyba v ovladači nepohřbí celý systém; vadný driver se restartuje.
- **Modulárnost** – komponenty lze vyměnit za běhu.
- **Formální verifikovatelnost** – malé jádro lze formálně ověřit (seL4 – matematicky dokázaná správnost).

### Nevýhody

- **Výkon** – každé volání ovladače = přechod přes IPC = 2× context switch = pomalejší než monolitické jádro.
- Historicky bylo mikrojádro 50× pomalejší (Mach) – dnes jsou rozdíly menší díky lepšímu IPC.

### Příklady

Mach, MINIX, QNX (průmyslové řídicí systémy, automobily), seL4, L4.

---

## 4. Modulová architektura

### Princip

Kompromis mezi monolitem a mikrojádrem. Základ je monolitické jádro, ale funkce jsou rozděleny do **dynamicky načítatelných modulů (LKM – Loadable Kernel Modules)**. Modul lze přidat nebo odebrat za běhu bez restartu OS.

```
 ┌──────────────────────────────────────────┐
 │            Kernel mód                     │
 │  ┌─────────────────┐                      │
 │  │  Základ jádra   │ ← vždy přítomen      │
 │  └────────┬────────┘                      │
 │           │  (načíst/uvolnit)             │
 │  ┌────────▼────────┐ ┌──────────────────┐ │
 │  │ Modul: ext4     │ │ Modul: nvidia.ko │ │
 │  └─────────────────┘ └──────────────────┘ │
 └──────────────────────────────────────────┘
```

### Výhody

- **Flexibilita** – přidání ovladače pro nový HW bez restartu (`insmod`, `modprobe` na Linuxu).
- **Výkon** – modul běží v kernel prostoru, přímá volání.
- **Menší základní jádro** – do systému se načte jen to, co je potřeba.

### Příklady

Linux (nejpoužívanější přístup), Solaris.

```bash
# Příkazy pro práci s moduly na Linuxu
lsmod              # seznam načtených modulů
modinfo nvidia     # info o modulu
sudo modprobe usb_storage  # načtení modulu
sudo rmmod usb_storage     # odebrání modulu
```

---

## 5. Virtuální stroje (Virtual Machines)

### Princip

**Hypervisor** (Virtual Machine Monitor, VMM) vytváří na jednom fyzickém hardware více izolovaných virtuálních strojů, každý s vlastním (virtuálním) hardwarem a vlastním OS.

### Typ 1 vs. Typ 2 hypervisor

```
 Typ 1 (bare-metal):          Typ 2 (hosted):
 ┌────────────────────┐       ┌────────────────────┐
 │ VM1 │ VM2 │ VM3   │       │ VM1 │ VM2           │
 ├────────────────────┤       ├────────────────────┤
 │    Hypervisor      │       │    Hypervisor       │
 ├────────────────────┤       ├────────────────────┤
 │      Hardware      │       │  Host OS (Windows) │
 └────────────────────┘       ├────────────────────┤
 VMware ESXi, Xen, KVM        │      Hardware      │
                               └────────────────────┘
                               VirtualBox, VMware WS
```

**Typ 1** – hypervisor běží přímo na hardware, vyšší výkon, používá se v serverových prostředích (cloud).

**Typ 2** – hypervisor běží jako aplikace v host OS, jednodušší nasazení, nižší výkon, vhodné pro development.

### Techniky virtualizace

- **Plná virtualizace** – hostující OS neví, že běží ve VM; hypervisor zachytí privilegované instrukce a emuluje hardware.
- **Paravirtualizace** – hostující OS ví, že běží ve VM, a spolupracuje s hypervisorem (Xen); výkonnější, ale vyžaduje upravený OS.
- **Hardware-assisted virtualization** – CPU přímo podporuje virtualizaci (Intel VT-x, AMD-V); hypervisor může nechat VM provádět privilegované instrukce přímo.

### Kontejnery – lehká alternativa

**Kontejnery** (Docker, LXC) sdílejí jádro host OS, ale izolují procesy pomocí **namespaces** a **cgroups**:
- **Namespaces** – izolace pohledu na systém (PID, síť, souborový systém, uživatelé).
- **cgroups** – omezení zdrojů (max. % CPU, max. RAM).

Kontejner je tedy lehčí než VM (spustí se za milisekundy, méně overhead), ale méně izolovaný (sdílí jádro – chyba v jádře postihne všechny kontejnery).

| | VM | Kontejner |
|--|----|----|
| Izolace | Silná (vlastní OS) | Slabší (sdílené jádro) |
| Startovací čas | Sekundy–minuty | Milisekundy |
| Overhead | Větší | Minimální |
| Použití | Různé OS na jednom HW | Mikroservisy, CI/CD |

---

## Shrnutí – srovnání architektur

| Architektura | Výkon | Bezpečnost | Flexibilita | Příklad |
|-------------|-------|-----------|------------|---------|
| **Monolitická** | ★★★★★ | ★★☆☆☆ | ★★☆☆☆ | Linux, FreeBSD |
| **Vrstvená** | ★★★☆☆ | ★★★☆☆ | ★★★☆☆ | Windows NT |
| **Mikrojádro** | ★★☆☆☆ | ★★★★★ | ★★★★★ | QNX, seL4 |
| **Modulová** | ★★★★☆ | ★★★☆☆ | ★★★★☆ | Linux (moduly) |
| **Virtuální stroj** | ★★★☆☆ | ★★★★☆ | ★★★★★ | VMware, KVM |

> V praxi čisté architektury téměř neexistují – Linux je monolitický s moduly, Windows NT je vícevrstvý s hybridním jádrem, moderní hypervisory kombinují více přístupů.
