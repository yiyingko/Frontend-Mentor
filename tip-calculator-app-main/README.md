# Tip Calculator App
![Screenshot from 2024-07-22 18-16-24](https://github.com/user-attachments/assets/8ff5212c-a289-4aa4-81a1-869a40a964d6) ![Screenshot from 2024-07-22 18-18-20](https://github.com/user-attachments/assets/a9e69e66-2daa-4749-b17c-09c925793112)

This project is a solution to the **Tip Calculator App** challenge from
[Frontend Mentor](https://www.frontendmentor.io).

It was built in **2024** as part of my early front-end + JavaScript learning
journey and is kept as a reference rather than a fully refactored example.

---

## Overview

A simple tip calculator that:
- Accepts a **bill amount**
- Accepts **number of people**
- Lets the user choose a **tip percentage**
- Calculates:
  - **Tip amount per person**
  - **Total per person**
- Includes basic input validation and error messages
- Includes a mobile layout using a CSS media query

---

## Tech Stack

- HTML5
- CSS3 (includes a mobile media query)
- Vanilla JavaScript

No frameworks or build tools were used.

---

## JavaScript Logic (app.js)

All logic is handled in `app.js` with direct DOM manipulation.

### DOM elements
The script selects inputs and output elements by id/class:
- `#bill`, `#people`, `#custom`
- `#tip_person`, `#total_person`
- `.tip` buttons (preset tip percentages)
- all `input` fields for validation

### Initial state
- `window.onload` runs `reset()` to clear inputs and display `$0.00` defaults.

### Validation
- On `keyup`, each input is validated using a regex pattern based on its
  `name` attribute (`number` or `person`).
- Inputs are styled by switching classes:
  - `valid` / `invalid`
  - `custom-valid` / `custom-invalid`
- Error messages are displayed in corresponding elements like:
  - `billMsg`, `peopleMsg`, `customMsg`

### Calculation
- Clicking any `.tip` button triggers a calculation:
  - Early return if inputs are empty or validation fails
  - Tip per person:
    - `(bill * tip%) / people`
  - Total per person:
    - `(bill / people) + tip per person`
  - Values are rounded to 2 decimals (using `Math.ceil(... * 100) / 100`)
  - Results are written into:
    - `#tip_person`
    - `#total_person`

### Reset
- The Reset button calls `reset()` to restore the initial UI state.

---

## What I Practiced

- DOM selection and event handling
- Input validation using regex
- Conditional UI messaging
- Updating the UI via classes and `innerHTML`
- Building a small interactive app without libraries

---

## Notes (Tidy-up)

- Original HTML, CSS, and JavaScript behavior are intentionally preserved
- Additional class names were added later in the HTML for readability only
- No functional or visual changes were made during the tidy-up

---

## Challenge Link

https://www.frontendmentor.io/challenges/tip-calculator-app-ugJNGbJUX

---

## Live Site

https://yiyingko.github.io/Frontend-Mentor/tip-calculator-app-main/

---

## Author

Coded by **Yi-Ying Ko**
