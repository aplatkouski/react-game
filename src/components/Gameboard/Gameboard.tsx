import { Grid } from '@material-ui/core';
import Cell from 'Components/Cell';
import AvailableCellIndexes from 'Entities/available-moves';
import ICell from 'Entities/cell';
import EnemyCellIndexes from 'Entities/enemy-cell-indexes';
import MARK from 'Entities/mark';
import MarkedIndexes from 'Entities/marked-indexes';
import * as React from 'react';
import * as StateTypes from 'States/types';

interface Props {
  availableMoves: AvailableCellIndexes;
  cells: Array<ICell>;
  currentMark: MARK;
  move: (markedIndexes: MarkedIndexes) => StateTypes.IAction<MarkedIndexes>;
  rotatePlayer: () => StateTypes.IAction<undefined>;
}

interface HandleClickProps {
  currentCellIndex: number;
  enemyIndexes: EnemyCellIndexes;
}

const Gameboard = ({
  availableMoves,
  cells,
  currentMark,
  move,
  rotatePlayer,
}: Props): JSX.Element => {
  const handleClick = ({ currentCellIndex, enemyIndexes }: HandleClickProps) => {
    rotatePlayer();
    move({
      indexes: [currentCellIndex, ...enemyIndexes],
      mark: currentMark,
    });
  };

  const isAvailable = (cellIndex: number): boolean =>
    Object.keys(availableMoves).findIndex(
      (availableIndex) => +availableIndex === cellIndex
    ) >= 0;

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
            .map((cell) => {
              const available = isAvailable(cell.index);
              return (
                <Cell
                  key={`cell-${cell.index}`}
                  available={available}
                  cell={cell}
                  onClick={() => {
                    if (available) {
                      handleClick({
                        currentCellIndex: cell.index,
                        enemyIndexes: availableMoves[cell.index],
                      });
                    }
                  }}
                />
              );
            })}
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
