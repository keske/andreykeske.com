import React, { Component, PropTypes } from 'react';
import R from 'ramda';
import * as Hacks from '../../Content/Works/index.js';

// Component styles
import { styles } from './styles.scss';

// Components
import NavFooter from '../../Helpers/Works/NavFooter';

export default class Works extends Component {

  static propTypes = {
    params: PropTypes.object,
    work: PropTypes.string,
  };

  componentDidMount() {
    window.scrollTo(0, 0);
  }

  capitalizeFirstLetter = string =>
      string.charAt(0).toUpperCase() + string.slice(1);

  render() {
    const { work } = this.props.params;
    const component = [];

    work.split('-').map(word =>
      component.push(this.capitalizeFirstLetter(word)));

    return (
      <div className={styles}>
        {React.createElement(Hacks[R.join('', component)], this.props)}
        <NavFooter {...this.props} work={work} />
      </div>
    );
  }
}
