import React from 'react';

const Controls = ({onClickStart, onClickPause}) => (
    <div>
        <button onClick={onClickStart}>Start</button>
        <button onClick={onClickPause}>Pause</button>
        <button>Random</button>
    </div>
);

export default Controls;
