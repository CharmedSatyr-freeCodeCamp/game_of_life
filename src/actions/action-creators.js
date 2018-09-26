import * as a from '../constants/action-types';

// Action Creators
export const clear = () => ({ type: a.CLEAR });
export const makeGrid = () => ({ type: a.MAKE_GRID });
export const nextGen = () => ({ type: a.NEXT_GEN });
export const toggle = index => ({ index, type: a.TOGGLE });
