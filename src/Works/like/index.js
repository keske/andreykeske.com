import React from 'react';

export default () => (
  <div>
    <h1>Like</h1>
    <h2>Empire State Building</h2>
    <a href="http://www.andreykeske.com/upload/works/empire.andreykeske.com/index.html">
      <img
        src={require('./files/empire-state.jpg')}
        role="presentation"
      />
    </a>

    <br />

    <h2>Space invaders</h2>

    <a href="http://www.andreykeske.com/upload/works/spaceinvaders.andreykeske.com/index.html">
      <img
        src={require('./files/spaceinvaders.jpg')}
        role="presentation"
      />
    </a>
  </div>
);
