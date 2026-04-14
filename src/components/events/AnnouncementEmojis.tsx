import type {Announcement} from "../../model/AnnouncementSchema.ts";

const announcementToEmoji: Record<Announcement["announcementType"], string> = {
  "tournament": "🏆",
  "friendly-game": "🫂",
  "call-up": "📢",
  "milestone": "🚀",
};

interface AnnouncementTypeEmojiProps {
  type: Announcement["announcementType"];
  className?: string;
}

export function AnnouncementTypeEmoji({ type, className = "text-2xl" }: AnnouncementTypeEmojiProps) {
  const emoji = announcementToEmoji[type] || "❌❓🚨";
  return <span className={className}>{emoji}</span>;
}
