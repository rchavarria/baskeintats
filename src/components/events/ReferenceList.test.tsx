import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import { ReferenceList } from "./ReferenceList";
import type { Reference } from "../../model/ReferenceSchema";

function makeReference(type: Reference["type"], label: string): Reference {
  return { type, label, url: "https://example.com" };
}

describe("ReferenceList", () => {
  it("renders 📱 for social-media reference", () => {
    render(<ReferenceList references={[makeReference("social-media", "Instagram post")]} />);
    expect(screen.getByText(/📱/)).toBeInTheDocument();
    expect(screen.getByText(/Instagram post/)).toBeInTheDocument();
  });

  it("renders 📰 for article reference", () => {
    render(<ReferenceList references={[makeReference("article", "Match report")]} />);
    expect(screen.getByText(/📰/)).toBeInTheDocument();
    expect(screen.getByText(/Match report/)).toBeInTheDocument();
  });

  it("renders 💼 for document reference", () => {
    render(<ReferenceList references={[makeReference("document", "Game stats PDF")]} />);
    expect(screen.getByText(/💼/)).toBeInTheDocument();
    expect(screen.getByText(/Game stats PDF/)).toBeInTheDocument();
  });

  it("renders 📸 for photo reference", () => {
    render(<ReferenceList references={[makeReference("photo", "October photos")]} />);
    expect(screen.getByText(/📸/)).toBeInTheDocument();
    expect(screen.getByText(/October photos/)).toBeInTheDocument();
  });

  it("renders 🎥 for video reference", () => {
    render(<ReferenceList references={[makeReference("video", "Full game video")]} />);
    expect(screen.getByText(/🎥/)).toBeInTheDocument();
    expect(screen.getByText(/Full game video/)).toBeInTheDocument();
  });

  it("renders fallback emoji for unknown reference type", () => {
    const ref = { type: "unknown" as Reference["type"], label: "Mystery link", url: "https://example.com" };
    render(<ReferenceList references={[ref]} />);
    expect(screen.getByText(/❌❓🚨/)).toBeInTheDocument();
  });

  it("renders nothing when references list is empty", () => {
    const { container } = render(<ReferenceList references={[]} />);
    expect(container.innerHTML).toBe("");
  });

  it("creates links to the reference URLs", () => {
    const references: Reference[] = [
      { type: "article", label: "Match report", url: "https://fbm.es/report" },
      { type: "photo", label: "Game photos", url: "https://flickr.com/album" },
    ];

    render(<ReferenceList references={references} />);

    const links = screen.getAllByRole("link");
    expect(links).toHaveLength(2);
    expect(links[0]).toHaveAttribute("href", "https://fbm.es/report");
    expect(links[1]).toHaveAttribute("href", "https://flickr.com/album");
  });
});

