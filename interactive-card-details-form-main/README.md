# Interactive Card Details Form

![Screenshot from 2024-10-14 10-27-06](https://github.com/user-attachments/assets/54471054-b9b4-4a93-9f47-9b7dbac74095)


This project is a solution to the **Interactive Card Details Form** challenge
from [Frontend Mentor](https://www.frontendmentor.io).

It was built in **2024** as part of my early front-end + JavaScript learning
journey and is kept as a reference rather than a fully refactored example.

---

## Overview

An interactive credit card form that:

- Shows a live preview of card details
- Updates card number, name, expiry date, and CVC in real time
- Detects and displays different card brands (Visa, Mastercard, JCB)
- Validates inputs before submission
- Switches to a completion / success state after confirmation

---

## Tech Stack

- HTML5
- CSS3
- Vanilla JavaScript

No frameworks or build tools were used.

---

## Layout & Responsiveness

The layout is built primarily with **CSS Grid**, separating:

- Card preview section (front & back)
- Form input section
- Completion state section

Responsiveness is handled through **multiple media queries** that:

- Reposition the card visuals relative to the form
- Adjust grid layout and spacing across screen sizes
- Optimize usability for mobile, tablet, and desktop views

> Note: With hindsight, some of the layout adjustments could likely be simplified
> using fewer breakpoints or more flexible grid definitions.  
> The current implementation reflects my learning style at the time — detailed,
> exploratory, and layout-focused.

---

## JavaScript Logic (app.js)

All interactivity is handled in `app.js` using direct DOM manipulation.

### Live card preview

- Input values are mirrored onto the card UI as the user types:
  - Card number (formatted in groups of four)
  - Cardholder name
  - Expiry month and year
  - CVC (shown on the back of the card)

### Card number formatting

- Card numbers are automatically split into groups of four digits
- Whitespace is removed internally before validation

### Card type detection

- Card brand icons are shown based on number prefixes:
  - Visa
  - Mastercard
  - JCB
- Icons are toggled using the `hidden` class

### Validation

- Each input field has its own regex-based validation:
  - Cardholder name
  - Card number format
  - Expiry month and year
  - CVC
- Error messages are displayed inline via `.msg` elements
- Invalid inputs are visually marked

### Submission flow

- Clicking **Confirm**:
  - Checks for empty inputs
  - Checks validation errors
  - Validates expiry date against the current date
- If valid:
  - The form section is hidden
  - The completion screen is displayed

### Completion state

- Clicking **Continue**:
  - Resets all inputs
  - Resets card preview values
  - Returns the user to the form state

---

## What I Practiced

- Synchronizing form inputs with a live visual UI
- Handling complex client-side validation
- Formatting user input dynamically
- Managing multiple UI states
- Building responsive layouts with CSS Grid and media queries
- Working through edge cases step by step

---

## Notes (Tidy-up)

- Original HTML, CSS, and JavaScript behavior are intentionally preserved
- Additional class names were added later in the HTML for readability only
- No functional or visual changes were made during the tidy-up
- The CSS includes several media queries as part of the original implementation
- 
---

## Challenge Link

[https://www.frontendmentor.io/challenges/interactive-card-details-form-XpS8cKZDWw](https://yiyingko.github.io/Frontend-Mentor/interactive-card-details-form-main/)

---
## Live Site
https://yiyingko.github.io/Frontend-Mentor/interactive-card-details-form-main/

---

## Author

Coded by **Yi-Ying Ko**
