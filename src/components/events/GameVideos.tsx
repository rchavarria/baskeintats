import type { Game } from "../../model/GameSchema";

interface GameVideosProps {
  videos: Game["videos"];
  rival: string;
}

export function GameVideos({ videos, rival }: GameVideosProps) {
  const hasOtherVideos = (videos.others?.length ?? 0) > 0;

  return (
    <div className="bg-white rounded-xl shadow p-6 border border-gray-100 mb-6">
      <h2 className="font-semibold text-gray-700 mb-3">🎥 Video</h2>

      <a
        href={videos.official}
        target="_blank"
        rel="noopener noreferrer"
        className="block text-sm text-blue-500 hover:underline mb-1"
      >
        🆚 {rival}
      </a>

      {hasOtherVideos && (
        <ul className="mt-2 list-disc list-inside">
          {videos.others.map((v, i) => (
            <li key={i}>
              <a
                href={v.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-blue-500 hover:underline"
              >
                {v.label}
              </a>
            </li>
          ))}
        </ul>
      )}

    </div>
  );
}
