import React from 'react';
import { shallow } from 'enzyme';

import Rules from '../Rules';

describe('<Rules /> component', () => {
  it('renders without crashing', () => {
    const rules = shallow(<Rules />);
    expect(rules.exists()).toBeTruthy();
  });
});
