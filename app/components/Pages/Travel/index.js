import React, { Component, PropTypes } from 'react';
import DocumentMeta from 'react-document-meta';
import { Grid, Row, Col } from 'react-bootstrap';
import ParallaxComponent from 'react-parallax-component';
import R from 'ramda';

// Utils
import { random } from '../../../utils/math';

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
    console.log('asdasdd');
    this.props.loadPlaces();
  }

  render() {
    const { places, params: { language, mode } } = this.props;

    if (R.isEmpty(places)) {
      return <p>Loading</p>
    }

    console.log('asdasdd');

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
      R.equals(mode, 'card')
        ? R.or(R.equals(place.cover, true), R.equals(place.chapter, 'I')) &&
          <Card {...data} key={Math.random()} />
        : <Text {...data} key={Math.random()} />;

    const renderChapter = chapterPlaces =>
      <Row className="chapters-row" key={Math.random()}>
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
      </Row>;

    const renderPhotos = () => {
      const width = 250;
      const height = 200;
      const photos = {
        total: 7,
        perPage: 3,
      };

      const photosOnPage = [];

      R.range(0, photos.perPage).map(() => {
        const setValue = (rnd = random(1, photos.total)) =>
          R.ifElse(
            R.equals(R.__, true),
            () => photosOnPage.push(rnd),
            () => setValue()
          )(!R.contains(rnd, photosOnPage));
        setValue();
      });

      return photosOnPage.map((file, index) =>
        <ParallaxComponent
          speed={`0.${R.add(index, 1)}`}
          top={R.toString(random((R.multiply(100, index)), (R.multiply(index, (R.multiply(height, 2))))))}
          left={`${window.innerWidth / random(20, 40)}%`}
          width={R.toString(width)}
          key={index}
        >
          <img src={`./app/components/Pages/Travel/files/${file}.jpg`} />
        </ParallaxComponent>
      );

    };

    return (
      <p>Placesss</p>
    )

    // return (
    //   <section className={styles}>
    //     <DocumentMeta {...metaData} />
    //     <Grid>
    //       <Row>
    //         <Col
    //           xs={12}
    //           sm={12}
    //           md={12}
    //           lg={12}
    //         >
    //           <h1 className="page-title">
    //             Travel
    //           </h1>
    //           <Filter {...this.props} />
    //         </Col>
    //       </Row>
    //       {
    //         R.compose(
    //           R.map(renderChapter),
    //           R.values,
    //         )(R.groupBy(R.prop('chapter'), places))
    //       }
    //     </Grid>

    //     {
    //       R.equals(mode, 'text') && renderPhotos()
    //     }

    //   </section>
    // );
  }
}
