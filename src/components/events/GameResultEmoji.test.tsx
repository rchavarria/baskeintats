import {render, screen} from "@testing-library/react";
import {describe, expect, it} from "vitest";
import {GameResultEmoji} from "./GameResultEmoji";
import type {Game} from "../../model/GameSchema";

function makeGame(overrides: {
  homeOpponent?: boolean;
  awayOpponent?: boolean;
  homeScores: number[];
  awayScores: number[];
}): Game {
  return {
    home: {
      club: {name: "H", logo: ""} as never,
      category: "U15M",
      opponent: overrides.homeOpponent ?? false,
      scores: overrides.homeScores,
    },
    away: {
      club: {name: "A", logo: ""} as never,
      category: "U15M",
      opponent: overrides.awayOpponent ?? false,
      scores: overrides.awayScores,
    },
  } as unknown as Game;
}

describe("GameResultEmoji", () => {
  it("shows 🤩 when our team plays at home and wins", () => {
    const game = makeGame({
      awayOpponent: true,
      homeScores: [20, 20],
      awayScores: [10, 10],
    });

    render(<GameResultEmoji game={game} />);

    expect(screen.getByLabelText("Victoria")).toHaveTextContent("🤩");
  });

  it("shows 🤩 when our team plays away and wins", () => {
    const game = makeGame({
      homeOpponent: true,
      homeScores: [10, 10],
      awayScores: [20, 20],
    });

    render(<GameResultEmoji game={game} />);

    expect(screen.getByLabelText("Victoria")).toHaveTextContent("🤩");
  });

  it("shows 😭 on a loss", () => {
    const game = makeGame({
      awayOpponent: true,
      homeScores: [5, 5],
      awayScores: [50, 50],
    });

    render(<GameResultEmoji game={game} />);

    expect(screen.getByLabelText("Derrota")).toHaveTextContent("😭");
  });

  it("shows 😐 on a tie", () => {
    const game = makeGame({
      awayOpponent: true,
      homeScores: [10, 10],
      awayScores: [10, 10],
    });

    render(<GameResultEmoji game={game} />);

    expect(screen.getByLabelText("Empate")).toHaveTextContent("😐");
  });

  it("shows 🤷 when no opponent is marked", () => {
    const game = makeGame({
      homeScores: [10, 10],
      awayScores: [20, 20],
    });

    render(<GameResultEmoji game={game} />);

    expect(screen.getByLabelText("Resultado desconocido")).toHaveTextContent("🤷");
  });

  it("shows 🤷 when both teams are marked as opponent", () => {
    const game = makeGame({
      homeOpponent: true,
      awayOpponent: true,
      homeScores: [10, 10],
      awayScores: [20, 20],
    });

    render(<GameResultEmoji game={game} />);

    expect(screen.getByLabelText("Resultado desconocido")).toHaveTextContent("🤷");
  });
});

