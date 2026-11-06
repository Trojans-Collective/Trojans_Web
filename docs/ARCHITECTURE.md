# Trojans Collective — Architecture Documentation
**Document Version:** 1.0.0 (Phase 1 Foundation)  
**System Type:** Premium Interactive Web Experience & Digital Collective Hub  

---

## 1. System Vision & Architecture Philosophy

**Trojans Collective** is an elite student-led hackathon and technology collective.

> *"Not a club. A collective of builders."*

The architecture is built from the ground up to support high-performance editorial typography, fluid page transitions, spatial 3D experiences, and an isolated playable 3D Virtual Museum, while ensuring:
1. **Separation of Concerns:** Visual presentation, business logic, feature isolation, and raw data are strictly decoupled.
2. **Progressive Enhancement:** WebGL/Three.js enhances the experience, but the site remains 100% accessible and functional on any device or network even if WebGL is unavailable or disabled.
3. **API-Ready Decoupling:** Static and mock datasets mirror expected schema designs for a future Node.js / Express / MongoDB / Cloudinary backend.

---

## 2. Directory Tree Structure

```text
Trojans_Web/
├── docs/
│   ├── ARCHITECTURE.md          # Comprehensive architectural specification
│   ├── DESIGN_SYSTEM.md         # Design tokens, color system, and typography
│   └── PHOTO_ASSET_GUIDE.md     # Photo specifications, filenames, and manifest rules
├── public/
│   ├── assets/
│   │   ├── brand/               # Logos and crests (SVG)
│   │   ├── founders/            # Leadership photography
│   │   ├── team/                # Builder portraits (4:5)
│   │   ├── culture/             # Work sessions, midnight sprints
│   │   ├── events/              # Event photography (code-sprint, tech-bytes, hackathons, workshops)
│   │   ├── achievements/        # Trophies, medals, awards
│   │   ├── projects/            # Project showcase UI screenshots
│   │   ├── gallery/             # Curated collective memories
│   │   └── placeholders/        # Technical SVG placeholders with aspect ratios
│   ├── models/                  # 3D GLTF/GLB models for R3F & Virtual Museum
│   └── textures/                # Texture maps and environment maps
├── src/
│   ├── app/
│   │   ├── App.jsx              # Application root with router and layout shell
│   │   └── routes.jsx           # Declarative React Router route definitions
│   ├── assets/
│   │   └── assetManifest.js     # Single source of truth for all website imagery
│   ├── components/
│   │   ├── common/              # Universal primitives (SEO, ErrorBoundary, Icon)
│   │   ├── layout/              # Layout containers (Navbar, Footer, MainLayout)
│   │   ├── navigation/          # NavLink, MobileMenu, Breadcrumbs
│   │   └── ui/                  # Design system components (Button, Badge, ImageFrame, Modal, SectionHeader)
│   ├── data/
│   │   ├── navigation.js        # Global navigation links and action states
│   │   ├── projects.js          # Project showcase data structures
│   │   ├── events.js            # Event listings and categories
│   │   ├── members.js           # Builder profiles and roles
│   │   └── milestones.js        # Historical timeline and museum room milestones
│   ├── features/
│   │   ├── floating-memories/   # Spatial photo environment feature module
│   │   ├── interactive-typography/ # 3D typography response engine
│   │   ├── virtual-museum/      # Playable 3D timeline universe with WASD explorer
│   │   ├── team-experience/     # Interactive builder cards and modal inspection
│   │   ├── project-portals/     # Dimensional project showcase viewer
│   │   └── event-gallery/       # Full-screen photographic exhibition engine
│   ├── hooks/                   # Custom React hooks (useReducedMotion, useScrollPosition, etc.)
│   ├── pages/                   # Top-level route pages (Home, About, Memories, etc.)
│   ├── services/                # API abstraction layer (prepared for Node/Express/MongoDB)
│   ├── styles/                  # Tailwind, CSS variables, and bespoke keyframe animations
│   └── utils/                   # Helper functions (cn, formatters, clamp)
├── index.html
├── package.json
├── tailwind.config.js
└── vite.config.js
```

---

## 3. Technology Stack & Technical Rationale

| Layer | Technology | Version | Purpose |
| :--- | :--- | :--- | :--- |
| **Build & Bundler** | Vite | `^5.4.x` | Blazing-fast HMR and optimized production ES-module bundling. |
| **View Layer** | React | `^18.3.1` | Stable ecosystem foundation for concurrent 3D rendering and R3F. |
| **Routing** | React Router | `^6.28.x` | Client-side routing with clean nested layouts and scroll restoration. |
| **Styling** | Tailwind CSS | `^3.4.x` | Utility-first design tokens with customized obsidian/lime extensions. |
| **UI Motion** | Motion for React (`framer-motion`) | `^11.15.x` | Declarative transitions, page routing motion, and micro-interactions. |
| **Scroll Engine** | GSAP + ScrollTrigger | `^3.12.x` | Complex timeline choreography and parallax scrolling. |
| **3D Rendering** | Three.js + R3F + Drei | `^0.170.x` / `^8.17.x` | React Three Fiber rendering pipeline for WebGL hero and museum. |
| **Physics (Future)** | Rapier Physics (`@react-three/rapier` ready) | Architecture prepared | Rigid body collision detection for the 3D Virtual Museum. |
| **Icons** | Lucide React | `^0.468.x` | Clean, geometric, editorial SVG iconography. |

