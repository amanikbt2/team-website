# Kibet's Team: CSC 216 Lab 2 Website

**Live site:** Add the GitHub Pages URL after deployment.

## Team
| Name | Admission number | GitHub username |
|------|-----------------|-----------------|
| Amani Kibet | COM/3461/26 | Add username |
| Noman Keli | COM/212/26 | Add username |

## Who drove each part
- Part 0, 2, 4: Fill in who drove these parts.
- Part 1, 3: Fill in who drove these parts.

## Personalisation
- Our colours: Cyan `#087e8b` and deep teal `#07545e`, with navy text.
- Projects we added: Campus Events Page (`campus-life`) and Study Planner (`productivity`).
- Extension challenge(s) completed: E1, a fourth FAQ page using native `<details>` and `<summary>`; E3, project search combined with the active category filter.

## Reflection
Write these in your own words after discussing them together.

1. A button works with a keyboard by default and is announced as a button by screen readers. A clickable div needs extra keyboard behavior and accessibility details, which can make it harder for keyboard and screen-reader users.
2. Without `defer`, a script in the head can run before the browser has built the page elements. A selector may then find nothing, so the JavaScript interaction can fail.
3. `innerHTML` treats text as markup. If visitor supplied text were inserted with it, someone could add unwanted HTML or script; `textContent` displays the text safely.
4. Browser checks can be bypassed, so a server must validate submitted data again before using or storing it. Server validation protects the application even when a visitor changes or skips the page's JavaScript.
5. Browser storage is separated by origin, including scheme, host, and port. A `file://` page and a page on a local HTTP server have different origins, so they do not share the same saved theme.
6. The header navigation and footer are repeated across pages. If a link or design changes, every copy needs updating; a shared template system could avoid that duplication, though this lab uses plain HTML pages.

## Before submission
Add both real passport-size photos in an `images/` folder and use them in the profile cards with meaningful alt text, width, and height attributes. Add both GitHub usernames, record who drove each lab part, and discuss and rewrite the reflection answers in your own words. Run the HTML validator, keyboard, mobile, and Lighthouse checks from the lab brief before submitting.

## Open locally
Open `index.html` in a browser, or serve this folder with a local web server. The site uses plain HTML, CSS, and JavaScript without a framework.

## Publish with GitHub Pages
Create a GitHub repository, add these files, and push them to the `main` branch. In repository **Settings → Pages**, choose **Deploy from a branch**, select `main` and `/ (root)`, then save. Add the resulting live URL above.
