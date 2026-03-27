import {GameSchema} from "../../model/GameSchema.ts";
import type {Game} from "../../model/GameSchema.ts";

export const game_2026_03_17_canoe: Game = GameSchema.parse({
  id: "S5/6-league-f2-j10",
  season: "2025-26",
  date: "2026-03-17T13:30:00Z",
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
      name: "CB Alcobendas",
      logo: "https://example.com/logos/distrito.png",
    },
    category: "U15M",
    scores: [ 30, 19, 24, 15 ],
  },

  away: {
    club: {
      name: "Real Canoe",
      logo: "https://example.com/logos/lasrozas.png",
    },
    category: "U16M",
    scores: [ 15, 14, 20, 18 ],
  },
});
