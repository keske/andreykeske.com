import React, { Component } from 'react';

import { Place } from 'components';

export default class App extends Component {

  static propTypes = {
    children: React.PropTypes.object,
  };

  render() {
    return (
      <section>
        <Place { ...this.props } />
      </section>
    );
  }
}
