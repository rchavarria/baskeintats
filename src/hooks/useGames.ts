import type {Game} from "../model/GameSchema.ts";
import {game_2026_03_29_distrito} from "../data/games/2026-03-29-distrito.ts";
import {game_2026_03_22_getafe} from "../data/games/2026-03-22-getafe.ts";
import {game_2026_03_22_canoe} from "../data/games/2026-03-22-canoe.ts";
import {game_2026_03_17_distrito} from "../data/games/2026-03-17-distrito.ts";
import {game_2026_03_15_fuenlabrada} from "../data/games/2026-03-15-fuenlabrada.ts";
import {game_2026_03_07_real_madrid} from "../data/games/2026-03-07-real-madrid.ts";
import {game_2026_03_07_tres_cantos} from "../data/games/2026-03-07-tres-cantos.ts";
import {game_2026_03_04_juande} from "../data/games/2026-03-04-juande.ts";
import {game_2026_02_21_rozas} from "../data/games/2026-02-21-rozas.ts";
import {game_2026_02_15_alcorcon} from "../data/games/2026-02-15-alcorcon.ts";
import {game_2026_02_15_getafe} from "../data/games/2026-02-15-getafe.ts";
import {game_2026_02_08_canoe} from "../data/games/2026-02-08-canoe.ts";
import {game_2026_02_07_getafe} from "../data/games/2026-02-07-getafe.ts";

export function useGames(): Game[] {
  return [
    game_2026_03_29_distrito,
    game_2026_03_22_getafe,
    game_2026_03_22_canoe,
    game_2026_03_17_distrito,
    game_2026_03_15_fuenlabrada,
    game_2026_03_07_real_madrid,
    game_2026_03_07_tres_cantos,
    game_2026_03_04_juande,
    game_2026_02_21_rozas,
    game_2026_02_15_alcorcon,
    game_2026_02_15_getafe,
    game_2026_02_08_canoe,
    game_2026_02_07_getafe,
  ];
}
