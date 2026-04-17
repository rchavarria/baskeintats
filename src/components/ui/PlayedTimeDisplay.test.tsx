import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { PlayedTimeDisplay } from "./PlayedTimeDisplay";

describe("PlayedTimeDisplay", () => {
  it("renders seconds below one minute as 00:ss", () => {
    render(<PlayedTimeDisplay time={55} />);

    expect(screen.getByText("00:55")).toBeInTheDocument();
  });

  it("renders one minute and thirty seconds as 01:30", () => {
    render(<PlayedTimeDisplay time={90} />);

    expect(screen.getByText("01:30")).toBeInTheDocument();
  });

  it("renders 666 seconds as 11:06", () => {
    render(<PlayedTimeDisplay time={666} />);

    expect(screen.getByText("11:06")).toBeInTheDocument();
  });
});

