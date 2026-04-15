import { AdvancedGameSchema } from "../../model/GameSchema.ts";
import type { AdvancedGame } from "../../model/GameSchema.ts";
import { venues } from "../venues.ts";
import { teams } from "../teams.ts";

export const game_2025_11_21_real_madrid: AdvancedGame = AdvancedGameSchema.parse({
  id: "S56-torneo-fll-j1",
  season: "2025-26",
  date: "2025-11-21T18:45:00Z",
  type: "advanced-game",

  competition: {
    name: "XVI Torneo Fundación Leucemia y Linfoma",
    category: "U15M",
    phase: "Grupos",
    round: "J1",
  },

  venue: venues["triangulo-oro"],

  home: {
    club: teams["real-madrid"],
    category: "U15M",
    scores: [24, 19, 27, 18],
  },

  away: {
    club: teams["alcobendas"],
    category: "U15M",
    scores: [6, 18, 20, 17],
  },

  playerStats: {
    time: 18 * 60 + 49,
    fieldGoals: {
      made: 4,
      attempted: 5,
    },
    threePointers: {
      made: 0,
      attempted: 2,
    },
    freeThrows: {
      made: 2,
      attempted: 2,
    },
    rebounds: {
      offensive: 0,
      defensive: 2,
    },
    assists: 0,
    steals: 1,
    turnovers: 2,
    blocks: {
      made: 0,
      received: 1,
    },
    faults: {
      made: 2,
      received: 2,
    },
    plusMinus: -13,
    efficiency: 7,
  },

  videos: {
    official: "https://youtu.be/rgPmi_85Poo",
    others: [
      {
        label: "en FFoFF",
        url: "https://youtu.be/ngx5X0PheCg",
      },
    ],
  },

  recap: {
    title: "¡Pfff, no se pudo hacer más!",
    lines: [
      "El Madrid se presentó con 2 tiarrones, y además, con un lituano casi más alto que ellos",
      "Quitando el primer cuarto, que estuvimos muy nerviosos, el resto del partido fue competido",
      "En general, dejamos buenas sensaciones, guardando un poquito para el partido de mañana, que es el más importante y donde tenemos que dar todo de nosotros",
    ],
  },

  references: [
    {
      type: "photo",
      label: "Fotos del partido",
      url: "https://www.flickr.com/photos/fbmadrid/54938959883/in/album-72177720330472562",
    },
    {
      type: "article",
      label: "Crónica de la jornada",
      url: "https://www.fbm.es/noticia-96-12946/la-selecci%C3%B3n-sorprende-y-el-real-madrid-impone-su-ley",
    },
  ],
});
