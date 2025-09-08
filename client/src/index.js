import React from 'react';
import ReactDOM from 'react-dom/client';
import Routes from './Routes'

const root = ReactDOM.createRoot(document.getElementById('app'));
root.render(
  <React.StrictMode>
    <Routes />
  </React.StrictMode>
);