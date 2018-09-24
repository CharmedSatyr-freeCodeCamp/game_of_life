import React, { Component } from 'react';
import { ControlsContainer, GenerationsContainer, GridContainer } from '../containers/Containers';
import Header from './Header';
import Footer from './Footer';
import Rules from './Rules';

export default class App extends Component {
  render() {
    return (
      <div className="app">
        <Header />
        <main>
          <GenerationsContainer />
          <GridContainer />
          <ControlsContainer />
          <Rules />
        </main>
        <Footer />
      </div>
    );
  }
}
