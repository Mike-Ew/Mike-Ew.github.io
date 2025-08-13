# Master Implementation Guide for Claude: Building davidmike.io

**Objective:** To build and deploy a personal portfolio website based on the provided strategy documents and content files. This guide will serve as the central blueprint for the project.

---

## 1. Core Design & UX Principles

The website must adhere to the principles outlined in `Website_Navigation_and_UX_Strategy.md`. The core philosophy is **clarity, efficiency, and targeted communication**.

Furthermore, the content strategy, as advised by the user's consultant, is to **focus on conciseness and arousing curiosity** in summaries, with rich, detailed explanations reserved for the project detail pages. The goal is to make the audience want to learn more, not to give them everything upfront.

---

## 2. Step-by-Step Implementation Plan

### STEP 1: Create the Website File Structure

First, create the following directory and file structure. This structure is defined in `Website_Navigation_and_UX_Strategy.md`.

```
/ (root of website)
|
|-- index.html
|-- about.html
|-- resume.html
|-- styles.css
|
|-- projects/
|   |-- index.html
|   |-- cedar-infra.html
|   |-- smart-library.html
|   |-- chiva.html
|   `-- seaice.html
|
`-- blog/
    |-- index.html
    |-- post1_home-lab.html
    `-- ... (other posts)
```

### STEP 2: Build the Homepage (`index.html`)

The homepage is the most critical page and must immediately convey a unique and powerful professional identity.

**1. Hero Section Structure:**
The hero section should be structured as follows, with the personal mission statement as the central element:
*   **Main Name (h1):** `David Mike-Ewewie`
*   **Mission Statement (h2 or blockquote):** `"Building the world a digital nervous system, and sometimes a neuron at a time."`
*   **Supporting Titles (h3):** `AI Systems Architect | Digital Transformation Leader | AI Researcher`

**2. Featured Projects Section:**
Below the hero section, create a section for featured projects. For each featured project, use the final, refined **one-liners** located in `Portfolio_Plan.md`.
    *   **Cedar Project:** Use the "To support a manufacturer's vision..." one-liner.
    *   **Smart Library Project:** Use the "Unlocking the hidden intelligence..." one-liner.
    *   **Chiva Project:** Use the "Building the engine for a high-frequency trading firm, solo..." one-liner.
    *   **Sea Ice Project:** Use the "Building a planetary-scale perception system..." one-liner.

### STEP 3: Build the Project Detail Pages (`/projects/*.html`)

Each project detail page is a deep dive designed to build trust and prove competence. The content for each page is located in the `Context.md` file within each project's respective directory (`/Gemini_Workspace/Career/Projects/Project_Clones/[project-name]/Context.md`).

For each project page, use the content from its `Context.md` to populate the following sections:

*   **Project Title:** (e.g., "Project: Cedar Beverage Co. - Full Digital Transformation")
*   **One-Liner:** (The same one-liner from the homepage)
*   **The Challenge:** Use the content from the `Vision & Goal` section of the `Context.md`.
*   **The Process & My Contribution:** Use the content from the `Systems Thinking in Action: The Process` section.
*   **The Solution (Architecture & Tech Stack):** Use the content from `The Solution: Implemented Infrastructure & Systems` section.
*   **The Outcome:** Use the content from the `Development Status & Quantifiable Outcomes` section.

### STEP 4: Build the `about.html` and `resume.html` Pages

*   **`about.html`:** The content for this page should be based on the user's personal story, their design philosophies (e.g., The Phoenix Project, empowering users), and their interests. This should be a more personal and narrative-driven page.
*   **`resume.html`:** This page should feature an embedded PDF of the `Master_Resume.md` and a clear "Download PDF" link.

### STEP 5: Apply Styling (`styles.css`)

The design should be clean, modern, and professional, prioritizing **beauty and simplicity** as advised in the consultation documents. Use a single stylesheet (`styles.css`) to maintain a consistent look and feel across the entire site. The tech stack is simple HTML and CSS, with no complex frameworks.

---

## 5. Final Review Checklist

Before deployment, ensure the following:
- [ ] All links are working correctly.
- [ ] The site is fully responsive and looks good on mobile devices.
- [ ] All text has been proofread for typos and grammatical errors.
- [ ] All images are high-quality and optimized for the web.
- [ ] The navigation is consistent and matches the `Website_Navigation_and_UX_Strategy.md`.