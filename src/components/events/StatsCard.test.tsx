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

function makeBasicGame(id: string, date: string, opponent: string, fieldGoals: number, threePointers: number, ftMade: number, ftAttempted: number) {
  return {
    id,
    type: "game" as const,
    season: "2025-26",
    date,
    favourite: false,
    competition: { name: "Liga", category: "U15M" as const, phase: "F1", round: "J1" },
    venue: { name: "Pabellón", location: "Madrid" },
    home: { club: { id: "team-a", name: "Equipo A", logo: "default.png" }, category: "U15M" as const, opponent: false, scores: [20, 20] },
    away: { club: { id: "team-b", name: opponent, logo: "default.png" }, category: "U15M" as const, opponent: true, scores: [15, 15] },
    playerStats: { time: 20, fieldGoals, threePointers, freeThrows: { made: ftMade, attempted: ftAttempted }, faults: 2, plusMinus: 5, efficiency: 10 },
    videos: { official: "https://example.com" },
    recap: { title: "Resumen", lines: ["Buen partido"] },
    references: [],
  };
}

function makeAdvancedGame(id: string, date: string, opponent: string, fg: {made: number, attempted: number}, tp: {made: number, attempted: number}, ft: {made: number, attempted: number}) {
  return {
    id,
    type: "advanced-game" as const,
    season: "2025-26",
    date,
    favourite: false,
    competition: { name: "Liga", category: "U15M" as const, phase: "F1", round: "J1" },
    venue: { name: "Pabellón", location: "Madrid" },
    home: { club: { id: "team-a", name: "Equipo A", logo: "default.png" }, category: "U15M" as const, opponent: false, scores: [25, 25] },
    away: { club: { id: "team-c", name: opponent, logo: "default.png" }, category: "U15M" as const, opponent: true, scores: [18, 18] },
    playerStats: {
      time: 25,
      fieldGoals: fg,
      threePointers: tp,
      freeThrows: ft,
      rebounds: { offensive: 2, defensive: 3 },
      assists: 4,
      steals: 1,
      turnovers: 2,
      blocks: { made: 1, received: 0 },
      faults: { made: 2, received: 3 },
      plusMinus: 8,
      efficiency: 15,
    },
    videos: { official: "https://example.com" },
    recap: { title: "Resumen", lines: ["Gran partido"] },
    references: [],
  };
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

  it("shows totals for 2PT, 3PT and FT with basic stats", () => {
    const stats = {
      id: "stat-basic-totals",
      type: "stats" as const,
      season: "2025-26",
      date: "2026-01-15T00:00:00Z",
      title: "Liga Fase 1",
      category: "U15M" as const,
      games: [
        makeBasicGame("g1", "2026-01-08T00:00:00Z", "Rival A", 4, 2, 3, 5),
        makeBasicGame("g2", "2026-01-10T00:00:00Z", "Rival B", 3, 1, 2, 4),
        makeBasicGame("g3", "2026-01-12T00:00:00Z", "Rival C", 5, 3, 4, 6),
      ],
      description: ["Buena fase"],
      references: [],
    };

    renderWithRouter(<StatsCard stats={stats} />);

    // Total row: 2PT=12, 3PT=6, FT=9/15
    expect(screen.getByText("12")).toBeInTheDocument();
    expect(screen.getByText("6")).toBeInTheDocument();
    expect(screen.getByText("9/15")).toBeInTheDocument();
  });

  it("shows averages for 2PT, 3PT and FT percentage with basic stats", () => {
    const stats = {
      id: "stat-basic-avg",
      type: "stats" as const,
      season: "2025-26",
      date: "2026-02-15T00:00:00Z",
      title: "Liga Fase 2",
      category: "U15M" as const,
      games: [
        makeBasicGame("g4", "2026-02-01T00:00:00Z", "Rival D", 6, 2, 4, 5),
        makeBasicGame("g5", "2026-02-03T00:00:00Z", "Rival E", 4, 4, 6, 10),
      ],
      description: ["Segunda fase"],
      references: [],
    };

    renderWithRouter(<StatsCard stats={stats} />);

    // Media row: 2PT avg = 10/2 = 5.0, 3PT avg = 6/2 = 3.0, FT% = 10/15 = 67%
    const cells = screen.getAllByText("5.0");
    expect(cells.length).toBeGreaterThanOrEqual(1);
    expect(screen.getByText("3.0")).toBeInTheDocument();
    expect(screen.getByText("67%")).toBeInTheDocument();
  });

  it("shows totals for 2PT, 3PT and FT with advanced stats (made/attempted)", () => {
    const stats = {
      id: "stat-adv-totals",
      type: "stats" as const,
      season: "2025-26",
      date: "2026-03-15T00:00:00Z",
      title: "Torneo Avanzado",
      category: "U15M" as const,
      games: [
        makeAdvancedGame("g6", "2026-03-01T00:00:00Z", "Rival F", {made: 5, attempted: 10}, {made: 2, attempted: 6}, {made: 3, attempted: 4}),
        makeAdvancedGame("g7", "2026-03-03T00:00:00Z", "Rival G", {made: 4, attempted: 8}, {made: 3, attempted: 7}, {made: 5, attempted: 6}),
      ],
      description: ["Torneo avanzado"],
      references: [],
    };

    renderWithRouter(<StatsCard stats={stats} />);

    // Total row: 2PT=9/18, 3PT=5/13, FT=8/10
    expect(screen.getByText("9/18")).toBeInTheDocument();
    expect(screen.getByText("5/13")).toBeInTheDocument();
    expect(screen.getByText("8/10")).toBeInTheDocument();
  });

  it("shows percentages for 2PT, 3PT and FT with advanced stats", () => {
    const stats = {
      id: "stat-adv-pct",
      type: "stats" as const,
      season: "2025-26",
      date: "2026-04-15T00:00:00Z",
      title: "Copa Porcentajes",
      category: "U15M" as const,
      games: [
        makeAdvancedGame("g8", "2026-04-01T00:00:00Z", "Rival H", {made: 6, attempted: 12}, {made: 3, attempted: 9}, {made: 4, attempted: 5}),
        makeAdvancedGame("g9", "2026-04-03T00:00:00Z", "Rival I", {made: 4, attempted: 8}, {made: 2, attempted: 6}, {made: 6, attempted: 8}),
      ],
      description: ["Copa"],
      references: [],
    };

    renderWithRouter(<StatsCard stats={stats} />);

    // Media row: 2PT% = 10/20 = 50%, 3PT% = 5/15 = 33%, FT% = 10/13 = 77%
    expect(screen.getByText("50%")).toBeInTheDocument();
    expect(screen.getByText("33%")).toBeInTheDocument();
    expect(screen.getByText("77%")).toBeInTheDocument();
  });
});
