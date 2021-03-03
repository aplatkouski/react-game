import StatsItem from 'Entities/stats-item';
import * as StateTypes from 'States/types';
import * as t from './action-types';
import { IStatsState } from './model';

const initialState: IStatsState = {
  isShow: false,
  topTen: [] as Array<StatsItem>,
};

const handlers: StateTypes.IHandlers<IStatsState, any> = {
  [t.HIDE]: (state) => ({
    ...state,
    isShow: false,
  }),
  [t.LOAD_STATE]: (state, { payload: newState }: StateTypes.IAction<IStatsState>) => ({
    ...state,
    ...newState,
  }),
  [t.SAVE_NEW_RECORD]: (state, { payload: newRecord }: StateTypes.IAction<StatsItem>) => {
    const { topTen } = state;
    topTen.push(newRecord);
    if (topTen.length >= 10) topTen.splice(0, 1);
    return {
      ...state,
      topTen,
    };
  },
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
