import {Link, useParams} from "react-router-dom";
import {useEvents} from "../hooks/useEvents.ts";
import {EmptyState} from "../components/ui/EmptyState";
import {DateTimeDisplay} from "../components/ui/DateTimeDisplay.tsx";
import {CategoryBadge} from "../components/ui/CategoryBadge.tsx";
import type {Clip} from "../model/ScoutingSchema.ts";

function clipTypeEmoji(type: Clip["type"]): string {
  return type === "good-play" ? "🟢" : "🔴";
}

function clipTypeLabel(type: Clip["type"]): string {
  return type === "good-play" ? "Good play" : "Bad play";
}

export function ScoutingDetailPage() {
  const {scoutingId} = useParams<{scoutingId: string}>();
  const events = useEvents();

  const scouting = events.find(e => e.id === scoutingId);
  if (!scouting || scouting.type !== "scouting") {
    return <EmptyState message="Scouting no encontrado" />;
  }

  return (
    <div>
      <Link to="/" className="text-sm text-orange-500 hover:underline mb-4 inline-block">
        ← Volver al inicio
      </Link>

      {/* Header */}
      <div className="bg-white rounded-xl shadow p-6 border border-gray-100 mb-6">
        <div className="text-xs text-gray-400 text-center mb-2 flex items-center justify-center gap-2">
          <CategoryBadge category={scouting.category} season={scouting.season} />
          <span>Scouting</span>
        </div>
        <div className="flex items-center justify-center gap-3 mb-4">
          <span className="text-3xl">🔍</span>
          <h1 className="text-xl font-bold text-gray-900 text-center">{scouting.title}</h1>
        </div>
        <div className="text-xs text-gray-400 text-center">
          <DateTimeDisplay isoDate={scouting.date} />
        </div>
      </div>

      {/* Description */}
      <div className="bg-white rounded-xl shadow p-6 border border-gray-100 mb-6">
        <h2 className="font-semibold text-gray-700 mb-3">📝 Descripción</h2>
        {scouting.description.map((line, i) => (
          <p key={i} className="text-gray-600 leading-relaxed mb-2">{line}</p>
        ))}
      </div>

      {/* Video */}
      <div className="bg-white rounded-xl shadow p-6 border border-gray-100 mb-6">
        <h2 className="font-semibold text-gray-700 mb-3">🎬 Vídeo</h2>
        <a
          href={scouting.video}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 text-indigo-600 hover:underline text-sm font-medium"
        >
          <span>▶️</span>
          Ver vídeo principal
        </a>
      </div>

      {/* Clips */}
      {scouting.clips.length > 0 && (
        <div className="bg-white rounded-xl shadow p-6 border border-gray-100 mb-6">
          <h2 className="font-semibold text-gray-700 mb-4">
            🎞️ Clips ({scouting.clips.length})
          </h2>
          <ol className="flex flex-col gap-3">
            {scouting.clips.map((clip, i) => (
              <li
                key={i}
                className="flex items-start gap-3 border border-gray-100 rounded-lg p-3"
              >
                <span className="shrink-0 font-mono text-sm font-semibold text-gray-500 w-14 text-right pt-0.5">
                  {clip.start}
                </span>
                <span
                  className="shrink-0 text-lg"
                  title={clipTypeLabel(clip.type)}
                  aria-label={clipTypeLabel(clip.type)}
                >
                  {clipTypeEmoji(clip.type)}
                </span>
                <a
                  href={`${scouting.video}&t=${clip.start}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-gray-700 hover:text-indigo-600 hover:underline leading-snug"
                >
                  {clip.description}
                </a>
              </li>
            ))}
          </ol>
        </div>
      )}
    </div>
  );
}

