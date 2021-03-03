import { Grid } from '@material-ui/core';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import clsx from 'clsx';
import Mark from 'Components/Mark';
import ICell from 'Entities/cell';
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
    available: {
      '&:hover': {
        backgroundColor: theme.palette.success.light,
      },
    },
  })
);

interface Props {
  available: boolean;
  cell: ICell;
  onClick: (index: number) => void;
}

const Cell = ({ available, cell, onClick: handleClick }: Props): JSX.Element => {
  const classes = useStyles();

  const markCell = () => {
    if (cell.mark === MARK.EMPTY) {
      handleClick(cell.index);
    }
  };

  return (
    <Grid
      className={clsx(classes.item, {
        [classes.available]: available,
      })}
      color="primary"
      item
      onClick={() => markCell()}
      xs={2}
    >
      {cell.mark !== MARK.EMPTY ? <Mark mark={cell.mark} /> : null}
    </Grid>
  );
};

export default React.memo(Cell);
