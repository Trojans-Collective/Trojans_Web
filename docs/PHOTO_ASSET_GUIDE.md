# Trojans Collective — Photography & Asset Guide
**Document Version:** 2.0.0 (Phase 2 Asset Verification)  
**Maintained by:** Frontend Architecture & Creative Development  

---

## 1. Core Photography Philosophy

At **Trojans Collective**, our digital presence must represent reality, craft, and engineering spirit.

> **"Not a club. A collective of builders."**

### Critical Rules
1. **Never invent real photographs** of Trojans members using AI generators or mock portraits.
2. **Never silently substitute generic stock photography** (e.g., smiling business people with coffee cups) for authentic builders.
3. **Never spam duplicate photos** across multiple sections simply to fill whitespace. If an image is pending, our design system renders a branded high-contrast technical placeholder with asset ID readouts.
4. **All images must be routed through the Centralized Asset Manifest** (`src/assets/assetManifest.js`). No component is allowed to use raw relative paths.
5. **Preserve User Files:** Do not delete, rename, or overwrite user-supplied assets. The manifest accommodates exact filenames as saved on disk.

---

## 2. Directory Hierarchy

All assets reside in the `/public` root:

```text
public/
  assets/
    brand/                 # Logos, crests, geometric marks (SVG/PNG)
    founders/              # Founder portraits & leadership photos
    team/                  # Core team & builder portraits (4:5 ratio)
    culture/               # Hackathon sprints, whiteboard sessions, lab photos
    events/
      code-sprint/         # Flagship 24-hour sprint arena
      tech-bytes/          # Technical discourse & tech talk events
      hackathons/          # Hackathon delegations, war rooms, victories
      workshops/           # Hands-on deep dives & hardware sessions
    achievements/          # Trophies, medals, stage presentations
    projects/              # Screenshots, demo captures, system diagrams
    gallery/               # Behind the scenes & social memories
    placeholders/          # High-contrast architectural SVGs (Landscape, Portrait, Square, Wide)
  models/                  # 3D assets (.glb / .gltf) for Virtual Museum & R3F
  textures/                # PBR textures (roughness, normal, matcaps)
```

---

## 3. Verified Photograph Inventory (Current State)

All 16 photographs below are present in the asset archive. The individual portrait-to-person mappings are not confirmed and remain placeholders in `src/assets/assetManifest.js`.

