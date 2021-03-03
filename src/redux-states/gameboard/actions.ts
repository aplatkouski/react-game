import ICell from 'Entities/cell';
import * as StateTypes from 'States/types';
import * as t from './action-types';

export const move = (cell: ICell): StateTypes.IAction<ICell> => ({
  type: t.MOVE,
  payload: cell,
});

export const init = (): StateTypes.IAction<undefined> => ({
  type: t.NEW_GAME,
  payload: undefined,
});

export const clean = (): StateTypes.IAction<undefined> => ({
  type: t.CLEAN,
  payload: undefined,
});
