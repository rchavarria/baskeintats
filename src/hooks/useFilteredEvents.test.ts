import { renderHook } from "@testing-library/react";
import { describe, it, expect, vi, beforeEach } from "vitest";
import { useFilteredEvents } from "./useFilteredEvents";
import { useEvents } from "./useEvents";
import { useFiltersContext } from "../context/FiltersContext";
import type { Filters } from "../context/FiltersContext";

vi.mock("./useEvents");
vi.mock("../context/FiltersContext");

const mockUseEvents = vi.mocked(useEvents);
const mockUseFiltersContext = vi.mocked(useFiltersContext);

// ─── Minimal mock events ────────────────────────────────────────────────────

const gameA = {
  id: "game-a",
  type: "game" as const,
  season: "2025-26",
  date: "2026-01-10T18:00:00Z",
  home: { club: { id: "alcobendas", name: "CB Alcobendas" }, opponent: false },
  away: { club: { id: "canoe", name: "Real Canoe" }, opponent: true },
};

const gameB = {
  id: "game-b",
  type: "advanced-game" as const,
  season: "2025-26",
  date: "2026-02-15T17:00:00Z",
  home: { club: { id: "alcobendas", name: "CB Alcobendas" }, opponent: false },
  away: { club: { id: "rozas", name: "CB Rozas" }, opponent: true },
};

const gameC = {
  id: "game-c",
  type: "friendly-game" as const,
  season: "2024-25",
  date: "2025-03-10T17:00:00Z",
  home: { club: { id: "zentro", name: "Zentro Basket" }, opponent: true },
  away: { club: { id: "alcobendas", name: "CB Alcobendas" }, opponent: false },
};

const announcement = {
  id: "ann-1",
  type: "announcement" as const,
  season: "2025-26",
  date: "2026-01-01T00:00:00Z",
};

const stats = {
  id: "stats-1",
  type: "stats" as const,
  season: "2024-25",
  date: "2025-12-22T00:00:00Z",
};

const allEvents = [gameA, gameB, gameC, announcement, stats];

// ─── Helpers ─────────────────────────────────────────────────────────────────

function withFilters(partial: Partial<Filters>) {
  const defaults: Filters = {
    season: "",
    eventType: "",
    opponentTeam: "",
    competition: "",
    team: "",
    dateFrom: "",
    dateTo: "",
  };
  mockUseFiltersContext.mockReturnValue({
    filters: { ...defaults, ...partial },
    setFilters: vi.fn(),
    resetFilters: vi.fn(),
  });
}

// ─── Tests ────────────────────────────────────────────────────────────────────

describe("useFilteredEvents", () => {
  beforeEach(() => {
    // biome-ignore lint/suspicious/noExplicitAny: test mock
    mockUseEvents.mockReturnValue(allEvents as any);
    withFilters({});
  });

  describe("no filters active", () => {
    it("returns all events", () => {
      const { result } = renderHook(() => useFilteredEvents());
      expect(result.current).toHaveLength(allEvents.length);
    });
  });

  describe("season filter", () => {
    it("returns only events matching the selected season", () => {
      withFilters({ season: "2025-26" });
      const { result } = renderHook(() => useFilteredEvents());
      expect(result.current).toHaveLength(3); // gameA, gameB, announcement
      expect(result.current.every((e) => e.season === "2025-26")).toBe(true);
    });

    it("returns only events from a previous season", () => {
      withFilters({ season: "2024-25" });
      const { result } = renderHook(() => useFilteredEvents());
      expect(result.current).toHaveLength(2); // gameC, stats
      expect(result.current.every((e) => e.season === "2024-25")).toBe(true);
    });

    it("returns empty list when season has no events", () => {
      withFilters({ season: "2023-24" });
      const { result } = renderHook(() => useFilteredEvents());
      expect(result.current).toHaveLength(0);
    });
  });

  describe("eventType filter", () => {
    it("returns only events matching 'game' type", () => {
      withFilters({ eventType: "game" });
      const { result } = renderHook(() => useFilteredEvents());
      expect(result.current).toHaveLength(1);
      expect(result.current[0].id).toBe("game-a");
    });

    it("returns only events matching 'advanced-game' type", () => {
      withFilters({ eventType: "advanced-game" });
      const { result } = renderHook(() => useFilteredEvents());
      expect(result.current).toHaveLength(1);
      expect(result.current[0].id).toBe("game-b");
    });

    it("returns only announcements", () => {
      withFilters({ eventType: "announcement" });
      const { result } = renderHook(() => useFilteredEvents());
      expect(result.current).toHaveLength(1);
      expect(result.current[0].id).toBe("ann-1");
    });

    it("returns empty list when no events match the type", () => {
      withFilters({ eventType: "scheduled" });
      const { result } = renderHook(() => useFilteredEvents());
      expect(result.current).toHaveLength(0);
    });
  });

  describe("opponentTeam filter", () => {
    it("returns games where the away side is the opponent", () => {
      withFilters({ opponentTeam: "canoe" });
      const { result } = renderHook(() => useFilteredEvents());
      expect(result.current).toHaveLength(1);
      expect(result.current[0].id).toBe("game-a");
    });

    it("returns games where the home side is the opponent", () => {
      withFilters({ opponentTeam: "zentro" });
      const { result } = renderHook(() => useFilteredEvents());
      expect(result.current).toHaveLength(1);
      expect(result.current[0].id).toBe("game-c");
    });

    it("excludes events without home/away (announcements, stats)", () => {
      withFilters({ opponentTeam: "canoe" });
      const { result } = renderHook(() => useFilteredEvents());
      expect(result.current.every((e) => e.type !== "announcement" && e.type !== "stats")).toBe(true);
    });

    it("returns empty list when no game matches the opponent", () => {
      withFilters({ opponentTeam: "real-madrid" });
      const { result } = renderHook(() => useFilteredEvents());
      expect(result.current).toHaveLength(0);
    });
  });

  describe("combined filters", () => {
    it("filters by season AND eventType simultaneously", () => {
      withFilters({ season: "2025-26", eventType: "game" });
      const { result } = renderHook(() => useFilteredEvents());
      expect(result.current).toHaveLength(1);
      expect(result.current[0].id).toBe("game-a");
    });

    it("filters by season AND opponentTeam simultaneously", () => {
      withFilters({ season: "2025-26", opponentTeam: "rozas" });
      const { result } = renderHook(() => useFilteredEvents());
      expect(result.current).toHaveLength(1);
      expect(result.current[0].id).toBe("game-b");
    });

    it("returns empty list when combined filters match nothing", () => {
      withFilters({ season: "2024-25", opponentTeam: "canoe" });
      const { result } = renderHook(() => useFilteredEvents());
      expect(result.current).toHaveLength(0);
    });
  });
});

