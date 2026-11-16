/**
 * TROJANS COLLECTIVE — MILESTONES & VIRTUAL MUSEUM ROOM EXHIBITS
 */

export const MUSEUM_ROOMS = [
  {
    id: 'room-origins',
    number: '01',
    title: 'The Origins',
    description: 'The inception of Trojans Collective: why we rejected conventional college club culture and chose to build authentic engineering systems.',
    theme: 'Founding Charter & First Principles',
    keyExhibit: 'founders-group-primary',
  },
  {
    id: 'room-people',
    number: '02',
    title: 'The People',
    description: 'The architects, makers, and coders who laid the groundwork and carry the collective forward.',
    theme: 'Builder Roster & Personal Manifestos',
    keyExhibit: 'team-collective-shot',
  },
  {
    id: 'room-builders',
    number: '03',
    title: 'The Builders',
    description: 'Interactive software artifacts, hardware hacks, and production experiments brought to life.',
    theme: 'Prototypes, Shaders & Open Source Fabrics',
    keyExhibit: 'project-mesh-os',
  },
  {
    id: 'room-arena',
    number: '04',
    title: 'The Arena',
    description: 'The high-stakes hackathons, competitive intensity, and stage podium finishes.',
    theme: 'Championship Trophies & Live Competitions',
    keyExhibit: 'achievement-national-trophy',
  },
  {
    id: 'room-collective',
    number: '05',
    title: 'The Collective',
    description: 'The living culture: midnight sprints, whiteboard debates, and lifelong technical camaraderie.',
    theme: 'Culture Archives & Collective Memories',
    keyExhibit: 'culture-late-night-build',
  },
];

export const ACHIEVEMENTS_DATA = [
  {
    id: 'trophy-national-champ',
    title: 'National Hackathon Champions',
    issuer: 'IIT Bombay',
    date: 'Championship Season',
    assetId: 'achievement-national-trophy',
    rank: 'Rank 3 from 250+ teams',
    category: 'Championship',
    summary: 'Awarded third place among 250+ collegiate teams for engineering an autonomous distributed vulnerability auditor under 36-hour sprint constraints.',
    details: [
      'Cleared Online Assesment Round with 100% score',
      'Second Round Covered showcasing previous work and live demo of the projects',
      'Finals: Created an entire system based on the problem statement and presented it to the judges',
    ],
  },
  {
    id: 'award-best-infrastructure',
    title: 'Top 7 Finalists in Nexothon 2025 Hackathon',
    issuer: 'GCET, Anand-Gujrat',
    date: '2025',
    assetId: 'project-mesh-os',
    rank: 'Finalists',
    category: 'Development',
    summary: 'Recognized among the Top 7 finalist teams out of 400+ participants for developing CityPulse, an innovative solution addressing urban challenges.',
    details: [
    'Selected among 400+ participating teams',
    'Successfully advanced through multiple evaluation rounds',
    'Developed and presented CityPulse as a working hackathon solution',
    'First national-level hackathon participation for Team Trojans'
    ],
  },
  {
    id: 'award-hackxios-2025',
    title: 'HackXios 2025 – National Hackathon',
    issuer: 'IIIT Bhopal',
    date: '2025',
    assetId: 'event-code-sprint-flagship',
    rank: 'Finalists',
    category: 'Hackathon',
    summary: 'Qualified through the online selection round among nearly 1,200 participants and developed NyaayDrishti, a technology-driven solution aimed at improving judicial case management and prioritization.',
    details: [
      'Cleared the online selection round among nearly 1,200 participants',
    'Developed NyaayDrishti for judicial case management and urgency-based case prioritization',
    'Built dedicated dashboards for lawyers, judges, and court masters',
    'Extended the project into a research paper following the hackathon',
    ],
  },
];

export default ACHIEVEMENTS_DATA;
