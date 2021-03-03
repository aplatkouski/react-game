import { connect } from 'react-redux';
import { gameboardActions } from 'States/gameboard';
import * as StateTypes from 'States/types';
import Gameboard from './Gameboard';

const mapStateToProps = (state: StateTypes.RootState) => ({
  cells: state.gameboard.cells,
  currentMark: state.game.currentPlayerMark,
  availableCellIndexes: state.gameboard.gameboard.getAvailableMoves({
    cells: state.gameboard.cells,
    playerMark: state.game.currentPlayerMark,
  }),
});

const mapDispatchToProps = {
  move: gameboardActions.move,
};

export default connect(mapStateToProps, mapDispatchToProps)(Gameboard);
