import React, { Component, PropTypes } from 'react';
import { observer } from 'mobx-react';

// Components
import Header from 'components/Modules/Header';
import Home from 'components/Pages/Home';

// Stores
import { app, works } from '../../stores';

// Styles
import s from './index.css';

@observer
export default class Root extends Component {

  static propTypes = {
    location: PropTypes.shape,
    children: PropTypes.shape,
    params: PropTypes.shape,
    history: PropTypes.shape,
  };

  static childContextTypes = {
    app: PropTypes.shape,
    works: PropTypes.shape,
  }

  getChildContext() {
    return {
      app,
      works,
    };
  }

  render() {
    return (
      <section className={s}>
        <Header />
        <Home />
      </section>
    );
  }
}
