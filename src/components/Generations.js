import React from 'react';
import PropTypes from 'prop-types';

const Generations = ({ generation }) => (
  <div className="generations">
    <h1>
      Generation: <span className="num">{generation}</span>
    </h1>
  </div>
);

export default Generations;

Generations.propTypes = {
  generation: PropTypes.number.isRequired,
};
