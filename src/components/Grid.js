import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Cell from './Cell';
import * as c from '../constants/constants';

export default class Grid extends Component {
  componentDidMount() {
    this.props.makeGrid();
  }
  render() {
    const cells = this.props.cellData.map((c, i) => (
      <Cell
        key={i}
        alive={c.alive}
        coordinates={c.coordinates}
        toggle={this.props.toggle}
        index={i}
      />
    ));
    return (
      <div
        className="grid"
        style={{
          width: c.cellDimensions * c.gridWidth,
        }}
      >
        {cells}
      </div>
    );
  }
}

Grid.propTypes = {
  cellData: PropTypes.arrayOf(PropTypes.object).isRequired, // Already testing object shapes in Cell PropTypes
  makeGrid: PropTypes.func.isRequired,
  toggle: PropTypes.func.isRequired,
};
