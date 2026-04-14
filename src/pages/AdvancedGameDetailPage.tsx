import {Link, useParams} from "react-router-dom";
import {useEvents} from "../hooks/useEvents.ts";
import {totalPoints} from "../model/GameSchema";
import {deriveAdvancedPlayerStats} from "../model/PlayerSchema";
import {EmptyState} from "../components/ui/EmptyState";
import {GameVideos} from "../components/events/GameVideos.tsx";
import {DateTimeDisplay} from "../components/ui/DateTimeDisplay.tsx";
import {ReferenceList} from "../components/events/ReferenceList.tsx";

export function AdvancedGameDetailPage() {
  const { gameId } = useParams<{ gameId: string }>();
  const games = useEvents();
  const game = games.find(g => g.id === gameId);

  if (!game) {
    return <EmptyState message="Partido (avanzado) no encontrado" />;
  }

  const rival = game.home.club.id === "alcobendas" ? game.away.club : game.home.club;
  const homeScore = totalPoints(game.home.scores);
  const awayScore = totalPoints(game.away.scores);
  const derived = game.playerStats ? deriveAdvancedPlayerStats(game.playerStats) : null;

  return (
    <div>
      <Link to="/" className="text-sm text-orange-500 hover:underline mb-4 inline-block">
        ← Volver al inicio (avanzado)
      </Link>

      <div className="bg-white rounded-xl shadow p-6 border border-gray-100 mb-6">
        <div className="text-xs text-gray-400 text-center mb-6">
          {game.competition.name} · {game.competition.phase} · {game.competition.round}
        </div>

        <div className="text-xs text-gray-400 text-center mb-4">
          <DateTimeDisplay isoDate={game.date}/> · {game.venue.name}
        </div>

        <div className="flex items-center justify-center gap-4">
          <div className="flex items-center gap-3 flex-1 justify-end">
            <img src={game.home.club.logo} alt={game.home.club.name} className="w-12 h-12 object-contain"/>
            <div className="text-right">
              <p className="font-bold text-lg text-gray-900">{game.home.club.name}</p>
              <div className="flex justify-end gap-1 mt-1 text-xs text-gray-400">
                {game.home.scores.map((s, i) => <span key={i}>Q{i + 1}: {s}</span>)}
              </div>
            </div>
          </div>

          <div className="text-4xl font-black text-gray-900">
            {homeScore} — {awayScore}
          </div>

          <div className="flex items-center gap-3 flex-1 justify-start">
            <div className="text-left">
              <p className="font-bold text-lg text-gray-900">{game.away.club.name}</p>
              <div className="flex justify-start gap-1 mt-1 text-xs text-gray-400">
                {game.away.scores.map((s, i) => <span key={i}>Q{i + 1}: {s}</span>)}
              </div>
            </div>
            <img src={game.away.club.logo} alt={game.away.club.name} className="w-12 h-12 object-contain"/>
          </div>
        </div>
      </div>

      {derived && (
        <div className="bg-white rounded-xl shadow p-6 border border-gray-100 mb-6">
          <h2 className="font-semibold text-gray-700 mb-4">📈 Estadísticas del jugador</h2>
          <div className="grid grid-cols-4 gap-4 text-center">
            <div>
              <p className="text-2xl font-bold text-gray-900">
                {Math.floor(derived.time / 60).toString().padStart(2, '0')}
                :
                {(derived.time % 60).toString().padStart(2, '0')}
              </p>
              <p className="text-xs text-gray-400">Tiempo</p>
            </div>
            <div>
              <p className="text-lg font-bold text-gray-900">{derived.fieldGoals.made}/{derived.fieldGoals.attempted}</p>
              <p className="text-xs text-gray-400">TC ({derived.percentage.fieldGoals}%)</p>
            </div>
            <div>
              <p className="text-lg font-bold text-gray-900">{derived.threePointers.made}/{derived.threePointers.attempted}</p>
              <p className="text-xs text-gray-400">3P ({derived.percentage.threePointers}%)</p>
            </div>
            <div>
              <p className="text-lg font-bold text-gray-900">{derived.freeThrows.made}/{derived.freeThrows.attempted}</p>
              <p className="text-xs text-gray-400">TL ({derived.percentage.freeThrows}%)</p>
            </div>
            <div>
              <p className="text-2xl font-bold text-gray-900">{derived.points}</p>
              <p className="text-xs text-gray-400">Puntos</p>
            </div>
            <div>
              <p className="text-lg font-bold text-gray-900">{game.playerStats.assists}</p>
              <p className="text-xs text-gray-400">Assistencias</p>
            </div>
            <div>
              <p className="text-lg font-bold text-gray-900">{game.playerStats.steals}</p>
              <p className="text-xs text-gray-400">Robos</p>
            </div>
            <div>
              <p className="text-lg font-bold text-gray-900">{game.playerStats.turnovers}</p>
              <p className="text-xs text-gray-400">Pérdidas</p>
            </div>
            <div>
              <p className="text-lg font-bold text-gray-900">{derived.plusMinus}</p>
              <p className="text-xs text-gray-400">+/-</p>
            </div>
            <div>
              <p className="text-lg font-bold text-gray-900">{derived.rebounds.offensive}/{derived.rebounds.defensive}</p>
              <p className="text-xs text-gray-400">Rebotes (O/D)</p>
            </div>
            <div>
              <p className="text-lg font-bold text-gray-900">{derived.blocks.made}/{derived.blocks.received}</p>
              <p className="text-xs text-gray-400">Tapones (H/R)</p>
            </div>
            <div>
              <p className="text-lg font-bold text-gray-900">{derived.faults.made}/{derived.faults.received}</p>
              <p className="text-xs text-gray-400">Faltas (C/R)</p>
            </div>
            <div>
              <p className="text-lg font-bold text-gray-900">{derived.efficiency}</p>
              <p className="text-xs text-gray-400">Valoración</p>
            </div>
          </div>
        </div>
      )}

      <GameVideos videos={game.videos} rival={rival.name} />

      {game.recap && (
        <div className="bg-white rounded-xl shadow p-6 border border-gray-100 mb-6">
          <h2 className="font-semibold text-gray-700 mb-3">🏀 Crónica</h2>
          <h3>{game.recap.title}</h3>
          {
            game.recap.lines.map(((line, i) => (
              <p key={i} className="text-gray-600 leading-relaxed whitespace-pre-line">{line}</p>
            )))
          }
        </div>
      )}

      <ReferenceList references={game.references} />

    </div>
  );
}
