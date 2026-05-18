import type {Stats} from "../../model/StatsSchema.ts";
import {StatsSchema} from "../../model/StatsSchema.ts";
import {game_2024_05_05_rozas} from "./2024-05-05-rozas.ts";
import {game_2024_05_04_salvador} from "./2024-05-04-salvador.ts";
import {game_2024_05_03_humanitas} from "./2024-05-03-humanitas.ts";

export const stat_2024_05_05_salou: Stats = StatsSchema.parse({
  id: "S34-stat-salou",
  type: "stats",
  season: "2023-24",
  date: "2024-05-05T00:00:00Z",

  title: "Torneo de Salou - Estadísticas",
  category: "U14M",

  games: [
    game_2024_05_03_humanitas,
    game_2024_05_04_salvador,
    game_2024_05_05_rozas,
  ],

  description: [
    "Nada, deseando que se termine este torneo maldito",
  ],

  references: [],
});

