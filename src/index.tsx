import * as React from 'react';

import { StrictMode } from 'react';
import ReactDOM from 'react-dom';

// Styles
import 'bootstrap/dist/css/bootstrap.min.css';
import './static/fonts/Inter/inter.css';
import './index.css';

import App from './App';

import * as serviceWorker from './serviceWorker';

ReactDOM.render(
  <StrictMode>
    <App />
  </StrictMode>,
  document.getElementById('root'),
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
