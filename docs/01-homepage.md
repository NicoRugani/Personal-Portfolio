# Feature 1: shared layout and homepage

## What changed

The homepage now renders through React. It introduces you, displays the three
existing projects, and leads to the original Projects, About, and Contact pages.
One shared header and footer can surround future React pages.

Vite is the development/build tool. It processes JSX, updates the browser while
you edit, and generates production assets. Vite's local development server is
not the Node/Express application we will build in the contact milestone.

## Follow one project through the code

Start in `src/data/projects.js`. Each object describes one project: its title,
summary, tags, preview type, and links. This is source code that becomes part of
the frontend build; no database or API request is involved.

In `src/pages/HomePage.jsx`, this expression creates one card per project:

```jsx
projects.map((project) => <ProjectCard key={project.id} project={project} />);
```

- `map` is ordinary JavaScript. It transforms the array of project data into an
  array of React elements.
- `ProjectCard` is a component: a function that returns JSX describing the UI.
- `project={project}` passes information into that component as a **prop**.
- `key` gives React a stable identity for each item when a list changes. It is
  reserved for React; the card receives its data through the `project` prop.

In `src/components/ProjectCard.jsx`, the card reads the prop to render headings,
tags, and links. The live-site link appears only when `demoUrl` exists. A data
change therefore updates the display without copying a card's markup.

The card also passes `project.preview` to `ProjectPreview`. That component draws
a labeled structure sketch. It has no gameplay logic and makes no requests.

## State: what can change on the page?

The header owns two pieces of state with `useState`:

- `menuOpen`: whether the mobile navigation is expanded.
- `theme`: whether this page uses the light or dark color tokens.

Clicking a button calls a setter. React reruns the component with the new value
and updates the affected UI. We describe the button text, classes, and
`aria-expanded` value from state instead of changing each DOM element manually.

The menu button uses a **ref** to remember its DOM element. When Escape closes
the menu, the code returns keyboard focus to that button.

## Effects: where React meets the browser

`useEffect` handles work outside the component's returned markup:

- The theme effect updates the document's `data-theme` attribute and browser
  theme-color metadata. CSS variables supply the actual colors.
- The menu effect listens for Escape and clicks outside the header while the
  menu is open. Its cleanup removes those listeners when the menu closes or the
  component unmounts.

`StrictMode` in `src/main.jsx` runs extra development checks. In development it
may repeat renders and effect setup/cleanup to uncover mistakes; this is why
cleanup matters.

## Layout and routes

`App` matches the current URL. Its layout route renders `SiteLayout`, whose
`Outlet` is where the matching page appears. We currently use this for the home
and not-found pages; the next milestones will add more React routes.

The old `.html` pages still use normal links and full page loads. Vite's build
configuration explicitly includes them so migration can happen incrementally.

## What to inspect in the preview

1. Read the homepage at desktop and narrow mobile widths. Check that the copy
   feels like you and that the project summaries are accurate.
2. Use Tab to reveal the skip link, then activate it to reach the main content.
3. Open the mobile Menu. Try Tab, Escape, and clicking outside the header.
4. Switch the theme and inspect text, controls, and project sketches.
5. Use Explore my work and verify that the selected-work heading stays visible
   beneath the sticky navigation.
6. Follow All projects and return Home using the old page's navigation.

Do not submit the original contact form as a test: it still uses the live
Formspree endpoint. The new Express contact feature is a later checkpoint.

## Small edits you can make to understand the structure

- Change a project summary in the data module and see which part of the UI changes.
- Change the `--accent` token in the stylesheet and inspect its use across the page.
- Trace one menu click from its `onClick` handler to the resulting JSX.

No manual edits are required to continue. These are entry points if you want to
explore the code before reviewing the next feature.
