import AvailableCellIndexes from 'Entities/available-moves';
import MARK from 'Entities/mark';
import MarkedIndexes from 'Entities/marked-indexes';
import Score from 'Entities/score';
import * as StateTypes from 'States/types';
import { getEmptyCells, getInitialCells } from 'Utils/get-cells';
import Gameboard from '../../Gameboard';
import * as t from './action-types';
import { IGameboardState } from './model';

const initialState: IGameboardState = {
  gameboard: new Gameboard(),
  cells: getEmptyCells(),
  isActive: false,
  availableMoves: {} as AvailableCellIndexes,
  score: [0, 0] as Score,
};

const handlers: StateTypes.IHandlers<IGameboardState, any> = {
  [t.MOVE]: (state, { payload: markedIndexes }: StateTypes.IAction<MarkedIndexes>) => {
    const currentPlayerMark = markedIndexes.mark;
    const cells = [...state.cells];
    markedIndexes.indexes.forEach((index) => {
      cells.splice(index, 1, {
        index,
        mark: currentPlayerMark,
      });
    });

    const nextPlayerMark = currentPlayerMark === MARK.X ? MARK.O : MARK.X;
    const availableMoves = state.gameboard.getAvailableMoves({
      cells,
      playerMark: nextPlayerMark,
    });

    const score: Score = [
      cells.filter((cell) => cell.mark === MARK.X).length,
      cells.filter((cell) => cell.mark === MARK.O).length,
    ];
    return {
      ...state,
      cells,
      availableMoves,
      score,
    };
  },
  [t.NEW_GAME]: (state, { payload: playerMark }: StateTypes.IAction<MARK>) => {
    const cells = getInitialCells();
    const availableMoves = state.gameboard.getAvailableMoves({
      cells,
      playerMark,
    });

    const score: Score = [
      cells.filter((cell) => cell.mark === MARK.X).length,
      cells.filter((cell) => cell.mark === MARK.O).length,
    ];
    return {
      ...state,
      availableMoves,
      cells,
      isActive: true,
      score,
    };
  },
  [t.CLEAN]: (state) => ({
    ...state,
    cells: getEmptyCells(),
    isActive: false,
    availableMoves: {} as AvailableCellIndexes,
    score: [0, 0],
  }),
  DEFAULT: (state) => state,
};

const taskReducer: StateTypes.Reducer<IGameboardState, any> = (
  state = initialState,
  action
) => {
  const handle = handlers[action.type] || handlers.DEFAULT;
  return handle(state, action);
};

export default taskReducer;
