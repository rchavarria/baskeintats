import {render, screen} from "@testing-library/react";
import {MemoryRouter} from "react-router-dom";
import {describe, expect, it} from "vitest";
import {GameCard} from "./GameCard";
import type {Game} from "../../model/GameSchema";
import {game_2025_09_20_alcorcon} from "../../data/games/2025-09-20-alcorcon.ts";
import {game_2025_07_26_eoss_spartans} from "../../data/games/2025-07-26-eoss-j1-spartans.ts";
import {game_2025_07_26_eoss_georgia} from "../../data/games/2025-07-26-eoss-j5-georgia.ts";
import {game_2025_07_26_eoss_bogans} from "../../data/games/2025-07-26-eoss-j4-bogans.ts";
import {game_2025_07_26_eoss_tnt} from "../../data/games/2025-07-26-eoss-j3-tnt.ts";
import {game_2025_07_26_eoss_florida} from "../../data/games/2025-07-26-eoss-j2-florida.ts";
import {game_2026_05_10_torrelodones} from "../../data/games/2026-05-10-torrelodones.ts";
import {game_2026_05_10_zentro} from "../../data/games/2026-05-10-zentro.ts";
import {game_2024_04_07_parla} from "../../data/games/2024-04-07-parla.ts";
import {game_2024_04_13_alcala} from "../../data/games/2024-04-13-alcala.ts";
import {game_2024_04_28_parla} from "../../data/games/2024-04-28-parla.ts";

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

  it.each([
    [game_2025_07_26_eoss_georgia],
    [game_2025_07_26_eoss_bogans],
    [game_2025_07_26_eoss_tnt],
    [game_2025_07_26_eoss_florida],
    [game_2025_07_26_eoss_spartans],
  ])("renders game to the detail page", (game) => {
    renderWithRouter(<GameCard game={game} />);

    expect(screen.getByText(game.home.club.name)).toBeInTheDocument();
    expect(screen.getByText(game.away.club.name)).toBeInTheDocument();
  });

  it.each([
    [game_2024_04_07_parla],
    [game_2024_04_13_alcala],
    [game_2024_04_28_parla],
  ])("renders S2023/24 games to the game card", (game) => {
    renderWithRouter(<GameCard game={game} />);

    expect(screen.getByText(game.home.club.name)).toBeInTheDocument();
    expect(screen.getByText(game.away.club.name)).toBeInTheDocument();
  });

  it.each([
    [game_2026_05_10_zentro],
    [game_2026_05_10_torrelodones],
  ])("renders S2025/26 game to the game card", (game) => {
    renderWithRouter(<GameCard game={game} />);

    expect(screen.getByText(game.home.club.name)).toBeInTheDocument();
    expect(screen.getByText(game.away.club.name)).toBeInTheDocument();
  });

});

