import {FriendlyGameSchema} from "../../model/GameSchema.ts";
import type {FriendlyGame} from "../../model/GameSchema.ts";
import {venues} from "../venues.ts";
import {teams} from "../teams.ts";

export const game_2024_11_23_barca: FriendlyGame = FriendlyGameSchema.parse({
  id: "S45-torneo-fll-j2",
  type: "friendly-game",
  season: "2024-25",
  date: "2024-11-23T08:00:00Z",

  competition: {
    name: "XV Torneo FLL",
    category: "U14M",
    phase: "Grupos",
    round: "J2",
  },

  venue: venues["triangulo-oro"],

  home: {
    club: teams["seleccion-madrid"],
    category: "U14M",
    scores: [12, 9, 9, 9],
  },

  away: {
    club: teams["barca"],
    category: "U15M",
    opponent: true,
    scores: [33, 26, 22, 23],
  },

  playerStats: {
    time: 23 * 60 + 59,
    fieldGoals: 3,
    threePointers: 0,
    freeThrows: {
      made: 1,
      attempted: 2,
    },
    faults: 2,
    plusMinus: -23,
    efficiency: 3,
  },

  videos: {
    official: "https://youtu.be/ZLwdx0WHLjQ",
    others: [
      {
        label: "BasketCantera.TV",
        url: "https://youtu.be/N6Vxxi995_U",
      }
    ],
  },

  recap: {
    title: "¡Bien luchado!",
    lines: [
      "El objetivo de este partido no era ganarlo, eso era prácticamente imposible, el objetivo era luchar, competir, aprender...",
      "Y lo han hecho, no han bajado los brazos en ningún momento, han estado dándolo todo hasta el último segundo, y por eso hay que celebrarlo",
      "Lo han hecho fenomenal",
    ],
  },

  references: [
    {
      type: "article",
      label: "Crónica del partido",
      url: "https://www.fbm.es/noticia-96-12232/torneo-fll-bara-cumple,-unicaja-sufre-y-ricopia-se-mete-en-la-final",
    },
  ],
});

