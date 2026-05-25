import type {AdvancedGame, Game} from "../../model/GameSchema.ts";

interface ThreePointersTotalProps {
  hasAdvanced: boolean;
  games: (Game | AdvancedGame)[];
}

function isAdvancedGame(game: Game | AdvancedGame): game is AdvancedGame {
  return typeof game.playerStats.fieldGoals === "object";
}

export function ThreePointersTotal({ hasAdvanced, games }: ThreePointersTotalProps) {
  const totalMade = games.reduce((s, g) => {
    if (isAdvancedGame(g)) return s + g.playerStats.threePointers.made;
    return s + g.playerStats.threePointers;
  }, 0);

  if (!hasAdvanced) {
    return <>{totalMade}</>;
  }

  const totalAttempted = games.reduce((s, g) => {
    if (isAdvancedGame(g)) return s + g.playerStats.threePointers.attempted;
    return s;
  }, 0);

  return <>{totalMade}/{totalAttempted}</>;
}
