# 🎭 Empires

A simple, no-install party game for groups. Each player secretly enters a word or phrase, then everyone takes turns guessing who wrote each one.

Live at: [GitHub Pages](../../)

## How to play

1. Pass the device around — each player types their secret word and taps **Add Word**
2. Once everyone has added their word, tap **Done - Start Revealing**
3. The words are shuffled and shown one at a time
4. Players debate and guess who wrote each word
5. Tap **Reset Game** to start a new round

## Features

- Words are saved to `localStorage` so a page refresh won't wipe progress
- Fully responsive — works on phones, tablets, and desktops
- Zero dependencies, no build step, no accounts
- **PWA** — installable on Android, iOS, and desktop; works fully offline

## Project structure

```
empires_guess_the_author/
├── index.html              # Single-page app
├── manifest.json           # PWA manifest
├── sw.js                   # Service worker (offline caching)
├── assets/
│   ├── style.css           # Styles
│   ├── script.js           # Game logic
│   ├── icon.svg            # App icon (favicon, PWA, OG)
│   └── build-info.js       # Build metadata (injected at deploy time)
└── .github/
    └── workflows/
        └── deploy.yml      # GitHub Pages deployment
```

## Running locally

Just open `index.html` in a browser — no server required.

## Deployment

Pushes to `main` automatically deploy to GitHub Pages via the included workflow. Build timestamp and project name are injected into `build-info.js` at deploy time and logged to the browser console.
