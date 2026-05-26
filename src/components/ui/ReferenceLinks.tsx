import type {Reference} from "../../model/ReferenceSchema.ts";

interface ReferenceLinksProps {
  references: Reference[];
}

function referenceEmoji(type: Reference["type"]): string {
  switch (type) {
    case "article": return "📰";
    case "document": return "💼";
    case "photo": return "📸";
    case "stats": return "📈";
    case "social-media": return "📱";
    case "web": return "💻";
    case "video": return "🎥";
  }
}

export function ReferenceLinks({ references }: ReferenceLinksProps) {
  if (!references || references.length === 0) return null;

  return (
    <div className="mt-3 px-2 flex justify-center gap-4">
      {references.map((ref, idx) => (
        <span
          key={idx}
          role="link"
          title={ref.label}
          className="cursor-pointer text-2xl"
          onClick={(e) => {
            e.preventDefault();
            e.stopPropagation();
            window.open(ref.url, "_blank", "noopener,noreferrer");
          }}
        >
          {referenceEmoji(ref.type)}
        </span>
      ))}
    </div>
  );
}
