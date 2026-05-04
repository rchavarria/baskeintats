import type {Announcement} from "../../model/AnnouncementSchema.ts";

const announcementToEmoji: Record<Announcement["announcementType"], string> = {
  "call-up": "📢",
  "camp": "🏕️",
  "friendly-game": "🫂",
  "milestone": "🚀",
  "tournament": "🏆",
};

interface AnnouncementTypeEmojiProps {
  type: Announcement["announcementType"];
  className?: string;
}

export function AnnouncementTypeEmoji({ type, className = "text-2xl" }: AnnouncementTypeEmojiProps) {
  const emoji = announcementToEmoji[type] || "❌❓🚨";
  return <span className={className}>{emoji}</span>;
}
