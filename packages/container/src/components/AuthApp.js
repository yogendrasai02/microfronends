import React, { useRef, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { mount } from 'auth/AuthApp';

export default function AuthApp() {
  const ref = useRef(null);

  const history = useHistory();

  // provide this element reference to the mount function
  // call the mount function only for the first component render
  useEffect(() => {
    const { onParentNavigate } = mount(ref.current, {
      onNavigate: (location) => {
        // console.log('Container noted navigation in marketing app');
        // console.log(location);
        const { pathname: nextPathname } = location;
        const { pathname: currentPathname } = history.location;
        if(currentPathname !== nextPathname) {
          history.push(nextPathname);
        }
      }
    });

    history.listen(onParentNavigate);

    // renders the marketing app into the below div, whose reference we provide as input
  }, []);

  return <div ref={ref}></div>;
}