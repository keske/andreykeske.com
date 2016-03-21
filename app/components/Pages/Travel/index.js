import React, { Component, PropTypes } from 'react';
import DocumentMeta from 'react-document-meta';
import R from 'ramda';

// Components
import Filter from '../../Helpers/Travel/Filter';
import I from '../../Helpers/Travel/Chapters/I';
import II from '../../Helpers/Travel/Chapters/II';
import Card from '../../Helpers/Travel/Card';
import Text from '../../Helpers/Travel/Text';

// Component styles
import { styles } from './styles.scss';

// Language
import Language from '../../Modules/Header/locale/';

export default class Travel extends Component {

  static propTypes = {
    params: PropTypes.object,
    places: PropTypes.array,
    application: PropTypes.object,
  };

  componentDidMount() {
    window.scrollTo(0, 0);
  }

  render() {
    const { places, params: { language, mode } } = this.props;

    const metaData = {
      title: Language.translate('Travel'),
      description: Language.translate('Travel'),
      meta: {
        charset: 'utf-8',
        name: {
          keywords: Language.translate('Travel'),
        },
      },
    };

    const renderPlace = (place, data = { ...place, language }) =>
      mode === 'card'
        ? place.cover && <Card {...data} />
        : <Text {...data} />;

    const renderChapter = chapterPlaces =>
      <div className="row">
        <h1>Chapter Name</h1>
        {
          R.map(renderPlace, chapterPlaces)
        }
      </div>;

    return (
      <div className={styles}>
        <DocumentMeta {...metaData} />
        <div className="container">
          <div className="row">
            <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
              <Filter {...this.props} />
            </div>
          </div>
          {
            R.values(
              R.map(
                renderChapter,
                R.groupBy(R.prop('chapter'), places)
              )
            )
          }
        </div>
      </div>
    );
  }
}
