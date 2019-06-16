import React from 'react';
import { configure, /* mount,*/ shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import Header from '../Header';

configure({ adapter: new Adapter() });

describe('<Header /> component', () => {
  it('renders without crashing', () => {
    const header = shallow(<Header />);
    expect(header.exists()).toBeTruthy();
  });
});
