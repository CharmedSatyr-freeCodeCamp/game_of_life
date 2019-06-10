import * as a from '../../constants/action-types';
import * as f from '../action-creators';

describe('`clear` action creator', () => {
  it('should return an object with a CLEAR type', () => {
    expect(f.clear().type).toBe(a.CLEAR);
  });
});

describe('`makeGrid` action creator', () => {
  it('should return an object with a MAKE_GRID type', () => {
    expect(f.makeGrid().type).toBe(a.MAKE_GRID);
  });
});

describe('`nextGen` action creator', () => {
  it('should return an object with a NEXT_GEN type', () => {
    expect(f.nextGen().type).toBe(a.NEXT_GEN);
  });
});

describe('`toggle` action creator', () => {
  it('should return an object with a TOGGLE type', () => {
    expect(f.toggle().type).toBe(a.TOGGLE);
  });

  it('should return an object with an `index` value equal to its `index` argument', () => {
    const i = Math.random();
    expect(f.toggle(i).index).toBe(i);
  });
});
