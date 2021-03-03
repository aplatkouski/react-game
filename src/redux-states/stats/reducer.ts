import * as StateTypes from 'States/types';
import * as t from './action-types';
import { IStatsState } from './model';

const initialState: IStatsState = {
  isShow: false,
};

const handlers: StateTypes.IHandlers<IStatsState, any> = {
  [t.HIDE]: (state) => ({
    ...state,
    isShow: false,
  }),
  [t.SHOW]: (state) => ({
    ...state,
    isShow: true,
  }),
  DEFAULT: (state) => state,
};

const statsReducer: StateTypes.Reducer<IStatsState, any> = (
  state = initialState,
  action
) => {
  const handle = handlers[action.type] || handlers.DEFAULT;
  return handle(state, action);
};

export default statsReducer;
