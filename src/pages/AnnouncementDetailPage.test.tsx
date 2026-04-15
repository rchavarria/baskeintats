import { render, screen } from "@testing-library/react";
import { MemoryRouter, Route, Routes } from "react-router-dom";
import { describe, it, expect } from "vitest";
import { AnnouncementDetailPage } from "./AnnouncementDetailPage";
import { announcement_2026_01_01_torneo_reyes } from "../data/games/2026-01-01-torneo-reyes.ts";

function renderWithRoute(announcementId: string) {
  return render(
    <MemoryRouter initialEntries={[`/announcements/${announcementId}`]}>
      <Routes>
        <Route path="/announcements/:announcementId" element={<AnnouncementDetailPage />} />
      </Routes>
    </MemoryRouter>
  );
}

describe("AnnouncementDetailPage", () => {
  it("renders announcement title, category and type", () => {
    renderWithRoute(announcement_2026_01_01_torneo_reyes.id);

    expect(screen.getByText("I Torneo de Reyes")).toBeInTheDocument();
    expect(screen.getByText(/U15M/)).toBeInTheDocument();
    expect(screen.getByText(/tournament/)).toBeInTheDocument();
  });
});

