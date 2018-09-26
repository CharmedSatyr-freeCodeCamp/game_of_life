import React, { Component } from 'react';

import Header from './Header';
import Generations from './Generations';
import Grid from './Grid';
import Controls from './Controls';
import Rules from './Rules';
import Footer from './Footer';

export default class App extends Component {
  render() {
    const { generation, cellData, clear, makeGrid, nextGen, toggle } = this.props;

    return (
      <div className="app">
        <Header />
        <main>
          <Generations generation={generation} />
          <Grid cellData={cellData} makeGrid={makeGrid} />
          <Controls clear={clear} makeGrid={makeGrid} nextGen={nextGen} toggle={toggle} />
          <Rules />
        </main>
        <Footer />
      </div>
    );
  }
}
