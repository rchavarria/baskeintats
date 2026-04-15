import type { AdvancedPlayerStats as AdvancedPlayerStatsType } from "../../model/PlayerSchema";
import {deriveAdvancedPlayerStats} from "../../model/PlayerSchema";

interface AdvancedPlayerStatsProps {
  stats: AdvancedPlayerStatsType;
}

export function AdvancedPlayerStats({ stats }: AdvancedPlayerStatsProps) {
  const derived = deriveAdvancedPlayerStats(stats);

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
          <p className="text-2xl font-bold text-gray-900">
            {Math.floor(derived.time / 60).toString().padStart(2, '0')}
            :
            {(derived.time % 60).toString().padStart(2, '0')}
          </p>
          <p className="text-xs text-gray-400">Tiempo</p>
        </div>
        <div title="Triples (3 puntos) realizados sobre intentos">
          <p className="text-lg font-bold text-gray-900">
            {derived.threePointers.made}/{derived.threePointers.attempted}
          </p>
          <p className="text-xs text-gray-400">3P ({derived.percentage.threePointers}%)</p>
        </div>
        <div title="Tiros de campo (2 puntos) realizados sobre intentos">
          <p className="text-lg font-bold text-gray-900">{derived.fieldGoals.made}/{derived.fieldGoals.attempted}</p>
          <p className="text-xs text-gray-400">TC ({derived.percentage.fieldGoals}%)</p>
        </div>
        <div title="Tiros libres realizados sobre intentos">
          <p className="text-lg font-bold text-gray-900">{derived.freeThrows.made}/{derived.freeThrows.attempted}</p>
          <p className="text-xs text-gray-400">TL ({derived.percentage.freeThrows}%)</p>
        </div>
        <div title="Total de puntos anotados">
          <p className="text-3xl font-bold text-gray-900">{derived.points}</p>
          <p className="text-xs text-gray-400">Puntos</p>
        </div>
        <div>
          <p className="text-lg font-bold text-gray-900">{stats.assists}</p>
          <p className="text-xs text-gray-400">Assistencias</p>
        </div>
        <div>
          <p className="text-lg font-bold text-gray-900">{stats.steals}</p>
          <p className="text-xs text-gray-400">Robos</p>
        </div>
        <div>
          <p className="text-lg font-bold text-gray-900">{stats.turnovers}</p>
          <p className="text-xs text-gray-400">Pérdidas</p>
        </div>
        <div title="Más / Menos (diferencia de puntos estando en cancha)">
          <p className="text-3xl font-bold text-gray-900">{derived.plusMinus}</p>
          <p className="text-xs text-gray-400">+/-</p>
        </div>
        <div title="Rebotes ofensivos y defensivos">
          <p className="text-lg font-bold text-gray-900">
            {derived.rebounds.offensive}+{derived.rebounds.defensive}
          </p>
          <p className="text-xs text-gray-400">Rebotes (O+D)</p>
        </div>
        <div title="Tapones cometidos sobre recibidos">
          <p className="text-lg font-bold text-gray-900">{derived.blocks.made}/{derived.blocks.received}</p>
          <p className="text-xs text-gray-400">Tapones (C/R)</p>
        </div>
        <div title="Faltas personales cometidas sobre recibidas">
          <p className="text-lg font-bold text-gray-900">{derived.faults.made}/{derived.faults.received}</p>
          <p className="text-xs text-gray-400">Faltas (C/R)</p>
        </div>
        <div title="Valoración/Eficiencia (rendimiento general del jugador)">
          <p className="text-3xl font-bold text-gray-900">{derived.efficiency}</p>
          <p className="text-xs text-gray-400">Valoración</p>
        </div>
      </div>
    </div>
  );
}

