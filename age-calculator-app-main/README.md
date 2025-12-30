# Age Calculator App

![Screenshot from 2024-06-03 11-16-19](https://github.com/yiyingko/Frontend-Mentor/assets/115703682/5bfaa2fa-cd68-45ee-982c-a3dc337ceb75)

This project is a solution to the **Age Calculator App** challenge from
[Frontend Mentor](https://www.frontendmentor.io).

It was built in **2024** as part of my early front-end + JavaScript learning
journey and is kept as a reference rather than a fully refactored example.

---

## Overview

A small app that:
- Takes a date of birth (day / month / year)
- Validates input as the user types
- Calculates the difference between the input date and today
- Displays the result in **years**, **months**, and **days**

---

## Tech Stack

- HTML5
- CSS3
- Vanilla JavaScript

No frameworks or build tools were used.

---

## JavaScript Logic (app.js)

### Live validation (on keyup)

- All inputs are validated on `keyup` using regex patterns:
  - `day` (1–31)
  - `month` (1–12)
  - `year` (limited to a range up to 2024)
- When valid:
  - input is given class `valid`
  - the field’s error message is cleared
  - title styles are reset (removes red state)
- When invalid:
  - input is given class `invalid`
  - message shows: `Must be a valid <field>`
  - titles are switched to an error style using `title-red`

### Calculation flow

`ageCount()` runs when the button is clicked:

1. Resets the displayed results (`--`)
2. Stops early if any input is empty (`This field is required`)
3. Performs additional logical date checks:
   - Day must be valid for the selected month (using a `monthOfYear` array)
   - Year cannot be in the future (`Must be in the past`)
   - Full date cannot be in the future (`Must be in the past`)
4. Stops if any validation errors remain
5. Calculates the age difference:
   - `yearDiff`, `monthDiff`, `dateDiff`
   - Adjusts negative day/month differences by borrowing from month/year
6. Writes final results into:
   - `#years`, `#months`, `#days`

### Helper functions

- `setTitleError()` / `resetTitleError()`  
  Switches label styles between normal and error states (`title` ↔ `title-red`).

- `anyValidationError()`  
  Checks if any `.invalid` inputs exist.

- `resetResult()`  
  Resets output values to `--`.

- `checkEmptyInputs()`  
  Marks empty inputs invalid and shows `This field is required`.

- `clearInnerHTML()`  
  Clears all message areas after a successful calculation.

---

## What I Practiced

- Regex-based validation
- Layered validation (regex + logical date checks)
- Working with JavaScript `Date`
- Handling edge cases (future dates, invalid day/month combos)
- Updating UI state via classes and inline messages

---

## Notes (Tidy-up)

- Original HTML, CSS, and JavaScript behavior are intentionally preserved
- Additional class names were added later in the HTML for readability only
- No functional or visual changes were made during the tidy-up

This repo represents a **snapshot of learning**, not a production-ready date utility.

---

## Challenge Link

https://www.frontendmentor.io/challenges/age-calculator-app-dF9DFFpj-Q

---

## Live Site

https://yiyingko.github.io/Frontend-Mentor/age-calculator-app-main/

---

## Author

Coded by **Yi-Ying Ko**
