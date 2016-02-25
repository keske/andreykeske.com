import React, { Component } from 'react';

// Component styles
import { styles } from './styles/styles.scss';

export default class City extends Component {

  static propTypes = {
    params: React.PropTypes.object,
  };

  render() {
    const { year, month, city } = this.props.params;

    return (
      <div className={styles}>
        <iframe src={ `./src/components/place/places/${ year }/${ month }/${ city.replace(/ /g, '') }/index.html` } />
      </div>);
  }
}
