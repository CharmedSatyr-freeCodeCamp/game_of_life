import * as c from '../constants/constants';
import _ from 'lodash';

// Reducer Functions
// Create an array of objects with default cell properties
export const makeCells = (height = c.gridHeight, width = c.gridWidth) => {
  const cells = [];
  let index = 0;
  for (let i = 0; i < height; i++) {
    let y = i;
    for (let j = 0; j < width; j++) {
      let x = j;
      const coordinates = { x, y };
      cells.push({ alive: false, coordinates, index });
      index++;
    }
  }
  return cells;
};

// Randomize the `alive` properties of objects in a given array of cells
export const randomizeLife = arr => {
  const clone = _.cloneDeep(arr);
  clone.forEach(cell => {
    cell.alive = Math.random() > c.probability ? true : false;
  });
  return clone;
};

// Count how many of a given cell's neighbors are alive
export const neighborsAlive = (idx, arr) => {
  const isAlive = (x, y, array = arr) => {
    let xC = x,
      yC = y;
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
    return arr[index].alive; // Boolean
  };

  let count = 0;
  const { x, y } = arr[idx].coordinates;

  // NW
  if (isAlive(x - 1, y - 1)) {
    count++;
  } // N
  if (isAlive(x, y - 1)) {
    count++;
  }
  // NE
  if (isAlive(x + 1, y - 1)) {
    count++;
  }
  // W
  if (isAlive(x - 1, y)) {
    count++;
  }
  //E
  if (isAlive(x + 1, y)) {
    count++;
  }
  // SW
  if (isAlive(x - 1, y + 1)) {
    count++;
  }
  // S
  if (isAlive(x, y + 1)) {
    count++;
  }
  // SE
  if (isAlive(x + 1, y + 1)) {
    count++;
  }

  return count;
};

// Calculate next
const calculateNext = (idx, arr) => {
  const alive = arr[idx].alive;
  const count = neighborsAlive(idx, arr);

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

// Advance objects in an array of cells by one generation based on neighbors' `alive` values
export const advance = arr => {
  const clone = _.cloneDeep(arr);
  arr.forEach((c, i) => {
    const nextStatus = calculateNext(i, arr);
    clone[i].alive = nextStatus;
  });
  return clone;
};
