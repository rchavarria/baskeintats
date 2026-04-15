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
  ],
  references: [],
};

function renderWithRouter(ui: React.ReactElement) {
  return render(<MemoryRouter>{ui}</MemoryRouter>);
}

describe("AnnouncementCard", () => {
  it("renders title and category", () => {
    renderWithRouter(<AnnouncementCard announcement={fakeAnnouncement} />);

    expect(screen.getByText("Torneo de Reyes")).toBeInTheDocument();
    expect(screen.getByText("U14M")).toBeInTheDocument();
  });

  it("renders the tournament emoji", () => {
    renderWithRouter(<AnnouncementCard announcement={fakeAnnouncement} />);

    expect(screen.getByText("🏆")).toBeInTheDocument();
  });

  it("renders the description", () => {
    renderWithRouter(<AnnouncementCard announcement={fakeAnnouncement} />);

    expect(screen.getByText("Gran torneo durante las fiestas de Reyes.")).toBeInTheDocument();
    expect(screen.queryByText("· · ·")).not.toBeInTheDocument();
  });

  it("truncates description to 2 lines with ellipsis when more than 2", () => {
    const longAnnouncement: Announcement = {
      ...fakeAnnouncement,
      description: [
        "Primera línea visible.",
        "Segunda línea visible.",
        "Tercera línea oculta.",
      ],
    };

    renderWithRouter(<AnnouncementCard announcement={longAnnouncement} />);

    expect(screen.getByText("Primera línea visible.")).toBeInTheDocument();
    expect(screen.getByText("Segunda línea visible.")).toBeInTheDocument();
    expect(screen.getByText("· · ·")).toBeInTheDocument();
    expect(screen.queryByText("Tercera línea oculta.")).not.toBeInTheDocument();
  });

  it("renders the announcement date", () => {
    renderWithRouter(<AnnouncementCard announcement={fakeAnnouncement} />);

    expect(screen.getByText(/1.*ene.*2026/i)).toBeInTheDocument();
  });

  it("links to the announcement detail page", () => {
    renderWithRouter(<AnnouncementCard announcement={fakeAnnouncement} />);

    const link = screen.getByRole("link");
    expect(link).toHaveAttribute("href", "/announcements/torneo-reyes-2026");
  });
});

