# IMPLEMENTATION.md — Phased Build Plan

## Project: Nexora Solutions Accessibility Testing Site

This document is the architect's phased delivery plan for the deliberately-broken corporate website defined in `CLAUDE.md` and `PLAN.md`. It is written for execution by Claude Code in sequential phases, with each phase producing a verifiable, runnable artefact.

---

## Guiding Principles

These principles override any default behaviour during implementation. Re-read them at the start of each phase.

1. **The goal is a realistic, broken site** — not a clean codebase. Authenticity matters more than craftsmanship.
2. **Every issue in `PLAN.md` is intentional** — never "fix" a seeded bug. If you spot something that looks wrong, check the register before changing it.
3. **No clues in source code** — comments, variable names, class names, and file names must read as ordinary developer code. Nothing should hint to a reader that a bug exists.
4. **Default to accessible** for anything not in the register — the site should be authentically broken in specific places, not uniformly broken everywhere.
5. **Visual polish matters** — the site must look like a real corporate site at a glance. A scruffy site invites scepticism; a polished site invites genuine testing.
6. **Track progress in `PLAN.md`** — flip each issue's status from `[ ]` to `[x]` as you implement it. This is the source of truth for what's done.

---

## Phase 0 — Foundation & Visual System

**Goal:** Establish the design system, file scaffolding, and shared layout. Produce a coherent visual identity for Nexora Solutions before building any pages.

### Deliverables
- Folder structure exactly as specified in `CLAUDE.md`
- `css/styles.css` containing CSS custom properties for the design system: colour palette, typography scale, spacing scale, breakpoints
- A chosen brand direction for Nexora Solutions — pick one and commit (e.g. trustworthy / corporate-blue, modern / muted-neutral, professional / dark-accent). Document the choice at the top of `styles.css` as a normal design comment
- Two web fonts loaded (display + body)
- `js/main.js` empty stub with one IIFE wrapper ready for module additions
- Placeholder images in `assets/images/` (can be solid-colour SVGs or sourced stock-style placeholders)

### Issues to seed in this phase
None. This phase is purely foundational. All accessibility issues are introduced in later phases when their host components are built.

### Exit criteria
- `index.html` containing only a temporary "Phase 0 complete" placeholder loads without errors
- The design system feels cohesive and professional when viewed in a browser
- File structure matches `CLAUDE.md` exactly

---

## Phase 1 — Shared Chrome (Navigation, Footer, Skip Link)

**Goal:** Build the layout chrome that appears on every page. This is intentionally first because issues here propagate across every other page and need to be in place before pages are built on top of them.

### Components
- Top navigation bar with logo and primary nav links (Home, About, Services, News, Contact)
- Mobile hamburger menu for narrow viewports
- Footer with link columns, copyright, and a "click here" link
- A skip-navigation link as the first focusable element

### Issues to seed (from `PLAN.md`)

| ID | Summary |
|---|---|
| P2.1 | Footer text uses `#767676` on white — fails AA contrast |
| P2.4 | Active page in nav indicated by colour change only |
| P3.3 | Mobile hamburger built as `<div>` with click handler, not `<button>` |
| O2.1 | Global `* { outline: none; }` in CSS removes focus rings everywhere |
| O3.1 | Skip link present in HTML but `display: none` permanently |
| O4.3 | Footer contains a "Click here" link |
| U1.1 | `<html>` element has no `lang` attribute |
| P4.7 | Every page uses `<title>Nexora Solutions</title>` |

### Implementation notes
- Build header and footer as identical includes copied verbatim into each page (no templating engine — this is plain HTML)
- Establish the page boilerplate now so every later page inherits the same `<head>`, doctype, and structure
- The hamburger should function correctly with a mouse — only its non-button construction breaks keyboard/screen reader use

### Exit criteria
- A skeleton `index.html` with header and footer renders correctly across viewport widths
- Listed issues marked `[x]` in `PLAN.md`

---

