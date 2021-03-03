import StatsItem from 'Entities/stats-item';
import { IStatsState } from 'States/stats/model';
import * as StateTypes from 'States/types';
import * as t from './action-types';

export const hide = (): StateTypes.IAction<undefined> => ({
  type: t.HIDE,
  payload: undefined,
});

export const show = (): StateTypes.IAction<undefined> => ({
  type: t.SHOW,
  payload: undefined,
});

export const loadState = (newState: IStatsState): StateTypes.IAction<IStatsState> => ({
  type: t.LOAD_STATE,
  payload: newState,
});

export const saveRecord = (newRecord: StatsItem): StateTypes.IAction<StatsItem> => ({
  type: t.SAVE_NEW_RECORD,
  payload: newRecord,
});
