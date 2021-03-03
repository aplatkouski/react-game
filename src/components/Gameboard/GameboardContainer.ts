import { connect } from 'react-redux';
import { gameActions } from 'States/game';
import { gameboardActions } from 'States/gameboard';
import * as StateTypes from 'States/types';
import Gameboard from './Gameboard';

const mapStateToProps = (state: StateTypes.RootState) => ({
  cells: state.gameboard.cells,
  currentMark: state.game.currentPlayerMark,
  availableCellIndexes: state.gameboard.availableMoves,
});

const mapDispatchToProps = {
  move: gameboardActions.move,
  rotatePlayer: gameActions.rotatePlayer,
};

export default connect(mapStateToProps, mapDispatchToProps)(Gameboard);
