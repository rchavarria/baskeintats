import { useMemo } from "react";
import { useEvents } from "../../hooks/useEvents";
import { useFiltersContext } from "../../context/FiltersContext";

type TeamOption = { id: string; name: string };

export function OpponentTeamFilter() {
  const events = useEvents();
  const { filters, setFilters } = useFiltersContext();

  const opponents = useMemo<TeamOption[]>(() => {
    const map = new Map<string, string>();
    for (const event of events) {
      const e = event as Record<string, unknown>;
      const home = e.home as { club: { id: string; name: string }; opponent?: boolean } | undefined;
      const away = e.away as { club: { id: string; name: string }; opponent?: boolean } | undefined;
      if (home?.opponent && home.club) map.set(home.club.id, home.club.name);
      if (away?.opponent && away.club) map.set(away.club.id, away.club.name);
    }
    return [...map.entries()]
      .map(([id, name]) => ({ id, name }))
      .sort((a, b) => a.name.localeCompare(b.name));
  }, [events]);

  return (
    <div className="bg-white rounded-xl shadow border border-gray-100 p-4">
      <h2 className="text-sm font-semibold text-gray-700 uppercase tracking-wide mb-3">
        Opponent
      </h2>
      <ul className="flex flex-col gap-1">
        <li>
          <button
            type="button"
            onClick={() => setFilters({ opponentTeam: "" })}
            className={`w-full text-left px-3 py-1.5 rounded-lg text-sm transition-colors ${
              filters.opponentTeam === ""
                ? "bg-blue-600 text-white font-medium"
                : "text-gray-600 hover:bg-gray-100"
            }`}
          >
            All opponents
          </button>
        </li>
        {opponents.map(({ id, name }) => (
          <li key={id}>
            <button
              type="button"
              onClick={() => setFilters({ opponentTeam: id })}
              className={`w-full text-left px-3 py-1.5 rounded-lg text-sm transition-colors ${
                filters.opponentTeam === id
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

