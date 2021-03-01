import { Grid } from '@material-ui/core';
import { createStyles, Theme } from '@material-ui/core/styles';
import { makeStyles } from '@material-ui/styles';
import Mark from 'Components/Mark';
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
  // eslint-disable-next-line react/require-default-props
  color?: string;
}

const Cell = ({ color }: Props): JSX.Element => {
  const classes = useStyles();

  return (
    <Grid className={classes.item} color="primary" item xs={2}>
      {color && <Mark color={color} />}
    </Grid>
  );
};

export default Cell;
