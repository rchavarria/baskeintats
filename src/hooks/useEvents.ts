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
import {game_2025_03_22_torrejon} from "../data/games/2025-03-22-torrejon.ts";
import {game_2025_03_09_uros} from "../data/games/2025-03-09-uros.ts";
import {game_2025_03_03_valcude} from "../data/games/2025-03-03-valcude.ts";
import {game_2025_03_02_real_madrid} from "../data/games/2025-03-02-real-madrid.ts";
import {game_2025_02_23_rozas} from "../data/games/2025-02-23-rozas.ts";
import {game_2025_02_16_estudiantes} from "../data/games/2025-02-16-estudiantes.ts";
import {game_2025_02_09_tres_cantos} from "../data/games/2025-02-09-tres-cantos.ts";
import {game_2025_02_02_uros} from "../data/games/2025-02-02-uros.ts";
import {game_2025_01_29_real_madrid} from "../data/games/2025-01-29-real-madrid.ts";
import {game_2025_01_19_rozas} from "../data/games/2025-01-19-rozas.ts";
import {game_2025_01_12_estudiantes} from "../data/games/2025-01-12-estudiantes.ts";
import {game_2025_01_07_seleccion_valencia} from "../data/games/2025-01-07-seleccion-valencia.ts";
import {game_2025_01_06_seleccion_galicia} from "../data/games/2025-01-06-seleccion-galicia.ts";
import {game_2025_01_05_seleccion_baleares} from "../data/games/2025-01-05-seleccion-baleares.ts";
import {game_2025_01_04_seleccion_canarias} from "../data/games/2025-01-04-seleccion-canarias.ts";
import {game_2025_01_04_seleccion_melilla} from "../data/games/2025-01-04-seleccion-melilla.ts";
import {game_2025_01_03_seleccion_murcia} from "../data/games/2025-01-03-seleccion-murcia.ts";
import {game_2024_12_30_seleccion_canarias} from "../data/games/2024-12-30-seleccion-canarias.ts";
import {game_2024_12_28_seleccion_aragon} from "../data/games/2024-12-28-seleccion-aragon.ts";
import {game_2024_12_27_seleccion_cataluna} from "../data/games/2024-12-27-seleccion-cataluna.ts";
import {game_2024_12_22_seleccion_valencia} from "../data/games/2024-12-22-seleccion-valencia.ts";
import {game_2024_12_15_alcobendas} from "../data/games/2024-12-15-alcobendas.ts";
import {game_2024_12_15_rozas} from "../data/games/2024-12-15-rozas.ts";
import {game_2024_12_07_estudiantes} from "../data/games/2024-12-07-estudiantes.ts";
import {game_2024_12_01_canoe} from "../data/games/2024-12-01-canoe.ts";
import {game_2024_11_27_sba} from "../data/games/2024-11-27-sba.ts";
import {game_2024_11_23_barca} from "../data/games/2024-11-23-barca.ts";
import {game_2024_11_22_estudiantes} from "../data/games/2024-11-22-estudiantes.ts";
import {game_2024_11_17_alcorcon} from "../data/games/2024-11-17-alcorcon.ts";
import {game_2024_11_10_real_madrid} from "../data/games/2024-11-10-real-madrid.ts";
import {game_2024_10_27_rozas} from "../data/games/2024-10-27-rozas.ts";
import {game_2024_10_20_canoe} from "../data/games/2024-10-20-canoe.ts";
import {game_2024_10_06_sba} from "../data/games/2024-10-06-sba.ts";
import {game_2024_09_29_alcorcon} from "../data/games/2024-09-29-alcorcon.ts";
import {game_2024_09_25_real_madrid} from "../data/games/2024-09-25-real-madrid.ts";
import {game_2024_09_08_mataro} from "../data/games/2024-09-08-mataro.ts";
import {game_2024_09_07_barca} from "../data/games/2024-09-07-barca.ts";
import {game_2024_09_07_joventut} from "../data/games/2024-09-07-joventut.ts";
import {game_2024_09_06_sabadell} from "../data/games/2024-09-06-sabadell.ts";
import {game_2024_09_15_estudiantes} from "../data/games/2024-09-15-estudiantes.ts";
import {game_2024_10_19_ucam_murcia} from "../data/games/2024-10-19-ucam-murcia.ts";
import {game_2024_03_17_virgen_atocha} from "../data/games/2024-03-17-virgen-atocha.ts";
import {game_2024_03_10_tres_cantos} from "../data/games/2024-03-10-tres-cantos.ts";
import {game_2024_03_03_canoe} from "../data/games/2024-03-03-canoe.ts";
import {game_2024_02_25_alcala} from "../data/games/2024-02-25-alcala.ts";
import {game_2024_02_24_juande} from "../data/games/2024-02-24-juande.ts";
import {game_2024_02_11_virgen_atocha} from "../data/games/2024-02-11-virgen-atocha.ts";
import {game_2024_02_04_tres_cantos} from "../data/games/2024-02-04-tres-cantos.ts";
import {game_2024_01_28_canoe} from "../data/games/2024-01-28-canoe.ts";
import {game_2024_01_21_alcala} from "../data/games/2024-01-21-alcala.ts";
import {game_2024_01_14_juande} from "../data/games/2024-01-14-juande.ts";
import {game_2023_12_17_torrejon} from "../data/games/2023-12-17-torrejon.ts";
import {game_2023_12_03_san_agustin} from "../data/games/2023-12-03-san-agustin.ts";
import {game_2023_11_26_torrelodones} from "../data/games/2023-11-26-torrelodones.ts";
import {game_2023_11_19_rozas} from "../data/games/2023-11-19-rozas.ts";
import {game_2023_11_12_leganes} from "../data/games/2023-11-12-leganes.ts";
import {game_2023_11_05_torrejon} from "../data/games/2023-11-05-torrejon.ts";
import {game_2023_10_22_san_agustin} from "../data/games/2023-10-22-san-agustin.ts";
import {game_2023_10_08_torrelodones} from "../data/games/2023-10-08-torrelodones.ts";
import {game_2023_10_01_rozas} from "../data/games/2023-10-01-rozas.ts";
import {game_2023_09_24_leganes} from "../data/games/2023-09-24-leganes.ts";
import {game_2023_10_22_alcorcon} from "../data/games/2023-10-22-alcorcon.ts";
import {game_2023_12_17_fuenlabrada} from "../data/games/2023-12-17-fuenlabrada.ts";
import {game_2024_01_14_estudio} from "../data/games/2024-01-14-estudio.ts";
import {game_2024_01_21_estudiantes} from "../data/games/2024-01-21-estudiantes.ts";
import {game_2024_01_28_real_madrid} from "../data/games/2024-01-28-real-madrid.ts";
import {game_2024_02_04_fuenlabrada} from "../data/games/2024-02-04-fuenlabrada.ts";
import {game_2024_02_11_alcorcon} from "../data/games/2024-02-11-alcorcon.ts";
import {game_2024_02_18_estudio} from "../data/games/2024-02-18-estudio.ts";
import {game_2024_02_25_estudiantes} from "../data/games/2024-02-25-estudiantes.ts";
import {game_2024_03_03_real_madrid} from "../data/games/2024-03-03-real-madrid.ts";
import {game_2024_03_10_fuenlabrada} from "../data/games/2024-03-10-fuenlabrada.ts";
import {game_2024_03_17_alcorcon} from "../data/games/2024-03-17-alcorcon.ts";
import {game_2024_04_07_parla} from "../data/games/2024-04-07-parla.ts";
import {game_2024_03_31_fuenlabrada} from "../data/games/2024-03-31-fuenlabrada.ts";
import {game_2024_03_30_sp_burgos} from "../data/games/2024-03-30-sp-burgos.ts";
import {game_2024_03_30_zaragoza} from "../data/games/2024-03-30-zaragoza.ts";
import {game_2024_03_29_sp_burgos} from "../data/games/2024-03-29-sp-burgos.ts";
import {game_2024_03_28_moncayo} from "../data/games/2024-03-28-moncayo.ts";
import {game_2024_04_13_alcala} from "../data/games/2024-04-13-alcala.ts";
import {game_2024_04_28_parla} from "../data/games/2024-04-28-parla.ts";
import {game_2024_04_28_alcorcon} from "../data/games/2024-04-28-alcorcon.ts";
import {game_2024_05_26_zentro} from "../data/games/2024-05-26-zentro.ts";
import {game_2024_05_05_rozas} from "../data/games/2024-05-05-rozas.ts";
import {game_2024_05_04_salvador} from "../data/games/2024-05-04-salvador.ts";
import {game_2024_05_03_humanitas} from "../data/games/2024-05-03-humanitas.ts";
import {game_2024_06_02_rozas} from "../data/games/2024-06-02-rozas.ts";
import {game_2024_06_09_estudio} from "../data/games/2024-06-09-estudio.ts";
import {game_2024_05_20_certified_athletes} from "../data/games/2024-05-20-certified-athletes.ts";
import {game_2024_05_19_mexico} from "../data/games/2024-05-19-mexico.ts";
import {game_2024_05_19_guyane} from "../data/games/2024-05-19-guyane.ts";
import {game_2024_05_19_pesaro} from "../data/games/2024-05-19-pesaro.ts";
import {game_2024_05_18_ban_e_lot} from "../data/games/2024-05-18-ban-e-lot.ts";
import {game_2024_05_18_krvavec} from "../data/games/2024-05-18-krvavec.ts";
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
import {announcement_2024_08_31_orbita_pro_camp_5} from "../data/games/2024-08-31-orbita-pro-camp-j5.ts";
import {announcement_2024_08_30_orbita_pro_camp_4} from "../data/games/2024-08-30-orbita-pro-camp-j4.ts";
import {announcement_2024_08_29_orbita_pro_camp_3} from "../data/games/2024-08-29-orbita-pro-camp-j3.ts";
import {announcement_2024_08_28_orbita_pro_camp_2} from "../data/games/2024-08-28-orbita-pro-camp-j2.ts";
import {announcement_2024_08_27_orbita_pro_camp_j1} from "../data/games/2024-08-27-orbita-pro-camp-j1.ts";
import {announcement_2024_08_26_comienzo_temporada} from "../data/games/2024-08-26-comienzo-temporada.ts";
import {stat_2026_03_23_liga_plata_f2_gd} from "../data/games/2026-03-23-stat-liga-plata-f2-gd.ts";
import {stat_2026_03_23_liga_plata_f2_gb} from "../data/games/2026-03-23-stat-liga-plata-f2-gb.ts";
import {stat_2025_12_15_liga_oro_f1_g1} from "../data/games/2025-12-15-stat-liga-oro-f1-g1.ts";
import {stat_2025_12_15_liga_plata_f1_g4} from "../data/games/2025-12-15-stat-liga-plata-f1-g4.ts";
import {game_2026_04_25_zentro} from "../data/games/2026-04-25-zentro.ts";
import {game_2026_04_26_real_madrid} from "../data/games/2026-04-26-real-madrid.ts";
import {stat_2024_09_08_torneig_nord} from "../data/games/2024-09-08-stat-torneig-nord.ts";
import {stat_2024_11_24_torneo_fll} from "../data/games/2024-11-24-stat-torneo-fll.ts";
import {stat_2024_12_16_league_gold_f1} from "../data/games/2024-12-16-stat-liga-oro-f1.ts";
import {stat_2025_01_07_cesa} from "../data/games/2025-01-07-stat-cesa.ts";
import {stat_2025_06_09_cec} from "../data/games/2025-06-09-stat-cec.ts";
import {stat_2025_03_17_league_gold_f2} from "../data/games/2025-03-17-stat-league-gold-f2.ts";
import {stat_2025_05_19_league_gold_final} from "../data/games/2025-05-19-stat-league-gold-final.ts";
import {stat_2025_04_20_mhl_zaragoza} from "../data/games/2025-04-20-stat-mhl-zaragoza.ts";
import {announcement_2025_08_15_season_end} from "../data/games/2025-08-15-season-end.ts";
import {announcement_2025_06_01_cec_presentacion} from "../data/games/2025-06-01-cec-presentacion.ts";
import {announcement_2025_04_17_mhl_zaragoza} from "../data/games/2025-04-17-mhl-zaragoza.ts";
import {announcement_2024_12_05_copa_ahorramas} from "../data/games/2024-12-05-copa-ahorramas.ts";
import {announcement_2024_11_19_torneo_fll} from "../data/games/2024-11-19-torneo-fll.ts";
import {announcement_2024_09_06_torneig_nord} from "../data/games/2024-09-06-torneig-nord.ts";
import {announcement_2025_07_22_fbm_final_temporada} from "../data/games/2025-07-22-fbm-final-temporada.ts";
import {announcement_2024_12_23_convocatoria_fbm_final} from "../data/games/2024-12-23-convocatoria-fbm-final.ts";
import {announcement_2024_12_17_convocatoria_fbm_4} from "../data/games/2024-12-17-convocatoria-fbm-4.ts";
import {announcement_2024_12_10_convocatoria_fbm_3} from "../data/games/2024-12-10-convocatoria-fbm-3.ts";
import {announcement_2024_11_07_convocatoria_fbm_2} from "../data/games/2024-11-07-convocatoria-fbm-2.ts";
import {announcement_2024_10_09_convocatoria_fbm_1} from "../data/games/2024-10-09-convocatoria-fbm-1.ts";
import {announcement_2024_10_02_convocatoria_fbclm_2} from "../data/games/2024-10-02-convocatoria-fbclm-2.ts";
import {announcement_2024_09_18_convocatoria_fbclm_1} from "../data/games/2024-09-18-convocatoria-fbclm-1.ts";
import {announcement_2026_05_17_cec} from "../data/games/2026-05-17-cec.ts";
import {announcement_2025_07_23_dme_team_camp} from "../data/games/2025-07-23-dme-team-camp.ts";
import {announcement_2025_07_26_dme_team_camp_eoss} from "../data/games/2025-07-26-dme-team-camp-eoss.ts";
import {
  announcement_2025_07_27_dme_team_camp_eoss_summary
} from "../data/games/2025-07-27-dme-team-camp-eoss-summary.ts";
import {game_2025_07_31_dme_others} from "../data/games/2025-07-31-dme-others.ts";
import {game_2025_08_01_dme_red_black} from "../data/games/2025-08-01-dme-red-black.ts";
import {announcement_2025_08_04_dme_team_camp_summary} from "../data/games/2025-08-04-dme-team-camp-summary.ts";
import {game_2025_07_26_eoss_georgia} from "../data/games/2025-07-26-eoss-j5-georgia.ts";
import {game_2025_07_26_eoss_bogans} from "../data/games/2025-07-26-eoss-j4-bogans.ts";
import {game_2025_07_26_eoss_tnt} from "../data/games/2025-07-26-eoss-j3-tnt.ts";
import {game_2025_07_26_eoss_florida} from "../data/games/2025-07-26-eoss-j2-florida.ts";
import {game_2025_07_26_eoss_spartans} from "../data/games/2025-07-26-eoss-j1-spartans.ts";
import {game_2026_05_10_torrelodones} from "../data/games/2026-05-10-torrelodones.ts";
import {game_2026_05_10_zentro} from "../data/games/2026-05-10-zentro.ts";
import {announcement_2023_09_01_comienzo_temporada} from "../data/games/2023-09-01-comienzo-temporada.ts";
import {announcement_2024_03_26_torneo_zaragoza} from "../data/games/2024-03-26-torneo-zaragoza.ts";
import {announcement_2024_05_01_salou} from "../data/games/2024-05-01-torneo-salou.ts";
import {announcement_2024_05_10_ardres} from "../data/games/2024-05-10-torneo-ardres.ts";
import {stat_2023_12_18_liga_gold_f1} from "../data/games/2023-12-18-stat-liga-gold-f1.ts";
import {stat_2023_12_18_liga_bronze_f1} from "../data/games/2023-12-18-stat-liga-bronze-f1.ts";
import {stat_2024_03_18_liga_gold_f2} from "../data/games/2024-03-18-stat-liga-gold-f2.ts";
import {stat_2024_03_18_liga_silver_f2} from "../data/games/2024-03-18-stat-liga-silver-f2.ts";
import {stat_2024_05_05_salou} from "../data/games/2024-05-05-stat-salou.ts";
import {stat_2024_03_31_zaragoza} from "../data/games/2024-03-31-stat-zaragoza.ts";

