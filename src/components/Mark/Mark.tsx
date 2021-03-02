import { createStyles, makeStyles, useTheme, Zoom } from '@material-ui/core';
import { Theme } from '@material-ui/core/styles';
import clsx from 'clsx';
import MARK from 'Entities/mark';
import * as React from 'react';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      position: 'absolute',
      top: 0,
      bottom: 0,
      width: `calc(100% - ${theme.spacing(1)}px)`,
      height: `calc(100% - ${theme.spacing(1)}px)`,
      borderWidth: theme.spacing(0.2),
      borderColor: theme.palette.primary.main,
      borderStyle: 'solid',
      borderRadius: '50%',
      margin: theme.spacing(0.5),
      '&:hover': {
        borderWidth: theme.spacing(0.5),
      },
    },
    dark: {
      backgroundColor: theme.palette.primary.dark,
    },
    white: {
      backgroundColor: theme.palette.primary.light,
    },
  })
);

interface Props {
  mark: MARK;
}

const Mark = ({ mark }: Props): JSX.Element => {
  const classes = useStyles();
  const theme = useTheme();

  const transitionDuration = {
    enter: theme.transitions.duration.enteringScreen,
    exit: theme.transitions.duration.leavingScreen,
  };

  return (
    <Zoom
      in
      style={{
        transitionDelay: `${transitionDuration.exit}ms`,
      }}
      timeout={transitionDuration}
      unmountOnExit
    >
      <div
        className={clsx(classes.root, {
          [classes.dark]: mark === MARK.O,
          [classes.white]: mark === MARK.X,
        })}
      />
    </Zoom>
  );
};

export default Mark;
