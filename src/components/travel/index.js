import React, { Component } from 'react';
import { connect } from 'react-redux';
import DocumentMeta from 'react-document-meta';

// View mode, card or text
import Filter from './_filter';
import Card from './_card/';
import Text from './_text/';

// Component styles
import styles from './Travel.styles.js';

// Language
import Language from '../header/locale/';

@connect(state => state.places)
export default class Travel extends Component {

  static propTypes = {
    params: React.PropTypes.object,
    places: React.PropTypes.array,
  }

  render() {
    const { language, mode } = this.props.params;
    const { places } = this.props;

    const metaData = {
      title: Language.translate('Travel'),
      description: Language.translate('Travel'),
      canonical: 'http://to.do/',
      meta: {
        charset: 'utf-8',
        name: {
          keywords: Language.translate('Travel'),
        },
      },
    };

    return (
      <div className={ styles }>
        <DocumentMeta {...metaData} />
        <div className="container">
          <div className="row">
            <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
              <Filter mode={ mode } />
            </div>
          </div>
          <div className="row">
            <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
              <h2>
                Travel stories
              </h2>
            </div>
            {
              places.map((place) => {
                return (
                  mode === 'card' ? <Card place={ place } language={ language } /> : <Text place={ place } language={ language } />
                );
              })
            }
          </div>
        </div>
      </div>
    );
  }
}
