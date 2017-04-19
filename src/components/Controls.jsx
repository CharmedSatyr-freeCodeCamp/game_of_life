import React from 'react';

const Controls = ({onClickStart, onClickPause, onClickRandom, onClickClear}) => (
    <div className='controls'>
        <button onClick={onClickStart}>Start</button>
        <button onClick={onClickPause}>Pause</button>
        <button onClick={onClickRandom}>Random</button>
        <button onClick={onClickClear}>Clear</button>
    </div>
);

export default Controls;
