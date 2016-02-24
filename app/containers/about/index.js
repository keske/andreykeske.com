import React, { Component } from 'react';
import { connect } from 'react-redux';
import DocumentMeta from 'react-document-meta';

import About from '../../components/Pages/About';

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
export default class AboutContainer extends Component {

  static propTypes = {
    children: React.PropTypes.object,
  };

  render() {
    return (
      <section>
        <DocumentMeta {...metaData} />
        <About {...this.props} />
      </section>
    );
  }
}
