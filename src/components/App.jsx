import React from 'react';
import $ from 'jquery';

import Controls from './Controls.jsx';
import Field from './Field.jsx';
import Generations from './Generations.jsx';
import Cell from './Cell.jsx';

let timer,
  events = {},
  cellArr = [],
  cellNum = 4000, //Must match _variables.scss value for cells-tall * cells-wide
  colNum = 80; //Must match _variables.scss val for for cells-wide

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      generationsCount: 0 //Poor useless state
    }
  }
  componentWillMount() {
    for (let i = 0; i < cellNum; i++) { //Must match _variables.scss val for i
      cellArr.push(<Cell key={i} id={i} population={cellArr} events={events} cols={colNum}/>);
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
      $(events).trigger('increment'); //generationsCount hotfix
      /*
      //this actually works
      this.setState({
        generationsCount: ++this.state.generationsCount
      });
      */
    }, 500);
  }
  onClickPause() {
    clearInterval(timer);
  }
  onClickRandom() {
    $(events).trigger('randomize'); //I actually think I used this as a hotfix too but it was early
    $(events).trigger('reset'); //generationsCount hotfix
    clearInterval(timer);
    //    this.setState({generationsCount: 0}); //This line is breaking!
  }
  onClickClear() {
    $(events).trigger('kill'); //I actually think I used this as a hotfix too but it was early
    $(events).trigger('reset'); //generationsCount hotfix
    clearInterval(timer);
    //    this.setState({generationsCount: 0}); //This line is breaking!
  }

  render() {
    //Note that placement of Generations does affect whether the app works without the Generations hotfix
    return (
      <div>
        <Controls onClickStart={this.onClickStart.bind(this)} onClickPause={this.onClickPause.bind(this)} onClickRandom={this.onClickRandom.bind(this)} onClickClear={this.onClickClear.bind(this)}/>
        <Generations events={events}/>
        <Field cells={cellArr}/>
      </div>
    )
  }
}

export default App;
