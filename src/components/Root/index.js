import React, { Component, PropTypes } from 'react';
import { observer } from 'mobx-react';

// Stores
import { app, travel, works } from '../../stores';

// Components
import Home from 'components/Pages/Home';

// Styles
import s from './index.css';

@observer
export default class Root extends Component {

  static propTypes = {
    location: PropTypes.object,
    children: PropTypes.object,
    params: PropTypes.object,
    history: PropTypes.object,
  };

  static childContextTypes = {
    app: PropTypes.object,
    travel: PropTypes.object,
    works: PropTypes.object,
  }

  getChildContext() {
    return {
      app,
      travel,
      works,
    };
  }

  render() {
    return (
      <section className={s}>
        <Home />
      </section>
    );
  }
}
