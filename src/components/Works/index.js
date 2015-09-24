import React, { Component } from 'react';
import { connect } from 'react-redux';
import DocumentMeta from 'react-document-meta';

import { Link } from 'react-router';

// Component styles
import styles from './Works.styles.js';

// Language
import Language from '../header/locale/';

@connect(state => state.works)
export default class Works extends Component {

  static propTypes = {
    params: React.PropTypes.object,
    works: React.PropTypes.array,
  }

  render() {
    const { language } = this.props.params;
    const { works } = this.props;

    const metaData = {
      title: Language.translate('Works'),
      description: Language.translate('Works'),
      canonical: 'http://to.do/',
      meta: {
        charset: 'utf-8',
        name: {
          keywords: Language.translate('Works'),
        },
      },
    };

    return (
      <div className={ styles }>
        <DocumentMeta {...metaData} />
        <div className="container">
          {
            works.map((work) => {
              return (
                <Link to={ `${ language }/works/${ work.link }` }>
                  <div className="row">
                    <div className="col-xs-3 col-sm-3 col-md-3 col-lg-3 col-md-offset-2 col-lg-offset-2">
                      <img src={ `./src/components/Works/Work/works/${ work.link }/files/${ work.img }` } />
                    </div>
                    <div className="col-xs-9 col-sm-9 col-md-5 col-lg-5">
                      <h2>
                        { work.title }
                      </h2>
                      <p>
                        { work.info }
                      </p>
                    </div>
                  </div>
                </Link>
              );
            })
          }
        </div>
      </div>
    );
  }
}
