/**
 * FEATURE MODULE: FLOATING MEMORIES
 * 
 * Re-exports the complete spatial photographic environment.
 */

export { FloatingMemories } from './FloatingMemories';
export { FloatingMemoriesCanvas } from './FloatingMemoriesCanvas';
export { MemoryViewerModal } from './MemoryViewerModal';

export const FLOATING_MEMORIES_CONFIG = {
  orbitRadius: 18,
  frameAspect: 16 / 9,
  depthSpread: 12,
  dampeningFactor: 0.05,
};

export default {
  name: 'FloatingMemories',
  version: '2.0.0-phase2',
};
