import React from 'react';
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import configureMockStore from 'redux-mock-store';

import App from '../App';
import Header from '../Header';
import Game from '../Game';
import Footer from '../Footer';

configure({ adapter: new Adapter() });

const initialState = {
  generation: 0,
  cellData: [],
};

const mockStore = configureMockStore();
let store;
let app;
beforeAll(() => {
  store = mockStore(initialState);
  app = shallow(<App />);
});

describe('<App />', () => {
  it('renders without crashing', () => {
    expect(app.exists()).toBeTruthy();
  });

  xit('contains an instance of <Header />', () => {
    const header = shallow(<Header />);
    expect(app.find(header)).toHaveLength(1);
  });

  xit('contains an instance of <Game />', () => {
    const game = shallow(<Game store={store} />);
    expect(app.find(game)).toHaveLength(1);
  });

  xit('contains an instance of <Footer />', () => {
    const footer = shallow(<Footer />);
    expect(app.find(footer)).toHaveLength(1);
  });
});
