import { connect } from 'react-redux';
import { statsActions } from 'States/stats';
import * as StateTypes from 'States/types';
import StatsModal from './StatsModal';

const mapStateToProps = (state: StateTypes.RootState) => ({
  isShow: state.stats.isShow,
});

const mapDispatchToProps = {
  onHide: statsActions.hide,
};

export default connect(mapStateToProps, mapDispatchToProps)(StatsModal);
