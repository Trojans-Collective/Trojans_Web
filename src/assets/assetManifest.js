/**
 * TROJANS COLLECTIVE — CENTRALIZED ASSET MANIFEST
 * 
 * Strict architectural rule:
 * All image references across the entire website MUST resolve through this manifest.
 * Never hardcode direct image paths inside React UI components.
 * 
 * Phase 2 Verified Asset Inventory:
 * Real photographs verified on disk in /public/assets/.
 * Missing or unsupplied assets are preserved as isPlaceholder: true with fallback SVGs.
 */

export const PLACEHOLDERS = {
  LANDSCAPE: '/assets/placeholders/placeholder-landscape.svg',
  PORTRAIT: '/assets/placeholders/placeholder-portrait.svg',
  SQUARE: '/assets/placeholders/placeholder-square.svg',
  WIDE: '/assets/placeholders/placeholder-wide.svg',
};

export const ASSET_CATEGORIES = {
  BRAND: 'Brand',
  FOUNDERS: 'Founders',
  TEAM: 'Core Team',
  CULTURE: 'Culture & Work sessions',
  EVENTS_CODE_SPRINT: 'Code Sprint',
  EVENTS_TECH_BYTES: 'Tech Bytes',
  EVENTS_HACKATHONS: 'Hackathons',
  EVENTS_WORKSHOPS: 'Workshops',
  ACHIEVEMENTS: 'Achievements & Trophies',
  PROJECTS: 'Projects Showcase',
  GALLERY: 'Community Gallery',
};

export const SECTIONS = {
  HOME: 'home',
  ABOUT: 'about',
  PEOPLE: 'people',
  MEMORIES: 'floating-memories',
  PROJECTS: 'projects',
  EVENTS: 'events',
  ACHIEVEMENTS: 'achievements',
  MUSEUM: 'virtual-museum',
  JOIN: 'join',
  CONTACT: 'contact',
};

