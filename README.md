# Terminal CV Portfolio

Interaktywne CV w stylu terminala zbudowane z wykorzystaniem Vue 3 i Vite. Projekt prezentuje dane osobowe, umiejętności, doświadczenie zawodowe, edukację i projekty w formie interfejsu przypominającego terminal linii poleceń.

## ✨ Cechy

- 🖥️ **Interfejs terminala** - Realistyczny wygląd i zachowanie terminala
- ⌨️ **Interaktywne komendy** - Nawigacja za pomocą poleceń tekstowych
- 📜 **Historia komend** - Nawigacja po historii za pomocą strzałek ↑/↓
- ⚡ **Autouzupełnianie** - Tab do autouzupełniania komend
- 🎨 **Kolorowe wyjście** - Stylizowane komunikaty i sekcje
- 📱 **Responsywny design** - Działa na urządzeniach mobilnych i desktopowych

## 🚀 Dostępne komendy

| Komenda | Opis |
|---------|------|
| `help` | Wyświetla listę dostępnych komend |
| `about` | Informacje o mnie |
| `contact` | Dane kontaktowe |
| `skill` | Lista umiejętności technicznych |
| `exp` | Historia zatrudnienia |
| `edu` | Informacje o edukacji |
| `proj` | Lista projektów |
| `cls` | Czyści terminal |
| `cv` | Pobiera CV w formacie PDF |

## 🛠️ Stack technologiczny

- **Framework:** Vue 3 (Composition API)
- **Build Tool:** Vite 7
- **Język:** JavaScript (ES6+)
- **Style:** CSS3 z własnym motywem terminala

## 📦 Instalacja i uruchomienie

### Wymagania

- Node.js (wersja 18 lub wyższa)
- npm lub yarn

### Instalacja zależności

```bash
npm install
```

### Uruchomienie w trybie deweloperskim

```bash
npm run dev
```

Aplikacja będzie dostępna pod adresem `http://localhost:5173`

### Build produkcyjny

```bash
npm run build
```

### Podgląd buildu produkcyjnego

```bash
npm run preview
```

## 📁 Struktura projektu

```
cv-portfolio/
├── public/              # Pliki statyczne
├── src/
│   ├── assets/         # Style, obrazy, fonty
│   │   ├── global.css
│   │   ├── terminalcv.css
│   │   └── bg.png
│   ├── components/     # Komponenty Vue
│   │   ├── TerminalCV.vue
│   │   └── TerminalCV.js
│   ├── data/          # Dane aplikacji
│   │   ├── commands.js       # Definicje komend
│   │   └── personalData.js   # Dane osobowe
│   ├── App.vue        # Główny komponent
│   └── main.js        # Punkt wejścia
├── index.html
├── vite.config.js
└── package.json
```

## ⚙️ Personalizacja

### Zmiana danych osobowych

Edytuj plik `src/data/personalData.js` aby zaktualizować:
- Imię i nazwisko
- Tytuł zawodowy
- Dane kontaktowe
- Umiejętności
- Doświadczenie zawodowe
- Edukację
- Projekty

### Dodanie nowych komend

1. Dodaj definicję komendy w `src/data/commands.js`
2. Zaimplementuj logikę w `src/components/TerminalCV.js` w metodzie `processCommand()`
3. Dodaj metodę wyświetlającą dane dla nowej komendy

### Stylizacja

- `src/assets/global.css` - Globalne style aplikacji
- `src/assets/terminalcv.css` - Style specyficzne dla terminala

## 🎨 Funkcjonalności terminala

- **Nawigacja historii:** Użyj strzałek ↑/↓ do przeglądania poprzednich komend
- **Autouzupełnianie:** Naciśnij Tab aby autouzupełnić komendę
- **Czyszczenie:** Użyj komendy `cls` aby wyczyścić terminal
- **Case-insensitive:** Komendy nie są wrażliwe na wielkość liter

## 💡 Recommended IDE Setup

[VSCode](https://code.visualstudio.com/) + [Volar](https://marketplace.visualstudio.com/items?itemName=Vue.volar) (wyłącz Vetur)

Lub

[WebStorm](https://www.jetbrains.com/webstorm/) z wbudowanym wsparciem dla Vue

## 📝 Licencja

Projekt prywatny - wszelkie prawa zastrzeżone.

## 👤 Autor

**Kacper Wrobel**
- Email: wrobelk03@gmail.com
- GitHub: [@kacrro](https://github.com/kacrro)
- Portfolio: Terminal CV

---

*Zbudowane z ❤️ przy użyciu Vue 3 + Vite*
