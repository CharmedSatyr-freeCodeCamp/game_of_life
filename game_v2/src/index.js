import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { connect, Provider } from 'react-redux';
import { createStore } from 'redux';

// Redux
const makeCells = (height, width) => {
  let index = 0;
  const cells = [];
  for (let i = 0; i < height; i++) {
    let y = i;
    for (let j = 0; j < width; j++) {
      let x = j;
      const coordinates = { x, y };
      cells.push(
        <Cell key={index} alive={Math.random() > 0.95 ? true : false} coordinates={coordinates} />
      );
      index++;
    }
  }
  return cells;
};

const MAKE_GRID = 'MAKE_GRID';
const NEXT_GEN = 'NEXT_GEN';

const makeGrid = () => {
  return {
    type: MAKE_GRID,
  };
};

const nextGen = () => {
  return {
    type: NEXT_GEN,
  };
};

const gridReducer = (state = [], action) => {
  switch (action.type) {
    case MAKE_GRID:
      return makeCells(20, 20);
    case NEXT_GEN:
      return state;
    default:
      return state;
  }
};

const store = createStore(gridReducer);

// React
const hw = 30; // Cell height and width
class Cell extends Component {
  render() {
    return (
      <div
        style={{
          backgroundColor: this.props.alive ? 'gold' : 'lightblue',
          boxShadow: '0 0 1px black',
          fontSize: 10,
          height: hw,
          width: hw,
        }}
      >
        {this.props.coordinates.x}, {this.props.coordinates.y}
      </div>
    );
  }
}

class Grid extends Component {
  componentDidMount() {
    this.props.makeGrid();
  }
  render() {
    return (
      <div
        style={{ boxShadow: '0 0 1px black', display: 'flex', flexWrap: 'wrap', width: hw * 20 }}
      >
        {this.props.grid}
      </div>
    );
  }
}

// React-Redux
const mapStateToProps = state => {
  return {
    grid: state,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    makeGrid: () => dispatch(makeGrid()),
    nextGen: () => dispatch(nextGen()),
  };
};

const GridContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Grid);

// Wrapper
class App extends Component {
  render() {
    return (
      <div>
        <h1>This is terrific.</h1>
        <GridContainer />
      </div>
    );
  }
}

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
