import React, { Component } from 'react';

// Component styles
import styles from './Work.styles.js';

// Works
import {
  Catch,
} from './works/index.js';

const data = {
  'catch': Catch,
};

export default class Works extends Component {

  static propTypes = {
    params: React.PropTypes.object,
    work: React.PropTypes.string,
  }

  render() {
    const { work } = this.props.params;

    return (
      <div className={ styles }>
        { React.createElement(data[work], this.props) }
      </div>
    );
  }
}
