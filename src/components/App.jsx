import React from 'react';

import Person from './Person.jsx';
import Field from './Field.jsx';
import Generations from './Generations.jsx';
import Controls from './Controls.jsx';
import $ from 'jquery';

let timer,
  events = {},
  num = [],
  alive;

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      people: num
    }
    for (let i = 0; i < 100; i++) {
      num.push(<Person key={i} id={i} population={num} events={events} alive={false}/>);
    }

  }
  onClickStart() {
    timer = setInterval(() => {
      $(events).trigger('calculateNext');
      $(events).trigger('renderNext');
    }, 200);
  }
  onClickPause() {
    clearInterval(timer);
  }
  onClickRandom() {
    $(events).trigger('randomize');
    clearInterval(timer);
  }
  onClickClear() {
    $(events).trigger('kill');
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
          <Controls onClickStart={this.onClickStart.bind(this)} onClickPause={this.onClickPause.bind(this)} onClickRandom={this.onClickRandom.bind(this)} onClickClear={this.onClickClear.bind(this)}/>
        </main>
        <br/>
        <footer>
          Coded by&nbsp;
          <a href='https://charmedsatyr.com/' target='_blank'>CharmedSatyr</a>
        </footer>
      </div>
    )
  }
}
export default App;
