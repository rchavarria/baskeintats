import {render, screen} from "@testing-library/react";
import {MemoryRouter, Route, Routes} from "react-router-dom";
import {describe, expect, it} from "vitest";
import {GameDetailPage} from "./GameDetailPage";
import {game_2026_04_12_canoe} from "../data/games/2026-04-12-canoe.ts";

function renderWithRoute(gameId: string) {
  return render(
    <MemoryRouter initialEntries={[`/games/${gameId}`]}>
      <Routes>
        <Route path="/games/:gameId" element={<GameDetailPage />} />
      </Routes>
    </MemoryRouter>
  );
}

describe("GameDetailPage", () => {
  it("renders competition name, phase and round", () => {
    renderWithRoute(game_2026_04_12_canoe.id);

    expect(screen.getByText(/Liga Ahorramás - Plata · Pre-Playoff · J3/)).toBeInTheDocument();
  });
});

