import React from 'react';
import Row from './Row.jsx';

const Table = ({people, rows}) => (
    <div className='column'>
        {rows.map(function(object, i) {
            return <Row people={people}/>
            })
        }

    </div>
)

export default Table;
