# How I met a Pingu 🐧

> Web adaptation of the French storytelling dice game *Comment j'ai adopté un Gnou*

**▶ Play online → [metanef.github.io/pingu/](https://metanef.github.io/pingu/)**

---

## About

*How I met a Pingu* is a digital companion for the party game *Comment j'ai adopté un Gnou*, where players craft hilarious improvised stories guided by coloured dice. Roll, pick up the prompt, and weave a tale — one die at a time.

- 🎲 **3–8 players**
- ⏱️ **15–30 minutes**
- 🇫🇷 🇬🇧 **French & English**

---

## How to play

1. Click **Roll the dice** to roll all six story dice and reveal a starting sentence.
2. The active storyteller narrates a story, weaving in each coloured die's phrase from **left to right**:

| Die | Role |
|-----|------|
| 🟡 Yellow    | Opens the story *(« You won't believe it… »)* |
| 🟠 Orange    | Adds detail *(« That's why… »)* |
| 🔴 Red       | Introduces a twist *(« The funniest part… »)* |
| 🟣 Purple    | Continues the plot *(« Oh, I forgot! »)* |
| 🔵 Light blue | Leads to the ending *(« And then, boom! »)* |
| 🟦 Blue      | Concludes the story *(« As my grandma would say… »)* |

3. **Variant:** At any moment, other players can press **Roll a black die** (up to 3 times) to force the storyteller to incorporate an unexpected interruption.

---

## Features

- 🌑 **Dark mode** + ☀️ **Light mode** — toggle in the top-right corner
- 🇫🇷 🇬🇧 **FR / EN language switch** — top-left corner, swaps all UI text and dice prompts instantly
- 🎲 **Dice roll animations** with spring physics
- 🔍 **Zoomable rules image** — click to open lightbox, close with ✕ or click outside
- 📱 **Fully responsive** — 2×3 dice grid on mobile with numbered badges
- 📖 **In-app rules panel** with smooth expand/collapse
- **53 unique starting sentences** per language, 6×6 story prompts, 6 black interruption prompts

---

## Tech stack

Plain HTML / CSS / JavaScript — no build step, no framework, no dependencies beyond [MDI icons](https://materialdesignicons.com/) and [Google Fonts](https://fonts.google.com/).

```
index.html   – semantic markup with data-i18n attributes
style.css    – CSS custom properties, dark/light themes, responsive grid
script.js    – dice logic, i18n engine, theme & lang switches
gnou.png     – rules example image
```

---

## Development

```bash
# Any static server works, e.g.:
npx serve .
# or just open index.html in your browser
```

---

## Credits

- Original game: *[Comment j'ai adopté un Gnou](https://apprendreaeduquer.fr/comment-jai-adopte-un-gnou/)* — all rights reserved
- Web adaptation: **@metanef** © 2024

![screenshot](https://github.com/EloiFilaudeau/howimetapingu/assets/43535284/7fd50f1f-40a5-459c-a209-79db057de73b)