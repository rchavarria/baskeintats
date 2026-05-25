import type {AdvancedGame, Game} from "../../model/GameSchema.ts";
import {hasAdvancedPlayerStats} from "../../lib/hasAdvancedPlayerStats.ts";

interface TwoPointersTotalProps {
  hasAdvanced: boolean;
  games: (Game | AdvancedGame)[];
}

export function TwoPointersTotal({ hasAdvanced, games }: TwoPointersTotalProps) {
  const totalMade = games.reduce((s, g) => {
    if (hasAdvancedPlayerStats(g)) return s + g.playerStats.fieldGoals.made;
    return s + g.playerStats.fieldGoals;
  }, 0);

  if (!hasAdvanced) {
    return <>{totalMade}</>;
  }

  const totalAttempted = games.reduce((s, g) => {
    if (hasAdvancedPlayerStats(g)) return s + g.playerStats.fieldGoals.attempted;
    return s;
  }, 0);

  return <>{totalMade}/{totalAttempted}</>;
}

