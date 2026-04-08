import {GameSchema} from "../../model/GameSchema.ts";
import type {Game} from "../../model/GameSchema.ts";
import {venues} from "../venues.ts";
import {teams} from "../teams.ts";

export const game_2026_03_15_fuenlabrada: Game = GameSchema.parse({
  id: "S56-liga-plata-f2-gb-j9",
  season: "2025-26",
  date: "2026-03-15T18:00:00Z",
  status: "played",

  competition: {
    name: "Liga Ahorramás - Plata",
    category: "U15M",
    phase: "Fase 2 - Grupo B",
    round: "J9",
  },

  venue: venues["arroyo"],

  home: {
    club: teams["fuenlabrada"],
    category: "U15M",
    scores: [18, 20, 21, 26],
  },

  away: {
    club: teams["alcobendas"],
    category: "U15M",
    scores: [22, 18, 20, 26],
  },

  playerStats: {
    time: 10 * 60 + 42,
    fieldGoals: 4,
    threePointers: 0,
    freeThrows: {
      made: 2,
      attempted: 2,
    },
    faults: 5,
    plusMinus: 9,
    efficiency: 5,
  },

  videos: {
    official: "https://youtu.be/-iYlOFRDSUk",
    others: [
      {
        label: "canal CBA",
        url: "https://youtu.be/bddFVOST_6g",
      },
    ],
  },

  recap: {
    title: "¡Salvados por un 2+1 en los últimos segundos!",
    lines: [
      "Nos las prometíamos muy felices y muy de sobraos. ¡Para nada! Yo creo que estamos condicionados por el primer partido que tuvimos con ellos, pero aquel partido no reflejó su nivel",
      "Marcador muy ajustado durante todo el partido, con alternativas para ambos equipos, perdíamos de 8 a 2 minutos del final, pero los cachorros sacaron toda su garra, presionaron la salida del balón y tuvieron ese acierto que nos faltó en algún momento del partido",
      "Por nuestro lado más personal, no jugó mucho, pero cuando lo hizo, marcó la diferencia, por físico, por velocidad, por intensidad. Estamos contentos por cómo lo hizo",
    ],
  },

  references: [
    {
      icon: "📸",
      label: "Fotos del mes de marzo",
      url: "https://www.flickr.com/photos/fbmadrid/albums/72177720332315809",
    },
    {
      icon: "💼",
      label: "Informe de la jornada",
      url: "https://fbm.es/informes.aspx?delegacion=1&grupo=15326&informe=resultados-clasificacion-proxima&ultima_jornada=103475&proxima_jornada=103476",
    },
    {
      icon: "📰",
      label: "Previa del partido",
      url: "https://www.fbm.es/noticia-104-13142/liga-ahorramas-solo-vale-ganar",
    },
    {
      icon: "📰",
      label: "Crónica del partido",
      url: "https://www.fbm.es/noticia-104-13155/la-liga-ahorramas-est%C3%A1-desatada!",
    },
  ],
});

