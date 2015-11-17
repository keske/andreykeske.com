import React, { Component } from 'react';
import { connect } from 'react-redux';
import DocumentMeta from 'react-document-meta';

import 'bootstrap-webpack';

// Global styles
import 'style!./styles/app.scss';

import { Header } from 'components';

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

@connect(state => state.application)
export default class App extends Component {

  static propTypes = {
    children: React.PropTypes.object,
  }

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
