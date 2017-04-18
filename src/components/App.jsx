import React from 'react';

import Person from './Person.jsx';
import Field from './Field.jsx';
import Generations from './Generations.jsx';
import Controls from './Controls.jsx';
import $ from 'jquery';

let timer,
  events = {},
  num = [],
  alive = false,
  generationsCount;

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      people: num,
      generationsCount: generationsCount = 0
    }
  }
  componentWillMount() {
    for (let i = 0; i < 100; i++) {
      alive = Math.round(Math.random()) === 1
        ? true
        : false;
      num.push(<Person key={i} id={i} population={num} events={events} alive={alive}/>);
    }
  }
  onClickStart() {
    this.setState({
      generationsCount: generationsCount++ //This seems to be necessary on first start but not on resuming
    });
    timer = setInterval(() => {
      $(events).trigger('calculateNext');
      $(events).trigger('renderNext');
      this.setState({
        generationsCount: generationsCount++
      });
    }, 500);
  }
  onClickResume() {
    timer = setInterval(() => {
      $(events).trigger('calculateNext');
      $(events).trigger('renderNext');
      this.setState({
        generationsCount: generationsCount++
      });
    }, 500);
  }
  onClickPause() {
    clearInterval(timer);
  }
  onClickRandom() {
    console.log('lol so random');
  }
  onClickClear() {
    console.log('Clear!');
    this.setState({
      generationsCount: generationsCount = 0
    })
  }
  render() {
    return (
      <div>
        <header>
          <h1>John Conway's Game of Life</h1>
        </header>
        <main>
          <Generations generationsCount={this.state.generationsCount}/>
          <Field people={this.state.people}/>
          <Controls onClickStart={this.onClickStart.bind(this)} onClickResume={this.onClickResume.bind(this)} onClickPause={this.onClickPause.bind(this)} onClickRandom={this.onClickRandom.bind(this)} onClickClear={this.onClickClear.bind(this)}/>
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
