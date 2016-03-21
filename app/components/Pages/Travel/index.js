import React, { Component, PropTypes } from 'react';
import DocumentMeta from 'react-document-meta';
import { Grid, Row, Col } from 'react-bootstrap';
import R from 'ramda';

// Components
import Filter from '../../Helpers/Travel/Filter';
import * as Chapters from '../../Helpers/Travel/Chapters';
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
      <Row>
        {
          // Create chapter component
          React.createElement(
            Chapters[R.find(R.prop('chapter'), chapterPlaces).chapter],
            this.props
          )
        }
        {
          // After render places for each chapter
          R.map(renderPlace, chapterPlaces)
        }
      </Row>;

    return (
      <section className={styles}>
        <DocumentMeta {...metaData} />
        <Grid>
          <Row>
            <Col
              xs={12}
              sm={12}
              md={12}
              lg={12}
            >
              <Filter {...this.props} />
            </Col>
          </Row>
          {
            R.values(
              R.map(
                renderChapter,
                R.groupBy(R.prop('chapter'), places)
              )
            )
          }
        </Grid>
      </section>
    );
  }
}
