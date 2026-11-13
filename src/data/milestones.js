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
    title: 'National Hackathon Grand Champions',
    issuer: 'Apex Tech Hackathon Circuit',
    date: 'Championship Season',
    assetId: 'achievement-national-trophy',
    rank: '1st Place Overall',
    category: 'Championship',
    summary: 'Awarded first place among 200+ collegiate teams for engineering an autonomous distributed vulnerability auditor under 36-hour sprint constraints.',
    details: [
      'Engineered an AST-level syntax auditing pipeline',
      'Demonstrated real-time autonomous patch generation',
      'Awarded Best Technical Execution and Grand Trophy',
    ],
  },
  {
    id: 'award-best-infrastructure',
    title: 'Best Distributed System Architecture',
    issuer: 'CloudScale Hackathon',
    date: 'Competitive Track',
    assetId: 'project-mesh-os',
    rank: 'Category Winner',
    category: 'Architecture',
    summary: 'Recognized for low-latency peer discovery and decentralized telemetry operating across heterogeneous browser nodes via WebAssembly and libp2p.',
    details: [
      'Sub-50ms node gossip propagation',
      'Fully decentralized peer discovery with zero central broker',
      'Live demonstration across 40 synchronized devices',
    ],
  },
  {
    id: 'award-code-sprint-excellence',
    title: 'Builder Velocity & Community Impact Honor',
    issuer: 'Student Technology Council',
    date: 'Ecosystem Award',
    assetId: 'event-code-sprint-flagship',
    rank: 'Excellence Honor',
    category: 'Culture',
    summary: 'Honoring Trojans Collective for orchestrating Code Sprint v1.0 and fostering open engineering mentorship across hundreds of participating students.',
    details: [
      'Over 120 participating student engineers',
      '18 production-ready open source prototypes deployed',
      'Continuous 24-hour peer mentoring and technical workshops',
    ],
  },
];

export default ACHIEVEMENTS_DATA;
