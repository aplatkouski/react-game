import { connect } from 'react-redux';
import { gameActions } from 'States/game';
import { gameboardActions } from 'States/gameboard';
import * as StateTypes from 'States/types';
import App from './App';

const mapStateToProps = (state: StateTypes.RootState) => ({
  gameboardState: state.gameboard,
  gameState: state.game,
});

const mapDispatchToProps = {
  loadGameState: gameActions.loadState,
  loadGameboardState: gameboardActions.loadState,
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
