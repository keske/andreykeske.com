import React, { Component } from 'react';

import './index.css';

export default class Demo extends Component {
  render() {
    return (
      <div className="key">
        <h1>
          Key hole
        </h1>

        <div
          className="center"
          onMouseMove={(event) => {
            const girl = document.querySelector('.girl');

            girl.style.marginLeft = event.clientX.toFixed(0) / 10 * -2 + 'px';
            girl.style.marginTop = event.clientY.toFixed(0) / 10 * -2 + 'px';
          }}
        >
          <div className="girl">
            <img
              src={require('./files/girl.png')}
              role="presentation"
              ref="girl"
              className="girl"
            />
          </div>
          <span className="keyhole">
            <img
              src={require('./files/keyhole.png')}
              role="presentation"
            />
          </span>
        </div>
      </div>
    );
  }
}
