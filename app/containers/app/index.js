import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import DocumentMeta from 'react-document-meta';

import { setTravelViewMode } from '../../reducers/modules/application';

// Global styles
import './styles/app.scss';

import Header from '../../components/Modules/Header';

const metaData = {
  title: 'Andrey Keske',
  description: 'Front End Developer, Designer and Hacker',
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
  }),
  dispatch => bindActionCreators({
    setTravelViewMode,
  }, dispatch)
)
export default class App extends Component {

  static propTypes = {
    children: PropTypes.object,
  };

  render() {
    return (
      <section>
        <DocumentMeta { ...metaData } />
        <Header { ...this.props } />
        { this.props.children }
      </section>
    );
  }
}
