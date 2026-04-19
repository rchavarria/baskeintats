import type { AdvancedPlayerStats as AdvancedPlayerStatsType } from "../../model/PlayerSchema";
import { createPlayerStatsFormatter } from "../../lib/player-stats";

interface AdvancedPlayerStatsProps {
  stats: AdvancedPlayerStatsType;
}

export function AdvancedPlayerStats({ stats }: AdvancedPlayerStatsProps) {
  const formatter = createPlayerStatsFormatter(stats);

  // Check if stats are available using formatter
  if (!formatter.hasStats()) {
    return (
      <div className="bg-white rounded-xl shadow p-6 border border-gray-100 mb-6">
        <p className="text-gray-500 text-center">
          No hay estadísticas disponibles para este partido
        </p>
      </div>
    );
  }

  return (
    <div className="bg-white rounded-xl shadow p-6 border border-gray-100 mb-6">
      <h2 className="font-semibold text-gray-700 mb-4">📈 Estadísticas del jugador</h2>
      <div className="grid grid-cols-4 gap-4 text-center">
        <div title="Minutos y segundos jugados en el partido">
          <p className="text-2xl font-bold text-gray-900">
            {formatter.formatPlayedTime()}
          </p>
          <p className="text-xs text-gray-400">Tiempo</p>
        </div>
        <div title="Triples (3 puntos) realizados sobre intentos">
          <p className="text-lg font-bold text-gray-900">
            {formatter.formatThreePointers()}
          </p>
          <p className="text-xs text-gray-400">3P</p>
        </div>
        <div title="Tiros de campo (2 puntos) realizados sobre intentos">
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
        <div>
          <p className="text-lg font-bold text-gray-900">{formatter.formatAssists()}</p>
          <p className="text-xs text-gray-400">Assistencias</p>
        </div>
        <div>
          <p className="text-lg font-bold text-gray-900">{formatter.formatSteals()}</p>
          <p className="text-xs text-gray-400">Robos</p>
        </div>
        <div>
          <p className="text-lg font-bold text-gray-900">{formatter.formatTurnovers()}</p>
          <p className="text-xs text-gray-400">Pérdidas</p>
        </div>
        <div title="Más / Menos (diferencia de puntos estando en cancha)">
          <p className="text-3xl font-bold text-gray-900">{formatter.formatPlusMinus()}</p>
          <p className="text-xs text-gray-400">+/-</p>
        </div>
        <div title="Rebotes ofensivos y defensivos">
          <p className="text-lg font-bold text-gray-900">
            {formatter.formatRebounds()}
          </p>
          <p className="text-xs text-gray-400">Rebotes (O+D)</p>
        </div>
        <div title="Tapones cometidos sobre recibidos">
          <p className="text-lg font-bold text-gray-900">{formatter.formatBlocks()}</p>
          <p className="text-xs text-gray-400">Tapones (C/R)</p>
        </div>
        <div title="Faltas personales cometidas sobre recibidas">
          <p className="text-lg font-bold text-gray-900">{formatter.formatFaults()}</p>
          <p className="text-xs text-gray-400">Faltas (C/R)</p>
        </div>
        <div title="Valoración/Eficiencia (rendimiento general del jugador)">
          <p className="text-3xl font-bold text-gray-900">{formatter.formatEfficiency()}</p>
          <p className="text-xs text-gray-400">Valoración</p>
        </div>
      </div>
    </div>
  );
}

