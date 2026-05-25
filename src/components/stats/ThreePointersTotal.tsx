import type {AdvancedGame, Game} from "../../model/GameSchema.ts";
import {hasAdvancedPlayerStats} from "../../lib/hasAdvancedPlayerStats.ts";

interface ThreePointersTotalProps {
  hasAdvanced: boolean;
  games: (Game | AdvancedGame)[];
}

export function ThreePointersTotal({ hasAdvanced, games }: ThreePointersTotalProps) {
  const totalMade = games.reduce((s, g) => {
    if (hasAdvancedPlayerStats(g)) return s + g.playerStats.threePointers.made;
    return s + g.playerStats.threePointers;
  }, 0);

  if (!hasAdvanced) {
    return <>{totalMade}</>;
  }

  const totalAttempted = games.reduce((s, g) => {
    if (hasAdvancedPlayerStats(g)) return s + g.playerStats.threePointers.attempted;
    return s;
  }, 0);

  return <>{totalMade}/{totalAttempted}</>;
}
