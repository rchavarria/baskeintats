import type {Stats} from "../../model/StatsSchema.ts";
import {StatsSchema} from "../../model/StatsSchema.ts";
import {game_2025_01_03_seleccion_murcia} from "./2025-01-03-seleccion-murcia.ts";
import {game_2025_01_04_seleccion_melilla} from "./2025-01-04-seleccion-melilla.ts";
import {game_2025_01_04_seleccion_canarias} from "./2025-01-04-seleccion-canarias.ts";
import {game_2025_01_05_seleccion_baleares} from "./2025-01-05-seleccion-baleares.ts";
import {game_2025_01_06_seleccion_galicia} from "./2025-01-06-seleccion-galicia.ts";
import {game_2025_01_07_seleccion_valencia} from "./2025-01-07-seleccion-valencia.ts";

export const stat_2025_01_07_cesa: Stats = StatsSchema.parse({
  id: "S45-stat-cesa",
  type: "stats",
  season: "2024-25",
  date: "2025-01-07T00:00:00Z",

  title: "Campeonato de España de Selecciones Autonómicas",
  category: "U14M",

  games: [
    game_2025_01_07_seleccion_valencia,
    game_2025_01_06_seleccion_galicia,
    game_2025_01_05_seleccion_baleares,
    game_2025_01_04_seleccion_canarias,
    game_2025_01_04_seleccion_melilla,
    game_2025_01_03_seleccion_murcia,
  ],

  description: [
    "Estadísticas de los partidos del torneo",
  ],

  references: [
    {
      type: "article",
      label: "Campeones de España",
      url: "https://www.fbm.es/noticia-123-12308/campeones-de-espa%C3%B1a!",
    },
    {
      type: "photo",
      label: "Album KDTINF2025 de la FEB",
      url: "https://www.flickr.com/photos/fbmadrid/54254576180/in/album-72177720323065549",
    },
  ],
});

