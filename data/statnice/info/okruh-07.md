# Okruh 7 – macOS, Linux distribuce, mobilní OS, firmware, BIOS/UEFI

## macOS

### Původ a architektura

macOS (dříve Mac OS X, OS X) od Applu je **certifikovaný Unix** – splňuje POSIX standard a staví na základech projektu **NeXTSTEP**, který Steve Jobs přinesl zpět do Applu v roce 1997. Jádro se nazývá **XNU** (X is Not Unix) a je hybridem:

- **Mach microkernel** – základní IPC, virtuální paměť.
- **BSD vrstva** – unixové API, souborový systém, síť.
- **I/O Kit** – objektový framework pro ovladače (C++).

```
 ┌─────────────────────────────────────────┐
 │         Aplikace (Cocoa, AppKit, SwiftUI)│
 ├─────────────────────────────────────────┤
 │         Darwin (open-source základ)      │
 │  ┌───────────┬───────────┬────────────┐  │
 │  │   Mach    │    BSD    │  I/O Kit   │  │
 │  └───────────┴───────────┴────────────┘  │
 └─────────────────────────────────────────┘
```

### Vlastnosti macOS

- **Aqua GUI** – grafické rozhraní (Finder, Dock, Mission Control).
- **Homebrew** – neoficiální, ale de facto standardní správce balíčků pro vývojáře.
- **Handoff, AirDrop, Universal Clipboard** – integrace v Apple ekosystému (iPhone, iPad, Apple Watch).
- **Sandboxing a Gatekeeper** – aplikace z App Store musí fungovat v sandboxu; Gatekeeper blokuje nepodepsané aplikace.
- **APFS** (Apple File System) – moderní souborový systém s nativní šifrací, snapshoty, klonem souborů.
- **Rosetta 2** – transparentní emulátor pro spuštění x86 binárních souborů na Apple Silicon (M1/M2/M3).

---

## Linux – distribuce

### Co je distribuce?

Linuxové **jádro (kernel)** samo o sobě není OS – je to jen základ. **Distribuce (distro)** je kompletní OS sestavený z linuxového jádra + správce balíčků + systémových nástrojů + (obvykle) grafického prostředí.

### Rodiny distribucí

```
Linux kernel
├── Debian
│   ├── Ubuntu (Canonical)
│   │   ├── Linux Mint
│   │   ├── Pop!_OS
│   │   └── Kubuntu, Xubuntu…
│   └── Raspberry Pi OS
├── Red Hat
│   ├── RHEL (Red Hat Enterprise Linux) – komerční
│   ├── Fedora – komunitní, bleeding edge
│   ├── CentOS Stream
│   └── AlmaLinux, Rocky Linux – RHEL klony zdarma
├── Arch
│   ├── Arch Linux – rolling release, DIY
│   └── Manjaro – Arch pro smrtelníky
├── SUSE
│   ├── openSUSE Leap – stabilní
│   └── openSUSE Tumbleweed – rolling release
└── Gentoo, NixOS, Slackware…
```

### Správci balíčků

| Rodina | Správce | Příkazy |
|--------|---------|---------|
| Debian/Ubuntu | APT | `apt install`, `apt update`, `apt upgrade` |
| Red Hat/Fedora | DNF / YUM | `dnf install`, `dnf update` |
| Arch | Pacman | `pacman -S`, `pacman -Syu` |
| openSUSE | Zypper | `zypper install`, `zypper update` |

### Desktopová prostředí

- **GNOME** – moderní, minimalistické, používá Ubuntu, Fedora.
- **KDE Plasma** – bohaté na funkce, vysoce konfigurovatelné.
- **XFCE, LXDE/LXQt** – lehká prostředí pro starší hardware.
- **i3, Sway** – tiling window managery pro power users.

### Systémové init systémy

- **systemd** – dominantní init systém; spravuje spouštění služeb, logování (journald), síť (networkd). `systemctl start nginx`, `journalctl -f`.
- **SysV init, OpenRC** – starší, jednodušší alternativy (Gentoo, Alpine).

---

## iOS

iOS je mobilní OS Applu pro iPhone a iPad (iPadOS). Sdílí základ s macOS (XNU jádro, Objective-C/Swift frameworky), ale je uzavřený a silně omezený:

- **Sandbox** – každá aplikace izolovaná, přístup pouze k vlastním datům.
- **App Store only** – Apple kontroluje veškeré distribuované aplikace (výjimka: EU umožňuje sideloading od 2024).
- **Metal** – nízkoúrovňové GPU API pro výkon.
- **SwiftUI** – moderní deklarativní UI framework.
- **Aktualizace**: Apple podporuje zařízení 5–7 let (Android OEM typicky 2–4 roky).

