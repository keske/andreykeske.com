import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import DocumentMeta from 'react-document-meta';

import Work from '../../components/Pages/Work';

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
export default class WorkContainer extends Component {

  static propTypes = {
    children: PropTypes.object,
  };

  render() {
    return (
      <section>
        <DocumentMeta {...metaData} />
        <Work {...this.props} />
      </section>
    );
  }
}
