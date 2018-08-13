import React from 'react';

import './index.css';

const photo = require('./files/me.jpg');

export default () => (
  <div className="about">
    <div className="links">
      <a href="mailto:hello@andreykeske.com">
        Mail (hello@andreykeske.com)
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
    </div>
    <div className="images">
      <img
        alt="Andrey"
        src={photo}
        role="presentation"
      />
    </div>
  </div>
);
