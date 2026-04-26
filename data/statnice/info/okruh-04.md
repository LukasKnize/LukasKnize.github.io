# Okruh 4 – Služby OS a generické komponenty OS

## Co je operační systém?

**Operační systém (OS)** je software, který stojí mezi hardwarem a uživatelskými aplikacemi. Plní dvě základní role:

1. **Správce zdrojů** – spravedlivě a efektivně rozděluje procesor, paměť, disk a I/O mezi konkurující si procesy.
2. **Abstrakce** – skrývá složitost hardwaru za jednotné rozhraní (aplikace nemusí vědět, jestli běží na Intelu nebo AMD, jestli je disk HDD nebo SSD).

Aplikace komunikují s OS přes **systémová volání (syscalls)** – speciální, bezpečné volání do jádra. Například `open()`, `read()`, `write()`, `fork()`, `exit()` v Unixu.

---

## Správa procesů

**Proces** = spuštěný program. Obsahuje kód, data, zásobník a kontext (hodnoty registrů, stav).

### Stavy procesu

```
         ┌──── připraven ────┐
         │     (ready)       │
  nový ──┤                   ├──→ ukončen
         │  ↑           ↓   │
         └─ běžící ←── čeká ─┘
             (running)  (waiting)
```

- **Nový (new)** – proces se vytváří.
- **Připraven (ready)** – čeká na přidělení CPU.
- **Běžící (running)** – právě má CPU a provádí instrukce.
- **Čeká (waiting/blocked)** – čeká na I/O nebo jiný event.
- **Ukončen (terminated)** – hotov, OS uvolní prostředky.

### Plánování procesů (scheduling)

OS rozhoduje, který proces dostane CPU. Algoritmy plánování:

| Algoritmus | Popis | Výhoda / Nevýhoda |
|------------|-------|-------------------|
| **FCFS** (First Come First Serve) | Fronta, kdo první přijde | Jednoduché; convoy effect |
| **SJF** (Shortest Job First) | Nejkratší úloha první | Optimální průměr; obtížný odhad délky |
| **Round Robin** | Každý dostane kvantum času | Spravedlivé; přepínání má režii |
| **Priority** | Podle priority procesu | Flexibilní; riziko vyhladovění |
| **MLFQ** (Multi-Level Feedback Queue) | Kombinace – používá Linux/Windows | Adaptivní, složitější |

### Přepnutí kontextu (context switch)

Když OS přepne z procesu A na B, musí uložit celý stav A (registry, PC, zásobník) a načíst uložený stav B. Tato operace trvá desítky až stovky mikrosekund a CPU v té době nic užitečného neprovede – proto je přílišné přepínání nevhodné.

### Vlákna (threads)

**Vlákno** je lehčí jednotka paralelismu v rámci jednoho procesu. Vlákna sdílejí kód, data a haldu (heap), ale mají vlastní zásobník a registry. Přepnutí mezi vlákny je rychlejší než mezi procesy.

- **Uživatelská vlákna** – spravuje je knihovna v uživatelském prostoru (POSIX Threads – pthreads).
- **Jaderná vlákna** – spravuje je přímo OS, může je plánovat na různá CPU jádra.

---

## Správa paměti

OS musí spravedlivě rozdělit fyzickou RAM mezi všechny běžící procesy a zajistit jejich izolaci (proces A nesmí číst/přepisovat paměť procesu B).

### Virtuální paměť

Každý proces vidí svůj vlastní **virtuální adresní prostor** (v 64-bit systémech teoreicky 256 TB). OS mapuje virtuální adresy na fyzické pomocí **stránkovací tabulky (page table)** a speciálního hardware – **MMU (Memory Management Unit)**.

```
Virtuální adresa procesu A → MMU → Fyzická RAM (nebo swap)
Virtuální adresa procesu B → MMU → Jiná fyzická RAM
```

### Stránkování (paging)

Paměť je rozdělena na bloky fixní velikosti – **stránky (pages)**, typicky 4 KB. Fyzická RAM je rozdělena na **rámce (frames)** stejné velikosti. Stránky nemusí být v paměti sekvenčně – každá může být v jiném rámci.

**TLB (Translation Lookaside Buffer)** – cache pro překlady adres uvnitř MMU; výrazně urychluje překlad (cache hit ≈ 1 cyklus vs. procházení page table ≈ desítky cyklů).

### Odkládání (swapping / paging to disk)

Když nestačí RAM, OS odloží méně používané stránky na disk (**swap partition** / **page file**). Přístup k disku je ~1000× pomalejší než RAM – příliš intenzivní swapping vede k **thrashingu** (systém tráví čas přesunem stránek, místo aby pracoval).

### Přidělování paměti

