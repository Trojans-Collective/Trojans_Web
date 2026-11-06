# Trojans Collective — Design System Specification
**Document Version:** 1.0.0 (Phase 1 Foundation)  
**Creative Direction:** Cinematic 3D + Premium Editorial Design  
**Brand Philosophy:** *"Not a club. A collective of builders."*  

---

## 1. Visual Identity & Creative Principles

The visual language of **Trojans Collective** combines high-end editorial graphic design with modern creative computing aesthetics.

### Key Pillars:
1. **Architectural Obsidian Space:** The interface feels expansive, deep, and grounded in darkness.
2. **Metallic Silver & Controlled Electric Lime:** Primary text is crisp metallic silver. Electric lime is an intentional accent used strictly for interactive states, focal points, and live statuses — never sprayed arbitrarily as neon clutter.
3. **Monumental Editorial Typography:** Headings are oversized, confident, and structured with generous negative space.
4. **Sharp, Precise Geometry:** We reject bubbly, overly rounded cards and generic SaaS templates. Cards and surfaces have clean, subtle borders (1px) with refined radii (4px to 8px).
5. **Authentic Photography:** High-contrast, authentic photography of genuine builders and hackathon moments.

### Strictly Avoid:
- ❌ Excessive rainbow neon or purple/blue generic "AI" gradients.
- ❌ Unconnected glowing blur circles floating randomly in the background.
- ❌ Heavy glassmorphism (frosted blurs everywhere that obscure contrast).
- ❌ Generic SaaS dashboard metrics cards.
- ❌ Repetitive, heavily rounded pill-cards.
- ❌ Fidgety, excessive animations that distract from content.

---

## 2. Design Tokens

### 2.1 Color Tokens

#### Background & Surfaces (Obsidian & Charcoal)
| Token Name | Value | Purpose |
| :--- | :--- | :--- |
| `bg-obsidian-deep` | `#040506` | Deepest backdrop layer for 3D viewports and canvases. |
| `bg-obsidian` (Default) | `#08090A` | Standard application base background. |
| `bg-obsidian-surface` | `#0E1113` | Primary container surface for content cards and panels. |
| `bg-obsidian-card` | `#121518` | Elevated card background with high contrast against base. |
| `bg-charcoal` | `#161A1D` | Secondary structural elements and subtle alternating zones. |
| `border-obsidian` | `rgba(255, 255, 255, 0.08)` | Standard 1px architectural divider border. |
| `border-obsidian-hover`| `rgba(255, 255, 255, 0.18)` | Subtle border illumination on hover. |

#### Typography & Metallic Accents (Silver Palette)
| Token Name | Value | Purpose |
| :--- | :--- | :--- |
| `text-silver-bright` | `#F5F6F8` | Primary display headlines, high contrast callouts. |
| `text-silver` (Default) | `#E2E4E8` | Standard body copy and crisp readable text. |
| `text-silver-muted` | `#9CA3AF` | Secondary descriptions, dates, category labels. |
| `text-silver-dark` | `#606770` | Subtle metadata, timestamps, technical readouts. |

#### Energy & Interaction (Controlled Electric Lime)
| Token Name | Value | Purpose |
| :--- | :--- | :--- |
| `lime-default` | `#D4FF00` | Primary interactive accent, active pills, live badges, primary buttons. |
| `lime-hover` | `#E2FF33` | Hover state for lime elements. |
| `lime-dark` | `#A6C800` | Pressed state or subtle border tone. |
| `lime-muted` | `rgba(212, 255, 0, 0.12)` | Subtle badge and chip background fills. |
| `lime-glow` | `rgba(212, 255, 0, 0.28)` | Controlled volumetric glow on key interactive buttons. |

#### Heritage Accent (Subtle Spartan Crimson)
| Token Name | Value | Purpose |
| :--- | :--- | :--- |
| `spartan-crimson` | `#8B1E22` | Deep spartan accent for special heritage badges and trophy seals. |
| `spartan-subtle` | `rgba(139, 30, 34, 0.2)` | Background badge for competitive / hackathon arena tags. |

---

### 2.2 Typography Hierarchy

We use a three-tier typographic system:

