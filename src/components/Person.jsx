import React from 'react';

class Person extends React.Component {
    constructor() {
        super();
        this.state = {
            selected: false,
            nextState: false
        }
    }
    onClick(e) {
        e.preventDefault();
        this.setState({
            selected: !this.state.selected
        })

    }
    render() {
        return (
          <div
            className={this.state.selected ? 'person active' : 'person'}
            onClick={this.onClick.bind(this)}
          />
        );
    }
}
export default Person;
