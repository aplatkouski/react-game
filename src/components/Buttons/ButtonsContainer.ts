import { connect } from 'react-redux';
import { gameActions } from 'States/game';
import { gameboardActions } from 'States/gameboard';
import * as StateTypes from 'States/types';
import Buttons from './Buttons';

const mapStateToProps = (state: StateTypes.RootState) => ({
  currentPlayerMark: state.game.currentPlayerMark,
  isActiveGame: state.game.isActive,
});

const mapDispatchToProps = {
  cleanGameboard: gameboardActions.clean,
  initGameboard: gameboardActions.init,
  startGame: gameActions.start,
  stopGame: gameActions.stop,
};

export default connect(mapStateToProps, mapDispatchToProps)(Buttons);
