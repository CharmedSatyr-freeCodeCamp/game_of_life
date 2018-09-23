import React, { Component } from 'react';
import { ControlsContainer, GridContainer } from '../containers/Containers';
import Header from './Header';
import Footer from './Footer';

export default class App extends Component {
  render() {
    return (
      <div className="app">
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
