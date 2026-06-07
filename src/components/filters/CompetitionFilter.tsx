import { useMemo, useEffect } from "react";
import { useEvents } from "../../hooks/useEvents";
import { useFiltersContext } from "../../context/FiltersContext";

export function CompetitionFilter() {
  const events = useEvents();
  const { filters, setFilters } = useFiltersContext();

  const competitions = useMemo(() => {
    const names = new Set<string>();
    for (const event of events) {
      const e = event as Record<string, unknown>;

      // Respect active season filter
      if (filters.season && (e.season as string) !== filters.season) {
        continue;
      }

      // Respect active event type filter
      if (filters.eventType && (e.type as string) !== filters.eventType) {
        continue;
      }

      const competition = e.competition as { name: string } | undefined;
      if (!competition?.name) {
        continue;
      }

      names.add(competition.name);
    }

    return [...names].sort((a, b) => a.localeCompare(b));
  }, [events, filters.season, filters.eventType]);

  // Reset competition if it's no longer available under the current filters
  useEffect(() => {
    if (filters.competition && !competitions.includes(filters.competition)) {
      setFilters({ competition: "" });
    }
  }, [competitions, filters.competition, setFilters]);

  return (
    <div className="bg-white rounded-xl shadow border border-gray-100 p-4">
      <h2 className="text-sm font-semibold text-gray-700 uppercase tracking-wide mb-3">
        Competición
      </h2>
      <ul className="flex flex-col gap-1">
        <li>
          <button
            type="button"
            onClick={() => setFilters({ competition: "" })}
            className={`w-full text-left px-3 py-1.5 rounded-lg text-sm transition-colors ${
              filters.competition === ""
                ? "bg-blue-600 text-white font-medium"
                : "text-gray-600 hover:bg-gray-100"
            }`}
          >
            Todas las competiciones
          </button>
        </li>
        {competitions.map((name) => (
          <li key={name}>
            <button
              type="button"
              onClick={() => setFilters({ competition: name })}
              className={`w-full text-left px-3 py-1.5 rounded-lg text-sm transition-colors ${
                filters.competition === name
                  ? "bg-blue-600 text-white font-medium"
                  : "text-gray-600 hover:bg-gray-100"
              }`}
            >
              {name}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

