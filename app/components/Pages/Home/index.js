import React, { Component } from 'react';
import { Link } from 'react-router';
import R from 'ramda';

import Card from '../../Helpers/Travel/Card';

// Component styles
import { styles } from './styles.scss';

// Language
import Language from './locale/';

export default class Home extends Component {

  static propTypes = {
    language: React.PropTypes.string,
    params: React.PropTypes.object,
  };

  render() {
    const { language } = this.props.params;
    const { application, works, places } = this.props;

    return (
      <div className={styles}>
        Home
      </div>
    );
  }
}
