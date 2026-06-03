import { useMemo } from "react";
import { useEvents } from "../../hooks/useEvents";
import { useFiltersContext } from "../../context/FiltersContext";

export function CompetitionFilter() {
  const events = useEvents();
  const { filters, setFilters } = useFiltersContext();

  const competitions = useMemo(() => {
    const names = new Set<string>();
    for (const event of events) {
      const e = event as Record<string, unknown>;
      const competition = e.competition as { name: string } | undefined;
      if (competition?.name) names.add(competition.name);
    }
    return [...names].sort((a, b) => a.localeCompare(b));
  }, [events]);

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

