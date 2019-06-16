import React from 'react';
import { random } from 'faker';
import { shallow } from 'enzyme';

import Generations from '../Generations';

const { number } = random;

describe('<Generations /> component', () => {
  it('renders without crashing', () => {
    const props = { generation: number() };
    const generations = shallow(<Generations {...props} />);
    expect(generations.exists()).toBeTruthy();
  });
});
