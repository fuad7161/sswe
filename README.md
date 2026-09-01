# Backend Engineering Handbook

An interactive, interview-focused study handbook for Go, Java/Spring Boot, and senior backend engineering.

## Run locally

ES modules must be served over HTTP:

```bash
python3 -m http.server 4173
```

Then open `http://localhost:4173/`.

## Structure

```text
index.html                         semantic page shell
resources.html                     resource page shell
assets/css/roadmap.css             handbook presentation
assets/css/resources.css           resource page presentation
assets/js/roadmap-app.js           search, progress, navigation, lesson drawer
assets/js/resources-app.js         resource page rendering
assets/js/lesson-engine.js         explanations, examples and trade-offs
assets/js/data/interview-facts.js  concise definitions and interview answers
assets/js/data/roadmap.js          the 28-chapter interview-focused curriculum
assets/js/data/resources.js        curated learning resources
```

To add or rename a topic, edit `assets/js/data/roadmap.js`. Chapter teaching material lives in `assets/js/lesson-engine.js`; its coverage audit ensures every roadmap item receives all required lesson fields.

Progress, field notes, and recently opened topics are stored only in the browser. A one-time local-storage migration preserves progress from the former standalone Go standard-library chapter.
