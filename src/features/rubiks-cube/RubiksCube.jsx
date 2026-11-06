import React, { Suspense, useEffect, useMemo, useRef, useState } from 'react';
import { Canvas, useFrame, useLoader, useThree } from '@react-three/fiber';
import { CanvasTexture, LinearFilter, SRGBColorSpace, TextureLoader } from 'three';
import { Link } from 'react-router-dom';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import { getAssetById } from '../../assets/assetManifest';
import { MemoryViewerModal } from '../floating-memories/MemoryViewerModal';
import { useReducedMotion } from '../../hooks/useReducedMotion';

const CUBE_PHOTOS = [
  'founders-group-primary',
  'culture-late-night-build',
  'culture-whiteboard-arch',
  'event-code-sprint-flagship',
  'event-tech-bytes-live',
  'event-hackathon-war-room',
].map((id) => getAssetById(id));

const CUBE_FACES = [
  {
    photo: 0,
    position: [1, 0, 0],
    rotation: [0, Math.PI / 2, 0],
    tile: (x, y, z) => [1 - z, 1 - y],
  },
  {
    photo: 1,
    position: [-1, 0, 0],
    rotation: [0, -Math.PI / 2, 0],
    tile: (x, y, z) => [z + 1, 1 - y],
  },
  {
    photo: 2,
    position: [0, 1, 0],
    rotation: [-Math.PI / 2, 0, 0],
    tile: (x, y, z) => [x + 1, z + 1],
  },
  {
    photo: 3,
    position: [0, -1, 0],
    rotation: [Math.PI / 2, 0, 0],
    tile: (x, y, z) => [x + 1, 1 - z],
  },
  {
    photo: 4,
    position: [0, 0, 1],
    rotation: [0, 0, 0],
    tile: (x, y) => [x + 1, 1 - y],
  },
  {
    photo: 5,
    position: [0, 0, -1],
    rotation: [0, Math.PI, 0],
    tile: (x, y) => [1 - x, 1 - y],
  },
];

function usePhotoTiles() {
  const sourceTextures = useLoader(TextureLoader, CUBE_PHOTOS.map((photo) => photo.image));
  const disposeTimer = useRef(null);
  const faceTextures = useMemo(() => sourceTextures.map((source) => {
    const image = source.image;
    const side = Math.min(image.width, image.height);
    const canvas = document.createElement('canvas');
    canvas.width = 768;
    canvas.height = 768;
    const context = canvas.getContext('2d');
    if (!context) throw new Error('Unable to create a canvas context for a Rubik cube photograph.');
    context.drawImage(
      image,
      (image.width - side) / 2,
      (image.height - side) / 2,
      side,
      side,
      0,
      0,
      canvas.width,
      canvas.height
    );
    const texture = new CanvasTexture(canvas);
    texture.colorSpace = SRGBColorSpace;
    texture.minFilter = LinearFilter;
    texture.magFilter = LinearFilter;
    texture.generateMipmaps = false;
    return texture;
  }), [sourceTextures]);

  useEffect(() => {
    window.clearTimeout(disposeTimer.current);
    return () => {
      disposeTimer.current = window.setTimeout(
        () => faceTextures.forEach((texture) => texture.dispose()),
        0
      );
    };
  }, [faceTextures]);

  return faceTextures;
}

function PhotoTile({ texture, column, row, memory, onSelect, onHover }) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <mesh
      position={[0, 0, 0.474]}
      onPointerOver={(event) => {
        event.stopPropagation();
        setIsHovered(true);
        onHover(true);
      }}
      onPointerOut={() => {
        setIsHovered(false);
        onHover(false);
      }}
      onClick={(event) => {
        event.stopPropagation();
        if (event.delta > 5) return;
        onSelect(memory);
      }}
    >
      <planeGeometry
        args={[0.84, 0.84]}
        onUpdate={(geometry) => {
          const uv = geometry.attributes.uv;
          for (let index = 0; index < uv.count; index += 1) {
            const u = index % 2;
            const v = index < 2 ? 1 : 0;
            uv.setXY(index, (column + u) / 3, (2 - row + v) / 3);
          }
          uv.needsUpdate = true;
        }}
      />
      <meshBasicMaterial
        map={texture || null}
        color={isHovered && texture ? '#f1ffb8' : texture ? '#ffffff' : '#363b3e'}
        toneMapped={false}
      />
    </mesh>
  );
}

function Cubie({ x, y, z, tileTextures, onSelect, onHover }) {
  return (
    <group position={[x, y, z]}>
      <mesh>
        <boxGeometry args={[0.94, 0.94, 0.94]} />
        <meshStandardMaterial color="#111416" roughness={0.3} metalness={0.5} />
      </mesh>
      {CUBE_FACES.map((face, faceIndex) => {
        const [column, row] = face.tile(x, y, z);
        const isOnFace = (
          (faceIndex === 0 && x === 1)
          || (faceIndex === 1 && x === -1)
          || (faceIndex === 2 && y === 1)
          || (faceIndex === 3 && y === -1)
          || (faceIndex === 4 && z === 1)
          || (faceIndex === 5 && z === -1)
        );
        if (!isOnFace) return null;

        return (
          <group key={faceIndex} position={face.position.map((value) => value * 0.475)} rotation={face.rotation}>
            <PhotoTile
              texture={tileTextures[face.photo]}
              column={column}
              row={row}
              memory={CUBE_PHOTOS[face.photo]}
              onSelect={onSelect}
              onHover={onHover}
            />
          </group>
        );
      })}
    </group>
  );
}

