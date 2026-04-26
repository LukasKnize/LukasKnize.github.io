# Okruh 9 – Souborové systémy, správa uživatelů, práva, procesy, interprety v OS

## Souborové systémy

**Souborový systém (FS)** organizuje data na úložném médiu (HDD, SSD, flash) do souborů a adresářů a spravuje jejich metadata.

### Co řeší souborový systém?

1. **Organizace dat** – logická struktura (soubory, adresáře).
2. **Mapování** – překlad jména souboru na fyzické místo na disku.
3. **Metadata** – kdo soubor vlastní, kdy byl změněn, jaká má práva.
4. **Fragmentace** – efektivní využití místa.
5. **Odolnost** – konzistence po výpadku napájení (journaling).

---

### Unix/Linux souborové systémy

#### Inode

Základ Unixového FS je **inode** (index node) – datová struktura uchovávající metadata souboru:

```
Inode č. 1234
├── Typ (soubor/adresář/symlink)
├── Práva (rwxr-xr--)
├── Vlastník (UID) a skupina (GID)
├── Velikost v bajtech
├── Časy: atime (přístup), mtime (modifikace), ctime (změna inode)
├── Počet hard linků
└── Ukazatele na datové bloky disku
```

**Adresář** je speciální soubor obsahující tabulku: `název_souboru → číslo_inode`. Jméno souboru tedy *není* součástí inode – to umožňuje **hard linky** (více jmen ukazujících na tentýž inode).

```
/home/neko/dokument.txt → inode 1234
/home/neko/alias.txt    → inode 1234  (hard link – tentýž soubor)
/home/neko/odkaz.txt    → inode 5678  (symlink – jiný inode, obsah = cesta)
```

#### Journaling

Moderní FS si vedou **žurnál** (log transakcí). Před zápisem na disk se záměr zaznamená do žurnálu. Po výpadku napájení se žurnál přehraje – FS se obnoví do konzistentního stavu bez nutnosti `fsck` scan celého disku.

#### Přehled souborových systémů Linuxu

| FS | Vlastnosti | Použití |
|----|-----------|---------|
| **ext4** | Stabilní, journaling, zpětná kompatibilita | Výchozí na Debianu/Ubuntu |
| **XFS** | Velké soubory a disky, paralelní I/O | Red Hat/Fedora, datové servery |
| **Btrfs** | Snapshoty, RAID, komprese, CoW | openSUSE, moderní systémy |
| **ZFS** | Excelentní integrita dat, RAID-Z, snapshoty | Servery, NAS (FreeBSD, Linux via DKMS) |
| **tmpfs** | Virtuální FS v RAM | `/tmp`, `/run` |
| **proc, sysfs** | Virtuální FS – informace o jádru a zařízení | `/proc`, `/sys` |

#### Mount

V Unixu se připojení disku nebo oddílu nazývá **mount**. Každé zařízení se připojí do adresářového stromu:

```bash
sudo mount /dev/sdb1 /mnt/data   # připoj disk do /mnt/data
df -h                             # zobrazí připojené FS a volné místo
sudo umount /mnt/data             # odpoj
```

Trvalé připojení se konfiguruje v souboru `/etc/fstab`.

---

### Windows souborové systémy

| FS | Vlastnosti |
|----|-----------|
| **NTFS** | Journaling, ACL práva, šifrování (EFS), max 256 TB | 
| **FAT32** | Jednoduchý, max soubor 4 GB, kompatibilní (USB, SD) |
| **exFAT** | FAT32 bez omezení velikosti, pro flash média |
| **ReFS** | Odolnost dat, pro servery (Storage Spaces) |

NTFS ukládá metadata v **MFT (Master File Table)** – obdoba inode tabulky.

---

## Správa uživatelů

### Unix/Linux – uživatelé a skupiny

Každý uživatel má **UID** (User ID) a náleží do jedné nebo více **skupin** (GID).

