import { useMemo } from 'react';

/**
 * Automatically discovers all photographs placed in src/assets/museum-archive/
 * Supports .jpg, .jpeg, .png, .webp, .avif (case-insensitive)
 * Uses Vite's import.meta.glob for zero-config automatic bundling.
 */
const archiveImageModules = import.meta.glob(
  '../../assets/museum-archive/**/*.{jpg,jpeg,png,webp,avif,JPG,JPEG,PNG,WEBP,AVIF}',
  { eager: true, import: 'default' }
);

export function getDiscoveredPhotos() {
  const entries = Object.entries(archiveImageModules);

  return entries.map(([filepath, src], index) => {
    const filename = filepath.split('/').pop();
    const id = filename.replace(/\.[^/.]+$/, '');
    return {
      index,
      id,
      filename,
      src,
    };
  });
}

export function useMuseumArchive() {
  const photos = useMemo(() => getDiscoveredPhotos(), []);
  return {
    photos,
    totalPhotos: photos.length,
  };
}

export default useMuseumArchive;
