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
import {game_2024_03_28_moncayo} from "../../data/games/2024-03-28-moncayo.ts";
import {game_2024_03_29_sp_burgos} from "../../data/games/2024-03-29-sp-burgos.ts";
import {game_2024_03_30_zaragoza} from "../../data/games/2024-03-30-zaragoza.ts";
import {game_2024_03_30_sp_burgos} from "../../data/games/2024-03-30-sp-burgos.ts";
import {game_2024_03_31_fuenlabrada} from "../../data/games/2024-03-31-fuenlabrada.ts";
import {game_2024_05_03_humanitas} from "../../data/games/2024-05-03-humanitas.ts";
import {game_2024_05_04_salvador} from "../../data/games/2024-05-04-salvador.ts";
import {game_2024_05_05_rozas} from "../../data/games/2024-05-05-rozas.ts";
import {game_2024_05_18_krvavec} from "../../data/games/2024-05-18-krvavec.ts";
import {game_2024_05_18_ban_e_lot} from "../../data/games/2024-05-18-ban-e-lot.ts";
import {game_2024_05_19_pesaro} from "../../data/games/2024-05-19-pesaro.ts";
import {game_2024_05_19_guyane} from "../../data/games/2024-05-19-guyane.ts";
import {game_2024_05_19_mexico} from "../../data/games/2024-05-19-mexico.ts";
import {game_2024_05_20_certified_athletes} from "../../data/games/2024-05-20-certified-athletes.ts";
import {game_2026_05_17_fuenlabrada} from "../../data/games/2026-05-17-fuenlabrada.ts";
import {game_2026_05_14_fuenlabrada} from "../../data/games/2026-05-14-fuenlabrada.ts";
import {game_2026_05_24_distrito} from "../../data/games/2026-05-24-distrito.ts";
import {game_2026_05_24_real_madrid} from "../../data/games/2026-05-24-real-madrid.ts";
import {game_2026_05_27_distrito} from "../../data/games/2026-05-27-distrito.ts";
import {game_2026_05_30_zentro} from "../../data/games/2026-05-30-zentro.ts";
import {game_2026_05_31_torrelodones} from "../../data/games/2026-05-31-torrelodones.ts";

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
    expect(screen.getByText("71 | 85")).toBeInTheDocument();
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

  it("shows the result emoji (loss)", () => {
    renderWithRouter(<GameCard game={fakeGame} />);

    // 71 vs 85, away marked as opponent → loss
    expect(screen.getByLabelText("Derrota")).toBeInTheDocument();
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
    [game_2026_05_31_torrelodones],
    [game_2026_05_30_zentro],
    [game_2026_05_27_distrito],
    [game_2026_05_24_real_madrid],
    [game_2026_05_24_distrito],
    [game_2026_05_17_fuenlabrada],
    [game_2026_05_14_fuenlabrada],
    [game_2026_05_10_zentro],
    [game_2026_05_10_torrelodones],
  ])("renders S2025/26 game to the game card", (game) => {
    renderWithRouter(<GameCard game={game} />);

    expect(screen.getByText(game.home.club.name)).toBeInTheDocument();
    expect(screen.getByText(game.away.club.name)).toBeInTheDocument();
  });

  it.each([
    [game_2024_05_20_certified_athletes],
    [game_2024_05_19_mexico],
    [game_2024_05_19_guyane],
    [game_2024_05_19_pesaro],
    [game_2024_05_18_ban_e_lot],
    [game_2024_05_18_krvavec],
    [game_2024_05_05_rozas],
    [game_2024_05_04_salvador],
    [game_2024_05_03_humanitas],
    [game_2024_03_31_fuenlabrada],
    [game_2024_03_30_sp_burgos],
    [game_2024_03_30_zaragoza],
    [game_2024_03_29_sp_burgos],
    [game_2024_03_28_moncayo],
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

