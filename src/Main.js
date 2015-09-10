import React, { Component } from 'react';

import 'bootstrap-webpack';

// Global styles
import 'style!./styles/main.scss';

// Application components
import { Header, Footer } from 'components';

export default class Main extends Component {

  static propTypes = {
    children: React.PropTypes.object,
  }

  render() {
    return (
      <section>
        <Header />
        { this.props.children }
        <Footer />
      </section>
    );
  }
}
