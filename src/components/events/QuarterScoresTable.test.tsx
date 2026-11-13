import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import type { Team } from "../../model/TeamSchema";
import { QuarterScoresTable } from "./QuarterScoresTable";

const homeClub = { name: "Home Club", logo: "/logos/home.png" } as Team;
const awayClub = { name: "Away Club", logo: "/logos/away.png" } as Team;

describe("QuarterScoresTable", () => {
  it("renders a column per quarter and team logos", () => {
    render(
      <QuarterScoresTable
        home={{ club: homeClub, scores: [10, 12, 14, 16] }}
        away={{ club: awayClub, scores: [11, 13, 15, 17] }}
      />,
    );

    const headers = screen.getAllByRole("columnheader").map((h) => h.textContent);
    expect(headers).toEqual(["Equipo", "Q1", "Q2", "Q3", "Q4"]);
    expect(screen.getByAltText("Home Club")).toHaveAttribute("src", "/logos/home.png");
    expect(screen.getByAltText("Away Club")).toHaveAttribute("src", "/logos/away.png");
    expect(screen.getByText("16")).toBeInTheDocument();
    expect(screen.getByText("17")).toBeInTheDocument();
  });

  it("adds OT columns for overtime periods", () => {
    render(
      <QuarterScoresTable
        home={{ club: homeClub, scores: [10, 10, 10, 10, 5, 7] }}
        away={{ club: awayClub, scores: [10, 10, 10, 10, 5, 3] }}
      />,
    );

    const headers = screen.getAllByRole("columnheader").map((h) => h.textContent);
    expect(headers).toEqual(["Equipo", "Q1", "Q2", "Q3", "Q4", "OT1", "OT2"]);
  });

  it("bolds only the highest score of each period", () => {
    render(
      <QuarterScoresTable
        home={{ club: homeClub, scores: [20, 8, 15, 30] }}
        away={{ club: awayClub, scores: [9, 21, 15, 31] }}
      />,
    );

    expect(screen.getByText("20")).toHaveClass("font-bold");
    expect(screen.getByText("9")).not.toHaveClass("font-bold");
    expect(screen.getByText("21")).toHaveClass("font-bold");
    expect(screen.getByText("8")).not.toHaveClass("font-bold");
    for (const cell of screen.getAllByText("15")) {
      expect(cell).not.toHaveClass("font-bold");
    }
    expect(screen.getByText("31")).toHaveClass("font-bold");
  });

  it("renders nothing when there are no scores", () => {
    const { container } = render(
      <QuarterScoresTable
        home={{ club: homeClub, scores: [] }}
        away={{ club: awayClub, scores: [] }}
      />,
    );

    expect(container).toBeEmptyDOMElement();
  });
});
