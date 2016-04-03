import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import DocumentMeta from 'react-document-meta';
import R from 'ramda';

import { setTravelViewMode } from '../../../reducers/modules/application';
import { loadWorks } from '../../../reducers/modules/works';

// Components
import Preview from '../../Helpers/Works/Preview';

// Component styles
import { styles } from './styles.scss';

// Language
import Language from '../../Modules/Header/locale/';

@connect(
  state => ({
    language: state.application.language,
    mode: state.application.mode,
    works: state.works.data,
  }),
  dispatch => bindActionCreators({
    setTravelViewMode,
    loadWorks,
  }, dispatch)
)
export default class Works extends Component {

  static propTypes = {
    language: PropTypes.string,
    params: PropTypes.object,
    works: PropTypes.array,
    loadWorks: PropTypes.func,
  };

  componentDidMount() {
    this.props.loadWorks();
  }

  render() {
    const { language, works } = this.props;

    if (R.isEmpty(works)) {
      return <p className="loading">⠵</p>;
    }

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
