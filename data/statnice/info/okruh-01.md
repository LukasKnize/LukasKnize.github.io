# Okruh 1 – Von Neumannova architektura počítače

## Von Neumannova architektura

Naprostá většina dnešních počítačů je postavena na principech, které v roce 1945 popsal matematik John von Neumann. Klíčová myšlenka je jednoduchá, ale revoluční: **program i data jsou uloženy ve stejné paměti**. Dříve se počítače programovaly přepojováním kabelů – program byl fyzicky zakódován do hardware. Von Neumann navrhl, aby instrukce byly číselné kódy uložené v RAM, stejně jako data, takže změna programu znamená jen načtení jiné posloupnosti čísel.

### Základní komponenty

```
 ┌─────────────────────────────────────┐
 │            Operační paměť (RAM)      │
 │  (data + instrukce programu)         │
 └──────────────┬──────────────────────┘
                │ sběrnice (bus)
 ┌──────────────▼──────────────────────┐
 │   Centrální procesorová jednotka     │
 │  ┌────────────┐  ┌────────────────┐  │
 │  │  ALU       │  │  Řídicí jednotka│  │
 │  │(aritmetika │  │  (dekóduje     │  │
 │  │ a logika)  │  │  instrukce)    │  │
 │  └────────────┘  └────────────────┘  │
 └──────────────┬──────────────────────┘
                │
 ┌──────────────▼──────────────────────┐
 │         Vstupní/výstupní zařízení    │
 └─────────────────────────────────────┘
```

- **ALU (Arithmetic Logic Unit)** – provádí matematické operace (sčítání, odčítání, násobení) a logické operace (AND, OR, NOT, porovnání).
- **Řídicí jednotka (Control Unit)** – čte instrukce z paměti a řídí ostatní části počítače.
- **Paměť (RAM)** – uchovává instrukce i data za běhu programu.
- **I/O (vstup/výstup)** – klávesnice, monitor, disk, síťová karta…
- **Sběrnice (bus)** – sdílená cesta pro přenos dat mezi komponenty.

---

## Procesor a registry

Procesor (CPU) je mozek počítače. Uvnitř má malé, extrémně rychlé paměťové buňky zvané **registry** – typicky mají velikost 32 nebo 64 bitů a slouží k okamžité práci s daty.

### Důležité registry (x86/x86-64)

| Registr | Účel |
|---------|------|
| **PC / IP** (Program Counter / Instruction Pointer) | Adresa aktuálně prováděné instrukce |
| **SP** (Stack Pointer) | Ukazatel na vrchol zásobníku |
| **IR** (Instruction Register) | Aktuálně zpracovávaná instrukce |
| **MAR** (Memory Address Register) | Adresa paměti pro čtení/zápis |
| **MDR** (Memory Data Register) | Data čtená z / zapisovaná do paměti |
| **FLAGS / EFLAGS** | Stavové příznaky (nula, přetečení, záporné číslo…) |
| **RAX, RBX, RCX…** | Obecné registry pro výpočty |

### Instrukční cyklus (fetch–decode–execute)

Procesor neustále opakuje tři kroky:

1. **Fetch** – načte instrukci z adresy uložené v PC a uloží ji do IR; PC se inkrementuje.
2. **Decode** – řídicí jednotka dekóduje, co instrukce znamená.
3. **Execute** – ALU nebo jiná část CPU instrukci provede.

Moderní procesory tento cyklus dramaticky urychlují pomocí **pipeline** (více instrukcí najednou v různých fázích), **out-of-order execution** (provádění instrukcí mimo pořadí) a **branch prediction** (předvídání podmínek).

---

## Formát instrukce a instrukční sada (ISA)

**Instrukční sada (ISA – Instruction Set Architecture)** definuje, co daný procesor umí. Je to smlouva mezi hardware a software – programátor (nebo překladač) může spoléhat na to, že konkrétní instrukce vždy fungují stejně.

### Formát instrukce

Instrukce je binární číslo rozdělené do polí:

```
 [ opcode | operand 1 | operand 2 | adresní mód ]
```

- **Opcode** – kód operace (co se má dělat: ADD, MOV, JMP…)
- **Operand** – s čím se operace provádí (registr, konstanta, adresa v paměti)
- **Adresní mód** – jak interpretovat operand (přímá hodnota, adresa, nepřímá adresa…)