export const assetManifest = [
  // -------------------------------------------------------------
  // BRAND ASSETS
  // -------------------------------------------------------------
  {
    id: 'brand-logo-main',
    title: 'Trojans Collective Crest',
    category: ASSET_CATEGORIES.BRAND,
    image: '/assets/brand/trojans-logo.svg',
    placeholder: PLACEHOLDERS.SQUARE,
    aspectRatio: '1:1',
    isPlaceholder: false,
    description: 'Official Spartan Crest with Electric Lime core emitter and monolithic typography.',
    date: '2024',
    sections: [SECTIONS.HOME, SECTIONS.ABOUT, SECTIONS.JOIN, SECTIONS.CONTACT],
    suggestedSpecs: 'Vector SVG',
    verifiedDimensions: { width: 200, height: 200, format: 'SVG' },
  },

  // -------------------------------------------------------------
  // FOUNDERS & LEADERSHIP
  // -------------------------------------------------------------
  {
    id: 'founders-group-primary',
    title: 'The Founding Team',
    category: ASSET_CATEGORIES.FOUNDERS,
    image: '/assets/founders/founders-main.jpg.jpg',
    placeholder: PLACEHOLDERS.LANDSCAPE,
    aspectRatio: '16:9',
    isPlaceholder: false,
    description: 'The founders and core architects of Trojans Collective.',
    date: '2024',
    sections: [SECTIONS.HOME, SECTIONS.ABOUT, SECTIONS.PEOPLE, SECTIONS.MEMORIES, SECTIONS.MUSEUM],
    suggestedSpecs: '3000x1687 (16:9) verified photograph',
    verifiedDimensions: { width: 3000, height: 1687, format: 'JPEG' },
  },
  {
    id: 'founder-portrait-lead',
    title: 'Founder & Strategic Lead',
    category: ASSET_CATEGORIES.FOUNDERS,
    image: '/assets/founders/founder-lead.jpg.jpg',
    placeholder: PLACEHOLDERS.PORTRAIT,
    aspectRatio: '4:5',
    isPlaceholder: false,
    description: 'Lead founder portrait.',
    date: '2024',
    sections: [SECTIONS.ABOUT, SECTIONS.PEOPLE, SECTIONS.MEMORIES, SECTIONS.MUSEUM],
    suggestedSpecs: '256x320 (4:5) verified portrait',
    verifiedDimensions: { width: 256, height: 320, format: 'JPEG' },
  },
  {
    id: 'founder-portrait-co',
    title: 'Co-Founder & Technical Lead',
    category: ASSET_CATEGORIES.FOUNDERS,
    image: '/assets/founders/founder-tech.jpg.jpg',
    placeholder: PLACEHOLDERS.PORTRAIT,
    aspectRatio: '4:5',
    isPlaceholder: false,
    description: 'Technical co-founder portrait.',
    date: '2024',
    sections: [SECTIONS.ABOUT, SECTIONS.PEOPLE, SECTIONS.MEMORIES, SECTIONS.MUSEUM],
    suggestedSpecs: '1842x2301 (4:5) verified portrait',
    verifiedDimensions: { width: 1842, height: 2301, format: 'JPEG' },
  },

  // -------------------------------------------------------------
  // CORE TEAM & MEET THE BUILDERS
  // -------------------------------------------------------------
  {
    id: 'team-collective-shot',
    title: 'Trojans Collective Assembly',
    category: ASSET_CATEGORIES.TEAM,
    image: '/assets/team/core-team-assembly.jpg.jpg',
    placeholder: PLACEHOLDERS.WIDE,
    aspectRatio: '21:9',
    isPlaceholder: false,
    description: 'Assembly of Trojans Collective builders gathered together.',
    date: '2024',
    sections: [SECTIONS.HOME, SECTIONS.PEOPLE, SECTIONS.MEMORIES, SECTIONS.MUSEUM],
    suggestedSpecs: '320x135 (~21:9) verified wide photograph',
    verifiedDimensions: { width: 320, height: 135, format: 'JPEG' },
  },
  {
    id: 'builder-systems-lead',
    title: 'Systems & Backend Engineer',
    category: ASSET_CATEGORIES.TEAM,
    image: '/assets/team/builder-systems.jpg.png',
    placeholder: PLACEHOLDERS.PORTRAIT,
    aspectRatio: '4:5',
    isPlaceholder: false,
    description: 'Core builder portrait.',
    date: '2024',
    sections: [SECTIONS.PEOPLE, SECTIONS.MEMORIES],
    suggestedSpecs: '256x320 (4:5) verified portrait',
    verifiedDimensions: { width: 256, height: 320, format: 'JPEG' },
  },
  {
    id: 'builder-frontend-lead',
    title: 'Creative Technologist & UI Engineer',
    category: ASSET_CATEGORIES.TEAM,
    image: '/assets/team/builder-frontend.jpg.jpg',
    placeholder: PLACEHOLDERS.PORTRAIT,
    aspectRatio: '4:5',
    isPlaceholder: false,
    description: 'Core builder portrait.',
    date: '2024',
    sections: [SECTIONS.PEOPLE, SECTIONS.MEMORIES],
    suggestedSpecs: '1220x1525 (4:5) verified portrait',
    verifiedDimensions: { width: 1220, height: 1525, format: 'JPEG' },
  },
  {
    id: 'builder-ai-lead',
    title: 'AI & Machine Intelligence Specialist',
    category: ASSET_CATEGORIES.TEAM,
    image: '/assets/team/builder-ai.jpg.png',
    placeholder: PLACEHOLDERS.PORTRAIT,
    aspectRatio: '4:5',
    isPlaceholder: false,
    description: 'Core builder portrait.',
    date: '2024',
    sections: [SECTIONS.PEOPLE, SECTIONS.MEMORIES],
    suggestedSpecs: '256x320 (4:5) verified portrait',
    verifiedDimensions: { width: 256, height: 320, format: 'JPEG' },
  },

  // -------------------------------------------------------------
  // CULTURE & WORK SESSIONS
  // -------------------------------------------------------------
  {
    id: 'culture-late-night-build',
    title: 'Midnight Sprint Session',
    category: ASSET_CATEGORIES.CULTURE,
    image: '/assets/culture/midnight-sprint.jpg.jpg',
    placeholder: PLACEHOLDERS.LANDSCAPE,
    aspectRatio: '16:9',
    isPlaceholder: false,
    description: 'Collaborative development sprint and late-night work session.',
    date: '2024',
    sections: [SECTIONS.HOME, SECTIONS.ABOUT, SECTIONS.MEMORIES, SECTIONS.MUSEUM],
    suggestedSpecs: '320x180 (16:9) verified photograph',
    verifiedDimensions: { width: 320, height: 180, format: 'JPEG' },
  },
  {
    id: 'culture-whiteboard-arch',
    title: 'Whiteboard Architecture Session',
    category: ASSET_CATEGORIES.CULTURE,
    image: '/assets/culture/whiteboard-session.jpg.png',
    placeholder: PLACEHOLDERS.LANDSCAPE,
    aspectRatio: '16:9',
    isPlaceholder: false,
    description: 'Builders analyzing diagrams and system architecture on whiteboard.',
    date: '2024',
    sections: [SECTIONS.ABOUT, SECTIONS.MEMORIES, SECTIONS.MUSEUM],
    suggestedSpecs: '1584x890 (16:9) verified photograph',
    verifiedDimensions: { width: 1584, height: 890, format: 'PNG' },
  },

  // -------------------------------------------------------------
  // EVENTS: CODE SPRINT
  // -------------------------------------------------------------
  {
    id: 'event-code-sprint-flagship',
    title: 'Code Sprint Arena',
    category: ASSET_CATEGORIES.EVENTS_CODE_SPRINT,
    image: '/assets/events/code-sprint/sprint-arena-action.jpg.jpg',
    placeholder: PLACEHOLDERS.LANDSCAPE,
    aspectRatio: '16:9',
    isPlaceholder: false,
    description: 'Active participants and builders during Code Sprint event.',
    date: '2024',
    sections: [SECTIONS.EVENTS, SECTIONS.MEMORIES, SECTIONS.MUSEUM],
    suggestedSpecs: '320x180 (16:9) verified photograph',
    verifiedDimensions: { width: 320, height: 180, format: 'JPEG' },
  },

  // -------------------------------------------------------------
  // EVENTS: TECH BYTES
  // -------------------------------------------------------------
  {
    id: 'event-tech-bytes-live',
    title: 'Tech Bytes Session',
    category: ASSET_CATEGORIES.EVENTS_TECH_BYTES,
    image: '/assets/events/tech-bytes/tech-bytes-speaker.jpg.jpg',
    placeholder: PLACEHOLDERS.LANDSCAPE,
    aspectRatio: '16:9',
    isPlaceholder: false,
    description: 'Speaker presenting technical discourse during Tech Bytes.',
    date: '2024',
    sections: [SECTIONS.EVENTS, SECTIONS.MEMORIES],
    suggestedSpecs: '320x180 (16:9) verified photograph',
    verifiedDimensions: { width: 320, height: 180, format: 'JPEG' },
  },

  // -------------------------------------------------------------
  // EVENTS: HACKATHONS
  // -------------------------------------------------------------
  {
    id: 'event-hackathon-victory',
    title: 'Hackathon Stage Recognition',
    category: ASSET_CATEGORIES.EVENTS_HACKATHONS,
    image: '/assets/events/hackathons/hackathon-podium.jpg.jpg',
    placeholder: PLACEHOLDERS.LANDSCAPE,
    aspectRatio: '16:9',
    isPlaceholder: false,
    description: 'Trojans Collective delegation receiving recognition on stage.',
    date: '2024',
    sections: [SECTIONS.HOME, SECTIONS.EVENTS, SECTIONS.ACHIEVEMENTS, SECTIONS.MEMORIES, SECTIONS.MUSEUM],
    suggestedSpecs: '320x180 (16:9) verified photograph',
    verifiedDimensions: { width: 320, height: 180, format: 'JPEG' },
  },
  {
    id: 'event-hackathon-war-room',
    title: 'Hackathon War Room',
    category: ASSET_CATEGORIES.EVENTS_HACKATHONS,
    image: '/assets/events/hackathons/hackathon-war-room.jpg.jpg',
    placeholder: PLACEHOLDERS.LANDSCAPE,
    aspectRatio: '16:9',
    isPlaceholder: false,
    description: 'Candid war room photograph during intense hackathon build.',
    date: '2024',
    sections: [SECTIONS.EVENTS, SECTIONS.MEMORIES],
    suggestedSpecs: '4096x2304 (16:9) verified photograph',
    verifiedDimensions: { width: 4096, height: 2304, format: 'JPEG' },
  },

  // -------------------------------------------------------------
  // ACHIEVEMENTS
  // -------------------------------------------------------------
  {
    id: 'achievement-national-trophy',
    title: 'Championship Trophy',
    category: ASSET_CATEGORIES.ACHIEVEMENTS,
    image: '/assets/achievements/championship-trophy.jpg.jpg',
    placeholder: PLACEHOLDERS.PORTRAIT,
    aspectRatio: '4:5',
    isPlaceholder: false,
    description: 'Championship trophy awarded to Trojans Collective.',
    date: '2024',
    sections: [SECTIONS.HOME, SECTIONS.ACHIEVEMENTS, SECTIONS.MEMORIES, SECTIONS.MUSEUM],
    suggestedSpecs: '1431x1788 (4:5) verified photograph',
    verifiedDimensions: { width: 1431, height: 1788, format: 'JPEG' },
  },

  // -------------------------------------------------------------
  // PROJECT PORTALS
  // -------------------------------------------------------------
  {
    id: 'project-mesh-os',
    title: 'MeshOS Preview',
    category: ASSET_CATEGORIES.PROJECTS,
    image: '/assets/projects/mesh-os-preview.jpg.png',
    placeholder: PLACEHOLDERS.LANDSCAPE,
    aspectRatio: '16:9',
    isPlaceholder: false,
    description: 'Interface overview for MeshOS project.',
    date: '2024',
    sections: [SECTIONS.HOME, SECTIONS.PROJECTS, SECTIONS.MEMORIES],
    suggestedSpecs: '1455x818 (16:9) verified screenshot',
    verifiedDimensions: { width: 1455, height: 818, format: 'PNG' },
  },
  {
    id: 'project-sentinel-ai',
    title: 'Sentinel AI Preview',
    category: ASSET_CATEGORIES.PROJECTS,
    image: '/assets/projects/sentinel-ai-preview.jpg',
    placeholder: PLACEHOLDERS.LANDSCAPE,
    aspectRatio: '16:9',
    isPlaceholder: true,
    description: 'Autonomous security scanner preview.',
    date: null,
    sections: [SECTIONS.PROJECTS],
    suggestedSpecs: '1920x1080 screenshot (awaiting asset)',
  },
  {
    id: 'project-spartan-canvas',
    title: 'Spartan Canvas Preview',
    category: ASSET_CATEGORIES.PROJECTS,
    image: '/assets/projects/spartan-canvas-preview.jpg',
    placeholder: PLACEHOLDERS.LANDSCAPE,
    aspectRatio: '16:9',
    isPlaceholder: true,
    description: 'WebGL creative engine interface.',
    date: null,
    sections: [SECTIONS.PROJECTS, SECTIONS.MUSEUM],
    suggestedSpecs: '1920x1080 screenshot (awaiting asset)',
  },

  // -------------------------------------------------------------
  // COMMUNITY GALLERY
  // -------------------------------------------------------------
  {
    id: 'gallery-orientation-day',
    title: 'Community Orientation Gathering',
    category: ASSET_CATEGORIES.GALLERY,
    image: '/assets/gallery/initiation-day.jpg.jpg',
    placeholder: PLACEHOLDERS.LANDSCAPE,
    aspectRatio: '16:9',
    isPlaceholder: false,
    description: 'Gathering of Trojans Collective builders and community members.',
    date: '2024',
    sections: [SECTIONS.ABOUT, SECTIONS.MEMORIES, SECTIONS.JOIN],
    suggestedSpecs: '320x180 (16:9) verified photograph',
    verifiedDimensions: { width: 320, height: 180, format: 'JPEG' },
  },
];

