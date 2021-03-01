import { Theme } from '@material-ui/core/styles';
import { createStyles, makeStyles } from '@material-ui/styles';
import clsx from 'clsx';
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
  color: string;
}

const Mark = ({ color }: Props): JSX.Element => {
  const classes = useStyles();

  return (
    <div
      className={clsx(classes.root, {
        [classes.dark]: color === 'dark',
        [classes.white]: color === 'white',
      })}
    />
  );
};

export default Mark;
