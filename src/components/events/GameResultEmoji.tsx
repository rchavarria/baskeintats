import type {AdvancedGame, FriendlyGame, Game} from "../../model/GameSchema";
import {totalPoints} from "../../model/GameSchema";

interface GameResultEmojiProps {
  game: Game | AdvancedGame | FriendlyGame;
  className?: string;
}

type Result = {
  emoji: string;
  label: string;
};

function computeResult(game: Game | AdvancedGame | FriendlyGame): Result {
  const homeIsOpponent = game.home.opponent === true;
  const awayIsOpponent = game.away.opponent === true;

  if (homeIsOpponent === awayIsOpponent) {
    // both true or both false → cannot determine
    return {emoji: "🤷", label: "Resultado desconocido"};
  }

  const ownScores = homeIsOpponent ? game.away.scores : game.home.scores;
  const opponentScores = homeIsOpponent ? game.home.scores : game.away.scores;
  const own = totalPoints(ownScores);
  const opp = totalPoints(opponentScores);

  if (own > opp) return {emoji: "🤩", label: "Victoria"};
  if (own < opp) return {emoji: "😭", label: "Derrota"};
  return {emoji: "😐", label: "Empate"};
}

export function GameResultEmoji({game, className}: GameResultEmojiProps) {
  const {emoji, label} = computeResult(game);
  return (
    <div className={className ?? "mt-2 text-center text-lg"}>
      <span role="img" aria-label={label} title={label}>
        {emoji}
      </span>
    </div>
  );
}

