import React from 'react';
import G from '../img/G.png';

const Panel = () => (
  <aside className='panel'>
    <div>
      <h1>
        <a href='https://www.math.cornell.edu/~lipa/mec/lesson6.html'>Conway's Game of Life</a>
      </h1>
      <h4>a zero-player cellular automaton
        <br/>
      </h4>
    </div>
    <br/>
    <div>
      <h4>Rules</h4>
      <ol>
        <li>
          Any live cell with fewer than two live neighbours dies, as if caused by underpopulation.
        </li>
        <li>
          Any live cell with two or three live neighbours lives on to the next generation.
        </li>
        <li>
          Any live cell with more than three live neighbours dies, as if by overpopulation.
        </li>
        <li>
          Any dead cell with exactly three live neighbours becomes a live cell, as if by reproduction.
        </li>
      </ol>
    </div>
    <br/>
    <br/>
    <div className='credits'>
      <h6>
        Designed and built by&nbsp;
        <a rel='noopener' href='https://CharmedSatyr.com'>CharmedSatyr</a>&nbsp;
        <a rel='noopener' href='https://github.com/CharmedSatyr/game_of_life/' target='_blank'>
          <img src={G} alt='GitHub icon'/>
        </a>.&nbsp;Source code available under&nbsp;
        <a rel='noopener' href='https://github.com/CharmedSatyr/game_of_life/blob/master/LICENSE' target='_blank'>GNU Public License v3.0</a>.
      </h6>
    </div>
  </aside>
);

export default Panel;
