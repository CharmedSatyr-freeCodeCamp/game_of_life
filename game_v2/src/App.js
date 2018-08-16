import React, { Component } from 'react';

const hw = 20; // Cell height and width
class Cell extends Component {
  constructor(props) {
    super(props);
    this.state = { alive: false };
    this.toggleAlive = this.toggleAlive.bind(this);
  }
  toggleAlive() {
    this.setState({ alive: this.state.alive ? false : true });
  }
  render() {
    return (
      <div
        onClick={this.toggleAlive}
        style={{
          backgroundColor: this.state.alive ? 'gold' : 'lightblue',
          boxShadow: '0 0 1px black',
          width: hw,
          fontSize: 4,
          height: hw,
        }}
      >
        {this.props.idx}
      </div>
    );
  }
}

const makeCells = num => {
  const cells = [];
  for (let i = 0; i < num; i++) {
    cells.push(<Cell key={i} idx={i} alive={false} />);
  }
  return cells;
};

class Grid extends Component {
  componentDidMount() {}
  render() {
    return (
      <div style={{ boxShadow: '0 0 1px black', display: 'flex', flexWrap: 'wrap', width: 500 }}>
        {makeCells(400)}
      </div>
    );
  }
}

class App extends Component {
  render() {
    return <Grid />;
  }
}

export default App;
