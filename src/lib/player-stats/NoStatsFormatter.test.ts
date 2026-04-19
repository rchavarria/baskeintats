import { describe, it, expect } from 'vitest';
import { NoStatsFormatter } from './NoStatsFormatter';

describe('NoStatsFormatter', () => {
  describe('hasStats()', () => {
    it('should always return false', () => {
      const formatter = new NoStatsFormatter();
      expect(formatter.hasStats()).toBe(false);
    });
  });

  describe('kind()', () => {
    it('should return "none"', () => {
      const formatter = new NoStatsFormatter();
      expect(formatter.kind()).toBe('none');
    });
  });

  describe('formatPlayedTime()', () => {
    it('should return "00:00" placeholder', () => {
      const formatter = new NoStatsFormatter();
      expect(formatter.formatPlayedTime()).toBe('00:00');
    });
  });

  describe('formatPoints()', () => {
    it('should return "-" placeholder', () => {
      const formatter = new NoStatsFormatter();
      expect(formatter.formatPoints()).toBe('-');
    });
  });

  describe('formatFieldGoals()', () => {
    it('should return "-" placeholder', () => {
      const formatter = new NoStatsFormatter();
      expect(formatter.formatFieldGoals()).toBe('-');
    });
  });

  describe('formatThreePointers()', () => {
    it('should return "-" placeholder', () => {
      const formatter = new NoStatsFormatter();
      expect(formatter.formatThreePointers()).toBe('-');
    });
  });

  describe('formatFreeThrows()', () => {
    it('should return "-" placeholder', () => {
      const formatter = new NoStatsFormatter();
      expect(formatter.formatFreeThrows()).toBe('-');
    });
  });

  describe('formatFaults()', () => {
    it('should return "-" placeholder', () => {
      const formatter = new NoStatsFormatter();
      expect(formatter.formatFaults()).toBe('-');
    });
  });

  describe('formatPlusMinus()', () => {
    it('should return "-" placeholder', () => {
      const formatter = new NoStatsFormatter();
      expect(formatter.formatPlusMinus()).toBe('-');
    });
  });

  describe('formatEfficiency()', () => {
    it('should return "-" placeholder', () => {
      const formatter = new NoStatsFormatter();
      expect(formatter.formatEfficiency()).toBe('-');
    });
  });

  describe('formatRebounds()', () => {
    it('should return "-" placeholder', () => {
      const formatter = new NoStatsFormatter();
      expect(formatter.formatRebounds()).toBe('-');
    });
  });

  describe('formatAssists()', () => {
    it('should return "-" placeholder', () => {
      const formatter = new NoStatsFormatter();
      expect(formatter.formatAssists()).toBe('-');
    });
  });

  describe('formatSteals()', () => {
    it('should return "-" placeholder', () => {
      const formatter = new NoStatsFormatter();
      expect(formatter.formatSteals()).toBe('-');
    });
  });

  describe('formatTurnovers()', () => {
    it('should return "-" placeholder', () => {
      const formatter = new NoStatsFormatter();
      expect(formatter.formatTurnovers()).toBe('-');
    });
  });

  describe('formatBlocks()', () => {
    it('should return "-" placeholder', () => {
      const formatter = new NoStatsFormatter();
      expect(formatter.formatBlocks()).toBe('-');
    });
  });

  describe('polimorfismo', () => {
    it('should be compatible with AdvancedStatsFormatter interface', () => {
      const formatter = new NoStatsFormatter();

      // All base methods should be available
      expect(typeof formatter.hasStats).toBe('function');
      expect(typeof formatter.kind).toBe('function');
      expect(typeof formatter.formatPlayedTime).toBe('function');
      expect(typeof formatter.formatPoints).toBe('function');
      expect(typeof formatter.formatFieldGoals).toBe('function');
      expect(typeof formatter.formatThreePointers).toBe('function');
      expect(typeof formatter.formatFreeThrows).toBe('function');
      expect(typeof formatter.formatFaults).toBe('function');
      expect(typeof formatter.formatPlusMinus).toBe('function');
      expect(typeof formatter.formatEfficiency).toBe('function');

      // All advanced methods should be available
      expect(typeof formatter.formatRebounds).toBe('function');
      expect(typeof formatter.formatAssists).toBe('function');
      expect(typeof formatter.formatSteals).toBe('function');
      expect(typeof formatter.formatTurnovers).toBe('function');
      expect(typeof formatter.formatBlocks).toBe('function');
    });
  });
});

