import { GameSchema } from "../../model/GameSchema.ts";
import type { Game } from "../../model/GameSchema.ts";
import { venues } from "../venues.ts";
import { teams } from "../teams.ts";

export const game_2025_04_27_alcorcon: Game = GameSchema.parse({
  id: "S45-liga-ahorramas-playoffs-j1",
  season: "2024-25",
  date: "2025-04-27T09:15:00Z",
  type: "game",

  competition: {
    name: "Liga Ahorramás",
    category: "U15M",
    phase: "Play-Offs",
    round: "J1",
  },

  venue: venues["ferrandiz"],

  home: {
    club: teams["alcobendas"],
    category: "U15M",
    scores: [19, 10, 22, 13],
  },

  away: {
    club: teams["alcorcon"],
    category: "U15M",
    opponent: true,
    scores: [15, 11, 10, 14],
  },

  playerStats: {
    time: 27 * 60 + 5,
    fieldGoals: 4,
    threePointers: 0,
    freeThrows: {
      made: 0,
      attempted: 0,
    },
    faults: 4,
    plusMinus: 5,
    efficiency: 0,
  },

  videos: {
    official: "https://youtu.be/blB22277XD0",
    others: [],
  },

  recap: {
    title: "¡Durísimo partido!",
    lines: [
      "Qué difícil ha sido. Una primera parte muy igualada. Nosotros desperdiciando muchas ocasiones claras de canasta, ellos tampoco estuvieron muy acertados",
      "Hasta el tercer cuarto, donde ahí sí que marcamos la diferencia. Y el último cuarto solo tuvimos que aguantar, pero no fue fácil",
    ],
  },

  references: [
    {
      type: "photo",
      label: "Algunas fotos del álbum de abril",
      url: "https://flic.kr/s/aHBqjCc5hq",
    },
    {
      type: "document",
      label: "Informe de la jornada",
      url: "https://fbm.es/informes.aspx?delegacion=1&grupo=12748&informe=resultados-clasificacion-proxima&ultima_jornada=85251&proxima_jornada=-1",
    },
    {
      type: "article",
      label: "Previa del partido",
      url: "https://fbm.es/noticia-123-12511/liga-ahorramas-infantil-inicia-los-cuartos-de-final",
    },
    {
      type: "article",
      label: "Crónica del partido",
      url: "https://fbm.es/noticia-123-12528/ligaahorramas-emoci%C3%B3n-en-la-categor%C3%ADa-infantil",
    },
  ],
});

