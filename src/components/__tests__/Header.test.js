import React from 'react';
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import renderer from 'react-test-renderer';

import Header from '../Header';

configure({ adapter: new Adapter() });

describe('<Header /> component', () => {
  it('renders without crashing', () => {
    const header = shallow(<Header />);
    expect(header.exists()).toBeTruthy();
  });

  it('renders correctly', () => {
    const tree = renderer.create(<Header />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
