import React from 'react';

import Footer from './Footer.jsx';
import Row from './Row.jsx';
import Table from './Table.jsx';

class App extends React.Component {

    constructor() {
        super();
        this.state = {
            people: [1,2,3,10,10,3,2,323,2,2,2,2,2,2,2,2,2,2,2,5,5,5,5,5,5,5,5,23,232,3,23,232,3,23,2,23,23],
            rows: [1, 2, 3, 5, 6, 12, 3, 44, 53]
        }
    }
    render() {
        return (
            <div>
                <header>
                    <h1>Hi</h1>
                </header>
                <main>
                    <Table people ={this.state.people} rows={this.state.rows}/>
                </main>
                <Footer/>
            </div>
        )
    }
}

export default App;