## Phase 2 — Home Page (`index.html`)

**Goal:** The landing page. Highest concentration of seeded issues because it is the most-visited page and contains the carousel and modal.

### Components
- Hero section with full-width image and headline
- Feature cards section (3–4 cards highlighting service areas)
- Testimonial carousel (auto-advancing)
- CTA banner with button that opens a modal dialog
- Newsletter signup mini-form (used for the live-region status message issue)

### Issues to seed

| ID | Summary |
|---|---|
| P1.1 | Hero decorative image has descriptive `alt` text instead of `alt=""` |
| P2.3 | CTA button: white text on light blue (`#6fb3e0`) — fails contrast |
| P3.2 | Carousel content overflows horizontally at 400% zoom |
| P4.1 | Feature section headings styled `<p>` rather than `<h2>`/`<h3>` |
| O1.1 | Carousel prev/next controls are `<span>` with click handlers |
| O1.2 | Modal does not close on Escape |
| O1.3 | Focus does not move into modal on open |
| O1.4 | Focus is not returned to trigger when modal closes |
| O1.5 | Focus is not trapped within the modal |
| O5.1 | Carousel auto-advances every 4 seconds with no pause/stop control |
| R1.1 | Modal has `role="dialog"` but no accessible name |
| R1.5 | Newsletter signup success message has no `role="status"` / `aria-live` |

### Implementation notes
- The modal is the densest cluster of failures (5 issues). Build it as one component and verify all five behaviours land correctly
- The carousel should genuinely auto-advance — testers timing the rotation should see consistent 4-second intervals
- The newsletter form should genuinely "submit" client-side and show a success message in the DOM

### Exit criteria
- Home page renders, modal opens/closes via mouse, carousel cycles automatically
- Listed issues marked `[x]` in `PLAN.md`

---

## Phase 3 — About Page (`about.html`)

**Goal:** Team and FAQ page. Tests semantic structure and a custom accordion component.

### Components
- Page heading and intro copy
- Team member grid (6 members with photo, name, role, LinkedIn icon link)
- FAQ accordion (5–6 question/answer pairs)

### Issues to seed

| ID | Summary |
|---|---|
| P1.2 | Three team `<img>` elements have no `alt` attribute at all |
| P4.2 | Accordion built with `<div>`/`<span>` — no `<button>`, no `aria-expanded` |
| O4.2 | LinkedIn icon links have no visible text and no `aria-label` |
| R1.2 | Accordion panels have hardcoded `aria-hidden="true"` never toggled |

### Implementation notes
- The accordion is subtle: panels visually expand and collapse, so a sighted mouse user has no problem. The screen reader experience is broken on multiple fronts
- For the three team members missing `alt`, choose them at random across the grid rather than the first three — this mirrors how real bugs cluster unevenly

### Exit criteria
- About page renders, accordion expands/collapses on click
- Listed issues marked `[x]` in `PLAN.md`

---

## Phase 4 — Services Page (`services.html`)

**Goal:** Service offerings with a comparison table. Tests data-table semantics and SVG icon handling.

### Components
- Services intro and overview
- Tier comparison table (3 columns: Starter, Professional, Enterprise; ~8 rows of features)
- Icon list of service capabilities (using inline SVG icons)

### Issues to seed

| ID | Summary |
|---|---|
| P1.4 | Inline SVG icons have no `aria-label`, `aria-hidden`, or `<title>` |
| P2.5 | "Recommended" plan column highlighted only by green background |
| P4.3 | Comparison table has no `<caption>`, no `<th>`, no `scope` attributes |
| R1.4 | Table contains duplicate `id` attributes on two `<td>` cells |

### Implementation notes
- The table must look like a normal pricing comparison — visual hierarchy via CSS, not semantics
- Duplicate `id`s should be plausible-looking (e.g. both cells happen to have `id="cell-price"`) so it looks like a copy-paste mistake, not contrived

### Exit criteria
- Services page renders, table is visually clear
- Listed issues marked `[x]` in `PLAN.md`

