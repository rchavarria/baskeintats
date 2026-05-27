import type {Reference} from "../../model/ReferenceSchema.ts";
import {ReferenceTypeEmoji} from "./ReferenceTypeEmoji.tsx";

interface ReferenceIconsProps {
  references: Reference[];
}

export function ReferenceIcons({ references }: ReferenceIconsProps) {
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
          <ReferenceTypeEmoji type={ref.type} />
        </span>
      ))}
    </div>
  );
}
