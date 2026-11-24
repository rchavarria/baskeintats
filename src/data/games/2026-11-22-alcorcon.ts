import type { AdvancedGame } from "../../model/GameSchema.ts";
import { AdvancedGameSchema } from "../../model/GameSchema.ts";
import { teams } from "../teams.ts";
import { venues } from "../venues.ts";

export const game_2026_11_22_alcorcon: AdvancedGame = AdvancedGameSchema.parse({
  id: "S67-liga-oro-f1-g2-j8",
  type: "advanced-game",
  season: "2026-27",
  date: "2026-11-22T10:30:00Z",

  competition: {
    name: "Liga Ahorramás - Cadete - Oro",
    category: "U16M",
    phase: "Fase 1 - Grupo 2",
    round: "J8",
  },

  venue: venues.antela,

  home: {
    club: teams.alcorcon,
    category: "U16M",
    opponent: true,
    scores: [12, 18, 20, 23],
  },

  away: {
    club: teams.alcobendas,
    category: "U16M",
    scores: [28, 15, 18, 21],
  },

  playerStats: {
    time: 29 * 60 + 48,
    fieldGoals: {
      made: 7,
      attempted: 8,
    },
    threePointers: {
      made: 2,
      attempted: 7,
    },
    freeThrows: {
      made: 5,
      attempted: 8,
    },
    rebounds: {
      offensive: 4,
      defensive: 6,
    },
    assists: 1,
    steals: 0,
    turnovers: 4,
    blocks: {
      made: 0,
      received: 1,
    },
    faults: {
      made: 3,
      received: 6,
    },
    plusMinus: 10,
    efficiency: 25,
  },

  videos: {
    official: "https://youtu.be/VX-LuHKFw7w",
    others: [
      {
        label: "Canal CBA",
        url: "https://youtu.be/100LksIAjB4",
      },
    ],
  },

  recap: {
    title: "¡Otra más!",
    lines: [
      "Otra revancha que nos cobramos",
      "Empezamos como un tiro, un primer cuarto para enmarcar, dábamos miedo",
      "Pero fue el único cuarto que ganamos",
      "Y, otra vez, a punto estuvimos de cagarla en los minutos finales. Van a ser nuestra espada de Damocles",
      "Todo el partido viviendo de las rentas del primer cuarto, imagínate cómo fue ese cuarto",
      "Al final, merecida victoria, y merecida revancha",
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
      // F1 - G2 - J8 = 110847
      url: "https://fbm.es/informes.aspx?delegacion=1&grupo=17503&informe=resultados-clasificacion-proxima&ultima_jornada=110847&proxima_jornada=110848",
    },
    {
      type: "article",
      label: "Previa de la jornada",
      url: "https://www.fbm.es/noticia-104-13629/duelos-directos-y-lideratos-en-juego-en-la-liga-ahorramas",
    },
    {
      type: "article",
      label: "Crónica de la jornada",
      url: "https://www.fbm.es/noticia-104-13639/liga-ahorramas-emoci%C3%B3n-hasta-el-final",
    },
  ],
});
