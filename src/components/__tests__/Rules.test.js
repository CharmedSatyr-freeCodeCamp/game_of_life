import React from 'react';
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import Rules from '../Rules';

configure({ adapter: new Adapter() });

describe('<Rules /> component', () => {
  it('renders without crashing', () => {
    const rules = shallow(<Rules />);
    expect(rules.exists()).toBeTruthy();
  });
});
