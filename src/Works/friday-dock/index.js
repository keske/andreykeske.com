import React from 'react';

export default () => (
  <div>
    <h1>Friday Dock</h1>

    <p>Normal:</p>

    <img src={require('./files/normal.jpg')} role="presentation" />

    <br />
    <br />

    <p>Friday:</p>

    <img
      src={require('./files/friday-dock.jpg')}
      role="presentation"
    />

    <h4>
      <a href="https://github.com/keske/FridayDock/blob/master/apps.zip?raw=true">
        Download friday apps (3Mb)
      </a>
    </h4>
  </div>
);
