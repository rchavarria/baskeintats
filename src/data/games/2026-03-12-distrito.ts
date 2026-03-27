import {GameSchema} from "../../model/GameSchema.ts";
import type {Game} from "../../model/GameSchema.ts";

export const game_2026_03_12_distrito: Game = GameSchema.parse({
  season: "2025-26",
  date: "2026-03-12T17:00:00Z",
  status: "played",

  competition: {
    name: "Liga Provincial",
    category: "U16M",
    phase: "Regular",
    round: "21",
  },

  venue: {
    name: "Pabellón Municipal",
    address: "https://maps.google.com/?q=Pabell%C3%B3n+Municipal",
  },

  home: {
    club: {
      name: "CB Distrito Olímpico",
      logo: "https://example.com/logos/distrito.png",
    },
    category: "U16M",
    scores: [ 18, 19, 24, 15 ],
  },

  away: {
    club: {
      name: "CB Las Rozas",
      logo: "https://example.com/logos/lasrozas.png",
    },
    category: "U16M",
    scores: [ 22, 14, 20, 18 ],
  },
});
