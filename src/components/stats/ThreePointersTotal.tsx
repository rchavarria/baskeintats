import type {AdvancedGame, Game} from "../../model/GameSchema.ts";
import {hasAdvancedPlayerStats} from "../../lib/hasAdvancedPlayerStats.ts";

interface ThreePointersTotalProps {
  hasAdvanced: boolean;
  games: (Game | AdvancedGame)[];
}

function BasicThreePointersTotal({ games }: { games: (Game | AdvancedGame)[] }) {
  const totalMade = games.reduce((s, g) => s + (g as Game).playerStats.threePointers, 0);

  return <>{totalMade}</>;
}

function AdvancedThreePointersTotal({ games }: { games: (Game | AdvancedGame)[] }) {
  const totalMade = games.reduce((s, g) => {
    if (hasAdvancedPlayerStats(g)) return s + g.playerStats.threePointers.made;
    return s + g.playerStats.threePointers;
  }, 0);
  const totalAttempted = games.reduce((s, g) => {
    if (hasAdvancedPlayerStats(g)) return s + g.playerStats.threePointers.attempted;
    return s;
  }, 0);

  return <>{totalMade}/{totalAttempted}</>;
}

export function ThreePointersTotal({ hasAdvanced, games }: ThreePointersTotalProps) {
  if (!hasAdvanced) {
    return <BasicThreePointersTotal games={games} />;
  }
  return <AdvancedThreePointersTotal games={games} />;
}
