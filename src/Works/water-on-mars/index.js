import React from 'react';

const image = require('./files/water-on-mars.jpg');

export default () => (
  <div>
    <h1>Water On Mars</h1>
    <img alt="Water On Mars" src={image} role="presentation" />
  </div>
);
