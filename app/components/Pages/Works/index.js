import React, { Component, PropTypes } from 'react';
import DocumentMeta from 'react-document-meta';
import R from 'ramda';

// Components
import Preview from '../../Helpers/Works/Preview';

// Component styles
import { styles } from './styles.scss';

// Language
import Language from '../../Modules/Header/locale/';

export default class Works extends Component {

  static propTypes = {
    language: PropTypes.string,
    params: PropTypes.object,
    works: PropTypes.array,
    loadWorks: PropTypes.func,
  };

  componentDidMount() {
    const { loadWorks } = this.props;
    loadWorks();
  }

  render() {
    const { language, works } = this.props;

    console.log(this.props);
    if (R.isEmpty(works)) {
      return <p>Loading</p>;
    }
    console.log(this.props);
    
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
                language,
              };
              return <Preview {...data} key={key} />;
            })
          }
        </div>
      </section>
    );
  }
}
