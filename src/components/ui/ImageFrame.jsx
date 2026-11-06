import React, { useState } from 'react';
import { getAssetById } from '../../assets/assetManifest';
import { cn } from '../../utils/cn';

/**
 * ImageFrame Component
 * 
 * Enforces manifest-backed image loading, placeholder visibility, and aspect ratio preservation.
 */
export function ImageFrame({
  assetId,
  asset,
  aspectRatio = '16/9',
  className,
  imageClassName,
  caption,
  showPlaceholderTag = true,
  hoverZoom = true,
  priority = false,
  ...props
}) {
  const [hasError, setHasError] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);

  // Resolve asset via manifest or prop
  const currentAsset = asset || (assetId ? getAssetById(assetId) : null);

  const isPlaceholder = currentAsset ? !!currentAsset.isPlaceholder || hasError : false;
  const imageSrc = currentAsset
    ? hasError
      ? currentAsset.placeholder || '/assets/placeholders/placeholder-landscape.svg'
      : currentAsset.resolvedSrc || currentAsset.image
    : '/assets/placeholders/placeholder-landscape.svg';

  const altText = currentAsset?.title || 'Trojans Collective Photographic Exhibit';

  const ratioClassMap = {
    '16/9': 'aspect-video',
    '4/5': 'aspect-[4/5]',
    '1/1': 'aspect-square',
    '21/9': 'aspect-[21/9]',
    '4/3': 'aspect-[4/3]',
  };

  return (
    <figure className={cn('group relative overflow-hidden bg-obsidian-surface border border-obsidian-border rounded-md', className)}>
      <div className={cn('relative w-full overflow-hidden', ratioClassMap[aspectRatio] || 'aspect-video')}>
        {/* Subtle Loading Skeleton */}
        {!isLoaded && !hasError && (
          <div className="absolute inset-0 animate-pulse bg-obsidian-card" />
        )}

        {/* Real / Placeholder Image */}
        <img
          src={imageSrc}
          alt={altText}
          loading={priority ? 'eager' : 'lazy'}
          decoding="async"
          onLoad={() => setIsLoaded(true)}
          onError={() => {
            setHasError(true);
            setIsLoaded(true);
          }}
          className={cn(
            'w-full h-full object-cover transition-all duration-500 ease-out',
            hoverZoom ? 'group-hover:scale-105' : '',
            !isLoaded ? 'opacity-0' : 'opacity-100',
            imageClassName
          )}
          {...props}
        />

        {/* Vignette & Contrast Overlay */}
        <div className="absolute inset-0 pointer-events-none bg-gradient-to-t from-obsidian/80 via-transparent to-transparent opacity-60 group-hover:opacity-40 transition-opacity duration-300" />

        {/* Placeholder Status Badge (Visible when authentic image is pending) */}
        {isPlaceholder && showPlaceholderTag && (
          <div className="absolute top-3 left-3 z-10">
            <span className="inline-flex items-center gap-1.5 px-2 py-0.5 rounded-xs bg-obsidian/90 border border-lime/30 text-lime font-mono text-[9px] tracking-wider uppercase backdrop-blur-sm">
              <span className="w-1 h-1 rounded-full bg-lime animate-ping" />
              PENDING PHOTOGRAPHY
            </span>
          </div>
        )}

        {/* Subtle Architectural Corner Markers */}
        <div className="absolute top-1 right-1 w-2 h-2 border-t border-r border-white/20 pointer-events-none" />
        <div className="absolute bottom-1 left-1 w-2 h-2 border-b border-l border-white/20 pointer-events-none" />
      </div>

      {caption && (
        <figcaption className="p-3 bg-obsidian-card border-t border-obsidian-border text-xs text-silver-muted font-sans flex items-center justify-between">
          <span>{caption}</span>
          {currentAsset?.date && (
            <span className="font-mono text-[10px] text-silver-dark tracking-wider">
              {currentAsset.date}
            </span>
          )}
        </figcaption>
      )}
    </figure>
  );
}

export default ImageFrame;
