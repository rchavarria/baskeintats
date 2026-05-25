import {describe, expect, it} from "vitest";
import {hasAdvancedPlayerStats} from "./hasAdvancedPlayerStats.ts";
import type {Game, AdvancedGame} from "../model/GameSchema.ts";

describe("hasAdvancedPlayerStats", () => {
  it("returns false for a basic game where fieldGoals is a number", () => {
    const game = {
      playerStats: {
        time: 20,
        fieldGoals: 4,
        threePointers: 2,
        freeThrows: { made: 3, attempted: 5 },
        faults: 2,
        plusMinus: 5,
        efficiency: 10,
      },
    } as unknown as Game;

    expect(hasAdvancedPlayerStats(game)).toBe(false);
  });

  it("returns true for an advanced game where fieldGoals is an object", () => {
    const game = {
      playerStats: {
        time: 25,
        fieldGoals: { made: 5, attempted: 10 },
        threePointers: { made: 2, attempted: 6 },
        freeThrows: { made: 3, attempted: 4 },
        rebounds: { offensive: 2, defensive: 3 },
        assists: 4,
        steals: 1,
        turnovers: 2,
        blocks: { made: 1, received: 0 },
        faults: { made: 2, received: 3 },
        plusMinus: 8,
        efficiency: 15,
      },
    } as unknown as AdvancedGame;

    expect(hasAdvancedPlayerStats(game)).toBe(true);
  });

  it("acts as a type guard narrowing to AdvancedGame", () => {
    const game = {
      playerStats: {
        time: 25,
        fieldGoals: { made: 7, attempted: 12 },
        threePointers: { made: 3, attempted: 8 },
        freeThrows: { made: 4, attempted: 5 },
        rebounds: { offensive: 1, defensive: 4 },
        assists: 3,
        steals: 2,
        turnovers: 1,
        blocks: { made: 0, received: 1 },
        faults: { made: 3, received: 2 },
        plusMinus: 12,
        efficiency: 20,
      },
    } as unknown as Game | AdvancedGame;

    if (hasAdvancedPlayerStats(game)) {
      // If type guard works, we can access advanced properties
      expect(game.playerStats.fieldGoals.made).toBe(7);
      expect(game.playerStats.threePointers.made).toBe(3);
    } else {
      throw new Error("Should have been identified as advanced");
    }
  });
});

