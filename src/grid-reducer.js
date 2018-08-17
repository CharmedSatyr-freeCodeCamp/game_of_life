// Grid Reducer
import * as at from './action-types';
import * as rf from './reducer-functions';

const initialState = {
  generation: 0,
  cellData: [],
};

export const gridReducer = (state = initialState, action) => {
  switch (action.type) {
    case at.CLEAR:
      return Object.assign({}, state, { generation: 0, cellData: rf.makeCells() });
    case at.MAKE_GRID:
      return Object.assign({}, state, {
        generation: 0,
        cellData: rf.randomizeLife(rf.makeCells()),
      });
    case at.NEXT_GEN:
      return Object.assign({}, state, {
        generation: state.generation + 1,
        cellData: rf.advance(state.cellData),
      });
    case at.TOGGLE:
      const clone = [...state.cellData];
      state.cellData[action.index].alive
        ? (clone[action.index].alive = false)
        : (clone[action.index].alive = true);
      console.log(rf.neighborsAlive(state.cellData, action.index));
      return Object.assign({}, state, { cellData: clone });
    default:
      return state;
  }
};
