import React, { Component } from 'react';
import DocumentMeta from 'react-document-meta';
import R from 'ramda';

import { Link } from 'react-router';

// Component styles
import { styles } from './styles/styles.scss';

// Language
import Language from '../../components/header/locale/';

export default class Works extends Component {

  static propTypes = {
    application: React.PropTypes.object,
    works: React.PropTypes.array,
  };

  render() {
    const { application } = this.props;
    const { works } = this.props;

    const metaData = {
      title: Language.translate('Works'),
      description: Language.translate('Works'),
      meta: {
        charset: 'utf-8',
        name: {
          keywords: Language.translate('Works'),
        },
      },
    };

    const renderWork = (index) => {
      const work = works[index];

      return (
        <Link
          to={ `/${ application.language }/works/${ work.link }` }
          key={ `/${ application.language }/works/${ work.link }` }
        >
          <span className="card">
            <img src={ `./src/components/work/works/${ work.link }/files/${ work.img }` } />
            <h2>
              { work.title }
            </h2>
            <p>
              { work.info }
            </p>
          </span>
        </Link>
      );
    };

    return (
      <div className={ styles }>
        <DocumentMeta { ...metaData } />
        <div className="container">
          <div className="row">
              {
                R.splitEvery(Object.keys(works).length / 3, Object.keys(works))
                  .map((w) => {
                    return (
                      <div className="col-xs-12 col-sm-4 col-md-4 col-lg-4">
                        { w.map((i) => renderWork(i)) }
                      </div>
                    );
                  })
              }
          </div>
        </div>
      </div>
    );
  }
}
