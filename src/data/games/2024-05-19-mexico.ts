import {GameSchema} from "../../model/GameSchema.ts";
import type {Game} from "../../model/GameSchema.ts";
import {venues} from "../venues.ts";
import {teams} from "../teams.ts";
import {EmptyPlayerStats} from "../../model/PlayerSchema.ts";

export const game_2024_05_19_mexico: Game = GameSchema.parse({
  id: "S34-torneo-ardres-semis",
  type: "game",
  season: "2023-24",
  date: "2024-05-19T13:40:00Z",

  competition: {
    name: "Torneo Internacional TIHS (Ardres, Francia)",
    category: "U13M",
    phase: "Eliminatorias",
    round: "Semis",
  },

  venue: venues["ardres"],

  home: {
    club: teams["seleccion-madrid"],
    category: "U13M",
    scores: [20],
  },

  away: {
    club: teams["mexico"],
    category: "U13M",
    opponent: true,
    scores: [17],
  },

  playerStats: EmptyPlayerStats,

  videos: {
    official: "https://youtu.be/X0ABB8i9BDY",
    others: [
      {
        label: "Canal TIHS (parte 1)",
        url: "https://www.youtube.com/watch?v=mjco_x5EGI0",
      },
      {
        label: "Canal TIHS (parte 2)",
        url: "https://www.youtube.com/watch?v=HNZcCWUT1v4",
      },
    ],
  },

  recap: {
    title: "¡Qué partido tan igualado!",
    lines: [
      "La verdad es que daba la impresión de que Madrid iba a ganar sobrado, sin muchos problemas, pero hemos ganado por un triple, solo por una canasta",
      "Ha estado muy, muy ajustado, pero al final, nos llevamos la victoria y vamos a la final",
    ],
  },

  references: [
    {
      type: "social-media",
      label: "La selección madrileña jugará la final tras vencer a México",
      url: "https://x.com/FBMadrid/status/1792213722145956008",
    },
  ],

});
