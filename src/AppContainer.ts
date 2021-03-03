import { connect } from 'react-redux';
import { gameboardActions } from 'States/gameboard';
import * as StateTypes from 'States/types';
import App from './App';

const mapStateToProps = (state: StateTypes.RootState) => ({
  gameboardState: state.gameboard,
});

const mapDispatchToProps = {
  loadGameboardState: gameboardActions.loadState,
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
