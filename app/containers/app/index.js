import React, { Component } from 'react';
import { connect } from 'react-redux';
import DocumentMeta from 'react-document-meta';

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

@connect(state => state.application)
export default class App extends Component {

  static propTypes = {
    children: React.PropTypes.object,
  };

  render() {
    return (
      <section>
        <DocumentMeta {...metaData} />
        <Header {...this.props} />
        {this.props.children}
      </section>
    );
  }
}