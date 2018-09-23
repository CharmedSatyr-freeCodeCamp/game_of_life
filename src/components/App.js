import React, { Component } from 'react';
import { ControlsContainer, GridContainer } from './Containers';
import Header from './Header';
import Footer from './Footer';

export default class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <main>
          <ControlsContainer />
          <GridContainer />
        </main>
        <Footer />
      </div>
    );
  }
}
