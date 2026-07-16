import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import { describe, it, expect } from "vitest";
import { ScoutingCard } from "./ScoutingCard";
import type { Scouting } from "../../model/ScoutingSchema";
import { scouting_2026_07_16_example } from "../../data/games/2026-07-16-scouting-example.ts";

const fakeScouting: Scouting = {
  id: "scouting-fake-001",
  type: "scouting",
  season: "2025-26",
  date: "2026-07-16T10:00:00Z",
  favourite: false,
  category: "U16M",
  title: "Análisis de bloqueos directos",
  description: [
    "Primera línea de descripción.",
    "Segunda línea de descripción.",
  ],
  video: "https://www.youtube.com/watch?v=example",
  clips: [
    { start: "1:23", description: "Buen bloqueo directo.", type: "good-play" },
    { start: "4:05", description: "Pérdida de balón.", type: "bad-play" },
    { start: "12:47", description: "Rebote ofensivo.", type: "good-play" },
  ],
};

function renderWithRouter(ui: React.ReactElement) {
  return render(<MemoryRouter>{ui}</MemoryRouter>);
}

describe("ScoutingCard", () => {

  it("renders the title", () => {
    renderWithRouter(<ScoutingCard scouting={fakeScouting} />);
    expect(screen.getByText("Análisis de bloqueos directos")).toBeInTheDocument();
  });

  it("renders the category badge", () => {
    renderWithRouter(<ScoutingCard scouting={fakeScouting} />);
    expect(screen.getByText("U16M")).toBeInTheDocument();
  });

  it("renders the clip count badge", () => {
    renderWithRouter(<ScoutingCard scouting={fakeScouting} />);
    expect(screen.getByText(/3 clips/)).toBeInTheDocument();
  });

  it("renders singular clip label when only one clip", () => {
    const oneClip: Scouting = {
      ...fakeScouting,
      clips: [{ start: "0:30", description: "Solo clip.", type: "good-play" }],
    };
    renderWithRouter(<ScoutingCard scouting={oneClip} />);

    expect(screen.getByText(/1 clip/)).toBeInTheDocument();
    expect(screen.queryByText(/1 clips/)).not.toBeInTheDocument();
  });

  it("renders up to 2 description lines", () => {
    renderWithRouter(<ScoutingCard scouting={fakeScouting} />);

    expect(screen.getByText("Primera línea de descripción.")).toBeInTheDocument();
    expect(screen.getByText("Segunda línea de descripción.")).toBeInTheDocument();
    expect(screen.queryByText("· · ·")).not.toBeInTheDocument();
  });

  it("shows ellipsis when description has more than 2 lines", () => {
    const longDesc: Scouting = {
      ...fakeScouting,
      description: [
        "Primera línea.",
        "Segunda línea.",
        "Tercera línea oculta.",
      ],
    };
    renderWithRouter(<ScoutingCard scouting={longDesc} />);

    expect(screen.getByText("Primera línea.")).toBeInTheDocument();
    expect(screen.getByText("Segunda línea.")).toBeInTheDocument();
    expect(screen.getByText("· · ·")).toBeInTheDocument();
    expect(screen.queryByText("Tercera línea oculta.")).not.toBeInTheDocument();
  });

  it("renders the date", () => {
    renderWithRouter(<ScoutingCard scouting={fakeScouting} />);
    expect(screen.getByText(/16.*jul.*2026/i)).toBeInTheDocument();
  });

  it("links to the scouting detail page", () => {
    renderWithRouter(<ScoutingCard scouting={fakeScouting} />);

    const link = screen.getByRole("link");
    expect(link).toHaveAttribute("href", "/scouting/scouting-fake-001");
  });

  it("renders the scouting icon", () => {
    renderWithRouter(<ScoutingCard scouting={fakeScouting} />);
    expect(screen.getByText("🔍")).toBeInTheDocument();
  });

  it.each([
    scouting_2026_07_16_example,
  ])("renders real example data without errors", (scouting) => {
    renderWithRouter(<ScoutingCard scouting={scouting} />);

    expect(screen.getByText(scouting.title)).toBeInTheDocument();
    expect(screen.getByText(scouting.category)).toBeInTheDocument();
  });
});

