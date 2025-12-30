
# News Homepage
![Screenshot from 2024-07-14 23-16-26](https://github.com/user-attachments/assets/85269c26-1957-4487-960a-7462f2efc0f6) ![Screenshot from 2024-07-14 23-17-03](https://github.com/user-attachments/assets/869ed662-fc2e-4145-8245-898495838eda)

This project is a solution to the **News Homepage** challenge from
[Frontend Mentor](https://www.frontendmentor.io).

It was built in **2024** as part of my early front-end learning journey and is
kept as a reference rather than a fully refactored or optimized example.

---

## Overview

A responsive news-style homepage featuring:

- A navigation bar with desktop and mobile versions
- A featured hero article
- A “New” articles sidebar
- A grid of highlighted news items
- A mobile menu toggle

The layout adapts across a wide range of screen sizes.

---

## Tech Stack

- HTML5
- CSS3
- Vanilla JavaScript

No frameworks or build tools were used.

---

## Layout & Responsiveness

The layout is primarily built with **CSS Grid**, using named grid areas
(`grid-1` to `grid-6`) to position major sections.

Responsiveness is handled through **multiple media queries** that:
- adjust grid areas
- resize containers and images
- change typography and spacing
- progressively collapse the layout from multi-column to single-column

Several breakpoints are defined to fine-tune the layout across screen sizes.

> Note: With hindsight, some of these layout changes could likely be simplified
> using fewer breakpoints, more flexible grid definitions, or flexbox-based
> layouts. The current approach reflects my learning stage at the time.

---

## JavaScript Logic

A small inline script controls the mobile navigation menu.

- Elements with the `.toggle` class are used to open and close the mobile menu
- Clicking the hamburger icon or close icon toggles the visibility of
  `.mobileNav` by switching its `display` style

The logic is intentionally simple and direct.

---

## What I Practiced

- Building complex page layouts with CSS Grid
- Managing responsive layouts across many screen sizes
- Using named grid areas for structural clarity
- Implementing a basic mobile navigation toggle
- Translating a detailed design spec into HTML/CSS

---

## Notes (Tidy-up)

- Original HTML, CSS, and JavaScript behavior are intentionally preserved
- Additional class names were added later in the HTML for readability only
- No functional or visual changes were made during the tidy-up
- The CSS includes several media queries as part of the original implementation

---

## Challenge Link

[https://www.frontendmentor.io/challenges/news-homepage-H6SWTa1MFl
](https://www.frontendmentor.io/challenges/news-homepage-H6SWTa1MFl)
---

## Live Site

https://yiyingko.github.io/Frontend-Mentor/news-homepage-main/

---

## Author

Coded by **Yi-Ying Ko**
