import { connect } from 'react-redux';
import { statsActions } from 'States/stats';
import LongMenu from './LongMenu';

const mapDispatchToProps = {
  onShowStats: statsActions.show,
};

export default connect(undefined, mapDispatchToProps)(LongMenu);
