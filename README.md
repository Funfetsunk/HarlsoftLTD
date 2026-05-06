# Harlsoft Ltd — Corporate Website

A multi-page static site representing Harlsoft Ltd, a fictional B2B software consultancy. The site is designed as a **self-contained accessibility testing exercise** — testers are given the live URL and asked to identify accessibility failures across all pages using a combination of automated tools, keyboard testing, and screen reader review.

No answer key is provided in this repository. Findings should be recorded independently before any debrief.

**Live site:** https://funfetsunk.github.io/HarlsoftLTD/

---

## Pages

| Page | Path |
|---|---|
| Home | `index.html` |
| About | `about.html` |
| Services | `services.html` |
| News & Insights | `news.html` |
| Article (single post) | `article.html` |
| Contact | `contact.html` |

---

## Tech Stack

- HTML5
- CSS3 (plain, no frameworks)
- Vanilla JavaScript (no bundler)

---

## Running Locally

No build step required. Open `index.html` directly in a browser, or serve the root directory with any static file server:

```bash
npx serve .
```

Or use the VS Code **Live Server** extension.

---

## Structure

```
/
├── index.html
├── about.html
├── services.html
├── contact.html
├── news.html
├── article.html
├── css/
│   └── styles.css
├── js/
│   └── main.js
└── assets/
    └── images/
```

---

## Browser Support

Tested in current versions of Chrome and Firefox on Windows.
