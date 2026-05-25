import type {AdvancedGame, Game} from "../../model/GameSchema.ts";
import {hasAdvancedPlayerStats} from "../../lib/hasAdvancedPlayerStats.ts";

interface ThreePointersAverageProps {
  hasAdvanced: boolean;
  games: (Game | AdvancedGame)[];
}

function BasicThreePointersAverage({ games }: { games: (Game | AdvancedGame)[] }) {
  const totalMade = games.reduce((s, g) => s + (g as Game).playerStats.threePointers, 0);

  return <>{(totalMade / games.length).toFixed(1)}</>;
}

function AdvancedThreePointersAverage({ games }: { games: (Game | AdvancedGame)[] }) {
  const totalMade = games.reduce((s, g) => {
    if (hasAdvancedPlayerStats(g)) return s + g.playerStats.threePointers.made;
    return s + g.playerStats.threePointers;
  }, 0);
  const totalAttempted = games.reduce((s, g) => {
    if (hasAdvancedPlayerStats(g)) return s + g.playerStats.threePointers.attempted;
    return s;
  }, 0);

  if (totalAttempted > 0) {
    return <>{Math.round((totalMade / totalAttempted) * 100)}%</>;
  }

  return <>{(totalMade / games.length).toFixed(1)}</>;
}

export function ThreePointersAverage({ hasAdvanced, games }: ThreePointersAverageProps) {
  if (!hasAdvanced) {
    return <BasicThreePointersAverage games={games} />;
  }
  return <AdvancedThreePointersAverage games={games} />;
}
