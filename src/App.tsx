import { CssBaseline, ThemeProvider } from '@material-ui/core';
import { createMuiTheme } from '@material-ui/core/styles';
import { makeStyles } from '@material-ui/styles';
import FinishGameModal from 'Components/FinishGameModal';
import Footer from 'Components/Footer';
import MainView from 'Components/MainView';
import React from 'react';
import { Provider } from 'react-redux';
import store from 'States/root-store';

const useStyles = makeStyles(() => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    minHeight: '100vh',
  },
}));

const theme = createMuiTheme({});

const App = (): JSX.Element => {
  const classes = useStyles();

  return (
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <div className={classes.root}>
          <CssBaseline />
          <FinishGameModal />
          <MainView />
          <Footer />
        </div>
      </ThemeProvider>
    </Provider>
  );
};

export default App;
