# Okruh 3 – Systémy a aplikace na platformě World Wide Web

## Co je World Wide Web?

**World Wide Web (WWW)** není totéž co internet. **Internet** je fyzická síť počítačů propojených kabely a bezdrátovými spoji. **Web** je jedna ze služeb, která na internetu běží – konkrétně distribuovaný systém hypertextových dokumentů dostupných přes protokol HTTP.

Web vymyslel **Tim Berners-Lee** v roce 1989 v CERNu jako způsob sdílení vědeckých dokumentů. Tři základní stavební kameny, které navrhl, fungují dodnes:
- **URL** – adresa dokumentu (Uniform Resource Locator)
- **HTTP** – protokol pro přenos dokumentů (Hypertext Transfer Protocol)
- **HTML** – jazyk pro zápis dokumentů (Hypertext Markup Language)

---

## Jak web funguje – HTTP komunikace

### Princip požadavek/odpověď

Web funguje na principu **klient/server**: prohlížeč (klient) posílá HTTP požadavky, webový server vrací odpovědi.

```
Prohlížeč                              Webový server
    │                                       │
    │── GET /index.html HTTP/1.1 ──────────→│
    │   Host: www.example.com               │
    │                                       │
    │←── HTTP/1.1 200 OK ─────────────────── │
    │    Content-Type: text/html             │
    │    <html>...</html>                    │
```

### HTTP metody

| Metoda | Účel | Příklad |
|--------|------|---------|
| **GET** | Načtení zdroje | Otevření stránky |
| **POST** | Odeslání dat | Odeslání formuláře |
| **PUT** | Nahrazení zdroje | Aktualizace profilu |
| **DELETE** | Smazání zdroje | Smazání příspěvku |
| **PATCH** | Částečná úprava | Změna e-mailu |

### HTTP stavové kódy

| Rozsah | Kategorie | Příklady |
|--------|-----------|---------|
| 2xx | Úspěch | 200 OK, 201 Created |
| 3xx | Přesměrování | 301 Moved Permanently, 302 Found |
| 4xx | Chyba klienta | 400 Bad Request, 401 Unauthorized, 404 Not Found |
| 5xx | Chyba serveru | 500 Internal Server Error, 503 Service Unavailable |

### HTTPS

**HTTPS** = HTTP + TLS (Transport Layer Security). Přidává šifrování (nikdo na cestě nemůže číst data), autenticitu (certifikát ověřuje totožnost serveru) a integritu (data nelze cestou pozměnit). Dnes je HTTPS standardem – Google penalizuje stránky bez HTTPS, prohlížeče zobrazují varování.

---

## URL a DNS

**URL** (Uniform Resource Locator) identifikuje konkrétní zdroj na webu:

```
 https://www.example.com:8080/clanky/web?search=HTTP#sekce1
 └──┬──┘ └──────┬──────┘└┬─┘└────┬────┘└────┬────┘└───┬──┘
 schéma       doména    port   cesta       query    fragment
```

**DNS** (Domain Name System) překládá doménová jména na IP adresy. Prohlížeč sám o sobě neumí kontaktovat `www.example.com` – musí zjistit, jaká IP adresa za tímto jménem stojí. DNS funguje jako telefonní seznam internetu, hierarchicky:

```
Dotaz: www.example.com
  1. Lokální cache → nenalezeno
  2. Resolver ISP → dotáže se root serveru
  3. Root server → odkáže na .com TLD server
  4. .com TLD server → odkáže na example.com nameserver
  5. example.com nameserver → vrátí IP 93.184.216.34
```

---

## Technologie na straně klienta

Vše, co běží **v prohlížeči** uživatele:

### HTML (HyperText Markup Language)

**Značkovací jazyk** – definuje strukturu a sémantiku dokumentu. Není programovací jazyk (nemá cykly, podmínky), je to popis obsahu.

```html
<!DOCTYPE html>
<html lang="cs">
  <head>
    <meta charset="UTF-8">
    <title>Moje stránka</title>
  </head>
  <body>
    <h1>Nadpis</h1>
    <p>Odstavec textu s <a href="https://example.com">odkazem</a>.</p>
  </body>
</html>
```

### CSS (Cascading Style Sheets)

**Stylovací jazyk** – odděluje vzhled od struktury. Definuje barvy, fonty, layout, animace.

```css
h1 {
  color: #333;
  font-size: 2rem;
}

.container {
  max-width: 1200px;
  margin: 0 auto;
}
```

