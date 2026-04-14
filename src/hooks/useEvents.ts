import type {AdvancedGame, Game, ScheduledGame} from "../model/GameSchema.ts";
import type {Announcement} from "../model/AnnouncementSchema.ts";
import {game_2026_04_12_canoe} from "../data/games/2026-04-12-canoe.ts";
import {game_2026_04_11_canoe} from "../data/games/2026-04-11-canoe.ts";
import {game_2026_04_09_canoe} from "../data/games/2026-04-09-canoe.ts";
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
import {game_2026_02_01_fuenlabrada} from "../data/games/2026-02-01-fuenlabrada.ts";
import {game_2026_01_31_distrito} from "../data/games/2026-01-31-distrito.ts";
import {game_2026_01_25_tres_cantos} from "../data/games/2026-01-25-tres-cantos.ts";
import {game_2026_01_24_real_madrid} from "../data/games/2026-01-24-real-madrid.ts";
import {game_2026_01_18_rozas} from "../data/games/2026-01-18-rozas.ts";
import {game_2026_01_17_juande} from "../data/games/2026-01-17-juande.ts";
import {game_2026_01_11_alcorcon} from "../data/games/2026-01-11-alcorcon.ts";
import {game_2026_01_10_getafe} from "../data/games/2026-01-10-getafe.ts";
import {game_2026_01_04_zentro} from "../data/games/2026-01-04-zentro.ts";
import {game_2026_01_03_laso} from "../data/games/2026-01-03-laso.ts";
import {game_2026_01_02_zentro} from "../data/games/2026-01-02-zentro.ts";
import {game_2026_01_02_fuenlabrada} from "../data/games/2026-01-02-fuenlabrada.ts";
import {announcement_2026_01_01_torneo_reyes} from "../data/games/2026-01-01-torneo-reyes.ts";
import {game_2025_12_14_fuenlabrada} from "../data/games/2025-12-14-fuenlabrada.ts";
import {game_2025_12_13_san_jorge} from "../data/games/2025-12-13-san-jorge.ts";
import {game_2025_12_13_patrocinio} from "../data/games/2025-12-13-patrocinio.ts";
import {game_2025_11_30_valcude} from "../data/games/2025-11-30-valcude.ts";
import {game_2025_11_30_estudiantes} from "../data/games/2025-11-30-estudiantes.ts";
import {game_2025_11_27_coslada} from "../data/games/2025-11-27-coslada.ts";
import {game_2025_11_16_rozas} from "../data/games/2025-11-16-rozas.ts";
import {game_2025_11_15_zentro} from "../data/games/2025-11-15-zentro.ts";
import {game_2025_11_09_alcorcon} from "../data/games/2025-11-09-alcorcon.ts";
import {game_2025_11_09_real_madrid} from "../data/games/2025-11-09-real-madrid.ts";
import {game_2025_10_26_fuenlabrada} from "../data/games/2025-10-26-fuenlabrada.ts";
import {game_2025_10_25_san_jorge} from "../data/games/2025-10-25-san-jorge.ts";
import {game_2025_10_19_valcude} from "../data/games/2025-10-19-valcude.ts";
import {game_2025_10_18_estudiantes} from "../data/games/2025-10-18-estudiantes.ts";
import {game_2025_10_05_patrocinio} from "../data/games/2025-10-05-patrocinio.ts";
import {game_2025_10_04_coslada} from "../data/games/2025-10-04-coslada.ts";
import {game_2025_09_28_zentro} from "../data/games/2025-09-28-zentro.ts";
import {game_2025_09_28_rozas} from "../data/games/2025-09-28-rozas.ts";
import {game_2025_09_20_alcorcon} from "../data/games/2025-09-20-alcorcon.ts";
import {game_2025_09_20_real_madrid} from "../data/games/2025-09-20-real-madrid.ts";

type Event = Announcement | Game | ScheduledGame | AdvancedGame;

export function useEvents(): Event[] {
  return [
    game_2026_04_12_canoe,
    game_2026_04_11_canoe,
    game_2026_04_09_canoe,
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
    game_2026_02_01_fuenlabrada,
    game_2026_01_31_distrito,
    game_2026_01_25_tres_cantos,
    game_2026_01_24_real_madrid,
    game_2026_01_18_rozas,
    game_2026_01_17_juande,
    game_2026_01_11_alcorcon,
    game_2026_01_10_getafe,
    game_2026_01_04_zentro,
    game_2026_01_03_laso,
    game_2026_01_02_zentro,
    game_2026_01_02_fuenlabrada,
    announcement_2026_01_01_torneo_reyes,
    game_2025_12_14_fuenlabrada,
    game_2025_12_13_san_jorge,
    game_2025_12_13_patrocinio,
    game_2025_11_30_valcude,
    game_2025_11_30_estudiantes,
    game_2025_11_27_coslada,
    game_2025_11_16_rozas,
    game_2025_11_15_zentro,
    game_2025_11_09_alcorcon,
    game_2025_11_09_real_madrid,
    game_2025_10_26_fuenlabrada,
    game_2025_10_25_san_jorge,
    game_2025_10_19_valcude,
    game_2025_10_18_estudiantes,
    game_2025_10_05_patrocinio,
    game_2025_10_04_coslada,
    game_2025_09_28_zentro,
    game_2025_09_28_rozas,
    game_2025_09_20_alcorcon,
    game_2025_09_20_real_madrid,
  ];
}
