import type {Stats} from "../../model/StatsSchema.ts";
import {StatsSchema} from "../../model/StatsSchema.ts";
import {game_2023_10_01_rozas} from "./2023-10-01-rozas.ts";
import {game_2023_09_24_leganes} from "./2023-09-24-leganes.ts";
import {game_2023_12_17_torrejon} from "./2023-12-17-torrejon.ts";
import {game_2023_12_03_san_agustin} from "./2023-12-03-san-agustin.ts";
import {game_2023_11_26_torrelodones} from "./2023-11-26-torrelodones.ts";
import {game_2023_11_19_rozas} from "./2023-11-19-rozas.ts";
import {game_2023_11_12_leganes} from "./2023-11-12-leganes.ts";
import {game_2023_11_05_torrejon} from "./2023-11-05-torrejon.ts";
import {game_2023_10_22_san_agustin} from "./2023-10-22-san-agustin.ts";
import {game_2023_10_08_torrelodones} from "./2023-10-08-torrelodones.ts";

export const stat_2023_12_18_liga_bronze_f1: Stats = StatsSchema.parse({
  id: "S34-stat-liga-bronze-f1",
  type: "stats",
  season: "2023-24",
  date: "2023-12-18T00:00:00Z",

  title: "Liga Ahorramás - Bronce - Fase 1 - Estadísticas",
  category: "U13M",

  games: [
    game_2023_09_24_leganes,
    game_2023_10_01_rozas,
    game_2023_10_08_torrelodones,
    game_2023_10_22_san_agustin,
    game_2023_11_05_torrejon,
    game_2023_11_12_leganes,
    game_2023_11_19_rozas,
    game_2023_11_26_torrelodones,
    game_2023_12_03_san_agustin,
    game_2023_12_17_torrejon,
  ],

  description: [
    "Estadísticas de los 10 partidos de la Liga Ahorramás, Bronce, Fase 1",
  ],

  references: [],
});

