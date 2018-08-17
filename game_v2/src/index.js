import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { connect, Provider } from 'react-redux';
import { createStore } from 'redux';
import PropTypes from 'prop-types';

/*** REDUX ***/
// Action Types
const CLEAR = 'CLEAR';
const MAKE_GRID = 'MAKE_GRID';
const NEXT_GEN = 'NEXT_GEN';
const TOGGLE = 'TOGGLE';

// Action Creators
const clear = () => {
  return {
    type: CLEAR,
  };
};

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

const toggle = index => {
  return {
    index,
    type: TOGGLE,
  };
};

// Constants
const gridHeight = 20;
const gridWidth = 30;
const cellDimensions = 30; // Cell height and width in pixels

// Reducers
// Reducer Functions
// Create an array of objects with default cell properties
const makeCells = (height = gridHeight, width = gridWidth) => {
  const cells = [];
  let index = 0;
  for (let i = 0; i < height; i++) {
    let y = i;
    for (let j = 0; j < width; j++) {
      let x = j;
      const coordinates = { x, y };
      cells.push({ alive: false, coordinates, index });
      index++;
    }
  }
  return cells;
};

// Randomize the `alive` properties of objects in a given array of cells
const randomizeLife = arr => {
  const clone = [...arr];
  clone.forEach(c => {
    c.alive = Math.random() > 0.8 ? true : false;
  });
  return clone;
};

// Count how many of a given cell's neighbors are alive
const neighborsAlive = (array, idx, width = gridWidth, height = gridHeight) => {
  // console.log('INDEX:', idx);
  // Helper functions
  const findN = idx =>
    array[idx - width] && array[idx - width].coordinates.x === array[idx].coordinates.x
      ? array[idx - width].index
      : array[idx + width * (height - 1)].index;
  const findE = idx =>
    array[idx + 1] && array[idx + 1].coordinates.y === array[idx].coordinates.y
      ? array[idx + 1].index
      : array[idx - width + 1].index;

  const findS = idx =>
    array[idx + width] && array[idx + width].coordinates.x === array[idx].coordinates.x
      ? array[idx + width].index
      : array[idx - width * (height - 1)].index;

  const findW = idx =>
    array[idx - 1] && array[idx - 1].coordinates.y === array[idx].coordinates.y
      ? array[idx - 1].index
      : array[idx + width - 1].index;

  // Indices of the cell's eight neighbors
  const nw = findN(findW(idx));
  console.log('nw:', nw);
  const n = findN(idx);
  console.log('n:', n);
  const ne = findN(findE(idx));
  console.log('ne:', ne);
  const e = findE(idx);
  console.log('e:', e);
  const se = findS(findE(idx));
  console.log('se:', se);
  const s = findS(idx);
  console.log('s:', s);
  const sw = findS(findW(idx));
  console.log('sw:', sw);
  const w = findW(idx);
  console.log('w:', w);

  // Return a count of how many neighbors are alive
  return [nw, n, ne, e, se, s, sw, w].filter(n => array[n].alive).length;
};

// Advance objects in an array of cells by one generation based on neighbors' `alive` values
const advance = arr => {
  const clone = [...arr];
  clone.forEach((c, i) => {
    // If the current cell is alive in the original array
    const alive = arr[i].alive;

    // Count how many neighbors are alive
    const count = neighborsAlive(arr, i);

    // Apply Conway's Rules
    if (alive && count < 2) {
      c.alive = false;
    }

    if ((alive && count === 2) || (alive && count === 3)) {
      c.alive = true;
    }

    if (alive && count > 3) {
      c.alive = false;
    }

    if (!alive && count === 3) {
      c.alive = true;
    }
  });

  // Return the new cellData
  return clone;
};

