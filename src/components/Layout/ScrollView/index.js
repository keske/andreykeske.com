import React, { Component, PropTypes } from 'react';

// Styles
import s from './index.css';

export default class ScrollView extends Component {

  static propTypes = {
    children: PropTypes.any,
  };

  render() {
    return (
      <section
        className={s.root}
        style={{
          height: window.innerHeight - 50,
        }}
      >
        {this.props.children}
      </section>
    );
  }
}
