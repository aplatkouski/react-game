import { combineReducers } from 'redux';
import { gameboardReducer } from 'States/gameboard';
import { statsReducer } from 'States/stats';

const rootReducer = combineReducers({
  gameboard: gameboardReducer,
  stats: statsReducer,
});

export default rootReducer;
