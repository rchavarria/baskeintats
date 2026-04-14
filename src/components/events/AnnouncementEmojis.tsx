import type {Announcement} from "../../model/AnnouncementSchema.ts";
import type {Reference} from "../../model/ReferenceSchema.ts";

const announcementToEmoji: Record<Announcement["announcementType"], string> = {
  "tournament": "🏆",
  "friendly-game": "🫂",
  "call-up": "📢",
  "milestone": "🚀",
};

const referenceToEmoji: Record<Reference["type"], string> = {
  "social-media": "📱",
  "article": "📰",
  "document": "💼",
  "photo": "📸",
  "video": "🎥",
};

interface AnnouncementTypeEmojiProps {
  type: Announcement["announcementType"];
  className?: string;
}

export function AnnouncementTypeEmoji({ type, className = "text-2xl" }: AnnouncementTypeEmojiProps) {
  const emoji = announcementToEmoji[type] || "❌❓🚨";
  return <span className={className}>{emoji}</span>;
}

interface ReferenceTypeEmojiProps {
  type: Reference["type"];
}

export function ReferenceTypeEmoji({ type }: ReferenceTypeEmojiProps) {
  return <>{referenceToEmoji[type]}</>;
}

