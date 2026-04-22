import type { PlayerStats as PlayerStatsType } from "../../model/PlayerSchema";
import { createPlayerStatsFormatter } from "../../lib/player-stats";

interface PlayerStatsProps {
  stats: PlayerStatsType;
}

/**
 * Precondition: stats must have time > 0 or points > 0.
 * Use PlayerStatsSelector when the stats validity is unknown.
 */
export function PlayerStats({ stats }: PlayerStatsProps) {
  const formatter = createPlayerStatsFormatter(stats);


  return (
    <div className="bg-white rounded-xl shadow p-6 border border-gray-100 mb-6">
      <h2 className="font-semibold text-gray-700 mb-4">📈 Estadísticas del jugador</h2>
      <div className="grid grid-cols-4 gap-4 text-center">
        <div title="Minutos y segundos jugados en el partido">
          <p className="text-3xl font-bold text-gray-900">
            {formatter.formatPlayedTime()}
          </p>
          <p className="text-xs text-gray-400">Tiempo</p>
        </div>
        <div title="Triples (3 puntos) realizados">
          <p className="text-lg font-bold text-gray-900">{formatter.formatThreePointers()}</p>
          <p className="text-xs text-gray-400">3P</p>
        </div>
        <div title="Tiros de campo (2 puntos) realizados">
          <p className="text-lg font-bold text-gray-900">{formatter.formatFieldGoals()}</p>
          <p className="text-xs text-gray-400">TC</p>
        </div>
        <div title="Tiros libres realizados sobre intentos">
          <p className="text-lg font-bold text-gray-900">{formatter.formatFreeThrows()}</p>
          <p className="text-xs text-gray-400">TL</p>
        </div>
        <div title="Total de puntos anotados">
          <p className="text-3xl font-bold text-gray-900">{formatter.formatPoints()}</p>
          <p className="text-xs text-gray-400">Puntos</p>
        </div>
        <div title="Faltas personales cometidas">
          <p className="text-lg font-bold text-gray-900">{formatter.formatFaults()}</p>
          <p className="text-xs text-gray-400">Faltas</p>
        </div>
        <div title="Más / Menos (diferencia de puntos estando en cancha)">
          <p className="text-lg font-bold text-gray-900">{formatter.formatPlusMinus()}</p>
          <p className="text-xs text-gray-400">+/-</p>
        </div>
        <div title="Valoración/Eficiencia (rendimiento general del jugador)">
          <p className="text-lg font-bold text-gray-900">{formatter.formatEfficiency()}</p>
          <p className="text-xs text-gray-400">Valoración</p>
        </div>
      </div>
    </div>
  );
}

