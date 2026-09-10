# Nicholas Rugani — Portfolio

A portfolio migration from static HTML to React.
The current milestone is **the shared layout and homepage**. The existing
Projects, About, and Contact pages still work while their replacements are built.

## Run locally

Use Node.js 22.12 or newer (a current LTS release is recommended) and npm.

```sh
npm ci
npm run dev
```

Open the local URL printed by Vite. The development server listens on localhost.
Saving a React component or stylesheet updates the page automatically.

```sh
npm run lint       # Check JavaScript and React patterns
npm run format     # Format the new React code and project documentation
npm run build      # Build the React homepage AND the remaining HTML pages
npm run preview    # Serve the production build locally
```
