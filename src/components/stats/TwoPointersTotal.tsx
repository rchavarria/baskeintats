import type {AdvancedGame, Game} from "../../model/GameSchema.ts";

interface TwoPointersTotalProps {
  hasAdvanced: boolean;
  games: (Game | AdvancedGame)[];
}

function isAdvancedGame(game: Game | AdvancedGame): game is AdvancedGame {
  return typeof game.playerStats.fieldGoals === "object";
}

export function TwoPointersTotal({ hasAdvanced, games }: TwoPointersTotalProps) {
  const totalMade = games.reduce((s, g) => {
    if (isAdvancedGame(g)) return s + g.playerStats.fieldGoals.made;
    return s + g.playerStats.fieldGoals;
  }, 0);

  if (!hasAdvanced) {
    return <>{totalMade}</>;
  }

  const totalAttempted = games.reduce((s, g) => {
    if (isAdvancedGame(g)) return s + g.playerStats.fieldGoals.attempted;
    return s;
  }, 0);

  return <>{totalMade}/{totalAttempted}</>;
}

