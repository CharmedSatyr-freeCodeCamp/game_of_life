import * as c from './constants';

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
  const clone = [...arr];
  clone.forEach(c => {
    c.alive = Math.random() > 0.8 ? true : false;
  });
  return clone;
};

// Count how many of a given cell's neighbors are alive
export const findN = (idx, array, height = c.gridHeight, width = c.gridWidth) =>
  array[idx - width] && array[idx - width].coordinates.x === array[idx].coordinates.x
    ? array[idx - width].index
    : array[idx + width * (height - 1)].index;

export const findW = (idx, array, height = c.gridHeight, width = c.gridWidth) =>
  array[idx - 1] && array[idx - 1].coordinates.y === array[idx].coordinates.y
    ? array[idx - 1].index
    : array[idx + width - 1].index;

export const neighborsAlive = (array, idx, width = c.gridWidth, height = c.gridHeight) => {
  // Helper functions
  const findE = idx =>
    array[idx + 1] && array[idx + 1].coordinates.y === array[idx].coordinates.y
      ? array[idx + 1].index
      : array[idx - width + 1].index;

  const findS = idx =>
    array[idx + width] && array[idx + width].coordinates.x === array[idx].coordinates.x
      ? array[idx + width].index
      : array[idx - width * (height - 1)].index;

  // Indices of the cell's eight neighbors
  const nw = findN(findW(idx, array), array);
  // console.log('nw:', nw);
  const n = findN(idx, array);
  const ne = findN(findE(idx), array);
  // console.log('ne:', ne);
  const e = findE(idx);
  // console.log('e:', e);
  const se = findS(findE(idx));
  // console.log('se:', se);
  const s = findS(idx);
  // console.log('s:', s);
  const sw = findS(findW(idx, array));
  // console.log('sw:', sw);
  const w = findW(idx, array);

  // Return a count of how many neighbors are alive
  return [nw, n, ne, e, se, s, sw, w].filter(n => array[n].alive).length;
};

// Advance objects in an array of cells by one generation based on neighbors' `alive` values
export const advance = arr => {
  const clone = [...arr];
  clone.forEach((c, i) => {
    // If the current cell is alive in the original array
    const alive = arr[i].alive;

    // Count how many neighbors are alive
    const count = neighborsAlive(arr, i);

    // Apply Conway's Rules
    if (count === 0) {
      c.alive = false;
    }
    if (count === 1) {
      console.log('i think i have 1 neighbor:', i);
      c.alive = false;
    }
    if (count === 2) {
      c.alive = true;
    }
  });

  // Return the new cellData
  return clone;
};
