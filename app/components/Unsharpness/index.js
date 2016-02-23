import React, { Component } from 'react';

// Component styles
import { styles } from './styles/styles.scss';

export default class Unsharpness extends Component {

  static propTypes = {
    image: React.PropTypes.string,
  };

  componentDidMount() {
    console.log(this.refs.unsharpness.clientHeight);
    console.log(this.refs.unsharpness.offsetHeight);
  }

  render() {
    const { image } = this.props;

    return (
      <div className={ styles } ref="unsharpness">
        <div className="up">
          <img src={ image } />
        </div>
        <div className="down">
          <img src={ image } />
        </div>
      </div>
    );
  }
}
