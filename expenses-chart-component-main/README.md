# Expenses Chart Component

![Screenshot from 2024-06-22 22-21-33](https://github.com/yiyingko/Frontend-Mentor/assets/115703682/0121c108-f29d-4afb-ba5e-4ff9cb2e809e) ![Screenshot from 2024-06-22 23-05-40](https://github.com/yiyingko/Frontend-Mentor/assets/115703682/1259660a-32d5-43b9-8bcb-6a5f311aec31)

This project is a solution to the **Expenses Chart Component** challenge from
[Frontend Mentor](https://www.frontendmentor.io).

It was built in **2024** as part of my early front-end + JavaScript learning
journey and is kept as a reference rather than a fully refactored example.

---

## Overview

A small dashboard card that shows:
- Balance summary
- “Spending - Last 7 days” chart rendered with **Chart.js**
- Monthly total summary
- A simple chart type toggle (Bar / Line)

Chart data is loaded from a local `data.json` file.

---

## Tech Stack

- HTML5
- CSS3
- Vanilla JavaScript
- Chart.js (via CDN)

No build tools or frameworks were used.

---

## JavaScript Logic (app.js)

### Data loading
- Fetches `data.json`
- Stores the result in `jsondata`
- Renders the initial chart as a **bar chart** after data loads

### Chart rendering
`createChart(data, type)`:
- Extracts amounts into `datapoints`
- Finds the max value and highlights it using a different color
- Configures a Chart.js dataset with:
  - custom background colors
  - hover colors
  - rounded corners (`borderRadius`)
  - hidden y-axis for a cleaner UI

### Switching chart types
- Two buttons call `setChartType('bar')` and `setChartType('line')`
- When switching:
  - the existing chart instance is destroyed (`myChart.destroy()`)
  - a new chart is created using the same data but a different type

### Tooltip customization
- Removes the tooltip title
- Formats tooltip values as USD currency using `Intl.NumberFormat`
- Disables tooltip color boxes for a clean look

### Hover behavior
- Changes the cursor to a pointer when hovering over a chart element

---

## What I Practiced

- Fetching JSON data and mapping it into chart inputs
- Using Chart.js configuration options (tooltip, scales, layout)
- Highlighting a max value conditionally
- Managing a chart instance lifecycle (destroy + recreate)
- Small UI enhancements (hover cursor, clean tooltip formatting)

---

## Notes (Tidy-up)

- Original HTML, CSS, and JavaScript behavior are intentionally preserved
- Additional class names were added later in the HTML for readability only
- No functional or visual changes were made during the tidy-up

---

## Challenge Link

[https://www.frontendmentor.io/challenges/expenses-chart-component-e7yJBUdjwt](https://www.frontendmentor.io/challenges/expenses-chart-component-e7yJBUdjwt)

---

## Live Site

https://yiyingko.github.io/Frontend-Mentor/expenses-chart-component-main/

---

## Author

Coded by **Yi-Ying Ko**
