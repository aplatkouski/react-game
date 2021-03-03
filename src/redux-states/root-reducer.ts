import { combineReducers } from 'redux';
import { gameReducer } from 'States/game';
import { gameboardReducer } from 'States/gameboard';
import { statsReducer } from 'States/stats';

const rootReducer = combineReducers({
  game: gameReducer,
  gameboard: gameboardReducer,
  stats: statsReducer,
});

export default rootReducer;
