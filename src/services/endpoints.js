/**
 * TROJANS COLLECTIVE — API ENDPOINTS & FALLBACK REPOSITORY
 */
import { apiClient } from './api';
import { MEMBERS_DATA } from '../data/members';
import { PROJECTS_DATA } from '../data/projects';
import { EVENTS_DATA } from '../data/events';
import { ACHIEVEMENTS_DATA, MUSEUM_ROOMS } from '../data/milestones';

export const membersService = {
  async getAll() {
    try {
      return await apiClient('/api/members');
    } catch {
      return MEMBERS_DATA;
    }
  },
};

export const projectsService = {
  async getAll() {
    try {
      return await apiClient('/api/projects');
    } catch {
      return PROJECTS_DATA;
    }
  },
};

export const eventsService = {
  async getAll() {
    try {
      return await apiClient('/api/events');
    } catch {
      return EVENTS_DATA;
    }
  },
};

export const milestonesService = {
  async getAchievements() {
    try {
      return await apiClient('/api/achievements');
    } catch {
      return ACHIEVEMENTS_DATA;
    }
  },
  async getMuseumRooms() {
    try {
      return await apiClient('/api/museum/rooms');
    } catch {
      return MUSEUM_ROOMS;
    }
  },
};

export const joinService = {
  async submitApplication(formData) {
    try {
      return await apiClient('/api/join', {
        method: 'POST',
        body: JSON.stringify(formData),
      });
    } catch (err) {
      if (err.message === 'LOCAL_MODE_ACTIVE') {
        // Return simulated success in local mode so UI feedback works properly
        console.log('[JoinService] Local mode: Application received locally', formData);
        return { success: true, message: 'Application submitted successfully (Local Mode).' };
      }
      throw err;
    }
  },
};
