import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import { describe, expect, it } from "vitest";
import { game_2024_03_28_moncayo } from "../../data/games/2024-03-28-moncayo.ts";
import { game_2024_03_29_sp_burgos } from "../../data/games/2024-03-29-sp-burgos.ts";
import { game_2024_03_30_sp_burgos } from "../../data/games/2024-03-30-sp-burgos.ts";
import { game_2024_03_30_zaragoza } from "../../data/games/2024-03-30-zaragoza.ts";
import { game_2024_03_31_fuenlabrada } from "../../data/games/2024-03-31-fuenlabrada.ts";
import { game_2024_04_07_parla } from "../../data/games/2024-04-07-parla.ts";
import { game_2024_04_13_alcala } from "../../data/games/2024-04-13-alcala.ts";
import { game_2024_04_28_parla } from "../../data/games/2024-04-28-parla.ts";
import { game_2024_05_03_humanitas } from "../../data/games/2024-05-03-humanitas.ts";
import { game_2024_05_04_salvador } from "../../data/games/2024-05-04-salvador.ts";
import { game_2024_05_05_rozas } from "../../data/games/2024-05-05-rozas.ts";
import { game_2024_05_18_ban_e_lot } from "../../data/games/2024-05-18-ban-e-lot.ts";
import { game_2024_05_18_krvavec } from "../../data/games/2024-05-18-krvavec.ts";
import { game_2024_05_19_guyane } from "../../data/games/2024-05-19-guyane.ts";
import { game_2024_05_19_mexico } from "../../data/games/2024-05-19-mexico.ts";
import { game_2024_05_19_pesaro } from "../../data/games/2024-05-19-pesaro.ts";
import { game_2024_05_20_certified_athletes } from "../../data/games/2024-05-20-certified-athletes.ts";
import { game_2024_09_15_estudiantes } from "../../data/games/2024-09-15-estudiantes.ts";
import { game_2024_10_19_ucam_murcia } from "../../data/games/2024-10-19-ucam-murcia.ts";
import { game_2024_12_15_alcobendas } from "../../data/games/2024-12-15-alcobendas.ts";
import { game_2025_07_26_eoss_spartans } from "../../data/games/2025-07-26-eoss-j1-spartans.ts";
import { game_2025_07_26_eoss_florida } from "../../data/games/2025-07-26-eoss-j2-florida.ts";
import { game_2025_07_26_eoss_tnt } from "../../data/games/2025-07-26-eoss-j3-tnt.ts";
import { game_2025_07_26_eoss_bogans } from "../../data/games/2025-07-26-eoss-j4-bogans.ts";
import { game_2025_07_26_eoss_georgia } from "../../data/games/2025-07-26-eoss-j5-georgia.ts";
import { game_2025_07_31_dme_others } from "../../data/games/2025-07-31-dme-others.ts";
import { game_2025_08_01_dme_red_black } from "../../data/games/2025-08-01-dme-red-black.ts";
import { game_2025_09_06_rozas } from "../../data/games/2025-09-06-rozas.ts";
import { game_2025_09_07_godella } from "../../data/games/2025-09-07-godella.ts";
import { game_2025_09_13_canoe } from "../../data/games/2025-09-13-canoe.ts";
import { game_2025_09_18_distrito } from "../../data/games/2025-09-18-distrito.ts";
import { game_2025_09_20_alcorcon } from "../../data/games/2025-09-20-alcorcon.ts";
import { game_2025_09_20_real_madrid } from "../../data/games/2025-09-20-real-madrid.ts";
import { game_2025_09_28_rozas } from "../../data/games/2025-09-28-rozas.ts";
import { game_2025_10_05_patrocinio } from "../../data/games/2025-10-05-patrocinio.ts";
import { game_2025_10_18_estudiantes } from "../../data/games/2025-10-18-estudiantes.ts";
import { game_2025_10_26_fuenlabrada } from "../../data/games/2025-10-26-fuenlabrada.ts";
import { game_2025_11_09_real_madrid } from "../../data/games/2025-11-09-real-madrid.ts";
import { game_2025_11_16_rozas } from "../../data/games/2025-11-16-rozas.ts";
import { game_2025_11_21_real_madrid } from "../../data/games/2025-11-21-real-madrid.ts";
import { game_2025_11_22_joventut } from "../../data/games/2025-11-22-joventut.ts";
import { game_2025_11_23_seleccion_madrid } from "../../data/games/2025-11-23-seleccion-madrid.ts";
import { game_2025_11_30_estudiantes } from "../../data/games/2025-11-30-estudiantes.ts";
import { game_2025_12_14_fuenlabrada } from "../../data/games/2025-12-14-fuenlabrada.ts";
import { game_2025_12_19_malaga } from "../../data/games/2025-12-19-malaga.ts";
import { game_2025_12_19_torrent } from "../../data/games/2025-12-19-torrent.ts";
import { game_2025_12_20_olivar } from "../../data/games/2025-12-20-olivar.ts";
import { game_2025_12_20_sevilla } from "../../data/games/2025-12-20-sevilla.ts";
import { game_2025_12_21_elche } from "../../data/games/2025-12-21-elche.ts";
import { game_2025_12_27_canarias } from "../../data/games/2025-12-27-canarias.ts";
import { game_2025_12_28_oporto } from "../../data/games/2025-12-28-oporto.ts";
import { game_2026_04_20_zentro } from "../../data/games/2026-04-20-zentro.ts";
import { game_2026_04_25_zentro } from "../../data/games/2026-04-25-zentro.ts";
import { game_2026_05_10_torrelodones } from "../../data/games/2026-05-10-torrelodones.ts";
import { game_2026_05_10_zentro } from "../../data/games/2026-05-10-zentro.ts";
import { game_2026_05_14_fuenlabrada } from "../../data/games/2026-05-14-fuenlabrada.ts";
import { game_2026_05_17_fuenlabrada } from "../../data/games/2026-05-17-fuenlabrada.ts";
import { game_2026_05_24_distrito } from "../../data/games/2026-05-24-distrito.ts";
import { game_2026_05_24_real_madrid } from "../../data/games/2026-05-24-real-madrid.ts";
import { game_2026_05_27_distrito } from "../../data/games/2026-05-27-distrito.ts";
import { game_2026_05_30_zentro } from "../../data/games/2026-05-30-zentro.ts";
import { game_2026_05_31_torrelodones } from "../../data/games/2026-05-31-torrelodones.ts";
import { game_2026_09_17_coslada } from "../../data/games/2026-09-17-coslada.ts";
import { game_2026_09_20_sba } from "../../data/games/2026-09-20-sba.ts";
import type { Game } from "../../model/GameSchema";
import { GameCard } from "./GameCard";
import {game_2026_09_18_alcobendas_u22} from "../../data/games/2026-09-18-alcobendas-u22.ts";

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

  it.each([[game_2026_09_20_sba]])("renders S2025/26 game to the game card", (game) => {
    renderWithRouter(<GameCard game={game} />);

    expect(screen.getByText(game.home.club.name)).toBeInTheDocument();
    expect(screen.getByText(game.away.club.name)).toBeInTheDocument();
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
    [game_2026_04_25_zentro],
    [game_2026_04_20_zentro],
    [game_2025_12_21_elche],
    [game_2025_12_20_sevilla],
    [game_2025_12_20_olivar],
    [game_2025_12_19_torrent],
    [game_2025_12_19_malaga],
    [game_2025_12_14_fuenlabrada],
    [game_2025_11_30_estudiantes],
    [game_2025_11_23_seleccion_madrid],
    [game_2025_11_22_joventut],
    [game_2025_11_21_real_madrid],
    [game_2025_11_16_rozas],
    [game_2025_11_09_real_madrid],
    [game_2025_10_26_fuenlabrada],
    [game_2025_10_18_estudiantes],
    [game_2025_10_05_patrocinio],
    [game_2025_09_28_rozas],
    [game_2025_09_20_real_madrid],
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

  it.each([[game_2026_05_10_zentro], [game_2026_05_10_torrelodones]])(
    "renders S2025/26 game to the game card",
    (game) => {
      renderWithRouter(<GameCard game={game} />);

      expect(screen.getByText(game.home.club.name)).toBeInTheDocument();
      expect(screen.getByText(game.away.club.name)).toBeInTheDocument();
    },
  );
});

