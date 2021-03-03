import AvailableCellIndexes from 'Entities/available-moves';
import ICell from 'Entities/cell';
import ICoordinate from 'Entities/coordinate';
import EnemyCellIndexes from 'Entities/enemy-cell-indexes';
import MARK from 'Entities/mark';
import Offset from 'Entities/offset';

export interface IndexToOffsets {
  [index: number]: Array<Offset>;
}

class Gameboard {
  static ALL_DIRECTIONS: Array<ICoordinate> = [
    {
      x: 0,
      y: 1,
    }, // up
    {
      x: 1,
      y: 1,
    }, // right up
    {
      x: 1,
      y: 0,
    }, // right
    {
      x: 1,
      y: -1,
    }, // right down
    {
      x: 0,
      y: -1,
    }, // etc.
    {
      x: -1,
      y: -1,
    },
    {
      x: -1,
      y: 0,
    },
    {
      x: -1,
      y: 1,
    },
  ];

  offsets: IndexToOffsets;

  size: number;

  constructor(size = 8) {
    this.size = size;
    this.offsets = this.getOffsets();
  }

  static getCoordinateByIndex = (index: number, size: number): ICoordinate => {
    /* Map index of cell to coordinate of that cell and return it.

    Where an example for a 3x3 grid::

        0 1 2         (1, 3) (2, 3) (3, 3)
        3 4 5   ==>   (1, 2) (2, 2) (3, 2)
        6 7 8         (1, 1) (2, 1) (3, 1)
    */
    return {
      x: (index % size) + 1,
      y: size - Math.floor(index / size),
    };
  };

  getOffsetCellByDirection = ({
    cells,
    currentCellIndex,
    directionIndex,
  }: {
    cells: Array<ICell>;
    currentCellIndex: number;
    directionIndex: number;
  }): ICell => {
    const index = this.offsets[currentCellIndex].findIndex(
      (offset) => offset.direction === directionIndex
    );
    if (index >= 0) {
      return cells[this.offsets[currentCellIndex][index].index];
    }
    return {
      index: -1,
      mark: MARK.UNDEFINED,
    };
  };

  getMarkedEnemyIndexes = ({
    cells,
    startCell,
    playerMark,
  }: {
    cells: Array<ICell>;
    startCell: ICell;
    playerMark: MARK;
  }): EnemyCellIndexes => {
    const enemyMark = playerMark === MARK.X ? MARK.O : MARK.X;
    const allEnemyIndexes = [] as EnemyCellIndexes;

    this.offsets[startCell.index].forEach(({ index: offsetIndex, direction }) => {
      if (cells[offsetIndex].mark === enemyMark) {
        const enemyIndexes = [offsetIndex];
        let nextCell: ICell = this.getOffsetCellByDirection({
          cells,
          currentCellIndex: offsetIndex,
          directionIndex: direction,
        });
        while (nextCell.mark === enemyMark) {
          enemyIndexes.push(nextCell.index);
          nextCell = this.getOffsetCellByDirection({
            cells,
            currentCellIndex: nextCell.index,
            directionIndex: direction,
          });
        }
        if (nextCell.mark === playerMark) {
          allEnemyIndexes.push(...enemyIndexes);
        }
      }
    });
    return allEnemyIndexes;
  };

  getAvailableMoves = ({
    cells,
    playerMark,
  }: {
    cells: Array<ICell>;
    playerMark: MARK;
  }): AvailableCellIndexes => {
    const availableCellIndexes = {} as AvailableCellIndexes;
    cells
      .filter((cell) => cell.mark === MARK.EMPTY)
      .forEach((cell) => {
        const markedEnemyIndex = this.getMarkedEnemyIndexes({
          cells,
          startCell: cell,
          playerMark,
        });
        if (markedEnemyIndex.length) {
          availableCellIndexes[cell.index] = markedEnemyIndex;
        }
      });
    return availableCellIndexes;
  };

  static getIndexByCoordinate = (coordinate: ICoordinate, size: number): number => {
    return coordinate.x - 1 + (size - coordinate.y) * size;
  };

  static getAllCoordinates = (size = 8): Array<ICoordinate> => {
    const allCoordinates = [] as Array<ICoordinate>;
    for (let i = 0; i < size ** 2; i += 1) {
      allCoordinates.push(Gameboard.getCoordinateByIndex(i, size));
    }
    return allCoordinates;
  };

  getOffsets = (): IndexToOffsets => {
    const allCoordinates = Gameboard.getAllCoordinates(this.size);

    const indexToOffsets = {} as IndexToOffsets;

    for (let cellIndex = 0; cellIndex < this.size ** 2; cellIndex += 1) {
      const offsets = [] as Array<Offset>;

      const cellCoordinate = Gameboard.getCoordinateByIndex(cellIndex, this.size);
      Gameboard.ALL_DIRECTIONS.forEach((directionCoordinate, directionIndex) => {
        const offsetCoordinate: ICoordinate = {
          x: cellCoordinate.x + directionCoordinate.x,
          y: cellCoordinate.y + directionCoordinate.y,
        };
        if (
          allCoordinates.findIndex(
            (existingCoordinate) =>
              existingCoordinate.x === offsetCoordinate.x &&
              existingCoordinate.y === offsetCoordinate.y
          ) >= 0
        ) {
          offsets.push({
            index: Gameboard.getIndexByCoordinate(offsetCoordinate, this.size),
            direction: directionIndex,
          });
        }
      });
      indexToOffsets[cellIndex] = offsets;
    }

    return indexToOffsets;
  };
}

export default Gameboard;
