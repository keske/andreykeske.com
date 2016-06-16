import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import R from 'ramda';
import DocumentMeta from 'react-document-meta';

import * as Streets from '../../Content/Streets/index.js';

// Component styles
import { styles } from './styles.scss';

const metaData = {
  title: 'Andrey Keske',
  description: 'Andrey Keske. Front End Developer, Designer.',
  canonical: 'http://andreykeske.com/',
  meta: {
    charset: 'utf-8',
    name: {
      keywords: 'Front end, design, reactjs, webpack',
    },
  },
};

@connect(
  state => ({
    language: state.application.language,
    mode: state.application.mode,
    streets: state.streets.data,
  }),
)
export default class Street extends Component {

  static propTypes = {
    params: PropTypes.object,
    street: PropTypes.string,
  };

  componentDidMount() {
    window.scrollTo(0, 0);
  }

  capitalizeFirstLetter = string =>
      string.charAt(0).toUpperCase() + string.slice(1);

  render() {
    const { street } = this.props.params;
    const component = [];


    street.split('-').map(streetName =>
      component.push(streetName)
    );

    return (
      <div className={styles}>
        <DocumentMeta {...metaData} />
        {
          React.createElement(Streets[R.join('', component)], this.props)
        }
      </div>
    );
  }
}
