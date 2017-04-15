import React from 'react';

import Person from './Person.jsx';
import Field from './Field.jsx';
import Footer from './Footer.jsx';

class App extends React.Component {
    constructor() {
        super();
        let num = [];
        for (let i = 0; i < 100; i++) {
            num.push(<Person key={i} id={i} population={num}/>);
        }
        this.state = {
            people: num
        }
    }
    onClickPerson(e) {
        this.setState({
            selected: !this.state.selected
        })

    }

    render() {
        return (
            <div>
                <header>
                    <h1>Hi</h1>
                </header>
                <main>
                    <Field people={this.state.people}/>
                </main>
                <Footer/>
            </div>
        )
    }
}

export default App;
