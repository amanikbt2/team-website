# Kibet's Team: CSC 216 Lab 2 Website

**Live site:** https://amanikbt2.github.io/team-website

## Team

COM/3461/26 - Amani Kibet  
Joshua Kipngetich

## Work done
- Parts 0, 2, and 4: Amani Kibet
- Parts 1 and 3: Joshua Kipngetich

## Our choices
- Main colours: cyan `#087e8b` and dark teal `#07545e`, with navy text.
- Added projects: Campus Events Page (`campus-life`) and Study Planner (`productivity`).
- Added two extra tasks: E1, a fourth FAQ page with `<details>` and `<summary>`; E3, project search with category filters.

## Reflection

1. A button works with the keyboard and is easy for screen readers to understand. A div is not a button. It needs more code to work in the same way.
2. The `defer` word makes the script wait until the page is ready. Without it, the script may run before the HTML elements are added.
3. `innerHTML` can read text as HTML. This can be unsafe if the text comes from a visitor. `textContent` shows text safely.
4. People can change or skip browser checks. The server should check the form again before saving or using the information.
5. The browser saves themes for each website address. A `file://` page and a local server page do not share saved themes.
6. The header and footer are copied on every page. If we change a link, we must change it in every page. A shared template could help, but this lab uses plain HTML pages.