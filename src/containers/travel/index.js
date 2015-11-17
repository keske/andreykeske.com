import React, { Component } from 'react';
import { connect } from 'react-redux';
import DocumentMeta from 'react-document-meta';

// Components
import { Travel } from 'components';

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

@connect(state => state.places)
@connect(state => state.application)
export default class App extends Component {

  render() {
    return (
      <section>
        <DocumentMeta { ...metaData } />
        <Travel { ...this.props } />
      </section>
    );
  }
}
