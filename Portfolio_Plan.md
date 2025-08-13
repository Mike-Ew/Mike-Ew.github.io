# Portfolio Blueprint: davidmike.io (v2)

This blueprint is an actionable plan for developing your personal website. It incorporates insights from our conversations and the provided consultation documents.

## 1. Core Identity & Guiding Principles

- **Primary Audience:** Yourself. The site must be a genuine and detailed reflection of your identity, skills, and thoughts. It is a personal platform first, a professional tool second.
- **Primary Goal:** To serve as a central hub for your digital identity. A platform to create and share blogs, tutorials, and projects, and to connect with like-minded people.
- **Core Keyword Theme:** "Operations across ML, AI, and IT, including Cloud."
- **Voice & Tone (from Consultation):** Confident, competent, and authentic. "Carry yourself as someone employers would be lucky to get." The tone should be professional but allow for personality (humor, directness) to show through, especially in the blog and about sections.

## 2. Website Structure & Tech Stack

- **Site Map:**
    - `/` (Home): Introduction, featured projects, latest blog posts.
    - `/about.html`: A more personal story and professional philosophy.
    - `/projects/`: A gallery of all key projects.
    - `/blog/`: The main page for all articles and tutorials.
    - `/resume.html`: A page with an embedded, downloadable version of the Master Resume.
- **Tech Stack:**
    - Per your request, the site will be built with **simple, clean HTML and CSS**. This ensures maximum control, a focus on content, and avoids framework overhead.

## 3. Project Deep Dive: The Template

*(Based on the consultation advice to "Dive Deep" and "Show your workings")*

This detailed template will be used for each of the **Top 3** featured projects.

- **Project Title:**
- **One-Liner:** A punchy summary for the project card.
- **1. The Challenge:** A clear, non-technical description of the business problem or research question.
- **2. The Process & My Contribution:** This is the most critical section. Detail the journey.
    -   A bulleted list of your specific actions and responsibilities.
    -   Show iterations, including "bad ideas" that led to good ones.
    -   Explain the *why* behind key technical decisions.
    -   *(Plan to include visual aids like architecture diagrams, flowcharts, or even screen recordings of a process.)*
- **3. The Solution (Architecture & Tech Stack):** A detailed breakdown of the final architecture and the technologies used.
- **4. The Outcome:** The specific, quantifiable impact (metrics on latency, cost savings, accuracy, etc.).
- **5. Links:** GitHub Repo, Live Demo (if any), Published Paper.

### Projects to Feature:
1.  **`Cedar-infra` (The Core Mission):**
    > To support a manufacturer's vision of becoming a household name across Africa, I led its digital transformation by architecting a new technology stack that connects the company to its customers, ensuring continuous production (via 99.9% uptime) and funding strategic growth (with $200k in annual savings).

2.  **`chiva` (The Trial-by-Fire):**
    > Building the engine for a high-frequency trading firm, solo. I architected the low-latency infrastructure and MLOps pipeline from the ground up to handle the extreme demands of real-time algorithmic trading.

3.  **`rprice` (The Innovation Lab):**
    > Unlocking the hidden intelligence of a university library by building its 'digital nervous system'.

4.  **`seaice` (The Research Edge):**
    > Building a planetary-scale perception system that uses Vision Transformers to see through clouds and darkness, providing mission-critical intelligence on Arctic sea ice.

## 4. Content & Page-Specific Plans

- **Homepage (`index.html`):**
    -   A strong, clear introduction (see below).
    -   Feature the "Top 3" projects prominently.
- **About Page (`about.html`):**
    -   (From Consultation) Put the "fun stuff" here. Connect with the reader.
    -   Include work habits, hobbies, favorite books/music, and your core philosophies (e.g., The Builder Mindset).
- **Blog (`blog/`):
    -   **Initial Post Ideas:**
        1.  "Why I Built a 6-Node Home Lab for MLOps"
        2.  "The Hardest Problems in Fusing Optical and SAR Satellite Data"
        3.  "Lessons from Managing Critical Infrastructure Remotely Across Continents"

## 5. Development Roadmap (Initial Steps)

1.  Ensure the local `Mike-Ew.github.io` directory is on the `gemini/portfolio-updates` branch.
2.  Create the basic file structure: `index.html`, `styles.css`, `about.html`, and folders for `projects/` and `blog/`.
3.  Draft the content for the homepage, focusing on a strong introduction.
4.  Begin the deep dive for the first project page: "Arctic Sea Ice Classification."
5.  Write the first blog post.
