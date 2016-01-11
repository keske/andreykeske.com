import React, { Component } from 'react';

// Component styles
import styles from './styles.js';

const image = require('./files/nyc.jpg');

export default class Soon extends Component {

  static propTypes = {
    title: React.PropTypes.string,
    date: React.PropTypes.string,
  };

  render() {
    const { title, date } = this.props;

    return (
      <div className={ styles }>
        <img src={ image } />
        <div className="info">
          <p className="title">
            { title }
          </p>
          <p className="date">
            { date }
          </p>
          <p className="soon">
            Soon
          </p>
        </div>
      </div>
    );
  }
}