### CISC vs. RISC

| | CISC | RISC |
|--|------|------|
| Příklad | x86 (Intel, AMD) | ARM, MIPS, RISC-V |
| Instrukce | Mnoho, složité, různé délky | Málo, jednoduché, pevná délka |
| Filosofie | Jedna instrukce dělá hodně | Jednoduché instrukce, provádí se rychle |
| Použití | Počítače, notebooky | Mobilní zařízení, embedded |

---

## Přerušení (Interrupt)

Představte si, že CPU neustále čeká na vstup z klávesnice. Bylo by to extrémně neefektivní. Proto existují **přerušení** – hardware pošle CPU signál „stalo se něco důležitého", a CPU přeruší aktuální práci, obslouží událost a vrátí se zpět.

### Typy přerušení

- **Hardwarové (IRQ)** – přichází od zařízení (klávesnice stisknuta, data dorazila po síti, timer tikl).
- **Softwarové (trap / syscall)** – program záměrně zavolá OS (např. `read()`, `write()`).
- **Výjimky (exception)** – chyba procesoru (dělení nulou, neplatná adresa – segmentation fault).

### Průběh obsluhy přerušení

1. CPU dokončí aktuální instrukci.
2. Uloží stav (registry, PC) na zásobník.
3. Podle **vektoru přerušení** (tabulka adres obsluhy) skočí na příslušný **ISR (Interrupt Service Routine)**.
4. ISR provede obsluhu.
5. CPU obnoví uložený stav a pokračuje v přerušeném programu.

---

## I/O operace

Jak CPU komunikuje s periferiemi? Existují tři přístupy:

### 1. Programový I/O (Polling)
CPU se stále dotazuje zařízení „jsi hotov?" – jednoduché, ale CPU nic jiného nedělá.

### 2. Přerušeními řízený I/O
Zařízení pošle přerušení, až je hotové – CPU může mezitím dělat jinou práci.

### 3. DMA (Direct Memory Access)
Speciální řadič DMA přenáší data přímo mezi zařízením a pamětí **bez účasti CPU**. CPU dostane přerušení až po dokončení celého přenosu – ideální pro velké bloky dat (disk, síť).

---

## Hierarchie pamětí

Čím rychlejší paměť, tím dražší a menší. Proto počítače používají hierarchii:

```
         ┌─────────┐
         │Registry │  ← nejrychlejší (~1 ns), nejmenší (desítky B)
         ├─────────┤
         │  Cache  │  ← L1/L2/L3, uvnitř CPU (~1–10 ns, kB–MB)
         ├─────────┤
         │   RAM   │  ← operační paměť (~50–100 ns, GB)
         ├─────────┤
         │  SSD    │  ← (~100 µs, stovky GB – TB)
         ├─────────┤
         │  HDD    │  ← (~5 ms, TB)
         └─────────┘
              ↑
         nejpomalejší, největší, nejlevnější
```

### Cache a princip lokality

Cache funguje díky tomu, že programy mají **prostorovou lokalitu** (po přístupu k adrese X brzy přistoupí k X+1) a **časovou lokalitu** (nedávno použitá data budou brzy znovu potřeba). Pokud je data v cache – **cache hit** (rychlé). Pokud ne – **cache miss** (musí se načíst z RAM).

---

## Základní deska (Motherboard)

Základní deska je fyzický základ počítače – spojuje všechny komponenty:

- **CPU socket** – patice procesoru
- **RAM sloty** – DIMM sloty pro paměťové moduly
- **Chipset** – dříve North/South Bridge, dnes integrován; řídí komunikaci CPU ↔ RAM ↔ periferie
- **PCIe sloty** – pro grafické karty, NVMe SSD, síťové karty
- **BIOS/UEFI chip** – firmware, který se spustí jako první a inicializuje hardware
- **Konektory** – SATA (pro disky), USB, audio, síť

> **BIOS vs. UEFI**: BIOS (Basic Input/Output System) je starý 16-bitový firmware s textovým rozhraním a podporou disků max. 2 TB. UEFI (Unified Extensible Firmware Interface) je moderní nástupce – 32/64-bitový, grafické rozhraní, podporuje GPT disky, Secure Boot a rychlejší start systému.
