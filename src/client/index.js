// Startup point for the client side application

import 'babel-polyfill';
import React, { Fragment } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { renderRoutes } from 'react-router-config';
import Routes from './Routes';

ReactDOM.hydrate(
  (
    <BrowserRouter>
      <Fragment>{renderRoutes(Routes)}</Fragment>
    </BrowserRouter>
  ),
  document.getElementById('root'),
);
