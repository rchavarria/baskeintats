import type {Stats} from "../../model/StatsSchema.ts";
import {StatsSchema} from "../../model/StatsSchema.ts";
import {game_2024_03_17_virgen_atocha} from "./2024-03-17-virgen-atocha.ts";
import {game_2024_03_10_tres_cantos} from "./2024-03-10-tres-cantos.ts";
import {game_2024_03_03_canoe} from "./2024-03-03-canoe.ts";
import {game_2024_02_25_alcala} from "./2024-02-25-alcala.ts";
import {game_2024_02_24_juande} from "./2024-02-24-juande.ts";
import {game_2024_02_11_virgen_atocha} from "./2024-02-11-virgen-atocha.ts";
import {game_2024_02_04_tres_cantos} from "./2024-02-04-tres-cantos.ts";
import {game_2024_01_28_canoe} from "./2024-01-28-canoe.ts";
import {game_2024_01_21_alcala} from "./2024-01-21-alcala.ts";
import {game_2024_01_14_juande} from "./2024-01-14-juande.ts";

export const stat_2024_03_18_liga_silver_f2: Stats = StatsSchema.parse({
  id: "S34-stat-liga-silver-f2",
  type: "stats",
  season: "2023-24",
  date: "2024-03-18T00:00:00Z",

  title: "Liga Ahorramás - Plata - Fase 2 - Estadísticas",
  category: "U13M",

  games: [
    game_2024_01_14_juande,
    game_2024_01_21_alcala,
    game_2024_01_28_canoe,
    game_2024_02_04_tres_cantos,
    game_2024_02_11_virgen_atocha,
    game_2024_02_24_juande,
    game_2024_02_25_alcala,
    game_2024_03_03_canoe,
    game_2024_03_10_tres_cantos,
    game_2024_03_17_virgen_atocha,
  ],

  description: [
    "Estadísticas de los partidos jugados con los mayores de la Liga Ahorramás, Plata, Fase 2",
    "🏀 Una segunda fase muy muy intensa, un total de 20 partidos, aunque con pocos minutos jugados con el equipo de 2010, pero que aun así, han servido para aprender y coger confianza",
    "El equipo descenderá a categoría bronce, al solo haber ganado un partido, pero el aprendizaje y crecimiento que han tenido los chicos, lo habrán tenido muy poquitos equipos",
  ],

  references: [],
});

