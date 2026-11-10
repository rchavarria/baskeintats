import type { AdvancedGame } from "../../model/GameSchema.ts";
import { AdvancedGameSchema } from "../../model/GameSchema.ts";
import { teams } from "../teams.ts";
import { venues } from "../venues.ts";

export const game_2026_11_08_sba: AdvancedGame = AdvancedGameSchema.parse({
  id: "S67-liga-junior-oro-f1-g1-j6",
  type: "advanced-game",
  season: "2026-27",
  date: "2026-11-08T12:30:00Z",

  competition: {
    name: "Liga Ahorramás - Junior - Oro",
    category: "U18M",
    phase: "Fase 1 - Grupo 1",
    round: "J6",
  },

  venue: venues.antela,

  home: {
    club: teams.alcobendas,
    category: "U18M",
    scores: [11, 32, 27, 20],
  },

  away: {
    club: teams.sba,
    category: "U18M",
    opponent: true,
    scores: [32, 21, 22, 35],
  },

  playerStats: {
    time: 12 * 60 + 21,
    fieldGoals: {
      made: 1,
      attempted: 3,
    },
    threePointers: {
      made: 2,
      attempted: 2,
    },
    freeThrows: {
      made: 1,
      attempted: 3,
    },
    rebounds: {
      offensive: 0,
      defensive: 3,
    },
    assists: 1,
    steals: 0,
    turnovers: 1,
    blocks: {
      made: 0,
      received: 0,
    },
    faults: {
      made: 0,
      received: 2,
    },
    plusMinus: -4,
    efficiency: 10,
  },

  videos: {
    official: "https://youtu.be/go9AWn84-pg",
    others: [
      {
        label: "Canal Pou",
        url: "https://youtu.be/DXi7rauGad0",
      },
    ],
  },

  recap: {
    title: "¡Partido raro donde los haya!",
    lines: [
      "El primer cuarto fue demoledor, muchos asistentes echaban la culpa a los árbitros",
      "El segundo ya fue algo mejor, remontando",
      "Pero con varios jugadores con 4 faltas. ¡Antes del descanso! No podía ser",
      "Y a falta de 3 segundos para el descanso, el entrenador pierde los papeles y se lleva dos técnicas",
      "El tercer cuarto aguantamos, sin entrenador, pero los cachorros lo daban todo",
      "El último cuarto fue un desastre, varios jugadores con 5 faltas, la moral por los suelos, los árbitros de mal en peor...",
      "Una lástima, porque los nuestros demostraron que podían con ellos, que no eran mejores, pero el público perdió los papeles",
    ],
  },

  references: [
    {
      type: "photo",
      label: "Fotos del mes de octubre",
      url: "https://www.flickr.com/photos/fbmadrid/albums/72177720336020609",
    },
    {
      type: "document",
      label: "Informe de la jornada",
      // Grupo 17494 = Liga Ahorramás - Junior - Oro
      // F1 - J2 = 110611
      // F1 - J3 = 110612
      // F1 - J4 = 110613
      // F1 - J5 = 110614
      // F1 - J6 = 110615
      url: "https://fbm.es/informes.aspx?delegacion=1&grupo=17494&informe=resultados-clasificacion-proxima&ultima_jornada=110615&proxima_jornada=110616",
    },
    {
      type: "article",
      label: "Previa de la jornada",
      url: "https://www.fbm.es/noticia-104-13606/liga-ahorramas-arranca-la-segunda-vuelta",
    },
    {
      type: "article",
      label: "Crónica de la jornada",
      url: "https://www.fbm.es/noticia-123-13614/la-liga-ahorramas-sube-su-intensidad-en-la-segunda-vuelta",
    },
  ],
});
