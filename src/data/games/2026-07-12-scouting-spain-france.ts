import { ScoutingSchema } from "../../model/ScoutingSchema.ts";
import type { Scouting } from "../../model/ScoutingSchema.ts";

export const scouting_2026_07_12_spain_france: Scouting = ScoutingSchema.parse({
  id: "S56-scouting-spain-france",
  type: "scouting",
  season: "2025-26",
  date: "2026-07-12T19:30:00Z",

  title: "Torneo de la Amistad: España vs Francia",
  category: "U15M",

  description: ["first line of the description to show", "second line"],

  video: "https://www.youtube.com/watch?v=xFq8UrknD4Y",

  clips: [
    {
      start: "25:15", // 1Q 9:54
      description: "Estaguem con esquina ¿?",
      type: "good-play",
    },
    {
      start: "25:39",
      description: "Corte de Platón",
      type: "good-play",
    },
    {
      start: "28:10",
      description: "Saque de fondo (malo)",
      type: "bad-play",
    },
    {
      start: "32:20",
      description: "Saque de banda y movimiento de balón",
      type: "good-play",
    },
    {
      start: "39:25",
      description: "Jugada ensayada tras tiempo muerto",
      type: "good-play",
    },
    {
      start: "41:53",
      description: "Mano a mano (malo)",
      type: "bad-play",
    },
    {
      start: "44:35",
      description:
        "Mano a mano, lo coje Lucas (algo mejor), termina Bucero cogiendo buen rebote, fallando bandeja",
      type: "good-play",
    },
    {
      start: "45:13",
      description: "Saque de fondo completo (bueno)",
      type: "good-play",
    },
    {
      start: "50:20",
      description: "Empieza como top, Lucas sale de bloqueo, suelta el balón muy delante, la dobla",
      type: "good-play",
    },
    {
      start: "1:08:30",
      description: "Fondo (bueno)",
      type: "good-play",
    },
    {
      start: "2:02:16",
      description: "Pasos? No los hay de Jorge pero luego sí de Arnau",
      type: "bad-play",
    },
  ],
});
