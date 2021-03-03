import ICell from 'Entities/cell';
import * as StateTypes from 'States/types';
import { getEmptyCells, getInitialCells } from 'Utils/get-cells';
import Gameboard from '../../Gameboard';
import * as t from './action-types';
import { IGameboardState } from './model';

const initialState: IGameboardState = {
  gameboard: new Gameboard(),
  cells: getEmptyCells(),
  isActive: false,
};

const handlers: StateTypes.IHandlers<IGameboardState, any> = {
  [t.MOVE]: (state, { payload: cell }: StateTypes.IAction<ICell>) => {
    const cells = [...state.cells];
    cells.splice(
      state.cells.findIndex((c) => c.index === cell.index),
      1,
      cell
    );
    return {
      ...state,
      cells,
    };
  },
  [t.NEW_GAME]: (state) => ({
    ...state,
    cells: getInitialCells(),
    isActive: true,
  }),
  [t.CLEAN]: (state) => ({
    ...state,
    cells: getEmptyCells(),
    isActive: false,
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
