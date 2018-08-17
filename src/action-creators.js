import * as a from './action-types';

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

export const nextGen = () => {
  return {
    type: a.NEXT_GEN,
  };
};

export const toggle = index => {
  return {
    index,
    type: a.TOGGLE,
  };
};
