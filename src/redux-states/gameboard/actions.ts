import MarkedIndexes from 'Entities/marked-indexes';
import * as StateTypes from 'States/types';
import * as t from './action-types';

export const move = (
  markedIndexes: MarkedIndexes
): StateTypes.IAction<MarkedIndexes> => ({
  type: t.MOVE,
  payload: markedIndexes,
});

export const init = (): StateTypes.IAction<undefined> => ({
  type: t.NEW_GAME,
  payload: undefined,
});

export const clean = (): StateTypes.IAction<undefined> => ({
  type: t.CLEAN,
  payload: undefined,
});
