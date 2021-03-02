import ICoordinate from 'Entities/coordinate';
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