| Asset ID | Category | Actual File Path | Dimensions | Aspect Ratio | Format | Status | Notes |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| `brand-logo-main` | Brand | `/assets/brand/trojans-logo.svg` | Vector | 1:1 | SVG | **VERIFIED** | Official Spartan Crest with Electric Lime core emitter |
| `founders-group-primary` | Founders | `/assets/founders/founders-main.jpg.jpg` | 3000 × 1687 | 16:9 | JPEG | **VERIFIED** | High-res founding team photograph |
| `founder-portrait-lead` | Founders | `/assets/founders/founder-lead.jpg.jpg` | 256 × 320 | 4:5 | JPEG | **MAPPING PENDING** | Do not publish as an individual profile until the person is confirmed |
| `founder-portrait-co` | Founders | `/assets/founders/founder-tech.jpg.jpg` | 1842 × 2301 | 4:5 | JPEG | **MAPPING PENDING** | Current technical co-founder image is incorrect or unconfirmed; confirm the correct file before mapping |
| `team-collective-shot` | Team | `/assets/team/core-team-assembly.jpg.jpg` | 320 × 135 | 2.37 (21:9) | JPEG | **VERIFIED** | Trojans Collective assembly |
| `builder-systems-lead` | Team | `/assets/team/builder-systems.jpg.png` | 256 × 320 | 4:5 | JPEG | **MAPPING PENDING** | Do not assign to a named person or technical role until confirmed |
| `builder-frontend-lead`| Team | `/assets/team/builder-frontend.jpg.jpg` | 1220 × 1525 | 4:5 | JPEG | **MAPPING PENDING** | Do not assign to a named person or technical role until confirmed |
| `builder-ai-lead` | Team | `/assets/team/builder-ai.jpg.png` | 256 × 320 | 4:5 | JPEG | **MAPPING PENDING** | Do not assign to a named person or technical role until confirmed |
| `culture-late-night-build`| Culture | `/assets/culture/midnight-sprint.jpg.jpg` | 320 × 180 | 16:9 | JPEG | **VERIFIED** | Late night collaborative sprint |
| `culture-whiteboard-arch` | Culture | `/assets/culture/whiteboard-session.jpg.png` | 1584 × 890 | 16:9 | PNG | **VERIFIED** | Whiteboard architecture design session |
| `event-code-sprint-flagship`| Events | `/assets/events/code-sprint/sprint-arena-action.jpg.jpg` | 320 × 180 | 16:9 | JPEG | **VERIFIED** | Code Sprint arena floor action |
| `event-tech-bytes-live` | Events | `/assets/events/tech-bytes/tech-bytes-speaker.jpg.jpg` | 320 × 180 | 16:9 | JPEG | **VERIFIED** | Speaker presenting during Tech Bytes |
| `event-hackathon-victory`| Events | `/assets/events/hackathons/hackathon-podium.jpg.jpg` | 320 × 180 | 16:9 | JPEG | **VERIFIED** | Delegation receiving honors on stage |
| `event-hackathon-war-room`| Events | `/assets/events/hackathons/hackathon-war-room.jpg.jpg` | 4096 × 2304 | 16:9 | JPEG | **VERIFIED** | High-res hackathon war room workspace |
| `achievement-national-trophy`| Achievements | `/assets/achievements/championship-trophy.jpg.jpg` | 1431 × 1788 | 4:5 | JPEG | **VERIFIED** | High-res championship trophy photograph |
| `project-mesh-os` | Projects | `/assets/projects/mesh-os-preview.jpg.png` | 1455 × 818 | 16:9 | PNG | **VERIFIED** | MeshOS system interface screenshot |
| `gallery-orientation-day` | Gallery | `/assets/gallery/initiation-day.jpg.jpg` | 320 × 180 | 16:9 | JPEG | **VERIFIED** | Community orientation and gathering |

---

## 4. Pending Assets Awaiting Future Ingestion

The following items remain configured with high-contrast architectural SVG placeholders in `assetManifest.js`:

| Asset ID | Category | Expected Location | Recommended Aspect Ratio | Recommended Resolution | Description |
| :--- | :--- | :--- | :--- | :--- | :--- |
| `project-sentinel-ai` | Projects | `public/assets/projects/` | **16:9** | 1920 × 1080 | UI screenshot or terminal session of Sentinel AI |
| `project-spartan-canvas` | Projects | `public/assets/projects/` | **16:9** | 1920 × 1080 | Canvas rendering preview of Spartan Canvas |
| `event-workshop-*` | Events | `public/assets/events/workshops/` | **16:9** | 1920 × 1080 | Photos of hands-on technical workshops & hardware builds |

---

## 5. File Naming Note

Files provided via Windows Explorer often append dual extensions (e.g. `filename.jpg.jpg` or `filename.jpg.png`) when "Hide extensions for known file types" is active in the OS. The `assetManifest.js` is mapped to the exact on-disk filenames to prevent breaking file references or touching user files.

## 6. Profile Mapping Correction

The individual founder and builder portrait files remain on disk, but their mappings to people have not been independently confirmed. They are intentionally rendered as portrait placeholders in the website; do not infer identity or role from filenames or appearance. In particular, `/assets/founders/founder-tech.jpg.jpg` is not approved as the technical co-founder portrait. Supply the correct photograph and confirm the mapping before changing `founder-portrait-co` from a placeholder.

The collective group photograph may be used as a group image only. Individual bios, names, skill lists, and role mappings are omitted until verified source information is provided.
