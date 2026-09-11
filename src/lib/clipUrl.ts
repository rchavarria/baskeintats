import type {Clip} from "../model/ScoutingSchema.ts";

/**
 * Converts a timestamp in "m:ss", "mm:ss" or "h:mm:ss" format into total seconds.
 */
function timestampToSeconds(timestamp: string): number {
  return timestamp
    .split(":")
    .map(part => Number(part))
    .reduce((total, part) => total * 60 + part, 0);
}

/**
 * Builds the URL of a clip, pointing to the video at the clip start time.
 */
export function clipUrl(video: string, clip: Clip): string {
  const separator = video.includes("?") ? "&" : "?";
  return `${video}${separator}t=${timestampToSeconds(clip.start)}`;
}

