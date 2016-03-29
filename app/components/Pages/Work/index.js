import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import R from 'ramda';
import DocumentMeta from 'react-document-meta';

import * as Hacks from '../../Content/Works/index.js';

// Component styles
import { styles } from './styles.scss';

// Components
import NavFooter from '../../Helpers/Works/NavFooter';

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
    works: state.works.data,
  }),
)
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
        <DocumentMeta {...metaData} />
        {
          React.createElement(Hacks[R.join('', component)], this.props)
        }
        <NavFooter {...this.props} work={work} />
      </div>
    );
  }
}
