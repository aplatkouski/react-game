import { Container, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import Buttons from 'Components/Buttons';
import FullscreenButton from 'Components/FullscreenButton';
import Gameboard from 'Components/Gameboard';
import * as React from 'react';

const useStyles = makeStyles((theme) => ({
  main: {
    marginTop: theme.spacing(1),
    marginBottom: theme.spacing(1),
  },
}));

const MainView = (): JSX.Element => {
  const classes = useStyles();

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
