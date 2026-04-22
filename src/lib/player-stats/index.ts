/**
 * Player Stats Formatter Module
 *
 * Public API for player stats formatting and variant classification.
 *
 * Exported (public):
 * - createPlayerStatsFormatter  factory that returns the right formatter
 * - getPlayerStatsVariant        classifies stats into a discriminated union
 * - PlayerStatsVariant           discriminated union type for variant selection
 * - PlayerStatsFormatter         base formatter interface
 * - AdvancedStatsFormatter       extended formatter interface (advanced stats)
 *
 * Private (not exported):
 * - Concrete implementations (PlayerStatsFormatterImpl, AdvancedPlayerStatsFormatterImpl, NoStatsFormatter)
 */

export { createPlayerStatsFormatter } from './createPlayerStatsFormatter';
export { getPlayerStatsVariant } from './getPlayerStatsVariant';
export type { PlayerStatsVariant } from './getPlayerStatsVariant';
export type { PlayerStatsFormatter } from './PlayerStatsFormatter';
export type { AdvancedStatsFormatter } from './AdvancedStatsFormatter';


