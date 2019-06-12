import React from 'react';
import { random } from 'faker';
import { configure, /* mount,*/ shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import Game from '../Game';

const { boolean, number } = random;
configure({ adapter: new Adapter() });

describe('<Game /> component', () => {
  it('renders without crashing', () => {
    const props = {
      cellData: [boolean(), boolean(), boolean()],
      clear: jest.fn(),
      generation: number(),
      makeGrid: jest.fn(),
      nextGen: jest.fn(),
      toggle: jest.fn(),
    };
    const game = shallow(<Game {...props} />);
    expect(game.exists()).toBeTruthy();
  });
});
