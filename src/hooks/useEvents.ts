import type {AdvancedGame, FriendlyGame, Game, ScheduledGame} from "../model/GameSchema.ts";
import type {Announcement} from "../model/AnnouncementSchema.ts";
import type {Stats} from "../model/StatsSchema.ts";
import {game_2025_06_04_joventut} from "../data/games/2025-06-04-joventut.ts";
import {game_2025_06_03_barca} from "../data/games/2025-06-03-barca.ts";
import {game_2025_06_02_elche} from "../data/games/2025-06-02-elche.ts";
import {game_2025_06_01_obradoiro} from "../data/games/2025-06-01-obradoiro.ts";
import {game_2025_05_18_real_madrid} from "../data/games/2025-05-18-real-madrid.ts";
import {game_2025_05_17_rozas} from "../data/games/2025-05-17-rozas.ts";
import {game_2025_05_11_alcorcon} from "../data/games/2025-05-11-alcorcon.ts";
import {game_2025_05_10_alcorcon} from "../data/games/2025-05-10-alcorcon.ts";
import {game_2025_04_27_alcorcon} from "../data/games/2025-04-27-alcorcon.ts";
import {game_2025_04_20_laso} from "../data/games/2025-04-20-laso.ts";
import {game_2025_04_19_rozas} from "../data/games/2025-04-19-rozas.ts";
import {game_2025_04_19_lleida} from "../data/games/2025-04-19-lleida.ts";
import {game_2025_04_18_tarragona} from "../data/games/2025-04-18-tarragona.ts";
import {game_2025_04_18_alicante} from "../data/games/2025-04-18-alicante.ts";
import {game_2025_04_17_torrelodones} from "../data/games/2025-04-17-torrelodones.ts";
import {game_2025_03_16_tres_cantos} from "../data/games/2025-03-16-tres-cantos.ts";
import {game_2025_03_09_uros} from "../data/games/2025-03-09-uros.ts";
import {game_2025_03_02_real_madrid} from "../data/games/2025-03-02-real-madrid.ts";
import {game_2025_02_23_rozas} from "../data/games/2025-02-23-rozas.ts";
import {game_2025_02_16_estudiantes} from "../data/games/2025-02-16-estudiantes.ts";
import {game_2025_02_09_tres_cantos} from "../data/games/2025-02-09-tres-cantos.ts";
import {game_2025_02_02_uros} from "../data/games/2025-02-02-uros.ts";
import {game_2025_01_29_real_madrid} from "../data/games/2025-01-29-real-madrid.ts";
import {game_2025_01_19_rozas} from "../data/games/2025-01-19-rozas.ts";
import {game_2025_01_12_estudiantes} from "../data/games/2025-01-12-estudiantes.ts";
import {game_2026_04_20_zentro} from "../data/games/2026-04-20-zentro.ts";
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
import {announcement_2025_12_26_torneo_cyl} from "../data/games/2025-12-26-torneo-cyl.ts";
import {stat_2025_12_22_torneo_teruel} from "../data/games/2025-12-22-stat-torneo-teruel.ts";
import {game_2025_12_21_elche} from "../data/games/2025-12-21-elche.ts";
import {game_2025_12_20_sevilla} from "../data/games/2025-12-20-sevilla.ts";
import {game_2025_12_20_olivar} from "../data/games/2025-12-20-olivar.ts";
import {game_2025_12_19_torrent} from "../data/games/2025-12-19-torrent.ts";
import {game_2025_12_19_malaga} from "../data/games/2025-12-19-malaga.ts";
import {announcement_2025_12_19_torneo_teruel} from "../data/games/2025-12-19-torneo-teruel.ts";
import {announcement_2025_12_17_convocatoria_fbm_1} from "../data/games/2025-12-17-convocatoria-fbm-1.ts";
import {stat_2025_11_23_torneo_fll} from "../data/games/2025-11-23-stat-torneo-fll.ts";
import {game_2025_12_14_fuenlabrada} from "../data/games/2025-12-14-fuenlabrada.ts";
import {game_2025_12_13_san_jorge} from "../data/games/2025-12-13-san-jorge.ts";
import {game_2025_12_13_patrocinio} from "../data/games/2025-12-13-patrocinio.ts";
import {game_2025_12_28_oporto} from "../data/games/2025-12-28-oporto.ts";
import {game_2025_12_27_canarias} from "../data/games/2025-12-27-canarias.ts";
import {game_2025_11_30_valcude} from "../data/games/2025-11-30-valcude.ts";
import {game_2025_11_30_estudiantes} from "../data/games/2025-11-30-estudiantes.ts";
import {game_2025_11_27_coslada} from "../data/games/2025-11-27-coslada.ts";
import {game_2025_11_23_seleccion_madrid} from "../data/games/2025-11-23-seleccion-madrid.ts";
import {game_2025_11_22_joventut} from "../data/games/2025-11-22-joventut.ts";
import {game_2025_11_21_real_madrid} from "../data/games/2025-11-21-real-madrid.ts";
import {game_2025_11_16_rozas} from "../data/games/2025-11-16-rozas.ts";
import {game_2025_11_15_zentro} from "../data/games/2025-11-15-zentro.ts";
import {announcement_2025_11_18_torneo_fll} from "../data/games/2025-11-18-torneo-fll.ts";
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
import {game_2025_09_18_distrito} from "../data/games/2025-09-18-distrito.ts";
import {game_2025_09_13_canoe} from "../data/games/2025-09-13-canoe.ts";
import {game_2025_09_07_godella} from "../data/games/2025-09-07-godella.ts";
import {game_2025_09_06_rozas} from "../data/games/2025-09-06-rozas.ts";
import {announcement_2025_08_26_comienzo_temporada} from "../data/games/2025-08-26-comienzo-temporada.ts";
import {stat_2026_03_23_liga_plata_f2_gd} from "../data/games/2026-03-23-stat-liga-plata-f2-gd.ts";
import {stat_2026_03_23_liga_plata_f2_gb} from "../data/games/2026-03-23-stat-liga-plata-f2-gb.ts";
import {stat_2025_12_15_liga_oro_f1_g1} from "../data/games/2025-12-15-stat-liga-oro-f1-g1.ts";
import {stat_2025_12_15_liga_plata_f1_g4} from "../data/games/2025-12-15-stat-liga-plata-f1-g4.ts";

