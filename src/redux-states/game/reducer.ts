import MARK from 'Entities/mark';
import * as StateTypes from 'States/types';
import * as t from './action-types';
import { IGameState } from './model';

const initialState: IGameState = {
  currentPlayerMark: MARK.X,
  isActive: false,
};

const handlers: StateTypes.IHandlers<IGameState, any> = {
  [t.ROTATE_PLAYER]: (state) => ({
    ...state,
    currentPlayerMark: state.currentPlayerMark === MARK.X ? MARK.O : MARK.X,
  }),
  [t.START]: (state) => ({
    ...state,
    isActive: true,
  }),
  [t.START]: (state) => ({
    ...state,
    isActive: false,
  }),
  DEFAULT: (state) => state,
};

const taskReducer: StateTypes.Reducer<IGameState, any> = (
  state = initialState,
  action
) => {
  const handle = handlers[action.type] || handlers.DEFAULT;
  return handle(state, action);
};

export default taskReducer;
