import { random } from 'faker';

import * as at from '../../constants/action-types';
import generation from '../generation';

const { number } = random;

describe('`generation` reducer', () => {
  it('should have an initial state of `0`', () => {
    const initialState = 0;
    const action = { type: null };
    expect(generation(undefined, action)).toEqual(initialState);
  });

  it('should return state by default', () => {
    const state = number();
    const action = { type: null };
    expect(generation(state, action)).toEqual(state);
  });

  it('should return `0` on a `CLEAR` action', () => {
    const state = number();
    const cleared = 0;
    const action = { type: at.CLEAR };
    expect(generation(state, action)).toBe(cleared);
  });

  it('should return `0` on a `MAKE_GRID` action', () => {
    const state = number();
    const cleared = 0;
    const action = { type: at.MAKE_GRID };
    expect(generation(state, action)).toBe(cleared);
  });

  it('should return `state + 1` on a `NEXT_GEN` action', () => {
    const state = number();
    const nextState = state + 1;
    const action = { type: at.NEXT_GEN };
    expect(generation(state, action)).toBe(nextState);
  });
});

export default generation;
