import React from 'react';
import ReactDOM from 'react-dom';
import { createMemoryHistory, createBrowserHistory } from 'history';
import App from './App';

// mount function to start up the app
const mount = (el, { onNavigate, defaultHistory, onSignIn, initialPath }) => {
  const history = defaultHistory || createMemoryHistory({
    initialEntries: [initialPath]
  });
  if(onNavigate) {
    history.listen(onNavigate);
  }
  ReactDOM.render(<App history={history} onSignIn={onSignIn} />, el);
  return {
    onParentNavigate: (location) => {
      console.log('Navigation occured in Parent app');
      const { pathname: nextPathname } = location;
      const { pathname: currentPathname } = history.location;
      if(currentPathname !== nextPathname) {
        history.push(nextPathname);
      }
    }
  };
};

// if in DEVELOPMENT & in ISOLATION, call mount immediately
if(process.env.NODE_ENV === 'development') {
  const devRoot = document.querySelector('div#_auth-dev-root');
  if(devRoot) {
    mount(devRoot, { defaultHistory: createBrowserHistory() });
  }
}

// if running through CONTAINER, export mount
export { mount };