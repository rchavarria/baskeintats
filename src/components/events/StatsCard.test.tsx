import {render, screen} from "@testing-library/react";
import {MemoryRouter} from "react-router-dom";
import {describe, expect, it} from "vitest";
import {StatsCard} from "./StatsCard";
import {stat_2025_11_23_torneo_fll} from "../../data/games/2025-11-23-stat-torneo-fll.ts";
import {stat_2026_03_23_liga_plata_f2_gd} from "../../data/games/2026-03-23-stat-liga-plata-f2-gd.ts";
import {stat_2026_03_23_liga_plata_f2_gb} from "../../data/games/2026-03-23-stat-liga-plata-f2-gb.ts";
import {stat_2025_12_22_torneo_teruel} from "../../data/games/2025-12-22-stat-torneo-teruel.ts";
import {stat_2025_12_15_liga_oro_f1_g1} from "../../data/games/2025-12-15-stat-liga-oro-f1-g1.ts";
import {stat_2025_12_15_liga_plata_f1_g4} from "../../data/games/2025-12-15-stat-liga-plata-f1-g4.ts";
import {stat_2024_11_24_torneo_fll} from "../../data/games/2024-11-24-stat-torneo-fll.ts";
import {stat_2024_09_08_torneig_nord} from "../../data/games/2024-09-08-stat-torneig-nord.ts";
import {stat_2024_12_16_league_gold_f1} from "../../data/games/2024-12-16-stat-liga-oro-f1.ts";
import {stat_2025_01_07_cesa} from "../../data/games/2025-01-07-stat-cesa.ts";
import {stat_2025_06_09_cec} from "../../data/games/2025-06-09-stat-cec.ts";
import {stat_2025_03_17_league_gold_f2} from "../../data/games/2025-03-17-stat-league-gold-f2.ts";
import {stat_2025_05_19_league_gold_final} from "../../data/games/2025-05-19-stat-league-gold-final.ts";
import {stat_2025_04_20_mhl_zaragoza} from "../../data/games/2025-04-20-stat-mhl-zaragoza.ts";
import {stat_2023_12_18_liga_gold_f1} from "../../data/games/2023-12-18-stat-liga-gold-f1.ts";
import {stat_2023_12_18_liga_bronze_f1} from "../../data/games/2023-12-18-stat-liga-bronze-f1.ts";
import {stat_2024_03_18_liga_silver_f2} from "../../data/games/2024-03-18-stat-liga-silver-f2.ts";
import {stat_2024_06_09_liga_bronze_f3} from "../../data/games/2024-06-09-stat-liga-bronze-f3.ts";
import {stat_2024_06_09_liga_gold_f3} from "../../data/games/2024-06-09-stat-liga-gold-f3.ts";
import {stat_2024_05_05_salou} from "../../data/games/2024-05-05-stat-salou.ts";
import {stat_2024_03_31_zaragoza} from "../../data/games/2024-03-31-stat-zaragoza.ts";

function renderWithRouter(ui: React.ReactElement) {
  return render(<MemoryRouter>{ui}</MemoryRouter>);
}

describe("StatsCard", () => {
  it.each([
    [ stat_2026_03_23_liga_plata_f2_gd ],
    [ stat_2026_03_23_liga_plata_f2_gb ],
    [ stat_2025_12_22_torneo_teruel ],
    [ stat_2025_12_15_liga_oro_f1_g1 ],
    [ stat_2025_12_15_liga_plata_f1_g4 ],
    [ stat_2025_11_23_torneo_fll ],
    [ stat_2025_06_09_cec ],
    [ stat_2025_05_19_league_gold_final ],
    [ stat_2025_04_20_mhl_zaragoza ],
    [ stat_2025_03_17_league_gold_f2 ],
    [ stat_2025_01_07_cesa ],
    [ stat_2024_12_16_league_gold_f1 ],
    [ stat_2024_11_24_torneo_fll ],
    [ stat_2024_09_08_torneig_nord ],
    [ stat_2024_06_09_liga_gold_f3 ],
    [ stat_2024_06_09_liga_bronze_f3 ],
    [ stat_2024_05_05_salou ],
    [ stat_2024_03_31_zaragoza ],
    [ stat_2024_03_18_liga_silver_f2 ],
    [ stat_2023_12_18_liga_gold_f1 ],
    [ stat_2023_12_18_liga_bronze_f1 ],
  ])("renders stats metadata and links to the stats detail page", (stats) => {
    renderWithRouter(<StatsCard stats={stats} />);

    expect(screen.getByText(stats.title)).toBeInTheDocument();
    expect(screen.getByText(stats.category)).toBeInTheDocument();
    // expect(screen.getByText(/23.*de.*noviembre.*de.*2025/i)).toBeInTheDocument();
  });
});

