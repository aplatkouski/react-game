import MARK from 'Entities/mark';
import MarkedIndexes from 'Entities/marked-indexes';
import { IGameboardState } from 'States/gameboard/model';
import * as StateTypes from 'States/types';
import * as t from './action-types';

export const setNoMoreMoves = (): StateTypes.IAction<undefined> => ({
  type: t.NO_MORE_MOVES,
  payload: undefined,
});

export const rotatePlayer = (): StateTypes.IAction<undefined> => ({
  type: t.ROTATE_PLAYER,
  payload: undefined,
});

export const skipMove = (): StateTypes.IAction<undefined> => ({
  type: t.SKIP_MOVE,
  payload: undefined,
});

export const move = (
  markedIndexes: MarkedIndexes
): StateTypes.IAction<MarkedIndexes> => ({
  type: t.MOVE,
  payload: markedIndexes,
});

export const start = (): StateTypes.IAction<undefined> => ({
  type: t.START_NEW_GAME,
  payload: undefined,
});

export const stop = (): StateTypes.IAction<undefined> => ({
  type: t.STOP_GAME,
  payload: undefined,
});

export const updateAvailableMoves = (playerMark: MARK): StateTypes.IAction<MARK> => ({
  type: t.UPDATE_AVAILABLE_MOVES,
  payload: playerMark,
});

export const loadState = (
  newState: Omit<IGameboardState, 'gameboard'>
): StateTypes.IAction<Omit<IGameboardState, 'gameboard'>> => ({
  type: t.LOAD_STATE,
  payload: newState,
});
