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
        <div className="container">
          <div className="row">
            <div className="col-sm-12 col-lg-12">
              { this.props.children }
            </div>
          </div>
        </div>
        <Footer />
      </section>
    );
  }
}
