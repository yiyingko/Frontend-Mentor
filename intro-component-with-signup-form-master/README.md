# Intro Component with Sign Up Form
![Screenshot from 2024-06-10 22-59-35](https://github.com/yiyingko/Frontend-Mentor/assets/115703682/db87a415-fc6b-41a7-89f9-18b8b4ba4637)

This project is a solution to the **Intro Component with Sign Up Form** challenge
from [Frontend Mentor](https://www.frontendmentor.io).

It was built in **2024** as part of my early front-end + JavaScript learning
journey and is kept as a reference rather than a fully refactored example.

---

## Overview

A simple landing layout with:
- A hero section introducing the product/message
- A sign-up form with client-side validation
- Inline error messages and visual input states

---

## Tech Stack

- HTML5
- CSS3
- Vanilla JavaScript

No frameworks or build tools were used.

---

## JavaScript Logic (app.js)

All behavior is handled in `app.js` with direct DOM manipulation.

### Live validation (on keyup)

- The script selects all inputs and validates them on `keyup`.
- Validation uses regex patterns for:
  - `firstName`
  - `lastName`
  - `email`
  - `password`

When a field is valid:
- the input gets class `valid`
- the related message element (`<fieldId>Msg`) is cleared

When invalid:
- the input gets class `invalid`
- a message is written into `<fieldId>Msg`
- `.empty` message placeholders are switched to `.error` via `setMsgError()`

Special messages are shown for:
- email: **"Looks like this is not an email"**
- password: **"Between 4-20 characters"**

### Submit behavior

`submitTrial()`:
- removes `form-invalid` before checking
- checks for empty inputs and validation errors
- if errors exist:
  - adds `form-invalid` to the form (for styling)
  - prevents submission
- if valid:
  - shows an alert ("Enjoy your free trail!")
  - resets the input values

### Helper functions

- `checkEmptyInputs()`  
  Flags empty fields, sets messages, marks inputs invalid, and applies error styling.

- `anyValidationError()`  
  Returns whether any `.invalid` inputs exist.

- `setMsgError()`  
  Converts `.empty` message containers into `.error` (for error state styling).

- `resetInput()`  
  Clears all field values.

This code reflects my learning stage at the time and focuses on clear, direct
logic rather than abstraction.

---

## Notes (Tidy-up)

- Original CSS and JavaScript behavior are intentionally preserved
- Additional class names were added later in the HTML for readability only
- No functional changes were made during the tidy-up

---

## Challenge Link

[https://www.frontendmentor.io/challenges/intro-component-with-signup-form-BJ-Nt3G8b](https://www.frontendmentor.io/challenges/intro-component-with-signup-form-5cf91bd49edda32581d28fd1)

---

## Live Site

https://yiyingko.github.io/Frontend-Mentor/intro-component-with-signup-form-master/

---

## Author

Coded by **Yi-Ying Ko**
