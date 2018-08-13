import React from 'react';
// Styles
import s from './index.css';

export default () => (
  <div className={s.root}>
    <h1>
      Eco problems with water
    </h1>
    <p>
      Street instalation. The water filter in an unusual situation:
    </p>
    <div className={s.images}>
      <img
        alt="Eco problems with water"
        src={require('./files/top.jpg')}
        role="presentation"
      />
      <img
        alt="Eco problems with water"
        src={require('./files/right.jpg')}
        role="presentation"
      />
    </div>
  </div>
);
