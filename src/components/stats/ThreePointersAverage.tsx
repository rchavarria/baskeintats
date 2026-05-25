import type {AdvancedGame, Game} from "../../model/GameSchema.ts";

interface ThreePointersAverageProps {
  hasAdvanced: boolean;
  games: (Game | AdvancedGame)[];
}

function isAdvancedGame(game: Game | AdvancedGame): game is AdvancedGame {
  return typeof game.playerStats.fieldGoals === "object";
}

export function ThreePointersAverage({ hasAdvanced, games }: ThreePointersAverageProps) {
  const totalMade = games.reduce((s, g) => {
    if (isAdvancedGame(g)) return s + g.playerStats.threePointers.made;
    return s + g.playerStats.threePointers;
  }, 0);

  if (!hasAdvanced) {
    return <>{(totalMade / games.length).toFixed(1)}</>;
  }

  const totalAttempted = games.reduce((s, g) => {
    if (isAdvancedGame(g)) return s + g.playerStats.threePointers.attempted;
    return s;
  }, 0);

  if (totalAttempted > 0) {
    return <>{Math.round((totalMade / totalAttempted) * 100)}%</>;
  }

  return <>{(totalMade / games.length).toFixed(1)}</>;
}

