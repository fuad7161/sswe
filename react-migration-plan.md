# React Migration Plan for This Project

This project is currently a static SPA built with large HTML files, inline CSS, and inline JavaScript. The goal is to convert it into a React app so the UI becomes modular, maintainable, and easy to update.

## What to keep

- The existing content structure and roadmap data
- The visual style direction if you still want the same look
- The two-page idea:
  - Roadmap / checklist page
  - Resources page

## What to remove later

- Inline scripts inside `index.html` and `resources.html`
- Large embedded CSS blocks once styles are moved into React files
- Duplicate static markup once it is replaced by React components

## Recommended React structure

```text
src/
  components/
    Sidebar/
    Header/
    SectionCard/
    TopicBlock/
    ItemTag/
    ResourceCard/
    ProgressBar/
  pages/
    RoadmapPage.tsx
    ResourcesPage.tsx
  data/
    roadmapData.ts
    resourceData.ts
  hooks/
    useProgress.ts
    useClipboard.ts
    useLocalStorage.ts
  styles/
    global.css
    theme.css
  App.tsx
  main.tsx
```

## Migration steps

1. Create a React app in this folder, preferably with Vite.
2. Move all static content into `src/data` files.
3. Break the UI into reusable components.
4. Move page-specific behavior into page components.
5. Convert interactions like progress, open sections, and copy actions into React state or hooks.
6. Add a shared styling system for light and dark mode.
7. Remove the old HTML-driven logic once the React version works.

## Suggested component split

### Roadmap page
- `Sidebar`
- `MainHeader`
- `SectionCard`
- `TopicBlock`
- `ItemTag`
- `ProgressBar`

### Resources page
- `Sidebar`
- `MainHeader`
- `LevelSection`
- `ResourceCard`
- `ResourceTypeBadge`

## Data-first approach

Instead of hardcoding content directly into JSX, keep the content in separate data files.

Example:

```ts
export const roadmapData = [
  {
    id: 'go-core',
    title: 'Core Go',
    topics: [
      { title: 'Types', items: ['Slices', 'Maps', 'Structs'] }
    ]
  }
]
```

This makes updates easier because you can change content without touching UI code.

## Best practices for this project

- Keep components small and focused
- Keep data separate from presentation
- Keep styles in CSS files or CSS modules
- Store UI state like expanded sections in React state
- Persist user progress in `localStorage` if needed
- Add dark mode through CSS variables

## Minimal React flow

- `main.tsx` renders `App`
- `App.tsx` handles routing or page selection
- Each page renders from data
- Reusable components handle layout and interactions

## Cleanup goal

After migration, the old files should no longer contain the app logic. They can either be removed or kept only as reference until the React app fully replaces them.

## Final result

You should end up with:

- A modular React app
- Separate files for each page and component
- Easy content updates
- Easier future maintenance
- Cleaner support for dark mode and UI changes
