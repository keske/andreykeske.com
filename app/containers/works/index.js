import React, { Component } from 'react';
import { connect } from 'react-redux';
import DocumentMeta from 'react-document-meta';

// Components
import Works from '../../components/Pages/Works';

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
    ...state.application,
    ...state.works,
  }),
)
export default class WorksContainer extends Component {
  render() {
    return (
      <section>
        <DocumentMeta {...metaData} />
        <Works {...this.props} />
      </section>
    );
  }
}
