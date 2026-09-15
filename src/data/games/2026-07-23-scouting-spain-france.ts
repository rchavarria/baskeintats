import type { Scouting } from "../../model/ScoutingSchema.ts";
import { ScoutingSchema } from "../../model/ScoutingSchema.ts";

export const scouting_2026_07_23_spain_france: Scouting = ScoutingSchema.parse({
  id: "S56-scouting-u16-spain-france",
  type: "scouting",
  season: "2025-26",
  date: "2026-07-23T20:00:00Z",

  title: "Torneo de Cáceres: España vs Francia",
  category: "U16M",

  description: [
    "Partido de la selección española U16M contra Francia en el Torneo de Cáceres.",
    "Un torneo de preparación para el Europeo U16M que se celebrará en agosto de 2026.",
    "El resultado fue de 83-66 a favor de España.",
  ],

  // - 23-jul, 20h,
  // 🎥 [España 🆚 Francia](https://www.youtube.com/watch?v=0N4pPhaXGEI)
  // 🗑️ [83-66](https://x.com/BaloncestoESP/status/2080437428863570028)
  // 📊 [stats](https://www.feb.es/Documentos/Archivo/upload/WhatsApp%20Image%202026-07-23%20at%2023.37.21.jpeg)
  video: "https://www.youtube.com/watch?v=0N4pPhaXGEI",

  clips: [
    {
      start: "22:10",
      description: "Saque de banda, malo, aunque lo salva Andrés Crespo, #8",
      type: "bad-play",
    },
    {
      start: "32:29",
      description:
        "Muy buena circulación, sin poder pisar pintura, que termina con un triple fallado, rebote y corte",
      type: "good-play",
    },
    {
      start: "38:41",
      description:
        "Ataque contra algo parecido a zona, se queda la esquina liberada, pase complicado, pero llega bien, y triplazo",
      type: "good-play",
    },
    {
      start: "1:27:00",
      description: "Sale del bloqueo del poste, finta de tiro, tiro midi tras bote",
      type: "good-play",
    },
  ],
});
