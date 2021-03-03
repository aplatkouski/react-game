import { connect } from 'react-redux';
import { gameboardActions } from 'States/gameboard';
import { statsActions } from 'States/stats';
import * as StateTypes from 'States/types';
import MainView from './MainView';

const mapStateToProps = (state: StateTypes.RootState) => ({
  availableMoves: state.gameboard.availableMoves,
  currentPlayerMark: state.gameboard.currentPlayerMark,
  gameIsActive: state.gameboard.isActive,
  moveWasSkipped: state.gameboard.moveWasSkipped,
  noMoreMoves: state.gameboard.noMoreMoves,
  score: state.gameboard.score,
});

const mapDispatchToProps = {
  saveRecord: statsActions.saveRecord,
  setNoMoreMoves: gameboardActions.setNoMoreMoves,
  skipMove: gameboardActions.skipMove,
};

export default connect(mapStateToProps, mapDispatchToProps)(MainView);
