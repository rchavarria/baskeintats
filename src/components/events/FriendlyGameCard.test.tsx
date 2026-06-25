import {render, screen} from "@testing-library/react";
import {MemoryRouter} from "react-router-dom";
import {describe, expect, it} from "vitest";
import {FriendlyGameCard} from "./FriendlyGameCard";
import {game_2025_09_06_rozas} from "../../data/games/2025-09-06-rozas.ts";
import {game_2025_07_31_dme_others} from "../../data/games/2025-07-31-dme-others.ts";
import {game_2025_08_01_dme_red_black} from "../../data/games/2025-08-01-dme-red-black.ts";
import {game_2025_12_27_canarias} from "../../data/games/2025-12-27-canarias.ts";
import {game_2025_12_28_oporto} from "../../data/games/2025-12-28-oporto.ts";
import {game_2025_09_07_godella} from "../../data/games/2025-09-07-godella.ts";
import {game_2025_09_13_canoe} from "../../data/games/2025-09-13-canoe.ts";
import {game_2025_09_18_distrito} from "../../data/games/2025-09-18-distrito.ts";
import {game_2024_10_19_ucam_murcia} from "../../data/games/2024-10-19-ucam-murcia.ts";
import {game_2024_09_15_estudiantes} from "../../data/games/2024-09-15-estudiantes.ts";

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

    expect(screen.getByText(/Amistoso/)).toBeInTheDocument();
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

  it("shows the result emoji (win)", () => {
    renderWithRouter(<FriendlyGameCard game={fakeGame} />);

    // away (us) 66 vs home (opponent) 50 → win
    expect(screen.getByLabelText("Victoria")).toBeInTheDocument();
  });

  it.each([
    [game_2024_09_15_estudiantes],
    [game_2024_10_19_ucam_murcia],
    [game_2025_08_01_dme_red_black],
    [game_2025_07_31_dme_others],
    [game_2025_09_06_rozas],
    [game_2025_09_07_godella],
    [game_2025_09_13_canoe],
    [game_2025_09_18_distrito],
    [game_2025_12_27_canarias],
    [game_2025_12_28_oporto],
  ])("renders friendly game to the detail page", (game) => {
    renderWithRouter(<FriendlyGameCard game={game} />);

    expect(screen.getByText(game.competition.name)).toBeInTheDocument();
    expect(screen.getByText(game.home.club.name)).toBeInTheDocument();
    expect(screen.getByText(game.away.club.name)).toBeInTheDocument();
  });

});

