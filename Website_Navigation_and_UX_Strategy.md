# Website Navigation & UX Strategy for davidmike.io

## 1. Guiding Philosophy

The navigation and structure of this portfolio website are designed with a core philosophy of **clarity, efficiency, and targeted communication**. The goal is to serve two primary audiences—**technical recruiters** and **potential clients/employers**—by anticipating their needs and providing a frictionless path to the information they value most.

The structure is intentionally standard and predictable, avoiding cleverness in favor of usability. Every key piece of information should be no more than one or two clicks away from the homepage.

---

## 2. Website Structure (ASCII Tree)

This tree represents the complete file and folder structure for the website.

```
/ (root of website)
|
|-- index.html              (Home Page)
|-- about.html              (About Me Page)
|-- resume.html             (Resume Page)
|-- styles.css              (Stylesheet for all pages)
|
|-- projects/               (Project Gallery Folder)
|   |-- index.html          (Gallery landing page)
|   |-- cedar-infra.html    (Detailed page for the Cedar project)
|   |-- smart-library.html  (Detailed page for the Library project)
|   |-- chiva.html          (Detailed page for the Chiva project)
|   `-- seaice.html         (Detailed page for the Sea Ice project)
|
`-- blog/                   (Blog Folder)
    |-- index.html          (Blog landing page)
    |-- post1_home-lab.html
    |-- post2_satellite-data.html
    `-- post3_remote-infra.html
```

---

## 3. Page-by-Page Purpose

*   **`index.html` (Homepage):** The most critical page. Its purpose is to provide a 15-second summary of who you are and the value you provide. It must feature a strong headline, a brief professional summary, and the one-liners for the top 3-4 featured projects.

*   **`resume.html`:** A simple, clean page dedicated to presenting your formal resume. It should feature an embedded PDF viewer for easy reading and a clear, prominent "Download PDF" button.

*   **`projects/index.html` (Project Gallery):** A visual gallery of all major projects. Each project should be represented by a "card" containing its title, the powerful one-liner we crafted, and key technologies. Each card must link to its detailed project page.

*   **`projects/[project-name].html` (Project Detail Pages):** This is where you build trust and prove competence. Each page must follow the detailed template from the `Portfolio_Plan.md`, including sections for The Challenge, The Process, The Solution, and The Outcome.

*   **`about.html`:** The page for building a personal connection. This is where you share your story, your professional philosophy (e.g., The Phoenix Project, systems thinking), and personal interests that make you a well-rounded candidate.

*   **`blog/index.html`:** A collection of your articles and tutorials. This demonstrates your communication skills, thought leadership, and passion for continuous learning.

---

## 4. Ideal User Journeys

The navigation is designed to facilitate two key user paths:

### The Recruiter Path (Goal: Fast-track to qualifications)

1.  **Homepage:** Get a 15-second overview. *"Does this person have the right title and skills?"*
2.  **Resume Page:** Click the "Resume" link in the main navigation. Download the PDF to check against the job description. *"Do they meet the keywords and requirements?"*
3.  **Project Detail Page:** Click a project from the homepage that matches the job's needs. Scan for the tech stack and the quantified outcomes. *"Can they prove the skills they listed?"*

### The Potential Client Path (Goal: Build trust and see value)

1.  **Homepage:** Read the project one-liners, which are framed in terms of business value (e.g., "digital transformation," "annual savings"). *"Does this person solve problems like mine?"*
2.  **Project Detail Page:** Click a project that resonates with their own business challenges. Read the "Challenge" and "Process" sections in detail. *"Do I trust their thinking? Do they understand my needs?"*
3.  **About Page:** Click "About" from the main navigation. Read your story and philosophy. *"Do I want to work with this person?"*
4.  **Contact:** Easily find your email in the site's header or footer to initiate contact.
