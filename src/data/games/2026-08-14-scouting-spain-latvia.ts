import type { Scouting } from "../../model/ScoutingSchema.ts";
import { ScoutingSchema } from "../../model/ScoutingSchema.ts";

export const scouting_2026_08_14_spain_latvia: Scouting = ScoutingSchema.parse({
  id: "S56-scouting-u16-spain-latvia",
  type: "scouting",
  season: "2025-26",
  date: "2026-08-14T19:30:00Z",

  title: "EuroBasket 2026: España vs Letonia",
  category: "U16M",

  description: [
    "Partido de la selección española U16M contra Letonia en el EuroBasket 2026.",
    "En un torneo anterior, España había vencido por poco.",
    "En esta ocasión, España perdió por muy poco, 87-92",
  ],

  // - 14-ago, Semis,
  // 🎥 [España 🆚 Letonia](https://www.youtube.com/watch?v=foPJ5AESP6k)
  // 🗑️ **87**-92
  // 📊 [stats](https://www.fiba.basketball/en/events/fiba-u16-eurobasket-2026/games/131961-ESP-LAT)
  video: "https://www.youtube.com/watch?v=foPJ5AESP6k",

  clips: [
    {
      start: "26:02",
      description: "Recepción de Cerdán en movimiento",
      type: "good-play",
    },
  ],
});
