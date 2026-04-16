import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import { describe, it, expect } from "vitest";
import { GameCard } from "./GameCard";
import type { Game } from "../../model/GameSchema";
import {game_2025_09_20_alcorcon} from "../../data/games/2025-09-20-alcorcon.ts";

const fakeGame: Game = game_2025_09_20_alcorcon;

function renderWithRouter(ui: React.ReactElement) {
  return render(<MemoryRouter>{ui}</MemoryRouter>);
}

describe("GameCard", () => {
  it("renders team names", () => {
    renderWithRouter(<GameCard game={fakeGame} />);

    expect(screen.getByText("CB Alcobendas")).toBeInTheDocument();
    expect(screen.getByText("CB Alcorcón")).toBeInTheDocument();
  });

  it("renders the total score from quarter scores", () => {
    renderWithRouter(<GameCard game={fakeGame} />);

    // 9+19+28+15=71 vs 30+25+12+18=85
    expect(screen.getByText("71 — 85")).toBeInTheDocument();
  });

  it("renders competition info", () => {
    renderWithRouter(<GameCard game={fakeGame} />);

    expect(screen.getByText(/Liga Ahorramás - Plata · Fase 1 - Grupo 4 · J1/)).toBeInTheDocument();
  });

  it("renders the game date", () => {
    renderWithRouter(<GameCard game={fakeGame} />);

    expect(screen.getByText(/20.*sep.*2025/i)).toBeInTheDocument();
  });

  it("links to the game detail page", () => {
    renderWithRouter(<GameCard game={fakeGame} />);

    const link = screen.getByRole("link");
    expect(link).toHaveAttribute("href", "/games/S56-liga-plata-f1-g4-j1");
  });
});

