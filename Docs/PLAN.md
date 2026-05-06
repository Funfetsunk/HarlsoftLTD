# PLAN.md — Accessibility Issues Register

## Fictional Site: Nexora Solutions

This document is the authoritative list of every intentional accessibility failure seeded into the site. Each issue includes a unique ID, the affected page and component, a description of the failure, the WCAG 2.2 success criterion it violates, the conformance level, and whether an automated tool is likely to catch it.

Issues marked **Manual only** require human judgement or screen reader testing to reliably identify.

---

## Status Key

| Status | Meaning |
|---|---|
| `[ ]` | Not yet implemented |
| `[x]` | Implemented |
| `[retired]` | Removed from site (e.g. if a page is rebuilt accessibly) |

---

## Issue Register

---

### Perceivable

#### Images & Non-Text Content

| ID | Status | Page | Component | Description of Failure | WCAG SC | Level | Auto-detectable? |
|---|---|---|---|---|---|---|---|
| P1.1 | `[ ]` | `index.html` | Hero section | Decorative hero image has a descriptive `alt` attribute containing "hero banner image showing office workers collaborating" — should be `alt=""` for decorative images | 1.1.1 Non-text Content | A | Partial |
| P1.2 | `[ ]` | `about.html` | Team member photos | Three team member `<img>` elements have no `alt` attribute at all | 1.1.1 Non-text Content | A | Yes |
| P1.3 | `[ ]` | `news.html` | Article card thumbnails | Article card images use the filename as alt text (e.g. `alt="img_20240312_final_v2.jpg"`) | 1.1.1 Non-text Content | A | Partial |
| P1.4 | `[ ]` | `services.html` | Service tier icons | SVG icons used inline have no `aria-label`, `aria-hidden`, or `<title>` element — conveying information without a text alternative | 1.1.1 Non-text Content | A | Partial |

#### Colour & Contrast

| ID | Status | Page | Component | Description of Failure | WCAG SC | Level | Auto-detectable? |
|---|---|---|---|---|---|---|---|
| P2.1 | `[ ]` | All pages | Footer | Footer text is `#767676` on `#ffffff` — contrast ratio approximately 4.48:1, failing for normal text below 18pt | 1.4.3 Contrast (Minimum) | AA | Yes |
| P2.2 | `[ ]` | `contact.html` | Form placeholder text | Input placeholder text uses `color: #aaaaaa` — contrast ratio approximately 2.32:1 against white background | 1.4.3 Contrast (Minimum) | AA | Yes |
| P2.3 | `[ ]` | `index.html` | CTA banner | White button text on a light blue (`#6fb3e0`) background — contrast ratio approximately 2.8:1 | 1.4.3 Contrast (Minimum) | AA | Yes |
| P2.4 | `[ ]` | All pages | Navigation | Active/current page link indicated only by a colour change (no underline, no icon, no other visual differentiator) | 1.4.1 Use of Colour | A | Manual only |
| P2.5 | `[ ]` | `services.html` | Pricing table | "Recommended" plan column highlighted only by a green background tint with no other indicator | 1.4.1 Use of Colour | A | Manual only |
| P2.6 | `[ ]` | `contact.html` | Form validation | Validation errors indicated only by turning the field border red — no icon, no text label | 1.4.1 Use of Colour | A | Manual only |

#### Text & Resize

| ID | Status | Page | Component | Description of Failure | WCAG SC | Level | Auto-detectable? |
|---|---|---|---|---|---|---|---|
| P3.1 | `[ ]` | `article.html` | Body copy | Font size set in `px` throughout — text does not scale when browser default font size is increased | 1.4.4 Resize Text | AA | Manual only |
| P3.2 | `[ ]` | `index.html` | Testimonial carousel | At 400% zoom, carousel content overflows its container horizontally requiring two-dimensional scrolling | 1.4.10 Reflow | AA | Manual only |
| P3.3 | `[ ]` | All pages | Navigation | Navigation bar collapses to a hamburger at narrow widths but the hamburger is implemented as a `<div>` with a click handler, not a `<button>` — loses keyboard and screen reader affordance | 1.3.1 Info and Relationships | A | Partial |

#### Structure & Semantics

