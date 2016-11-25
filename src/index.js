import React from 'react';
import ReactDOM from 'react-dom';

// Components
import Root from 'components/Root';

let initialState;
try {
  initialState = window.__INITIAL_STATE__;
} catch (err) {
  initialState = {};
}

if (__CLIENT__) {
  ReactDOM.render(
    <Root />,
    document.getElementById('root'),
  );
}
