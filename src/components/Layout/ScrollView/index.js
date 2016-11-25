import React, { Component, PropTypes } from 'react';

// Styles
import s from './index.css';

export default class ScrollView extends Component {

  static propTypes = {
    children: PropTypes.array,
  };

  render() {
    return (
      <section
        className={s.root}
        style={{
          height: window.innerHeight - 100,
        }}
      >
        {this.props.children}
      </section>
    );
  }
}
