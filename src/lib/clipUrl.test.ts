import { describe, expect, it } from "vitest";
import type { Clip } from "../model/ScoutingSchema.ts";
import { clipUrl } from "./clipUrl.ts";

function clip(start: string): Clip {
  return { start, description: "A clip", type: "good-play" };
}

describe("clipUrl", () => {
  it("converts a m:ss start into total seconds", () => {
    expect(clipUrl("https://youtu.be/abc", clip("1:05"))).toBe("https://youtu.be/abc?t=65");
  });

  it("converts a mm:ss start into total seconds", () => {
    expect(clipUrl("https://youtu.be/abc", clip("12:30"))).toBe("https://youtu.be/abc?t=750");
  });

  it("converts a h:mm:ss start into total seconds", () => {
    expect(clipUrl("https://youtu.be/abc", clip("1:02:03"))).toBe("https://youtu.be/abc?t=3723");
  });

  it("converts a zero start into zero seconds", () => {
    expect(clipUrl("https://youtu.be/abc", clip("0:00"))).toBe("https://youtu.be/abc?t=0");
  });

  it("appends the time with & when the url already has a query string", () => {
    expect(clipUrl("https://youtu.be/watch?v=abc", clip("0:30"))).toBe(
      "https://youtu.be/watch?v=abc&t=30",
    );
  });
});
