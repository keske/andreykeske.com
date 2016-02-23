import React, { Component } from 'react';
import { connect } from 'react-redux';
import DocumentMeta from 'react-document-meta';

// Components
import { Works } from '../../components';

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

@connect(state => state.works)
@connect(state => state.application)
export default class App extends Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <section>
        <DocumentMeta { ...metaData } />
        <Works { ...this.props } />
      </section>
    );
  }
}
