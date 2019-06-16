import React from 'react';

import Header from './Header';
import Game from './Game';
import Rules from './Rules';
import Footer from './Footer';

const App = () => (
  <div className="app">
    <Header />
    <main>
      <Rules />
      <Game />
    </main>
    <Footer />
  </div>
);

export default App;
