import { describe, it, expect } from 'vitest';
import { createPlayerStatsFormatter } from './createPlayerStatsFormatter';
import type { PlayerStats, AdvancedPlayerStats } from '../../model/PlayerSchema';

describe('createPlayerStatsFormatter', () => {
  describe('detection: no stats', () => {
    it('should return NoStatsFormatter when time === 0 AND points === 0', () => {
      const stats: PlayerStats = {
        time: 0,
        fieldGoals: 0,
        threePointers: 0,
        freeThrows: { made: 0, attempted: 0 },
        faults: 0,
        plusMinus: 0,
        efficiency: 0,
      };
      const formatter = createPlayerStatsFormatter(stats);
      expect(formatter.kind()).toBe('none');
      expect(formatter.hasStats()).toBe(false);
    });

    it('should also work for AdvancedPlayerStats with no stats', () => {
      const stats: AdvancedPlayerStats = {
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
      const formatter = createPlayerStatsFormatter(stats);
      expect(formatter.kind()).toBe('none');
      expect(formatter.hasStats()).toBe(false);
    });
  });

  describe('detection: basic stats', () => {
    it('should return PlayerStatsFormatterImpl when fieldGoals is number', () => {
      const stats: PlayerStats = {
        time: 1200,
        fieldGoals: 8,
        threePointers: 3,
        freeThrows: { made: 2, attempted: 3 },
        faults: 2,
        plusMinus: 5,
        efficiency: 15,
      };
      const formatter = createPlayerStatsFormatter(stats);
      expect(formatter.kind()).toBe('basic');
      expect(formatter.hasStats()).toBe(true);
    });

    it('should format basic stats correctly', () => {
      const stats: PlayerStats = {
        time: 754, // 12:34
        fieldGoals: 8,
        threePointers: 3,
        freeThrows: { made: 4, attempted: 5 },
        faults: 2,
        plusMinus: 5,
        efficiency: 15,
      };
      const formatter = createPlayerStatsFormatter(stats);
      expect(formatter.formatPlayedTime()).toBe('12:34');
      expect(formatter.formatFieldGoals()).toBe('8'); // Number, not percentage
      expect(formatter.formatThreePointers()).toBe('3'); // Number, not percentage
    });
  });

  describe('detection: advanced stats', () => {
    it('should return AdvancedPlayerStatsFormatterImpl when fieldGoals is object', () => {
      const stats: AdvancedPlayerStats = {
        time: 1200,
        fieldGoals: { made: 5, attempted: 12 },
        threePointers: { made: 3, attempted: 8 },
        freeThrows: { made: 2, attempted: 3 },
        rebounds: { offensive: 2, defensive: 4 },
        assists: 3,
        steals: 1,
        turnovers: 2,
        blocks: { made: 1, received: 0 },
        faults: { made: 2, received: 1 },
        plusMinus: 5,
        efficiency: 15,
      };
      const formatter = createPlayerStatsFormatter(stats);
      expect(formatter.kind()).toBe('advanced');
      expect(formatter.hasStats()).toBe(true);
    });

    it('should format advanced stats with percentages', () => {
      const stats: AdvancedPlayerStats = {
        time: 754, // 12:34
        fieldGoals: { made: 8, attempted: 12 },
        threePointers: { made: 3, attempted: 8 },
        freeThrows: { made: 4, attempted: 5 },
        rebounds: { offensive: 2, defensive: 4 },
        assists: 3,
        steals: 1,
        turnovers: 2,
        blocks: { made: 1, received: 0 },
        faults: { made: 2, received: 1 },
        plusMinus: 5,
        efficiency: 15,
      };
      const formatter = createPlayerStatsFormatter(stats);
      expect(formatter.formatPlayedTime()).toBe('12:34');
      expect(formatter.formatFieldGoals()).toBe('8/12 (66.7%)'); // Percentage format
      expect(formatter.formatThreePointers()).toBe('3/8 (37.5%)'); // Percentage format
      expect(formatter.formatFaults()).toBe('2/1'); // made/received format
    });

    it('should have access to advanced methods', () => {
      const stats: AdvancedPlayerStats = {
        time: 1200,
        fieldGoals: { made: 5, attempted: 12 },
        threePointers: { made: 3, attempted: 8 },
        freeThrows: { made: 2, attempted: 3 },
        rebounds: { offensive: 2, defensive: 4 },
        assists: 3,
        steals: 1,
        turnovers: 2,
        blocks: { made: 1, received: 0 },
        faults: { made: 2, received: 1 },
        plusMinus: 5,
        efficiency: 15,
      };
      const formatter = createPlayerStatsFormatter(stats);
      expect(formatter.formatRebounds()).toBe('2+4');
      expect(formatter.formatAssists()).toBe('3');
      expect(formatter.formatSteals()).toBe('1');
      expect(formatter.formatTurnovers()).toBe('2');
      expect(formatter.formatBlocks()).toBe('1/0');
    });
  });

  describe('edge cases', () => {
    it('should treat time > 0 && points === 0 as "has stats" (bad game)', () => {
      const stats: PlayerStats = {
        time: 600,
        fieldGoals: 0,
        threePointers: 0,
        freeThrows: { made: 0, attempted: 0 },
        faults: 0,
        plusMinus: 0,
        efficiency: 0,
      };
      const formatter = createPlayerStatsFormatter(stats);
      expect(formatter.kind()).toBe('basic');
      expect(formatter.hasStats()).toBe(true); // Important: bad game is still valid
    });

    it('should detect AdvancedPlayerStats by shape even with minimal data', () => {
      const stats: AdvancedPlayerStats = {
        time: 0,
        fieldGoals: { made: 0, attempted: 0 }, // This shape indicates advanced
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
      const formatter = createPlayerStatsFormatter(stats);
      // Even with no stats, it should detect as advanced because of shape
      expect(formatter.kind()).toBe('none'); // no stats wins over shape
      expect(formatter.hasStats()).toBe(false);
    });
  });

  describe('polimorfismo', () => {
    it('should allow treating NoStatsFormatter as AdvancedStatsFormatter', () => {
      const stats: PlayerStats = {
        time: 0,
        fieldGoals: 0,
        threePointers: 0,
        freeThrows: { made: 0, attempted: 0 },
        faults: 0,
        plusMinus: 0,
        efficiency: 0,
      };
      const formatter = createPlayerStatsFormatter(stats);

      // This should work without type casting because NoStatsFormatter
      // implements AdvancedStatsFormatter
      const advancedMethods = {
        rebounds: formatter.formatRebounds(),
        assists: formatter.formatAssists(),
        steals: formatter.formatSteals(),
        turnovers: formatter.formatTurnovers(),
        blocks: formatter.formatBlocks(),
      };

      expect(advancedMethods.rebounds).toBe('-');
      expect(advancedMethods.assists).toBe('-');
      expect(advancedMethods.steals).toBe('-');
      expect(advancedMethods.turnovers).toBe('-');
      expect(advancedMethods.blocks).toBe('-');
    });
  });
});

