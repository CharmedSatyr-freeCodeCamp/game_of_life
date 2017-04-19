import React from 'react';

import Panel from './Panel.jsx';
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
      people: num,
      cols: 80 //Check _variables.scss width for value
    }
    for (let i = 0; i < 4000; i++) { //Check _variables.scss for i
      num.push(<Person key={i} id={i} population={num} events={events} cols={this.state.cols}/>);
    }

  }
  componentDidMount() {
    this.onClickRandom();
    this.onClickStart();
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
        <main>
          <Panel/>
          <div className='right'>
            <Field people={this.state.people}/>
            <Controls onClickStart={this.onClickStart.bind(this)} onClickPause={this.onClickPause.bind(this)} onClickRandom={this.onClickRandom.bind(this)} onClickClear={this.onClickClear.bind(this)}/>
          </div>
        </main>
    )
  }
}
//
export default App;
