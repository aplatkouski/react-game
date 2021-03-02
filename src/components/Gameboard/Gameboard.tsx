import { Grid } from '@material-ui/core';
import Cell from 'Components/Cell';
import ICell from 'Entities/cell';
import MARK from 'Entities/mark';
import * as React from 'react';
import * as StateTypes from 'States/types';

interface Props {
  cells: Array<ICell>;
  currentMark: MARK;
  move: (cell: ICell) => StateTypes.IAction<ICell>;
}

const Gameboard = ({ cells, currentMark, move }: Props): JSX.Element => {
  const handleClick = (index: number) => {
    move({
      index,
      mark: currentMark,
    });
  };

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
              <Cell key={`cell-${cell.index}`} cell={cell} onClick={handleClick} />
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
