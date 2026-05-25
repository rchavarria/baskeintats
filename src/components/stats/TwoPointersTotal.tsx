import type {AdvancedGame, Game} from "../../model/GameSchema.ts";
import {hasAdvancedPlayerStats} from "../../lib/hasAdvancedPlayerStats.ts";

interface TwoPointersTotalProps {
  hasAdvanced: boolean;
  games: (Game | AdvancedGame)[];
}

function BasicTwoPointersTotal({ games }: { games: (Game | AdvancedGame)[] }) {
  const totalMade = games.reduce((s, g) => s + (g as Game).playerStats.fieldGoals, 0);

  return <>{totalMade}</>;
}

function AdvancedTwoPointersTotal({ games }: { games: (Game | AdvancedGame)[] }) {
  const totalMade = games.reduce((s, g) => {
    if (hasAdvancedPlayerStats(g)) return s + g.playerStats.fieldGoals.made;
    return s + g.playerStats.fieldGoals;
  }, 0);
  const totalAttempted = games.reduce((s, g) => {
    if (hasAdvancedPlayerStats(g)) return s + g.playerStats.fieldGoals.attempted;
    return s;
  }, 0);

  return <>{totalMade}/{totalAttempted}</>;
}

export function TwoPointersTotal({ hasAdvanced, games }: TwoPointersTotalProps) {
  if (!hasAdvanced) {
    return <BasicTwoPointersTotal games={games} />;
  }
  return <AdvancedTwoPointersTotal games={games} />;
}
