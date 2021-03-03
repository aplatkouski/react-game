import AvailableCellIndexes from 'Entities/available-moves';
import ICell from 'Entities/cell';
import Gameboard from '../../Gameboard';

export interface IGameboardState {
  cells: Array<ICell>;
  gameboard: Gameboard;
  isActive: boolean;
  availableMoves: AvailableCellIndexes;
}
