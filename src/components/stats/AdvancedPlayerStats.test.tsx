import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { AdvancedPlayerStats } from "./AdvancedPlayerStats";
import type { AdvancedPlayerStats as AdvancedPlayerStatsType } from "../../model/PlayerSchema";

describe("AdvancedPlayerStats", () => {
  it("renders played time using mm:ss format", () => {
    const stats: AdvancedPlayerStatsType = {
      time: 11 * 60 + 6,
      fieldGoals: { made: 4, attempted: 9 },
      threePointers: { made: 2, attempted: 5 },
      freeThrows: { made: 3, attempted: 4 },
      rebounds: { offensive: 1, defensive: 6 },
      assists: 5,
      steals: 2,
      turnovers: 1,
      blocks: { made: 1, received: 0 },
      faults: { made: 2, received: 4 },
      plusMinus: 7,
      efficiency: 18,
    };

    render(<AdvancedPlayerStats stats={stats} />);

    expect(screen.getByText("11:06")).toBeInTheDocument();
    expect(screen.getByText("📈 Estadísticas del jugador")).toBeInTheDocument();
  });
});

