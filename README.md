# Nicholas Rugani — Portfolio

**[nicorugani.github.io/Personal-Portfolio](https://nicorugani.github.io/Personal-Portfolio/)**

I'm a Computer Science and Psychology student at Montana State University, and this is
where my work lives. The two subjects meet in the same question: how a system works, and
how someone actually experiences it. That's what the site is built to show.

## What's on it

Three featured projects, two of them written up as full case studies covering the
problem, the research, the design decisions and the usability heuristics behind them.

- **PlanIt** — a Canvas deadline aggregator, designed as an 82 screen Adobe XD prototype
  and tested with five participants in moderated think-aloud sessions. My UX course
  project for CSCI 443.
- **RabbitHole** — music discovery as a graph you build yourself, where each song branches
  into new directions. React Flow on the front, Node and Express behind it, candidates
  from the Last.fm API and metadata from iTunes.
- **Akinator-style guessing game** — twenty questions against a binary tree that grafts in
  a new question whenever it guesses wrong, and saves what it learned.

Plus an about page, a contact form, and a short list of other coursework.

## How it's built

React 19 and Vite 8, with `react-router` for the routes. No UI framework and no CSS
library: the styling is one hand-written stylesheet with custom properties.

```
src/
  main.jsx              mounts React, sets the router basename
  App.jsx               routes, plus redirects for the old .html URLs
  pages/                Home, Work, CaseStudy, About, Contact, NotFound
  components/           layout, header, cards, the case study overlay
  data/                 projects.js, caseStudies.js, about.js
  styles.css            every style, design tokens at the top
  useReveal.js          scroll-triggered reveals
  useScrollToTop.js     scroll behaviour between routes
  usePageTitle.js       per-route document title
  siteUrl.js            base-path helper
```

