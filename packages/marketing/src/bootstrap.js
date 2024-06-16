import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

// mount function to start up the app
const mount = (el) => {
  ReactDOM.render(<App />, el);
};

// if in DEVELOPMENT & in ISOLATION, call mount immediately
if(process.env.NODE_ENV === 'development') {
  const devRoot = document.querySelector('div#_marketing-dev-root');
  if(devRoot) {
    mount(devRoot);
  }
}

// if running through CONTAINER, export mount
export { mount };