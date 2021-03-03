import { connect } from 'react-redux';
import { gameActions } from 'States/game';
import { gameboardActions } from 'States/gameboard';
import * as StateTypes from 'States/types';
import Gameboard from './Gameboard';

const mapStateToProps = (state: StateTypes.RootState) => ({
  availableCellIndexes: state.gameboard.availableMoves,
  cells: state.gameboard.cells,
  currentMark: state.game.currentPlayerMark,
  gameWasSkipped: state.game.mustSkip,
  isActiveGame: state.game.isActive,
});

const mapDispatchToProps = {
  move: gameboardActions.move,
  rotatePlayer: gameActions.rotatePlayer,
  skipMove: gameActions.skip,
  stopGame: gameActions.stop,
};

export default connect(mapStateToProps, mapDispatchToProps)(Gameboard);