// Grid Reducer
const initialState = {
  generation: 0,
  cellData: [],
};
const gridReducer = (state = initialState, action) => {
  switch (action.type) {
    case CLEAR:
      return Object.assign({}, state, { generation: 0, cellData: makeCells() });
    case MAKE_GRID:
      return Object.assign({}, state, {
        generation: 0,
        cellData: randomizeLife(makeCells()),
      });
    case NEXT_GEN:
      return Object.assign({}, state, {
        generation: state.generation + 1,
        cellData: advance(state.cellData),
      });
    // case TOGGLE:
    //   const clone = [...state.cellData];
    //   state.cellData[action.index].alive
    //     ? (clone[action.index].alive = false)
    //     : (clone[action.index].alive = true);
    // careturn Object.assign({}, state, { cellData: clone });
    case TOGGLE: // test
      console.log(neighborsAlive(state.cellData, action.index));
      return state;
    default:
      return state;
  }
};

// Store
const store = createStore(gridReducer);

/*** REACT ***/
class Cell extends Component {
  constructor(props) {
    super(props);
    this.toggle = this.toggle.bind(this);
  }
  toggle() {
    this.props.toggle(this.props.index);
  }
  render() {
    return (
      <div
        style={{
          backgroundColor: this.props.alive ? 'gold' : 'lightblue',
          boxShadow: '0 0 1px black',
          fontSize: 10,
          height: cellDimensions,
          width: cellDimensions,
        }}
        onClick={this.toggle}
      >
        {this.props.index}
      </div>
    );
  }
}

Cell.propTypes = {
  alive: PropTypes.bool.isRequired,
  index: PropTypes.number.isRequired,
  toggle: PropTypes.func.isRequired,
};

class Grid extends Component {
  componentDidMount() {
    this.props.makeGrid();
  }
  render() {
    const cells = this.props.cellData.map(c => (
      <Cell
        key={c.index}
        alive={c.alive}
        coordinates={c.coordinates}
        toggle={this.props.toggle}
        index={c.index}
      />
    ));
    return (
      <div>
        <h1>{this.props.generation}</h1>
        <div
          style={{
            boxShadow: '0 0 1px black',
            display: 'flex',
            flexWrap: 'wrap',
            width: cellDimensions * gridWidth,
          }}
        >
          {cells}
        </div>
      </div>
    );
  }
}

Grid.propTypes = {
  cellData: PropTypes.arrayOf(PropTypes.object).isRequired, // Already testing object shapes in Cell PropTypes
  generation: PropTypes.number.isRequired,
  makeGrid: PropTypes.func.isRequired,
  toggle: PropTypes.func.isRequired,
};

class Controls extends Component {
  constructor(props) {
    super(props);
    this.clear = this.clear.bind(this);
    this.makeGrid = this.makeGrid.bind(this);
    this.start = this.start.bind(this);
  }
  clear() {
    this.props.clear();
  }
  makeGrid() {
    this.props.makeGrid();
  }
  start() {
    this.props.nextGen();
  }
  render() {
    return (
      <div>
        <button onClick={this.start}>Start</button>
        <button>Stop</button>
        <button onClick={this.clear}>Clear</button>
        <button onClick={this.makeGrid}>Randomize</button>
      </div>
    );
  }
}

Controls.propTypes = {
  clear: PropTypes.func.isRequired,
  makeGrid: PropTypes.func.isRequired,
  nextGen: PropTypes.func.isRequired,
};

/*** REACT-REDUX ***/
const mapStateToProps = state => {
  return {
    generation: state.generation,
    cellData: state.cellData,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    clear: () => dispatch(clear()),
    makeGrid: () => dispatch(makeGrid()),
    nextGen: () => dispatch(nextGen()),
    toggle: index => dispatch(toggle(index)),
  };
};

const GridContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Grid);

const ControlsContainer = connect(
  null,
  mapDispatchToProps
)(Controls);

/*** COMPONENT WRAPPER ***/
class App extends Component {
  render() {
    return (
      <div>
        <h1>Game of Life</h1>
        <ControlsContainer />
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
