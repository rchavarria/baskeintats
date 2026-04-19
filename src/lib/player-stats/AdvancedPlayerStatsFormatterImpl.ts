import type { AdvancedPlayerStats } from '../../model/PlayerSchema';
import type { AdvancedStatsFormatter } from './AdvancedStatsFormatter';

/**
 * AdvancedPlayerStatsFormatterImpl
 *
 * Implementación del formatter avanzado para AdvancedPlayerStats.
 * Encapsula toda la lógica derivada actualmente en deriveAdvancedPlayerStats().
 */
export class AdvancedPlayerStatsFormatterImpl implements AdvancedStatsFormatter {
  private stats: AdvancedPlayerStats;

  constructor(stats: AdvancedPlayerStats) {
    this.stats = stats;
  }

  hasStats(): boolean {
    // No hay estadísticas SOLO si time === 0 AND points === 0
    // time > 0 && points === 0 es válido (mal partido)
    return !(this.stats.time === 0 && this.getTotalPoints() === 0);
  }

  kind(): 'none' | 'basic' | 'advanced' {
    return 'advanced';
  }

  formatPlayedTime(): string {
    const minutes = Math.floor(this.stats.time / 60)
      .toString()
      .padStart(2, '0');
    const seconds = (this.stats.time % 60).toString().padStart(2, '0');
    return `${minutes}:${seconds}`;
  }

  formatPoints(): string {
    return this.getTotalPoints().toString();
  }

  formatFieldGoals(): string {
    const { made, attempted } = this.stats.fieldGoals;
    const percentage = this.safePercentage(made, attempted);
    return `${made}/${attempted} (${percentage}%)`;
  }

  formatThreePointers(): string {
    const { made, attempted } = this.stats.threePointers;
    const percentage = this.safePercentage(made, attempted);
    return `${made}/${attempted} (${percentage}%)`;
  }

  formatFreeThrows(): string {
    const { made, attempted } = this.stats.freeThrows;
    const percentage = this.safePercentage(made, attempted);
    return `${made}/${attempted} (${percentage}%)`;
  }

  formatFaults(): string {
    // En advanced: "made/received"
    const { made, received } = this.stats.faults;
    return `${made}/${received}`;
  }

  formatPlusMinus(): string {
    const pm = this.stats.plusMinus;
    if (pm > 0) return `+${pm}`;
    if (pm < 0) return `${pm}`;
    return '0';
  }

  formatEfficiency(): string {
    return this.stats.efficiency.toString();
  }

  // ============================================================
  // AdvancedStatsFormatter Methods
  // ============================================================

  formatRebounds(): string {
    const { offensive, defensive } = this.stats.rebounds;
    return `${offensive}+${defensive}`;
  }

  formatAssists(): string {
    return this.stats.assists.toString();
  }

  formatSteals(): string {
    return this.stats.steals.toString();
  }

  formatTurnovers(): string {
    return this.stats.turnovers.toString();
  }

  formatBlocks(): string {
    const { made, received } = this.stats.blocks;
    return `${made}/${received}`;
  }

  // ============================================================
  // Private Helpers
  // ============================================================

  /**
   * Calcula el porcentaje de manera segura (evita división por cero).
   * @returns porcentaje como número (ej: 66.7 para 66.7%)
   */
  private safePercentage(made: number, attempted: number): number {
    if (attempted === 0) return 0;
    return Math.round((made / attempted) * 1000) / 10;
  }

  /**
   * Calcula puntos totales: 3*made3 + 2*made2 + madeLibres
   * En advanced, fieldGoals es {made, attempted}
   * Entonces: 2pt = fieldGoals.made (ya excluye 3pt)
   */
  private getTotalPoints(): number {
    return (
      3 * this.stats.threePointers.made +
      2 * this.stats.fieldGoals.made +
      this.stats.freeThrows.made
    );
  }
}

