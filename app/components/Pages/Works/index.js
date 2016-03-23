import React, { Component } from 'react';
import DocumentMeta from 'react-document-meta';

// Components
import Preview from '../../Helpers/Works/Preview';

// Component styles
import { styles } from './styles.scss';

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

    return (
      <section className={styles}>
        <DocumentMeta {...metaData} />
        <div className="container">
          <h1 className="page-title">
            Hacks
          </h1>
          {
            works.map((work, key) => {
              const data = {
                work,
                application,
              };
              return <Preview {...data} key={key} />;
            })
          }
        </div>
      </section>
    );
  }
}
