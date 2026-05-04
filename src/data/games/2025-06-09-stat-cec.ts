import type {Stats} from "../../model/StatsSchema.ts";
import {StatsSchema} from "../../model/StatsSchema.ts";
import {game_2025_06_01_obradoiro} from "./2025-06-01-obradoiro.ts";
import {game_2025_06_02_elche} from "./2025-06-02-elche.ts";
import {game_2025_06_03_barca} from "./2025-06-03-barca.ts";
import {game_2025_06_04_joventut} from "./2025-06-04-joventut.ts";

export const stat_2025_06_09_cec: Stats = StatsSchema.parse({
  id: "S45-stat-cesa",
  type: "stats",
  season: "2024-25",
  date: "2025-06-09T00:00:00Z",

  title: "Campeonato de España de Clubes FEB",
  category: "U14M",

  games: [
    game_2025_06_01_obradoiro,
    game_2025_06_02_elche,
    game_2025_06_03_barca,
    game_2025_06_04_joventut,
  ],

  description: [
    "En cuanto a resultado, sabe a poco. Quedar eliminados en octavos, cuando pudimos luchar por la victoria, deja un sabor amargo",
    "Pero una vez echas la vista atrás, y te das cuenta de todo lo que han conseguido los cachorros, es la hostia",
    "🥰 Es impresionante lo que han conseguido",
  ],

  references: [
    {
      type: "social-media",
      label: "Alguien random nos ha metido en un ranking: Top 10 aleros del campeonato",
      url: "https://www.instagram.com/p/DKxRiT5olHb/?img_index=8",
    },
    {
      type: "article",
      label: "Un escueto artículo sobre la final del campeonato",
      url: "https://www.feb.es/2025/6/7/baloncesto/final-barca-gana-infantil-masculino-deshace-empate/102156.aspx",
    },
    {
      type: "article",
      label: "Hay algunos artículos de la Federación de Madrid, pero solo hablan de equipos a partir de cuartos, no de nosotros: Semifinales",
      url: "https://fbm.es/noticia-99-12677/cuatro-equipos-madrile%C3%B1os-en-semifinales",
    },
    {
      type: "article",
      label: "Final del campeonato, según la FBM",
      url: "https://fbm.es/noticia-99-12691/el-real-madrid-infantil-luchar%C3%A1-por-el-oro",
    },
    {
      type: "article",
      label: "Medallero",
      url: "https://fbm.es/noticia-99-12699/una-plata-y-dos-bronces-en-huelva",
    },
  ],
});
