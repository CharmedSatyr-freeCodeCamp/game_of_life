import * as u from '../cellData.utils';
import * as c from '../../constants/constants';

describe('clearCells', () => {
  it('should create a default array of `false` Booleans', () => {
    const result = u.clearCells();
    expect(result.includes(true)).toBeFalsy();
  });

  it('should create a default array a long as the grid length vs. height', () => {
    const { length } = u.clearCells();
    expect(length).toBe(c.gridHeight * c.gridWidth);
  });
});

describe('populateCells', () => {
  it('should replace some of the `false` Booleans with `true`', () => {
    const cleared = u.clearCells();
    const result = u.populateCells(cleared);
    expect(result.includes(true)).toBeTruthy();
  });
});

describe('coordinatesCalc', () => {
  it('should throw an error for non-number arguments', () => {
    expect(() => u.coordinatesCalc('octopus')).toThrow();
  });

  it('should return an array', () => {
    expect(u.coordinatesCalc(0)).toEqual(expect.any(Array));
  });

  it('should return zero-based x and y coordinates', () => {
    const expected = [0, 0];
    expect(u.coordinatesCalc(0)).toEqual(expect.arrayContaining(expected));
  });

  it('should calculate the correct x position of the last cell on the first row', () => {
    const expected = [c.gridWidth - 1, 0];
    expect(u.coordinatesCalc(c.gridWidth - 1)).toEqual(expected);
  });

  it('should reset the x axis on a new row', () => {
    const expected = [0, 1];
    expect(u.coordinatesCalc(c.gridWidth)).toEqual(expected);
  });

  it('should return the correct coordinates for the bottom right cell', () => {
    const last = c.gridWidth * c.gridHeight - 1;
    const expected = [c.gridWidth - 1, c.gridHeight - 1];
    expect(u.coordinatesCalc(last)).toEqual(expected);
  });
});

describe('coordinatesCalc', () => {
  it('should calculate `x` and `y` coordinates based on index', () => {
    const arr = u.clearCells();
    let idx = 0;
    let coordinates = [0, 0];
    expect(u.coordinatesCalc(idx)).toEqual(coordinates);

    idx = arr.length / c.gridHeight + 1;
    coordinates = [1, 1];
    expect(u.coordinatesCalc(idx)).toEqual(coordinates);
  });

  it('should throw an error if the argument is not a number', () => {
    expect(() => u.coordinatesCalc('oops')).toThrow();
  });
});

describe('isAlive', () => {
  it('should return `false` for a dead cell', () => {
    const arr = [false];
    const result = u.isAlive(0, 0, arr);
    expect(result).toBeFalsy();
  });

  it('should return `true` for a live cell', () => {
    const arr = [true];
    const result = u.isAlive(0, 0, arr);
    expect(result).toBeTruthy();
  });
});

describe('neighborsAlive', () => {
  it(`should count how many of a given cell's neighbors are alive`, () => {
    const arr = [true, false];
    const zero = 0;
    const one = 1;
    expect(u.neighborsAlive(zero, arr)).toBe(0);
    expect(u.neighborsAlive(one, arr)).toBe(1);
  });
});

describe('calculateNext', () => {
  it('should return `false` if the cell has fewer than 2 living neighbors', () => {
    const arr = [false, true, false];
    const idx = 1;
    expect(u.calculateNext(idx, arr)).toBeFalsy();
  });

  it('should return `true` if the cell is alive and has 2 living neighbors', () => {
    const arr = u.clearCells();
    arr[0] = true;
    arr[1] = true;
    arr[arr.length / c.gridHeight] = true;
    const idx = arr.length / c.gridHeight;

    expect(u.calculateNext(idx, arr)).toBeTruthy();
  });

  it('should return `false` if the cell is dead and has 2 living neighbors', () => {
    const arr = u.clearCells();
    arr[0] = true;
    arr[1] = true;
    const idx = arr.length / c.gridHeight;
    expect(u.calculateNext(idx, arr)).toBeFalsy();
  });

  it('should return `true` if the cell is alive and has 3 living neighbors', () => {
    const arr = u.clearCells();
    arr[0] = true;
    arr[1] = true;
    arr[arr.length / c.gridHeight] = true;
    arr[arr.length / c.gridHeight + 1] = true;
    const idx = arr.length / c.gridHeight + 1;

    expect(u.calculateNext(idx, arr)).toBeTruthy();
  });

  it('should return `true` if the cell is dead and has 3 living neighbors', () => {
    const arr = u.clearCells();
    arr[0] = true;
    arr[1] = true;
    arr[arr.length / c.gridHeight] = true;
    const idx = arr.length / c.gridHeight + 1;

    expect(u.calculateNext(idx, arr)).toBeTruthy();
  });

  it('should return `false` if the cell has more than 3 living neighbors', () => {
    const grid = u.clearCells();
    grid[0] = true;
    grid[1] = true;
    grid[2] = true;
    grid[grid.length / c.gridHeight] = true;
    grid[grid.length / c.gridHeight + 1] = true;
    const idx = grid.length / c.gridHeight + 1;
    expect(u.calculateNext(idx, grid)).toBeFalsy();
  });

  it('should return its current value as a fallback', () => {
    const arr = u.clearCells();
    const idx = 0;
    expect(u.calculateNext(idx, arr)).toBeFalsy();
  });
});

describe('nextGen', () => {
  it('should advance cells in the array by one generation based on neighboring `alive` values', () => {
    // Mock up a grid
    const arr = u.clearCells();
    arr[0] = true;
    arr[1] = true;
    arr[arr.length / c.gridHeight] = true;
    const idx = arr.length / c.gridHeight + 1;
    const result = u.nextGen(arr);
    expect(result[idx]).toBeTruthy();
  });
});
