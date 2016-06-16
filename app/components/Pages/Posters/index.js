import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import DocumentMeta from 'react-document-meta';
import R from 'ramda';

// import { setTravelViewMode } from '../../../reducers/modules/application';
import { loadPosters } from '../../../reducers/modules/posters';

// Components
// import Preview from '../../Helpers/Works/Preview';

// Component styles
import { styles } from './styles.scss';

// Language
import Language from '../../Modules/Header/locale/';

@connect(
  state => ({
    language: state.application.language,
    posters: state.posters.data,
  }),
  dispatch => bindActionCreators({
    loadPosters,
  }, dispatch)
)
export default class Posters extends Component {

  static propTypes = {
    language: PropTypes.string,
    params: PropTypes.object,
    posters: PropTypes.array,
    loadPosters: PropTypes.func,
  };

  componentDidMount() {
    this.props.loadPosters();
  }

  render() {
    const { language, posters } = this.props;

    // Set language
    Language.setLocale(language);

    if (R.isEmpty(posters)) {
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
            { Language.translate('Works') }
          </h1>
          posters
        </div>
      </section>
    );
  }
}
