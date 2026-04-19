/**
 * Player Stats Formatter Module
 *
 * API pública del módulo de formatters de estadísticas de jugador.
 *
 * Exports controlados:
 * - Público: createPlayerStatsFormatter, PlayerStatsFormatter, AdvancedStatsFormatter
 * - Privado: implementaciones concretas (Impl, NoStats)
 */

// Exports públicos: interfaz base y factoría
export { createPlayerStatsFormatter } from './createPlayerStatsFormatter';
export type { PlayerStatsFormatter } from './PlayerStatsFormatter';
export type { AdvancedStatsFormatter } from './AdvancedStatsFormatter';

// Nota: Las implementaciones concretas (PlayerStatsFormatterImpl, AdvancedPlayerStatsFormatterImpl, NoStatsFormatter)
// se mantienen privadas dentro del módulo. Los consumidores deben usar createPlayerStatsFormatter()
// para obtener instancias.

