import MarkedIndexes from 'Entities/marked-indexes';
import * as StateTypes from 'States/types';
import { getEmptyCells, getInitialCells } from 'Utils/get-cells';
import Gameboard from '../../Gameboard';
import * as t from './action-types';
import { IGameboardState } from './model';

const initialState: IGameboardState = {
  gameboard: new Gameboard(),
  cells: getInitialCells(),
  isActive: false,
};

const handlers: StateTypes.IHandlers<IGameboardState, any> = {
  [t.MOVE]: (state, { payload: markedIndexes }: StateTypes.IAction<MarkedIndexes>) => {
    const cells = [...state.cells];
    markedIndexes.indexes.forEach((index) => {
      cells.splice(index, 1, {
        index,
        mark: markedIndexes.mark,
      });
    });
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
