import { describe, it, expect } from 'vitest';
import { getPlayerStatsVariant } from './getPlayerStatsVariant';
import type { PlayerStats, AdvancedPlayerStats } from '../../model/PlayerSchema';

const emptyBasicStats: PlayerStats = {
  time: 0,
  fieldGoals: 0,
  threePointers: 0,
  freeThrows: { made: 0, attempted: 0 },
  faults: 0,
  plusMinus: 0,
  efficiency: 0,
};

const emptyAdvancedStats: AdvancedPlayerStats = {
  time: 0,
  fieldGoals: { made: 0, attempted: 0 },
  threePointers: { made: 0, attempted: 0 },
  freeThrows: { made: 0, attempted: 0 },
  rebounds: { offensive: 0, defensive: 0 },
  assists: 0,
  steals: 0,
  turnovers: 0,
  blocks: { made: 0, received: 0 },
  faults: { made: 0, received: 0 },
  plusMinus: 0,
  efficiency: 0,
};

describe('getPlayerStatsVariant', () => {
  describe("variant 'none'", () => {
    it('returns none for PlayerStats with time=0 and points=0', () => {
      const result = getPlayerStatsVariant(emptyBasicStats);
      expect(result.kind).toBe('none');
    });

    it('returns none for AdvancedPlayerStats with time=0 and points=0', () => {
      const result = getPlayerStatsVariant(emptyAdvancedStats);
      expect(result.kind).toBe('none');
    });
  });

  describe("variant 'basic'", () => {
    it('returns basic when fieldGoals is a number', () => {
      const stats: PlayerStats = {
        ...emptyBasicStats,
        time: 900,
        fieldGoals: 4,
        threePointers: 1,
      };
      const result = getPlayerStatsVariant(stats);
      expect(result.kind).toBe('basic');
    });

    it('returns basic (not none) when time > 0 and points === 0 (bad game)', () => {
      const stats: PlayerStats = { ...emptyBasicStats, time: 600 };
      const result = getPlayerStatsVariant(stats);
      expect(result.kind).toBe('basic');
    });

    it('typed narrowing: result.stats is PlayerStats when kind is basic', () => {
      const stats: PlayerStats = { ...emptyBasicStats, time: 900, fieldGoals: 3, threePointers: 1 };
      const result = getPlayerStatsVariant(stats);
      if (result.kind === 'basic') {
        // TypeScript should narrow result.stats to PlayerStats here
        expect(typeof result.stats.fieldGoals).toBe('number');
      } else {
        throw new Error('Expected basic variant');
      }
    });
  });

  describe("variant 'advanced'", () => {
    it('returns advanced when fieldGoals is an object', () => {
      const stats: AdvancedPlayerStats = {
        ...emptyAdvancedStats,
        time: 1200,
        fieldGoals: { made: 5, attempted: 10 },
        threePointers: { made: 2, attempted: 6 },
        freeThrows: { made: 1, attempted: 2 },
      };
      const result = getPlayerStatsVariant(stats);
      expect(result.kind).toBe('advanced');
    });

    it('typed narrowing: result.stats is AdvancedPlayerStats when kind is advanced', () => {
      const stats: AdvancedPlayerStats = {
        ...emptyAdvancedStats,
        time: 600,
        fieldGoals: { made: 2, attempted: 5 },
        threePointers: { made: 1, attempted: 3 },
      };
      const result = getPlayerStatsVariant(stats);
      if (result.kind === 'advanced') {
        expect(typeof result.stats.fieldGoals).toBe('object');
      } else {
        throw new Error('Expected advanced variant');
      }
    });
  });
});

