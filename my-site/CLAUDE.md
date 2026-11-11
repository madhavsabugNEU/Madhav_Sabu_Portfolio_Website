# CLAUDE.md: Madhav Sabu portfolio site

This file is the project briefing. Read it at the start of every session.
The design work happens in a separate Claude.ai chat; decisions made there get copied in here.
If anything in this file conflicts with a request, ask before acting.

---

## How to work with me

- I'm not a web developer and I'm not trying to learn React. Explain what you changed in plain English, in 2 to 4 sentences, with no jargon.
- Work in small steps. Only do the step I ask for. Don't jump ahead to later steps in the plan.
- After each change, tell me exactly what to look at in the browser (localhost) to check it.
- Ask before running `git commit` or `git push`. When I say yes, write a short, clear commit message.
- Don't add new npm packages unless they're really needed. If you want to add one, tell me why first.
- Keep the code organized so each section and each project chapter is its own component file.
- When a step is done, update the "Current status" section at the bottom of this file.

## Tech setup

- Vite + React (created with `npm create vite@latest my-site -- --template react`)
- Deployed on Vercel from the GitHub repo `my-site` (pushing to `main` auto-deploys)
- Run locally with `npm run dev`

---

## Purpose and audience

- Personal portfolio for co-op recruiters and hiring managers. It gets linked on my resume, LinkedIn, and applications, and submitted for portfolio-required roles (for example, MIT Senseable City Lab).
- Target roles: Spring 2027 co-ops (January to June 2027) in data science, data analytics, data engineering, AI/ML, computational biology, and finance-adjacent analytics.
- Recruiters spend under a minute on a site. The first screen must show who I am, what I build, and how to contact me, without scrolling.

## Who I am

