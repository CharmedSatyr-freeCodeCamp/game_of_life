import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Cell from './Cell';
import * as c from './constants/constants';

export default class Grid extends Component {
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
            width: c.cellDimensions * c.gridWidth,
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
