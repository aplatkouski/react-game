import { Container, Grid, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import clsx from 'clsx';
import Buttons from 'Components/Buttons';
import FullscreenButton from 'Components/FullscreenButton';
import Gameboard from 'Components/Gameboard';
import AvailableCellIndexes from 'Entities/available-moves';
import MARK from 'Entities/mark';
import Score from 'Entities/score';
import * as React from 'react';
import * as StateTypes from 'States/types';

const useStyles = makeStyles((theme) => ({
  main: {
    marginTop: theme.spacing(1),
    marginBottom: theme.spacing(1),
  },
  playerX: {
    color: theme.palette.primary.light,
  },
  playerO: {
    color: theme.palette.primary.dark,
  },
}));

interface Props {
  availableCellIndexes: AvailableCellIndexes;
  currentPlayerMark: MARK;
  gameWasSkipped: boolean;
  isActiveGame: boolean;
  score: Score;
  setNoMoreMoves: () => StateTypes.IAction<undefined>;
  skipMove: () => StateTypes.IAction<undefined>;
}

const MainView = ({
  availableCellIndexes,
  currentPlayerMark,
  gameWasSkipped,
  isActiveGame,
  score,
  setNoMoreMoves,
  skipMove,
}: Props): JSX.Element => {
  const classes = useStyles();

  if (isActiveGame && !Object.keys(availableCellIndexes).length) {
    if (gameWasSkipped) {
      setNoMoreMoves();
    } else {
      skipMove();
    }
  }

  const renderScore = () => {
    return (
      <>
        {': '}
        <span className={classes.playerX}>{score[0]}</span>
        {' vs '}
        <span className={classes.playerO}>{score[1]}</span>
      </>
    );
  };

  return (
    <Container className={classes.main} component="main" maxWidth="xs">
      <FullscreenButton />
      <Typography component="h1" gutterBottom variant="h5">
        Reversi game
        {isActiveGame ? renderScore() : '!'}
      </Typography>
      <Grid container direction="row" wrap="nowrap">
        <Buttons />
        {isActiveGame && (
          <Typography
            className={clsx({
              [classes.playerX]: currentPlayerMark === MARK.X,
              [classes.playerO]: currentPlayerMark === MARK.O,
            })}
            component="h5"
            gutterBottom
            variant="h6"
          >
            {`${currentPlayerMark === 1 ? 'First' : 'Second'} player`}
          </Typography>
        )}
      </Grid>
      <Gameboard />
    </Container>
  );
};

export default MainView;
