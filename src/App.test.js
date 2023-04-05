import React from 'react';
import * as ReactDOMClient from 'react-dom/client';
// import { createRoot } from 'react-dom/client';
// import ReactDom from 'react-dom';
import MainApp from './App';

it('renders without crashing', () => {
  const div = document.createElement('div')
  const root = ReactDOMClient.createRoot(div);
  root.render(<MainApp/>)
  root.unmount(div)
});
