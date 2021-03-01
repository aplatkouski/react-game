export enum MARK {
  X = -1,
  EMPTY,
  O,
}

interface ICell {
  coordinate: [number, number];
  mark: MARK;
}

export default ICell;
