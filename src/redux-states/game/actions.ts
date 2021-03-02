import * as StateTypes from 'States/types';
import * as t from './action-types';

export const rotatePlayer = (): StateTypes.IAction<undefined> => ({
  type: t.ROTATE_PLAYER,
  payload: undefined,
});

export const start = (): StateTypes.IAction<undefined> => ({
  type: t.START,
  payload: undefined,
});

export const stop = (): StateTypes.IAction<undefined> => ({
  type: t.STOP,
  payload: undefined,
});
