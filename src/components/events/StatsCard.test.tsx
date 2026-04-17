import { render, screen, within } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import { describe, expect, it } from "vitest";
import { AdvancedGameSchema, GameSchema } from "../../model/GameSchema";
import type { Reference } from "../../model/ReferenceSchema";
import { StatsSchema } from "../../model/StatsSchema";
import type { Team } from "../../model/TeamSchema";
import type { Venue } from "../../model/VenueSchema";
import { StatsCard } from "./StatsCard";
import {stat_2025_11_23_torneo_fll} from "../../data/games/2025-11-23-stat-torneo-fll.ts";
import {stat_2026_03_23_liga_plata_f2_gd} from "../../data/games/2026-03-23-stat-liga-plata-f2-gd.ts";
import {stat_2026_03_23_liga_plata_f2_gb} from "../../data/games/2026-03-23-stat-liga-plata-f2-gb.ts";
import {stat_2026_01_05_torneo_reyes} from "../../data/games/2026-01-05-stat-torneo-reyes.ts";
import {stat_2025_12_22_torneo_teruel} from "../../data/games/2025-12-22-stat-torneo-teruel.ts";
import {stat_2025_12_15_liga_oro_f1_g1} from "../../data/games/2025-12-15-stat-liga-oro-f1-g1.ts";
import {stat_2025_12_15_liga_plata_f1_g4} from "../../data/games/2025-12-15-stat-liga-plata-f1-g4.ts";

function renderWithRouter(ui: React.ReactElement) {
  return render(<MemoryRouter>{ui}</MemoryRouter>);
}

/*

    stat_2026_03_23_liga_plata_f2_gd,
    stat_2026_03_23_liga_plata_f2_gb,
    stat_2026_01_05_torneo_reyes,
    stat_2025_12_22_torneo_teruel,
    stat_2025_12_15_liga_oro_f1_g1,
    stat_2025_12_15_liga_plata_f1_g4,
    stats_2025_11_23_torneo_fll,

 */
describe("StatsCard", () => {
  it.each([
    // [ stat_2026_03_23_liga_plata_f2_gd ],
    // [ stat_2026_03_23_liga_plata_f2_gb ],
    // [ stat_2026_01_05_torneo_reyes ],
    [ stat_2025_12_22_torneo_teruel ],
    // [ stat_2025_12_15_liga_oro_f1_g1 ],
    // [ stat_2025_12_15_liga_plata_f1_g4 ],
    [ stat_2025_11_23_torneo_fll ],
  ])("renders stats metadata and links to the stats detail page", (stats) => {
    renderWithRouter(<StatsCard stats={stats} />);

    expect(screen.getByText(stats.title)).toBeInTheDocument();
    expect(screen.getByText(stats.category)).toBeInTheDocument();
    // expect(screen.getByText(/23.*de.*noviembre.*de.*2025/i)).toBeInTheDocument();
  });
});

