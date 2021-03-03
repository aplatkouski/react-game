import MainView from 'Components/MainView/MainView';
import { connect } from 'react-redux';
import { gameActions } from 'States/game';
import * as StateTypes from 'States/types';

const mapStateToProps = (state: StateTypes.RootState) => ({
  availableCellIndexes: state.gameboard.availableMoves,
  gameWasSkipped: state.game.mustSkip,
  isActiveGame: state.game.isActive,
});

const mapDispatchToProps = {
  skipMove: gameActions.skip,
  stopGame: gameActions.stop,
};

export default connect(mapStateToProps, mapDispatchToProps)(MainView);
