import React from 'react';
import { random } from 'faker';
import { configure, /* mount,*/ shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import Cell from '../Cell';

const { boolean, number } = random;
configure({ adapter: new Adapter() });

describe('<Cell /> component', () => {
  const props = { alive: boolean(), index: number(), toggle: jest.fn() };
  it('renders without crashing', () => {
    const cell = shallow(<Cell {...props} />);
    expect(cell.exists()).toBeTruthy();
  });
});
