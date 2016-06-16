import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import DocumentMeta from 'react-document-meta';
import R from 'ramda';

// import { setTravelViewMode } from '../../../reducers/modules/application';
import { loadStreets } from '../../../reducers/modules/streets';

// Components
// import Preview from '../../Helpers/Works/Preview';

// Component styles
import { styles } from './styles.scss';

// Language
import Language from '../../Modules/Header/locale/';

@connect(
  state => ({
    language: state.application.language,
    streets: state.streets.data,
  }),
  dispatch => bindActionCreators({
    loadStreets,
  }, dispatch)
)
export default class Streets extends Component {

  static propTypes = {
    language: PropTypes.string,
    params: PropTypes.object,
    streets: PropTypes.array,
    loadStreets: PropTypes.func,
  };

  componentDidMount() {
    this.props.loadStreets();
  }

  render() {
    const { language, streets } = this.props;

    // Set language
    Language.setLocale(language);

    if (R.isEmpty(streets)) {
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
          streets
        </div>
      </section>
    );
  }
}
