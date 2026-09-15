import { describe, expect, it } from "vitest";
import { getEvents } from "./events";

/**
 * React `key` uniqueness guard.
 *
 * Several components derive their list keys from the event data itself instead of
 * the array index (see `noArrayIndexKey`). Those keys are only safe while they stay
 * unique inside each rendered list, so this suite locks that invariant down: adding
 * data with a duplicated key would otherwise only surface as a React runtime warning.
 */

const events = getEvents();

function findDuplicates(keys: string[]): string[] {
  const counts = new Map<string, number>();
  for (const key of keys) {
    counts.set(key, (counts.get(key) ?? 0) + 1);
  }
  return [...counts.entries()].filter(([, count]) => count > 1).map(([key]) => key);
}

/** Reports duplicates as `"<eventId> :: <key>"` so failures point at the offending data file. */
function collectDuplicates(
  select: (event: Record<string, unknown>) => string[] | undefined,
): string[] {
  const failures: string[] = [];
  for (const event of events) {
    const e = event as unknown as Record<string, unknown>;
    const keys = select(e);
    if (!keys) continue;
    for (const duplicate of findDuplicates(keys)) {
      failures.push(`${String(e.id)} :: ${duplicate}`);
    }
  }
  return failures;
}

describe("event data produces unique React keys", () => {
  it("has unique description lines per event", () => {
    const duplicates = collectDuplicates((e) =>
      Array.isArray(e.description) ? e.description.map(String) : undefined,
    );
    expect(duplicates).toEqual([]);
  });

  it("has unique recap lines per game", () => {
    const duplicates = collectDuplicates((e) => {
      const recap = e.recap as { lines?: string[] } | undefined;
      return recap?.lines?.map(String);
    });
    expect(duplicates).toEqual([]);
  });

  it("has unique url references per event", () => {
    const duplicates = collectDuplicates((e) =>
      Array.isArray(e.references) ? e.references.map((r: { url: string }) => r.url) : undefined,
    );
    expect(duplicates).toEqual([]);
  });

  it("has unique schedule entries per announcement", () => {
    const duplicates = collectDuplicates((e) =>
      Array.isArray(e.schedule)
        ? e.schedule.map(
            (s: { date: string; label?: string; opponent?: string }) =>
              `${s.date}-${s.label ?? ""}-${s.opponent ?? ""}`,
          )
        : undefined,
    );
    expect(duplicates).toEqual([]);
  });

  it("has unique start clips per scouting", () => {
    const duplicates = collectDuplicates((e) =>
      Array.isArray(e.clips) ? e.clips.map((c: { start: string }) => c.start) : undefined,
    );
    expect(duplicates).toEqual([]);
  });

  it("has unique secondary video urls per game", () => {
    const duplicates = collectDuplicates((e) => {
      const videos = e.videos as { others?: { url: string }[] } | undefined;
      return videos?.others?.map((v) => v.url);
    });
    expect(duplicates).toEqual([]);
  });
});
