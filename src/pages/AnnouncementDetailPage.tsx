import {Link, useParams} from "react-router-dom";
import {useEvents} from "../hooks/useEvents.ts";
import {EmptyState} from "../components/ui/EmptyState";
import {DateTimeDisplay} from "../components/ui/DateTimeDisplay.tsx";

export function AnnouncementDetailPage() {
  const { announcementId } = useParams<{ announcementId: string }>();
  const announcements = useEvents();

  const announcement = announcements.find(g => g.id === announcementId);

  if (!announcement) {
    return <EmptyState message="Anuncio no encontrado" />;
  }

  return (
    <div>
      <Link to="/" className="text-sm text-orange-500 hover:underline mb-4 inline-block">
        ← Volver al inicio
      </Link>

      <div className="bg-white rounded-xl shadow p-6 border border-gray-100 mb-6">
        <div className="text-xs text-gray-400 text-center mb-6">
          {announcement.title}
        </div>

        <div className="text-xs text-gray-400 text-center mb-4">
          <DateTimeDisplay isoDate={announcement.date}/> · {announcement.venue?.name}
        </div>

      </div>

      <div className="bg-white rounded-xl shadow p-6 border border-gray-100 mb-6">
        <h2 className="font-semibold text-gray-700 mb-3">📱 Referencias</h2>
        {announcement.references?.map((ref, i) => (
          <a key={i}
             href={ref.url}
             target="_blank" rel="noopener noreferrer"
             className="block text-sm text-blue-500 hover:underline mb-1">
            {ref.type}
            {ref.label}
          </a>
        ))}
      </div>

    </div>
  );
}
