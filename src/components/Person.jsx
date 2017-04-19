import React from 'react';
import $ from 'jquery';

class Person extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      alive: false,
      nextState: false,
      age: 0
    }
  }
  randomize() {
    let alive = Math.round(Math.random()) === 1
      ? true
      : false;
    (alive)
      ? this.setState({alive: alive, age: 1})
      : this.setState({alive: alive, age: 0});
    this.calculateNext.bind(this)
    this.renderNext.bind(this);
  }
  kill() {
    this.setState({alive: false, nextState: false, age: 0});
    this.calculateNext.bind(this)
    this.renderNext.bind(this);
  }
  isSelected(row, column) { //This is a function passed row and column inputs from calculateNext
    //Makes the world round
    let cols = this.props.cols;
    let rows = this.props.population.length/cols;

    if (row === -1)
      row = rows - 1;
    if (row === rows)
      row = 0;

    if (column === -1)
      column = cols - 1;
    if (column === cols)
      column = 0;

    let id = row * cols + column; //id adjusted for wrap

    //Simply returns whether the neighbor is alive
    return this.props.population[id].state.alive;
  }
  calculateNext() {
    let neighborsAlive = 0;
    let cols = this.props.cols; //Number of columns based on CSS.
    //Number of rows is this.props.population.length/cols

    let rowPosition = Math.floor(this.props.id / cols);
    let colPosition = this.props.id - (rowPosition * cols); //colPosition is id - how many to push it out of the way on its row
    //console.log('Hi, I\'m person ' + this.props.id + ', on row ' + rowPosition + ' and column ' + colPosition + '. Alive? ' + this.state.alive);

    //Detects how many living neighboring people each person has
    if (this.isSelected(rowPosition - 1, colPosition)) //Directly above
      neighborsAlive += 1
    if (this.isSelected(rowPosition - 1, colPosition + 1)) //Diagonal top right
      neighborsAlive += 1
    if (this.isSelected(rowPosition - 1, colPosition - 1)) //Diagonal top left
      neighborsAlive += 1

    if (this.isSelected(rowPosition, colPosition + 1)) //Etc.
      neighborsAlive += 1
    if (this.isSelected(rowPosition, colPosition - 1))
      neighborsAlive += 1

    if (this.isSelected(rowPosition + 1, colPosition))
      neighborsAlive += 1
    if (this.isSelected(rowPosition + 1, colPosition + 1))
      neighborsAlive += 1
    if (this.isSelected(rowPosition + 1, colPosition - 1))
      neighborsAlive += 1

      //Apply Conway's rules for The Game of Life
    if (this.state.alive) {
      if (neighborsAlive < 2)
        this.setState({nextState: false, age: 0});
      if (neighborsAlive > 3)
        this.setState({nextState: false, age: 0});

      if (neighborsAlive === 2 || neighborsAlive === 3) {
        switch (this.state.age) {
          case 1:
            this.setState({nextState: true, age: 2});
            break;
          case 2:
            this.setState({nextState: true, age: 3});
            break;
          case 3:
            this.setState({nextState: true, age: 4});
            break;
          case 4:
            this.setState({nextState: true, age: 5});
            break;
          case 5:
            this.setState({nextState: true, age: 6});
            break;
          case 6:
            this.setState({nextState: true, age: 7});
            break;
          case 7:
            this.setState({nextState: true, age: 8});
            break;
          case 8:
            this.setState({nextState: true, age: 9});
            break;
          case 9:
            this.setState({nextState: true, age: 10});
            break;
          default:
            this.setState({nextState: true, age: 10});
        }
      }

    } else if (neighborsAlive == 3) {
      this.setState({nextState: true, age: 1});
    }
  }
  renderNext() {
    this.setState({alive: this.state.nextState});
  }
  componentDidMount() {
    this.props.population[this.props.id] = this; //This line doesn't seem to be possible. Log it to see why.
    $(this.props.events).on("calculateNext", this.calculateNext.bind(this));
    $(this.props.events).on('renderNext', this.renderNext.bind(this));
    $(this.props.events).on('kill', this.kill.bind(this));
    $(this.props.events).on('randomize', this.randomize.bind(this));
  }
  color() {

    switch (this.state.age) {
      case 0:
        return 'person'
        break;
      case 1:
        return 'person alive'
        break;
      case 2:
        return 'person child'
        break;
      case 3:
        return 'person teen'
        break;
      case 4:
        return 'person adult'
        break;
      case 5:
        return 'person middle'
        break;
      case 6:
        return 'person advanced'
        break;
      case 7:
        return 'person elder'
        break;
      case 8:
        return 'person royalty'
        break;
      case 9:
        return 'person legend'
        break;
      case 10:
        return 'person deity'
        break;
      default:
        return 'person'
    }
  }
  onClick(e) {
    e.preventDefault();
    this.state.alive
      ? this.setState({age: 0})
      : this.setState({age: 1});
    this.setState({
      alive: !this.state.alive
    })
  }
  render() {
    return (<div className={this.color()} onClick={this.onClick.bind(this)}/>);
  }
}
export default Person;
