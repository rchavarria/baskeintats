import type {Reference} from "../../model/ReferenceSchema.ts";

const referenceTypeEmojiMap: Record<Reference["type"], string> = {
  "article": "📰",
  "document": "💼",
  "photo": "📸",
  "stats": "📈",
  "social-media": "📱",
  "video": "🎥",
};

function ReferenceTypeEmoji({ type }: { type: Reference["type"] }) {
  return <>{referenceTypeEmojiMap[type] || "❌❓🚨"}</>;
}

interface ReferenceListProps {
  references: Reference[] | undefined;
}

export function ReferenceList({ references }: ReferenceListProps) {
  if (!references || references.length === 0) return null;

  return (
    <div className="bg-white rounded-xl shadow p-6 border border-gray-100 mb-6">
      <h2 className="font-semibold text-gray-700 mb-3">
        🔗 Enlaces de interés
      </h2>

      {references.map((ref, i) => (
        <a key={i}
           href={ref.url}
           target="_blank" rel="noopener noreferrer"
           className="block text-sm text-blue-500 hover:underline mb-1">
          <ReferenceTypeEmoji type={ref.type} /> {ref.label}
        </a>
      ))}

    </div>
  );
}