Klíčové soubory:
- `/etc/passwd` – seznam uživatelů: `jméno:x:UID:GID:komentář:home:shell`
- `/etc/shadow` – hashovaná hesla (přístup jen pro root)
- `/etc/group` – skupiny a jejich členové

```bash
# Správa uživatelů
useradd -m -s /bin/bash neko   # vytvoří uživatele s home adresářem
passwd neko                     # nastaví heslo
usermod -aG sudo neko           # přidá do skupiny sudo
userdel -r neko                 # smaže uživatele i home
id neko                         # zobrazí UID, GID, skupiny
```

Zvláštní uživatel **root** (UID 0) má neomezená práva. Administrace se typicky provádí přes `sudo` – dočasné spuštění příkazu s právy roota, konfigurace v `/etc/sudoers`.

### Windows – uživatelé a skupiny

- Lokální uživatelé a skupiny spravovány přes **SAM** (Security Account Manager) nebo Active Directory.
- **SID** (Security Identifier) – unikátní identifikátor (analogie UID): `S-1-5-21-...`.
- **UAC** (User Account Control) – při požadavku na admin operaci zobrazí dialog pro potvrzení/zadání hesla.

---

## Uživatelská práva a přístupová kontrola

### Unix – tradiční práva (DAC)

Každý soubor má tři skupiny práv: **uživatel (u)**, **skupina (g)**, **ostatní (o)**. Každá skupina má bity: **r** (čtení), **w** (zápis), **x** (spuštění).

```
 -rwxr-xr--  1 neko devs 4096 Apr 1 script.sh
  ││││││││└── ostatní: r-- (jen čtení)
  │││└┴┴┴──── skupina: r-x (čtení + spuštění)
  └┴┴┴─────── uživatel: rwx (vše)
```

Práva jako čísla (oktalová notace):
- r = 4, w = 2, x = 1
- `rwxr-xr--` = 7 5 4 = `chmod 754 script.sh`

Speciální bity:
- **SUID** (set-UID) – spustitelný soubor běží s právy vlastníka, ne spouštějícího uživatele (`/usr/bin/passwd`).
- **SGID** – analogicky pro skupinu; na adresáři: nové soubory dědí skupinu adresáře.
- **Sticky bit** – na adresáři: soubor může smazat jen jeho vlastník (používá `/tmp`).

```bash
chmod 755 soubor       # rwxr-xr-x
chmod u+x soubor       # přidá x pro vlastníka
chmod o-r soubor       # odebere r pro ostatní
chown neko:devs soubor # změní vlastníka a skupinu
```

### ACL (Access Control List)

Standardní Unix práva jsou hrubá (tři kategorie). **ACL** umožňuje jemnozrnnější přístup – práva pro konkrétní uživatele nebo skupiny:

```bash
setfacl -m u:anna:rw soubor.txt   # Anna má čtení+zápis
getfacl soubor.txt                  # zobrazí ACL
```

### MAC – povinná kontrola přístupu (Mandatory Access Control)

**SELinux** (Red Hat/Fedora) a **AppArmor** (Ubuntu) přidávají povinnou vrstvu nad standardní Unixová práva. I root je omezen – procesy mají přesně definované, co smí dělat. Zásadní pro bezpečnostně kritické systémy.

---

## Správa procesů

### Zobrazení a monitorování procesů

```bash
# Linux
ps aux                 # všechny procesy (BSD styl)
ps -ef                 # všechny procesy (SysV styl)
top                    # interaktivní monitor (q = quit)
htop                   # lepší top (F9 = kill, F5 = strom)
pstree                 # strom procesů
pgrep firefox          # PID procesů podle jména
```

### Signály

Procesy komunikují přes **signály** – asynchronní oznámení:

