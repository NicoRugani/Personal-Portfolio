// GitHub Pages serves this site from a project subpath (/Personal-Portfolio/),
// so in-app links are built from Vite's base instead of a bare "/".
// Vite rewrites asset URLs at build time, but never anchor hrefs in JSX.
export default function siteUrl(path = '') {
  return import.meta.env.BASE_URL + path.replace(/^\//, '');
}
