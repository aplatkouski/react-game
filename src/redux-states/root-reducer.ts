import { combineReducers } from 'redux';

import { gameboardReducer } from 'States/gameboard';

const rootReducer = combineReducers({
  reversi: gameboardReducer,
});

export default rootReducer;
