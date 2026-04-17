import type {Stats} from "../../model/StatsSchema.ts";
import {StatsSchema} from "../../model/StatsSchema.ts";
import {game_2025_11_21_real_madrid} from "./2025-11-21-real-madrid.ts";
import {game_2025_11_22_joventut} from "./2025-11-22-joventut.ts";
import {game_2025_11_23_seleccion_madrid} from "./2025-11-23-seleccion-madrid.ts";

export const stats_2025_11_23_torneo_fll: Stats = StatsSchema.parse({
  id: "S56-stats-torneo-fll",
  type: "stats",
  season: "2025-26",
  date: "2025-11-23T00:00:00Z",

  title: "XVI Torneo Fundación Leucemia y Linfoma - Estadísticas",
  category: "U15M",

  games: [
    game_2025_11_21_real_madrid,
    game_2025_11_22_joventut,
    game_2025_11_23_seleccion_madrid,
  ],

  description: [
    "Estadísticas de los partidos del torneo",
  ],

  references: [
    {
      type: "article",
      label: "Toda la información sobre el XV Torneo FLL (Calendario, dosier de prensa, equipos participantes, rosters, resultados...)",
      url: "https://www.fbm.es/noticia-96-12938/calendario-del-xvi-torneo-fundaci%C3%B3n-leucemia-y-linfoma",
    },
    {
      type: "social-media",
      label: "Resultados del torneo",
      url: "https://x.com/FBMadrid/status/1992601763711787059",
    },
    {
      type: "photo",
      label: "Galería de fotos",
      url: "https://www.flickr.com/photos/fbmadrid/54938959883/in/album-72177720330472562",
    },
  ],
});

