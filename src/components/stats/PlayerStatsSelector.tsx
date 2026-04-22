import type { PlayerStats } from '../../model/PlayerSchema';
import type { AdvancedPlayerStats } from '../../model/PlayerSchema';
import { getPlayerStatsVariant } from '../../lib/player-stats';
import { PlayerStats as PlayerStatsView } from './PlayerStats';
import { AdvancedPlayerStats as AdvancedPlayerStatsView } from './AdvancedPlayerStats';
import { NoPlayerStats } from './NoPlayerStats';

interface PlayerStatsSelectorProps {
  /**
   * Player stats for the game. Accepts undefined (e.g. scheduled games without
   * recorded data) — the selector always renders something appropriate.
   */
  stats: PlayerStats | AdvancedPlayerStats | undefined;
}

/**
 * PlayerStatsSelector
 *
 * Single point of truth for deciding which player stats variant to render.
 * Consumers (pages) pass raw stats and this component owns the branching logic.
 *
 * Renders:
 * - NoPlayerStats  when stats is undefined or variant is 'none'
 * - PlayerStats    when variant is 'basic'
 * - AdvancedPlayerStats when variant is 'advanced'
 */
export function PlayerStatsSelector({ stats }: PlayerStatsSelectorProps) {
  if (stats === undefined) {
    return <NoPlayerStats />;
  }

  const variant = getPlayerStatsVariant(stats);

  switch (variant.kind) {
    case 'none':
      return <NoPlayerStats />;
    case 'basic':
      return <PlayerStatsView stats={variant.stats} />;
    case 'advanced':
      return <AdvancedPlayerStatsView stats={variant.stats} />;
  }
}

