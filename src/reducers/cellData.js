import * as at from '../constants/action-types';
import * as u from './grid.utils';

const grid = (state = [], action) => {
  switch (action.type) {
    case at.CLEAR:
      return u.clearGrid();
    case at.MAKE_GRID:
      return u.populateGrid(u.clearGrid());
    case at.NEXT_GEN:
      return u.nextGen(state);
    case at.TOGGLE:
      const clone = [...state];
      clone[action.index] = !state[action.index];
      return clone;
    default:
      return state;
  }
};

export default grid;