function CubeScene({ onSelect, onHover, rotationRequest, isReducedMotion }) {
  const groupRef = useRef(null);
  const drag = useRef({ active: false, lastX: 0, lastY: 0, velocityX: 0, velocityY: 0 });
  const targetRotation = useRef({ x: -0.42, y: 0.58 });
  const tileTextures = usePhotoTiles();
  const { invalidate } = useThree();

  useEffect(() => {
    if (!rotationRequest.id) return;
    if (rotationRequest.direction === 'reset') {
      targetRotation.current = { x: -0.42, y: 0.58 };
    } else {
      targetRotation.current.y += rotationRequest.direction * 0.65;
    }
    invalidate();
  }, [rotationRequest, invalidate]);

  useFrame((_, delta) => {
    const group = groupRef.current;
    if (!group) return;

    if (!drag.current.active) {
      targetRotation.current.x += drag.current.velocityY * delta;
      targetRotation.current.y += drag.current.velocityX * delta;
      const damping = Math.exp(-4.2 * delta);
      drag.current.velocityX *= damping;
      drag.current.velocityY *= damping;
      if (Math.abs(drag.current.velocityX) < 0.002) drag.current.velocityX = 0;
      if (Math.abs(drag.current.velocityY) < 0.002) drag.current.velocityY = 0;
    }

    const easing = isReducedMotion ? 1 : Math.min(1, delta * 12);
    group.rotation.x += (targetRotation.current.x - group.rotation.x) * easing;
    group.rotation.y += (targetRotation.current.y - group.rotation.y) * easing;

    const isSettling = Math.abs(targetRotation.current.x - group.rotation.x) > 0.001
      || Math.abs(targetRotation.current.y - group.rotation.y) > 0.001
      || drag.current.velocityX !== 0
      || drag.current.velocityY !== 0;
    if (isSettling) invalidate();
  });

  const startDrag = (event) => {
    if (event.nativeEvent.button !== 0) return;
    drag.current.active = true;
    drag.current.lastX = event.clientX;
    drag.current.lastY = event.clientY;
    drag.current.velocityX = 0;
    drag.current.velocityY = 0;
    event.target.setPointerCapture(event.pointerId);
  };

  const moveDrag = (event) => {
    if (!drag.current.active) return;
    const dx = event.clientX - drag.current.lastX;
    const dy = event.clientY - drag.current.lastY;
    drag.current.lastX = event.clientX;
    drag.current.lastY = event.clientY;
    drag.current.velocityX = dx * 0.012 * 3;
    drag.current.velocityY = Math.max(-0.02, Math.min(0.02, dy * 0.012 * 3));
    targetRotation.current.y += dx * 0.012;
    targetRotation.current.x = Math.max(-1.35, Math.min(1.35, targetRotation.current.x + dy * 0.012));
    invalidate();
  };

  const stopDrag = (event) => {
    if (!drag.current.active) return;
    drag.current.active = false;
    if (isReducedMotion) {
      drag.current.velocityX = 0;
      drag.current.velocityY = 0;
    }
    if (event.target.hasPointerCapture(event.pointerId)) {
      event.target.releasePointerCapture(event.pointerId);
    }
    invalidate();
  };

  const cubies = useMemo(
    () => Array.from({ length: 27 }, (_, index) => {
      const x = (index % 3) - 1;
      const y = 1 - Math.floor(index / 3) % 3;
      const z = Math.floor(index / 9) - 1;
      return { key: `${x}-${y}-${z}`, x, y, z };
    }),
    []
  );

  return (
    <>
      <ambientLight intensity={0.3} />
      <directionalLight position={[4, 6, 5]} intensity={1.2} color="#f4f3ed" />
      <pointLight position={[-4, -2, 3]} intensity={0.25} color="#d4ff00" />
      <pointLight position={[3, 1, -4]} intensity={0.4} color="#aeb8c2" />
      <mesh
        position={[0, 0, -3]}
        onPointerDown={startDrag}
        onPointerMove={moveDrag}
        onPointerUp={stopDrag}
        onPointerCancel={stopDrag}
        onPointerOver={() => onHover(false)}
      >
        <planeGeometry args={[14, 14]} />
        <meshBasicMaterial transparent opacity={0} colorWrite={false} depthWrite={false} />
      </mesh>
      <group ref={groupRef} scale={0.84}>
        {cubies.map(({ key, ...cubie }) => (
          <Cubie
            key={key}
            {...cubie}
            tileTextures={tileTextures}
            onSelect={onSelect}
            onHover={onHover}
          />
        ))}
      </group>
    </>
  );
}

