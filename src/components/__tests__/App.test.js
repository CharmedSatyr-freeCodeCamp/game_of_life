import React from 'react';
import { configure, /* mount,*/ shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import configureMockStore from 'redux-mock-store';

import App from '../App';
import Header from '../Header';
import GameWrapper from '../../containers/GameWrapper';
import Footer from '../Footer';

configure({ adapter: new Adapter() });

// Containers
// const mapDispatchToProps = dispatch => ({
//   clear: () => dispatch(ac.clear()),
//   makeGrid: () => dispatch(ac.makeGrid()),
//   nextGen: () => dispatch(ac.nextGen()),
//   toggle: index => dispatch(ac.toggle(index)),
// });

const initialState = {
  generation: 0,
  cellData: [],
};

const mockStore = configureMockStore();
let store;
let app;
beforeEach(() => {
  app = shallow(<App />);
  store = mockStore(initialState);
});

describe('<App />', () => {
  it('renders without crashing', () => {
    expect(app.exists()).toBeTruthy();
  });

  xit('contains an instance of <Header />', () => {
    const header = shallow(<Header />);
    expect(app.find(header)).toHaveLength(1);
  });

  xit('contains an instance of <GameWrapper />', () => {
    const gameWrapper = shallow(<GameWrapper store={store} />);
    expect(app.find(gameWrapper)).toHaveLength(1);
  });

  xit('contains an instance of <Footer />', () => {
    const footer = shallow(<Footer />);
    expect(app.find(footer)).toHaveLength(1);
  });
});
