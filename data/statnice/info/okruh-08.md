# Okruh 8 – OS a SW pro jednoúčelová a speciální zařízení, Smart*

## Jednoúčelová vs. univerzální zařízení

**Univerzální počítač** (PC, server) je navržen ke spouštění libovolného software. **Jednoúčelové (embedded) zařízení** je navrženo k provádění jednoho specifického úkolu – pračka řídí otáčky motoru, bankomat vydává peníze, průmyslový robot svařuje karosérie.

Klíčové rozdíly:

| | Univerzální PC | Jednoúčelové zařízení |
|-|---------------|----------------------|
| Výkon | Obecný, přebytek | Optimalizovaný pro úlohu |
| OS | Windows, Linux, macOS | RTOS, vlastní firmware |
| Aktualizace | Časté, uživatel řídí | Zřídkavé, výrobce řídí |
| Cena | Stovky–tisíce USD | Jednotky USD (MCU) |
| Spotřeba | Desítky–stovky W | Miliwatty–jednotky W |
| Spolehlivost | Standardní | Kritická (bezpečnostní systémy) |

---

## RTOS – Real-Time Operating System

Klíčovým pojmem embedded světa je **RTOS** – OS reálného času. Hlavní vlastnost: **garantovaná odezva v přesně definovaném čase**. Nestačí, aby autobrzdný systém reagoval průměrně za 5 ms – musí reagovat **vždy** za maximálně N ms, jinak hrozí nehoda.

### Typy real-time systémů

- **Hard real-time** – nedodržení termínu = katastrofa (airbag, lékařský přístroj, řídicí systém letadla).
- **Soft real-time** – zpoždění degraduje kvalitu, ale není kritické (přehrávač videa – přeskočí frame).
- **Firm real-time** – zpoždění je neakceptovatelné, ale bez nebezpečí (platební terminál).

### Vlastnosti RTOS

- **Deterministické plánování** – plánovač vždy vybere úlohu s nejvyšší prioritou, bez výjimky.
- **Malá latence přerušení** – přerušení je obslouženo do mikrosekund.
- **Malá paměťová stopa** – běží na MCU s kilobajty RAM.
- **Žádný (nebo minimální) virtuální adresní prostor** – přímý přístup k hardware.

### Příklady RTOS

| RTOS | Použití |
|------|---------|
| **FreeRTOS** | Nejrozšířenější open-source RTOS, IoT zařízení |
| **VxWorks** | Avionika, kosmické lodě (Mars Rover), komerční |
| **QNX** | Automobily (Blackberry QNX), průmysl, zdravotnictví |
| **Zephyr** | Moderní open-source, podpora ARM/RISC-V, IoT |
| **mbed OS** | ARM Cortex-M mikrokontroléry |
| **ThreadX** | Microsoft RTOS, Azure RTOS |

---

## Průmyslové řídicí systémy

### PLC (Programmable Logic Controller)

**PLC** je průmyslový počítač odolný vůči vibracím, prachu, teplotním extrémům a elektromagnetickému rušení. Řídí výrobní linky, dopravníky, čerpací stanice. Programuje se speciálními jazyky dle normy **IEC 61131-3**:

- **Ladder Diagram (LD)** – vizuálně připomíná elektrické schéma.
- **Structured Text (ST)** – textový jazyk podobný Pascalu.
- **Function Block Diagram (FBD)** – bloková schémata.

### SCADA a DCS

- **SCADA** (Supervisory Control and Data Acquisition) – monitoruje a řídí rozsáhlé systémy na dálku (elektrárny, vodovody, ropovody).
- **DCS** (Distributed Control System) – decentralizované řízení v chemickém průmyslu, rafineriích.

---

## SmartHome (Chytrá domácnost)

Chytrá domácnost propojuje domácí spotřebiče, osvětlení, zabezpečení a energetiku do jednoho řídicího ekosystému.

### Komunikační protokoly

| Protokol | Typ | Použití |
|----------|-----|---------|
| **Zigbee** | Bezdrátový (mesh, 2.4 GHz) | Žárovky Philips Hue, senzory |
| **Z-Wave** | Bezdrátový (mesh, 868/908 MHz) | Spínače, zámky (méně rušení než WiFi) |
| **Matter** | Univerzální standard (IP-based) | Apple, Google, Amazon – interoperabilita |
| **WiFi** | Bezdrátový | Kamery, chytré zásuvky |
| **Bluetooth LE** | Bezdrátový, krátký dosah | Zámky, senzory blízkosti |
| **KNX** | Drátový (sběrnice) | Profesionální budovy |

### Platformy

