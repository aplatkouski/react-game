import { Container, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import Buttons from 'Components/Buttons';
import FullscreenButton from 'Components/FullscreenButton';
import Gameboard from 'Components/Gameboard';
import AvailableCellIndexes from 'Entities/available-moves';
import * as React from 'react';
import * as StateTypes from 'States/types';

const useStyles = makeStyles((theme) => ({
  main: {
    marginTop: theme.spacing(1),
    marginBottom: theme.spacing(1),
  },
}));

interface Props {
  availableCellIndexes: AvailableCellIndexes;
  gameWasSkipped: boolean;
  isActiveGame: boolean;
  skipMove: () => StateTypes.IAction<undefined>;
  stopGame: () => StateTypes.IAction<undefined>;
}

const MainView = ({
  availableCellIndexes,
  gameWasSkipped,
  isActiveGame,
  skipMove,
  stopGame,
}: Props): JSX.Element => {
  const classes = useStyles();

  if (isActiveGame && !Object.keys(availableCellIndexes).length) {
    if (gameWasSkipped) {
      stopGame();
    } else {
      skipMove();
    }
  }

  return (
    <Container className={classes.main} component="main" maxWidth="xs">
      <FullscreenButton />
      <Typography component="h1" gutterBottom variant="h5">
        Reversi game!
      </Typography>
      <Buttons />
      <Gameboard />
    </Container>
  );
};

export default MainView;
