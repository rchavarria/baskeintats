/**
 * NoPlayerStats
 *
 * Renders an empty-state card when no player stats are available for a game.
 * Used by PlayerStatsSelector when variant is 'none' or stats are undefined.
 */
export function NoPlayerStats() {
  return (
    <div className="bg-white rounded-xl shadow p-6 border border-gray-100 mb-6">
      <p className="text-gray-500 text-center">
        No hay estadísticas disponibles para este partido
      </p>
    </div>
  );
}

