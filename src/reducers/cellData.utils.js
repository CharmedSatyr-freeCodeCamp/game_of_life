import * as c from '../constants/constants';

/*** MAKE GRID ***/
// Create a default array of `false` Booleans
export const clearCells = (height = c.gridHeight, width = c.gridWidth) =>
  Array(height * width).fill(false);

// Replace some of the `false` Booleans with `true`
// A 'living' cell is `true`; a 'dead' cell is `false`
export const populateCells = arr => arr.map(() => Math.random() > c.probability);

/*** NEXT GENERATION ***/
// Calculate x and y coordinates of cells based on index
export const coordinatesCalc = index => {
  if (typeof index !== 'number') {
    throw new Error('coordinatesCalc: Argument must be a number');
  }

  const x = index % c.gridWidth;
  const y = Math.floor(index / c.gridWidth);
  return [x, y];
};

// isAlive returns a Boolean
export const isAlive = (x, y, arr) => {
  // Default values for neighbors' x and y coordinates
  let xC = x,
    yC = y;

  // Make grid toroidal (fix nonexistent cell coordinates)
  // Horizontal wrapping
  if (x === -1) {
    xC = c.gridWidth - 1;
  }
  if (x === c.gridWidth) {
    xC = 0;
  }

  // Vertical wrapping
  if (y === -1) {
    yC = c.gridHeight - 1;
  }
  if (y === c.gridHeight) {
    yC = 0;
  }

  // Avoid a loop by inferring index
  const index = xC + yC * c.gridWidth;
  return arr[index]; // Boolean
};

// Count how many of a given cell's neighbors are alive
export const neighborsAlive = (idx, arr) => {
  // Convert the cells index to x/y coordinate value
  const [x, y] = coordinatesCalc(idx);

  // Coordinates of adjacent cells
  const directions = [
    [x - 1, y - 1], // NW
    [x, y - 1], // N
    [x + 1, y - 1], // NE
    [x - 1, y], // W
    [x + 1, y], // E
    [x - 1, y + 1], // SW
    [x, y + 1], // S
    [x + 1, y + 1], // SE
  ];

  // Count living, adjacent cells
  let count = 0;
  directions.forEach(direction => {
    if (isAlive(...direction, arr)) {
      count++;
    }
  });

  // Return the total
  return count;
};

// Calculate whether cell will be `alive` next generation
export const calculateNext = (idx, arr) => {
  const alive = arr[idx];
  const count = neighborsAlive(idx, arr);

  // John Conway's Rules
  if (alive && count < 2) {
    return false;
  }
  if (alive && count > 3) {
    return false;
  }
  if (alive && (count === 2 || count === 3)) {
    return true;
  }
  if (!alive && count === 3) {
    return true;
  }
  // Fallback
  return alive;
};

// Advance cells in the array by one generation based on neighbors' `alive` values
export const nextGen = arr => arr.map((c, i) => calculateNext(i, arr));