| Signál | Číslo | Popis |
|--------|-------|-------|
| `SIGHUP` | 1 | Zavěšení – reload konfigurace |
| `SIGINT` | 2 | Přerušení (Ctrl+C) |
| `SIGKILL` | 9 | Okamžité ukončení (nelze zachytit!) |
| `SIGTERM` | 15 | Žádost o ukončení (lze zachytit) |
| `SIGSTOP` | 19 | Pozastavení (nelze zachytit) |
| `SIGCONT` | 18 | Pokračování po STOP |

```bash
kill -15 1234     # pošli SIGTERM procesu 1234 (zdvořilá žádost)
kill -9 1234      # SIGKILL – nezabiješ, popravíš
killall firefox   # zabij všechny procesy jménem firefox
```

### Priorita procesů (nice)

Hodnota **nice** (-20 až +19) ovlivňuje prioritu plánování. Záporná nice = vyšší priorita (jen root může nastavit zápornou).

```bash
nice -n 10 ./dlouhy_vypocet   # spusť s nižší prioritou
renice -n 5 -p 1234           # změň prioritu běžícího procesu
```

### Procesy na pozadí (job control)

```bash
./program &           # spustí na pozadí
jobs                  # seznam úloh shellu
fg %1                 # přesuň úlohu 1 na popředí
bg %2                 # pošli úlohu 2 na pozadí
Ctrl+Z                # pozastaví běžící úlohu
nohup ./program &     # spusť, který přežije odhlášení
screen / tmux         # terminálový multiplexer – session přežije odpojení
```

---

## Interprety příkazů v OS (Shell)

**Shell** (interpret příkazů) je program, který čte příkazy od uživatele (nebo ze souboru) a spouští je.

### Přehled shellů

| Shell | Charakteristika |
|-------|----------------|
| **sh** (Bourne shell) | Původní Unix shell, základ standardu POSIX |
| **bash** (Bourne Again SH) | Nejrozšířenější, výchozí na Linuxu |
| **zsh** | Bash+ (tab completion, themes), výchozí na macOS |
| **fish** | Uživatelsky přívětivý, ale nekompatibilní s bash |
| **dash** | Rychlý, POSIX-kompatibilní, výchozí `/bin/sh` na Ubuntu pro skripty |
| **PowerShell** | Windows; objektový shell (.NET objekty místo textu) |
| **cmd.exe** | Starý Windows shell, omezený |

### Základní konstrukce bash skriptů

```bash
#!/bin/bash
# Shebang říká OS, čím skript spustit

# Proměnné
JMENO="světe"
echo "Ahoj, $JMENO!"

# Podmínka
if [ -f "/etc/passwd" ]; then
    echo "Soubor existuje"
elif [ -d "/tmp" ]; then
    echo "Je to adresář"
else
    echo "Nic z toho"
fi

# Cyklus
for i in {1..5}; do
    echo "Iterace $i"
done

# While
while read radek; do
    echo "Načteno: $radek"
done < soubor.txt

# Funkce
pozdrav() {
    local jmeno="$1"   # $1 = první argument funkce
    echo "Ahoj, $jmeno!"
}
pozdrav "Lukáš"

# Výstupní kód ($? = 0 ok, != 0 chyba)
ls /neexistujici 2>/dev/null || echo "Adresář neexistuje"
```

### Roura (pipe) a přesměrování

```bash
ls -la | grep ".sh" | sort       # výstup ls → filtr grep → seřadit
cat soubor.txt | wc -l           # počet řádků souboru
find . -name "*.log" | xargs rm  # smaže všechny .log soubory

# Přesměrování
echo "text" > soubor.txt         # přepíše soubor
echo "text" >> soubor.txt        # přidá na konec
cat soubor.txt 2>/dev/null       # stderr do /dev/null (zahodí chyby)
command > vystup.txt 2>&1        # stdout i stderr do souboru
```

### Proměnné prostředí

```bash
echo $PATH          # hledací cesta pro spustitelné soubory
echo $HOME          # domovský adresář
echo $USER          # aktuální uživatel
export MOJE_VAR=42  # vytvoří proměnnou prostředí pro potomky
env                 # seznam všech proměnných prostředí
```
