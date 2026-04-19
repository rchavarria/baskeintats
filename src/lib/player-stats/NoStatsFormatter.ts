import type { AdvancedStatsFormatter } from './AdvancedStatsFormatter';

/**
 * NoStatsFormatter
 *
 * Null Object Pattern: implementa AdvancedStatsFormatter (no solo PlayerStatsFormatter)
 * para permitir polimorfismo limpio sin branching en consumidores.
 *
 * Se usa cuando time === 0 AND points === 0 (sin estadísticas).
 * Todos los métodos devuelven placeholders.
 */
export class NoStatsFormatter implements AdvancedStatsFormatter {
  hasStats(): boolean {
    return false;
  }

  kind(): 'none' | 'basic' | 'advanced' {
    return 'none';
  }

  formatPlayedTime(): string {
    return '00:00';
  }

  formatPoints(): string {
    return '-';
  }

  formatFieldGoals(): string {
    return '-';
  }

  formatThreePointers(): string {
    return '-';
  }

  formatFreeThrows(): string {
    return '-';
  }

  formatFaults(): string {
    return '-';
  }

  formatPlusMinus(): string {
    return '-';
  }

  formatEfficiency(): string {
    return '-';
  }

  // ============================================================
  // AdvancedStatsFormatter Methods
  // ============================================================

  formatRebounds(): string {
    return '-';
  }

  formatAssists(): string {
    return '-';
  }

  formatSteals(): string {
    return '-';
  }

  formatTurnovers(): string {
    return '-';
  }

  formatBlocks(): string {
    return '-';
  }
}

