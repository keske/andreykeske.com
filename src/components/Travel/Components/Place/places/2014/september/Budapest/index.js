import React, { Component } from 'react';
import reactMixin from 'react-mixin';

import placeInsertTemplate from './../../../../placeInsertTemplate.js';

// Component styles
import styles from './styles.js';

@reactMixin.decorate(placeInsertTemplate)
export default class SpindleruvMlynInDecember2014 extends Component {

  static propTypes = {
    params: React.PropTypes.object,
  }

  render() {
    const { data } = this.state;

    if (data) {
      return (<div className={ styles }>
        <div dangerouslySetInnerHTML={{ __html: data }} />
      </div>);
    }

    return (
      <div className={ styles }>
        <h2>Loading...</h2>
      </div>
    );
  }

  state = {
    data: null,
  }
}
