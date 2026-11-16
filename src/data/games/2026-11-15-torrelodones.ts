import type { AdvancedGame } from "../../model/GameSchema.ts";
import { AdvancedGameSchema } from "../../model/GameSchema.ts";
import { teams } from "../teams.ts";
import { venues } from "../venues.ts";

export const game_2026_11_15_torrelodones: AdvancedGame = AdvancedGameSchema.parse({
  id: "S67-liga-oro-f1-g2-j7",
  type: "advanced-game",
  season: "2026-27",
  date: "2026-11-15T12:30:00Z",
  favorite: true,

  competition: {
    name: "Liga Ahorramás - Cadete - Oro",
    category: "U16M",
    phase: "Fase 1 - Grupo 2",
    round: "J7",
  },

  venue: venues.antela,

  home: {
    club: teams.alcobendas,
    category: "U16M",
    scores: [11, 28, 21, 12],
  },

  away: {
    club: teams.torrelodones,
    category: "U16M",
    opponent: true,
    scores: [13, 8, 16, 21],
  },

  playerStats: {
    time: 33 * 60 + 28,
    fieldGoals: {
      made: 6,
      attempted: 10,
    },
    threePointers: {
      made: 0,
      attempted: 1,
    },
    freeThrows: {
      made: 6,
      attempted: 8,
    },
    rebounds: {
      offensive: 0,
      defensive: 5,
    },
    assists: 3,
    steals: 3,
    turnovers: 3,
    blocks: {
      made: 0,
      received: 1,
    },
    faults: {
      made: 0,
      received: 9,
    },
    plusMinus: 10,
    efficiency: 27,
  },

  videos: {
    official: "https://youtu.be/GpQR2ytRkkY",
    others: [
      {
        label: "Canal CBA",
        url: "https://youtu.be/rOiMwaIQiHY",
      },
    ],
  },

  recap: {
    title: "¡¡Por fiiiiiin!!",
    lines: [
      "Contundente victoria del equipo, por fin!!!",
      "El partido comenzó igualado, pintaba mal, los precendentes dicen que nuestros minutos finales son malísimos",
      "Pero lo arreglamos en el segundo cuarto, con un parcial brutal",
      "El tercer cuarto aguantamos bien, sólidos en defensa, seguíamos fallando mucho, pero la defensa nos aguantaba",
      "Con una buena diferencia de puntos, arrancamos el último cuarto, y a puntito estuvimos de cagarla y liarla parda",
      "Pero los cachorros supieron reaccionar, y volvimos a sacar una ventaja considerable",
      "Resultado: la primera victoria de la temporada, con todo el mérito de los chicos, esperemos que la primera de muchas",
    ],
  },

  references: [
    {
      type: "photo",
      label: "Fotos del mes de noviembre",
      url: "https://www.flickr.com/photos/fbmadrid/albums/72177720336815217",
    },
    {
      type: "document",
      label: "Informe de la jornada",
      // Grupo 17503 = Liga Ahorramás - Cadete - Oro
      // F1 - G2 - J1 = Última jornada 110840
      // ...
      // F1 - G2 - J7 = 110846
      url: "https://fbm.es/informes.aspx?delegacion=1&grupo=17503&informe=resultados-clasificacion-proxima&ultima_jornada=110846&proxima_jornada=110847",
    },
    {
      type: "article",
      label: "Previa de la jornada",
      url: "https://www.fbm.es/noticia-104-13619/la-lucha-por-los-lideratos-enciende-la-liga-ahorramas",
    },
    {
      type: "article",
      label: "Crónica de la jornada",
      url: "https://www.fbm.es/noticia-104-13624/liga-ahorramas-tres-invictos-caen-en-la-s%C3%A9ptima-jornada",
    },
  ],
});