- Madhav Sabu (he/him), second-year student at Northeastern University, Boston, MA
- B.S. in Data Science & Business, Concentration in Marketing Analytics, Minor in Biology. Expected graduation May 2029.
- GPA 3.74/4.0. Dean's List (Fall 2025, Spring 2026).
- Grew up in India, Dubai (lived there 5 years, but don't mention the length on the site), and Singapore. Attended UWC South East Asia in Singapore (IB Diploma).
- Pitch: I combine data science with business thinking to turn messy data into reliable insights and tools.
- Contact on the site: madhavsabug@gmail.com · linkedin.com/in/madhavsabu/ · github.com/madhavsabugNEU
- Never show my phone number anywhere on the site. It's only inside the resume PDFs, which is fine.

## Skills (list only these)

- Languages: Python (strongest), SQL. Java and C# are basic, so don't feature them prominently.
- Libraries and tools: pandas, NumPy, scikit-learn, Matplotlib, Streamlit, Jupyter Notebook, Git/GitHub, Excel, MySQL, Figma, DaVinci Resolve
- Skills: machine learning, data analysis, data cleaning, data validation, data visualization, database design, REST APIs, UI/UX design

## Relevant coursework

Discrete Structures, Introduction to Databases, Intermediate Programming with Data, Foundations of Data Science, Advanced Programming with Data, Information Presentation and Visualization, Programming with Consumer Data, Financial Accounting & Reporting, Financial Management, Introduction to Marketing, Buildings and Cities.
IB transfer credit: General Biology 1 and 2, Principles of Macroeconomics and Microeconomics.

## Projects

1. **xG Modeling in Football** (Jul 2026 to present, solo, IN PROGRESS)
   - Python, pandas, scikit-learn
   - Collected and cleaned historical match and shot data into a training dataset. Building and iterating on an ML model that predicts goal probability from shot location, angle, and situational features.
   - GitHub: https://github.com/madhavsabugNEU/xG-model-football
   - Always mark it as in progress. Never invent accuracy numbers or results.

2. **ShelfLife** (Jan to Apr 2026, five-person team, CS 3200 Database Design course project)
   - MySQL, Flask, Streamlit, Docker, Python
   - Course materials marketplace for Northeastern students, with buyer, seller, data analyst, and admin roles.
   - My contributions: designed the relational schema (linked tables, foreign keys), generated mock data for testing, found and fixed data integrity issues such as missing price-history records, and helped debug the Streamlit analytics dashboard.
   - GitHub: https://github.com/madhavsabugNEU/26S-ShelfLife-GroupProject
   - Demo video (embed it): https://www.youtube.com/watch?v=jpNh5U-58YQ
   - Always describe it as a team project and highlight only my parts.

3. **Data Cleaning Pipeline** (DS 3500 course project, Fall 2026, complete: Parts 1 to 4)
   - Python, pandas, PyYAML, argparse, logging
   - Configurable command-line pipeline. It loads CSV data and a YAML config, validates required columns and numeric fields, removes duplicates, missing values, and outliers (IQR or z-score, set in the config), saves the cleaned CSV, and prints a cleaning report. Modular `src/` package: `data_loaders` (CSV, JSON, YAML loading by file extension), `data_validator`, `data_processor` (cleaning steps + report), `data_output`, and `utils` (logging setup, file checks). `pipeline.py` orchestrates the stages.
   - Label it as a course project built from an assignment spec.
   - **Accuracy notes:** The JSON loader returns a dictionary, so don't claim the pipeline cleans JSON datasets. Say it "loads CSV data and YAML configuration." The sample dataset (`fixtures/sample_data.csv`) was **provided by the course**, so never say I designed or created it.
   - GitHub: https://github.com/madhavsabugNEU/mp1-data-pipeline

4. **Economic Impact of El Salvador's Gang Crackdown** (Mar to Nov 2024, independent research)
   - 4,000-word research paper analyzing up to 23 years of World Bank, IMF, ILO, and CEPAL data across 4 indicators (GDP growth, foreign investment, unemployment, wellbeing).
   - Finding: reported economic gains couldn't be attributed to the policy, partly because of misleading statistics (for example, unemployment fell partly because mass arrests shrank the labor force).
   - Frame it as independent research. Never call it published or college research.
   - I'll add the paper as a PDF later (it will go in `public/papers/`). Until then, leave a placeholder for the link.

5. **Enzyme Activity Experiment** (independent lab research, high school)
   - 30-trial experiment on how salinity affects trypsin activity, measured with a colorimeter and analyzed with standard deviation and Pearson correlation (r = −0.43, a weak negative correlation).
   - Strength: I identified why the data was unreliable and how I'd fix it.

6. **Sentiment Analysis Classifier** (Jun to Jul 2023, team of 4)
   - Python, pandas, Jupyter. Classified IMDB movie reviews as positive or negative.
   - No code access, so mention it only briefly (if at all) and don't link anything.

## Experience

- **Northeastern Electric Racing, Software Product Team Member** (Jan 2026 to present, Boston, MA): designed high-fidelity Figma mockups for features of the team's main data dashboard, gathered user feedback and iterated on designs, and presented concepts to club leadership for board approval. Don't show Figma screenshots unless I say the club approved it.
- **Knack, Peer Tutor** (Feb to Jun 2026, Boston, MA): tutored financial accounting (ACCT 1201) and Excel-based calculations. 5-star rating across student reviews.
- **My Creative Factory, Product & Client Management Intern** (Jun to Jul 2024, Singapore): turned requirements from 4 clients into customized deliverables, did competitive analysis for internal reports, and produced and edited client marketing videos in DaVinci Resolve.

## Leadership and activities

Smith and Kennedy Hall Vice President · Kappa Theta Pi (Professional Technology Fraternity), Pledge Engagement Lead · Resident Student Association · Badminton team captain (UWCSEA) · Special Olympics technical officer (coordinated logistics and coached badminton athletes)

## Interests

Badminton, football (soccer) analytics, biking, exploring new music.

## Writing style (apply to all site content)

- Write in a polished, professional tone with correct grammar and punctuation.
- Project and experience descriptions use complete sentences, not fragments. Short labels (stop subtitles, tags, buttons) can stay brief.
- Avoid slang and filler. Keep it confident but not boastful.
- Use consistent tense: present tense for ongoing work (xG, Electric Racing), past tense for finished work.
- Proofread all existing copy against these rules whenever you touch a section.

## Honesty rules (apply to all site content)

- Use real numbers only. Never invent metrics, accuracy scores, or results.
- Label course projects and team projects clearly.
- Don't list "Mathematical Foundations of AI" as coursework.
- Don't call me a "junior." I'm a second-year student.
- xG is in progress. Say so wherever it appears.
- Don't write copy that claims things not listed in this file. If something is missing, leave a clear placeholder like `[TODO: Madhav to fill in]` and tell me.

---

## Design concept (decided)

### The big idea: the Green Line

- The site is themed on Boston's Green Line, since Northeastern sits on it. Use our own green and our own style. Do NOT copy the MBTA logo, the "T" symbol, or official MBTA signage.
- Colors: Green Line green `#1a7f4b` for the branches. Navy `#1F3864` for my name, headings, and the pre-Boston journey.

### The hero (first screen), approved mockup

- Top left: my name (navy, large) and a two-line pitch ("Data science + business at Northeastern." / "Turning messy data into reliable insights.").
- **Clear instructions for choosing a line.** Directly above the map (or beside it on wide screens), add a short, clearly visible prompt in regular body text (not tiny monospace), navy or dark gray, about 16 to 18px:
  - Line 1 (slightly bolder): **"Choose a line to explore my work in that field."**
  - Line 2: "Each line shows the projects, coursework, and resume most relevant to that role. Not sure where to start? Take the E line to see everything."
  - Keep a small green monospace cue near the branches ("tap a line to board →" on phones, "click a line to board →" on desktop) so the map itself also reads as clickable.
  - Each branch's hover state (thicker line, underlined label, pointer cursor) should make it obvious it's clickable.
- The map, left to right:
  - **My journey before Boston:** a dotted navy line with three small stations: **India → Dubai → Singapore**.
  - **Northeastern:** a big hub station (a white circle with a thick green ring), where the line turns solid green.
  - **Four green branches** fan out to the right from Northeastern, like the real Green Line. Each one ends in a green circle badge with its letter:
    - **B** = Business Analytics
    - **C** = Comp Bio
    - **D** = Data / ML
    - **E** = All stops (Northeastern's real Green Line branch)
  - Small stop dots sit along each branch.
- Along the bottom, always visible: GitHub, LinkedIn, and Email as pill buttons, plus a filled navy Resume button.
- On phones, the map turns vertical, with the journey on top, Northeastern in the middle, and the branches dropping downward.

### Site structure (approved): station directory + world pages

The site has three kinds of pages. Use `react-router-dom` for the routes (this is an approved new package).

**1. Home page (`/`): calm, navy-and-white only**
- The hero (as approved above): name, pitch, the transit map with clickable lines, and the link buttons.
- Below the hero, a **"Stations" directory**: a heading "Stations" with a small "4 projects · click to enter" label, then a grid of **station cards** (2 columns on desktop, 1 on phones):
  - Each card is white with a light border (`#e1e4ea`) and rounded corners (about 12px). It lifts slightly and its border turns navy on hover (no lift with reduced motion).
  - **The top of each card is a small preview (about 92px tall) of that project's world.** xG shows a mini dark-green pitch with a few dots and the "● LIVE 72'" clock. The pipeline shows cream paper with struck-out messy rows → "✓ clean." ShelfLife shows a blueprint-blue grid with three linked table boxes. Research shows graph paper with two small paper cards.
  - Below the preview: the lines it's on (for example "lines D · C," green monospace), a tag on the right (In progress / Course project / Team of 5 / Independent), the project title (navy), and a one-sentence description.
  - Clicking a card opens that world page.
- Below the stations: Experience, About, Resume, and Contact, in the navy-and-white style.
- **No full-size themed worlds appear on the home page.** The previews on the cards are the only themed elements.

**2. Line pages (`/line/b`, `/line/c`, `/line/d`, `/line/e`)**
- As described in "Boarding a line" above.

**3. World pages (`/xg`, `/pipeline`, `/shelflife`, `/research`)**
- **A sticky navy top bar** (`#1F3864`) with a back button. If the visitor came from a line, it says "← Back to D line" (or whichever line) and returns there. Otherwise, it says "← Back to stations" and returns to the home page. On the right, a small label: "lines D · C."
- Then the project's full themed world (the Matchday chapter for xG, and so on). The world fills the page width.
- At the bottom, a navy **"Next stop" sign** with the line's letter badge. If the visitor came from a line, it goes to the next stop on that line ("next stop on the D line"). Otherwise, it follows the E line order: xG → Pipeline → ShelfLife → Research. There's no sign on the last stop.
- Track the line the visitor came from with a query param or router state (for example `/xg?line=d`), so it survives a refresh.

**Direct links:** Every page needs to work when someone opens its link directly or refreshes it. Add a `vercel.json` with a rewrite that sends all routes to `index.html`, so Vercel doesn't show a 404.

**Nav:** Keep a simple, always-available way to get Home, Stations, Experience, About, Resume, and Contact. Style it navy-and-white to match the frame (replace the default blue underlined links).

### Color rule (keeps the motifs from clashing)

- **The frame** is navy `#1F3864`, white, light gray `#f7f8fa`, and transit green `#1a7f4b`. That covers the hero, map, nav, station cards, line pages, navy bars, next-stop signs, Experience, About, Resume, and Contact.
- **Each world's palette** stays inside its world page (and its card preview). It never leaks into the frame.
- The xG world uses a deep shade of the transit green, so the two greens look related instead of nearly matching.

### Boarding a line ("Pick your route")

- Clicking a branch (the line, its label, or its badge) "boards" that line and opens its line page (`/line/b`, `/line/c`, `/line/d`, `/line/e`). Make the clickable area generous (an invisible, wider stroke over each branch) so the lines are easy to hit. (Fancy boarding animation comes later. For now, a simple switch is fine.)
- The line page shows:
  - A header with the letter badge, the line name, and "X stops from Northeastern."
  - A vertical green line with the projects as stops, top to bottom. Each stop has a name and a short subtitle.
  - **Transfer stations:** projects that appear on more than one line get a bigger dot and a "transfer" tag.
  - A "Coursework on this line" panel beside the stops on desktop (below them on phones). See below.
  - A resume button that matches the line.
  - The navy top bar with "← Back to map" (see Site structure).
- The stops on each line (first draft):
  - **B, Business Analytics:** ShelfLife (transfer) · Data Cleaning Pipeline (transfer) · El Salvador research · My Creative Factory · Knack → **Econ** resume
  - **C, Comp Bio:** Enzyme experiment · Data Cleaning Pipeline (transfer) · xG model (transfer) → **Bio** resume
  - **D, Data / ML:** xG model (transfer) · Data Cleaning Pipeline (transfer) · ShelfLife (transfer) → **CS** resume
  - **E, All stops:** every project. The resume button lets you choose any of the three versions.
- Clicking a stop opens that project's world page, remembering which line you came from (see Site structure).

### Coursework on each line

Each line page also has a **"Coursework on this line"** panel, styled like a station timetable (a clean list or table in the transit style). Mark IB transfer credit clearly as "(IB credit)".

- **B, Business Analytics:** Financial Accounting & Reporting · Financial Management · Introduction to Marketing · Programming with Consumer Data · Introduction to Databases · Information Presentation and Visualization · Principles of Macroeconomics (IB credit) · Principles of Microeconomics (IB credit)
- **C, Comp Bio:** General Biology 1 (IB credit) · General Biology 2 (IB credit) · Foundations of Data Science · Intermediate Programming with Data · Advanced Programming with Data · Introduction to Databases
- **D, Data / ML:** Discrete Structures · Foundations of Data Science · Intermediate Programming with Data · Advanced Programming with Data · Introduction to Databases · Information Presentation and Visualization
- **E, All stops:** all coursework, including Buildings and Cities

### The Biology minor

- The C line header shows a subtitle: "B.S. in Data Science & Business · Minor in Biology." The C line's intro text should explain how I connect data science with biology.
- The minor should also appear wherever my degree is listed (the About or Education section) and in the hero tooltip or caption if there's room.

### Project worlds

Each project has its own world page with its own visual theme:
- **xG Modeling → "Matchday":** dark pitch-green, chalk pitch lines, shots plotted and colored by xG
- **Data Cleaning Pipeline → "Clean run":** cream paper and monospace text. Messy rows get struck out and come out clean.
- **ShelfLife → "Blueprint":** an ER diagram of my actual schema, with foreign-key lines drawing themselves in
- **Research (El Salvador, enzyme) → "Lab notebook":** graph paper, serif type, annotated pages

### xG chapter ("Matchday"), approved design (v2)

- **Colors:** background `#0d3a24` (deep transit green), pitch `#114a2e`, chalk lines `#eaf3de` at about 30% opacity, text `#eaf3de`, secondary text `#c0dd97`, small labels `#97c459`, muted/upcoming `#5e7d68`. Amber `#fac775` for highlights (text on `#3a3410` for pills). Live red `#e24b4a`.
- **Header:** a small monospace label showing which lines this stop is on (D line · C line transfer), the title "xG Modeling in Football," the amber "In progress" pill, a one-sentence description in formal, complete sentences, and a meta line (Solo project · Jul 2026 to present · Python, pandas, scikit-learn).

**Shot map (left column on desktop, stacked on phones):**
- A **horizontal half-pitch with the goal at the top** (landscape, roughly 340×250 proportions), with accurate markings: penalty box, six-yard box, penalty arc, and halfway arc at the bottom.
- **All shots are the same small size** (radius about 4) and **colored by xG only**, using a smooth gradient from dark green (low) through light green to amber (high), at about 75% opacity. No size encoding and no outlines for goals.
- **One featured shot is annotated:** a light amber wedge from the shot to both goalposts (labeled "angle"), a dashed line to the center of the goal (labeled "distance"), and the dot itself in amber with a "this shot" label.
- **Beside the map:** a short heading, "How xG reads a shot," and two or three sentences explaining that xG depends mostly on how much of the goal the shooter can see and how far away they are. Below that, a simple gradient legend (low → high xG) and the caption "illustrative · placeholder data."
- Hovering or tapping a shot shows its details (xG, outcome, distance) in one line. Goals are revealed only on hover or tap.
- Shot data stays in the separate data file so I can swap in my real CSV.

**Match report panel (right column):** unchanged. Stat rows show "—" until real numbers arrive, with a dashed placeholder note and pill links (GitHub repo, Notebook · coming soon).

**"Live commentary" progress tracker (replaces the old "how it works" arrow strip):**
- **Top bar:** a "project progress" label on the left. On the right, a red "● LIVE" tag and the clock `72' / 90'`.
- **Match clock progress bar:** a thin bar filled to 72/90 (80%), with a faint half-time tick at 50%. Labels under it: "kickoff," "half time," and "full time = finished."
- **One-line key:** "A football match lasts 90 minutes, and each completed stage moves the clock forward 18."
- **Five rows.** Each row has a status icon, a plain step name (bold), a one-sentence description, and a small minute badge on the right:
  1. ✓ **Data collection** (18'): Gathered historical match and shot data from past seasons.
  2. ✓ **Data cleaning** (36'): Standardized coordinates and events into a consistent training dataset.
  3. ✓ **Feature engineering** (54'): Derived shot distance, angle, and game-situation features.
  4. ● **Modeling** (72', amber badge, red pulsing "live" dot, "now playing" tag): Building and iterating on a classifier in scikit-learn.
  5. ○ **Evaluation** (90', dimmed): Testing against held-out data and a distance-only baseline.
- Plain step names always come first, so the tracker makes sense to people who don't follow football.
- The pulsing live dot respects `prefers-reduced-motion` (no animation if it's on).
- **Keep the stage list and current stage in the data file.** The clock is computed as completed stages × 18. When all five are done, the clock shows 90', the LIVE tag changes to "Full time," and the "In progress" pill can be removed.

### Pipeline world ("Clean run"), approved design (built from a real run)

Route: `/pipeline`. It gets the standard navy top bar ("← Back to …" plus "lines B · C · D") and a next-stop sign at the bottom.

**Colors:** paper `#f6f3ec`, text `#1b1b1b`, secondary `#52514e`, muted `#8a8577`, rule lines `#e4ddcc`, rust accent `#b4502a` (problems, labels), green `#3b6d11` (✓ success), card background `#fffdf8`, terminal `#1f1d19` with text `#d8d2c2`. Monospace for data, labels, and code.

**Header:** a rust monospace label "clean run," the title "Data Cleaning Pipeline," a muted meta line ("DS 3500 course project · built from an assignment spec · Python, pandas, PyYAML, argparse, logging"), and this description:
> A configurable command-line pipeline that loads a dataset, validates it, removes duplicates, missing values, and outliers, and saves the result with a cleaning report. Every cleaning rule is set in a YAML file, so the same code can clean a different dataset without changes.

**Main interactive piece (two columns on desktop, stacked on phones):**
- **Left: a "problem rows" table** labeled "fixtures/sample_data.csv · the 8 problem rows" (the course-provided sample of 100 records), with a **"▶ Run pipeline"** button. Columns: id, name, rating, cat, and a reason column. Empty values display as rust "NaN." The rows, all real:

  | id | name | rating | category | removed at | reason |
  |---|---|---|---|---|---|
  | 95 | Record_095 | not_available | C | Validate | invalid number |
  | 96 | Record_096 | error | A | Validate | invalid number |
  | 1 | Record_001 | 67 | B | Duplicates | duplicate |
  | 2 | Record_002 | 74 | C | Duplicates | duplicate |
  | 97 | Record_097 | (empty) | B | Missing | missing rating |
  | 98 | Record_098 | 75 | (empty) | Missing | missing category |
  | 93 | Record_093 | 200 | A | Outliers | outlier (IQR) |
  | 94 | Record_094 | -50 | B | Outliers | outlier (IQR) |

  Under the table: "+ 92 clean rows pass through untouched."
- **Right: a big row counter** ("100 → 92") and a **stage list**, each stage with a status dot and a row count: Load 100 · Validate 98 · Remove duplicates 96 · Drop missing values 94 · Remove outliers (IQR 1.5) 92.
- **Pressing Run** plays the stages in order (about 0.9s apart). At each stage, its rows get struck through and dimmed, their reason fades in, the stage's dot turns green, and the counter updates. Then the button changes to "↻ Run again." With reduced motion, everything happens instantly. Before anyone presses Run, the page shows the starting state (100 rows, Load stage active).

**Below, revealed fully after the run (dimmed before it):** three cards in a row (stacked on phones):
1. **"✓ cleaning report":** rows_before: 98 · rows_after: 92 · rows_removed: 6 · columns: 5 → 5, with the footnote "Counted after validation, which removed 2 more rows first."
2. **"under the hood":** a file tree: pipeline.py (orchestrates) and src/ with data_loaders (CSV · JSON · YAML), data_validator (columns, numerics), data_processor (clean + report), data_output (save CSV), utils (logging, file checks).
3. **"config.yaml":** remove_duplicates: true · missing: axis: rows · outliers: method: iqr (# or zscore) · threshold: 1.5

**Terminal strip** (dark, horizontally scrollable on small screens), showing real log lines:
```
$ python pipeline.py --input fixtures/sample_data.csv --output output/clean.csv --config config/config.yaml --verbose
WARNING  Invalid numeric value in rating at row 94: 'not_available'
INFO     Validation complete: 100 -> 98 rows
DEBUG    rating: lower=43.625, upper=106.625, removed=2
INFO     Processing complete: 98 -> 92 rows
```
**Links:** a GitHub repo pill button.

**Station card preview** (home page): keep the cream preview with struck-out messy rows → "✓ clean." It can show "100 → 92 rows."

**Keep all of this data in a data file** (for example `src/data/pipeline.js`) so it's easy to update.

### ShelfLife world ("Blueprint"), approved design

Route: `/shelflife`. It gets the standard navy top bar ("← Back to …" plus "lines B · D") and a next-stop sign at the bottom. The page is a zoomed-in version of the station card preview: an architectural drawing of the database I designed.

**Colors** (from the existing card preview): background `#174377` with a faint grid in `#cfe3ff` at about 15% opacity, table boxes `#1d4f86` with `#cfe3ff` outlines, titles and table names white `#ffffff`, secondary text `#cfe3ff`, contribution dashes in "red pencil" coral `#ff9b85`, and role highlighting in pale amber `#ffd28a`. Monospace for table names, column names, and labels. These colors stay inside the ShelfLife world.

**Header** (at the top of the blueprint area, above the role buttons, on the blue background, not on white): a small monospace label "blueprint," the title "ShelfLife" in large white text, a "Team of 5" pill, and a meta line: "CS 3200 Database Design course project · Jan to Apr 2026 · MySQL, Flask, Streamlit, Docker, Python." The meta line is monospace in `#cfe3ff`. Then this description, in `#cfe3ff` body text with a max width of about 40rem (it replaces the old placeholder text, which repeated "team of five" and "CS 3200"):
> My team of five built ShelfLife, a course materials marketplace for Northeastern students where every listing is tied to a course. I designed the 18-table relational schema underneath it.

**The ER diagram (main piece, desktop and tablet)**
- Draw my real schema (listed below). LISTING sits in the center, since it links to the most tables. The four groups sit around it, each inside a dashed outline with a small label, like rooms on a floor plan: Catalog (left), Marketplace (around LISTING), Moderation (upper right), Analytics (lower right).
- Each table box shows its name, primary key (marked PK), and foreign keys (marked FK) by default. Tapping or clicking a box expands it to show all its columns, and highlights the tables it links to. Click again or press Escape to collapse.
- Foreign-key lines are drawn as thin `#cfe3ff` lines between the boxes, ending at the referenced table. On load, they draw themselves in one by one. With reduced motion, they appear instantly.
- PLATFORM_METRIC has no foreign keys. Place it in Analytics with a small note: "snapshot table · no links."
- **Annotations:** small monospace callouts with a thin leader line, pointing at real constraints in the schema:
  - TRANSACTION: "one sale per listing" (`listing_id` is UNIQUE)
  - REVIEW: "rating 1–5" (CHECK constraint)
  - COURSE_MATERIAL: "an item links to a course only once" (UNIQUE course_id + item_id)
  - WISHLIST: "no duplicate saves" (UNIQUE user_id + listing_id)
  - BUNDLE_LISTING and ADMIN_FLAG: "junction table · composite key"
- **Title block** (bottom right corner, bordered like a real blueprint title block): "ShelfLife · relational schema" / "Schema design: Madhav Sabu" / "Team project · 5 people · CS 3200" / "18 tables."

**Role buttons** (above the diagram): Buyer, Seller, Data analyst, Admin, plus "All." Clicking a role highlights that role's tables in pale amber and dims the rest. "All" is the default.
- Buyer: COURSE, LISTING, WISHLIST, TRANSACTION, REVIEW
- Seller: LISTING, ITEM, PRICE_HISTORY, BUNDLE
- Data analyst: REPORT, PLATFORM_METRIC, TRANSACTION, PRICE_HISTORY
- Admin: FLAG, ADMIN_FLAG, COURSE, DEPARTMENT

**Phones:** the full diagram doesn't fit, so show the four rooms as stacked cards. Each card lists its tables, and tapping a table shows its columns and what it links to (in plain text, for example "→ links to USER, ITEM, COURSE"). Role buttons still work, highlighting tables in the cards. The title block sits at the end.

**The page below the diagram ("sheet notes"), approved design**

The bottom half of the page continues the drawing sheet. It replaces the old plain white content (the "My contributions" bullets, the bare video, and the underlined "View on GitHub" link).
- **The blueprint keeps going.** The `#174377` background and faint grid continue below the diagram all the way down to the next-stop sign. No white band between the diagram and the sign.
- **Dimension-line dividers** separate the sections, replacing plain headings and grey rules: a thin `#cfe3ff` horizontal line with small vertical tick marks at both ends and a short monospace label centered on it (the line breaks around the label), like a measurement on an architectural drawing. Labels: "sheet notes · my contributions" above the contributions box, and "detail A · walkthrough" above the video.
- **Contributions box (simplified after 8d):** one bordered box (`#cfe3ff` lines at about 40% opacity) with one contribution per row and a thin rule between rows. No column headers, no REV letters, no REF column, and no markers on the diagram.
  - Each row starts with a small coral `#ff9b85` dash (the "red pencil" touch), followed by the sentence in white body text.
  - The four sentences, in this order:
    1. I designed the relational schema, including the linked tables and foreign keys.
    2. I generated the mock data the team used for testing.
    3. I found and fixed data integrity issues, such as missing price-history records.
    4. I helped the team debug the Streamlit analytics dashboard.
  - Use exactly these sentences. Don't add any detail beyond them.
  - Same layout on phones (the box is already one column).
- **Demo video as "Detail A":** the existing privacy-friendly YouTube embed sits inside a darker panel (`#1d4f86`, about 12px padding) with a thin `#cfe3ff` border and small L-shaped corner marks at all four corners, like a detail view on a drawing. Below it, a small monospace caption in `#cfe3ff`: "Team demo of the finished app." Keep it 16:9 and full width of the text column on phones.
- **GitHub link:** replace the underlined link with an outlined pill (`#cfe3ff` border and text, transparent background, white on hover): "View the repo on GitHub →".
- **End of the sheet:** the blueprint area finishes with a thin `#cfe3ff` border line across the bottom and a small monospace "end of sheet" label at the right, then the navy next-stop sign. The bigger transition fix stays in "Future notes."
- Text column width for everything below the diagram: about 48rem, centered, so it lines up with the header.

**Station card preview** (home page): label the three existing boxes USER, LISTING, and ITEM, with the two dashed lines connecting each to LISTING.

**Keep all schema data in a data file** (`src/data/shelflife.js`): the tables, their columns, keys, group, links, annotations, role mapping, and the four contribution sentences. The diagram, phone cards, and card preview all read from it.

**The schema** (from `database-files/01_schema.sql` in the ShelfLife repo). Format: TABLE (group): columns. PK = primary key, FK = foreign key (→ referenced table), U = unique.
- DEPARTMENT (Catalog): dept_id PK, dept_name, college
- COURSE (Catalog): course_id PK, dept_id FK → DEPARTMENT, course_number, course_name, semester, is_active
- ITEM (Catalog): item_id PK, title, author, isbn U, category
- COURSE_MATERIAL (Catalog): course_material_id PK, course_id FK → COURSE, item_id FK → ITEM, required; U (course_id, item_id)
- PRICE_HISTORY (Catalog): history_id PK, item_id FK → ITEM, semester, avg_price, low_price, high_price, total_sales
- USER (Marketplace): user_id PK, name, email U, is_active, avg_rating, created_at
- LISTING (Marketplace): listing_id PK, user_id FK → USER, item_id FK → ITEM, course_id FK → COURSE, price, condition_desc, status, created_at, search_count
- TRANSACTION (Marketplace): transaction_id PK, listing_id FK → LISTING U, buyer_id FK → USER, sale_price, sold_at, days_to_sale
- REVIEW (Marketplace): review_id PK, listing_id FK → LISTING, reviewer_id FK → USER, seller_id FK → USER, rating (CHECK 1–5), comment, created_at
- WISHLIST (Marketplace): wishlist_id PK, user_id FK → USER, listing_id FK → LISTING, saved_at; U (user_id, listing_id)
- BUNDLE (Marketplace): bundle_id PK, user_id FK → USER, total_price, created_at
- BUNDLE_LISTING (Marketplace): bundle_id FK → BUNDLE, listing_id FK → LISTING; PK (bundle_id, listing_id)
- ADMIN (Moderation): admin_id PK, name, email U
- FLAG (Moderation): flag_id PK, listing_id FK → LISTING, reason, flag_status, flagged_at
- ADMIN_FLAG (Moderation): admin_id FK → ADMIN, flag_id FK → FLAG; PK (admin_id, flag_id)
- ANALYST (Analytics): analyst_id PK, name, email U
- REPORT (Analytics): report_id PK, analyst_id FK → ANALYST, filter_params, export_format, created_at
- PLATFORM_METRIC (Analytics): metric_id PK, active_users, total_listings, total_transactions, recorded_at

### Guardrails

- A simple nav to jump to any section must always be available.
- Motion is optional. Respect `prefers-reduced-motion`, and make sure every chapter has a clean, static version that works on phones. Content never depends on animation.
- Fast-loading. No heavy libraries unless really needed.
- Typography: a clean sans-serif for now (to be refined in polish). Monospace for small transit-style labels.
- Resume PDFs go in `public/resumes/` as `Madhav-Sabu-Resume-CS.pdf`, `Madhav-Sabu-Resume-Econ.pdf`, and `Madhav-Sabu-Resume-Bio.pdf`.

### Home sections: Experience, About, Resume, Contact (approved design)

These already exist as components with real content. Step 7 restyles them in the frame colors and makes a few content fixes. Reuse existing styles (`--navy`, `--green`, `--gray`, `--border`, `--mono`, `.btn`, `.btn-filled`, and the station card look). No new colors, fonts, or packages.

**Shared rules for all four sections**
- Widen each section to match Stations (`max-width: 72rem`).
- Section headings follow the Stations pattern: a navy `h2` with a small green monospace label beside it only where it adds information (Experience, About, and Resume have no label; Contact has "End of the line" inside its band).
- No motion beyond simple hover states. Everything works on phones (single column).

**Experience** (`Experience.jsx`), no count label beside the heading (removed at Madhav's request)
- The current role gets a bigger dot and a slightly larger title.
- Replace the bullet lists with a vertical green timeline, one stop per role, styled like the stops on the line pages (green line, white dot with a green ring).
- Each stop: role title (navy, bold), then a green monospace label with organization · dates · location, then one short paragraph.
- Combine each role's existing sentences into one paragraph. Don't change the facts. Present tense for Electric Racing, past tense for Knack and My Creative Factory.

**About** (`About.jsx`)
- Top: the intro paragraph (second-year at Northeastern, where I grew up, UWCSEA, IB Diploma) beside a photo placeholder box labeled `[TODO: photo]` (stacked on phones).
- Below: a grid of white cards (border `#e1e4ea`, 12px corners), each with a green monospace label:
  - **Education:** Northeastern University, Boston, MA · Expected May 2029; B.S. in Data Science & Business, Concentration in Marketing Analytics, Minor in Biology; GPA 3.74/4.0 · Dean's List (Fall 2025, Spring 2026).
  - **Skills:** small chips in three groups: Languages (Python, SQL), Libraries and tools, and Skills, exactly as listed in "Skills" above, including Matplotlib and data validation.
  - **Leadership and activities:** the existing list, shown compactly.
  - **Outside of class:** the existing sentence.
- Keep the Sentiment Analysis Classifier as a one-line "Earlier project" note. No link.
- Remove the full coursework list from About (each line page already shows it). Replace it with one link: "See all coursework on the E line →" to `/line/e`.
- Move the Spring 2027 co-op sentence from About to Contact.

**Resume** (`Resume.jsx`)
- Replace the link list with one card per resume version, read from `resumes` in `src/data/links.js`.
- Each card: the matching line's letter badge (green circle, like the map), the version name, a one-line "best for," and a filled navy "Download PDF" button.
- Add `line` and `bestFor` fields to each entry in `links.js`:
  - CS → line D, "Data science, data engineering, and AI/ML roles."
  - Econ → line B, "Business analytics and finance-adjacent roles."
  - Bio → line C, "Computational biology and biotech roles."
- Adding a new version (for example CS + Lab) should only need a new entry in `links.js` and the PDF in `public/resumes/`.

**Contact** (`Contact.jsx`), label "end of the line"
- A navy band (`#1F3864`, white text, 12px corners), styled like the next-stop sign.
- Heading "Contact," then: "I'm looking for Spring 2027 co-op roles (January to June 2027) in data science, analytics, and related fields. The best way to reach me is by email."
- Pill buttons: Email (filled white with navy text, showing the full address so it can be copied), LinkedIn, and GitHub (white outline).
- Never show my phone number.

---

## Build plan (one step at a time)

Get everything working and complete first. Fancy animations come last.

1. ✅ Lock the concept and hook
2. ✅ Skeleton
3. ✅ Hero: the transit map and "Pick your route"
4. ✅ xG world, v2 design (placeholder data)
5. ✅ **Restructure:** routing, the home page with the Stations directory and preview cards, line pages, world pages with the navy bar and next-stop sign, `vercel.json`, and nav styling. Move the existing xG chapter onto `/xg`. Other worlds can be plain placeholder pages for now.
6. ✅ **Data Cleaning Pipeline world ("Clean run")**: design approved (see "Pipeline world")
7. ✅ Experience, About, Resume, and Contact: content and navy-and-white styling (see "Home sections")
   - 7a. Experience timeline
   - 7b. About cards (including the skills fixes)
   - 7c. Resume cards (including the `links.js` fields)
   - 7d. Contact band
8. The remaining worlds (each designed in the design chat first): ShelfLife ("Blueprint") → Research ("Lab notebook")
   - 8a. ShelfLife data file (`src/data/shelflife.js`) and the static desktop diagram with groups, tables, and foreign-key lines
   - 8b. Diagram interactions: expand a table, role buttons, line draw-in (respecting reduced motion)
   - 8c. Header at the top of the blueprint, annotations, and title block
   - 8d. The sheet below the diagram: blueprint background continues, dimension-line dividers, revision table with matching diagram markers, "Detail A" video frame, GitHub pill, end of sheet (see "The page below the diagram")
   - 8e. Phone layout (stacked room cards) and the labeled station card preview
   - 8f. Simplify the contributions box: remove the A–D markers from the diagram and the REV / REF columns from the table, so it's one bordered column with a coral dash per row (see "Contributions box"). Remove the unused `rev`, `ref`, and marker fields from `revisionNotes` in `shelflife.js`.
   - 8g. Research ("Lab notebook"): design in the design chat first
9. Swap in real assets as they arrive (see "Waiting on Madhav")
10. Make it fancy: card-to-page expand animation, line boarding animation, other motion (always respecting reduced motion)
11. Polish: mobile, load speed, accessibility, typography, final proofread
12. Madhav swaps in the final CS, Econ, and Bio resume PDFs in `public/resumes/` (same file names). Don't flag the resumes as missing before then.

## Waiting on Madhav (assets to add later)

Leave clear placeholders for these until I provide them. Never fill them with made-up content.

- [ ] **xG numbers:** data source, competitions and seasons, shot count, goal count, feature list, model type, test metrics (log loss, Brier score, ROC AUC), and a distance-only baseline for comparison
- [ ] **xG shot sample:** a CSV of 200 to 500 shots with x, y, outcome, and the model's predicted xG once available, plus a note on the coordinate system
- [ ] **xG extras (optional):** a calibration plot, feature importances, and a notebook link
- [x] **Data Cleaning Pipeline:** done. Real run data is in the "Pipeline world" section.
- [ ] **Pipeline (optional):** if I update the cleaning report to count the validation step (100 → 92 with a per-stage breakdown), update the report card on the pipeline world and remove the footnote.
- [x] **ShelfLife schema:** done. It's listed in the "ShelfLife world" section.
- [ ] **El Salvador paper:** PDF for `public/papers/`
- [ ] **Photo:** a headshot or casual photo for About
- [ ] **Electric Racing:** whether the club approved sharing Figma screenshots
- [ ] **Enzyme experiment (optional):** chart or photos
- [ ] **My Creative Factory (optional):** a video clip or still

## Current status

- Steps 1 to 5 are done, including the restructure and hero instructions (checked in the browser).
- Step 6 is done: the pipeline "Clean run" world is live at `/pipeline`. All rows, counts, stages, report values, file tree, config lines, and log lines are in `src/data/pipeline.js`. The station card preview shows "100 → 92 rows" (read from the same file).
  - The pipeline station card text no longer says it cleans JSON (per the accuracy note).
  - "lines …" labels are now alphabetical (B · C · D), except xG, which lists D first (`leadLine` in `src/data/worlds.js`).
- Step 7 design is approved (see "Home sections" in the design concept).
  - 7a is done: Experience is now a vertical green timeline (one stop per role, bigger dot for the current role, no count label, widened to 72rem). The `knack` and `creative-factory` anchors are kept so the B line stops still link to them.
  - 7b is done: About has the intro beside a `[TODO: photo]` box, then a 2-column card grid (Education with the "See all coursework on the E line →" link, Skills as chips including Matplotlib and data validation, Leadership and activities, Outside of class with the Earlier project note). The full coursework list is removed. No count label beside the heading, to match Experience. The co-op sentence now lives in Contact (plain text until 7d).
  - 7c is done: Resume shows one card per version (letter badge, name, "Best for" line, filled navy "Download PDF" button), read from `resumes` in `src/data/links.js`, which now has `line` and `bestFor` fields. No count label beside the heading.
  - 7d is done: Contact is a navy band with a small "End of the line" label inside it, the co-op sentence, and pill buttons (white Email button showing the full address, outlined LinkedIn and GitHub). Step 7 is complete.
- Step 8 ShelfLife design is approved and the schema is in (see "ShelfLife world").
  - 8a is done: `src/data/shelflife.js` holds all 18 tables (columns, keys, group, box position), the four room outlines, annotations, role mapping, revision notes, and links. `ShelfLifeDiagram.jsx` draws the diagram on the blueprint grid: dashed rooms, boxes showing PK/FK columns, and straight foreign-key lines with arrowheads at the referenced table. Box positions were placed by hand so no line crosses a table. Below about 900px wide the diagram scrolls sideways (phone cards come in 8e). The old plain-text content (contributions, video, GitHub) sits below the blueprint until 8c and 8d.
  - 8b is done: clicking (or Enter/Space on) a table expands it to all columns (PK, FK, U, CHK tags) and highlights its linked tables and lines in white; click again or Escape collapses. Role buttons (All, Buyer, Seller, Data analyst, Admin) sit above the diagram with the hint "click a table to see all its columns"; a role outlines its tables in pale amber and dims the rest, and the amber wins over the white "linked" outline. Foreign-key lines draw in one by one on load (arrowheads fade in after each line); with reduced motion they appear instantly. The open table is also drawn as a copy on top so it isn't hidden under its neighbors.
- The design for the rest of the page is approved (see "The page below the diagram" in "ShelfLife world"). Step 8 was re-split: 8c header + annotations + title block, 8d the sheet below the diagram, 8e phones + card preview, then Research (now 8g, after the 8f simplification).
  - 8c is done: the header sits at the top of the blueprint (label, large white title with "Team of 5" pill, monospace meta line, and the approved description at 40rem). The six constraint callouts are drawn with thin leader lines; their text, line breaks, and positions are in `annotations` in `shelflife.js`. The bordered title block sits below the Analytics room in the bottom right corner (`titleBlock` in the data file; "18 tables" is counted from the data). Moderation and Analytics boxes moved left (x 905) to make room for the ADMIN_FLAG callout.
  - 8d is done: the blueprint now runs from the header down to "end of sheet" (`ShelfLifeSheet.jsx`), and the old plain white section is gone. It has dimension-line dividers, the REV / NOTE / REF revision table (rows stack on phones), coral circled markers A–D on the diagram that light up together with their table row on hover or focus, the "Detail A" video frame with corner marks and caption, the outlined "View the repo on GitHub →" pill, and the end-of-sheet line. `revisionNotes` in `shelflife.js` holds rev, text, ref, and marker position. The sheet column is 48rem, left-aligned so it lines up with the left-aligned header. The next-stop sign still sits on the white frame below the sheet; smoothing that is in "Future notes."
  - 8e is done: at 700px wide and below, the diagram is replaced by stacked room cards (`ShelfLifeRoomCards.jsx`), one per group, each listing its tables with a column count. Tapping a table shows all its columns with key tags, plus "→ links to …" and "← linked from …" in plain text (both derived from the foreign keys). Role buttons and the open table share state with the desktop diagram, so highlighting works in both. The title block sits after the cards, and the hint says "tap" instead of "click." Between 700px and about 900px the full diagram still scrolls sideways. The home page ShelfLife card preview now labels its boxes USER, LISTING, and ITEM (names read from `shelflife.js`). The ShelfLife world is complete.
- Design change after 8d: the A–D markers and the REV / REF columns made the contributions harder to read, so they're being removed (see "Contributions box" in "ShelfLife world"). This is step 8f.
  - 8f is done: the A–D markers are gone from the diagram, and the revision table is now one bordered box (`.bp-contributions`) with the four sentences, a coral dash at the start of each row, and a thin rule between rows. `revisionNotes` was replaced by a plain `contributions` list of the four sentences in `shelflife.js`, and the shared hover state and unused table and marker styles were removed.
- Next: Step 8g (Research "Lab notebook"), which needs a design from the design chat first.

## Future notes (not scheduled yet)

- Moving between stops feels jarring (jumping from the white frame into each world and back). Smooth this out later, probably as part of step 10. Design it in the design chat first.