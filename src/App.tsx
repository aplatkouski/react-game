import { CssBaseline, ThemeProvider } from '@material-ui/core';
import { createMuiTheme } from '@material-ui/core/styles';
import { makeStyles } from '@material-ui/styles';

import Footer from 'Components/Footer';
import MainView from 'Components/MainView';
import React from 'react';

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
    <ThemeProvider theme={theme}>
      <div className={classes.root}>
        <CssBaseline />
        <MainView />
        <Footer />
      </div>
    </ThemeProvider>
  );
};

export default App;
