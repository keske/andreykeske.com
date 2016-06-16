import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import R from 'ramda';
import DocumentMeta from 'react-document-meta';

import * as Posters from '../../Content/Posters/index.js';

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
    posters: state.posters.data,
  }),
)
export default class Poster extends Component {

  static propTypes = {
    params: PropTypes.object,
    posters: PropTypes.string,
  };

  componentDidMount() {
    window.scrollTo(0, 0);
  }

  capitalizeFirstLetter = string =>
      string.charAt(0).toUpperCase() + string.slice(1);

  render() {
    const { poster } = this.props.params;
    const component = [];

    poster.split('-').map(posterName =>
      component.push(posterName)
    );

    return (
      <div className={styles}>
        <DocumentMeta {...metaData} />
        {
          React.createElement(Posters[R.join('', component)], this.props)
        }
      </div>
    );
  }
}
