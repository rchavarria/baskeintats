import type {Reference} from "../../model/ReferenceSchema.ts";

const referenceTypeEmojiMap: Record<Reference["type"], string> = {
  "article": "📰",
  "document": "💼",
  "photo": "📸",
  "stats": "📈",
  "social-media": "📱",
  "web": "💻",
  "video": "🎥",
};

export function ReferenceTypeEmoji({ type }: { type: Reference["type"] }) {
  return <>{referenceTypeEmojiMap[type] || "❌❓🚨"}</>;
}
