import MARK from 'Entities/mark';
import MarkedIndexes from 'Entities/marked-indexes';
import { IGameboardState } from 'States/gameboard/model';
import * as StateTypes from 'States/types';
import * as t from './action-types';

export const move = (
  markedIndexes: MarkedIndexes
): StateTypes.IAction<MarkedIndexes> => ({
  type: t.MOVE,
  payload: markedIndexes,
});

export const init = (mark: MARK): StateTypes.IAction<MARK> => ({
  type: t.NEW_GAME,
  payload: mark,
});

export const clean = (): StateTypes.IAction<undefined> => ({
  type: t.CLEAN,
  payload: undefined,
});

export const loadState = (
  newState: Omit<IGameboardState, 'gameboard'>
): StateTypes.IAction<Omit<IGameboardState, 'gameboard'>> => ({
  type: t.LOAD_STATE,
  payload: newState,
});
