import { render, screen } from "@testing-library/react";
import { MemoryRouter, Route, Routes } from "react-router-dom";
import { describe, expect, it } from "vitest";
import { getEvents } from "../data/events.ts";
import { game_2026_04_12_canoe } from "../data/games/2026-04-12-canoe.ts";
import { totalPoints } from "../model/GameSchema";
import { GameDetailPage } from "./GameDetailPage";

function renderWithRoute(gameId: string) {
  return render(
    <MemoryRouter initialEntries={[`/games/${gameId}`]}>
      <Routes>
        <Route path="/games/:gameId" element={<GameDetailPage />} />
      </Routes>
    </MemoryRouter>,
  );
}

describe("GameDetailPage", () => {
  it("renders competition name, phase and round", () => {
    renderWithRoute(game_2026_04_12_canoe.id);

    expect(screen.getByText(/Liga Ahorramás - Plata · Pre-Playoff · J3/)).toBeInTheDocument();
  });

  it("highlights only the highest final score", () => {
    renderWithRoute(game_2026_04_12_canoe.id);

    const home = totalPoints(game_2026_04_12_canoe.home.scores);
    const away = totalPoints(game_2026_04_12_canoe.away.scores);
    const homeBox = screen.getByTestId("home-score");
    const awayBox = screen.getByTestId("away-score");

    expect(homeBox).toHaveTextContent(String(home));
    expect(awayBox).toHaveTextContent(String(away));
    expect(homeBox.classList.contains("bg-rose-800")).toBe(home > away);
    expect(awayBox.classList.contains("bg-rose-800")).toBe(away > home);
  });

  describe("full game list", () => {
    const gameIds = getEvents()
      .filter((e) => ["game", "advanced-game"].includes(e.type))
      .map((g) => [g.id]);

    it.each(gameIds)("renders game %s", (gameId: string) => {
      renderWithRoute(gameId);
    });
  });

  describe("full friendly game list", () => {
    const gameIds = getEvents()
      .filter((e) => ["friendly-game"].includes(e.type))
      .map((g) => [g.id]);

    it.each(gameIds)("renders game %s", (gameId: string) => {
      renderWithRoute(gameId);
    });
  });
});
