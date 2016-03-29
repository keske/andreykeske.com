import React, { Component, PropTypes } from 'react';

// Component styles
import { styles } from './styles/styles.scss';

export default class City extends Component {

  static propTypes = {
    params: PropTypes.object,
  };

  render() {
    const { year, month, city } = this.props.params;

    return (
      <div className={styles}>
        <iframe src={`./app/components/Content/Places/${year}/${month}/${city.replace(/ /g, '')}/index.html`} />
      </div>);
  }
}
