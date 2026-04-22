import {AdvancedGameSchema} from "../../model/GameSchema.ts";
import type {AdvancedGame} from "../../model/GameSchema.ts";
import {venues} from "../venues.ts";
import {teams} from "../teams.ts";

export const game_2026_04_20_zentro: AdvancedGame = AdvancedGameSchema.parse({
  id: "S56-liga-oro-playoffs-j1",
  type: "advanced-game",
  season: "2025-26",
  date: "2026-04-20T17:30:00Z",

  competition: {
    name: "Liga Ahorramás - Oro",
    category: "U16M",
    phase: "Playoffs",
    round: "J1",
  },

  venue: venues["diaz-miguel"],

  home: {
    club: teams["zentro"],
    category: "U16M",
    opponent: true,
    scores: [ 20, 30, 28, 23 ],
  },

  away: {
    club: teams["alcobendas"],
    category: "U16M",
    scores: [ 6, 16, 17, 7 ],
  },

  playerStats: {
    time: 22 * 60 + 33,
    fieldGoals: {
      made: 4,
      attempted: 4,
    },
    threePointers: {
      made: 1,
      attempted: 1,
    },
    freeThrows: {
      made: 0,
      attempted: 2,
    },
    rebounds: {
      offensive: 1,
      defensive: 1,
    },
    assists: 0,
    steals: 1,
    turnovers: 3,
    blocks: {
      made: 0,
      received: 1,
    },
    faults: {
      made: 3,
      received: 2,
    },
    plusMinus: -39,
    efficiency: 7,
  },

  videos: {
    official: "https://youtu.be/rFkqu-vmDsg",
    others: [
      {
        label: "Canal Pou",
        url: "https://youtu.be/uCva58WKq2M",
      },
      // {
      //   label: "Canal CBA/Zilberman",
      //   url: "https://youtu.be/-",
      // },
    ],
  },

  recap: {
    title: "¡¡Pfff!! Nada, no se puede hacer nada",
    lines: [
      "Nada, lo esperado, paliza total",
      "Es un equipo muy bueno, muy fuerte, con jugadores enormes y otros muy muy buenos",
      "Intentamos luchar. En lo personal, estamos orgullosos, pero fue muy complicado",
      "El equipo en general, decayó un poco, según iban pasando los minutos",
      "Nada que reprochar, todos sentíamos la sensación de impotencia",
      "Pero hay que demostrar que estamos a la altura, a competir, a no bajar los brazos, con intensidad ¡¡duros!!",
    ],
  },

  references: [
    {
      type: "photo",
      label: "Fotos del mes de abril",
      url: "https://www.flickr.com/photos/fbmadrid/albums/72177720333064636/",
    },
    {
      type: "document",
      label: "Informe de la jornada",
      url: "https://fbm.es/informes.aspx?delegacion=1&grupo=16446&informe=resultados-clasificacion-proxima&ultima_jornada=107207&proxima_jornada=107208",
    },
    {
      type: "article",
      label: "Previa del partido",
      url: "https://www.fbm.es/noticia-104-13217/cadete-abre-los-cuartos%2C-infantil-cierra-los-octavos",
    },
    {
      type: "article",
      label: "Crónica del partido",
      url: "https://www.fbm.es/noticia-104-13225/liga-ahorramas-infantil-decide-los-cuartos",
    },
  ],

});