type EventItem = Announcement | Game | ScheduledGame | AdvancedGame | FriendlyGame | Stats;

export function useEvents(): EventItem[] {
  const events: EventItem[] = [
    game_2026_04_20_zentro,
    game_2026_04_12_canoe,
    game_2026_04_11_canoe,
    game_2026_04_09_canoe,
    game_2026_03_29_distrito,
    stat_2026_03_23_liga_plata_f2_gd,
    stat_2026_03_23_liga_plata_f2_gb,
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
    game_2025_12_28_oporto,
    game_2025_12_27_canarias,
    announcement_2025_12_26_torneo_cyl,
    stat_2025_12_22_torneo_teruel,
    game_2025_12_21_elche,
    game_2025_12_20_sevilla,
    game_2025_12_20_olivar,
    game_2025_12_19_torrent,
    game_2025_12_19_malaga,
    announcement_2025_12_19_torneo_teruel,
    announcement_2025_12_17_convocatoria_fbm_1,
    stat_2025_12_15_liga_oro_f1_g1,
    stat_2025_12_15_liga_plata_f1_g4,
    game_2025_12_14_fuenlabrada,
    game_2025_12_13_san_jorge,
    game_2025_12_13_patrocinio,
    game_2025_11_30_valcude,
    game_2025_11_30_estudiantes,
    game_2025_11_27_coslada,
    stat_2025_11_23_torneo_fll,
    game_2025_11_23_seleccion_madrid,
    game_2025_11_22_joventut,
    game_2025_11_21_real_madrid,
    announcement_2025_11_18_torneo_fll,
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
    game_2025_09_18_distrito,
    game_2025_09_13_canoe,
    game_2025_09_07_godella,
    game_2025_09_06_rozas,
    announcement_2025_08_26_comienzo_temporada,
    game_2025_06_04_joventut,
    game_2025_06_03_barca,
    game_2025_06_02_elche,
    game_2025_06_01_obradoiro,
    game_2025_05_18_real_madrid,
    game_2025_05_17_rozas,
    game_2025_05_11_alcorcon,
    game_2025_05_10_alcorcon,
    game_2025_04_27_alcorcon,
    game_2025_04_20_laso,
    game_2025_04_19_rozas,
    game_2025_04_19_lleida,
    game_2025_04_18_tarragona,
    game_2025_04_18_alicante,
    game_2025_04_17_torrelodones,
    game_2025_03_16_tres_cantos,
    game_2025_03_09_uros,
    game_2025_03_02_real_madrid,
    game_2025_02_23_rozas,
    game_2025_02_16_estudiantes,
    game_2025_02_09_tres_cantos,
    game_2025_02_02_uros,
    game_2025_01_29_real_madrid,
    game_2025_01_19_rozas,
    game_2025_01_12_estudiantes,
  ];

  return events;
}
