import { Link, useParams } from "react-router-dom";
import { GameVideos } from "../components/events/GameVideos";
import { QuarterScoresTable } from "../components/events/QuarterScoresTable.tsx";
import { ReferenceList } from "../components/events/ReferenceList.tsx";
import { PlayerStatsSelector } from "../components/stats/PlayerStatsSelector";
import { CategoryBadge } from "../components/ui/CategoryBadge.tsx";
import { DateTimeDisplay } from "../components/ui/DateTimeDisplay.tsx";
import { EmptyState } from "../components/ui/EmptyState";
import { getEvents } from "../data/events.ts";
import { totalPoints } from "../model/GameSchema";

function scoreBoxClass(isHighest: boolean): string {
  return isHighest ? "bg-rose-800 text-white" : "bg-white text-gray-900";
}

export function GameDetailPage() {
  const { gameId } = useParams<{ gameId: string }>();
  const games = getEvents();

  const game = games.find((g) => g.id === gameId);

  if (!game) {
    return <EmptyState message="Partido no encontrado" />;
  }

  const opponent = game.home.opponent ? game.home.club : game.away.club;
  const homeScore = totalPoints(game.home.scores);
  const awayScore = totalPoints(game.away.scores);

  return (
    <div>
      <Link to="/" className="text-sm text-orange-500 hover:underline mb-4 inline-block">
        ← Volver al inicio
      </Link>

      <div className="bg-white rounded-xl shadow p-6 border border-gray-100 mb-6">
        <div className="text-xs text-gray-400 text-center mb-6 flex items-center justify-center gap-2">
          <span>
            {game.competition.name} · {game.competition.phase} · {game.competition.round}
          </span>
          <CategoryBadge category={game.competition.category} season={game.season} />
        </div>

        <div className="text-xs text-gray-400 text-center mb-4">
          <DateTimeDisplay isoDate={game.date} /> · {game.venue.name}
        </div>

        <div className="flex items-stretch justify-center gap-4">
          <div className="flex flex-col items-center justify-center gap-3 flex-1 self-stretch text-center">
            <div className="relative w-28 h-28">
              <img
                src={game.home.club.logo}
                alt={game.home.club.name}
                className="absolute inset-0 w-full h-full object-contain"
              />
            </div>
            <p className="font-bold text-2xl leading-tight text-gray-900 break-words">
              {game.home.club.name}
            </p>
          </div>

          <div className="flex flex-col items-center shrink-0">
            <div className="flex border-4 border-rose-800 rounded-xl overflow-hidden text-7xl font-black divide-x-4 divide-rose-800">
              <span
                data-testid="home-score"
                className={`px-6 py-3 min-w-[8.5rem] text-center ${scoreBoxClass(homeScore > awayScore)}`}
              >
                {homeScore}
              </span>
              <span
                data-testid="away-score"
                className={`px-6 py-3 min-w-[8.5rem] text-center ${scoreBoxClass(awayScore > homeScore)}`}
              >
                {awayScore}
              </span>
            </div>

            <QuarterScoresTable home={game.home} away={game.away} />
          </div>

          <div className="flex flex-col items-center justify-center gap-3 flex-1 self-stretch text-center">
            <div className="relative w-28 h-28">
              <img
                src={game.away.club.logo}
                alt={game.away.club.name}
                className="absolute inset-0 w-full h-full object-contain"
              />
            </div>
            <p className="font-bold text-2xl leading-tight text-gray-900 break-words">
              {game.away.club.name}
            </p>
          </div>
        </div>
      </div>

      <PlayerStatsSelector stats={game.playerStats} />

      <GameVideos videos={game.videos} opponent={opponent.name} />

      {game.recap && (
        <div className="bg-white rounded-xl shadow p-6 border border-gray-100 mb-6">
          <h2 className="font-semibold text-gray-700 mb-3">🏀 Crónica</h2>
          <h3>{game.recap.title}</h3>
          {game.recap.lines.map((line) => (
            <p key={line} className="text-gray-600 leading-relaxed whitespace-pre-line">
              {line}
            </p>
          ))}
        </div>
      )}

      <ReferenceList references={game.references} />
    </div>
  );
}
