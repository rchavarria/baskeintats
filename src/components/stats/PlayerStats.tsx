import type { PlayerStats as PlayerStatsType } from "../../model/PlayerSchema";
import { derivePlayerStats } from "../../model/PlayerSchema";

interface PlayerStatsProps {
  stats: PlayerStatsType;
}

export function PlayerStats({ stats }: PlayerStatsProps) {
  const derived = derivePlayerStats(stats);

  // totally on purpose: time AND points must be 0
  // if time > 0 but points == 0 => bad game, but it's possible
  // if time == 0 but points > 0 => not possible, error in data maybe
  if (derived.time === 0 && derived.points === 0) {
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
          <p className="text-3xl font-bold text-gray-900">
            {Math.floor(derived.time / 60).toString().padStart(2, '0')}
            :
            {(derived.time % 60).toString().padStart(2, '0')}
          </p>
          <p className="text-xs text-gray-400">Tiempo</p>
        </div>
        <div title="Triples (3 puntos) realizados">
          <p className="text-lg font-bold text-gray-900">{derived.threePointers}</p>
          <p className="text-xs text-gray-400">3P</p>
        </div>
        <div title="Tiros de campo (2 puntos) realizados">
          <p className="text-lg font-bold text-gray-900">{derived.fieldGoals}</p>
          <p className="text-xs text-gray-400">TC</p>
        </div>
        <div title="Tiros libres realizados sobre intentos">
          <p className="text-lg font-bold text-gray-900">{derived.freeThrows.made}/{derived.freeThrows.attempted}</p>
          <p className="text-xs text-gray-400">TL ({derived.percentage.freeThrows}%)</p>
        </div>
        <div title="Total de puntos anotados">
          <p className="text-3xl font-bold text-gray-900">{derived.points}</p>
          <p className="text-xs text-gray-400">Puntos</p>
        </div>
        <div title="Faltas personales cometidas">
          <p className="text-lg font-bold text-gray-900">{derived.faults}</p>
          <p className="text-xs text-gray-400">Faltas</p>
        </div>
        <div title="Más / Menos (diferencia de puntos estando en cancha)">
          <p className="text-lg font-bold text-gray-900">{derived.plusMinus}</p>
          <p className="text-xs text-gray-400">+/-</p>
        </div>
        <div title="Valoración/Eficiencia (rendimiento general del jugador)">
          <p className="text-lg font-bold text-gray-900">{derived.efficiency}</p>
          <p className="text-xs text-gray-400">Valoración</p>
        </div>
      </div>
    </div>
  );
}

