# Conference Ticket Generator
![Screenshot from 2025-03-03 16-41-28](https://github.com/user-attachments/assets/b1e7b5d7-1c92-4ae1-a475-77f1053c65f1)

This project is a solution to the **Conference Ticket Generator** challenge from
[Frontend Mentor](https://www.frontendmentor.io).

It was built in **early 2025** as part of my continuing front-end learning
journey and is kept as a reference rather than a fully refactored example.

---

## Overview

An interactive ticket generator that allows users to:

- Upload an avatar image (drag & drop or click)
- Enter personal details (name, email, GitHub username)
- Validate all inputs before submission
- Generate a personalized conference ticket
- Reset and generate a new ticket

---

## Tech Stack

- HTML5
- CSS3
- Vanilla JavaScript

No frameworks or build tools were used.

---

## Features

### Image Upload
- Supports **drag & drop** and file picker upload
- Accepts **JPG and PNG** images only
- Enforces a **maximum file size of 500KB**
- Shows preview of the uploaded image
- Allows users to change or remove the image
- Stores the image temporarily using `localStorage` for ticket generation

### Form Validation
- Live validation on `keyup` for:
  - Name (alphabetic characters only)
  - Email (regex-based validation)
  - GitHub username (GitHub rules: length, hyphens, format)
- Invalid inputs are marked with error styles and messages
- Submission is blocked if any input is invalid or empty

### Ticket Generation
- On successful submission:
  - User details are injected into the ticket layout
  - Uploaded image is applied to the ticket
  - A random 5-digit ticket number is generated
  - The form view is hidden and the ticket view is displayed

### Reset Flow
- Clicking the generated ticket:
  - Returns the user to the form
  - Clears all inputs
  - Removes the uploaded image
  - Resets UI state for a new submission

---

## JavaScript Logic (app.js)

### Image handling
- Uses `URL.createObjectURL()` for preview rendering
- Validates file size and MIME type before accepting uploads
- Manages UI state for upload/change/remove actions

### Validation
- Regex-based validation for all text inputs
- Shared helper functions to check:
  - Empty fields
  - Invalid inputs
  - Image upload state

### UI State Management
- Toggles visibility using the `hidden` class
- Switches between:
  - Form state
  - Generated ticket state

---

## What I Practiced

- Drag & drop file handling
- Client-side image validation
- Using `localStorage` for temporary state
- Regex-based form validation
- Managing complex UI states without frameworks
- Building a multi-step interactive experience with vanilla JS

---

## Notes (Tidy-up)

- Original HTML, CSS, and JavaScript behavior are intentionally preserved
- Additional class names were added later in the HTML for readability only
- No functional or visual changes were made during the tidy-up

---

## Challenge Link

https://www.frontendmentor.io/challenges/conference-ticket-generator-oq5gFIU12w

---

## Live Site

https://yiyingko.github.io/Frontend-Mentor/conference-ticket-generator-main/


---
## Author

Coded by **Yi-Ying Ko**
