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
    location: PropTypes.func,
    children: PropTypes.func,
    params: PropTypes.func,
    history: PropTypes.func,
  };

  static childContextTypes = {
    app: PropTypes.object,
    works: PropTypes.object,
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
