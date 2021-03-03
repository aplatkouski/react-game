import { connect } from 'react-redux';
import { gameboardActions } from 'States/gameboard';
import * as StateTypes from 'States/types';
import FinishGameModal from './FinishGameModal';

const mapStateToProps = (state: StateTypes.RootState) => ({
  noMoreMoves: state.gameboard.noMoreMoves,
  score: state.gameboard.score,
});

const mapDispatchToProps = {
  stopGame: gameboardActions.stop,
};

export default connect(mapStateToProps, mapDispatchToProps)(FinishGameModal);
