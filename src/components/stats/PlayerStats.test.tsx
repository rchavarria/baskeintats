import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import { PlayerStats } from "./PlayerStats";
import type { PlayerStats as PlayerStatsType } from "../../model/PlayerSchema";

describe("PlayerStats", () => {

  it("displays player stats when there is data", () => {
    const stats: PlayerStatsType = {
      time: 14 * 60 + 27,
      fieldGoals: 5,
      threePointers: 1,
      freeThrows: { made: 4, attempted: 7 },
      faults: 2,
      plusMinus: 8,
      efficiency: 16,
    };

    render(<PlayerStats stats={stats} />);

    expect(screen.getByText("📈 Estadísticas del jugador")).toBeInTheDocument();
    expect(screen.getByText("14:27")).toBeInTheDocument(); // 867 segundos = 14:27
    expect(screen.getByText("15")).toBeInTheDocument(); // puntos: 3*1 + 2*4 + 4 = 15 (fieldGoals total - threePointers = 5-1 = 4 dobles)
  });

});

