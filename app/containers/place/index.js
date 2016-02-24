import React, { Component } from 'react';
import { connect } from 'react-redux';

import Place from '../../components/Pages/Place';

@connect(state => state.places)
@connect(state => state.application)
export default class PlaceContainer extends Component {

  static propTypes = {
    children: React.PropTypes.object,
  };

  render() {
    console.log('Place container');

    return (
      <section>
        <Place {...this.props} />
      </section>
    );
  }
}
