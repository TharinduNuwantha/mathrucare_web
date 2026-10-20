# Pregnancy Support System — Research Website
## Project R26-IT-146 | SLIIT Department of Information Technology

---

## Quick Start

Open `index.html` in any modern browser. No build tools or server required.
For local development, a simple static file server is recommended to avoid CORS issues with assets:

```bash
# Python 3
python -m http.server 8080

# Node.js (npx)
npx serve .

# VS Code: Use "Live Server" extension
```

Then open `http://localhost:8080` in your browser.

---

## How to Update Key Information

### 1. Update Team Photos

The team cards use the following profile photos in `assets/images/`:

- `bimsara.jpg` — Thirimanne D.P.B.
- `randinu.jpg` — Randinu P.V.K.V.
- `livera.jpg` — Livera S.D.
- `tharindu.jpg` — Nuwantha P.A.T.

To replace a photo, update the relevant `<img>` in the Research Team section of `index.html`:
```html
<img class="member-avatar member-photo"
     src="assets/images/member-IT22272386.jpg"
     alt="Thirimanne D.P.B."
     loading="lazy"
     decoding="async" />
```

Use a square image of at least 160×160px and compress it to under 300 KB.

### 2. Update Assessment Dates and Marks

Find the milestone section in `index.html` (search for `id="milestones"`).
Each timeline item contains date and marks fields like:

```html
<strong class="evidence-label evidence-pending" style="font-size:0.68rem;">⚠️ To be confirmed</strong>
```

Replace with the actual confirmed date/marks, e.g.:
```html
<strong>15 March 2025</strong>
```
Also update the `<div class="doc-status status-upcoming">Upcoming</div>` to:
```html
<div class="doc-status status-available">Completed</div>
```

### 3. Add Real App Screenshots

1. Place screenshot images in `assets/screenshots/`
   - Recommended names: `mother-dashboard.webp`, `ctg-analysis.webp`, `risk-dashboard.webp`, `mood-chatbot.webp`, `nutrition.webp`, `doctor-dashboard.webp`
2. In `index.html`, find the `<div class="screenshot-placeholder">` blocks in the **App Showcase** section
3. Replace each placeholder with an actual image:
```html
<img src="assets/screenshots/ctg-analysis.webp"
     alt="CTG analysis screen showing fetal heart rate classification"
     class="screenshot-img"
     style="width:100%;border-radius:var(--radius-xl);max-height:480px;object-fit:cover;"
     loading="lazy" />
```

Optimize screenshots: convert to WebP, keep under 300 KB each.

### 4. Add Documents (PDFs)

1. Place PDF in `assets/docs/`
2. Find the corresponding document card in `index.html` (search for `status-pending`)
3. Update the card:
```html
<!-- Change status from pending to available -->
<div class="doc-status status-available">Available</div>

<!-- Change disabled button to working link -->
<a href="assets/docs/your-file.pdf"
   class="btn btn-secondary btn-sm"
   target="_blank" rel="noopener noreferrer">View PDF</a>
<a href="assets/docs/your-file.pdf"
   class="btn btn-primary btn-sm" download>Download</a>
```

### 5. Add Presentation Slides

Same process as documents. Place in `assets/slides/` and update the corresponding card in `index.html`.

### 6. Update Email Addresses

Search `index.html` for `⚠️ Email to be confirmed` and replace with actual email:
```html
<a href="mailto:student@students.sliit.lk">student@students.sliit.lk</a>
```

**Do not publish personal mobile numbers or personal email addresses without explicit consent from each team member.**

### 7. Update the Hero Phone Mockup

The phone mockup in the hero section is a CSS-rendered conceptual design. Once real app screenshots exist, you can replace the content inside `.phone-screen` with an `<img>` tag showing the actual mother dashboard:

```html
<div class="phone-screen">
  <img src="assets/screenshots/mother-dashboard.webp"
       alt="Mother-facing app dashboard"
       style="width:100%;height:100%;object-fit:cover;border-radius:30px;" />
</div>
```

### 8. Add the Official Logo

If the team creates or receives an official project logo:
1. Save it as `assets/images/logo.svg` (or `.png`)
2. Replace the inline SVG in the `<nav-logo>` element and footer with `<img src="assets/images/logo.svg" alt="Pregnancy Support System" width="36" height="36">`

---

## File Structure

```
/
├── index.html                     ← Main website (single page)
├── README.md                      ← This file
├── CONTENT_AUDIT.md               ← Verified facts, pending items, conflicts
└── assets/
    ├── css/
    │   └── site.css               ← Complete design system
    ├── js/
    │   └── site.js                ← Progressive enhancement JavaScript
    ├── images/
    │   ├── hero-editorial.jpg     ← Hero section editorial image
    │   └── [team photos here]
    ├── screenshots/
    │   └── [add app screenshots here]
    ├── docs/
    │   ├── IT22284716_Nutritionist_Proposal.pdf   ← Component 04 (available)
    │   └── [add other PDFs here]
    └── slides/
        └── [add presentation files here]
```

---

## Size Budget (SLIIT 20 MB Limit)

| Item | Current Size |
|------|-------------|
| index.html | ~95 KB |
| site.css | ~40 KB |
| site.js | ~12 KB |
| hero-editorial.jpg | ~280 KB |git 
| IT22284716_Nutritionist_Proposal.pdf | ~1.1 MB |
| **Current Total** | **~1.5 MB** |
| Remaining for screenshots/docs | **~18.5 MB** |

**Warning:** Adding multiple PDFs and screenshots can quickly approach the limit. Compress all images to WebP and PDFs where possible.

---

## Technical Notes

- **No build tools required** — pure HTML/CSS/JS
- **SLIIT compliance** — static site within 20 MB constraint
- **Fonts** — loaded from Google Fonts (requires internet connection)
- **JavaScript** — progressive enhancement only; core content works without JS
- **Accessibility** — WCAG 2.1 AA compliance target; semantic HTML, ARIA labels, keyboard navigation
- **Responsive** — mobile-first, tested at 320px, 390px, 768px, 1024px, 1440px+
- **Print** — basic print styles included

---

## Content Honesty Framework

All content uses three evidence levels:
- ✅ **IMPLEMENTED** — verified by actual app code/screenshots
- 🔬 **PROPOSED** — from research proposals, not yet built/verified
- 🎯 **EVALUATION TARGET** — proposed metrics (e.g., >90% accuracy) — NOT measured results

Do not present proposed features as implemented ones. Update evidence labels as development progresses.

---

## Medical Disclaimer

This website describes an academic research prototype. It is **not a validated clinical system** and must not be presented as such. Always include the disclaimer: *"This is an academic research prototype. It is not a substitute for professional medical advice, diagnosis, clinical judgment, or emergency healthcare services."*

---

*Last updated: October 2026 — Update this file whenever major content changes are made.*
