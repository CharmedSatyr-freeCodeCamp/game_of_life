import React from 'react';
import { random } from 'faker';
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import Grid from '../Grid';

const { boolean } = random;
configure({ adapter: new Adapter() });

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
