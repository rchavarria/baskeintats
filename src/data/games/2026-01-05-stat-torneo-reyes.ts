import type {Stats} from "../../model/StatsSchema.ts";
import {StatsSchema} from "../../model/StatsSchema.ts";
import {game_2026_01_02_fuenlabrada} from "./2026-01-02-fuenlabrada.ts";
import {game_2026_01_02_zentro} from "./2026-01-02-zentro.ts";
import {game_2026_01_03_laso} from "./2026-01-03-laso.ts";
import {game_2026_01_04_zentro} from "./2026-01-04-zentro.ts";

export const stat_2026_01_05_torneo_reyes: Stats = StatsSchema.parse({
  id: "S56-stat-torneo-reyes",
  type: "stats",
  season: "2025-26",
  date: "2026-01-05T00:00:00Z",

  title: "I Torneo de Reyes - Estadísticas",
  category: "U15M",

  games: [
    game_2026_01_02_fuenlabrada,
    game_2026_01_02_zentro,
    game_2026_01_03_laso,
    game_2026_01_04_zentro,
  ],

  description: [
    "Estadísticas de los partidos del I Torneo de Reyes",
    "En el cual, nos proclamamos campeones... jugando en casa",
  ],

  references: [
    {
      type: "video",
      label: "Todos los partidos fueron retransmitidos en el canal de YouTube del club",
      url: "https://www.youtube.com/@ClubBaloncestoAlcobendas",
    },
    {
      type: "social-media",
      label: "Anuncio del torneo",
      url: "https://www.instagram.com/p/DS2YdVzjAoo",
    },
  ],
});

