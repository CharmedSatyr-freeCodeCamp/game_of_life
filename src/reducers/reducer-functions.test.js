import * as rf from './reducer-functions';

const arr = [
  { coordinates: { x: 0, y: 0 }, index: 0 },
  { coordinates: { x: 1, y: 0 }, index: 1 },
  { coordinates: { x: 0, y: 1 }, index: 2 },
  { coordinates: { x: 1, y: 1 }, index: 3 },
  { coordinates: { x: 0, y: 2 }, index: 4 },
  { coordinates: { x: 1, y: 2 }, index: 5 },
];
/*
      |---+---|
      | 0 | 1 |
      |===+===|
      | 2 | 3 |
      |---+---|
      | 4 | 5 |
      |---+---|
    */

describe('findN', () => {
  // parameters: idx, array, height, width
  it('should return the index of the cell north of `idx` if not at top edge', () => {
    expect(rf.findN(2, arr, 3, 2)).toBe(0);
    expect(rf.findN(4, arr, 3, 2)).toBe(2);
    expect(rf.findN(3, arr, 3, 2)).toBe(1);
    expect(rf.findN(5, arr, 3, 2)).toBe(3);
  });

  it('should return the index of the vertically wrapped cell if given an `idx` at the top edge', () => {
    expect(rf.findN(0, arr, 3, 2)).toBe(4);
    expect(rf.findN(1, arr, 3, 2)).toBe(5);
  });
});

describe('findW', () => {
  // parameters: idx, array, height, width
  it('should return the index of the cell west of `idx` if not at left edge', () => {
    expect(rf.findW(1, arr, 3, 2)).toBe(0);
    expect(rf.findW(3, arr, 3, 2)).toBe(2);
    expect(rf.findW(5, arr, 3, 2)).toBe(4);
  });

  it('should return the index of the horizontally wrapped cell if given an `idx` at the left edge', () => {
    expect(rf.findW(0, arr, 3, 2)).toBe(1);
    expect(rf.findW(2, arr, 3, 2)).toBe(3);
    expect(rf.findW(4, arr, 3, 2)).toBe(5);
  });
});

describe('nw', () => {
  it('should return the index of the cell to above and left of a given index if not at an edge', () => {});
});
