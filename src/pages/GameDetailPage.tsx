import { useParams, Link } from "react-router-dom";
import { useGames } from "../hooks/useGames";
import { useTeams } from "../hooks/useTeams";
import { totalPoints } from "../model/GameSchema";
import { derivePlayerStats } from "../model/PlayerSchema";
import { EmptyState } from "../components/ui/EmptyState";
import {DateDisplay} from "../components/ui/DateDisplay.tsx";

export function GameDetailPage() {
  const { gameId } = useParams<{ gameId: string }>();
  const games = useGames();
  const { teamsMap } = useTeams();

  const game = games.find(g => g.id === gameId);

  if (!game) {
    return <EmptyState message="Partido no encontrado" />;
  }

  const homeScore = totalPoints(game.home.scores);
  const awayScore = totalPoints(game.away.scores);
  const derived = game.playerStats ? derivePlayerStats(game.playerStats) : null;

  return (
    <div>
      <Link to="/games" className="text-sm text-orange-500 hover:underline mb-4 inline-block">
        ← Volver a partidos
      </Link>

      <div className="bg-white rounded-xl shadow p-6 border border-gray-100 mb-6">
        <div className="text-xs text-gray-400 text-center mb-6">
          {game.competition.name} · {game.competition.phase} · {game.competition.round}
        </div>

        <div className="text-xs text-gray-400 text-center mb-4">
          <DateDisplay isoDate={game.date} /> · { game.venue.name }
        </div>

        <div className="flex items-center justify-center gap-8">
          <div className="text-center flex-1">
            <img src={game.home.club.logo} alt={game.home.club.name} className="w-8 h-8 object-contain" />
            <p className="font-bold text-lg text-gray-900">{game.home.club.name}</p>
            <div className="flex justify-center gap-1 mt-1 text-xs text-gray-400">
              {game.home.scores.map((s, i) => <span key={i}>Q{i + 1}: {s}</span>)}
            </div>
          </div>
          <div className="text-4xl font-black text-gray-900">
            {homeScore} — {awayScore}
          </div>
          <div className="text-center flex-1">
            <img src={game.away.club.logo} alt={game.away.club.name} className="w-8 h-8 object-contain" />
            <p className="font-bold text-lg text-gray-900">{game.away.club.name}</p>
            <div className="flex justify-center gap-1 mt-1 text-xs text-gray-400">
              {game.away.scores.map((s, i) => <span key={i}>Q{i + 1}: {s}</span>)}
            </div>
          </div>
        </div>
      </div>

      {derived && (
        <div className="bg-white rounded-xl shadow p-6 border border-gray-100 mb-6">
          <h2 className="font-semibold text-gray-700 mb-4">Estadísticas del jugador</h2>
          <div className="grid grid-cols-3 gap-4 text-center">
            <div><p className="text-2xl font-bold text-gray-900">{derived.points}</p><p className="text-xs text-gray-400">Puntos</p></div>
            <div><p className="text-lg font-bold text-gray-900">{derived.fieldGoals}/-</p><p className="text-xs text-gray-400">TC ({derived.percentage.fieldGoals}%)</p></div>
            <div><p className="text-lg font-bold text-gray-900">{derived.threePointers}/-</p><p className="text-xs text-gray-400">3P ({derived.percentage.threePointers}%)</p></div>
            <div><p className="text-lg font-bold text-gray-900">{derived.freeThrows.made}/{derived.freeThrows.attempted}</p><p className="text-xs text-gray-400">TL ({derived.percentage.freeThrows}%)</p></div>
          </div>
        </div>
      )}

      {/*{game.recap && (*/}
      {/*  <div className="bg-white rounded-xl shadow p-6 border border-gray-100 mb-6">*/}
      {/*    <h2 className="font-semibold text-gray-700 mb-3">Crónica</h2>*/}
      {/*    <p className="text-gray-600 leading-relaxed whitespace-pre-line">{game.recap}</p>*/}
      {/*  </div>*/}
      {/*)}*/}

      {/*{(game.videos?.length || game.social?.length || game.articles?.length) && (*/}
      {/*  <div className="bg-white rounded-xl shadow p-6 border border-gray-100">*/}
      {/*    <h2 className="font-semibold text-gray-700 mb-3">Multimedia</h2>*/}
      {/*    {game.videos?.map((url, i) => (*/}
      {/*      <a key={i} href={url} target="_blank" rel="noopener noreferrer" className="block text-sm text-orange-500 hover:underline mb-1">🎬 Video {i + 1}</a>*/}
      {/*    ))}*/}
      {/*    {game.social?.map((url, i) => (*/}
      {/*      <a key={i} href={url} target="_blank" rel="noopener noreferrer" className="block text-sm text-blue-500 hover:underline mb-1">💬 Social {i + 1}</a>*/}
      {/*    ))}*/}
      {/*    {game.articles?.map((url, i) => (*/}
      {/*      <a key={i} href={url} target="_blank" rel="noopener noreferrer" className="block text-sm text-green-500 hover:underline mb-1">📰 Artículo {i + 1}</a>*/}
      {/*    ))}*/}
      {/*  </div>*/}
      {/*)}*/}
    </div>
  );
}
