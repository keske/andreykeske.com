import React, { Component } from 'react';
import { connect } from 'react-redux';
import DocumentMeta from 'react-document-meta';

import { Home } from 'components';

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

@connect(state => state.works)
@connect(state => state.places)
@connect(state => state.application)
export default class App extends Component {

  static propTypes = {
    children: React.PropTypes.object,
  };

  render() {
    return (
      <section>
        <DocumentMeta { ...metaData } />
        <Home { ...this.props } />
      </section>
    );
  }
}
