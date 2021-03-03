import { connect } from 'react-redux';
import { gameActions } from 'States/game';
import { gameboardActions } from 'States/gameboard';
import Buttons from './Buttons';

const mapDispatchToProps = {
  startGame: gameActions.start,
  stopGame: gameActions.stop,
  cleanGameboard: gameboardActions.clean,
  initGameboard: gameboardActions.init,
};

export default connect(undefined, mapDispatchToProps)(Buttons);
