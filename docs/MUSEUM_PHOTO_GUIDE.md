# Trojans Collective — Museum Photography & Archive Guide

**Document Version:** 1.0.0  
**Feature:** The Memory Universe — 3D Spatial Photographic Archive  
**Target Route:** `/museum`  

---

## 1. Where to Place Photographs

All photographs intended for **The Memory Universe** must be placed in:

```text
src/assets/museum-archive/
```

You do **not** need to register images in an asset manifest or edit any JavaScript arrays. Simply drop image files into this directory.

---

## 2. Supported File Formats

The discovery engine supports all major modern web photograph formats:

| Extension | Format | Description |
| :--- | :--- | :--- |
| `.jpg` / `.jpeg` | JPEG | Standard photograph format (recommended for high compatibility) |
| `.png` | PNG | Lossless photography and graphics |
| `.webp` | WebP | Modern high-efficiency web image format |
| `.avif` | AVIF | Ultra-high compression next-gen image format |

*Note:* File extensions are matched case-insensitively (e.g., `.JPG`, `.PNG` are fully supported).

---

## 3. How Automatic Image Discovery Works

The system utilizes Vite’s native `import.meta.glob`:

```javascript
const archiveImageModules = import.meta.glob(
  '../../assets/museum-archive/**/*.{jpg,jpeg,png,webp,avif}',
  { eager: true, import: 'default' }
);
```

At build time and during development:
1. Vite scans `src/assets/museum-archive/` for all matching images.
2. It assigns unique URLs and includes them directly in the 3D panoramic universe.
   The desktop panorama keeps empty positions blank, and new photographs fill those positions as the archive grows.
3. Aspect ratios are resolved automatically so portrait, landscape, and square photographs maintain their natural proportions without distortion.
4. Optimized canvas thumbnail textures are generated on the fly for the 3D surface, conserving GPU VRAM and enabling smooth 60 FPS performance even with 100+ photographs.
5. When a visitor clicks on any photo, the full-resolution original image is displayed inside the fullscreen modal viewer.

---

## 4. Development Server & Hot Reloading

- **Vite Hot Module Replacement (HMR):** Adding, renaming, or removing images from `src/assets/museum-archive/` will automatically trigger Vite HMR in most development environments.
- **When to Restart:** If your editor or OS does not emit directory-watch events, simply stop and re-run `npm run dev` to refresh the image discovery index.

---

## 5. How to Add More Photographs

1. Export your photographs (from Lightroom, Photoshop, cameras, or phones).
2. Give them descriptive filenames (e.g. `hackathon-sprint-01.jpg`, `whiteboard-consensus.png`, `founders-stage.webp`).
3. Move or copy the files directly into `src/assets/museum-archive/`.
4. Refresh your browser or visit `/museum`. The new photographs will immediately appear integrated across the 3D curved panoramic landscape.

You can add **10, 50, 100, or more** photographs without writing a single line of React code.

---

## 6. Image Size Recommendations

- **Recommended Resolution:** 1600px to 2400px on the longest edge.
- **Recommended File Size:** 300KB to 2.5MB per image.
- **Color Profile:** sRGB for accurate color rendering on web displays.
- **Aspect Ratios:** All aspect ratios (16:9, 4:3, 3:2, 1:1, 4:5, 9:16) are automatically accommodated by the dynamic framing system.

---

## 7. How to Replace or Remove Photographs

- **To Replace an Image:** Overwrite the file in `src/assets/museum-archive/` with the updated photo of the same name, or delete the old file and add the new one.
- **To Remove an Image:** Delete the file from `src/assets/museum-archive/`. The panoramic layout will automatically recalculate and distribute the remaining photographs evenly across the 3D ribbon.
