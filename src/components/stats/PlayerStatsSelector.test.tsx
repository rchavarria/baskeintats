import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import { PlayerStatsSelector } from './PlayerStatsSelector';
import type { PlayerStats, AdvancedPlayerStats } from '../../model/PlayerSchema';

const emptyBasicStats: PlayerStats = {
  time: 0,
  fieldGoals: 0,
  threePointers: 0,
  freeThrows: { made: 0, attempted: 0 },
  faults: 0,
  plusMinus: 0,
  efficiency: 0,
};

const basicStats: PlayerStats = {
  time: 14 * 60 + 27,
  fieldGoals: 5,
  threePointers: 1,
  freeThrows: { made: 4, attempted: 7 },
  faults: 2,
  plusMinus: 8,
  efficiency: 16,
};

const advancedStats: AdvancedPlayerStats = {
  time: 11 * 60 + 6,
  fieldGoals: { made: 4, attempted: 9 },
  threePointers: { made: 2, attempted: 5 },
  freeThrows: { made: 3, attempted: 4 },
  rebounds: { offensive: 1, defensive: 6 },
  assists: 5,
  steals: 2,
  turnovers: 1,
  blocks: { made: 1, received: 0 },
  faults: { made: 2, received: 4 },
  plusMinus: 7,
  efficiency: 18,
};

describe('PlayerStatsSelector', () => {
  describe('renders NoPlayerStats', () => {
    // Migrated from PlayerStats.test.tsx
    it('when stats is undefined', () => {
      render(<PlayerStatsSelector stats={undefined} />);
      expect(screen.getByText('No hay estadísticas disponibles para este partido')).toBeInTheDocument();
    });

    it('when time === 0 and points === 0 (PlayerStats)', () => {
      render(<PlayerStatsSelector stats={emptyBasicStats} />);
      expect(screen.getByText('No hay estadísticas disponibles para este partido')).toBeInTheDocument();
    });
  });

  describe('renders PlayerStats', () => {
    it('when variant is basic', () => {
      render(<PlayerStatsSelector stats={basicStats} />);
      expect(screen.getByText('📈 Estadísticas del jugador')).toBeInTheDocument();
      expect(screen.getByText('14:27')).toBeInTheDocument();
    });
  });

  describe('renders AdvancedPlayerStats', () => {
    it('when variant is advanced', () => {
      render(<PlayerStatsSelector stats={advancedStats} />);
      expect(screen.getByText('📈 Estadísticas del jugador')).toBeInTheDocument();
      expect(screen.getByText('11:06')).toBeInTheDocument();
    });
  });
});

