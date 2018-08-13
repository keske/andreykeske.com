import React from 'react';

export default () => (
  <div>
    <h1>
      Skyscraper in Saint Petersburg
    </h1>
    <p>
      A skyscraper erected in the middle of historical center of St. Peterburg looks preposterous and bizarre to citizen.
    </p>
    <img
      src={require('./files/skyscraper-1.jpg')}
      role="presentation"
    />
    <img
      src={require('./files/skyscraper-2.jpg')}
      role="presentation"
    />
  </div>
);
