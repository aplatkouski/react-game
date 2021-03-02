import { combineReducers } from 'redux';
import { gameReducer } from 'States/game';

import { gameboardReducer } from 'States/gameboard';

const rootReducer = combineReducers({
  gameboard: gameboardReducer,
  game: gameReducer,
});

export default rootReducer;
