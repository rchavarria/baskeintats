import type {Stats} from "../../model/StatsSchema.ts";
import {StatsSchema} from "../../model/StatsSchema.ts";
import {game_2024_04_28_alcorcon} from "./2024-04-28-alcorcon.ts";
import {game_2024_06_09_estudio} from "./2024-06-09-estudio.ts";
import {game_2024_06_02_rozas} from "./2024-06-02-rozas.ts";
import {game_2024_05_26_zentro} from "./2024-05-26-zentro.ts";
import {game_2024_04_28_parla} from "./2024-04-28-parla.ts";
import {game_2024_04_13_alcala} from "./2024-04-13-alcala.ts";
import {game_2024_04_07_parla} from "./2024-04-07-parla.ts";

export const stat_2024_06_09_liga_bronze_f3: Stats = StatsSchema.parse({
  id: "S34-stat-liga-bronze-f3",
  type: "stats",
  season: "2023-24",
  date: "2024-06-09T00:00:00Z",

  title: "Liga Ahorramás - Bronce - Fase 3 - Estadísticas",
  category: "U13M",

  games: [
    game_2024_04_07_parla,
    game_2024_04_13_alcala,
    game_2024_04_28_parla,
  ],

  description: [
    "🏀 Fin de la liga",
    "Termina la tercera fase, tanto de 2010 como de 2011",
    "Con los nuestros no nos jugábamos nada, puesto que el lugar en bronce ya estaba asegurado",
    "Entre el final de la fase de un año y otro ha habido una lesión, así que hay algún partido que no hemos podido jugar",
  ],

  references: [],
});