type EventItem = Announcement | Game | ScheduledGame | AdvancedGame | FriendlyGame | Stats;

export function useEvents(): EventItem[] {
  const events: EventItem[] = [
    game_2026_05_10_zentro,
    game_2026_05_10_torrelodones,
    announcement_2026_05_17_cec,
    game_2026_04_26_real_madrid,
    game_2026_04_25_zentro,
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
    announcement_2025_08_15_season_end,
    announcement_2025_08_04_dme_team_camp_summary,
    game_2025_08_01_dme_red_black,
    game_2025_07_31_dme_others,
    announcement_2025_07_27_dme_team_camp_eoss_summary,
    game_2025_07_26_eoss_georgia,
    game_2025_07_26_eoss_bogans,
    game_2025_07_26_eoss_tnt,
    game_2025_07_26_eoss_florida,
    game_2025_07_26_eoss_spartans,
    announcement_2025_07_26_dme_team_camp_eoss,
    announcement_2025_07_23_dme_team_camp,
    announcement_2025_07_22_fbm_final_temporada,
    stat_2025_06_09_cec,
    game_2025_06_04_joventut,
    game_2025_06_03_barca,
    game_2025_06_02_elche,
    game_2025_06_01_obradoiro,
    announcement_2025_06_01_cec_presentacion,
    stat_2025_05_19_league_gold_final,
    game_2025_05_18_real_madrid,
    game_2025_05_17_rozas,
    game_2025_05_11_alcorcon,
    game_2025_05_10_alcorcon,
    game_2025_04_27_alcorcon,
    stat_2025_04_20_mhl_zaragoza,
    game_2025_04_20_laso,
    game_2025_04_19_rozas,
    game_2025_04_19_lleida,
    game_2025_04_18_tarragona,
    game_2025_04_18_alicante,
    game_2025_04_17_torrelodones,
    announcement_2025_04_17_mhl_zaragoza,
    game_2025_03_22_torrejon,
    stat_2025_03_17_league_gold_f2,
    game_2025_03_16_tres_cantos,
    game_2025_03_09_uros,
    game_2025_03_03_valcude,
    game_2025_03_02_real_madrid,
    game_2025_02_23_rozas,
    game_2025_02_16_estudiantes,
    game_2025_02_09_tres_cantos,
    game_2025_02_02_uros,
    game_2025_01_29_real_madrid,
    game_2025_01_19_rozas,
    game_2025_01_12_estudiantes,
    stat_2025_01_07_cesa,
    game_2025_01_07_seleccion_valencia,
    game_2025_01_06_seleccion_galicia,
    game_2025_01_05_seleccion_baleares,
    game_2025_01_04_seleccion_canarias,
    game_2025_01_04_seleccion_melilla,
    game_2025_01_03_seleccion_murcia,
    game_2024_12_30_seleccion_canarias,
    game_2024_12_28_seleccion_aragon,
    game_2024_12_27_seleccion_cataluna,
    announcement_2024_12_23_convocatoria_fbm_final,
    game_2024_12_22_seleccion_valencia,
    announcement_2024_12_17_convocatoria_fbm_4,
    game_2024_12_15_alcobendas,
    stat_2024_12_16_league_gold_f1,
    game_2024_12_15_rozas,
    announcement_2024_12_10_convocatoria_fbm_3,
    game_2024_12_07_estudiantes,
    announcement_2024_12_05_copa_ahorramas,
    game_2024_12_01_canoe,
    game_2024_11_27_sba,
    stat_2024_11_24_torneo_fll,
    game_2024_11_23_barca,
    game_2024_11_22_estudiantes,
    announcement_2024_11_19_torneo_fll,
    game_2024_11_17_alcorcon,
    game_2024_11_10_real_madrid,
    announcement_2024_11_07_convocatoria_fbm_2,
    game_2024_10_27_rozas,
    game_2024_10_20_canoe,
    game_2024_10_19_ucam_murcia,
    announcement_2024_10_09_convocatoria_fbm_1,
    game_2024_10_06_sba,
    announcement_2024_10_02_convocatoria_fbclm_2,
    game_2024_09_29_alcorcon,
    game_2024_09_25_real_madrid,
    announcement_2024_09_18_convocatoria_fbclm_1,
    game_2024_09_15_estudiantes,
    stat_2024_09_08_torneig_nord,
    game_2024_09_08_mataro,
    game_2024_09_07_barca,
    game_2024_09_07_joventut,
    game_2024_09_06_sabadell,
    announcement_2024_09_06_torneig_nord,
    announcement_2024_08_31_orbita_pro_camp_5,
    announcement_2024_08_30_orbita_pro_camp_4,
    announcement_2024_08_29_orbita_pro_camp_3,
    announcement_2024_08_28_orbita_pro_camp_2,
    announcement_2024_08_27_orbita_pro_camp_j1,
    announcement_2024_08_26_comienzo_temporada,
    game_2024_06_09_estudio,
    game_2024_06_02_rozas,
    game_2024_05_26_zentro,
    game_2024_05_20_certified_athletes,
    game_2024_05_19_mexico,
    game_2024_05_19_guyane,
    game_2024_05_19_pesaro,
    game_2024_05_18_ban_e_lot,
    game_2024_05_18_krvavec,
    announcement_2024_05_10_ardres,
    stat_2024_05_05_salou,
    game_2024_05_05_rozas,
    game_2024_05_04_salvador,
    game_2024_05_03_humanitas,
    announcement_2024_05_01_salou,
    game_2024_04_28_alcorcon,
    game_2024_04_28_parla,
    game_2024_04_13_alcala,
    game_2024_04_07_parla,
    stat_2024_03_31_zaragoza,
    game_2024_03_31_fuenlabrada,
    game_2024_03_30_sp_burgos,
    game_2024_03_30_zaragoza,
    game_2024_03_29_sp_burgos,
    game_2024_03_28_moncayo,
    announcement_2024_03_26_torneo_zaragoza,
    stat_2024_03_18_liga_gold_f2,
    stat_2024_03_18_liga_silver_f2,
    game_2024_03_17_virgen_atocha,
    game_2024_03_17_alcorcon,
    game_2024_03_10_tres_cantos,
    game_2024_03_10_fuenlabrada,
    game_2024_03_03_canoe,
    game_2024_03_03_real_madrid,
    game_2024_02_25_alcala,
    game_2024_02_25_estudiantes,
    game_2024_02_24_juande,
    game_2024_02_18_estudio,
    game_2024_02_11_virgen_atocha,
    game_2024_02_11_alcorcon,
    game_2024_02_04_tres_cantos,
    game_2024_02_04_fuenlabrada,
    game_2024_01_28_canoe,
    game_2024_01_28_real_madrid,
    game_2024_01_21_alcala,
    game_2024_01_21_estudiantes,
    game_2024_01_14_juande,
    game_2024_01_14_estudio,
    stat_2023_12_18_liga_gold_f1,
    stat_2023_12_18_liga_bronze_f1,
    game_2023_12_17_torrejon,
    game_2023_12_17_fuenlabrada,
    game_2023_12_03_san_agustin,
    game_2023_11_26_torrelodones,
    game_2023_11_19_rozas,
    game_2023_11_12_leganes,
    game_2023_11_05_torrejon,
    game_2023_10_22_san_agustin,
    game_2023_10_22_alcorcon,
    game_2023_10_08_torrelodones,
    game_2023_10_01_rozas,
    game_2023_09_24_leganes,
    announcement_2023_09_01_comienzo_temporada,
  ];

  return events;
}
