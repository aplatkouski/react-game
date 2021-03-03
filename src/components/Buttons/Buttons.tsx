import { Button, createStyles, makeStyles } from '@material-ui/core';
import { Theme } from '@material-ui/core/styles';
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
  gameIsActive: boolean;
  startGame: () => StateTypes.IAction<undefined>;
  stopGame: () => StateTypes.IAction<undefined>;
}

const Buttons = ({ gameIsActive, startGame, stopGame }: Props): JSX.Element => {
  const classes = useStyles();

  const renderButton = () => {
    if (gameIsActive) {
      return (
        <Button
          className={classes.startStopGameButton}
          color="secondary"
          onClick={() => stopGame()}
        >
          Stop Game
        </Button>
      );
    }
    return (
      <Button
        className={classes.startStopGameButton}
        color="primary"
        onClick={() => startGame()}
      >
        New Game
      </Button>
    );
  };

  return renderButton();
};

export default Buttons;
