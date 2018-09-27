import React from 'react';

import Header from './Header';
import GameWrapper from '../containers/GameWrapper';
import Rules from './Rules';
import Footer from './Footer';

const App = () => (
  <div className="app">
    <Header />
    <main>
      <Rules />
      <GameWrapper />
    </main>
    <Footer />
  </div>
);

export default App;
