import React, { Component, PropTypes } from 'react';

// Component styles
import { styles } from './styles/styles.scss';

export default class Unsharpness extends Component {

  static propTypes = {
    image: PropTypes.string,
  };

  render() {
    const { image } = this.props;

    return (
      <div className={styles} ref="unsharpness">
        <div className="up">
          <img src={image} />
        </div>
        <div className="down">
          <img src={image} />
        </div>
      </div>
    );
  }
}
