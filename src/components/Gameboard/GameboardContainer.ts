import { connect } from 'react-redux';
import { gameboardActions } from 'States/gameboard';
import * as StateTypes from 'States/types';
import Gameboard from './Gameboard';

const mapStateToProps = (state: StateTypes.RootState) => ({
  availableMoves: state.gameboard.availableMoves,
  cells: state.gameboard.cells,
  currentMark: state.gameboard.currentPlayerMark,
});

const mapDispatchToProps = {
  move: gameboardActions.move,
  rotatePlayer: gameboardActions.rotatePlayer,
};

export default connect(mapStateToProps, mapDispatchToProps)(Gameboard);