1. **Editorial Display:** `Space Grotesk` (Geometric sans-serif with distinct character).
   - *Weights:* 600 (SemiBold), 700 (Bold).
   - *Usage:* Hero titles, section headings, monumental numerical identifiers (`01`, `02`).
   
2. **Body & Interface:** `Inter` (Precision humanist/grotesque sans-serif).
   - *Weights:* 400 (Regular), 500 (Medium), 600 (SemiBold).
   - *Usage:* Body paragraphs, navigation links, button text, dialog descriptions.

3. **Technical Readout:** `JetBrains Mono` (Monospaced engineered typeface).
   - *Weights:* 400 (Regular), 500 (Medium).
   - *Usage:* Coordinates, manifest IDs, status tags (`ONLINE // 2024`), code snippets, keyboard shortcut hints (`[W][A][S][D]`).

#### Font Scale
| Class | Size / Line Height | Tracking | Recommended Use |
| :--- | :--- | :--- | :--- |
| `text-display-xl` | 4.5rem – 7rem (72px – 112px) | `-0.04em` | Main Hero Headline ("TROJANS COLLECTIVE") |
| `text-display-lg` | 3rem – 4.5rem (48px – 72px) | `-0.03em` | Major Section Headers |
| `text-display-md` | 2rem – 2.75rem (32px – 44px) | `-0.02em` | Feature Titles & Subheadings |
| `text-body-lg` | 1.125rem (18px) / 1.6 | normal | Lead paragraphs & hero subtitles |
| `text-body-base` | 1rem (16px) / 1.5 | normal | Standard paragraph copy |
| `text-caption` | 0.875rem (14px) / 1.4 | `0.02em` | Secondary notes, card captions |
| `text-mono-sm` | 0.75rem (12px) / 1.2 | `0.15em` | Technical badges, dates, uppercase IDs |

---

### 2.3 Radii & Elevation

To preserve sharp architectural elegance:

- `rounded-none`: 0px (Strict technical boxes, full width dividers)
- `rounded-xs`: 2px (Badges, small status chips)
- `rounded-sm`: 4px (Primary and secondary buttons, input fields)
- `rounded-md`: 8px (Cards, modal dialogs, image frames)
- `rounded-lg`: 12px (Outer modal shells)
- **NO `rounded-3xl` or `rounded-full` cards.**

---

## 3. Core UI Component Library

The foundation includes standardized reusable components located in `src/components/ui/`:

### 3.1 `<Button />`
Variants:
- `primary`: Solid Electric Lime with Obsidian text, hover glow, and crisp border.
- `secondary`: Obsidian card background with 1px silver border and metallic hover state.
- `ghost`: Transparent with subtle border on hover.
- `danger`: Spartan crimson for critical actions.
- *Supports:* `asLink` (via React Router `<Link>`), `icon`, `size` (`sm`, `md`, `lg`), `loading` state.

### 3.2 `<Badge />`
Variants:
- `lime`: Electric lime accent indicator (for "NEW", "LIVE", "ONLINE").
- `silver`: Metallic technical badge.
- `spartan`: Hackathon / Competition tag.
- `outline`: Monospaced coordinate/metadata tag with subtle border.

### 3.3 `<ImageFrame />`
- Interacts with `src/assets/assetManifest.js`.
- Automatically renders high-contrast technical placeholder SVG if authentic photograph is pending.
- Prevents Cumulative Layout Shift (CLS) through fixed aspect ratio containers (`16:9`, `4:5`, `1:1`, `21:9`).
- Displays subtle overlay on hover with asset ID and category.

### 3.4 `<SectionHeader />`
- Standardized editorial section introductory element.
- Includes monospaced numerical index (`// 01_ORIGINS`), bold editorial title, and balanced descriptive paragraph.

### 3.5 `<ModalOverlay />`
- Accessible backdrop blur with `z-50` isolation.
- Automatic `[Escape]` key dismissal and keyboard trap support.
- Smooth Motion entrance scale and opacity fade.

### 3.6 `<LoadingIndicator />`
- High-tech radar / scanline spinner with electric lime center pulse.
- Replaces generic circular spinners with an engineered builder aesthetic.
