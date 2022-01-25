import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import ThemedApp from './theme/Theme';

ReactDOM.render(
    <React.StrictMode>
        {ThemedApp()}
    </React.StrictMode>,
    document.getElementById('root')
);
