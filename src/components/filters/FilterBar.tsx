import { useFilters } from "../../hooks/useFilters";
import { useGames } from "../../hooks/useGames";

export function FilterBar() {
  const { filters, setFilters, resetFilters } = useFilters();
  const games = useGames();

  const seasons = [...new Set(games.map((g) => g.season))].sort().reverse();
  const competitions = [...new Set(games.map((g) => g.competition))].sort();
  const teams = [...new Set(games.flatMap((g) => [g.home.team, g.away.team]))].sort();

  return (
    <div className="flex flex-wrap gap-3 items-center bg-white rounded-xl shadow p-4 border border-gray-100 mb-6">
      <select
        className="border border-gray-200 rounded px-2 py-1 text-sm"
        value={filters.season}
        onChange={(e) => setFilters({ season: e.target.value })}
      >
        <option value="">Todas las temporadas</option>
        {seasons.map((s) => (
          <option key={s} value={s}>{s}</option>
        ))}
      </select>

      <select
        className="border border-gray-200 rounded px-2 py-1 text-sm"
        value={filters.competition}
        onChange={(e) => setFilters({ competition: e.target.value })}
      >
        <option value="">Todas las competiciones</option>
        {competitions.map((c) => (
          <option key={c} value={c}>{c}</option>
        ))}
      </select>

      <select
        className="border border-gray-200 rounded px-2 py-1 text-sm"
        value={filters.team}
        onChange={(e) => setFilters({ team: e.target.value })}
      >
        <option value="">Todos los equipos</option>
        {teams.map((t) => (
          <option key={t} value={t}>{t}</option>
        ))}
      </select>

      <input
        type="date"
        className="border border-gray-200 rounded px-2 py-1 text-sm"
        value={filters.dateFrom}
        onChange={(e) => setFilters({ dateFrom: e.target.value })}
        placeholder="Desde"
      />

      <input
        type="date"
        className="border border-gray-200 rounded px-2 py-1 text-sm"
        value={filters.dateTo}
        onChange={(e) => setFilters({ dateTo: e.target.value })}
        placeholder="Hasta"
      />

      <button
        className="text-sm text-gray-400 hover:text-gray-600 underline"
        onClick={resetFilters}
      >
        Limpiar
      </button>
    </div>
  );
}
