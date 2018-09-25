import * as c from '../constants/constants';

/*** MAKE GRID ***/
// Create an array of objects with default cell properties
export const makeCells = (height = c.gridHeight, width = c.gridWidth) => {
  const cells = [];
  for (let i = 0; i < height; i++) {
    let y = i;
    for (let j = 0; j < width; j++) {
      let x = j;
      cells.push({ alive: false, x, y });
    }
  }
  return cells;
};

// Randomize the `alive` properties of objects in a given array of cells
export const randomizeLife = arr => {
  const clone = [...arr];
  clone.forEach(cell => {
    cell.alive = Math.random() > c.probability ? true : false;
  });
  return clone;
};

/*** NEXT GENERATION ***/
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
  const { x, y } = arr[idx];

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
  directions.forEach(direction => {
    if (isAlive(...direction)) {
      count++;
    }
  });

  return count;
};

// Calculate whether cell will be `alive` next generation
const calculateNext = (idx, arr) => {
  const alive = arr[idx].alive;
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

// Advance objects in an array of cells by one generation based on neighbors' `alive` values
export const advance = arr => {
  // If cloned objects reference objects in `arr`, the original `arr` will be modified below,
  // which will result in improper cell/grid behavior
  // TODO: LOOPS: 1
  const deepClone = arr.map(c => Object.assign({}, c));

  // TODO: LOOPS: 1
  arr.forEach((c, i) => {
    const nextStatus = calculateNext(i, arr);
    deepClone[i].alive = nextStatus;
  });
  return deepClone;
};
