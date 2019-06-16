import React from 'react';
import { random } from 'faker';
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import Generations from '../Generations';

const { number } = random;

configure({ adapter: new Adapter() });

describe('<Generations /> component', () => {
  const props = { generation: number() };

  it('renders without crashing', () => {
    const generations = shallow(<Generations {...props} />);
    expect(generations.exists()).toBeTruthy();
  });
});