Alokátory (`malloc`, `new`) přidělují bloky na haldě. OS poskytuje nízkoúrovňové syscally (`brk`, `mmap`), nad nimi stojí uživatelské knihovny (glibc allocator, tcmalloc, jemalloc).

---

## I/O systém

OS abstrahuje všechna I/O zařízení (klávesnice, disk, síť, USB) za jednotné rozhraní. V Unixu platí filozofie: **„vše je soubor"** – disky, síťová spojení i meziprocesová roura jsou soubory s operacemi `open`, `read`, `write`, `close`.

### Ovladače zařízení (device drivers)

Ovladač je modul jádra, který zná konkrétní HW a překládá obecné požadavky OS na příkazy specifické pro dané zařízení. Ovladač tak izoluje OS od detailů hardware.

### Buffering a caching

- **Buffer** – dočasné uložení dat při přenosu (čekám, až se naplní a pak pošlu celý blok).
- **Page cache** – OS si nechává v RAM naposledy čtené diskové bloky. Opakované čtení stejného souboru je proto velmi rychlé.

---

## Správa vnější paměti (Storage management)

OS spravuje přístup k diskům přes **blokové zařízení** – disk je série bloků fixní velikosti (512 B nebo 4096 B).

### Plánování přístupu k disku

Pro HDD (mechanický disk) záleží na fyzické poloze hlavičky – zbytečné přejezdy jsou pomalé. Algoritmy:

| Algoritmus | Princip |
|------------|---------|
| **FCFS** | V pořadí příchodu – jednoduché, pomalé |
| **SSTF** (Shortest Seek Time First) | Nejbližší požadavek – riziko vyhladovění |
| **SCAN (výtah)** | Jede od kraje ke kraji, obsluhuje cestou | 
| **C-SCAN** | Jako SCAN, ale zpět bez obsluhy |

Pro SSD je pořadí přístupu irelevantní (žádná pohyblivá část), OS používá jiné optimalizace (TRIM, FTL).

---

## Správa souborů

Souborový systém organizuje data na disku do adresářů a souborů. Detailněji viz Okruh 9, zde jen stručně:

- OS poskytuje API: `open`, `read`, `write`, `seek`, `close`, `mkdir`, `unlink`…
- Interně mapuje cestu (např. `/home/user/doc.txt`) na bloky na disku.
- Udržuje metadata (vlastník, práva, datum změny) v **inode** (Unix) nebo MFT záznamu (NTFS).

---

## Networking

OS implementuje síťový zásobník (network stack) – hierarchii protokolů TCP/IP. Aplikace komunikují přes **sockety** – API poskytující abstrakci síťového spojení:

```python
# Server socket v Pythonu
import socket
s = socket.socket()        # vytvoří socket
s.bind(('', 8080))         # naváže na port
s.listen(5)                # čeká na spojení
conn, addr = s.accept()    # přijme klienta
data = conn.recv(1024)     # čte data
conn.send(b'Hello!')       # pošle odpověď
```

OS řeší: bufferování, retransmise, správu spojení, síťové rozhraní, routing.

---

## Ochrana a bezpečnost

### Uživatelský a jaderný mód

CPU rozlišuje dva režimy:
- **Kernel mode (privilegovaný)** – neomezený přístup k hardware; zde běží jádro OS.
- **User mode (uživatelský)** – omezený přístup; zde běží aplikace.

Přechod z user mode do kernel mode nastane výhradně přes syscall nebo přerušení – OS tak kontroluje veškerý přístup k hardware.

### Přístupová práva

Unix model: každý soubor má **vlastníka (user)**, **skupinu (group)** a práva **ostatní (others)**. Každá kategorie má bity `r` (read), `w` (write), `x` (execute).

```
 -rwxr-xr--  1 lukas users 4096 Apr 1 12:00 script.sh
  └┬┘└┬┘└┬┘
  user group others
```

---

## Interpret příkazů (Shell)

**Shell** je textové rozhraní k OS – uživatel zadává příkazy, shell je interpretuje a spouští. Příklady: **bash**, **zsh**, **fish** (Unix), **PowerShell** (Windows).

Shell umí:
- Spouštět programy: `ls -la`, `grep pattern soubor`
- Přesměrování: `cat soubor > vystup.txt`, `ls | grep .py`
- Skriptování: cykly, podmínky, funkce → automatizace

---

## Grafické uživatelské rozhraní (GUI)

GUI na Unixu tvoří **X Window System** (nebo novější **Wayland**) – server pro správu oken a vstupu, nad nímž běží desktopová prostředí (GNOME, KDE). GUI je v Unixu oddělitelné – server může běžet i bez grafiky (headless server). Na Windows a macOS je GUI integrální součástí OS.
