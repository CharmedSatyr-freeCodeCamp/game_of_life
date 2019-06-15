import React from 'react';
import { random } from 'faker';
import { configure, /* mount,*/ shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import Cell from '../Cell';

const { boolean, number } = random;
configure({ adapter: new Adapter() });

describe('<Cell /> component', () => {
  const props = { index: number(), toggle: jest.fn() };

  it('renders without crashing', () => {
    props.alive = boolean();
    const cell = shallow(<Cell {...props} />);
    expect(cell.exists()).toBeTruthy();
  });

  it('should have class `cell alive` if its `alive` prop is `true`', () => {
    props.alive = true;
    const cell = shallow(<Cell {...props} />);
    expect(cell.find('.cell').exists()).toBeTruthy();
    expect(cell.find('.alive').exists()).toBeTruthy();
    expect(cell.find('.dead').exists()).toBeFalsy();
  });

  it('should have class `cell dead` if its `alive` prop is `false`', () => {
    props.alive = false;
    const cell = shallow(<Cell {...props} />);
    expect(cell.find('.cell').exists()).toBeTruthy();
    expect(cell.find('.dead').exists()).toBeTruthy();
    expect(cell.find('.alive').exists()).toBeFalsy();
  });

  describe('`toggle` method', () => {
    props.alive = boolean();
    const cell = shallow(<Cell {...props} />);

    it('should call `props.toggle` with `props.index` on click', () => {
      cell.simulate('click');
      expect(props.toggle).toHaveBeenCalledWith(props.index);
    });
  });
});
