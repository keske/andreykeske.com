import React from 'react';

export default () => (
  <div>
    <h1>
      Invisible icons on the iPad
    </h1>
    <p>
      I've created 20 apps. Each imitating transparency/absence of the icon itself. But the icons are not transparent.
    </p>

    <div className="images">
      <img
        src={require('./files/ipad-1.jpg')}
        role="presentation"
      />
      <img
        src={require('./files/ipad-2.jpg')}
        role="presentation"
      />
      <img
        src={require('./files/ipad-3.jpg')}
        role="presentation"
      />
    </div>

    <br />

    <h2>
      I achieved this in a simple manner
    </h2>

    <ul>
      <li>
        I made screenshot of the iPad screen with and without icons
      </li>
      <li>
        Next I cutted regions containing background
      </li>
      <li>
        All this pieces I applied to apps
      </li>
      <li>
        Finally I've compiled all the apps and placed in an certain order
      </li>
    </ul>
  </div>
);
