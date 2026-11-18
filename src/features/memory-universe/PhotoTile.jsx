import React, { useRef, useState, useEffect } from 'react';
import { useFrame } from '@react-three/fiber';
import { getPhotoTexture, getCachedAspect } from './textureCache';

export function PhotoTile({
  photo,
  isEmblem = false,
  position,
  rotation,
  baseWidth = 2.1,
  baseHeight = 1.35,
  onSelect,
}) {
  const innerRef = useRef();
  const [hovered, setHovered] = useState(false);
  const [texture, setTexture] = useState(null);
  const [emblemTexture, setEmblemTexture] = useState(null);
  const [aspect, setAspect] = useState(() => {
    if (photo && photo.src) {
      const cached = getCachedAspect(photo.src);
      if (cached) return cached;
    }
    return 1.33;
  });

  useEffect(() => {
    if (isEmblem) {
      getPhotoTexture('/assets/brand/trojans-logo.svg', (tex) => {
        setEmblemTexture(tex);
      });
      return;
    }

    if (!photo || !photo.src) return;

    let isMounted = true;
    const tex = getPhotoTexture(photo.src, (loadedTex, resolvedAspect) => {
      if (isMounted) {
        setTexture(loadedTex);
        if (resolvedAspect && !isNaN(resolvedAspect) && resolvedAspect > 0) {
          setAspect(resolvedAspect);
        }
      }
    });

    if (tex) {
      setTexture(tex);
      const cached = getCachedAspect(photo.src);
      if (cached) {
        setAspect(cached);
      } else if (tex.image && tex.image.naturalWidth && tex.image.naturalHeight) {
        setAspect(tex.image.naturalWidth / tex.image.naturalHeight);
      }
    }

    return () => {
      isMounted = false;
    };
  }, [photo, isEmblem]);

  // Mathematical aspect ratio calculation for 0% distortion:
  // Given a bounding cell (CELL_MAX_W x CELL_MAX_H),
  // fit the image while strictly preserving width / height === aspect.
  const CELL_MAX_W = baseWidth;
  const CELL_MAX_H = baseHeight;
  const cellAspect = CELL_MAX_W / CELL_MAX_H;

  let width = CELL_MAX_W;
  let height = CELL_MAX_H;

  if (isEmblem) {
    width = CELL_MAX_W * 0.9;
    height = CELL_MAX_H * 0.9;
  } else if (aspect >= cellAspect) {
    // Landscape photo (wider than bounding slot)
    width = CELL_MAX_W;
    height = CELL_MAX_W / aspect;
  } else {
    // Portrait or near-square photo (taller than bounding slot)
    height = CELL_MAX_H;
    width = CELL_MAX_H * aspect;
  }

  // Smooth hover animation: lifts along the radial normal (local +Z) and scales up
  useFrame((_, delta) => {
    if (!innerRef.current) return;
    const targetScale = hovered ? 1.12 : 1.0;
    const targetZ = hovered ? 0.22 : 0.0;

    innerRef.current.scale.x += (targetScale - innerRef.current.scale.x) * delta * 14;
    innerRef.current.scale.y += (targetScale - innerRef.current.scale.y) * delta * 14;
    innerRef.current.scale.z += (targetScale - innerRef.current.scale.z) * delta * 14;

    innerRef.current.position.z += (targetZ - innerRef.current.position.z) * delta * 14;
  });

  return (
    <group position={position} rotation={rotation}>
      <group ref={innerRef} position={[0, 0, 0]}>
        {/* Backing Dark Frame Plate - side={0} for FrontSide culling */}
        <mesh position={[0, 0, -0.012]}>
          <planeGeometry args={[width + 0.08, height + 0.08]} />
          <meshBasicMaterial color={hovered ? '#1c2226' : '#080a0c'} side={0} />
        </mesh>

        {/* Luminous Outline: Deep obsidian resting, Electric Lime on hover */}
        <mesh position={[0, 0, -0.008]}>
          <planeGeometry args={[width + 0.04, height + 0.04]} />
          <meshBasicMaterial
            color={hovered ? '#d4ff00' : isEmblem ? '#323c40' : '#1e2528'}
            transparent
            opacity={hovered ? 1.0 : isEmblem ? 0.45 : 0.65}
            side={0}
          />
        </mesh>

        {/* Vibrant Photograph Surface (Self-illuminated, 0% distortion) */}
        <mesh
          position={[0, 0, 0]}
          onPointerOver={(e) => {
            e.stopPropagation();
            if (!isEmblem) {
              setHovered(true);
              document.body.style.cursor = 'pointer';
            }
          }}
          onPointerOut={() => {
            setHovered(false);
            document.body.style.cursor = 'auto';
          }}
          onClick={(e) => {
            e.stopPropagation();
            if (isEmblem) return;
            // R3F e.delta is the pointer movement distance in pixels
            // If e.delta <= 6, it is an intentional click, NOT a drag!
            if (e.delta !== undefined && e.delta > 6) return;
            if (onSelect && photo) {
              onSelect(photo);
            }
          }}
        >
          <planeGeometry args={[width, height]} />
          {isEmblem ? (
            <meshBasicMaterial color="#0b0e11" side={0} />
          ) : texture ? (
            <meshBasicMaterial
              map={texture}
              color={hovered ? '#ffffff' : '#f5f7f8'}
              toneMapped={false}
              side={0}
            />
          ) : (
            <meshBasicMaterial color="#1a2022" side={0} />
          )}
        </mesh>

        {/* Trojans Crest Emblem centered inside emblem tile */}
        {isEmblem && (
          <mesh position={[0, 0, 0.002]}>
            <planeGeometry args={[0.9, 0.9]} />
            {emblemTexture ? (
              <meshBasicMaterial
                map={emblemTexture}
                transparent
                opacity={0.85}
                side={0}
                toneMapped={false}
              />
            ) : (
              <meshBasicMaterial color="#d4ff00" transparent opacity={0.3} side={0} />
            )}
          </mesh>
        )}
      </group>
    </group>
  );
}

export default PhotoTile;
