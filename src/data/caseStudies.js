// Content stays separate from the components that display it, the same way projects.js
// works. The field names mirror what the UX portfolio brief asks for (problem, tools,
// discovery, user testing, heuristics) so a missing section is visible rather than silent.
import businessModelCanvas from '../assets/planit/business-model-canvas.jpg';
import persona from '../assets/planit/persona.jpg';
import personaDetail from '../assets/planit/persona-detail.jpg';
import flowMap from '../assets/planit/flow-map.png';
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
    tagline: 'One place for every deadline a student is already supposed to know about.',
    role: 'Solo: research, interaction design, prototyping, test design and moderation',
    timeline: 'Fall 2026 · CSCI 443 User Experience Design',
    status:
      'Moderated usability sessions are running now, November 22 to 26, 2026. Results and the statistical analysis publish here once the Stage 5 report is finished on December 2.',
    tools: [
      'Adobe XD',
      'Google Forms',
      'QuickTime screen and audio recording',
      'Python (pandas, SciPy, Matplotlib)',
      'Adobe Express',
    ],
    problem: {
      statement:
        'Students taking four or five courses have their deadlines scattered across separate Canvas course pages, PDF syllabi and their own notes. Nothing shows them what is actually due next.',
      context:
        'Canvas holds the data but organises it by course, which is how an instructor thinks, not how a student works. A student works by time: what is due tonight, what is due this week. Reconstructing that means opening five pages and holding the answer in your head. PlanIt imports from Canvas and from uploaded syllabi, then presents one list ordered the way the decision actually gets made.',
    },
    discovery: [
      {
        phase: 'Phase 01',
        title: 'Framing the opportunity',
        body:
          'I started with a Business Model Canvas to pin down who the app serves, what it has to do to be worth opening, and which parts are assumptions rather than facts. Writing the value proposition down early is what kept later feature ideas from drifting away from the deadline problem.',
        artifacts: [
          {
            src: businessModelCanvas,
            alt: 'Business Model Canvas for a student planning app, filled in across nine sections',
            caption: 'Business Model Canvas. The value proposition drove every later screen.',
          },
        ],
      },
      {
        phase: 'Phase 02',
        title: 'Who it is for',
        body:
          'I built a persona, Ethan Cole, from the student population I could actually recruit from and observe. He is not a stand-in for everyone. He is a specific undergraduate juggling several courses who misses work he knew about, which is the failure PlanIt targets. Design arguments later in the project were settled by asking what Ethan would do.',
        artifacts: [
          {
            src: persona,
            alt: 'Persona sheet for Ethan Cole with goals, frustrations and background',
            caption: 'Primary persona: goals, frustrations, and how he currently tracks work.',
          },
          {
            src: personaDetail,
            alt: 'Second persona sheet with additional context about Ethan Cole',
            caption: 'Supporting detail: motivations and the scenarios he runs into.',
          },
        ],
      },
      {
        phase: 'Phase 03',
        title: 'Prototyping',
        body:
          'The result is an 82 screen high fidelity click-through prototype in Adobe XD, framed for an iPhone 14 Pro Max. Building it at this depth, rather than as a handful of pretty screens, is what made a real usability test possible: every task a participant is given has a hotspot path that genuinely works, including the wrong turns.',
        artifacts: [
          {
            src: flowMap,
            alt: 'Zoomed out Adobe XD canvas showing dozens of connected prototype screens branching across the board',
            caption: 'The full prototype. Branches are alternate paths, including dead ends.',
          },
        ],
      },
      {
        phase: 'Phase 04',
        title: 'The flows under test',
        body:
          'Five flows carry the product: reviewing what was imported, setting a reminder, completing an item, adding a class and an item, and changing notification settings. Each one became a task in the usability test.',
        artifacts: [
          {
            src: taskDueDate,
            alt: 'Import review screen reading What we found, 31 items, 24 from Canvas and 7 from syllabi, with an edit due date dialog open on Lab report 3',
            caption:
              'Import review. The count is stated up front and any wrong date is fixable before it matters.',
          },
          {
            src: taskReminder,
            alt: 'Item reminders screen for Brand loyalty paper listing three scheduled reminders with edit and delete controls',
            caption: 'Reminders. Existing ones are listed, each editable and removable.',
          },
          {
            src: taskComplete,
            alt: 'Item detail for Lab report 3 in PSYC 220 marked due today, with a green Completed button',
            caption: 'Item detail. One obvious primary action, with edit and delete kept quieter.',
          },
          {
            src: taskAddClass,
            alt: 'Classes screen showing an Item added confirmation and course cards for STAT 216, MKTG 340, PSYC 220 and BUS 301',
            caption: 'Classes. Grouped by course code, with a confirmation after adding.',
          },
          {
            src: taskQuietHours,
            alt: 'Settings screen with push notifications on, frequency normal, and quiet hours set to 9 PM to 8 AM',
            caption: 'Settings. Quiet hours, export and the connected Canvas account.',
          },
        ],
      },
    ],
    testing: {
      approach:
        'Moderated, in person, think-aloud sessions with five participants, run within-subjects so everyone attempts all five tasks. Five is the Nielsen and Landauer (1993) figure for surfacing roughly 85 percent of usability problems. Task 1 always runs first because it establishes the imported data the other tasks act on; tasks 2 to 5 rotate to blunt learning effects. Hotspot hints are switched off in the XD share link so a wrong tap is not quietly corrected. I ran each task myself three times first to set an expert benchmark to compare against.',
      tasks: [
        {
          id: 'T1',
          prompt:
            'Connect your school account and make sure your deadlines imported correctly. The Lab Report 3 date looks wrong, fix it.',
          goal: 'Due date dialog saved',
        },
        {
          id: 'T2',
          prompt: 'You want a nudge the night before your Brand Loyalty Paper is due. Set that up.',
          goal: 'Reminder added',
        },
        {
          id: 'T3',
          prompt: 'You just turned in Lab Report 3. Update the app to reflect that.',
          goal: 'Item marked complete',
        },
        {
          id: 'T4',
          prompt: 'You enrolled in a new class with a quiz next week. Add both to PlanIt.',
          goal: 'Class and item both added',
        },
        {
          id: 'T5',
          prompt: 'You do not want notifications after 10 pm. Change that.',
          goal: 'Quiet hours saved',
        },
      ],
      note:
        'Measured against ISO 9241-11. Effectiveness: task success scored 1, 0.5 or 0, plus error counts. Efficiency: time on task against my expert benchmark. Satisfaction: the Single Ease Question after each task and the System Usability Scale at the end. Analysis is a repeated measures ANOVA across tasks, a paired t-test of observed against expert time, and a one-sample t-test of SUS against the 68 benchmark.',
    },
    heuristics: [
      {
        principle: 'Visibility of system status',
        applied:
          'The import screen states exactly what happened: 31 items, 24 from Canvas and 7 from syllabi. Adding an item returns an "Item added" banner, and every deadline carries a relative label such as "Due today" or "In 3 days".',
      },
      {
        principle: 'Match between the system and the real world',
        applied:
          'Items group under course codes students already use, PSYC 220 and MKTG 340, and dates read as "In 3 days" rather than as raw timestamps.',
      },
      {
        principle: 'User control and freedom',
        applied:
          'Every dialog offers Cancel next to Save, detail screens keep a Go back, each reminder can be edited or deleted, and the Canvas account can be disconnected.',
      },
      {
        principle: 'Consistency and standards',
        applied:
          'Detail screens share one structure: title, course and due line, body, then an action stack with the primary action first and destructive actions last in red.',
      },
      {
        principle: 'Error prevention',
        applied:
          'The import review step exists so a bad Canvas date is caught while it is still a line on a review screen, instead of becoming a missed deadline weeks later.',
      },
      {
        principle: 'Recognition rather than recall',
        applied:
          'Nothing is retyped from memory. Deadlines arrive by import and the edit dialog arrives prefilled with the current date.',
      },
      {
        principle: 'Flexibility and efficiency of use',
        applied:
          'Quiet hours and notification frequency let a heavy user tune the app, and syllabi can be uploaded for courses whose instructors do not post dates to Canvas.',
      },
      {
        principle: 'Aesthetic and minimalist design',
        applied:
          'One card per course, three fields per item. Anything not needed to answer "what is due next" stays off the main screen.',
      },
      {
        principle: 'Help users recognise, diagnose and recover from errors',
        applied:
          'Task 1 in the usability test is itself a recovery flow: spot a wrong imported date and correct it. The screen prompts with "Tap a class or date to edit".',
      },
      {
        principle: 'Help and documentation',
        applied:
          'A Help and tips section sits in Settings, close to the account and notification controls people are most likely to get stuck on.',
      },
    ],
    outcome: {
      body:
        'The prototype and the test design are finished and sessions are under way. Writing the heuristics out against real screens was useful before testing started, because it is where I noticed which claims the prototype did not actually support yet.',
      nextSteps: [
        'Finish the five sessions and score success, time, errors and SEQ against the recordings',
        'Run the analysis and publish results, charts and a severity-rated findings table here',
        'Fix the two or three highest severity issues in XD, then retest the same tasks to compare',
      ],
    },
    links: [],
    results: null,
  },
];