**Kaskáda** = pravidla se aplikují v pořadí podle specificity a pořadí definice. **Responsivní design** se řeší pomocí media queries: `@media (max-width: 768px) { ... }`.

### JavaScript

**Skriptovací/programovací jazyk** – přidává interaktivitu. Spouští se přímo v prohlížeči (JavaScript engine, např. V8 v Chrome).

```javascript
// Kliknutím na tlačítko změním text
document.getElementById('btn').addEventListener('click', () => {
  document.getElementById('msg').textContent = 'Kliknuto!'
})
```

**DOM (Document Object Model)** – JavaScript vidí HTML jako stromovou strukturu objektů a může ji měnit za běhu (dynamické stránky).

**Moderní JS ekosystém:**
- **React, Vue, Angular** – frameworky pro tvorbu komplexních SPA (Single Page Application)
- **Fetch API / Axios** – HTTP požadavky ze stránky (AJAX/REST)
- **WebSockets** – obousměrná real-time komunikace (chat, hry)

---

## Technologie na straně serveru

Vše, co běží na **webovém serveru**:

### Webové servery

**Apache**, **Nginx**, **IIS** – přijímají HTTP požadavky a vracejí odpovědi. Buď servírují statické soubory (HTML, CSS, obrázky), nebo předávají požadavky serverové aplikaci.

### Serverové jazyky a frameworky

| Jazyk | Typické frameworky | Použití |
|-------|-------------------|---------|
| **PHP** | Laravel, Symfony | Původní jazyk webu, WordPress |
| **Python** | Django, Flask, FastAPI | Data science aplikace, API |
| **JavaScript (Node.js)** | Express, NestJS | Realtime aplikace, API |
| **Java** | Spring Boot | Podnikové systémy |
| **Ruby** | Rails | Rychlý prototyping |
| **Go** | Gin, Echo | Výkonné mikroservisy |
| **C#** | ASP.NET Core | Microsoftí ekosystém |

### Databáze na backendu

Server ukládá a načítá data z databáze. Webové aplikace nejčastěji používají:
- **Relační DB** (MySQL, PostgreSQL) – strukturovaná data, SQL dotazy
- **NoSQL** (MongoDB, Redis) – flexibilní schéma, klíč-hodnota, dokumenty

### REST API

Moderní webové aplikace oddělují backend od frontendu pomocí **REST API** (Representational State Transfer). Backend poskytuje JSON data přes HTTP, frontend (nebo mobilní app) tato data zobrazuje. Výhoda: jeden backend může obsluhovat webový prohlížeč, iOS app i Android app.

```
GET  /api/users        → seznam uživatelů
GET  /api/users/42     → uživatel s ID 42
POST /api/users        → vytvoření nového uživatele
PUT  /api/users/42     → aktualizace uživatele 42
DELETE /api/users/42   → smazání uživatele 42
```

---

## Správa webových systémů

### Webový hosting

- **Shared hosting** – více webů sdílí jeden server (levné, omezené)
- **VPS** (Virtual Private Server) – virtualizovaný dedikovaný server
- **Dedikovaný server** – fyzický server jen pro jeden web
- **Cloud hosting** (AWS, Azure, GCP) – elastické škálování

### CDN (Content Delivery Network)

Statické soubory (obrázky, CSS, JS) jsou distribuovány do serverů po celém světě. Uživatel stahuje soubor z geograficky nejbližšího serveru → nižší latence.

### Bezpečnost webových aplikací

Nejčastější zranitelnosti (OWASP Top 10):
- **SQL Injection** – útočník vloží SQL kód do formuláře
- **XSS (Cross-Site Scripting)** – vložení škodlivého JS do stránky
- **CSRF (Cross-Site Request Forgery)** – podvržený požadavek jménem přihlášeného uživatele
- **Broken Authentication** – slabé nebo špatně implementované přihlašování

---

## Shrnutí technologické vrstvy webu

```
 Uživatel
    ↕
 Prohlížeč: HTML + CSS + JavaScript (klientská strana)
    ↕ HTTP/HTTPS
 CDN / Load Balancer / Reverse Proxy (Nginx)
    ↕
 Aplikační server: Python/Node.js/PHP/… (serverová strana)
    ↕
 Databáze: MySQL / PostgreSQL / MongoDB / Redis
    ↕
 Úložiště souborů: S3, lokální disk
```
