import type {Game} from "../model/GameSchema.ts";
import {game_2026_03_29_distrito} from "../data/games/2026-03-29-distrito.ts";
import {game_2026_03_22_getafe} from "../data/games/2026-03-22-getafe.ts";
import {game_2026_03_17_distrito} from "../data/games/2026-03-17-distrito.ts";
import {game_2026_03_22_canoe} from "../data/games/2026-03-22-canoe.ts";

export function useGames(): Game[] {
  return [
    game_2026_03_29_distrito,
    game_2026_03_22_getafe,
    game_2026_03_22_canoe,
    game_2026_03_17_distrito,
  ];
}
