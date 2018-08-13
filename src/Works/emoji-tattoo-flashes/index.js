import React from 'react';

export default () => (
  <div className="emoji-tattoo">
    <h1>
      Emoji Tattoo Flashes
    </h1>
    <div className="trad">
      <img
        src={require('./files/Trad.png')}
        role="presentation"
      />
    </div>
    <div className="peace">
      <img
        src={require('./files/Peace.png')}
        role="presentation"
      />
    </div>
    <div className="death">
      <img
        src={require('./files/Death.png')}
        role="presentation"
      />
    </div>
    <div className="wild">
      <img
        src={require('./files/Wild.png')}
        role="presentation"
      />
    </div>
  </div>
);
