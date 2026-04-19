import { describe, it, expect } from 'vitest';
import { AdvancedPlayerStatsFormatterImpl } from './AdvancedPlayerStatsFormatterImpl';
import type { AdvancedPlayerStats } from '../../model/PlayerSchema';

describe('AdvancedPlayerStatsFormatterImpl', () => {
  describe('hasStats()', () => {
    it('should return false when time === 0 AND points === 0', () => {
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
      const formatter = new AdvancedPlayerStatsFormatterImpl(stats);
      expect(formatter.hasStats()).toBe(false);
    });

    it('should return true when time > 0 AND points === 0', () => {
      const stats: AdvancedPlayerStats = {
        time: 120,
        fieldGoals: { made: 0, attempted: 10 },
        threePointers: { made: 0, attempted: 5 },
        freeThrows: { made: 0, attempted: 2 },
        rebounds: { offensive: 0, defensive: 0 },
        assists: 0,
        steals: 0,
        turnovers: 0,
        blocks: { made: 0, received: 0 },
        faults: { made: 0, received: 0 },
        plusMinus: 0,
        efficiency: 0,
      };
      const formatter = new AdvancedPlayerStatsFormatterImpl(stats);
      expect(formatter.hasStats()).toBe(true);
    });
  });

  describe('kind()', () => {
    it('should return "advanced"', () => {
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
      const formatter = new AdvancedPlayerStatsFormatterImpl(stats);
      expect(formatter.kind()).toBe('advanced');
    });
  });

  describe('formatPoints()', () => {
    it('should calculate total points: 3*made3 + 2*made2 + madeLibres', () => {
      const stats: AdvancedPlayerStats = {
        time: 0,
        fieldGoals: { made: 5, attempted: 12 },
        threePointers: { made: 3, attempted: 8 },
        freeThrows: { made: 2, attempted: 3 },
        rebounds: { offensive: 0, defensive: 0 },
        assists: 0,
        steals: 0,
        turnovers: 0,
        blocks: { made: 0, received: 0 },
        faults: { made: 0, received: 0 },
        plusMinus: 0,
        efficiency: 0,
      };
      // Points: 3*3 + 2*5 + 2 = 9 + 10 + 2 = 21
      const formatter = new AdvancedPlayerStatsFormatterImpl(stats);
      expect(formatter.formatPoints()).toBe('21');
    });
  });

  describe('formatFieldGoals()', () => {
    it('should return "made/attempted (percentage%)" (advanced format)', () => {
      const stats: AdvancedPlayerStats = {
        time: 0,
        fieldGoals: { made: 8, attempted: 12 },
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
      const formatter = new AdvancedPlayerStatsFormatterImpl(stats);
      expect(formatter.formatFieldGoals()).toBe('8/12 (66.7%)');
    });
  });

  describe('formatThreePointers()', () => {
    it('should return "made/attempted (percentage%)" (advanced format)', () => {
      const stats: AdvancedPlayerStats = {
        time: 0,
        fieldGoals: { made: 0, attempted: 0 },
        threePointers: { made: 3, attempted: 8 },
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
      const formatter = new AdvancedPlayerStatsFormatterImpl(stats);
      expect(formatter.formatThreePointers()).toBe('3/8 (37.5%)');
    });
  });

  describe('formatFreeThrows()', () => {
    it('should return "made/attempted (percentage%)"', () => {
      const stats: AdvancedPlayerStats = {
        time: 0,
        fieldGoals: { made: 0, attempted: 0 },
        threePointers: { made: 0, attempted: 0 },
        freeThrows: { made: 4, attempted: 5 },
        rebounds: { offensive: 0, defensive: 0 },
        assists: 0,
        steals: 0,
        turnovers: 0,
        blocks: { made: 0, received: 0 },
        faults: { made: 0, received: 0 },
        plusMinus: 0,
        efficiency: 0,
      };
      const formatter = new AdvancedPlayerStatsFormatterImpl(stats);
      expect(formatter.formatFreeThrows()).toBe('4/5 (80%)');
    });
  });

  describe('formatFaults()', () => {
    it('should return "made/received" (advanced: dual semantic)', () => {
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
        faults: { made: 2, received: 1 },
        plusMinus: 0,
        efficiency: 0,
      };
      const formatter = new AdvancedPlayerStatsFormatterImpl(stats);
      expect(formatter.formatFaults()).toBe('2/1');
    });
  });

  describe('formatRebounds()', () => {
    it('should return "offensive+defensive"', () => {
      const stats: AdvancedPlayerStats = {
        time: 0,
        fieldGoals: { made: 0, attempted: 0 },
        threePointers: { made: 0, attempted: 0 },
        freeThrows: { made: 0, attempted: 0 },
        rebounds: { offensive: 2, defensive: 4 },
        assists: 0,
        steals: 0,
        turnovers: 0,
        blocks: { made: 0, received: 0 },
        faults: { made: 0, received: 0 },
        plusMinus: 0,
        efficiency: 0,
      };
      const formatter = new AdvancedPlayerStatsFormatterImpl(stats);
      expect(formatter.formatRebounds()).toBe('2+4');
    });
  });

  describe('formatAssists()', () => {
    it('should return assists as string', () => {
      const stats: AdvancedPlayerStats = {
        time: 0,
        fieldGoals: { made: 0, attempted: 0 },
        threePointers: { made: 0, attempted: 0 },
        freeThrows: { made: 0, attempted: 0 },
        rebounds: { offensive: 0, defensive: 0 },
        assists: 3,
        steals: 0,
        turnovers: 0,
        blocks: { made: 0, received: 0 },
        faults: { made: 0, received: 0 },
        plusMinus: 0,
        efficiency: 0,
      };
      const formatter = new AdvancedPlayerStatsFormatterImpl(stats);
      expect(formatter.formatAssists()).toBe('3');
    });
  });

  describe('formatSteals()', () => {
    it('should return steals as string', () => {
      const stats: AdvancedPlayerStats = {
        time: 0,
        fieldGoals: { made: 0, attempted: 0 },
        threePointers: { made: 0, attempted: 0 },
        freeThrows: { made: 0, attempted: 0 },
        rebounds: { offensive: 0, defensive: 0 },
        assists: 0,
        steals: 1,
        turnovers: 0,
        blocks: { made: 0, received: 0 },
        faults: { made: 0, received: 0 },
        plusMinus: 0,
        efficiency: 0,
      };
      const formatter = new AdvancedPlayerStatsFormatterImpl(stats);
      expect(formatter.formatSteals()).toBe('1');
    });
  });

  describe('formatTurnovers()', () => {
    it('should return turnovers as string', () => {
      const stats: AdvancedPlayerStats = {
        time: 0,
        fieldGoals: { made: 0, attempted: 0 },
        threePointers: { made: 0, attempted: 0 },
        freeThrows: { made: 0, attempted: 0 },
        rebounds: { offensive: 0, defensive: 0 },
        assists: 0,
        steals: 0,
        turnovers: 2,
        blocks: { made: 0, received: 0 },
        faults: { made: 0, received: 0 },
        plusMinus: 0,
        efficiency: 0,
      };
      const formatter = new AdvancedPlayerStatsFormatterImpl(stats);
      expect(formatter.formatTurnovers()).toBe('2');
    });
  });

  describe('formatBlocks()', () => {
    it('should return "made/received"', () => {
      const stats: AdvancedPlayerStats = {
        time: 0,
        fieldGoals: { made: 0, attempted: 0 },
        threePointers: { made: 0, attempted: 0 },
        freeThrows: { made: 0, attempted: 0 },
        rebounds: { offensive: 0, defensive: 0 },
        assists: 0,
        steals: 0,
        turnovers: 0,
        blocks: { made: 1, received: 0 },
        faults: { made: 0, received: 0 },
        plusMinus: 0,
        efficiency: 0,
      };
      const formatter = new AdvancedPlayerStatsFormatterImpl(stats);
      expect(formatter.formatBlocks()).toBe('1/0');
    });
  });
});

