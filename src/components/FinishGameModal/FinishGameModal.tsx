import { Backdrop, Grow, Modal } from '@material-ui/core';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import Score from 'Entities/score';
import * as React from 'react';
import * as StateTypes from 'States/types';
import getEndGameMessage from 'Utils/get-end-game-message';

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
  noMoreMoves: boolean;
  score: Score;
  stopGame: () => StateTypes.IAction<undefined>;
}

const FinishGameModal = ({ noMoreMoves, score, stopGame }: Props): JSX.Element => {
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
      onClose={() => stopGame()}
      open={noMoreMoves}
    >
      <Grow
        in={noMoreMoves}
        style={{ transformOrigin: '0 0 0' }}
        /* eslint-disable react/jsx-props-no-spreading */
        {...(noMoreMoves ? { timeout: 1000 } : {})}
        /* eslint-enable react/jsx-props-no-spreading */
      >
        <div className={classes.paper}>
          <h2 id="modal-title">Game is finished!</h2>
          <p id="modal-description">{getEndGameMessage(score[0], score[1])}</p>
        </div>
      </Grow>
    </Modal>
  );
};

export default FinishGameModal;
