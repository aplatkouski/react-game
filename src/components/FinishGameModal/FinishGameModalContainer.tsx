import { connect } from 'react-redux';
import { gameActions } from 'States/game';
import * as StateTypes from 'States/types';
import FinishGameModal from './FinishGameModal';

const mapStateToProps = (state: StateTypes.RootState) => ({
  noMoreMoves: state.game.noMoreMoves,
  score: state.gameboard.score,
});

const mapDispatchToProps = {
  stopGame: gameActions.stop,
};

export default connect(mapStateToProps, mapDispatchToProps)(FinishGameModal);
