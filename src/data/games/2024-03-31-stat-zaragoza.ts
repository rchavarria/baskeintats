import type {Stats} from "../../model/StatsSchema.ts";
import {StatsSchema} from "../../model/StatsSchema.ts";
import {game_2024_03_31_fuenlabrada} from "./2024-03-31-fuenlabrada.ts";
import {game_2024_03_30_sp_burgos} from "./2024-03-30-sp-burgos.ts";
import {game_2024_03_30_zaragoza} from "./2024-03-30-zaragoza.ts";
import {game_2024_03_29_sp_burgos} from "./2024-03-29-sp-burgos.ts";
import {game_2024_03_28_moncayo} from "./2024-03-28-moncayo.ts";

export const stat_2024_03_31_zaragoza: Stats = StatsSchema.parse({
  id: "S34-stat-zaragoza",
  type: "stats",
  season: "2023-24",
  date: "2024-03-31T00:00:00Z",

  title: "Torneo de Zaragoza - Estadísticas",
  category: "U14M",

  games: [
    game_2024_03_28_moncayo,
    game_2024_03_29_sp_burgos,
    game_2024_03_30_zaragoza,
    game_2024_03_30_sp_burgos,
    game_2024_03_31_fuenlabrada,
  ],

  description: [
    "🏀 Buenas vacaciones de baloncesto",
    "Muy buen torneo, que ha servido para integrarse mejor en el equipo de 2010 y seguir ganando confianza y aprendizajes",
  ],

  references: [],
});

