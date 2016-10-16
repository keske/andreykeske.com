import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import DocumentMeta from 'react-document-meta';
import { Grid, Row } from 'react-bootstrap';
import R from 'ramda';

import { setTravelViewMode } from '../../../reducers/modules/application';
import { loadPlaces } from '../../../reducers/modules/places';

// Components
import * as Chapters from '../../Helpers/Travel/Chapters';
import Card from '../../Helpers/Travel/Card';
import Text from '../../Helpers/Travel/Text';

// Component styles
import { styles } from './styles.scss';

// Language
import Language from '../../Modules/Header/locale/';

@connect(
  state => ({
    language: state.application.language,
    mode: state.application.mode,
    places: state.places.data,
  }),
  dispatch => bindActionCreators({
    setTravelViewMode,
    loadPlaces,
  }, dispatch)
)
export default class Travel extends Component {

  static propTypes = {
    params: PropTypes.object,
    places: PropTypes.array,
    loadPlaces: PropTypes.func,
  };

  componentDidMount() {
    this.props.loadPlaces();

    window.scrollTo(0, 0);
  }

  render() {
    const { places, params: { language, mode } } = this.props;

    if (R.isEmpty(places)) {
      return <p className="loading">✈</p>;
    }

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

    const renderPlace = (place, data = { ...place, language }) => (
      R.equals(mode, 'card')
        ? R.or(R.equals(place.cover, true), R.equals(place.chapter, 'I')) &&
          <Card {...data} key={Math.random()} />
        : <Text {...data} key={Math.random()} />
    );

    const renderChapter = chapterPlaces => (
      R.equals(mode, 'card')
        ? <Row className="chapters-row" key={Math.random()}>
            {
              // Create chapter component
              React.createElement(
                Chapters[
                  R.compose(
                    R.view(R.lensProp('chapter')),
                    R.find(R.prop('chapter')),
                  )(chapterPlaces)
                ],
                this.props
              )
            }
            {
              // After render places for each chapter
              R.map(renderPlace, chapterPlaces)
            }
        </Row>
        : R.map(renderPlace, chapterPlaces)
    );

    return (
      <section className={styles}>
        <DocumentMeta {...metaData} />

        <h1 className="page-title">
          {Language.translate('Travel')}
        </h1>

        <Grid>
          {
            R.compose(
              R.map(renderChapter),
              R.values,
            )(R.groupBy(R.prop('chapter'), places))
          }
        </Grid>
      </section>
    );
  }
}