describe("GameCard (friendly game)", () => {
  const friendlyGame = game_2025_09_06_rozas;

  it("renders team names", () => {
    renderWithRouter(<GameCard game={friendlyGame} />);

    expect(screen.getByText("Las Rozas")).toBeInTheDocument();
    expect(screen.getByText("CB Alcobendas")).toBeInTheDocument();
  });

  it("renders the total score from quarter scores", () => {
    renderWithRouter(<GameCard game={friendlyGame} />);

    // 13+15+10+12=50 vs 14+30+6+16=66
    expect(screen.getByText("50 | 66")).toBeInTheDocument();
  });

  it("renders competition info with the friendly emoji", () => {
    renderWithRouter(<GameCard game={friendlyGame} />);

    expect(screen.getByText("🫂")).toBeInTheDocument();
    expect(screen.getByText("Amistoso · Pretemporada")).toBeInTheDocument();
  });

  it("omits empty competition parts", () => {
    renderWithRouter(<GameCard game={friendlyGame} />);

    // round is "" → no trailing separator
    expect(screen.queryByText(/Pretemporada ·/)).not.toBeInTheDocument();
  });

  it("renders the game date", () => {
    renderWithRouter(<GameCard game={friendlyGame} />);

    expect(screen.getByText(/6.*sep.*2025/i)).toBeInTheDocument();
  });

  it("links to the game detail page", () => {
    renderWithRouter(<GameCard game={friendlyGame} />);

    const link = screen.getByRole("link");
    expect(link).toHaveAttribute("href", "/games/S56-amistoso-rozas");
  });

  it("shows the result emoji (win)", () => {
    renderWithRouter(<GameCard game={friendlyGame} />);

    // away (us) 66 vs home (opponent) 50 → win
    expect(screen.getByLabelText("Victoria")).toBeInTheDocument();
  });

  it.each([
    [game_2024_09_15_estudiantes],
    [game_2024_10_19_ucam_murcia],
    [game_2024_12_15_alcobendas],
    [game_2025_07_31_dme_others],
    [game_2025_08_01_dme_red_black],
    [game_2025_09_06_rozas],
    [game_2025_09_07_godella],
    [game_2025_09_13_canoe],
    [game_2025_09_18_distrito],
    [game_2025_12_27_canarias],
    [game_2025_12_28_oporto],
  ])("renders friendly games to the game card, 2025/26 season", (game) => {
    renderWithRouter(<GameCard game={game} />);

    expect(screen.getByText("🫂")).toBeInTheDocument();
    expect(screen.getByText(new RegExp(game.competition.name))).toBeInTheDocument();
    expect(screen.getByText(game.home.club.name)).toBeInTheDocument();
    expect(screen.getByText(game.away.club.name)).toBeInTheDocument();
  });

  it.each([
    [game_2026_09_17_coslada],
    [game_2026_09_18_alcobendas_u22],
  ])("renders friendly games to the game card, 2026/27 season", (game) => {
    renderWithRouter(<GameCard game={game} />);

    expect(screen.getByText("🫂")).toBeInTheDocument();
    expect(screen.getByText(new RegExp(game.competition.name))).toBeInTheDocument();
    expect(screen.getByText(game.home.club.name)).toBeInTheDocument();
    expect(screen.getByText(game.away.club.name)).toBeInTheDocument();
  });
});
