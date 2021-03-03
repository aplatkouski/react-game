import { ThunkDispatch } from 'redux-thunk';
import { IGameState } from 'States/game/model';
import { IGameboardState } from 'States/gameboard/model';
import { IStatsState } from 'States/stats/model';

export interface IAction<P> {
  type: string;
  payload: P;
}

export type Reducer<S, P> = (state: S, action: IAction<P>) => S;

export interface IHandlers<S, P> {
  [key: string]: Reducer<S, P>;
}

export type AsyncDispatch<T, P> = (
  dispatch: ThunkDispatch<T, any, IAction<P>>,
  getState: () => {
    [key: string]: T;
  }
) => Promise<void>;

export interface RootState {
  game: IGameState;
  gameboard: IGameboardState;
  stats: IStatsState;
}