| ID | Status | Page | Component | Description of Failure | WCAG SC | Level | Auto-detectable? |
|---|---|---|---|---|---|---|---|
| P4.1 | `[ ]` | `index.html` | Feature section | Feature section headings are styled `<p>` elements rather than `<h2>` / `<h3>` — no true heading hierarchy in this section | 1.3.1 Info and Relationships | A | Yes |
| P4.2 | `[ ]` | `about.html` | FAQ accordion | Accordion is built with `<div>` and `<span>` elements — no use of `<button>`, no `aria-expanded`, no association between trigger and panel | 1.3.1 Info and Relationships | A | Partial |
| P4.3 | `[ ]` | `services.html` | Comparison table | Data table has no `<caption>`, no `<th>` elements, and no `scope` attributes — all cells are `<td>` | 1.3.1 Info and Relationships | A | Yes |
| P4.4 | `[ ]` | `news.html` | Pagination | Pagination links are `<a>` elements with text "1", "2", "3" etc. — no `aria-label` to disambiguate (e.g. "Page 2 of 5") | 1.3.1 Info and Relationships | A | Manual only |
| P4.5 | `[ ]` | `article.html` | Heading structure | Page jumps from `<h1>` directly to `<h4>` for sub-section headings — skipping h2 and h3 | 1.3.1 Info and Relationships | A | Yes |
| P4.6 | `[ ]` | `contact.html` | Form fields | Three form fields have visible labels in the design but the labels are not programmatically associated (no `for`/`id` pairing, no `aria-labelledby`) | 1.3.1 Info and Relationships | A | Yes |
| P4.7 | `[ ]` | All pages | Page `<title>` | Every page uses the same `<title>Nexora Solutions</title>` — no page-specific title | 2.4.2 Page Titled | A | Yes |

---

### Operable

#### Keyboard Access

| ID | Status | Page | Component | Description of Failure | WCAG SC | Level | Auto-detectable? |
|---|---|---|---|---|---|---|---|
| O1.1 | `[ ]` | `index.html` | Testimonial carousel | Previous/Next carousel controls are `<span>` elements with click handlers — not keyboard reachable or activatable | 2.1.1 Keyboard | A | Partial |
| O1.2 | `[ ]` | `index.html` | Modal dialog | Modal can be opened via keyboard but pressing Escape does not close it — only the close button works | 2.1.1 Keyboard | A | Manual only |
| O1.3 | `[ ]` | `index.html` | Modal dialog | When modal opens, focus is not moved into the modal — focus remains behind it on the triggering button | 2.1.1 Keyboard | A | Manual only |
| O1.4 | `[ ]` | `index.html` | Modal dialog | When modal closes, focus is not returned to the triggering element | 2.1.1 Keyboard | A | Manual only |
| O1.5 | `[ ]` | `index.html` | Modal dialog | Focus is not trapped within the modal — Tab can reach content behind the overlay | 2.1.1 Keyboard | A | Manual only |
| O1.6 | `[ ]` | `news.html` | Search field | Search submit is triggered only on Enter keypress — no visible submit button provided | 2.1.1 Keyboard | A | Manual only |

#### Focus Visible

| ID | Status | Page | Component | Description of Failure | WCAG SC | Level | AA |
|---|---|---|---|---|---|---|---|
| O2.1 | `[ ]` | All pages | Global CSS | `outline: none` applied globally via `* { outline: none; }` — removes all default focus indicators | 2.4.7 Focus Visible | AA | Yes |
| O2.2 | `[ ]` | `contact.html` | Submit button | Submit button has a custom focus style but it is a 1px dotted outline in the same colour as the button background — effectively invisible | 2.4.7 Focus Visible | AA | Manual only |

#### Skip Links & Bypass

| ID | Status | Page | Component | Description of Failure | WCAG SC | Level | Auto-detectable? |
|---|---|---|---|---|---|---|---|
| O3.1 | `[ ]` | All pages | Skip navigation | A skip link is present in the HTML but is `display: none` permanently — it is never shown on focus | 2.4.1 Bypass Blocks | A | Partial |

#### Link & Button Purpose

| ID | Status | Page | Component | Description of Failure | WCAG SC | Level | Auto-detectable? |
|---|---|---|---|---|---|---|---|
| O4.1 | `[ ]` | `news.html` | Article cards | All article cards have a "Read more" link — no `aria-label` or visually hidden text to distinguish them | 2.4.6 Headings and Labels | AA | Partial |
| O4.2 | `[ ]` | `about.html` | Team member cards | "LinkedIn" icon links have no visible text and no `aria-label` | 2.4.6 Headings and Labels | AA | Yes |
| O4.3 | `[ ]` | All pages | Footer | Footer contains a link with the text "Click here" — no additional context | 2.4.4 Link Purpose (In Context) | A | Partial |

