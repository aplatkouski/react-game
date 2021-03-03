import ICell from 'Entities/cell';
import MARK from 'Entities/mark';

export const getInitialCells = (size = 8): Array<ICell> => {
  const initialCells = [] as Array<ICell>;
  let cell: ICell;
  for (let index = 0; index < size ** 2; index += 1) {
    if (index === 27 || index === 36) {
      cell = {
        index,
        mark: MARK.X,
      };
    } else if (index === 28 || index === 35) {
      cell = {
        index,
        mark: MARK.O,
      };
    } else {
      cell = {
        index,
        mark: MARK.EMPTY,
      };
    }
    initialCells.push(cell);
  }
  return initialCells;
};

export const getEmptyCells = (size = 8): Array<ICell> => {
  const emptyCells = [] as Array<ICell>;
  for (let index = 0; index < size ** 2; index += 1) {
    emptyCells.push({
      index,
      mark: MARK.EMPTY,
    });
  }
  return emptyCells;
};
