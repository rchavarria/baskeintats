import {ScoutingSchema} from "../../model/ScoutingSchema.ts";
import type {Scouting} from "../../model/ScoutingSchema.ts";

export const scouting_2026_07_12_spain_france: Scouting = ScoutingSchema.parse({
  id: "S56-scouting-spain-france",
  type: "scouting",
  season: "2025-26",
  date: "2026-07-12T19:30:00Z",

  title: "Torneo de la Amistad: España vs Francia",
  category: "U15M",

  description: [
    "first line of the description to show",
    "second line",
  ],

  video: "https://www.youtube.com/watch?v=xFq8UrknD4Y",

  clips: [
    {
      start: "25:15", // 1Q 9:54
      description: "Estaguem con esquina ¿?",
      type: "good-play",
    },
  ],

});
