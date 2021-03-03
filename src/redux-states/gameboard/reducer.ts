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
  availableMoves: {} as AvailableCellIndexes,
  cells: getEmptyCells(),
  currentPlayerMark: MARK.X,
  gameboard: new Gameboard(),
  isActive: false,
  moveWasSkipped: false,
  noMoreMoves: false,
  score: [0, 0] as Score,
};

const handlers: StateTypes.IHandlers<IGameboardState, any> = {
  [t.STOP_GAME]: (state) => {
    const { gameboard, cells, ...restInitialState } = initialState;
    return {
      ...state,
      cells: getEmptyCells(),
      ...restInitialState,
    };
  },
  [t.LOAD_STATE]: (
    state,
    { payload: newState }: StateTypes.IAction<Omit<IGameboardState, 'gameboard'>>
  ) => ({
    ...state,
    gameboard: new Gameboard(),
    ...newState,
  }),
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
  [t.NO_MORE_MOVES]: (state) => ({
    ...state,
    noMoreMoves: true,
  }),
  [t.ROTATE_PLAYER]: (state) => ({
    ...state,
    currentPlayerMark: state.currentPlayerMark === MARK.X ? MARK.O : MARK.X,
  }),
  [t.SKIP_MOVE]: (state) => {
    const nextPlayerMark = state.currentPlayerMark === MARK.X ? MARK.O : MARK.X;
    const availableMoves = state.gameboard.getAvailableMoves({
      cells: state.cells,
      playerMark: nextPlayerMark,
    });
    return {
      ...state,
      availableMoves,
      currentPlayerMark: nextPlayerMark,
      moveWasSkipped: true,
    };
  },
  [t.START_NEW_GAME]: (state) => {
    const cells = getInitialCells();
    const playerMark = state.currentPlayerMark;
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
