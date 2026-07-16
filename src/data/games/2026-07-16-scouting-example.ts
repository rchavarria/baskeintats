import {ScoutingSchema} from "../../model/ScoutingSchema.ts";
import type {Scouting} from "../../model/ScoutingSchema.ts";

export const scouting_2026_07_16_example: Scouting = ScoutingSchema.parse({
  id: "S56-scouting-example",
  type: "scouting",
  season: "2025-26",
  date: "2026-07-16T10:00:00Z",

  title: "Scouting ejemplo — análisis de jugadas",
  category: "U16M",

  description: [
    "Análisis de las principales jugadas del partido contra Zentro del 30 de mayo.",
    "Se destacan situaciones de buen posicionamiento defensivo y algunos errores en el ataque.",
  ],

  video: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",

  clips: [
    {
      start: "1:23",
      description: "Buen bloqueo directo con continuación al aro.",
      type: "good-play",
    },
    {
      start: "4:05",
      description: "Pérdida de balón por falta de comunicación en el bloqueo.",
      type: "bad-play",
    },
    {
      start: "12:47",
      description: "Rebote ofensivo y conversión en segunda oportunidad.",
      type: "good-play",
    },
    {
      start: "1:02:30",
      description: "Falta ofensiva en el poste bajo por mal posicionamiento.",
      type: "bad-play",
    },
  ],

});
