import * as at from '../constants/action-types';
import * as u from './cellData.utils';

const cellData = (state = [], action) => {
  switch (action.type) {
    case at.CLEAR:
      return u.clearCells();
    case at.MAKE_GRID:
      return u.populateCells(u.clearCells());
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

export default cellData;
