# Time Tracking Dashboard

![Screenshot from 2024-07-10 10-19-34](https://github.com/yiyingko/Frontend-Mentor/assets/115703682/a25f0f85-9667-499a-a2e3-15564ce0cbc3)

This project is a solution to the **Time Tracking Dashboard** challenge from
[Frontend Mentor](https://www.frontendmentor.io).

It was built in **2024** as part of my early JavaScript learning journey and is
kept as a reference rather than a reworked or modernized example.

---

## Overview

The dashboard displays time spent on different activities and allows users to
switch between **daily**, **weekly**, and **monthly** views.

Data is loaded from a local JSON file and rendered dynamically using JavaScript.

---

## Tech Stack

- HTML5
- CSS3
- Vanilla JavaScript

No frameworks or build tools were used.

---

## JavaScript Logic (app.js)

The application logic is handled in a single file: `app.js`.

Key responsibilities include:

### Initial Load
- Uses `window.onload` to default the dashboard to the **daily** view on page load.

### Timeframe Switching
- Clicking a timeframe button (`Daily`, `Weekly`, `Monthly`) triggers
  `updateTimeframes(frequency)`.
- The active button is visually highlighted using a helper function.

### Data Handling
- Fetches activity data from `data.json`
- Dynamically updates:
  - current hours
  - previous hours
  - timeframe labels (e.g. “Yesterday”, “Last Week”)

### DOM Updates
- Activity titles from the data file are converted to lowercase and used to
  target corresponding elements in the DOM.
- Values are injected using `innerHTML`.

This JavaScript reflects my understanding at the time and prioritizes clarity
and direct DOM manipulation over abstraction.

---

## What I Practiced

- Fetching and consuming local JSON data
- DOM querying and updates
- Event handling via inline `onclick`
- Managing UI state with simple helper functions

---

## Notes (Tidy-up)

- Original HTML, CSS, and JavaScript are intentionally preserved
- No refactoring or optimization was applied
- Layout refactored lightly to improve structure while preserving behaviour
- This repository represents a **snapshot of learning**, not a production-ready
  architecture

---

## Challenge Link

[https://www.frontendmentor.io/challenges/time-tracking-dashboard-UIQ7167Jw](https://www.frontendmentor.io/challenges/time-tracking-dashboard-UIQ7167Jw)

---

## Live Site

https://yiyingko.github.io/Frontend-Mentor/time-tracking-dashboard-main/

---

## Author

Coded by **Yi-Ying Ko**
