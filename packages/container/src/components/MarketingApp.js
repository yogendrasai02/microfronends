import React, { useRef, useEffect } from 'react';
import { mount } from 'marketing/MarketingApp';

export default function MarketingApp() {
  const ref = useRef(null);

  // provide this element reference to the mount function
  // call the mount function only for the first component render
  useEffect(() => {
    mount(ref.current);
    // renders the marketing app into the below div, whose reference we provide as input
  }, []);

  return <div ref={ref}></div>;
}