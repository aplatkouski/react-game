import { Backdrop, Grow, Modal } from '@material-ui/core';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import * as React from 'react';
import * as StateTypes from 'States/types';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      height: 300,
      flexGrow: 1,
      minWidth: 300,
      transform: 'translateZ(0)',
    },
    modal: {
      display: 'flex',
      padding: theme.spacing(1),
      alignItems: 'center',
      justifyContent: 'center',
    },
    paper: {
      width: 400,
      backgroundColor: theme.palette.background.paper,
      border: '2px solid #000',
      boxShadow: theme.shadows[5],
      padding: theme.spacing(2, 4, 3),
    },
  })
);

interface Props {
  isShow: boolean;
  onHide: () => StateTypes.IAction<undefined>;
}

const StatsModal = ({ isShow, onHide: handleHide }: Props): JSX.Element => {
  const classes = useStyles();

  return (
    <Modal
      BackdropComponent={Backdrop}
      BackdropProps={{
        timeout: 1000,
      }}
      aria-describedby="modal-description"
      aria-labelledby="modal-title"
      className={classes.modal}
      closeAfterTransition
      onClose={() => handleHide()}
      open={isShow}
    >
      <Grow
        in={isShow}
        style={{ transformOrigin: '0 0 0' }}
        /* eslint-disable react/jsx-props-no-spreading */
        {...(isShow ? { timeout: 1000 } : {})}
        /* eslint-enable react/jsx-props-no-spreading */
      >
        <div className={classes.paper}>
          <h2 id="modal-title">Top Ten!</h2>
          <p id="modal-description">a b c d</p>
        </div>
      </Grow>
    </Modal>
  );
};

export default StatsModal;
