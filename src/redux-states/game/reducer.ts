import MARK from 'Entities/mark';
import * as StateTypes from 'States/types';
import * as t from './action-types';
import { IGameState } from './model';

const initialState: IGameState = {
  currentPlayerMark: MARK.X,
  isActive: false,
  mustSkip: false,
  noMoreMoves: false,
};

const handlers: StateTypes.IHandlers<IGameState, any> = {
  [t.LOAD_STATE]: (state, { payload: newState }: StateTypes.IAction<IGameState>) => ({
    ...state,
    ...newState,
  }),
  [t.NO_MORE_MOVES]: (state) => ({
    ...state,
    noMoreMoves: true,
  }),
  [t.ROTATE_PLAYER]: (state) => ({
    ...state,
    currentPlayerMark: state.currentPlayerMark === MARK.X ? MARK.O : MARK.X,
  }),
  [t.SKIP]: (state) => ({
    ...state,
    currentPlayerMark: state.currentPlayerMark === MARK.X ? MARK.O : MARK.X,
    mustSkip: true,
  }),
  [t.START]: (state) => ({
    ...state,
    isActive: true,
  }),
  [t.STOP]: (state) => ({
    ...state,
    ...initialState,
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
