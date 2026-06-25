import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { CategoryBadge } from "./CategoryBadge";

describe("CategoryBadge", () => {
  it("renders the category text without arrow when player plays their natural age", () => {
    // player born 2011, season 2025-26 -> age 15, U15M -> no arrow
    render(<CategoryBadge category="U15M" season="2025-26" />);

    expect(screen.getByText("U15M")).toBeInTheDocument();
    expect(screen.queryByLabelText("plays up a category")).not.toBeInTheDocument();
  });

  it("shows up arrow when player plays one year up", () => {
    // age 15, U16M -> diff 1 -> arrow
    render(<CategoryBadge category="U16M" season="2025-26" />);

    expect(screen.getByText("U16M")).toBeInTheDocument();
    expect(screen.getByLabelText("plays up a category")).toBeInTheDocument();
  });

  it("shows up arrow when player plays multiple years up", () => {
    // age 15, U18M -> diff 3 -> arrow
    render(<CategoryBadge category="U18M" season="2025-26" />);

    expect(screen.getByText("U18M")).toBeInTheDocument();
    expect(screen.getByLabelText("plays up a category")).toBeInTheDocument();
  });

  it("does not show arrow when player plays in a lower category", () => {
    // age 15, U14M -> diff -1 -> no arrow
    render(<CategoryBadge category="U14M" season="2025-26" />);

    expect(screen.getByText("U14M")).toBeInTheDocument();
    expect(screen.queryByLabelText("plays up a category")).not.toBeInTheDocument();
  });

  it("computes age based on the end year of the season", () => {
    // season 2024-25 -> endYear 2025 -> age 14 -> U15M is +1 -> arrow
    render(<CategoryBadge category="U15M" season="2024-25" />);

    expect(screen.getByLabelText("plays up a category")).toBeInTheDocument();
  });

  it("supports four-digit end year format", () => {
    // season 2025-2026 -> endYear 2026 -> age 15 -> U15M no arrow
    render(<CategoryBadge category="U15M" season="2025-2026" />);

    expect(screen.queryByLabelText("plays up a category")).not.toBeInTheDocument();
  });
});
