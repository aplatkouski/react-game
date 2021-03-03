import { CssBaseline, ThemeProvider } from '@material-ui/core';
import { createMuiTheme } from '@material-ui/core/styles';
import { makeStyles } from '@material-ui/styles';
import FinishGameModal from 'Components/FinishGameModal';
import Footer from 'Components/Footer';
import MainView from 'Components/MainView';
import React, { useEffect, useRef } from 'react';
import { IGameState } from 'States/game/model';
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
  gameState: IGameState;
  gameboardState: IGameboardState;
  loadGameState: (newState: IGameState) => StateTypes.IAction<IGameState>;
  loadGameboardState: (
    newState: Omit<IGameboardState, 'gameboard'>
  ) => StateTypes.IAction<Omit<IGameboardState, 'gameboard'>>;
}

const theme = createMuiTheme({});

const App = ({
  gameState,
  gameboardState,
  loadGameState,
  loadGameboardState,
}: Props): JSX.Element => {
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
      const gameLoadedState = JSON.parse(
        localStorage.getItem('gameState') || ''
      ) as IGameState;
      const gameboardLoadedState = JSON.parse(
        localStorage.getItem('gameboardState') || ''
      ) as IGameboardState;
      if (gameboardLoadedState && gameLoadedState) {
        loadGameState(gameLoadedState);
        loadGameboardState(gameboardLoadedState);
      }
    } else {
      const { gameboard, ...rest } = gameboardState;
      localStorage.setItem('gameboardState', JSON.stringify({ ...rest }));
      localStorage.setItem('gameState', JSON.stringify(gameState));
    }
  }, [firstRender, gameboardState, gameState, loadGameState, loadGameboardState]);

  return (
    <ThemeProvider theme={theme}>
      <div className={classes.root}>
        <CssBaseline />
        <FinishGameModal />
        <MainView />
        <Footer />
      </div>
    </ThemeProvider>
  );
};

export default App;
