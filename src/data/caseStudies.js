// Content stays separate from the components that display it, the same way projects.js
// works. Every case study is the same three beats: the problem, how I approached it, how
// I solved it. One template renders all of them.
import home from '../assets/planit/home.png';
import importReview from '../assets/planit/import-review.png';
import dueDate from '../assets/planit/task1-due-date.png';
import itemDetail from '../assets/planit/task3-complete.png';
import reminders from '../assets/planit/task2-reminder.png';
import classes from '../assets/planit/task4-add-class.png';
import calendar from '../assets/planit/calendar.png';
import settings from '../assets/planit/task5-quiet-hours.png';
import rabbitholeMap from '../assets/RabbitHole-Full.jpg';

export const caseStudies = [
  {
    slug: 'planit',
    number: '01',
    title: 'PlanIt',
    tagline: 'Every deadline a student already has, in one place.',
    role: 'Solo: research, design, prototyping, usability testing',
    timeline: 'Fall 2026 · CSCI 443',
    tools: ['Adobe XD', 'Google Forms', 'QuickTime', 'Python', 'Adobe Express'],

    screens: [
      {
        src: home,
        alt: 'Home screen greeting Ethan, showing items due today, a look ahead at the week, and an urgent card',
        caption: 'Home',
      },
      {
        src: importReview,
        alt: 'Import review screen listing the items found in Canvas and uploaded syllabi',
        caption: 'Canvas import',
      },
      {
        src: dueDate,
        alt: 'Edit due date dialog open over the import review screen',
        caption: 'Fixing a bad date',
      },
      {
        src: itemDetail,
        alt: 'Item detail for Lab report 3, marked due today, with a green Completed button',
        caption: 'Item detail',
      },
      {
        src: reminders,
        alt: 'Reminders screen listing three scheduled reminders with edit and delete controls',
        caption: 'Reminders',
      },
      {
        src: classes,
        alt: 'Classes screen showing an Item added confirmation and cards for four courses',
        caption: 'Classes',
      },
      {
        src: calendar,
        alt: 'Month calendar for November 2026 with coloured dots on days that have work due',
        caption: 'Calendar',
      },
      {
        src: settings,
        alt: 'Settings screen with notifications, quiet hours set to 9 PM to 8 AM, and the connected Canvas account',
        caption: 'Settings',
      },
    ],

    problem:
      'Students taking four or five courses have their deadlines spread across separate Canvas pages, PDF syllabi and their own notes. They need a single place to see what is due next, and to be reminded of it.',

    approach: [
      'I worked from a persona built on the student population I could recruit from and observe. From there I moved to sketched before building the prototype in Adobe XD. it is built as a click-through prototype, deep enough that every path someone might reasonably take actually leads somewhere, wrong turns included.',
      'I tested it with five participants in moderated, in person, think-aloud sessions. Everyone attempted the same five tasks. I ran each task myself three times first to set a benchmark, then logged success, errors, time and an ease rating per task, with the System Usability Scale at the end.',
    ],

    solution: {
      body:
        'PlanIt imports from Canvas and from uploaded syllabi, then reorganises everything by time instead of by course. Home opens on what is due today, what is coming this week, and an urgent card for what is next. These are the decisions behind it, and the usability heuristics each one came from.',
      heuristics: [
        {
          principle: 'Visibility of system status',
          applied:
            'Home stamps the last sync time, the import reports exactly what it found, and every deadline reads "Due today" or "In 3 days".',
        },
        {
          principle: 'Match with the real world',
          applied:
            'Items carry the course codes students already use, dated in relative time rather than timestamps.',
        },
        {
          principle: 'Error prevention',
          applied:
            'The import review step catches a wrong Canvas date while it is still a line on a screen, not a missed deadline.',
        },
        {
          principle: 'User control and freedom',
          applied:
            'Cancel beside every Save, Go back on detail screens, and reminders that can be edited or deleted individually.',
        },
        {
          principle: 'Recognition rather than recall',
          applied: 'Deadlines arrive by import and the edit dialog opens prefilled. Nothing is retyped from memory.',
        },
        {
          principle: 'Aesthetic and minimalist design',
          applied:
            'One card per course, three fields per item, and nothing on Home that does not help answer what is due next.',
        },
      ],
    },
  },
  {
    slug: 'rabbithole',
    number: '02',
    title: 'RabbitHole',
    tagline: 'Music discovery as a map you build, not a feed you scroll.',
    role: 'Solo: product design, frontend and backend',
    timeline: '2026 · in progress',
    tools: ['React', 'React Flow', 'Vite', 'Node and Express', 'Last.fm API', 'iTunes Search API'],

    screens: [
      {
        src: rabbitholeMap,
        alt: 'RabbitHole music map zoomed out, thirteen songs in three branching rows from Journey through Foreigner to Blue Oyster Cult, beside a panel showing the selected song, a Branch Out direction and the saved library',
        caption: 'The map after branching out several times. The path that got you here is visible.',
        wide: true,
      },
    ],

    problem:
      'Searching for new music can actually be very difficult. A giant list of recommendations or a random DJ mix result in a lot of songs that aren\'t interesting, and for the ones that are, it\'s hard to find others similar. A listener needs a way to explore music that is both guided and self directed, so they can find exactly what they like and how their tatste got them there.',

    approach: [
      'I started by finding out what the music APIs could give me. Last.fm similarity scores come from users  listening behaviour, so that became the source of candidates, with iTunes supplying artwork, thirty second previews and a stable track id.',
      'With no tempo, pitch, melody, or anything of the sort to rank on, the listener has to steer themselves another way. A graph where every song is a node, and the edges are the similarity scores is a great way to vizually represent your search. The listener can branch out from any song, and the next node is chosen from the candidates with the highest similarity score in a direction.',
    ],

    solution: {
      body:
        'RabbitHole draws your listening as a graph you can drag, zoom and branch from. Select a song, pick a direction such as Branch Out, and the recommendations change to match; adding one draws the edge. The map persists between sessions, so a path survives closing the tab.',
      heuristics: [
        {
          principle: 'Recognition rather than recall',
          applied:
            'The graph is the memory. You never have to reconstruct how you reached a song, because the path that got you there is on screen.',
        },
        {
          principle: 'Visibility of system status',
          applied:
            'The selected song stays named in its own panel, and the chosen direction explains in a line what it will do before you commit to it.',
        },
        {
          principle: 'User control and freedom',
          applied:
            'Deselect backs out of a choice, and any earlier node can be selected and branched from again, so following a dead end costs nothing.',
        },
        {
          principle: 'Help users recover',
          applied: 'Fit Web reframes the entire map in one click, for when panning and zooming have left you lost.',
        },
        {
          principle: 'Help and documentation',
          applied:
            'The canvas carries its own instructions along the bottom edge, where someone looking at an unfamiliar interface is already looking.',
        },
        {
          principle: 'Aesthetic and minimalist design',
          applied:
            'A node shows genre, title, artist and album year, and nothing else. Any more and the map stops being readable at a glance.',
        },
      ],
    },
  },
];
