import { Grid } from '@material-ui/core';
import Cell from 'Components/Cell';
import ICell from 'Entities/cell';
import * as React from 'react';

interface Props {
  cells: Array<ICell>;
}

const Gameboard = ({ cells }: Props): JSX.Element => {
  const renderRows = () => {
    const SIZE = 8;
    return [...Array(SIZE).keys()].map((key) => {
      return (
        <Grid
          key={`grid-${key}`}
          alignItems="center"
          container
          direction="row"
          justify="center"
          wrap="nowrap"
        >
          {cells
            .filter((c) => Math.floor(c.index / SIZE) === key)
            .map((cell) => (
              <Cell key={`cell-${cell.index}`} mark={cell.mark} />
            ))}
        </Grid>
      );
    });
  };

  return (
    <Grid
      alignItems="center"
      container
      direction="column"
      justify="flex-start"
      wrap="nowrap"
    >
      {renderRows()}
    </Grid>
  );
};

export default Gameboard;
