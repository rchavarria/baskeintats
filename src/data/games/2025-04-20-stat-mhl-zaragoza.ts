import type {Stats} from "../../model/StatsSchema.ts";
import {StatsSchema} from "../../model/StatsSchema.ts";
import {game_2025_04_17_torrelodones} from "./2025-04-17-torrelodones.ts";
import {game_2025_04_18_alicante} from "./2025-04-18-alicante.ts";
import {game_2025_04_18_tarragona} from "./2025-04-18-tarragona.ts";
import {game_2025_04_19_lleida} from "./2025-04-19-lleida.ts";
import {game_2025_04_19_rozas} from "./2025-04-19-rozas.ts";
import {game_2025_04_20_laso} from "./2025-04-20-laso.ts";

export const stat_2025_04_20_mhl_zaragoza: Stats = StatsSchema.parse({
  id: "S45-stat-mhl-zaragoza",
  type: "stats",
  season: "2024-25",
  date: "2025-04-20T00:00:00Z",

  title: "MHL Zaragoza",
  category: "U14M",

  games: [
    game_2025_04_17_torrelodones,
    game_2025_04_18_alicante,
    game_2025_04_18_tarragona,
    game_2025_04_19_lleida,
    game_2025_04_19_rozas,
    game_2025_04_20_laso,
  ],

  description: [
    "Estadísticas de los partidos del torneo",
  ],

  references: [
    {
      type: "video",
      label: "Playlist con todos los partidos (Canal CBA)",
      url: "https://youtube.com/playlist?list=PL0J-VlEskgdZ2NShFtvIghO1ZZ9idVm3_",
    },
    {
      type: "photo",
      label: "Galería de fotos",
      url: "https://www.flickr.com/photos/mhlsports/albums/72177720325171969/with/54464374646",
    },
  ],
});
