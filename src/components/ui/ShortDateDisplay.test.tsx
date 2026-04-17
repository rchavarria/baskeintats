import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { ShortDateDisplay } from "./ShortDateDisplay";

describe("ShortDateDisplay", () => {
  it("renders the date in dd-mmm-yyyy format", () => {
    render(<ShortDateDisplay isoDate="2026-04-17T12:00:00" />);

    expect(screen.getByText("17-abr-2026")).toBeInTheDocument();
  });
});