- **Apple HomeKit** – iOS ekosystém, bezpečnost, privátnost.
- **Google Home** – Android ekosystém, integrace Google Assistant.
- **Amazon Alexa** – Echo zařízení, rozsáhlá knihovna zařízení.
- **Home Assistant** – open-source, self-hosted, největší flexibilita.

### Bezpečnostní rizika IoT

IoT zařízení mají notoricky slabé zabezpečení – výchozí hesla, zastaralý firmware, nešifrovaná komunikace. Znám botnet **Mirai (2016)** infikoval 600 000 IoT zařízení a způsobil masivní DDoS útok.

---

## SmartCar (Chytrý automobil)

Moderní automobil obsahuje 50–150 **ECU** (Electronic Control Unit) – specializovaných počítačů řídících motor, převodovku, brzdový systém (ABS, ESP), airbag, navigaci, klimatizaci a infotainment.

### Komunikační sběrnice v autě

| Sběrnice | Rychlost | Použití |
|----------|---------|---------|
| **CAN bus** | až 1 Mbit/s | Motor, brzdový systém (standard od 1983) |
| **LIN bus** | 20 kbit/s | Jednoduchá zařízení (okna, osvětlení) |
| **FlexRay** | 10 Mbit/s | Bezpečnostně kritické systémy (X-by-wire) |
| **Automotive Ethernet** | 100 Mbit/s – 10 Gbit/s | ADAS, kamery, OTA aktualizace |

### ADAS a autonomní řízení

**ADAS** (Advanced Driver Assistance Systems):
- Adaptivní tempomat (ACC), Lane Keeping Assist, Automatic Emergency Braking.
- Senzory: kamera, radar, LIDAR, ultrazvuk.

Úrovně autonomního řízení SAE (0–5):
- **L0** – žádná automatizace (řidič dělá vše).
- **L2** – asistence (Tesla Autopilot – stále sleduje řidič).
- **L3** – podmíněná automatizace (řidič nemusí sledovat, ale musí být připraven převzít).
- **L4/L5** – plná automatizace (Waymo robotaxi – bez řidiče).

### Operační systémy v autě

- **QNX** – infotainment i bezpečnostní systémy (BlackBerry).
- **Android Automotive OS** – celý infotainment (Volvo, Polestar, GM) – na rozdíl od Android Auto (zrcadlení telefonu).
- **AUTOSAR** – standardizovaná softwarová architektura pro automotive ECU.

---

## SmartHealth (Zdravotnické technologie)

Zdravotnické přístroje podléhají přísné regulaci (FDA v USA, MDR v EU) a musí splňovat normy pro bezpečnost softwaru (**IEC 62304**).

### Příklady zařízení a jejich OS/FW

| Zařízení | Software/OS |
|----------|------------|
| Kardiostimulátor | Vlastní firmware, hard real-time |
| Nemocniční monitor | VxWorks, QNX |
| Inzulinová pumpa | Vlastní RTOS |
| Wearable fitness tracker | RTOS (FreeRTOS, Zephyr) |
| Diagnostický přístroj | Linux, Windows Embedded |

### Standardy pro výměnu zdravotních dat

- **HL7 / FHIR** – formáty pro výměnu zdravotních záznamů mezi systémy.
- **DICOM** – standard pro medicínské zobrazovací soubory (rentgen, MRI, CT).

---

## SmartWearables (Nositelná elektronika)

**Wearables** = zařízení nositelná na těle: chytré hodinky, fitness náramky, chytré brýle, sluchátka.

### Operační systémy pro wearables

| Platforma | Zařízení |
|-----------|---------|
| **watchOS** | Apple Watch – derivát iOS/macOS |
| **Wear OS** | Pixel Watch, Samsung Galaxy Watch – Android-based |
| **Tizen / One UI Watch** | Samsung (starší modely) |
| **RTOS** | Fitbit, Garmin, Amazfit – vlastní/FreeRTOS |

### Klíčové výzvy

- **Výdrž baterie** – základní constraint; vše se optimalizuje pro co nejnižší spotřebu.
- **Miniaturizace** – SoC (System on Chip) integruje CPU, GPU, WiFi, BT, senzory na jeden čip.
- **Bezpečnost a soukromí** – zdravotní data jsou citlivá; šifrování, anonymizace.

---

## Shrnutí

Jednoúčelová zařízení tvoří velkou část světa počítačů – v průměrném domě je dnes více embedded procesorů než v PC. Od průmyslových PLC po chytré žárovky platí společné principy: **minimální zdroje, maximální spolehlivost, specifický úkol**. Bezpečnost těchto zařízení je stále nedořešenou výzvou – IoT botnety jsou reálnou hrozbou.
