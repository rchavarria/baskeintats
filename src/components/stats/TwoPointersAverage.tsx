import type {AdvancedGame, Game} from "../../model/GameSchema.ts";
import {hasAdvancedPlayerStats} from "../../lib/hasAdvancedPlayerStats.ts";

interface TwoPointersAverageProps {
  hasAdvanced: boolean;
  games: (Game | AdvancedGame)[];
}

function BasicTwoPointersAverage({ games }: { games: (Game | AdvancedGame)[] }) {
  const totalMade = games.reduce((s, g) => s + (g as Game).playerStats.fieldGoals, 0);

  return <>{(totalMade / games.length).toFixed(1)}</>;
}

function AdvancedTwoPointersAverage({ games }: { games: (Game | AdvancedGame)[] }) {
  const totalMade = games.reduce((s, g) => {
    if (hasAdvancedPlayerStats(g)) return s + g.playerStats.fieldGoals.made;
    return s + g.playerStats.fieldGoals;
  }, 0);
  const totalAttempted = games.reduce((s, g) => {
    if (hasAdvancedPlayerStats(g)) return s + g.playerStats.fieldGoals.attempted;
    return s;
  }, 0);

  if (totalAttempted > 0) {
    return <>{Math.round((totalMade / totalAttempted) * 100)}%</>;
  }

  return <>{(totalMade / games.length).toFixed(1)}</>;
}

export function TwoPointersAverage({ hasAdvanced, games }: TwoPointersAverageProps) {
  if (!hasAdvanced) {
    return <BasicTwoPointersAverage games={games} />;
  }
  return <AdvancedTwoPointersAverage games={games} />;
}
