import {AdvancedGameSchema} from "../../model/GameSchema.ts";
import type {AdvancedGame} from "../../model/GameSchema.ts";
import {venues} from "../venues.ts";
import {teams} from "../teams.ts";

export const game_2025_10_05_patrocinio: AdvancedGame = AdvancedGameSchema.parse({
  id: "S56-liga-u16-j3",
  type: "advanced-game",
  season: "2025-26",
  date: "2025-10-05T16:15:00Z",

  competition: {
    name: "Liga Ahorramás - Oro",
    category: "U16M",
    phase: "",
    round: "J3",
  },

  venue: venues["triangulo-oro"],

  home: {
    club: teams["patrocinio"],
    category: "U15M",
    scores: [21, 20, 14, 20, 9],
  },

  away: {
    club: teams["alcobendas"],
    category: "U15M",
    scores: [20, 17, 27, 11, 15],
  },

  playerStats: {
    time: 18 * 60 + 36,
    fieldGoals: {
      made: 1,
      attempted: 4,
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
      offensive: 0,
      defensive: 2,
    },
    assists: 0,
    steals: 1,
    turnovers: 1,
    blocks: {
      made: 0,
      received: 0,
    },
    faults: {
      made: 1,
      received: 1,
    },
    plusMinus: 7,
    efficiency: 4,
  },

  videos: {
    official: "https://youtu.be/SALk6vzg5mk",
    others: [],
  },

  recap: {
    title: "¡Phew! ¡Por poco!",
    lines: [
      "Conseguimos salvar un partido que tendríamos que haber ganado con holgura",
      "Pero ellos tenían muchísimo acierto, algo espectacular, y nosotros muchos fallos básicos",
      "Nos salvó el tercer cuarto, que salimos como una bala, y la prórroga, donde fuimos capaces de sobreponernos",
    ],
  },

  references: [
    {
      icon: "📸",
      label: "Fotos del mes de octubre",
      url: "https://www.flickr.com/photos/fbmadrid/albums/72177720329467187/with/54834936079",
    },
    {
      icon: "💼",
      label: "Informe de la jornada",
      url: "https://fbm.es/informes.aspx?delegacion=1&grupo=14615&informe=resultados-clasificacion-proxima&ultima_jornada=93794&proxima_jornada=93795",
    },
    {
      icon: "📰",
      label: "Previa del partido",
      url: "https://www.fbm.es/noticia-104-12854/primeros-grandes-duelos-en-la-liga-ahorramas",
    },
    {
      icon: "📰",
      label: "Crónica del partido",
      url: "https://www.fbm.es/noticia-104-12862/liga-ahorramas-emoci%C3%B3n-hasta-el-%C3%BAltimo-segundo",
    },
  ],

});

