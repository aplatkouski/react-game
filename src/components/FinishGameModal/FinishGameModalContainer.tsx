import FinishGameModal from 'Components/FinishGameModal/FinishGameModal';
import { connect } from 'react-redux';
import { gameActions } from 'States/game';
import * as StateTypes from 'States/types';

const mapStateToProps = (state: StateTypes.RootState) => ({
  noMoreMoves: state.game.noMoreMoves,
  score: state.gameboard.score,
});

const mapDispatchToProps = {
  stopGame: gameActions.stop,
};

export default connect(mapStateToProps, mapDispatchToProps)(FinishGameModal);
