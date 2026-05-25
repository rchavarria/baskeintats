import type {AdvancedGame, Game} from "../model/GameSchema.ts";

export function hasAdvancedPlayerStats(game: Game | AdvancedGame): game is AdvancedGame {
  return typeof game.playerStats.fieldGoals === "object";
}

