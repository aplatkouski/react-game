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
