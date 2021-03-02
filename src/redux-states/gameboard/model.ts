import ICell from 'Entities/cell';
import Gameboard from '../../Gameboard';

export interface IGameboardState {
  cells: Array<ICell>;
  gameboard: Gameboard;
}
