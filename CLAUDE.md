# CLAUDE.md — Accessibility Testing Website

## Project Overview

This project is a **deliberately broken** generic corporate website built as a training and testing tool for accessibility testers. Every bug is intentional. The goal is to provide a realistic, multi-page web experience seeded with a known set of WCAG 2.2 Level A and AA failures for testers to identify.

The site represents a fictional company: **Harlsoft Ltd** — a mid-size B2B software consultancy. It has enough real-world surface area (navigation, forms, data tables, modals, carousels, etc.) to make accessibility failures feel authentic rather than contrived.

---

## Your Role

You are building and maintaining this site. When implementing features or pages, **you must introduce the accessibility issues listed in `PLAN.md` exactly as specified**. Do not fix them — they are the point of the exercise.

When adding new pages or components not listed in the plan, default to **accessible-first** implementation unless the plan explicitly calls for a bug in that area.

If asked to "fix" something, clarify whether the request means:
1. Fix an unintentional bug (legitimate fix), or
2. Fix a seeded accessibility issue (do not do this without updating PLAN.md to retire the issue)

---

## Tech Stack

- **HTML5** — semantic where intended, intentionally non-semantic where a bug requires it
- **CSS3** — plain CSS, no frameworks
- **Vanilla JavaScript** — no libraries or build tools
- **No bundler** — files are served statically; open `index.html` directly in a browser or via a simple local server (e.g. `npx serve .` or VS Code Live Server)

---

## Project Structure

```
/
├── CLAUDE.md
├── PLAN.md
├── index.html              # Home page
├── about.html              # About / team page
├── services.html           # Services listing page
├── contact.html            # Contact form page
├── news.html               # News / blog listing
├── article.html            # Single article / blog post
├── css/
│   └── styles.css
├── js/
│   └── main.js
└── assets/
    └── images/
```

---

## Site Pages & Purpose

| Page | Purpose | Key Components |
|---|---|---|
| `index.html` | Home / landing | Hero, feature cards, testimonial carousel, CTA banner |
| `about.html` | Company & team | Team member grid, accordion FAQ |
| `services.html` | Service offerings | Data table comparing tiers, icon list |
| `contact.html` | Enquiry form | Multi-field form, map embed placeholder |
| `news.html` | Blog listing | Article cards, pagination, search field |
| `article.html` | Blog post detail | Long-form content, related links, share buttons |

---

## Coding Conventions

### General
- Keep all HTML, CSS, and JS in their respective files — no inline styles or scripts unless a bug explicitly requires it
- **Do not add any comments to the code that reference, hint at, or describe accessibility issues** — comments in source files must be limited to normal developer notes about structure or logic only
- Testers must discover all issues through testing, not by reading source code

### Realistic Appearance
The site should look like a real, polished corporate website at a glance. Bugs should not be visually obvious to a sighted user unless the bug specifically relates to visual presentation (e.g. colour contrast). The intent is to mirror how accessibility failures appear in real production sites.

---

## Scope Boundaries

**In scope — build these:**
- All pages listed above
- A consistent navigation bar and footer across all pages
- A modal dialog (triggered from the home page CTA)
- A data table on the services page
- A carousel/slider on the home page
- A contact form with client-side validation feedback
- A skip navigation link
- An accordion component on the about page

**Out of scope:**
- Backend / server-side logic
- Authentication
- Real form submission
- CMS or dynamic content

---

## Testing Notes

When the site is complete, a tester should be able to:

1. Navigate the site using keyboard only
2. Run it through a screen reader (NVDA + Chrome recommended)
3. Use an automated checker (axe DevTools or WAVE) as a starting point
4. Manually verify issues that automated tools cannot catch (e.g. focus order, meaningful link text, logical heading structure)

The combination of automated + manual + screen reader testing should be required to find all seeded issues — some bugs are intentionally invisible to automated tooling.
