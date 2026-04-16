import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import { describe, it, expect } from "vitest";
import { FriendlyGameCard } from "./FriendlyGameCard";
import { game_2025_09_06_rozas } from "../../data/games/2025-09-06-rozas.ts";

const fakeGame = game_2025_09_06_rozas;

function renderWithRouter(ui: React.ReactElement) {
  return render(<MemoryRouter>{ui}</MemoryRouter>);
}

describe("FriendlyGameCard", () => {
  it("renders team names", () => {
    renderWithRouter(<FriendlyGameCard game={fakeGame} />);

    expect(screen.getByText("Las Rozas")).toBeInTheDocument();
    expect(screen.getByText("CB Alcobendas")).toBeInTheDocument();
  });

  it("renders the total score from quarter scores", () => {
    renderWithRouter(<FriendlyGameCard game={fakeGame} />);

    // 13+15+10+12=50 vs 14+30+6+16=66
    expect(screen.getByText("50 — 66")).toBeInTheDocument();
  });

  it("renders competition name with friendly emoji", () => {
    renderWithRouter(<FriendlyGameCard game={fakeGame} />);

    expect(screen.getByText(/Amistoso de pretemporada/)).toBeInTheDocument();
  });

  it("renders the game date", () => {
    renderWithRouter(<FriendlyGameCard game={fakeGame} />);

    expect(screen.getByText(/6.*sep.*2025/i)).toBeInTheDocument();
  });

  it("links to the game detail page", () => {
    renderWithRouter(<FriendlyGameCard game={fakeGame} />);

    const link = screen.getByRole("link");
    expect(link).toHaveAttribute("href", "/games/S56-amistoso-rozas");
  });
});

