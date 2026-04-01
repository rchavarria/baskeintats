import type {Game} from "../model/GameSchema.ts";
import { game_2026_03_22_distrito } from "../data/games/2026-03-29-distrito.ts";
import { game_2026_03_17_canoe} from "../data/games/2026-03-17-canoe.ts";

export function useGames(): Game[] {
  return [
    game_2026_03_22_distrito,
    game_2026_03_17_canoe,
  ];
}
