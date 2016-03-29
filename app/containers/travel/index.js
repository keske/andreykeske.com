import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import DocumentMeta from 'react-document-meta';

import { setTravelViewMode } from '../../reducers/modules/application';
import { loadPlaces } from '../../reducers/modules/places';

// Components
import Travel from '../../components/Pages/Travel';

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
    places: state.places.data,
  }),
  dispatch => bindActionCreators({
    setTravelViewMode,
    loadPlaces,
  }, dispatch)
)
export default class TravelContainer extends Component {
  render() {
    return (
      <section>
        <DocumentMeta {...metaData} />
        <Travel {...this.props} />
      </section>
    );
  }
}