/**
 * Manifest helper functions
 */

export function getAssetById(id) {
  const asset = assetManifest.find((item) => item.id === id);
  if (!asset) {
    console.warn(`[AssetManifest] Asset with id "${id}" not found. Falling back to default placeholder.`);
    return {
      id,
      title: 'Missing Asset',
      category: 'Uncategorized',
      image: PLACEHOLDERS.LANDSCAPE,
      placeholder: PLACEHOLDERS.LANDSCAPE,
      isPlaceholder: true,
      description: 'Asset has not been registered in manifest.',
      sections: [],
    };
  }

  return {
    ...asset,
    resolvedSrc: asset.isPlaceholder ? asset.placeholder : asset.image,
  };
}

export function getAssetsByCategory(category) {
  return assetManifest
    .filter((item) => item.category === category)
    .map((item) => ({
      ...item,
      resolvedSrc: item.isPlaceholder ? item.placeholder : item.image,
    }));
}

export function getAssetsBySection(section) {
  return assetManifest
    .filter((item) => item.sections && item.sections.includes(section))
    .map((item) => ({
      ...item,
      resolvedSrc: item.isPlaceholder ? item.placeholder : item.image,
    }));
}

export function isAssetPlaceholder(idOrAsset) {
  if (typeof idOrAsset === 'string') {
    const asset = assetManifest.find((item) => item.id === idOrAsset);
    return asset ? !!asset.isPlaceholder : true;
  }
  return !!idOrAsset?.isPlaceholder;
}

export default assetManifest;
