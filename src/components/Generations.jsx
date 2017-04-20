import React from 'react';
import $ from 'jquery';

/*
* There is NO REASON this should be a stateful component except that
* I am recursively passing num as a prop to each cell in num, which
* breaks everything in the world. (See App.jsx)
*/

class Generations extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      gens: 0
    }
  }
  increment() {
    this.setState({
      gens: ++this.state.gens
    });
  }
  reset() {
    this.setState({
      gens: 0
    });
  }
  componentDidMount() {
    $(this.props.events).on('increment', this.increment.bind(this));
    $(this.props.events).on('reset', this.reset.bind(this));
  }
  render() {
    return (
      <div className='generations'>
        Generations: {this.state.gens}
      </div>
    );
  }
}
export default Generations;
