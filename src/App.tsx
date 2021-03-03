import { CssBaseline, ThemeProvider } from '@material-ui/core';
import { createMuiTheme } from '@material-ui/core/styles';
import { makeStyles } from '@material-ui/styles';
import FinishGameModal from 'Components/FinishGameModal';
import Footer from 'Components/Footer';
import MainView from 'Components/MainView';
import StatsModal from 'Components/StatsModal';
import React, { useEffect, useRef } from 'react';
import { IGameboardState } from 'States/gameboard/model';
import * as StateTypes from 'States/types';

const useStyles = makeStyles(() => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    minHeight: '100vh',
  },
}));

interface Props {
  gameboardState: IGameboardState;
  loadGameboardState: (
    newState: Omit<IGameboardState, 'gameboard'>
  ) => StateTypes.IAction<Omit<IGameboardState, 'gameboard'>>;
}

const theme = createMuiTheme({});

const App = ({ gameboardState, loadGameboardState }: Props): JSX.Element => {
  const classes = useStyles();

  const useFirstRender = () => {
    const firstRender = useRef(true);

    useEffect(() => {
      firstRender.current = false;
    }, []);

    return firstRender.current;
  };

  const firstRender = useFirstRender();

  useEffect(() => {
    if (firstRender) {
      const gameboardLoadedState = JSON.parse(
        localStorage.getItem('gameboardState') || '{}'
      ) as IGameboardState;
      if (Object.keys(gameboardLoadedState).length) {
        loadGameboardState(gameboardLoadedState);
      }
    } else {
      const { gameboard, ...rest } = gameboardState;
      localStorage.setItem('gameboardState', JSON.stringify({ ...rest }));
    }
  }, [firstRender, gameboardState, loadGameboardState]);

  return (
    <ThemeProvider theme={theme}>
      <div className={classes.root}>
        <CssBaseline />
        <FinishGameModal />
        <StatsModal />
        <MainView />
        <Footer />
      </div>
    </ThemeProvider>
  );
};

export default App;
