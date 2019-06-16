import React from 'react';
import { random } from 'faker';
import { shallow } from 'enzyme';

import Grid from '../Grid';

const { boolean } = random;

describe('<Grid /> component', () => {
  it('renders without crashing', () => {
    const props = {
      cellData: [boolean(), boolean(), boolean()],
      makeGrid: jest.fn(),
      toggle: jest.fn(),
    };
    const grid = shallow(<Grid {...props} />);
    expect(grid.exists()).toBeTruthy();
  });
});
