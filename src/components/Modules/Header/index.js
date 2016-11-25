import React, { Component, PropTypes } from 'react';

// Constants
import { path } from 'constants/config';

// Components
import * as Works from '../../Content/Works/index.js';

// Styles
import s from './index.css';

export default class Module extends Component {

  render() {
    return (
      <section className={s.root}>
        Andrey Keske
      </section>
    );
  }
}