---

## Android

Android (Google/AOSP) je mobilní OS postavený na **Linuxovém jádru**, ale s vlastní runtime vrstvou:

```
 ┌─────────────────────────────────┐
 │ Aplikace (Java/Kotlin + Android SDK)│
 ├─────────────────────────────────┤
 │ Android Runtime (ART)           │ ← just-in-time + ahead-of-time kompilace
 ├─────────────────────────────────┤
 │ Android Framework (APIs)        │
 ├─────────────────────────────────┤
 │ Native Libraries (C/C++)        │
 ├─────────────────────────────────┤
 │ Linux Kernel (upravený)         │
 └─────────────────────────────────┘
```

- **AOSP** (Android Open Source Project) – jádro zdarma; výrobci přidají vlastní vrstvu (Samsung One UI, Xiaomi MIUI…) a Google Mobile Services (GMS).
- **APK** – formát instalačních balíčků, lze instalovat i mimo Google Play (sideloading).
- **Permissions model** – aplikace musí požádat o oprávnění (kamera, poloha…), uživatel může odmítnout.
- **Fragmentace** – různé verze Androidu na různých zařízeních; hlavní problém bezpečnosti.

---

## Windows (mobilní a desktop varianty)

- **Windows 11 / 10** – desktopový OS s hybridním jádrem NT; podpora WSL2 (Windows Subsystem for Linux – skutečný Linux kernel uvnitř Windows).
- **Windows Server** – serverová verze; Active Directory, Hyper-V, IIS.
- **Windows for IoT** – odlehčené verze pro embedded zařízení.
- **Windows Phone / Mobile** – Microsoftí mobilní OS (2010–2017), ukončen. Nahrazen přechodem na Android/iOS aplikace.

---

## Firmware, BIOS a UEFI

### Firmware

**Firmware** je software pevně uložený v čipu (Flash ROM, EEPROM) přímo v hardware zařízení. Na rozdíl od OS se neinstaluje na disk – je součástí hardware. Aktualizuje se jen záměrně (flash update).

Příklady firmware:
- BIOS / UEFI v základní desce.
- Firmware v SSD řadiči, tiskárně, routeru.
- Mikrokontroléry v myši, klávesnici.

### BIOS (Basic Input/Output System)

Starý standard (1975, IBM PC). Je **16-bitový** a spustí se jako první po zapnutí počítače:

1. **POST** (Power-On Self Test) – ověří základní funkčnost hardware.
2. Inicializuje CPU, RAM, disky, klávesnici.
3. Hledá bootovatelné zařízení (MBR – Master Boot Record).
4. Načte a spustí bootloader (první 512 B disku).

**Omezení BIOS:**
- Podporuje disky max. **2 TB** (MBR partitioning).
- Max. **4 primární oddíly**.
- Pomalá inicializace, textové rozhraní.
- 16-bitový mód → dnes archaický.

### UEFI (Unified Extensible Firmware Interface)

Moderní nástupce BIOS (standard Intel 2002, přijat průmyslem ~2010):

- **32 nebo 64-bitový** → rychlejší, modernější.
- Grafické rozhraní s podporou myši.
- **GPT** (GUID Partition Table) – podporuje disky > 2 TB, až 128 oddílů.
- **Secure Boot** – ověřuje digitální podpis bootloaderu; zabraňuje načtení škodlivého kódu před OS.
- **Fast Boot** – přeskočí části inicializace → rychlejší start.
- **Síťový boot (PXE)** – přímo z firmwaru.
- ESP (EFI System Partition) – speciální FAT32 oddíl, kde jsou uloženy bootloadery (`.efi` soubory).

```
Zapnutí PC
  → UEFI POST
  → UEFI hledá ESP oddíl
  → Načte /EFI/BOOT/BOOTX64.EFI (nebo konkrétní bootloader)
  → Spustí Windows Boot Manager / GRUB
  → OS přebere kontrolu
```

### MBR vs. GPT

| | MBR | GPT |
|-|-----|-----|
| Max. velikost disku | 2 TB | 9,4 ZB (prakticky neomezeno) |
| Max. primárních oddílů | 4 | 128 |
| Redundance | Žádná | Záloha tabulky na konci disku |
| Kompatibilita | Starý BIOS | UEFI (i BIOS v legacy módu) |

> **Shrnutí pamětihodné věty**: UEFI nahradilo BIOS, GPT nahradilo MBR, Secure Boot chrání před bootkity. Na moderních PC vždy UEFI + GPT.
