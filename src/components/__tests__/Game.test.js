import React from 'react';
import { random } from 'faker';
import { configure, mount } from 'enzyme';
import configureMockStore from 'redux-mock-store';
import Adapter from 'enzyme-adapter-react-16';

import * as a from '../../actions/action-creators';
import Game from '../Game';
import Generations from '../Generations';
import Grid from '../Grid';
import Controls from '../Controls';

const { boolean, number } = random;
configure({ adapter: new Adapter() });

const initialState = {
  cellData: [boolean(), boolean(), boolean()],
  clear: jest.fn(),
  generation: number(),
  makeGrid: jest.fn(),
  nextGen: jest.fn(),
  toggle: jest.fn(),
};

const mockStore = configureMockStore();
const store = mockStore(initialState);

let game;

beforeAll(() => {
  game = mount(<Game store={store} />);
});

describe('<Game /> component (integration)', () => {
  it('renders without crashing', () => {
    expect(game.exists()).toBeTruthy();
  });

  describe('<Generations /> component integration', () => {
    it('contains an instance of <Generations /> component', () => {
      expect(game.find(Generations)).toHaveLength(1);
    });

    it('passes `generation` to <Generations />', () => {
      const generation = game.find(Generations).props().generation;
      expect(generation).toEqual(initialState.generation);
    });
  });

  describe('<Grid /> component integration', () => {
    it('contains an instance of <Grid /> component', () => {
      expect(game.find(Grid)).toHaveLength(1);
    });

    it('passes the `makeGrid` action creator to <Grid />', () => {
      const action = game
        .find(Grid)
        .props()
        .makeGrid();
      expect(action).toEqual(a.makeGrid());
    });

    it('passes the `toggle` action creator to <Grid />', () => {
      const action = game
        .find(Grid)
        .props()
        .toggle();
      expect(action).toEqual(a.toggle());
    });
  });

  describe('<Controls /> component integration', () => {
    it('contains an instance of <Controls /> component', () => {
      expect(game.find(Controls)).toHaveLength(1);
    });

    it('passes the `clear` action creator to <Controls />', () => {
      const action = game
        .find(Controls)
        .props()
        .clear();
      expect(action).toEqual(a.clear());
    });

    it('passes the `makeGrid` action creator to <Controls />', () => {
      const action = game
        .find(Controls)
        .props()
        .makeGrid();
      expect(action).toEqual(a.makeGrid());
    });

    it('passes the `nextGen` action creator to <Controls />', () => {
      const action = game
        .find(Controls)
        .props()
        .nextGen();
      expect(action).toEqual(a.nextGen());
    });
  });
});
