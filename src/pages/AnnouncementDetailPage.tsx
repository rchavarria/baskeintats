import {Link, useParams} from "react-router-dom";
import {useEvents} from "../hooks/useEvents.ts";
import {EmptyState} from "../components/ui/EmptyState";
import {DateTimeDisplay} from "../components/ui/DateTimeDisplay.tsx";
import type {Announcement} from "../model/AnnouncementSchema.ts";
import {AnnouncementTypeEmoji} from "../components/events/AnnouncementEmojis.tsx";
import {ReferenceList} from "../components/events/ReferenceList.tsx";

export function AnnouncementDetailPage() {
  const { announcementId } = useParams<{ announcementId: string }>();
  const events = useEvents();

  const announcement = events.find(e => e.id === announcementId);
  if (!announcement || announcement.type !== "announcement") {
    return <EmptyState message="Anuncio no encontrado" />;
  }

  return (
    <div>
      <Link to="/" className="text-sm text-orange-500 hover:underline mb-4 inline-block">
        ← Volver al inicio
      </Link>

      {/* Header */}
      <div className="bg-white rounded-xl shadow p-6 border border-gray-100 mb-6">
        <div className="text-xs text-gray-400 text-center mb-2">
          {announcement.category && <span>{announcement.category} · </span>}
          {announcement.announcementType}
        </div>

        <div className="flex items-center justify-center gap-3 mb-4">
          <AnnouncementTypeEmoji type={announcement.announcementType} className="text-3xl" />
          <h1 className="text-xl font-bold text-gray-900 text-center">{announcement.title}</h1>
        </div>

        <div className="text-xs text-gray-400 text-center">
          <DateTimeDisplay isoDate={announcement.date}/>
          {announcement.venue && <> · {announcement.venue.name}</>}
        </div>
      </div>

      {/* Description */}
      <div className="bg-white rounded-xl shadow p-6 border border-gray-100 mb-6">
        <h2 className="font-semibold text-gray-700 mb-3">📝 Descripción</h2>
        {announcement.description.map((line, i) => (
          <p key={i} className="text-gray-600 leading-relaxed mb-2">{line}</p>
        ))}
      </div>

      {/* Schedule */}
      {announcement.schedule && announcement.schedule.length > 0 && (
        <div className="bg-white rounded-xl shadow p-6 border border-gray-100 mb-6">
          <h2 className="font-semibold text-gray-700 mb-3">📆 Calendario</h2>
          <div className="space-y-2">
            {announcement.schedule.map((entry, i) => (
              <div key={i} className="flex items-center gap-3 text-sm text-gray-700">
                <DateTimeDisplay isoDate={entry.date}/>
                {entry.label && <span className="text-gray-500">· {entry.label}</span>}
                {entry.opponent && <span className="text-gray-500">vs {entry.opponent}</span>}
              </div>
            ))}
          </div>
        </div>
      )}

      <ReferenceList references={announcement.references} />
    </div>
  );
}
