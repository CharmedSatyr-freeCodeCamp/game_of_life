import React, { Component } from 'react';

import { ControlsContainer, GridContainer } from './Containers';

export default class App extends Component {
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
