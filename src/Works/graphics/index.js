import React from 'react';

export default () => (
  <div>
    <h1>
      Graphics works
    </h1>
    <br />
    <img
      src={require('./files/emojii.jpeg')}
      role="presentation"
    />
    <i>
      Emojii in eastern emoticons
    </i>
    <hr />
    <img
      src={require('./files/Rossete.jpg')}
      role="presentation"
    />
    <i>
      Rosette for windows
    </i>
    <hr />
    <img
      src={require('./files/paralympic.jpg')}
      role="presentation"
    />
    <i>
      Paralympic games logo
    </i>
    <br />
    <img
      src={require('./files/rub.jpg')}
      role="presentation"
    />
    <i>
      Раб
    </i>
    <hr />
    <img
      src={require('./files/cola.jpg')}
      role="presentation"
    />
    <i>
      The new color for Coca-Cola. Red — the brand color
    </i>
    <hr />
    <h2>
      Sneakers
    </h2>
    <p>
      I took the popular model of both brands — Nike Dunk and Adidas Superstar — and crossed them.
      <br />
      I received Nike Superstar and Adidas Dunk.
    </p>
    <img
      src={require('./files/sneakers.jpg')}
      role="presentation"
    />
    <hr />
    <img
      src={require('./files/invert_manhattan.jpg')}
      role="presentation"
    />
    <i>
      Invert Manhattan
    </i>
  </div>
);
