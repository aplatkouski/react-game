import { connect } from 'react-redux';
import { gameActions } from 'States/game';
import * as StateTypes from 'States/types';
import MainView from './MainView';

const mapStateToProps = (state: StateTypes.RootState) => ({
  availableCellIndexes: state.gameboard.availableMoves,
  currentPlayerMark: state.game.currentPlayerMark,
  gameWasSkipped: state.game.mustSkip,
  isActiveGame: state.game.isActive,
  score: state.gameboard.score,
});

const mapDispatchToProps = {
  setNoMoreMoves: gameActions.setNoMoreMoves,
  skipMove: gameActions.skip,
};

export default connect(mapStateToProps, mapDispatchToProps)(MainView);
