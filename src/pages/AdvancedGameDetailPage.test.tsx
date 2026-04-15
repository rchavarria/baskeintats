import { render, screen } from "@testing-library/react";
import { MemoryRouter, Route, Routes } from "react-router-dom";
import { describe, it, expect } from "vitest";
import { AdvancedGameDetailPage } from "./AdvancedGameDetailPage";
import { game_2025_10_18_estudiantes } from "../data/games/2025-10-18-estudiantes.ts";

function renderWithRoute(gameId: string) {
  return render(
    <MemoryRouter initialEntries={[`/games/advanced/${gameId}`]}>
      <Routes>
        <Route path="/games/advanced/:gameId" element={<AdvancedGameDetailPage />} />
      </Routes>
    </MemoryRouter>
  );
}

describe("AdvancedGameDetailPage", () => {
  it("renders competition name, phase and round", () => {
    renderWithRoute(game_2025_10_18_estudiantes.id);

    expect(screen.getByText(/Liga Ahorramás - Oro · Fase 1 - Grupo 1 · J4/)).toBeInTheDocument();
  });
});

