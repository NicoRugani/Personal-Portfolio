// Content stays separate from the components that display it, the same way projects.js
// works. Field names mirror what the portfolio brief asks for (problem, tools, discovery,
// user testing, heuristics) so a missing section is visible rather than silent.
import persona from '../assets/planit/persona.jpg';
import flowMap from '../assets/planit/flow-map.png';
import home from '../assets/planit/home.png';
import importReview from '../assets/planit/import-review.png';
import calendar from '../assets/planit/calendar.png';
import taskDueDate from '../assets/planit/task1-due-date.png';
import taskReminder from '../assets/planit/task2-reminder.png';
import taskComplete from '../assets/planit/task3-complete.png';
import taskAddClass from '../assets/planit/task4-add-class.png';
import taskQuietHours from '../assets/planit/task5-quiet-hours.png';

export const caseStudies = [
  {
    slug: 'planit',
    number: '01',
    title: 'PlanIt',
    tagline: 'Every deadline a student already has, in one place.',
    role: 'Solo: research, design, prototyping, test design',
    timeline: 'Fall 2026 · CSCI 443',
    tools: ['Adobe XD', 'Google Forms', 'QuickTime', 'Python', 'Adobe Express'],

    screens: [
      {
        src: home,
        alt: 'Home deadline list with Today, Looking ahead this week, and Urgent sections',
        caption: 'Home',
      },
      {
        src: importReview,
        alt: 'What we found shows 31 items, including 24 from Canvas and 7 from syllabi, grouped by class',
        caption: 'Import review',
      },
      {
        src: taskDueDate,
        alt: 'Edit due date dialog showing the corrected November 10 date for Lab Report 3',
        caption: 'Edit due date',
      },
      {
        src: taskComplete,
        alt: 'Item detail for Lab report 3 marked due today, with a green Completed button',
        caption: 'Item detail',
      },
      {
        src: taskReminder,
        alt: 'Item reminders screen listing three scheduled reminders with edit and delete controls',
        caption: 'Reminders',
      },
      {
        src: taskAddClass,
        alt: 'Classes screen showing an Item added confirmation and cards for four courses',
        caption: 'Classes',
      },
      {
        src: calendar,
        alt: 'November calendar with marked due dates and a list of deadlines for the selected day',
        caption: 'Calendar',
      },
      {
        src: taskQuietHours,
        alt: 'Settings screen with quiet hours set to 9 PM to 8 AM',
        caption: 'Settings',
      },
    ],

    problem: {
      statement:
        'Students taking four or five courses have deadlines scattered across separate Canvas pages, PDF syllabi and their own notes. Nothing shows what is actually due next.',
      context:
        'Canvas organises by course, which is how an instructor thinks. A student works by time. PlanIt imports from Canvas and from uploaded syllabi, then sorts by what is due next.',
    },

    discovery: [
      {
        phase: '01',
        title: 'Understanding the user',
        body:
          'I built a persona from the student population I could actually recruit from and observe. Ethan is a specific undergraduate who misses work he knew about, which is the failure PlanIt targets.',
        artifacts: [
          {
            src: persona,
            alt: 'Persona sheet for Ethan Cole with goals, frustrations and background',
            caption: 'Primary persona',
          },
        ],
      },
      {
        phase: '02',
        title: 'Prototyping',
        body:
          'An 82 screen click-through prototype in Adobe XD, framed for iPhone 14 Pro Max. Built deep enough that every task in the test has a real hotspot path, wrong turns included.',
        artifacts: [
          {
            src: flowMap,
            alt: 'Zoomed out Adobe XD canvas showing dozens of connected screens branching across the board',
            caption: 'The full prototype',
          },
        ],
      },
    ],

    testing: {
      approach:
        'Moderated, in person, think-aloud sessions with five participants, each attempting all five tasks. Hotspot hints are off, so a wrong tap is not quietly corrected. I ran every task three times first to set an expert benchmark.',
      tasks: [
        {
          id: 'T1',
          prompt: 'Connect your school account and fix the wrong Lab Report 3 date.',
          goal: 'Due date saved',
        },
        { id: 'T2', prompt: 'Set a reminder the night before your Brand Loyalty Paper is due.', goal: 'Reminder added' },
        { id: 'T3', prompt: 'You turned in Lab Report 3. Update the app.', goal: 'Item completed' },
        { id: 'T4', prompt: 'Add a new class and a quiz next week.', goal: 'Both added' },
        { id: 'T5', prompt: 'Stop notifications after 10 pm.', goal: 'Quiet hours saved' },
      ],
      note:
        'Measured against ISO 9241-11: task success and errors, time against the benchmark, SEQ after each task, SUS at the end.',
    },

    heuristics: [
      {
        principle: 'Visibility of system status',
        applied: 'Import reports 31 items, 24 from Canvas and 7 from syllabi. Deadlines read "Due today" or "In 3 days".',
      },
      {
        principle: 'Match with the real world',
        applied: 'Grouped by the course codes students use, dated in relative time rather than timestamps.',
      },
      {
        principle: 'User control and freedom',
        applied: 'Cancel beside every Save, Go back on detail screens, reminders editable and deletable.',
      },
      {
        principle: 'Consistency and standards',
        applied: 'Every detail screen: title, due line, body, then actions, with destructive ones last in red.',
      },
      {
        principle: 'Error prevention',
        applied: 'The import review step catches a wrong Canvas date before it becomes a missed deadline.',
      },
      {
        principle: 'Recognition rather than recall',
        applied: 'Deadlines arrive by import. The edit dialog opens prefilled.',
      },
      {
        principle: 'Flexibility and efficiency',
        applied: 'Quiet hours and notification frequency, for people who want to tune it.',
      },
      {
        principle: 'Aesthetic and minimalist design',
        applied: 'One card per course, three fields per item.',
      },
      {
        principle: 'Recover from errors',
        applied: 'Fixing a bad imported date is a first-run flow, prompted with "Tap a class or date to edit".',
      },
      {
        principle: 'Help and documentation',
        applied: 'Help and tips sits in Settings, next to the controls people get stuck on.',
      },
    ],

    outcome: {
      body:
        'The prototype and test design are finished and sessions are under way. Writing the heuristics against real screens was useful before testing started: it is where I found the claims the prototype did not yet support.',
      nextSteps: [
        'Score success, time, errors and SEQ against the session recordings',
        'Publish results, charts and a severity-rated findings table here',
        'Fix the highest severity issues in XD, then retest the same tasks',
      ],
    },

    links: [],
    results: null,
  },
];
