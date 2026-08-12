# Go Backend Handbook

An interactive study handbook built from the repository's senior Go backend roadmap.

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
assets/js/data/roadmap.js          the 28-chapter / 955-topic curriculum
assets/js/data/resources.js        curated learning resources
```

To add or rename a topic, edit `assets/js/data/roadmap.js`. Chapter teaching material lives in `assets/js/lesson-engine.js`; its coverage audit ensures every roadmap item receives all required lesson fields.

Progress is stored only in the browser under the `notebound-checklist-progress` local-storage key.
