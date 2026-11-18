import React, { useMemo, useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { PhotoTile } from './PhotoTile';

export function PanoramicRibbon({
  photos = [],
  onSelectPhoto,
  rotationYRef,
  isMobile = false,
}) {
  const groupRef = useRef();

  // 5 Majestic Vertical Tiers: spans Y from -3.2 to +3.2 (Height ~ 8.5 units)
  const ROW_Y = [3.2, 1.6, 0.0, -1.6, -3.2];
  const ROWS = ROW_Y.length;
  const TOTAL_HEIGHT = 8.5;

  // Keep extra empty positions on desktop while preserving close photo spacing.
  const COLUMNS = useMemo(() => {
    return Math.max(isMobile ? 9 : 24, Math.ceil(photos.length / ROWS));
  }, [photos.length, ROWS, isMobile]);

  // The desktop radius stays wide while the denser columns keep photos close together.
  const RADIUS = useMemo(() => {
    const targetChord = 2.65;
    const halfAngle = Math.PI / COLUMNS;
    return targetChord / (2 * Math.sin(halfAngle));
  }, [COLUMNS]);

  // Map each photo 1:1 into the cylindrical globe grid
  const tiles = useMemo(() => {
    if (!photos || photos.length === 0) return [];

    const result = [];
    const angleStep = (Math.PI * 2) / COLUMNS;
    const occupiedColumns = Math.ceil(photos.length / ROWS);
    const firstColumnAngle = -((occupiedColumns - 1) * angleStep) / 2;
    let photoIdx = 0;

    for (let c = 0; c < COLUMNS; c++) {
      const theta = firstColumnAngle + c * angleStep;
      // Cylinder centered at (0, 0, 0)
      const x = RADIUS * Math.sin(theta);
      const z = RADIUS * Math.cos(theta);

      for (let r = 0; r < ROWS; r++) {
        const y = ROW_Y[r];
        const currentPhoto = photoIdx < photos.length ? photos[photoIdx] : null;

        result.push({
          key: `tile-c${c}-r${r}-${currentPhoto ? currentPhoto.id : 'empty'}`,
          photo: currentPhoto,
          position: [x, y, z],
          rotation: [0, theta, 0],
        });

        photoIdx++;
      }
    }

    return result;
  }, [photos, COLUMNS, ROWS, RADIUS]);

  // Update Y-axis rotation in R3F render loop around (0, 0, 0)
  useFrame(() => {
    if (groupRef.current && rotationYRef.current !== undefined) {
      groupRef.current.rotation.y = rotationYRef.current;
    }
  });

  return (
    <group ref={groupRef} position={[0, 0, 0]}>
      {/* ------------------------------------------------------------- */}
      {/* SOLID OPAQUE OBSIDIAN GLOBE CORE                              */}
      {/* Occludes the back hemisphere so it revolves like a true globe */}
      {/* ------------------------------------------------------------- */}
      <mesh position={[0, 0, 0]}>
        <cylinderGeometry
          args={[RADIUS - 0.05, RADIUS - 0.05, TOTAL_HEIGHT, 64, 1, false]}
        />
        <meshBasicMaterial color="#07090b" side={0} />
      </mesh>

      {/* Top Cap */}
      <mesh position={[0, TOTAL_HEIGHT / 2, 0]} rotation={[-Math.PI / 2, 0, 0]}>
        <circleGeometry args={[RADIUS - 0.05, 64]} />
        <meshBasicMaterial color="#07090b" side={0} />
      </mesh>

      {/* Bottom Cap */}
      <mesh position={[0, -TOTAL_HEIGHT / 2, 0]} rotation={[Math.PI / 2, 0, 0]}>
        <circleGeometry args={[RADIUS - 0.05, 64]} />
        <meshBasicMaterial color="#07090b" side={0} />
      </mesh>

      {/* Top luminous boundary rim */}
      <mesh position={[0, TOTAL_HEIGHT / 2 + 0.02, 0]} rotation={[Math.PI / 2, 0, 0]}>
        <ringGeometry args={[RADIUS - 0.1, RADIUS + 0.06, 64]} />
        <meshBasicMaterial color="#d4ff00" transparent opacity={0.35} side={0} />
      </mesh>

      {/* Bottom luminous boundary rim */}
      <mesh position={[0, -TOTAL_HEIGHT / 2 - 0.02, 0]} rotation={[Math.PI / 2, 0, 0]}>
        <ringGeometry args={[RADIUS - 0.1, RADIUS + 0.06, 64]} />
        <meshBasicMaterial color="#ffffff" transparent opacity={0.18} side={0} />
      </mesh>

      {/* ------------------------------------------------------------- */}
      {/* UNIQUE PHOTOGRAPHS (1:1 MAPPING, 0% DISTORTION)               */}
      {/* ------------------------------------------------------------- */}
      {tiles.map((tile) => tile.photo && (
        <PhotoTile
          key={tile.key}
          photo={tile.photo}
          position={tile.position}
          rotation={tile.rotation}
          baseWidth={2.1}
          baseHeight={1.35}
          onSelect={onSelectPhoto}
        />
      ))}
    </group>
  );
}

export default PanoramicRibbon;
