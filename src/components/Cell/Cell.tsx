import { Grid } from '@material-ui/core';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import Mark from 'Components/Mark';
import MARK from 'Entities/mark';
import * as React from 'react';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    item: {
      border: '2px solid blue',
      backgroundColor: theme.palette.success.main,
      borderWidth: theme.spacing(0.1),
      borderColor: theme.palette.success.dark,
      borderStyle: 'solid',
      paddingBottom: '12.5%',
      position: 'relative',
    },
  })
);

interface Props {
  mark: MARK;
}

const Cell = ({ mark }: Props): JSX.Element => {
  const classes = useStyles();

  return (
    <Grid className={classes.item} color="primary" item xs={2}>
      {mark !== MARK.EMPTY ? <Mark mark={mark} /> : null}
    </Grid>
  );
};

export default Cell;
