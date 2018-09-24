import React, { Component } from 'react';
import { ControlsContainer, GenerationsContainer, GridContainer } from '../containers/Containers';
import Header from './Header';
import Footer from './Footer';

export default class App extends Component {
  render() {
    return (
      <div className="app">
        <Header />
        <main>
          <ControlsContainer />
          <GenerationsContainer />
          <GridContainer />
        </main>
        <Footer />
      </div>
    );
  }
}
