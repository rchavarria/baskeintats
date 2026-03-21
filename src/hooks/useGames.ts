import { games } from "../generated/games";
import type { Game } from "../types/game";

export function useGames(): Game[] {
  return games;
}
