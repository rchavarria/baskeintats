import {Link} from "react-router-dom";
import type {Announcement} from "../../model/AnnouncementSchema.ts";
import {DateDisplay} from "../ui/DateDisplay.tsx";
import {AnnouncementTypeEmoji} from "./AnnouncementEmojis.tsx";

interface AnnouncementCardProps {
  announcement: Announcement;
}

export function AnnouncementCard({ announcement }: AnnouncementCardProps) {
  return (
    <Link
      to={`/announcements/${announcement.id}`}
      className="block bg-white rounded-xl shadow hover:shadow-md transition p-4 border border-gray-100"
    >
      <div className="flex items-center justify-between text-xs text-gray-400 mb-3">
        <DateDisplay isoDate={announcement.date} />
        <span>{announcement.category}</span>
      </div>
      <div className="flex items-center justify-center gap-3">
        <AnnouncementTypeEmoji type={announcement.announcementType} className="text-2xl" />
        <p className="font-semibold text-gray-800 text-center">{announcement.title}</p>
      </div>
      <div className="mt-2 text-center text-xs text-gray-400">
        {announcement.description.slice(0, 2).map((line, i) => (
          <p key={i} className="line-clamp-2">{line}</p>
        ))}
        {announcement.description.length > 2 && (
          <p className="text-gray-400 text-xs text-center">· · ·</p>
        )}
      </div>
    </Link>
  );
}