#### Timing

| ID | Status | Page | Component | Description of Failure | WCAG SC | Level | Auto-detectable? |
|---|---|---|---|---|---|---|---|
| O5.1 | `[ ]` | `index.html` | Testimonial carousel | Carousel auto-advances every 4 seconds with no pause, stop, or hide control | 2.2.2 Pause, Stop, Hide | A | Manual only |

---

### Understandable

#### Language

| ID | Status | Page | Component | Description of Failure | WCAG SC | Level | Auto-detectable? |
|---|---|---|---|---|---|---|---|
| U1.1 | `[ ]` | All pages | `<html>` element | `<html>` element has no `lang` attribute | 3.1.1 Language of Page | A | Yes |
| U1.2 | `[ ]` | `article.html` | Body copy | An inline French quotation is included in the article body with no `lang="fr"` on the surrounding element | 3.1.2 Language of Parts | AA | Manual only |

#### Predictability

| ID | Status | Page | Component | Description of Failure | WCAG SC | Level | Auto-detectable? |
|---|---|---|---|---|---|---|---|
| U2.1 | `[ ]` | `news.html` | Search field | Typing in the search field triggers live filtering of results without user initiation (no submit action) — context changes on input | 3.2.2 On Input | A | Manual only |
| U2.2 | `[ ]` | `contact.html` | Country dropdown | Selecting a country from the dropdown immediately submits the form without warning | 3.2.2 On Input | A | Manual only |

#### Error Identification & Labels

| ID | Status | Page | Component | Description of Failure | WCAG SC | Level | Auto-detectable? |
|---|---|---|---|---|---|---|---|
| U3.1 | `[ ]` | `contact.html` | Form validation | Error messages appear above the form rather than adjacent to the relevant field — no association between error and field | 3.3.1 Error Identification | A | Manual only |
| U3.2 | `[ ]` | `contact.html` | Email field | Email field has no label — only placeholder text "you@example.com" which disappears on focus | 3.3.2 Labels or Instructions | A | Yes |
| U3.3 | `[ ]` | `contact.html` | Phone field | Phone field has a specific format requirement (UK number) but no format hint is provided before or during input | 3.3.2 Labels or Instructions | A | Manual only |

---

### Robust

#### Parsing & Compatibility

| ID | Status | Page | Component | Description of Failure | WCAG SC | Level | Auto-detectable? |
|---|---|---|---|---|---|---|---|
| R1.1 | `[ ]` | `index.html` | Modal | Modal uses `role="dialog"` but has no `aria-label` or `aria-labelledby` — dialog has no accessible name | 4.1.2 Name, Role, Value | A | Yes |
| R1.2 | `[ ]` | `about.html` | FAQ accordion | Accordion panels have `aria-hidden="true"` hardcoded and never toggled — expanded panels are permanently hidden from assistive technology | 4.1.2 Name, Role, Value | A | Partial |
| R1.3 | `[ ]` | `contact.html` | Form | Required fields use only a visual asterisk (*) with no `required` attribute and no `aria-required="true"` | 4.1.2 Name, Role, Value | A | Yes |
| R1.4 | `[ ]` | `services.html` | Comparison table | Table has duplicate `id` attributes on two `<td>` cells | 4.1.1 Parsing | A | Yes |
| R1.5 | `[ ]` | `index.html` | Status message | After form submission (newsletter signup), a success message appears in the DOM but has no `role="status"` or `aria-live` region — screen readers are not notified | 4.1.3 Status Messages | AA | Manual only |

---

## Summary Counts

| Level | Total Issues |
|---|---|
| A | 30 |
| AA | 9 |
| **Total** | **39** |

| Auto-detectable | Count |
|---|---|
| Yes (automated tools will catch) | 14 |
| Partial (may surface with some tools/configs) | 11 |
| Manual only | 14 |

---

## Implementation Notes for Claude Code

- Implement all issues from the register before considering the build complete
- **Do not add any comments to HTML, CSS, or JS that reference, hint at, or identify accessibility issues** — the source code must read as normal developer code with no clues for testers
- The split between auto-detectable and manual-only issues is intentional — the site is designed so that running axe or WAVE alone will not find everything
- Do not add `role="presentation"` or any other workaround that might accidentally remediate a seeded bug
- If a new component is added (not in scope above), implement it accessibly unless a new issue is formally added to this register
