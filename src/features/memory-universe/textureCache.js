import { TextureLoader, SRGBColorSpace, LinearMipmapLinearFilter } from 'three';

const loader = new TextureLoader();
const cache = new Map();

/**
 * Returns a high-clarity Three.js texture for a photo URL.
 * Automatically resolves image naturalWidth & naturalHeight for distortion-free aspect ratio.
 */
export function getCachedAspect(src) {
  if (!src || !cache.has(src)) return null;
  return cache.get(src).aspect;
}

export function getPhotoTexture(src, onLoaded) {
  if (!src) return null;

  if (cache.has(src)) {
    const entry = cache.get(src);
    if (onLoaded && entry.aspect) {
      onLoaded(entry.texture, entry.aspect);
    }
    return entry.texture;
  }

  const texture = loader.load(
    src,
    (loadedTex) => {
      loadedTex.colorSpace = SRGBColorSpace;
      loadedTex.generateMipmaps = true;
      loadedTex.minFilter = LinearMipmapLinearFilter;
      loadedTex.needsUpdate = true;

      const img = loadedTex.image;
      const naturalW = img ? img.naturalWidth || img.width : 0;
      const naturalH = img ? img.naturalHeight || img.height : 0;
      const aspect = naturalW && naturalH ? naturalW / naturalH : 16 / 9;

      const entry = cache.get(src);
      if (entry) {
        entry.aspect = aspect;
      }

      if (onLoaded) {
        onLoaded(loadedTex, aspect);
      }
    },
    undefined,
    (err) => {
      console.warn(`[TextureCache] Failed to load texture for ${src}:`, err);
    }
  );

  texture.colorSpace = SRGBColorSpace;
  cache.set(src, { texture, aspect: null });
  return texture;
}

export function disposeTextureCache() {
  cache.forEach((entry) => {
    try {
      if (entry.texture) entry.texture.dispose();
    } catch {
      // ignore
    }
  });
  cache.clear();
}
