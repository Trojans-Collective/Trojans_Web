/**
 * FEATURE MODULE: TIMELINE UNIVERSE — VIRTUAL MUSEUM
 * 
 * Scope: Playable 3D virtual museum with character explorer, physics, and interactive exhibits.
 * Key Specifications:
 * - 3rd-person avatar with WASD keyboard locomotion and smooth damping
 * - Orbit camera with mouse yaw/pitch and collision occluder
 * - Rapier physics integration for room walls and exhibit plinths
 * - 5 Architectural Rooms:
 *     1. The Origins
 *     2. The People
 *     3. The Builders
 *     4. The Arena
 *     5. The Collective
 * - Exhibit raycasting: Press [F] to inspect, [ESC] to close
 * - Guided-Tour alternative for mobile and low-performance devices
 */

export const VIRTUAL_MUSEUM_CONFIG = {
  playerSpeed: 6.5,
  cameraDistance: 5.0,
  cameraHeight: 2.2,
  roomsCount: 5,
  inspectKey: 'KeyF',
  exitKey: 'Escape',
  lighting: {
    ambient: 0.35,
    trackLightsIntensity: 2.2,
    accentGlow: '#D4FF00',
  },
};

export default {
  name: 'VirtualMuseum',
  version: '1.0.0-phase1',
};
