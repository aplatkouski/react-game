import { connect } from 'react-redux';
import { gameboardActions } from 'States/gameboard';
import * as StateTypes from 'States/types';
import Gameboard from './Gameboard';

const mapStateToProps = (state: StateTypes.RootState) => ({
  cells: state.reversi.cells,
});

const mapDispatchToProps = {
  move: gameboardActions.move,
};

export default connect(mapStateToProps, mapDispatchToProps)(Gameboard);
