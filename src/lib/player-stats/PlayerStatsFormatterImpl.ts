import type { PlayerStats } from '../../model/PlayerSchema';
import type { PlayerStatsFormatter } from './PlayerStatsFormatter';

/**
 * PlayerStatsFormatterImpl
 *
 * Implementación del formatter base para PlayerStats (estadísticas básicas).
 * Encapsula toda la lógica derivada actualmente en derivePlayerStats().
 */
export class PlayerStatsFormatterImpl implements PlayerStatsFormatter {
  private stats: PlayerStats;

  constructor(stats: PlayerStats) {
    this.stats = stats;
  }

  hasStats(): boolean {
    // No hay estadísticas SOLO si time === 0 AND points === 0
    // time > 0 && points === 0 es válido (mal partido)
    return !(this.stats.time === 0 && this.getTotalPoints() === 0);
  }

  kind(): 'none' | 'basic' | 'advanced' {
    return 'basic';
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
    return this.stats.fieldGoals.toString();
  }

  formatThreePointers(): string {
    return this.stats.threePointers.toString();
  }

  formatFreeThrows(): string {
    const { made, attempted } = this.stats.freeThrows;
    const percentage = this.safePercentage(made, attempted);
    return `${made}/${attempted} (${percentage}%)`;
  }

  formatFaults(): string {
    // En basic: solo número simple
    return this.stats.faults.toString();
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
  // Private Helpers
  // ============================================================

  /**
   * Calcula el porcentaje de manera segura (evita división por cero).
   * @returns porcentaje como número (ej: 80.0 para 80%)
   */
  private safePercentage(made: number, attempted: number): number {
    if (attempted === 0) return 0;
    return Math.round((made / attempted) * 1000) / 10;
  }

  /**
   * Calcula puntos totales: 3*triples + 2*dobles + libres
   * En basic, fieldGoals es número simple (total de 2pt + 3pt)
   * threePointers es número simple (total de 3pt)
   * Entonces: 2pt = fieldGoals - threePointers
   */
  private getTotalPoints(): number {
    const twoPointers = this.stats.fieldGoals - this.stats.threePointers;
    return (
      3 * this.stats.threePointers +
      2 * twoPointers +
      this.stats.freeThrows.made
    );
  }
}

