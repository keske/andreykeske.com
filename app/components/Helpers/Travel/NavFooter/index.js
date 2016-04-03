import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Link } from 'react-router';
import R from 'ramda';
import cx from 'classnames';
import { Grid, Row, Col } from 'react-bootstrap';

import { loadPlaces } from '../../../../reducers/modules/places';

// Component styles
import { styles } from './styles.scss';

// Language
import Language from './locale/';

@connect(
  state => ({
    language: state.application.language,
    mode: state.application.mode,
    places: state.places.data,
  }),
  dispatch => bindActionCreators({
    loadPlaces,
  }, dispatch)
)
export default class NavFooter extends Component {

  static propTypes = {
    params: PropTypes.object,
    places: PropTypes.array,
    loadPlaces: PropTypes.func,
    language: PropTypes.string,
    city: PropTypes.string,
    month: PropTypes.string,
    year: PropTypes.number,
  };

  componentDidMount() {
    this.props.loadPlaces();
  }

  render() {
    const {
      props: {
        city, month, year, places, language,
      },
    } = this;

    if (R.isEmpty(places)) {
      return <p>Loading</p>;
    }

    // Reduce places
    const reducedPlaces = R.reduceRight((a, b) => a.concat(b), [], places);

    // Get places with cover
    const placesWithCover = R.filter(place => place.cover && place, reducedPlaces);

    let currentPlaceIndex = 0;

    placesWithCover.map((place, index) => {
      if (place.city === city && place.month === month && place.year === year) {
        currentPlaceIndex = index;
      }
    });

    // Length of the places array
    let startPlace = currentPlaceIndex - 2;
    let endPlace = currentPlaceIndex + 4;

    R.cond([
      [startPlace === -2 || startPlace === -1 || startPlace === 0, () => {
        startPlace = 0;
        endPlace = 6;
      }],
      [(placesWithCover.length - currentPlaceIndex) === 1, () => {
        startPlace = currentPlaceIndex - 5;
        endPlace = placesWithCover.max;
      }],
      [(placesWithCover.length - currentPlaceIndex) === 2, () => {
        startPlace = currentPlaceIndex - 4;
        endPlace = placesWithCover.max;
      }],
      [(placesWithCover.length - currentPlaceIndex) === 3, () => {
        startPlace = currentPlaceIndex - 3;
        endPlace = placesWithCover.max;
      }],
    ]);

    const placesRange = R.slice(startPlace, endPlace, placesWithCover);

    // Set language
    Language.setLocale(language);

    return (
      <Grid className={cx(styles)}>
        <Row>
          <Col
            xs={12}
            sm={12}
            md={12}
            lg={12}
          >
            <Link to={ `/${language}/travel/card`} className="list-of-cities">
              { Language.translate('List')}
            </Link>
          </Col>
          {
            placesRange.map((
              currentPlace,
              activeClass = city === currentPlace.city && month === currentPlace.month && year === currentPlace.year && 'active'
              ) => (
                currentPlace.cover &&
                  <Link
                    to={ `/${language}/places/${currentPlace.year}/${currentPlace.month}/${currentPlace.city}`}
                    key={ `${currentPlace.year}/${currentPlace.month}/${currentPlace.city}`}
                    className={ `${activeClass}`}
                  >
                    <Col
                      xs={12}
                      sm={12}
                      md={2}
                      lg={2}
                      className="nav-block"
                    >
                      <div className="data">
                        <p className="city">
                          { currentPlace.city }
                        </p>
                      </div>
                      <img src={ `./app/Components/Content/Places/${currentPlace.year}/${currentPlace.month}/${currentPlace.city.replace(/ /g, '')}/images/thumb.jpg`} />
                    </Col>
                  </Link>
                )
            )
          }
        </Row>
      </Grid>
    );
  }
}
