import React from 'react';

const Rules = () => (
  <div className="rules">
    <h2>Rules</h2>
    <ol>
      <li>
        Any live cell with fewer than two live neighbours dies, as if caused by underpopulation.
      </li>
      <li>Any live cell with two or three live neighbours lives on to the next generation.</li>
      <li>Any live cell with more than three live neighbours dies, as if by overpopulation.</li>
      <li>
        Any dead cell with exactly three live neighbours becomes a live cell, as if by reproduction.
      </li>
    </ol>
    <p>
      Learn more{' '}
      <a
        href="https://en.wikipedia.org/wiki/Conway's_Game_of_Life"
        rel="noopener noreferrer"
        target="_blank"
      >
        here
      </a>
      .
    </p>
  </div>
);

export default Rules;
