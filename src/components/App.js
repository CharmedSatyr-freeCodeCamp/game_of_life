import React, { Component } from 'react';
import PropTypes from 'prop-types';

import Header from './Header';
import Generations from './Generations';
import Grid from './Grid';
import Controls from './Controls';
import Rules from './Rules';
import Footer from './Footer';

export default class App extends Component {
  render() {
    const { cellData, clear, generation, makeGrid, nextGen, toggle } = this.props;

    return (
      <div className="app">
        <Header />
        <main>
          <Generations generation={generation} />
          <Grid cellData={cellData} makeGrid={makeGrid} toggle={toggle} />
          <Controls clear={clear} makeGrid={makeGrid} nextGen={nextGen} />
          <Rules />
        </main>
        <Footer />
      </div>
    );
  }
}

App.propTypes = {
  cellData: PropTypes.arrayOf(PropTypes.bool).isRequired,
  clear: PropTypes.func.isRequired,
  generation: PropTypes.number.isRequired,
  makeGrid: PropTypes.func.isRequired,
  nextGen: PropTypes.func.isRequired,
  toggle: PropTypes.func.isRequired,
};
