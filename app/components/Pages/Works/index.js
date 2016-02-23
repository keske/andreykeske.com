import React, { Component } from 'react';
import DocumentMeta from 'react-document-meta';

import { Link } from 'react-router';

// Component styles
import { styles } from './styles/styles.scss';

// Language
import Language from '../../Modules/Header/locale/';

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

    const renderWork = work => (
      <div className="row">
        <Link
          to={`/${application.language}/works/${work.link}`}
          key={`/${application.language}/works/${work.link}`}
          className="pin"
        >
          <div className="col-xs-12 col-md-6 col-md-4 col-lg-4">
            <img src={`./app/components/Pages/Work/works/${work.link}/files/${work.img}`} />
          </div>
          <div className="col-xs-12 col-md-6 col-md-4 col-lg-4">
            <span className="card">
              <h2>
                { work.title }
              </h2>
              <p>
                { work.info }
              </p>
            </span>
          </div>
        </Link>
      </div>
    );

    return (
      <section className={styles}>
        <DocumentMeta {...metaData} />
        <div className="container">
          {
            works.map(work => renderWork(work))
          }
        </div>
      </section>
    );
  }
}
