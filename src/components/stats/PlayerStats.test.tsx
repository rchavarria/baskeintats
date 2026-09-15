import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import type { PlayerStats as PlayerStatsType } from "../../model/PlayerSchema";
import { PlayerStats } from "./PlayerStats";

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
    expect(screen.getByText("17")).toBeInTheDocument(); // puntos: 3*1 + 2*5 + 4 = 17
  });
});
