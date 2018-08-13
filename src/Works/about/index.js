import React from 'react';

import './index.css';

const photo = require('./files/me.jpg');

export default () => (
  <div className="about">
    <img
      alt="Andrey"
      src={photo}
      className="photo"
      role="presentation"
    />
    <p>
      Andrey Keske <i> &mdash; Coder, Designer and Hacker</i>
    </p>
    <p>
      <a href="mailto:hello@andreykeske.com">
        hello@andreykeske.com
      </a>
      <a href="https://github.com/keske">
        Github
      </a>
      <a href="https://www.facebook.com/andrey.keske">
        Facebook
      </a>
      <a href="https://instagram.com/andreykeske/">
        Instagram
      </a>
    </p>
  </div>
);
