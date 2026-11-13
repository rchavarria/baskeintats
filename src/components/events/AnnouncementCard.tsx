import { Link } from "react-router-dom";
import type { Announcement } from "../../model/AnnouncementSchema.ts";
import { CategoryBadge } from "../ui/CategoryBadge.tsx";
import { DateDisplay } from "../ui/DateDisplay.tsx";
import { AnnouncementTypeEmoji } from "./AnnouncementEmojis.tsx";

interface AnnouncementCardProps {
  announcement: Announcement;
}

export function AnnouncementCard({ announcement }: AnnouncementCardProps) {
  return (
    <Link
      to={`/announcements/${announcement.id}`}
      className="block bg-white rounded-2xl shadow hover:shadow-lg transition overflow-hidden border-2 border-rose-800"
    >
      <div className="bg-gradient-to-br from-rose-700 via-rose-800 to-rose-900 px-4 py-3 flex items-center justify-between gap-3">
        <div className="flex items-center gap-3 min-w-0">
          <AnnouncementTypeEmoji
            type={announcement.announcementType}
            className="text-2xl sm:text-3xl leading-none"
          />
          <p className="font-extrabold text-white text-base sm:text-lg leading-tight break-words">
            {announcement.title}
          </p>
        </div>

        <div className="bg-neutral-900 text-white rounded-xl px-3 py-1 flex flex-col items-center shrink-0 shadow-lg">
          <CategoryBadge
            category={announcement.category}
            season={announcement.season}
            className="!bg-transparent !text-inherit !px-0 font-semibold"
          />
          <span className="text-[11px] text-white/70 leading-tight">
            <DateDisplay isoDate={announcement.date} />
          </span>
        </div>
      </div>

      {announcement.description.length > 0 && (
        <div className="p-4 text-center text-xs text-gray-500">
          {announcement.description.slice(0, 2).map((line) => (
            <p key={line} className="line-clamp-2">
              {line}
            </p>
          ))}
          {announcement.description.length > 2 && <p className="text-gray-400">· · ·</p>}
        </div>
      )}
    </Link>
  );
}
