import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

// container DOES NOT need mount function, as the container should show the UI immediately
ReactDOM.render(<App />, document.querySelector('div#root'));