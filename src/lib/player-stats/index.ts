/**
 * Player Stats Formatter Module
 *
 * Public API for player stats formatting and variant classification.
 *
 * Exported (public):
 * - PlayerStatsFormatterImpl           formatter for basic PlayerStats
 * - AdvancedPlayerStatsFormatterImpl   formatter for AdvancedPlayerStats
 * - NoStatsFormatter                   null-object formatter (no stats available)
 * - getPlayerStatsVariant              classifies stats into a discriminated union
 * - PlayerStatsVariant                 discriminated union type for variant selection
 * - PlayerStatsFormatter               base formatter interface
 * - AdvancedStatsFormatter             extended formatter interface (advanced stats)
 */

export { PlayerStatsFormatterImpl } from './PlayerStatsFormatterImpl';
export { AdvancedPlayerStatsFormatterImpl } from './AdvancedPlayerStatsFormatterImpl';
export { NoStatsFormatter } from './NoStatsFormatter';
export { getPlayerStatsVariant } from './getPlayerStatsVariant';
export type { PlayerStatsVariant } from './getPlayerStatsVariant';
export type { PlayerStatsFormatter } from './PlayerStatsFormatter';
export type { AdvancedStatsFormatter } from './AdvancedStatsFormatter';
