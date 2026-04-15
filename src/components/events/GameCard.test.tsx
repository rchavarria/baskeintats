import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import { describe, it, expect } from "vitest";
import { GameCard } from "./GameCard";
import type { Game } from "../../model/GameSchema";

const fakeGame: Game = {
  id: "test-game-01",
  type: "game",
  season: "2025-26",
  date: "2025-10-18T17:00:00Z",

  competition: {
    name: "Liga Ahorramás - Oro",
    category: "U16M",
    phase: "Fase 1 - Grupo 1",
    round: "J4",
  },

  venue: {
    id: "antela",
    name: "Pabellón Antela Parada",
    maps: "https://maps.app.goo.gl/NbqDdrLkJhzSXW1s8",
  },

  home: {
    club: {
      id: "alcobendas",
      name: "CB Alcobendas",
      logo: "/logos/alcobendas-transparent.png",
      web: "https://cbalcobendas.com",
      venue: {
        id: "antela",
        name: "Pabellón Antela Parada",
        maps: "https://maps.app.goo.gl/NbqDdrLkJhzSXW1s8",
      },
    },
    category: "U16M",
    scores: [17, 14, 16, 13],
  },

  away: {
    club: {
      id: "estudiantes",
      name: "Movistar Estudiantes",
      logo: "/logos/estudiantes.png",
      web: "https://movistarestudiantes.com",
      venue: {
        id: "magariños",
        name: "Pabellón Magariños",
        maps: "https://maps.app.goo.gl/example",
      },
    },
    category: "U16M",
    scores: [29, 22, 20, 26],
  },

  playerStats: {
    time: 867,
    fieldGoals: 5,
    threePointers: 0,
    freeThrows: { made: 4, attempted: 7 },
    faults: 2,
    plusMinus: -8,
    efficiency: 16,
  },

  videos: {
    official: "https://youtu.be/sfdMjKufGTo",
  },

  recap: {
    title: "Resignación total",
    lines: ["No se pudo hacer nada."],
  },

  references: [],
};

function renderWithRouter(ui: React.ReactElement) {
  return render(<MemoryRouter>{ui}</MemoryRouter>);
}

describe("GameCard", () => {
  it("renders team names", () => {
    renderWithRouter(<GameCard game={fakeGame} />);

    expect(screen.getByText("CB Alcobendas")).toBeInTheDocument();
    expect(screen.getByText("Movistar Estudiantes")).toBeInTheDocument();
  });

  it("renders the total score from quarter scores", () => {
    renderWithRouter(<GameCard game={fakeGame} />);

    // 17+14+16+13=60 vs 29+22+20+26=97
    expect(screen.getByText("60 — 97")).toBeInTheDocument();
  });

  it("renders competition info", () => {
    renderWithRouter(<GameCard game={fakeGame} />);

    expect(screen.getByText(/Liga Ahorramás - Oro · Fase 1 - Grupo 1 · J4/)).toBeInTheDocument();
  });

  it("renders the game date", () => {
    renderWithRouter(<GameCard game={fakeGame} />);

    expect(screen.getByText(/18.*oct.*2025/i)).toBeInTheDocument();
  });

  it("links to the game detail page", () => {
    renderWithRouter(<GameCard game={fakeGame} />);

    const link = screen.getByRole("link");
    expect(link).toHaveAttribute("href", "/games/test-game-01");
  });
});