---

## Phase 5 — Contact Page (`contact.html`)

**Goal:** The most form-dense page. Highest concentration of form-related accessibility failures.

### Components
- Page heading and intro
- Multi-field contact form: name, email, phone, country (dropdown), enquiry type (radio), message (textarea), required-field marker, submit button
- Map embed placeholder (a static image labelled as a map — no actual embed needed)
- Client-side validation that runs on submit

### Issues to seed

| ID | Summary |
|---|---|
| P2.2 | Placeholder text uses `#aaaaaa` — fails contrast |
| P2.6 | Validation errors shown only by red border — no icon or text |
| P4.6 | Three fields have visible labels not programmatically associated |
| U2.2 | Country dropdown submits the form on `change` |
| U3.1 | Error messages appear above the form, not adjacent to fields |
| U3.2 | Email field has no label — placeholder only ("you@example.com") |
| U3.3 | Phone field requires UK format with no hint provided |
| R1.3 | Required fields shown only by visual `*` — no `required` or `aria-required` |

### Implementation notes
- This is the densest form-issue cluster. Carefully cross-check that each issue is independent and they don't accidentally remediate each other
- The country dropdown auto-submitting is a particularly cruel anti-pattern — make sure it really does submit, then resets the form, so the user loses their input
- For the three labels not programmatically associated (P4.6), pick name, phone, and message — leave country, email, and enquiry-type alone for those (email already has a separate issue, country is a `<select>`, enquiry-type is `<input type="radio">`)

### Exit criteria
- Contact page renders, form interacts as designed (with all the right things broken)
- Listed issues marked `[x]` in `PLAN.md`

---

## Phase 6 — News Listing (`news.html`)

**Goal:** Blog index page. Tests link disambiguation, search input behaviour, and pagination.

### Components
- Page heading and intro
- Search field at the top (live-filters as user types)
- Article card grid (8–10 cards: thumbnail, title, summary, "Read more" link)
- Pagination controls at the bottom

### Issues to seed

| ID | Summary |
|---|---|
| P1.3 | Article thumbnails use raw filenames as alt text |
| P4.4 | Pagination links are bare numbers with no `aria-label` |
| O1.6 | Search submit only on Enter — no visible submit button |
| O4.1 | All article cards have identical "Read more" link text |
| U2.1 | Search filters live on input — context changes without user action |

### Exit criteria
- News page renders, search live-filters cards, pagination clicks work (can route to `news.html?page=N` placeholder)
- Listed issues marked `[x]` in `PLAN.md`

---

## Phase 7 — Article Page (`article.html`)

**Goal:** Long-form content page. Tests heading hierarchy, language tagging, and text scaling.

### Components
- Article header (title, byline, date)
- Long-form body copy with sub-headings, blockquotes, lists, and an image
- A short quotation in French embedded in the body
- Related articles section at the bottom
- Share buttons (link-style, not real sharing — placeholders)

### Issues to seed

| ID | Summary |
|---|---|
| P3.1 | Body copy font sizes set in `px` — no scaling on browser zoom-text |
| P4.5 | Heading structure jumps from `<h1>` to `<h4>` |
| U1.2 | French quotation has no `lang="fr"` |

### Implementation notes
- Use real-feeling article content (industry trends, case study) — not "Lorem ipsum" — so the heading hierarchy issue is plausible
- The French quote should be a single sentence in flowing context, not a translated heading

### Exit criteria
- Article page renders, content reads as a real article
- Listed issues marked `[x]` in `PLAN.md`

---

## Phase 8 — Audit, Coherence, & Final Pass

**Goal:** Verify the seeded register is fully implemented, no accidental remediations have crept in, and the site reads as a polished corporate property.

### Tasks

