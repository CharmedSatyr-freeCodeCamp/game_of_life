import React from 'react';
import { shallow } from 'enzyme';

import Footer from '../Footer';

describe('<Footer /> component', () => {
  it('renders without crashing', () => {
    const footer = shallow(<Footer />);
    expect(footer.exists()).toBeTruthy();
  });
});
