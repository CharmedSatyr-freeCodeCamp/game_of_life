import React from 'react';
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import renderer from 'react-test-renderer';

import Footer from '../Footer';

configure({ adapter: new Adapter() });

describe('<Footer /> component', () => {
  it('renders without crashing', () => {
    const footer = shallow(<Footer />);
    expect(footer.exists()).toBeTruthy();
  });

  it('renders correctly', () => {
    const tree = renderer.create(<Footer />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
