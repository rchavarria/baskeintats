import {AdvancedGameSchema} from "../../model/GameSchema.ts";
import type {AdvancedGame} from "../../model/GameSchema.ts";
import {venues} from "../venues.ts";
import {teams} from "../teams.ts";

export const game_2026_05_10_torrelodones: AdvancedGame = AdvancedGameSchema.parse({
  id: "S56-liga-oro-f3-j1",
  type: "advanced-game",
  season: "2025-26",
  date: "2026-05-10T10:30:00Z",

  competition: {
    name: "Liga Ahorramás - Oro",
    category: "U16M",
    phase: "Fase 3",
    round: "J1",
  },

  venue: venues["torrelodones"],

  home: {
    club: teams["torrelodones"],
    category: "U16M",
    opponent: true,
    scores: [ 17, 23, 26, 11 ],
  },

  away: {
    club: teams["alcobendas"],
    category: "U16M",
    scores: [ 17, 7, 18, 15 ],
  },

  playerStats: {
    time: 23 * 60 + 9,
    fieldGoals: {
      made: 3,
      attempted: 5,
    },
    threePointers: {
      made: 1,
      attempted: 1,
    },
    freeThrows: {
      made: 1,
      attempted: 2,
    },
    rebounds: {
      offensive: 1,
      defensive: 5,
    },
    assists: 0,
    steals: 1,
    turnovers: 4,
    blocks: {
      made: 0,
      received: 0,
    },
    faults: {
      made: 1,
      received: 1,
    },
    plusMinus: -15,
    efficiency: 10,
  },

  videos: {
    official: "https://youtu.be/-",
    others: [
      {
        label: "Canal Pou",
        url: "https://youtu.be/-",
      },
    ],
  },

  recap: {
    title: "Nada... es muy complicado",
    lines: [
      "Primer partido contra ellos de toda la temporada",
      "Pensábamos que podríamos competir, pero ha resultado imposible",
      "Tampoco hemos hecho el mejor partido de la temporada, pero no ha estado mal",
      "Pero ellos tienen dos grandes, nosotros un grande lesionado y otro a medias",
      "Se hizo lo que se pudo",
    ],
  },

  references: [
    {
      type: "photo",
      label: "Fotos del mes de mayo (parece que solo infantiles)",
      url: "https://www.flickr.com/photos/fbmadrid/albums/72177720333561000/",
    },
    {
      type: "document",
      label: "Informe de la jornada",
      url: "https://fbm.es/informes.aspx?delegacion=1&grupo=16719&informe=resultados-clasificacion-proxima&ultima_jornada=108373&proxima_jornada=108374",
    },
    {
      type: "article",
      label: "Previa de la jornada",
      url: "https://www.fbm.es/noticia-104-13264/liga-ahorramas-infantil-cierra-los-cuartos-mirando-a-las-f4",
    },
    {
      type: "article",
      label: "Crónica de la jornada",
      url: "https://www.fbm.es/noticia-104-13278/liga-ahorramas-volando-hacia-las-fases-finales",
    },
  ],

});