---

## 4. Route Map & Page Specifications

All 10 pages are registered with route components and error handling:

| Route Path | Page Component | Experience Scope |
| :--- | :--- | :--- |
| `/` | `pages/Home/` | Preliminary hero, brand statement, 3D teaser, feature portals. |
| `/about` | `pages/About/` | Brand philosophy, origins story, operating principles, core values. |
| `/memories` | `pages/Memories/` | Spatial Photographic Environment (**Floating Memories**). |
| `/people` | `pages/People/` | **Meet the Builders**: interactive member directory, skills, roles. |
| `/projects` | `pages/Projects/` | **Project Portals**: dimensional showcases, code repos, live demos. |
| `/events` | `pages/Events/` | **Cinematic Event Gallery**: Code Sprint, Tech Bytes, Hackathons. |
| `/achievements` | `pages/Achievements/` | Championship titles, trophies, milestones, competitive track record. |
| `/museum` | `pages/Museum/` | **Timeline Universe — Virtual Museum**: 3D playable walkthrough. |
| `/join` | `pages/Join/` | Application flow, recruitment cohorts, tracks (Eng, AI, Design). |
| `/contact` | `pages/Contact/` | Direct communication, sponsorship inquiries, social links. |

---

## 5. Mandatory Experiences Architecture

### A. Floating Memories (`src/features/floating-memories/`)
- **Spatial Concept:** Interactive 3D photography cloud floating in deep obsidian space.
- **Interactivity:** Raycaster-based hover to tilt and reveal metadata; click to focus camera.
- **Data Hook:** Direct integration with `getAssetsBySection('floating-memories')`.

### B. Interactive 3D Typography (`src/features/interactive-typography/`)
- **Concept:** Monumental words: `BUILD`, `CREATE`, `COMPETE`, `EXPLORE`.
- **Interactivity:** Mouse proximity displacement, smooth inertial damping, subtle metallic specularity.

### C. Timeline Universe — Virtual Museum (`src/features/virtual-museum/`)
- **Concept:** Playable 3rd-person character navigating 5 connected architectural rooms:
  1. *The Origins* (founding history)
  2. *The People* (founders and members)
  3. *The Builders* (projects and hardware/software experiments)
  4. *The Arena* (hackathon battles and competition victories)
  5. *The Collective* (culture, midnight sprints, shared journey)
- **Input Controls:** Keyboard (`[W][A][S][D]`, `[Arrow Keys]`, `[F]` to inspect exhibit, `[Esc]` to exit exhibit detail) and mobile touch virtual d-pad.
- **Alternative Mode:** Non-3D guided tour fallback for accessibility and low-end devices.

### D. Meet the Builders (`src/features/team-experience/`)
- Search, filter by domain (Frontend, Systems, AI, Design), bio modals, GitHub/LinkedIn links.

### E. Project Portals (`src/features/project-portals/`)
- Multi-dimensional cards with tech badges, live demo status, repo links, and architecture diagrams.

### F. Cinematic Event Gallery (`src/features/event-gallery/`)
- Filterable photographic gallery with lightbox, keyboard navigation, and event metadata.

---

## 6. Asset Integrity & Manifest System

- Raw image paths are forbidden in components.
- The single point of truth is `src/assets/assetManifest.js`.
- The `<ImageFrame />` component wraps standard image loading with:
  1. Automated placeholder substitution.
  2. Lazy loading with blur-up or skeleton states.
  3. Aspect-ratio preservation (preventing layout shifts).
  4. Visual indicators when an asset is waiting for verified photography.

---

## 7. Future Backend Integration Readiness

The directory `src/services/` contains an API service abstraction layer:
- `api.js`: Centralized Axios/fetch client with baseUrl configuration.
- `endpoints.js`: Clean interface contracts for `/api/members`, `/api/projects`, `/api/events`, `/api/join`.
- In Phase 1, these services automatically fall back to `src/data/*.js` when backend environment variables are absent.
- When the Node.js / Express / MongoDB / Cloudinary backend is deployed, the frontend switches seamlessly via environment variables without component changes.

---

## 8. Performance & Accessibility Standards

- **Reduced Motion:** Checked via `window.matchMedia('(prefers-reduced-motion: reduce)')`. R3F frameloop throttled and motion transitions disabled if user prefers reduced motion.
- **WebGL Fallback:** If WebGL fails to initialize or is unsupported, `<Canvas>` triggers an graceful HTML5/CSS3 fallback without throwing exceptions.
- **Zero Console Errors:** Clean React lifecycles and strict linting.
