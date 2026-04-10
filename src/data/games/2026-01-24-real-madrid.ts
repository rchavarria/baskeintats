import { GameSchema } from "../../model/GameSchema.ts";
import type { Game } from "../../model/GameSchema.ts";
import { venues } from "../venues.ts";
import { teams } from "../teams.ts";

export const game_2026_01_24_real_madrid: Game = GameSchema.parse({
  id: "S56-liga-plata-f2-gb-j3",
  season: "2025-26",
  date: "2026-01-24T16:00:00Z",
  type: "game",

  competition: {
    name: "Liga Ahorramás - Plata",
    category: "U15M",
    phase: "Fase 2 - Grupo B",
    round: "J3",
  },

  venue: venues["antela"],

  home: {
    club: teams["alcobendas"],
    category: "U15M",
    scores: [23, 17, 30, 25],
  },

  away: {
    club: teams["real-madrid"],
    category: "U15M",
    scores: [17, 23, 15, 21],
  },

  playerStats: {
    time: 30 * 60 + 43,
    fieldGoals: 3,
    threePointers: 1,
    freeThrows: {
      made: 2,
      attempted: 3,
    },
    faults: 4,
    plusMinus: 14,
    efficiency: 6,
  },

  videos: {
    official: "https://youtu.be/_HNB9K6it1w",
    others: [
      {
        label: "canal CBA",
        url: "https://youtu.be/7152150ggQg",
      },
    ],
  },

  recap: {
    title: "¡Históricoooo!",
    lines: [
      "Si el partido anterior fue una pasada, este ha sido histórico",
      "Han ganado al puñetero Madriz, y sin paliativos",
      "Había algunas bajas en el rival, pero como en todos los lados, las imprevisibles lesiones",
      "Sobre todo el tercer cuarto, les han pasado por encima, una defensa implacable, les dejaba sin ninguna opción, no sabían qué hacer",
      "Divertidísimo, seguro que remueve cosas por ahí. Más divertido todavía",
    ],
  },

  references: [
    {
      icon: "📸",
      label: "Fotos del mes de enero",
      url: "https://www.flickr.com/photos/fbmadrid/sets/72177720331399343/",
    },
    {
      icon: "💼",
      label: "Informe de la jornada",
      url: "https://fbm.es/informes.aspx?delegacion=1&grupo=15326&informe=resultados-clasificacion-proxima&ultima_jornada=103469&proxima_jornada=103470",
    },
    {
      icon: "📰",
      label: "Previa del partido",
      url: "https://www.fbm.es/noticia-104-13041/crece-la-emoci%C3%B3n-en-la-liga-ahorramas",
    },
    {
      icon: "📰",
      label: "Crónica del partido",
      url: "https://fbm.es/noticia-123-13057/sube-la-temperatura-en-la-liga-ahorramas",
    },
    {
      icon: "📱",
      label: "De público en la Liga U22",
      url: "https://x.com/BaloncestoESP/status/2015817506686960101",
    },
  ],
});

