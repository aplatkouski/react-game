import ICell from 'Entities/cell';
import MARK from 'Entities/mark';
import * as StateTypes from 'States/types';
import Gameboard from '../../Gameboard';
import * as t from './action-types';
import { IGameboardState } from './model';

const getInitialCells = (size = 8): Array<ICell> => {
  const initialCells = [] as Array<ICell>;
  let cell: ICell;
  for (let index = 0; index < size ** 2; index += 1) {
    if (index === 27 || index === 36) {
      cell = {
        index,
        mark: MARK.X,
      };
    } else if (index === 28 || index === 35) {
      cell = {
        index,
        mark: MARK.O,
      };
    } else {
      cell = {
        index,
        mark: MARK.EMPTY,
      };
    }
    initialCells.push(cell);
  }
  return initialCells;
};

const initialState: IGameboardState = {
  gameboard: new Gameboard(),
  cells: getInitialCells(),
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
