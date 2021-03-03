import { Button, createStyles, makeStyles } from '@material-ui/core';
import { Theme } from '@material-ui/core/styles';
import MARK from 'Entities/mark';
import * as React from 'react';
import * as StateTypes from 'States/types';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      marginRight: theme.spacing(1),
    },
    startStopGameButton: {
      width: theme.spacing(15),
      height: theme.spacing(5),
    },
  })
);

interface Props {
  cleanGameboard: () => StateTypes.IAction<undefined>;
  currentPlayerMark: MARK;
  initGameboard: (mark: MARK) => StateTypes.IAction<MARK>;
  isActiveGame: boolean;
  startGame: () => StateTypes.IAction<undefined>;
  stopGame: () => StateTypes.IAction<undefined>;
}

const Buttons = ({
  cleanGameboard,
  currentPlayerMark,
  initGameboard,
  isActiveGame,
  startGame,
  stopGame,
}: Props): JSX.Element => {
  const classes = useStyles();

  const handleStopGame = () => {
    cleanGameboard();
    stopGame();
  };

  const handleStartGame = () => {
    initGameboard(currentPlayerMark);
    startGame();
  };

  const renderButton = () => {
    if (isActiveGame) {
      return (
        <Button
          className={classes.startStopGameButton}
          color="secondary"
          onClick={() => handleStopGame()}
        >
          Stop Game
        </Button>
      );
    }
    return (
      <Button
        className={classes.startStopGameButton}
        color="primary"
        onClick={() => handleStartGame()}
      >
        New Game
      </Button>
    );
  };

  return renderButton();
};

export default Buttons;
