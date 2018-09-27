import * as at from '../constants/action-types';

const generation = (state = 0, action) => {
  switch (action.type) {
    case at.CLEAR:
      return 0;
    case at.MAKE_GRID:
      return 0;
    case at.NEXT_GEN:
      return state + 1;
    default:
      return state;
  }
};

export default generation;
