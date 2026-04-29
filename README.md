# How I met a Pingu 🐧

> Web adaptation of the French storytelling dice game *Comment j'ai adopté un Gnou*

**▶ Play online → [metanef.github.io/pingu/](https://metanef.github.io/pingu/)**

---

## About

*How I met a Pingu* is a digital companion for the party game *Comment j'ai adopté un Gnou*, where players craft hilarious improvised stories guided by coloured dice. Roll, pick up the prompt, and weave a tale — one die at a time.

- 🎲 **3–8 players**
- ⏱️ **15–30 minutes**
- 🌐 **French-language prompts**

---

## How to play

1. Click **Lancer les dés** (green button) to roll all six story dice and reveal a starting sentence.
2. The active storyteller narrates a story, weaving in each coloured die's phrase from **left to right**:

| Die | Role |
|-----|------|
| 🟡 Yellow | Opens the story *(« Tu vas pas me croire… »)* |
| 🟠 Orange | Adds detail *(« C'est pourquoi… »)* |
| 🔴 Red    | Introduces a twist *(« Le plus drôle… »)* |
| 🟣 Purple | Continues the plot *(« Ah, j'oubliais ! »)* |
| 🔵 Light blue | Leads to the ending *(« Et là, patatras ! »)* |
| 🟦 Blue   | Concludes the story *(« Comme dirait mamie… »)* |

3. **Variant:** At any moment, other players can press **Lancer un dé noir** (up to 3 times) to throw a black die and force the storyteller to incorporate an unexpected interruption.

---

## Features

- 🌑 **Dark mode** interface
- 📱 **Fully responsive** — works on mobile, tablet, and desktop
- 🎲 **Dice roll animations**
- 📖 **In-app rules panel**
- 53 unique starting sentences, 6 × 6 story prompts, 6 black interruption prompts

---

## Todo

- **English version**
- **Clickable rule picture**
- **Remove line beside rules block**

---

## Tech stack

Plain HTML / CSS / JavaScript — no build step, no dependencies beyond [MDI icons](https://materialdesignicons.com/).

```
index.html   – markup
style.css    – dark theme, responsive layout
script.js    – dice logic
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
