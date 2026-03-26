# L3_helper_tool

## Overview

A simple browser-based KPI generator for learner modules. Select a module, generate KPI list entries (topic + lesson), and download as a PDF.

## How it works

- `moduleData` in `script.js` holds module, topic, and lesson entries.
- The dropdown is populated with unique module names.
- Clicking **Generate KPI List** filters the lessons by selected module, adds:
  - module header (`<Module Name> - <lesson count> lessons`)
  - numbered item lines like `1. Topic - Lesson`
- Clicking **Download KPI List** generates a PDF using `jsPDF` (or text fallback when the PDF library isn’t available).

## Usage

1. Open `index.html` in a modern web browser.
2. Choose a module from the dropdown.
3. Click **Generate KPI List**.
4. Inspect results in the KPI list section.
5. Click **Download KPI List** to save as `kpi_list.pdf` (or fallback to `kpi_list.txt`).

## Development

- `index.html` contains UI and script include.
- `style.css` styles the page.
- `script.js` has data and logic.
- jsPDF is loaded from CDN (`https://cdn.jsdelivr.net/npm/jspdf@2.5.1/dist/jspdf.umd.min.js`).

## Notes

- Use the browser console for debugging library loading issues.
- If `PDF library not loaded`, ensure network access to jsPDF CDN or add local jsPDF script.
