import * as a from '../constants/action-types';

// Action Creators
export const clear = () => {
  return {
    type: a.CLEAR,
  };
};

export const makeGrid = () => {
  return {
    type: a.MAKE_GRID,
  };
};

export const nextGen = arr => {
  return {
    cellData: arr,
    type: a.NEXT_GEN,
  };
};

export const toggle = index => {
  return {
    index,
    type: a.TOGGLE,
  };
};
