import React, { Component } from 'react';
import DocumentMeta from 'react-document-meta';

import { About, Works } from 'components';

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

export default class App extends Component {

  static propTypes = {
    children: React.PropTypes.object,
  }

  render() {
    return (
      <section>
        <DocumentMeta { ...metaData } />
        <About { ...this.props } />
        <Works { ...this.props } />
      </section>
    );
  }
}
