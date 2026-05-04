import type {Stats} from "../../model/StatsSchema.ts";
import {StatsSchema} from "../../model/StatsSchema.ts";
import {game_2025_04_27_alcorcon} from "./2025-04-27-alcorcon.ts";
import {game_2025_05_10_alcorcon} from "./2025-05-10-alcorcon.ts";
import {game_2025_05_11_alcorcon} from "./2025-05-11-alcorcon.ts";
import {game_2025_05_17_rozas} from "./2025-05-17-rozas.ts";
import {game_2025_05_18_real_madrid} from "./2025-05-18-real-madrid.ts";

export const stat_2025_05_19_league_gold_final: Stats = StatsSchema.parse({
  id: "S45-stat-league-gold-final",
  type: "stats",
  season: "2024-25",
  date: "2025-05-19T00:00:00Z",

  title: "Liga Ahorramás - Oro - Fase Final",
  category: "U14M",

  games: [
    game_2025_04_27_alcorcon,
    game_2025_05_10_alcorcon,
    game_2025_05_11_alcorcon,
    game_2025_05_17_rozas,
    game_2025_05_18_real_madrid,
  ],

  description: [
    "Estadísticas de los partidos de la fase",
  ],

  references: [
    {
      type: "photo",
      label: "Imágenes de la Final a 4",
      url: "https://www.flickr.com/photos/fbmadrid/54528571551/in/album-72177720326204794",
    },
    {
      type: "article",
      label: "Fase final de la Liga Ahorramás infantil masculina",
      url: "https://www.fbm.es/noticia-104-12564/fase-final-de-la-liga-ahorramas-infantil-masculina",
    },
    {
      type: "photo",
      label: "Fotos del álbum de mayo",
      url: "https://www.flickr.com/photos/fbmadrid/54514339388/in/album-72177720326026152",
    },
    {
      type: "photo",
      label: "Fotos del Club Baloncesto Alcobendas",
      url: "https://www.flickr.com/photos/cbalcobendas/albums/72177720326054799/",
    },
  ],
});
