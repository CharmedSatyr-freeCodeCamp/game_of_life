import React from 'react';
import Person from './Person.jsx';

const Row = ({people}) => (
    <div className='row'>
    {
    people.map(function(object, i) {
      return <Person/>
    })
    }
    </div>
)

export default Row;
