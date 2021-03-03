import AvailableCellIndexes from 'Entities/available-moves';
import ICell from 'Entities/cell';
import MARK from 'Entities/mark';
import Score from 'Entities/score';
import Gameboard from '../../Gameboard';

export interface IGameboardState {
  availableMoves: AvailableCellIndexes;
  cells: Array<ICell>;
  currentPlayerMark: MARK;
  gameboard: Gameboard;
  isActive: boolean;
  moveWasSkipped: boolean;
  noMoreMoves: boolean;
  score: Score;
}
