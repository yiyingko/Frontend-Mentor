# Newsletter Sign-up Form with Success Message

![Screenshot from 2024-06-13 13-26-59](https://github.com/yiyingko/Frontend-Mentor/assets/115703682/1832d01c-b2cf-4e40-9767-46b315877146)

This project is a solution to the **Newsletter sign-up form with success message**
challenge from [Frontend Mentor](https://www.frontendmentor.io).

It was built in **2024** as part of my early front-end + JavaScript learning
journey and is kept as a reference rather than a fully refactored example.

---

## Overview

Users can:
- Enter an email address
- See inline validation feedback if the email is invalid
- Submit the form to view a success message
- Dismiss the success message to return to the form

The success screen shows the email address that was entered.

---

## Tech Stack

- HTML5
- CSS3
- Vanilla JavaScript

No frameworks or build tools were used.

---

## JavaScript Logic (app.js)

All interactivity is handled in a small script (`app.js`) using direct DOM
manipulation.

### Elements & states
- The form view uses `.form-wrapper`
- The success view uses `.message`
- Visibility is controlled by toggling the `hidden` class

### Email validation
- A regex pattern is used to validate email format on `keyup`
- When valid:
  - the input gets class `valid`
  - the error message (`#msg`) is hidden
- When invalid:
  - the input gets class `invalid`
  - the error message is shown

### Swapping views
- Clicking the submit button calls `swapPage()`
- If there are validation errors, the function exits early
- If valid:
  - the entered email is inserted into `#email-value`
  - the form is hidden and the success message is shown

### Dismissing the success message
- Clicking “Dismiss message” calls `dissMissMsg()`
- This:
  - hides the success view
  - shows the form again
  - clears the email input

This JavaScript reflects my learning stage at the time and prioritizes simple,
direct logic.

---

## Notes (Tidy-up)

- Original CSS and JavaScript behavior are intentionally preserved
- Additional class names were added later in the HTML for readability only
- No functional or visual changes were made during the tidy-up

---

## Challenge Link

[https://www.frontendmentor.io/challenges/newsletter-signup-form-with-success-message-3FC1AZbNrv](https://www.frontendmentor.io/challenges/newsletter-signup-form-with-success-message-3FC1AZbNrv)

---

## Live Site

https://yiyingko.github.io/Frontend-Mentor/newsletter-sign-up-with-success-message-main/


---

## Author

Coded by **Yi-Ying Ko**
