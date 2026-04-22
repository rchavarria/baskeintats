import type { PlayerStats, AdvancedPlayerStats } from '../../model/PlayerSchema';
import type { PlayerStatsFormatter } from './PlayerStatsFormatter';
import type { AdvancedStatsFormatter } from './AdvancedStatsFormatter';
import { PlayerStatsFormatterImpl } from './PlayerStatsFormatterImpl';
import { AdvancedPlayerStatsFormatterImpl } from './AdvancedPlayerStatsFormatterImpl';
import { NoStatsFormatter } from './NoStatsFormatter';
import { getPlayerStatsVariant } from './getPlayerStatsVariant';

/**
 * createPlayerStatsFormatter
 *
 * Factory that auto-detects the stats type and returns the correct formatter
 * implementation. Detection logic is delegated to getPlayerStatsVariant so
 * the classification rule lives in a single place.
 *
 * @param stats - PlayerStats or AdvancedPlayerStats (union type)
 * @returns PlayerStatsFormatter | AdvancedStatsFormatter based on the stats shape
 */
export function createPlayerStatsFormatter(
  stats: PlayerStats | AdvancedPlayerStats
): PlayerStatsFormatter | AdvancedStatsFormatter {
  const variant = getPlayerStatsVariant(stats);

  switch (variant.kind) {
    case 'none':     return new NoStatsFormatter();
    case 'basic':    return new PlayerStatsFormatterImpl(variant.stats);
    case 'advanced': return new AdvancedPlayerStatsFormatterImpl(variant.stats);
  }
}

