import React from 'react';
import { mount } from 'marketing/MarketingApp';
import MarketingApp from './components/MarketingApp';

export default function App() {
  console.log('Container!');
  return (
    <>
      <h1>Container App!</h1>
      <hr />
      <MarketingApp />
    </>
  );
}