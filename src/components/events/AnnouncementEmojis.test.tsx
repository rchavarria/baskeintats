import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import { AnnouncementTypeEmoji } from "./AnnouncementEmojis";
import type { Announcement } from "../../model/AnnouncementSchema";

describe("AnnouncementTypeEmoji", () => {
  it("renders 🏆 for tournament", () => {
    render(<AnnouncementTypeEmoji type="tournament" />);
    expect(screen.getByText("🏆")).toBeInTheDocument();
  });

  it("renders 🫂 for friendly-game", () => {
    render(<AnnouncementTypeEmoji type="friendly-game" />);
    expect(screen.getByText("🫂")).toBeInTheDocument();
  });

  it("renders 📢 for call-up", () => {
    render(<AnnouncementTypeEmoji type="call-up" />);
    expect(screen.getByText("📢")).toBeInTheDocument();
  });

  it("renders 🚀 for milestone", () => {
    render(<AnnouncementTypeEmoji type="milestone" />);
    expect(screen.getByText("🚀")).toBeInTheDocument();
  });

  it("renders fallback emoji for unknown type", () => {
    render(<AnnouncementTypeEmoji type={"unknown" as Announcement["announcementType"]} />);
    expect(screen.getByText("❌❓🚨")).toBeInTheDocument();
  });
});

