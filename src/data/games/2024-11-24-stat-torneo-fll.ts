import type {Stats} from "../../model/StatsSchema.ts";
import {StatsSchema} from "../../model/StatsSchema.ts";
import {game_2024_11_22_estudiantes} from "./2024-11-22-estudiantes.ts";
import {game_2024_11_23_barca} from "./2024-11-23-barca.ts";

export const stat_2024_11_24_torneo_fll: Stats = StatsSchema.parse({
  id: "S45-stat-torneo-fll",
  type: "stats",
  season: "2024-25",
  date: "2024-11-24T00:00:00Z",

  title: "XV Torneo Fundación Leucemia y Linfoma (FLL)",
  category: "U15M",

  games: [
    game_2024_11_22_estudiantes,
    game_2024_11_23_barca,
  ],

  description: [
    "Estadísticas de los partidos del torneo",
  ],

  references: [
    {
      type: "web",
      label: "Toda la información del XV Torneo FLL",
      url: "https://fbm.es/noticia-96-12213/calendario-del-xv-torneo-fll",
    },
    {
      type: "photo",
      label: "Galería de fotos",
      url: "https://www.flickr.com/photos/fbmadrid/albums/72177720322130779",
    },
  ],
});

