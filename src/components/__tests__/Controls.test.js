import React from 'react';
import { configure, /* mount,*/ shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import Controls from '../Controls';

configure({ adapter: new Adapter() });

describe('<Controls /> component', () => {
  it('renders without crashing', () => {
    const props = { clear: jest.fn(), makeGrid: jest.fn(), nextGen: jest.fn() };
    const controls = shallow(<Controls {...props} />);
    expect(controls.exists()).toBeTruthy();
  });
});
