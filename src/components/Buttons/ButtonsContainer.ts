import { connect } from 'react-redux';
import { gameboardActions } from 'States/gameboard';
import * as StateTypes from 'States/types';
import Buttons from './Buttons';

const mapStateToProps = (state: StateTypes.RootState) => ({
  gameIsActive: state.gameboard.isActive,
});

const mapDispatchToProps = {
  startGame: gameboardActions.start,
  stopGame: gameboardActions.stop,
};

export default connect(mapStateToProps, mapDispatchToProps)(Buttons);
