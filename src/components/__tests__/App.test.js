import React from 'react';
import { shallow } from 'enzyme';

import App from '../App';
import Header from '../Header';
import Game from '../Game';
import Footer from '../Footer';

let app;
beforeAll(() => {
  app = shallow(<App />);
});

describe('<App />', () => {
  it('renders without crashing', () => {
    expect(app.exists()).toBeTruthy();
  });

  it('contains an instance of <Header />', () => {
    expect(app.find(Header)).toHaveLength(1);
  });

  it('contains an instance of <Game />', () => {
    expect(app.find(Game)).toHaveLength(1);
  });

  it('contains an instance of <Footer />', () => {
    expect(app.find(Footer)).toHaveLength(1);
  });
});
