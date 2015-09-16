import React, { Component } from 'react';
import { connect } from 'react-redux';

// Component styles
import styles from './Works.styles.js';

@connect(state => state.works)
export default class Works extends Component {

  static propTypes = {
    params: React.PropTypes.object,
    works: React.PropTypes.array,
  }

  render() {
    const { works } = this.props;
    console.log(works)
    return (

      <div className={ styles }>
        <h2>
          Works
        </h2>
      </div>
    );
  }
}
