# Okruh 6 – Role OS, typy OS, multitasking, multithreading, Windows vs. Unix/Linux

## Role operačního systému

Operační systém je vrstva softwaru, která stojí mezi hardwarem a uživatelskými aplikacemi. Jeho dvojí role:

1. **Správce zdrojů** – přiděluje CPU, paměť, disk a I/O mezi konkurující si procesy spravedlivě a efektivně.
2. **Rozšířený stroj (extended machine)** – skrývá ošklivé detaily hardwaru za příjemné, přenositelné rozhraní. Aplikace nepíše přímo na disk sektor po sektoru – zavolá `write()` a OS se postará o vše ostatní.

Bez OS by každá aplikace musela sama znát hardware, spravovat paměť a řešit konflikt s jinými programy. Prakticky nemožné.

---

## Základní typy operačních systémů

### Podle způsobu zpracování úloh

| Typ | Popis | Příklad |
|-----|-------|---------|
| **Dávkový (batch)** | Úlohy se zpracovávají sekvenčně bez interakce | Mainframové systémy, noční job-y |
| **Interaktivní (time-sharing)** | Více uživatelů současně, zdání interaktivity | Unix, Linux, Windows |
| **Reálného času (RTOS)** | Garantovaná odezva v definovaném čase | FreeRTOS, VxWorks, QNX |
| **Distribuovaný** | OS koordinuje cluster počítačů jako jeden celek | Hadoop YARN, Kubernetes |
| **Embedded** | Minimalistický OS pro vestavěná zařízení | Android, FreeRTOS, RTOS |

### Podle počtu uživatelů

- **Jednouživatelský** – MS-DOS; v danou chvíli jeden aktivní uživatel.
- **Víceuživatelský** – Linux, Windows Server; současně více uživatelů (lokálně nebo přes SSH).

### Podle počtu úloh (procesů)

- **Jednoprocesový** – MS-DOS; vždy běží jen jeden program.
- **Multiprogramový** – více procesů v paměti, CPU je přidělováno střídavě.
- **Multitaskingový** – rozšíření multiprogramování s aktivním přepínáním.

---

## Multitasking

**Multitasking** = schopnost OS spouštět více procesů zdánlivě současně. Na jednojádrovém CPU ve skutečnosti stále běží jen jeden proces, ale OS rychle přepíná mezi nimi – tak rychle, že uživatel iluzi současného běhu nerozezná.

### Kooperativní multitasking

Proces sám dobrovolně předá řízení OS (zavolá `yield` nebo čeká na I/O). Pokud to neudělá, může blokovat celý systém – jeden chybně napsaný program zmrazí počítač.

- Používal: **Windows 3.x, macOS Classic (System 9)**
- Problém: nespolehlivost, nevhodné pro serverové a moderní systémy

### Preemptivní multitasking

OS sám si bere řízení zpět po uplynutí časového kvanta (přerušení od timeru). Proces o tom neví a nemusí spolupracovat – OS je „šéf" a může ho kdykoli přerušit.

- Používají: **Windows NT a novější, Linux, macOS X a novější**
- Výhoda: jeden zmrzlý program nezmrazí celý systém
- Základ moderních OS

```
Čas:  ──┬── P1 ──┬── P2 ──┬── P1 ──┬── P3 ──┬── P2 ──→
        ↑        ↑        ↑        ↑        ↑
      timer     timer    timer    timer    timer
     přeruší   přeruší  přeruší  přeruší  přeruší
```

---

## Multithreading

**Vlákno (thread)** je lehčí jednotka paralelismu uvnitř jednoho procesu. Vlákna sdílejí kód, haldu (heap) a globální data, ale mají vlastní zásobník a registry.

```
Proces (adresní prostor)
├── Vlákno 1 (zásobník, registry)
├── Vlákno 2 (zásobník, registry)
└── Vlákno 3 (zásobník, registry)
```

### Proč vlákna?

- **Výkon na vícejádrových CPU** – každé vlákno může běžet na jiném jádře skutečně paralelně.
- **Rychlost přepínání** – přepnutí mezi vlákny jednoho procesu je rychlejší než mezi procesy (sdílený adresní prostor → žádný TLB flush).
- **Responsivita** – webový server zvládá požadavky paralelně; UI vlákno zůstává svižné, i když jiné vlákno počítá.

### Problémy multithreadingu

- **Race condition** – dvě vlákna čtou a modifikují sdílená data současně → nepředvídatelný výsledek.
- **Deadlock** – vlákno A čeká na zámek vlákna B, vlákno B čeká na zámek vlákna A → oba čekají navždy.
- **Synchronizace** – řeší se pomocí **mutex** (mutual exclusion lock), **semafor**, **monitor**, **condition variable**.

### Hyper-Threading (Intel HT)

Jeden fyzický procesor se jeví jako dva logická jádra. Sdílí výpočetní jednotky, ale má zdvojené registry → CPU lépe využívá pipeline když jedno vlákno čeká na paměť.

---

## Porovnání Windows a Unix/Linux

### Filozofie

| | Windows | Unix/Linux |
|-|---------|------------|
| **Přístup** | „Vše v jednom" – Microsoft řídí celý stack | „Dělej jednu věc dobře" – modulární nástroje |
| **GUI** | Integrální součást OS | Oddělitelné (X11/Wayland), volitelné |
| **Příkazová řádka** | Dříve vedlejší, dnes PowerShell | Primární rozhraní, základ správy |
| **Konfigurace** | Registry (binární databáze) | Textové soubory v `/etc/` |
| **Licence** | Proprietární, placený | Jádro Linux: GPL; distribuce různě |

### Struktura souborového systému

**Windows:**
```
C:\Windows\System32\   ← systémové soubory
C:\Program Files\      ← instalované programy
C:\Users\lukas\         ← domovská složka uživatele
D:\                    ← druhý disk jako nové písmeno
```

**Unix/Linux:**
```
/                      ← kořen (root) celého stromu
├── /bin, /usr/bin     ← spustitelné soubory
├── /etc/              ← konfigurace
├── /home/lukas/        ← domovská složka uživatele
├── /dev/              ← zařízení jako soubory
├── /proc/, /sys/      ← virtuální fs (info o jádru)
└── /mnt/, /media/     ← připojené disky (mount)
```

V Unixu **neexistují písmena disků** – vše je připojeno do jednoho stromu adresářů (`mount`).

### Správa softwaru

- **Windows**: instalátory (`.exe`, `.msi`), Microsoft Store. Žádný centrální správce balíčků (historicky) – dnes WinGet, Chocolatey.
- **Linux**: správci balíčků (`apt`, `dnf`, `pacman`) stahují software z ověřených repozitářů, řeší závislosti automaticky.

### Bezpečnostní model

- **Windows**: historicky monolitická správa práv, UAC (User Account Control) jako vrstva; Active Directory pro domény.
- **Unix**: tradiční UID/GID model, `sudo` pro dočasná admin práva, SELinux/AppArmor pro povinnou kontrolu přístupu (MAC).

### Použití v praxi

| Oblast | Dominuje |
|--------|---------|
| Desktopy domácí | Windows (~70 %) |
| Podnikové desktopy | Windows |
| Webové servery | Linux (~80 %) |
| Superpočítače (TOP500) | Linux (100 %) |
| Mobilní zařízení | Linux (Android), Unix (iOS/macOS) |
| Embedded/IoT | Linux, RTOS |

> **Klíčový postřeh**: „Unix" není jedna firma ani jeden produkt – je to rodina OS sdílejících filozofii a POSIX standard. Linux je svobodná implementace Unixových myšlenek. macOS je certifikovaný Unix.
