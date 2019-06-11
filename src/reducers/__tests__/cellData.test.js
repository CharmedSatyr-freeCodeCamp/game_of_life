import { random } from 'faker';

import * as at from '../../constants/action-types';
import * as u from '../cellData.utils';
import cellData from '../cellData';

const populate = jest.spyOn(u, 'populateCells');
const clear = jest.spyOn(u, 'clearCells');

const { boolean } = random;

describe('`cellData` reducer', () => {
  it('should have an initial state of an empty array', () => {
    const empty = [];
    const action = { type: null };
    expect(cellData(undefined, action)).toEqual(empty);
  });

  it('should return state by default', () => {
    const state = [boolean(), boolean(), boolean()];
    const action = { type: null };
    expect(cellData(state, action)).toEqual(state);
  });

  it('should return the result of `clearCells` on a `CLEAR` action', () => {
    const state = [boolean(), boolean(), boolean()];
    const action = { type: at.CLEAR };
    expect(cellData(state, action)).toEqual(u.clearCells());
  });

  it('should return the result of `populateCells(clearCells())` on a `MAKE_GRID` action', () => {
    const state = [boolean(), boolean(), boolean()];
    const action = { type: at.MAKE_GRID };
    cellData(state, action);

    expect(clear).toHaveBeenCalled();
    expect(populate).toHaveBeenCalledWith(clear());
  });

  it('should return state with the indicated index at the opposite value on a `TOGGLE` action', () => {
    const zero = boolean();
    const one = boolean();
    const two = boolean();
    const state = [zero, one, two];
    const action = { index: 1, type: at.TOGGLE };
    const result = [zero, !one, two];
    expect(cellData(state, action)).toEqual(result);
  });
});
