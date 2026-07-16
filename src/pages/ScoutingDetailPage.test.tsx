import {render, screen} from "@testing-library/react";
import {MemoryRouter, Route, Routes} from "react-router-dom";
import {describe, expect, it} from "vitest";
import {ScoutingDetailPage} from "./ScoutingDetailPage";
import {scouting_2026_07_16_example} from "../data/games/2026-07-16-scouting-example.ts";

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

  it("renders empty state for unknown id", () => {
    renderWithRoute("scouting-does-not-exist");
    expect(screen.getByText(/scouting no encontrado/i)).toBeInTheDocument();
  });

  it.each([
    scouting_2026_07_16_example,
  ])("renders real example data without errors", (scouting) => {
    renderWithRoute(scouting.id);

    // title
    expect(screen.getByText(scouting.title)).toBeInTheDocument();
    expect(screen.getByText(scouting.category)).toBeInTheDocument();

    // description lines
    for (const line of scouting.description) {
      expect(screen.getByText(line)).toBeInTheDocument();
    }

    // video link
    const videoLink = screen.getByRole("link", { name: /ver vídeo principal/i });
    expect(videoLink).toHaveAttribute("href", scouting.video);

    // clips
    for (const clip of scouting.clips) {
      expect(screen.getByText(clip.start)).toBeInTheDocument();
      expect(screen.getByText(clip.description)).toBeInTheDocument();
    }
  });

});


