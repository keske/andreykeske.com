import React from 'react';

import './index.css';

export default () => (
  <div>
    <h1>
      Censorhip in iOS 7
    </h1>
    <div className="center">
      <img
        className="censorship-image"
        src={require('./files/dock-phone.png')}
        role="presentation"
      />
      <img
        className="censorship-image"
        src={require('./files/ringer-phone.png')}
        role="presentation"
      />
      <img
        className="censorship-image"
        src={require('./files/group-phone.png')}
        role="presentation"
      />
      <img
        className="censorship-image"
        src={require('./files/task-phone.png')}
        role="presentation"
      />
      <iframe
        width="100%"
        height="450"
        src="//www.youtube.com/embed/n5X8ANp04b8"
        frameBorder="0"
        allowFullScreen
      />
    </div>
  </div>
);
