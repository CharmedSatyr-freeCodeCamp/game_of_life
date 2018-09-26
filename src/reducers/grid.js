import * as at from '../constants/action-types';
import * as u from './grid.utils';

const initialState = {
  generation: 0,
  cellData: [],
};

const grid = (state = initialState, action) => {
  const newState = Object.assign({}, state);

  switch (action.type) {
    case at.CLEAR:
      newState.cellData = u.clearGrid();
      newState.generation = 0;
      break;
    case at.MAKE_GRID:
      newState.cellData = u.populateGrid(u.clearGrid());
      newState.generation = 0;
      break;
    case at.NEXT_GEN:
      newState.cellData = u.nextGen(state.cellData);
      newState.generation = state.generation + 1;
      break;
    case at.TOGGLE:
      const clone = [...state.cellData];
      clone[action.index] = !state.cellData[action.index];
      newState.cellData = clone;
      break;
    default:
      return state;
  }
  return newState;
};

export default grid;