function PhotographFallback({ onSelect }) {
  return (
    <div className="grid grid-cols-2 md:grid-cols-3 gap-3 p-4 sm:p-8">
      {CUBE_PHOTOS.map((photo) => (
        <button
          key={photo.id}
          type="button"
          onClick={() => onSelect(photo)}
          className="group overflow-hidden text-left focus-visible:outline focus-visible:outline-2 focus-visible:outline-lime"
        >
          <img
            src={photo.image}
            alt={photo.title}
            loading="lazy"
            decoding="async"
            className="aspect-square w-full object-cover transition-transform duration-500 group-hover:scale-105"
          />
          <span className="mt-2 block text-sm text-silver-bright">{photo.title}</span>
        </button>
      ))}
    </div>
  );
}

export function RubiksCube() {
  const sectionRef = useRef(null);
  const [isNearViewport, setIsNearViewport] = useState(false);
  const [selectedMemory, setSelectedMemory] = useState(null);
  const [isTileHovered, setIsTileHovered] = useState(false);
  const [rotationRequest, setRotationRequest] = useState({ id: 0, direction: 0 });
  const isReducedMotion = useReducedMotion();

  useEffect(() => {
    const section = sectionRef.current;
    if (!section || !('IntersectionObserver' in window)) {
      setIsNearViewport(true);
      return undefined;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsNearViewport(true);
          observer.disconnect();
        }
      },
      { rootMargin: '200px' }
    );
    observer.observe(section);
    return () => observer.disconnect();
  }, []);

  const requestRotation = (direction) => {
    setRotationRequest((request) => ({ id: request.id + 1, direction }));
  };

  return (
    <section ref={sectionRef} className="relative overflow-hidden border-y border-white/5 bg-[#070809] py-20 sm:py-28">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_50%_45%,rgba(212,255,0,0.07),transparent_58%)]" />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-5 text-center">
          <h2 className="font-display text-3xl font-semibold tracking-tight text-silver-bright sm:text-5xl">
            Every piece holds a memory.
          </h2>
          <p className="mt-3 text-sm text-silver-muted sm:text-base">One collective. Countless moments.</p>
        </div>

        <div className="relative mx-auto h-[360px] max-w-4xl sm:h-[500px]" style={{ touchAction: 'none' }}>
          {isNearViewport ? (
            <Canvas
              camera={{ position: [0, 0, 8.5], fov: 36 }}
              dpr={[1, 1.35]}
              frameloop="demand"
              gl={{ antialias: true, alpha: true, powerPreference: 'low-power' }}
              className="!touch-none"
              onCreated={({ gl }) => {
                gl.domElement.style.touchAction = 'none';
              }}
              aria-label="Interactive photographic Rubik's cube. Drag to rotate and select a tile to view its photograph."
              fallback={<PhotographFallback onSelect={setSelectedMemory} />}
            >
              <Suspense fallback={null}>
                <CubeScene
                  onSelect={setSelectedMemory}
                  onHover={setIsTileHovered}
                  rotationRequest={rotationRequest}
                  isReducedMotion={isReducedMotion}
                />
              </Suspense>
            </Canvas>
          ) : (
            <div className="absolute inset-0 flex items-center justify-center text-sm text-silver-dark" aria-hidden="true">
              Photographic cube
            </div>
          )}
          <span className="pointer-events-none absolute left-1/2 top-4 -translate-x-1/2 text-xs text-silver-dark">
            {isTileHovered ? 'Select a photograph' : 'Drag to turn'}
          </span>
        </div>

        <div className="flex items-center justify-center gap-5">
          <button
            type="button"
            onClick={() => requestRotation(-1)}
            className="rounded-full p-3 text-silver-muted transition-colors hover:text-lime focus-visible:outline focus-visible:outline-2 focus-visible:outline-lime"
            aria-label="Rotate cube left"
          >
            <ArrowLeft className="h-5 w-5" />
          </button>
          <button
            type="button"
            onClick={() => requestRotation('reset')}
            className="text-xs text-silver-dark transition-colors hover:text-silver focus-visible:outline focus-visible:outline-2 focus-visible:outline-lime"
          >
            Reset view
          </button>
          <button
            type="button"
            onClick={() => requestRotation(1)}
            className="rounded-full p-3 text-silver-muted transition-colors hover:text-lime focus-visible:outline focus-visible:outline-2 focus-visible:outline-lime"
            aria-label="Rotate cube right"
          >
            <ArrowRight className="h-5 w-5" />
          </button>
        </div>

        <div className="mt-4 text-center">
          <Link className="text-sm text-silver-muted underline decoration-white/20 underline-offset-4 hover:text-lime" to="/memories">
            Browse all photographs
          </Link>
        </div>
      </div>

      <MemoryViewerModal
        isOpen={!!selectedMemory}
        memory={selectedMemory}
        onClose={() => setSelectedMemory(null)}
        onNext={() => {}}
        onPrev={() => {}}
        hasMultiple={false}
      />
    </section>
  );
}

export default RubiksCube;
