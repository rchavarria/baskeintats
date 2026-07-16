import {describe, expect, it} from "vitest";
import {ClipSchema, ScoutingSchema} from "./ScoutingSchema";

describe("ClipSchema", () => {

  describe("#start timestamp", () => {

    it.each([
      "1:23:45",
      "23:45",
      "2:34",
      "1:02",
      "59:59",
      "1:00:00",
      "0:00",
      "0:58",
      "9:59:00",
    ])('accepts valid timestamp "%s"', (start) => {
      const result = ClipSchema.safeParse({
        start,
        description: "Test clip",
        type: "good-play",
      });
      expect(result.success).toBe(true);
    });

    it.each([
      "",
      "123",
      "1:60",
      "1:2:60",
      "ab:cd",
      "1:2:3:4",
      ":30",
      "1:",
    ])('rejects invalid timestamp "%s"', (start) => {
      const result = ClipSchema.safeParse({
        start,
        description: "Test clip",
        type: "good-play",
      });
      expect(result.success).toBe(false);
    });

  });

  describe("#type enum", () => {

    it('accepts "good-play"', () => {
      const result = ClipSchema.safeParse({ start: "1:00", description: "x", type: "good-play" });
      expect(result.success).toBe(true);
    });

    it('accepts "bad-play"', () => {
      const result = ClipSchema.safeParse({ start: "1:00", description: "x", type: "bad-play" });
      expect(result.success).toBe(true);
    });

    it("rejects unknown types", () => {
      const result = ClipSchema.safeParse({ start: "1:00", description: "x", type: "neutral" });
      expect(result.success).toBe(false);
    });

  });

});

describe("ScoutingSchema", () => {

  const base = {
    id: "s-001",
    type: "scouting" as const,
    season: "2025-26",
    date: "2026-07-16T10:00:00Z",
    category: "U16M" as const,
    title: "Test scouting",
    description: ["Line one.", "Line two."],
    video: "https://www.youtube.com/watch?v=example",
    clips: [
      { start: "1:23", description: "Good block.", type: "good-play" as const },
    ],
  };

  it("parses a valid scouting object", () => {
    const result = ScoutingSchema.safeParse(base);
    expect(result.success).toBe(true);
  });

  it("applies default false to favourite when omitted", () => {
    const result = ScoutingSchema.safeParse(base);
    expect(result.success).toBe(true);
    expect(result.data.favourite).toBe(false);
  });

  it("rejects a scouting with a clip with invalid start", () => {
    const bad = { ...base, clips: [{ start: "1:60", description: "x", type: "good-play" }] };
    expect(ScoutingSchema.safeParse(bad).success).toBe(false);
  });

  it("rejects a scouting with an invalid video URL", () => {
    const bad = { ...base, video: "not-a-url" };
    expect(ScoutingSchema.safeParse(bad).success).toBe(false);
  });

  it("rejects an invalid category", () => {
    const bad = { ...base, category: "U19M" };
    expect(ScoutingSchema.safeParse(bad).success).toBe(false);
  });

});
