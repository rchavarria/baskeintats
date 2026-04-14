import {Link} from "react-router-dom";
import {DateDisplay} from "../ui/DateDisplay";
import type {Announcement} from "../../model/AnnouncementSchema.ts";

interface AnnouncementCardProps {
  announcement: Announcement;
}

export function AnnouncementCard({ announcement }: AnnouncementCardProps) {

  return (
    <Link
      to={`/announcements/${announcement.id}`}
      className="block bg-white rounded-xl shadow hover:shadow-md transition p-4 border border-gray-100"
    >
      <h1>{announcement.title}</h1>
      <div className="flex items-center justify-between text-xs text-gray-400 mb-3">
        <DateDisplay isoDate={announcement.date} />
      </div>
    </Link>
  );
}
