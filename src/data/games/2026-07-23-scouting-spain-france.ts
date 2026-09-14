import type {Scouting} from "../../model/ScoutingSchema.ts";
import {ScoutingSchema} from "../../model/ScoutingSchema.ts";

export const scouting_2026_07_23_spain_france: Scouting = ScoutingSchema.parse({
  id: "S56-scouting-u16-spain-france",
  type: "scouting",
  season: "2025-26",
  date: "2026-07-23T20:00:00Z",

  title: "Torneo de Cáceres: España vs Francia",
  category: "U16M",

  // - 23-jul, 20h,
  // 🎥 [España 🆚 Francia](https://www.youtube.com/watch?v=0N4pPhaXGEI)
  // 🗑️ [83-66](https://x.com/BaloncestoESP/status/2080437428863570028)
  // 📊 [stats](https://www.feb.es/Documentos/Archivo/upload/WhatsApp%20Image%202026-07-23%20at%2023.37.21.jpeg)
  video: "https://www.youtube.com/watch?v=0N4pPhaXGEI",

});
