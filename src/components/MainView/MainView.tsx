import { Container, Grid, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import Cell from 'Components/Cell';
import * as React from 'react';

const useStyles = makeStyles((theme) => ({
  main: {
    marginTop: theme.spacing(8),
    marginBottom: theme.spacing(2),
  },
}));

const MainView = (): JSX.Element => {
  const classes = useStyles();

  return (
    <Container className={classes.main} component="main" maxWidth="sm">
      <Typography component="h1" gutterBottom variant="h2">
        Reversi game!
      </Typography>
      <Grid
        alignItems="center"
        container
        direction="column"
        justify="flex-start"
        wrap="nowrap"
      >
        <Grid
          alignItems="center"
          container
          direction="row"
          justify="center"
          wrap="nowrap"
        >
          <Cell color="white" />
          <Cell color="dark" />
          <Cell color="white" />
          <Cell />
          <Cell color="white" />
          <Cell color="dark" />
          <Cell color="white" />
          <Cell />
        </Grid>
      </Grid>
    </Container>
  );
};

export default MainView;
