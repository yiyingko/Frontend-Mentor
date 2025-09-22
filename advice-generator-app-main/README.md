
# Advice Generator App

A tiny app that fetches random advice from the public Advice Slip API and displays it with a dice button.

## 🧪 Live demo
- GitHub Pages: https://yiyingko.github.io/Frontend-Mentor/advice-generator-app-main/

## 🧰 Tech
- HTML, CSS, JavaScript (Fetch API)
- Advice Slip API

## 🎯 What I practiced
- Calling a 3rd-party API
- Accessible interactions and keyboard support
- Small, responsive layout

## ♿ Accessibility
- Real `<button>` for the dice with `aria-label`
- Advice text announced via `role="status" aria-live="polite"`
- Visible `:focus-visible` styles
- Respects `prefers-reduced-motion`

## 🚀 How it works
Click the dice → fetch random advice → update the advice ID and text.
The API caches responses for ~2 seconds, so the app debounces rapid clicks to avoid duplicate results.

## 📈 Performance
- Minimal JS, no frameworks
- Tiny SVG assets (inline or sized to avoid layout shift)
- Client cache disabled on fetch (`{ cache: "no-store" }`)

## 🔧 Local dev
Open `index.html` with a local server (e.g. VS Code Live Server).

## 🧭 Next ideas
- Loading skeleton or spinner on the quote
- Persist last advice in `localStorage`
- Simple tests for the fetch helper

## 🙌 Credits
- Challenge: Frontend Mentor
- API: Advice Slip — https://api.adviceslip.com/
