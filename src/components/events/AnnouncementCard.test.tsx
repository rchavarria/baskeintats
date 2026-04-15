import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import { describe, it, expect } from "vitest";
import { AnnouncementCard } from "./AnnouncementCard";
import type { Announcement } from "../../model/AnnouncementSchema";

const fakeAnnouncement: Announcement = {
  id: "torneo-reyes-2026",
  type: "announcement",
  season: "2025-26",
  date: "2026-01-01T09:00:00Z",
  title: "Torneo de Reyes",
  announcementType: "tournament",
  category: "U14M",
  description: [
    "Gran torneo durante las fiestas de Reyes.",
    "Participan 8 equipos de la comunidad.",
    "Fase de grupos + eliminatorias.",
  ],
  references: [],
};

function renderWithRouter(ui: React.ReactElement) {
  return render(<MemoryRouter>{ui}</MemoryRouter>);
}

describe("AnnouncementCard", () => {
  it("renders title, category, truncated description and links to detail", () => {
    renderWithRouter(<AnnouncementCard announcement={fakeAnnouncement} />);

    // Title and category
    expect(screen.getByText("Torneo de Reyes")).toBeInTheDocument();
    expect(screen.getByText("U14M")).toBeInTheDocument();

    // Tournament emoji
    expect(screen.getByText("🏆")).toBeInTheDocument();

    // Only first 2 description lines shown, plus ellipsis
    expect(screen.getByText("Gran torneo durante las fiestas de Reyes.")).toBeInTheDocument();
    expect(screen.getByText("Participan 8 equipos de la comunidad.")).toBeInTheDocument();
    expect(screen.getByText("· · ·")).toBeInTheDocument();
    expect(screen.queryByText("Fase de grupos + eliminatorias.")).not.toBeInTheDocument();

    // Link to announcement detail
    const link = screen.getByRole("link");
    expect(link).toHaveAttribute("href", "/announcements/torneo-reyes-2026");
  });
});

