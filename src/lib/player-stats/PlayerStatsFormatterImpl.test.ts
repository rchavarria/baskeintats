import { describe, it, expect } from 'vitest';
import { PlayerStatsFormatterImpl } from './PlayerStatsFormatterImpl';
import type { PlayerStats } from '../../model/PlayerSchema';

describe('PlayerStatsFormatterImpl', () => {
  describe('hasStats()', () => {
    it('should return false when time === 0 AND points === 0', () => {
      const stats: PlayerStats = {
        time: 0,
        fieldGoals: 0,
        threePointers: 0,
        freeThrows: { made: 0, attempted: 0 },
        faults: 0,
        plusMinus: 0,
        efficiency: 0,
      };
      const formatter = new PlayerStatsFormatterImpl(stats);
      expect(formatter.hasStats()).toBe(false);
    });

    it('should return true when time > 0 AND points === 0 (bad game)', () => {
      const stats: PlayerStats = {
        time: 120,
        fieldGoals: 0,
        threePointers: 0,
        freeThrows: { made: 0, attempted: 0 },
        faults: 0,
        plusMinus: 0,
        efficiency: 0,
      };
      const formatter = new PlayerStatsFormatterImpl(stats);
      expect(formatter.hasStats()).toBe(true);
    });

    it('should return true when time === 0 AND points > 0 (impossible, but true)', () => {
      const stats: PlayerStats = {
        time: 0,
        fieldGoals: 5,
        threePointers: 2,
        freeThrows: { made: 2, attempted: 3 },
        faults: 0,
        plusMinus: 0,
        efficiency: 0,
      };
      const formatter = new PlayerStatsFormatterImpl(stats);
      expect(formatter.hasStats()).toBe(true);
    });

    it('should return true when time > 0 AND points > 0', () => {
      const stats: PlayerStats = {
        time: 1200,
        fieldGoals: 8,
        threePointers: 3,
        freeThrows: { made: 2, attempted: 3 },
        faults: 2,
        plusMinus: 5,
        efficiency: 15,
      };
      const formatter = new PlayerStatsFormatterImpl(stats);
      expect(formatter.hasStats()).toBe(true);
    });
  });

  describe('kind()', () => {
    it('should return "basic"', () => {
      const stats: PlayerStats = {
        time: 1200,
        fieldGoals: 8,
        threePointers: 3,
        freeThrows: { made: 2, attempted: 3 },
        faults: 2,
        plusMinus: 5,
        efficiency: 15,
      };
      const formatter = new PlayerStatsFormatterImpl(stats);
      expect(formatter.kind()).toBe('basic');
    });
  });

  describe('formatPlayedTime()', () => {
    it('should format seconds to MM:SS', () => {
      const stats: PlayerStats = {
        time: 754, // 12:34
        fieldGoals: 0,
        threePointers: 0,
        freeThrows: { made: 0, attempted: 0 },
        faults: 0,
        plusMinus: 0,
        efficiency: 0,
      };
      const formatter = new PlayerStatsFormatterImpl(stats);
      expect(formatter.formatPlayedTime()).toBe('12:34');
    });

    it('should pad with zeros', () => {
      const stats: PlayerStats = {
        time: 65, // 01:05
        fieldGoals: 0,
        threePointers: 0,
        freeThrows: { made: 0, attempted: 0 },
        faults: 0,
        plusMinus: 0,
        efficiency: 0,
      };
      const formatter = new PlayerStatsFormatterImpl(stats);
      expect(formatter.formatPlayedTime()).toBe('01:05');
    });
  });

  describe('formatPoints()', () => {
    it('should calculate total points: 3*threePointers + 2*fieldGoals + freeThrows', () => {
      const stats: PlayerStats = {
        time: 0,
        fieldGoals: 8, // 5 dobles + 3 triples
        threePointers: 3,
        freeThrows: { made: 2, attempted: 3 },
        faults: 0,
        plusMinus: 0,
        efficiency: 0,
      };
      // Points: 3*3 + 2*5 + 2 = 9 + 10 + 2 = 21
      const formatter = new PlayerStatsFormatterImpl(stats);
      expect(formatter.formatPoints()).toBe('21');
    });
  });

  describe('formatFieldGoals()', () => {
    it('should return number as string (basic format)', () => {
      const stats: PlayerStats = {
        time: 0,
        fieldGoals: 8,
        threePointers: 0,
        freeThrows: { made: 0, attempted: 0 },
        faults: 0,
        plusMinus: 0,
        efficiency: 0,
      };
      const formatter = new PlayerStatsFormatterImpl(stats);
      expect(formatter.formatFieldGoals()).toBe('8');
    });
  });

  describe('formatThreePointers()', () => {
    it('should return number as string (basic format)', () => {
      const stats: PlayerStats = {
        time: 0,
        fieldGoals: 0,
        threePointers: 3,
        freeThrows: { made: 0, attempted: 0 },
        faults: 0,
        plusMinus: 0,
        efficiency: 0,
      };
      const formatter = new PlayerStatsFormatterImpl(stats);
      expect(formatter.formatThreePointers()).toBe('3');
    });
  });

  describe('formatFreeThrows()', () => {
    it('should return "made/attempted (percentage%)"', () => {
      const stats: PlayerStats = {
        time: 0,
        fieldGoals: 0,
        threePointers: 0,
        freeThrows: { made: 4, attempted: 5 },
        faults: 0,
        plusMinus: 0,
        efficiency: 0,
      };
      const formatter = new PlayerStatsFormatterImpl(stats);
      expect(formatter.formatFreeThrows()).toBe('4/5 (80%)');
    });

    it('should handle division by zero', () => {
      const stats: PlayerStats = {
        time: 0,
        fieldGoals: 0,
        threePointers: 0,
        freeThrows: { made: 0, attempted: 0 },
        faults: 0,
        plusMinus: 0,
        efficiency: 0,
      };
      const formatter = new PlayerStatsFormatterImpl(stats);
      expect(formatter.formatFreeThrows()).toBe('0/0 (0%)');
    });
  });

  describe('formatFaults()', () => {
    it('should return number as string (basic: simple number)', () => {
      const stats: PlayerStats = {
        time: 0,
        fieldGoals: 0,
        threePointers: 0,
        freeThrows: { made: 0, attempted: 0 },
        faults: 2,
        plusMinus: 0,
        efficiency: 0,
      };
      const formatter = new PlayerStatsFormatterImpl(stats);
      expect(formatter.formatFaults()).toBe('2');
    });
  });

  describe('formatPlusMinus()', () => {
    it('should return "+X" for positive values', () => {
      const stats: PlayerStats = {
        time: 0,
        fieldGoals: 0,
        threePointers: 0,
        freeThrows: { made: 0, attempted: 0 },
        faults: 0,
        plusMinus: 5,
        efficiency: 0,
      };
      const formatter = new PlayerStatsFormatterImpl(stats);
      expect(formatter.formatPlusMinus()).toBe('+5');
    });

    it('should return "-X" for negative values', () => {
      const stats: PlayerStats = {
        time: 0,
        fieldGoals: 0,
        threePointers: 0,
        freeThrows: { made: 0, attempted: 0 },
        faults: 0,
        plusMinus: -3,
        efficiency: 0,
      };
      const formatter = new PlayerStatsFormatterImpl(stats);
      expect(formatter.formatPlusMinus()).toBe('-3');
    });

    it('should return "0" for zero', () => {
      const stats: PlayerStats = {
        time: 0,
        fieldGoals: 0,
        threePointers: 0,
        freeThrows: { made: 0, attempted: 0 },
        faults: 0,
        plusMinus: 0,
        efficiency: 0,
      };
      const formatter = new PlayerStatsFormatterImpl(stats);
      expect(formatter.formatPlusMinus()).toBe('0');
    });
  });

  describe('formatEfficiency()', () => {
    it('should return efficiency as string', () => {
      const stats: PlayerStats = {
        time: 0,
        fieldGoals: 0,
        threePointers: 0,
        freeThrows: { made: 0, attempted: 0 },
        faults: 0,
        plusMinus: 0,
        efficiency: 15,
      };
      const formatter = new PlayerStatsFormatterImpl(stats);
      expect(formatter.formatEfficiency()).toBe('15');
    });
  });
});

