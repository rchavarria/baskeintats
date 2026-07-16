import { render, screen } from "@testing-library/react";
import { MemoryRouter, Route, Routes } from "react-router-dom";
import { describe, it, expect } from "vitest";
import { ScoutingDetailPage } from "./ScoutingDetailPage";
import { scouting_2026_07_16_example } from "../data/games/2026-07-16-scouting-example.ts";

function renderWithRoute(scoutingId: string) {
  return render(
    <MemoryRouter initialEntries={[`/scouting/${scoutingId}`]}>
      <Routes>
        <Route path="/scouting/:scoutingId" element={<ScoutingDetailPage />} />
      </Routes>
    </MemoryRouter>
  );
}

describe("ScoutingDetailPage", () => {
  it("renders the scouting title", () => {
    renderWithRoute(scouting_2026_07_16_example.id);

    expect(screen.getByText(scouting_2026_07_16_example.title)).toBeInTheDocument();
  });

  it("renders the category badge", () => {
    renderWithRoute(scouting_2026_07_16_example.id);

    expect(screen.getByText(/U16M/)).toBeInTheDocument();
  });

  it("renders the Scouting label", () => {
    renderWithRoute(scouting_2026_07_16_example.id);

    expect(screen.getByText("Scouting")).toBeInTheDocument();
  });

  it("renders all description lines", () => {
    renderWithRoute(scouting_2026_07_16_example.id);

    for (const line of scouting_2026_07_16_example.description) {
      expect(screen.getByText(line)).toBeInTheDocument();
    }
  });

  it("renders the video link", () => {
    renderWithRoute(scouting_2026_07_16_example.id);

    const videoLink = screen.getByRole("link", { name: /ver vídeo principal/i });
    expect(videoLink).toHaveAttribute("href", scouting_2026_07_16_example.video);
  });

  it("renders all clips with their start time", () => {
    renderWithRoute(scouting_2026_07_16_example.id);

    for (const clip of scouting_2026_07_16_example.clips) {
      expect(screen.getByText(clip.start)).toBeInTheDocument();
      expect(screen.getByText(clip.description)).toBeInTheDocument();
    }
  });

  it("renders good-play clips with green emoji", () => {
    renderWithRoute(scouting_2026_07_16_example.id);

    const goodPlays = scouting_2026_07_16_example.clips.filter(c => c.type === "good-play");
    const greenEmojis = screen.getAllByLabelText("Good play");
    expect(greenEmojis).toHaveLength(goodPlays.length);
  });

  it("renders bad-play clips with red emoji", () => {
    renderWithRoute(scouting_2026_07_16_example.id);

    const badPlays = scouting_2026_07_16_example.clips.filter(c => c.type === "bad-play");
    const redEmojis = screen.getAllByLabelText("Bad play");
    expect(redEmojis).toHaveLength(badPlays.length);
  });

  it("renders the clips section header with count", () => {
    renderWithRoute(scouting_2026_07_16_example.id);

    const count = scouting_2026_07_16_example.clips.length;
    expect(screen.getByText(new RegExp(`Clips \\(${count}\\)`))).toBeInTheDocument();
  });

  it("renders a back link to the home page", () => {
    renderWithRoute(scouting_2026_07_16_example.id);

    const backLink = screen.getByRole("link", { name: /volver al inicio/i });
    expect(backLink).toHaveAttribute("href", "/");
  });

  it("renders empty state for unknown id", () => {
    renderWithRoute("scouting-does-not-exist");

    expect(screen.getByText(/scouting no encontrado/i)).toBeInTheDocument();
  });
});