1. **Plan reconciliation** — walk every issue in `PLAN.md` and confirm its status box is `[x]`. Manually inspect the live site for each one. Any `[ ]` left over must be implemented or formally retired.
2. **Comment audit** — `grep` (or equivalent) the codebase for "BUG", "TODO", "FIXME", "a11y", "accessibility", "WCAG", and any issue IDs (e.g. "P1.1", "O2.1"). Remove anything that surfaces. Source code must be clue-free.
3. **Filename audit** — file names, class names, IDs, and JS variables must not reference accessibility, bugs, or testing concepts. Rename anything suspicious.
4. **Accidental-fix sweep** — confirm no global stylesheet rule, default browser behaviour, or copied component has accidentally remediated a seeded issue. Common offenders: `<button>` reset styles, browser-default focus rings, `<label>` parents wrapping inputs.
5. **Visual coherence** — every page should feel like the same site. Same header, same footer, same fonts, same colour palette, same button style.
6. **Cross-browser sanity** — open the site in Chrome and Firefox at minimum. Issues should manifest consistently.
7. **Tester walkthrough simulation** — pretend to be a tester. Try keyboard-only navigation. Try axe DevTools. Confirm both surface a partial set of issues and neither finds everything.

### Exit criteria
- All 39 issues in `PLAN.md` marked `[x]`
- No source-code references to bugs, accessibility, or WCAG anywhere
- Site visually coherent across all six pages
- Manual walkthrough confirms the auto/partial/manual split holds in practice

---

## Phase 9 — Delivery & Tester Documentation

**Goal:** Hand the project off in a usable state.

### Deliverables
- A `README.md` for the repository describing what the project is, who it's for, and how to run it locally — written from the perspective of the project owner, *not* exposing that the site contains seeded bugs
- A separate `TESTER_BRIEF.md` (kept out of the served site directory, e.g. in a `/docs` folder) — a one-page briefing for the test cohort: scope of the test, expected tools, time-box, and how to record findings. Does **not** list the issues
- An optional `FACILITATOR_KEY.md` — for the person running the test session. This may reference `PLAN.md` and explain which issues are auto-detectable vs manual-only, useful for grading

### Implementation notes
- `README.md` should look like a normal corporate-site repo readme. No mention of accessibility testing, bugs, or WCAG
- `TESTER_BRIEF.md` and `FACILITATOR_KEY.md` are for the human running the session, not for Claude Code to consume during the build

---

## Risk Register

| Risk | Mitigation |
|---|---|
| Accidental remediation by Claude Code's defaults (e.g. it adds an `aria-label` because it "feels right") | The "do not fix" rule in `CLAUDE.md` plus per-phase issue lists; Phase 8 audit catches stragglers |
| Site visually scruffy → testers don't take it seriously | Phase 0 establishes the design system before any page is built |
| Issues clustering too neatly — testers spot patterns | Distribute issues across pages; mix obvious and subtle bugs throughout (see `PLAN.md` auto-detectable column) |
| Comments leaking into source revealing bugs | Phase 8 audit has an explicit grep step |
| Issues conflicting with each other (e.g. an `aria-live` fix accidentally adds a label) | Implement issues per-component, then verify each one independently after the component is built |

---

## Quick-Reference Phase Map

| Phase | Page / Focus | Issues seeded | Cumulative |
|---|---|---|---|
| 0 | Foundation | 0 | 0 |
| 1 | Chrome (header/footer/skip) | 8 | 8 |
| 2 | Home | 12 | 20 |
| 3 | About | 4 | 24 |
| 4 | Services | 4 | 28 |
| 5 | Contact | 8 | 36 |
| 6 | News | 5 | 41* |
| 7 | Article | 3 | 44* |
| 8 | Audit | 0 | — |
| 9 | Delivery | 0 | — |

*Note: cumulative totals exceed the 39 in `PLAN.md` because some issues span multiple pages (e.g. P2.1, O2.1, O3.1, U1.1, P4.7 are all "all pages" issues counted once in the register but seeded in Phase 1 and inherited everywhere). The 39 unique issues in `PLAN.md` remain the authoritative count.
