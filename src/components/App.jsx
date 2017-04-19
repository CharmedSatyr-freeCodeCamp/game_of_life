import React from 'react';
import $ from 'jquery';

import Controls from './Controls.jsx';
import Field from './Field.jsx';
import Generations from './Generations.jsx';
import Cell from './Cell.jsx';

let timer,
  events = {},
  num = [];

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      cells: num,
      cols: 80, //Check _variables.scss for value
      generationsCount: 0
    }
    for (let i = 0; i < 4000; i++) { //Check _variables.scss for i
      num.push(<Cell key={i} id={i} population={num} events={events} cols={this.state.cols}/>);
    }

  }
  componentDidMount() {
    this.onClickRandom();
  }
  onClickStart() {
    timer = setInterval(() => {
      $(events).trigger('calculateNext');
      $(events).trigger('renderNext');
    }, 100);
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
        <Field cells={this.state.cells}/>
        <Controls onClickStart={this.onClickStart.bind(this)} onClickPause={this.onClickPause.bind(this)} onClickRandom={this.onClickRandom.bind(this)} onClickClear={this.onClickClear.bind(this)}/>
        <Generations generationsCount={this.state.generationsCount}/>
      </div>
    )
  }
}

export default App;
