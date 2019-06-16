import React from 'react';
import { configure, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import renderer from 'react-test-renderer';

import Controls from '../Controls';

configure({ adapter: new Adapter() });

const raf = jest.spyOn(window, 'requestAnimationFrame');
const caf = jest.spyOn(window, 'cancelAnimationFrame');

describe('<Controls /> component', () => {
  const props = { clear: jest.fn(), makeGrid: jest.fn(), nextGen: jest.fn() };
  const controls = mount(<Controls {...props} />);
  const clear = controls.find('.clear');
  const pause = controls.find('.pause');
  const play = controls.find('.play');
  const random = controls.find('.random');
  const step = controls.find('.step');

  it('renders without crashing', () => {
    expect(controls.exists()).toBeTruthy();
  });

  it('renders correctly', () => {
    const tree = renderer.create(<Controls {...props} />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  describe('`Clear` button', () => {
    it('runs `clear` when state is not `clear`', () => {
      clear.simulate('click');
      expect(props.clear).toHaveBeenCalledTimes(1);
    });

    it('does nothing if state is `clear`', () => {
      clear.simulate('click');
      expect(props.clear).not.toHaveBeenCalledTimes(2);
    });

    it('cancels the animation frame for the component `requestID`', () => {
      expect(caf).toHaveBeenCalledTimes(1);
    });

    it('sets state to `clear`', () => {
      expect(controls.state('selected')).toBe('clear');
    });
  });

  describe('`Pause` button', () => {
    it('does nothing if state is `clear`, `pause`, or `random`', () => {
      expect(controls.state('selected')).toBe('clear');
      pause.simulate('click');
      expect(controls.state('selected')).toBe('clear');
    });

    it('calls `cancelAnimationFrame` on the component `requestID`', () => {
      play.simulate('click');
      pause.simulate('click');
      expect(caf).toHaveBeenCalledTimes(2);
    });

    it('sets state to `pause`', () => {
      expect(controls.state('selected')).toBe('pause');
    });
  });

  describe('`Play` button', () => {
    it('runs `nextGen` when clicked', () => {
      play.simulate('click');
      // Previously called in `renderer`, `componentDidMount` and `Pause` test
      expect(props.nextGen).toHaveBeenCalledTimes(4);
    });

    it('assigns a recursive `requestAnimationFrame` to the component as a `requestID`', () => {
      // Previously called in `renderer`, `componentDidMount` and `Pause` test
      expect(raf).toHaveBeenCalledTimes(4);
    });

    it('sets state to `play`', () => {
      expect(controls.state('selected')).toBe('play');
    });
  });

  describe('`Random` button', () => {
    it('calls `cancelAnimationFrame` on the component `requestID`', () => {
      random.simulate('click');
      expect(caf).toHaveBeenCalledTimes(3);
    });

    it('assigns a recursive `requestAnimationFrame` to the component as a `requestID`', () => {
      expect(props.makeGrid).toHaveBeenCalledTimes(1);
    });

    it('sets state to `random`', () => {
      expect(controls.state('selected')).toBe('random');
    });
  });

  describe('`Step` button', () => {
    it('does nothing if the state is `play`', () => {
      // Calls nextGen again (4x above -> 5x)
      play.simulate('click');
      // Does not call nextGen again (expect still 5x)
      step.simulate('click');
      expect(props.nextGen).toHaveBeenCalledTimes(5);
    });

    it('runs `nextGen` when clicked', () => {
      pause.simulate('click');
      step.simulate('click');
      expect(props.nextGen).toHaveBeenCalledTimes(6);
    });
  });
});
