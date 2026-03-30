# Ukázkový souhrn

Toto je ukázkový souhrn předmětu. Nahraď tento soubor vlastním obsahem ve formátu **Markdown**.

## Jak přidat vlastní obsah

1. Vytvoř složku `data/predmety/<id-predmetu>/`
2. Přidej soubor `summary.md` s obsahem v Markdown
3. Přidej `test.json` s otázkami (viz formát níže)
4. Přidej `karticky.json` s kartičkami
5. Zaregistruj předmět v `data/predmety/index.json`

## Formátování

Souhrn podporuje celé **GitHub Flavored Markdown**:

### Tabulky

| Pojem | Definice |
|-------|----------|
| API | Application Programming Interface |
| CPU | Central Processing Unit |
| RAM | Random Access Memory |

### Kód

```python
def hello_world():
    print("Hello, World!")
```

### Citace

> Důležitá poznámka nebo citát lze zapsat takto.

### Seznamy

- Položka 1
- Položka 2
  - Vnořená položka
  - Další vnořená položka
- Položka 3

---

*Tento soubor je pouze šablona — uprav ho dle libosti.*
