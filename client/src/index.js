// @flow
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Router from './Router';

ReactDOM.render(
  <App Router={Router} />,
  // $FlowFixMe
  document.getElementById('root')
);
