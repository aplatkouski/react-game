import MARK from 'Entities/mark';

export interface IGameState {
  currentPlayerMark: MARK;
  isActive: boolean;
}
