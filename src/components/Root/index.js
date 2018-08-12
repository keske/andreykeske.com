import React, { Component, PropTypes } from 'react';

// Components
import Header from 'components/Modules/Header';
import Home from 'components/Pages/Home';

// Styles
import s from './index.css';

export default class Root extends Component {

  static propTypes = {
    location: PropTypes.func,
    children: PropTypes.func,
    params: PropTypes.func,
    history: PropTypes.func,
  };

  render() {
    return (
      <section className={s}>
        <Header />
        <Home />
      </section>
    );
  }
}
