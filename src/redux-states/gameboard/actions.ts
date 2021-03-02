import ICell from 'Entities/cell';
import * as StateTypes from 'States/types';
import * as t from './action-types';

// eslint-disable-next-line import/prefer-default-export
export const move = (cell: ICell): StateTypes.IAction<ICell> => ({
  type: t.MOVE,
  payload: cell,
});
