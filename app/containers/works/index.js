import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import DocumentMeta from 'react-document-meta';

import { setTravelViewMode } from '../../reducers/modules/application';
import { loadWorks } from '../../reducers/modules/works';

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
    language: state.application.language,
    mode: state.application.mode,
    works: state.works.data,
  }),
  dispatch => bindActionCreators({
    setTravelViewMode,
    loadWorks,
  }, dispatch)
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
