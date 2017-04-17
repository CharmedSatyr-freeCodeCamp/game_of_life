import React from 'react';

import Person from './Person.jsx';
import Field from './Field.jsx';
import Controls from './Controls.jsx';
import $ from 'jquery';

let timer,
  events = {};
const run = () => {
  $(events).trigger('calculateNext');
  $(events).trigger('renderNext');
}

class App extends React.Component {
  constructor(props) {
    super(props);
    let num = [];
    for (let i = 0; i < 100; i++) {
      num.push(<Person key={i} id={i} population={num} events={events}/>);
    }
    this.state = {
      people: num
    }
  }
  onClickStart() {
    timer = setInterval(run, 2000);
  }
  onClickPause() {
    clearInterval(timer);
  }
  render() {
    return (
      <div>
        <header>
          <h1>John Conway's Game of Life</h1>
        </header>
        <main>
          <Field people={this.state.people}/>
          <Controls onClickStart={this.onClickStart.bind(this)} onClickPause={this.onClickPause.bind(this)}/>
        </main>
        <br/>
        <footer>
          Coded by
          <a href='https://charmedsatyr.com/' target='_blank'>CharmedSatyr</a>
        </footer>
      </div>
    )
  }
}

export default App;
