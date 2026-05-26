import {render, screen} from "@testing-library/react";
import {describe, expect, it} from "vitest";
import {ReferenceLinks} from "./ReferenceLinks";

describe("ReferenceLinks", () => {
  it("renders nothing when references array is empty", () => {
    const {container} = render(<ReferenceLinks references={[]} />);
    expect(container).toBeEmptyDOMElement();
  });

  it("shows an article reference with 📰 emoji", () => {
    render(<ReferenceLinks references={[{ type: "article", label: "News article", url: "https://example.com/article" }]} />);

    const ref = screen.getByTitle("News article");
    expect(ref).toBeInTheDocument();
    expect(ref).toHaveTextContent("📰");
  });

  it("shows a document reference with 💼 emoji", () => {
    render(<ReferenceLinks references={[{ type: "document", label: "Official document", url: "https://example.com/doc" }]} />);

    const ref = screen.getByTitle("Official document");
    expect(ref).toBeInTheDocument();
    expect(ref).toHaveTextContent("💼");
  });

  it("shows a photo reference with 📸 emoji", () => {
    render(<ReferenceLinks references={[{ type: "photo", label: "Team photo", url: "https://example.com/photo" }]} />);

    const ref = screen.getByTitle("Team photo");
    expect(ref).toBeInTheDocument();
    expect(ref).toHaveTextContent("📸");
  });

  it("shows a stats reference with 📈 emoji", () => {
    render(<ReferenceLinks references={[{ type: "stats", label: "Game stats", url: "https://example.com/stats" }]} />);

    const ref = screen.getByTitle("Game stats");
    expect(ref).toBeInTheDocument();
    expect(ref).toHaveTextContent("📈");
  });

  it("shows a social-media reference with 📱 emoji", () => {
    render(<ReferenceLinks references={[{ type: "social-media", label: "Instagram post", url: "https://example.com/social" }]} />);

    const ref = screen.getByTitle("Instagram post");
    expect(ref).toBeInTheDocument();
    expect(ref).toHaveTextContent("📱");
  });

  it("shows a web reference with 💻 emoji", () => {
    render(<ReferenceLinks references={[{ type: "web", label: "Official website", url: "https://example.com/web" }]} />);

    const ref = screen.getByTitle("Official website");
    expect(ref).toBeInTheDocument();
    expect(ref).toHaveTextContent("💻");
  });

  it("shows a video reference with 🎥 emoji", () => {
    render(<ReferenceLinks references={[{ type: "video", label: "Game highlights", url: "https://example.com/video" }]} />);

    const ref = screen.getByTitle("Game highlights");
    expect(ref).toBeInTheDocument();
    expect(ref).toHaveTextContent("🎥");
  });

  it("uses the reference label as the title attribute of the span", () => {
    render(<ReferenceLinks references={[{ type: "web", label: "My custom label", url: "https://example.com/web" }]} />);

    const ref = screen.getByTitle("My custom label");
    expect(ref).toBeInTheDocument();
    expect(ref.tagName).toBe("SPAN");
    expect(ref).toHaveAttribute("title", "My custom label");
  });
});
