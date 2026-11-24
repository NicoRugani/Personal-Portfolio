// Content stays separate from the components that display it. `featured` decides what
// surfaces on the homepage and in the Featured row on /work. A project links to a case
// study automatically once a matching slug exists in caseStudies.js.
import akinator from '../assets/Akinator.png';
import rabbithole from '../assets/RabbitHole.jpg';
import planit from '../assets/planit/home.png';

export const projects = [
  {
    id: 'planit',
    featured: true,
    category: 'UX design',
    title: 'PlanIt',
    blurb:
      'A deadline aggregator that pulls from Canvas and uploaded syllabi, then sorts everything by what is due next instead of by course. Prototyped in Adobe XD and usability tested with five students.',
    tags: ['Adobe XD', 'Usability testing', 'Mobile'],
    image: planit,
    imageAlt: 'PlanIt home screen listing what is due today and what is coming this week',
  },
  {
    id: 'rabbithole',
    featured: true,
    category: 'Product design and full stack',
    title: 'RabbitHole',
    blurb:
      'Music discovery as a map you build yourself. Every song you keep branches into new directions, so you can see the path that got you somewhere and back up when a branch stops being interesting.',
    tags: ['React', 'React Flow', 'Node', 'Last.fm API'],
    image: rabbithole,
    imageAlt:
      'RabbitHole music map with eight connected rock songs on a dark canvas, beside a selected song panel and saved library',
    sourceUrl: 'https://github.com/NicoRugani/RabbitHole-Spacial-Music-Finder',
  },
  {
    id: 'akinator',
    featured: true,
    category: 'Data structures',
    title: 'Akinator-style Guessing Game',
    blurb:
      'Twenty questions played against a binary tree. When it guesses wrong it asks what would have told the two characters apart, grafts that question into the tree, and saves it so the next run is smarter.',
    tags: ['Java', 'Binary trees', 'File I/O'],
    image: akinator,
    imageAlt:
      'Terminal transcript where the game guesses Batman, is told the answer was Iron Man, and asks for a trait that separates them',
    sourceUrl: 'https://github.com/NicoRugani/BST_Akinator',
  },
  {
    id: 'battle-sim',
    featured: false,
    category: 'Data structures',
    title: 'Circular Linked List Battle Simulator',
    blurb:
      'A turn based battle game where a circular linked list cycles the characters, so play passes around the ring and back to the start without any bookkeeping.',
    tags: ['Java', 'Linked lists', 'OOP'],
    sourceUrl: 'https://github.com/NicoRugani/Circular_LinkedList_Battle_sim',
  },
  {
    id: 'retail-website',
    featured: false,
    category: 'Web development',
    title: 'Outdoor Retail Website',
    blurb:
      'A responsive storefront built with a partner from requirements brief, translating a written set of requirements into a working site.',
    tags: ['HTML & CSS', 'JavaScript', 'Responsive'],
    sourceUrl: 'https://github.com/NicoRugani/WebDesignFinalProject',
    demoUrl: 'https://nicorugani.github.io/WebDesignFinalProject/',
  },
];
