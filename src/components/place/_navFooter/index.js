import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';

import _ from 'underscore';

// Component styles
import styles from './navFooter.styles.js';

// Components
import NewLabel from 'components/travel/_card/_newLabel.js';

// Language
import Language from './locale/';

@connect(state => state.places)
@connect(state => state.application)
export default class NavFooter extends Component {

  static propTypes = {
    places: React.PropTypes.array,
    language: React.PropTypes.string,
    year: React.PropTypes.number,
    month: React.PropTypes.string,
    city: React.PropTypes.string,
    style: React.PropTypes.string,
  }

  render() {
    const { style, places, language, year, month, city, application } = this.props;

    // Reduce places
    const reducedPlaces = _.reduceRight(places, (a, b) => {
      return a.concat(b);
    }, []);

    // Get places with cover
    const placesWithCover = _.filter(reducedPlaces, (place) => {
      return place.cover ? place : null;
    });

    // Get current index of places in the array
    const currentPlaceIndex = _.indexOf(placesWithCover,
      _.findWhere(placesWithCover, {
        'city': city,
        'year': year,
        'month': month,
      }));

    // Length of the places array
    let startPlace = currentPlaceIndex - 2;
    let endPlace = currentPlaceIndex + 4;

    // Get range...
    if (startPlace === -2 || startPlace === -1 || startPlace === 0) {
      startPlace = 0;
      endPlace = 6;
    } else if ((placesWithCover.length - currentPlaceIndex) === 1) {
      startPlace = currentPlaceIndex - 5;
      endPlace = placesWithCover.max;
    } else if ((placesWithCover.length - currentPlaceIndex) === 2) {
      startPlace = currentPlaceIndex - 4;
      endPlace = placesWithCover.max;
    } else if ((placesWithCover.length - currentPlaceIndex) === 3) {
      startPlace = currentPlaceIndex - 3;
      endPlace = placesWithCover.max;
    }

    const placesRange = placesWithCover.slice(startPlace, endPlace);

    // Set language
    Language.setLocale(application.language);

    return (
      <div className={ `${ styles } ${ style }` }>
        <div className="container">

          <div className="row">

            <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
              <a href={ `${ language }/travel` } className="list-of-cities">
                { Language.translate('List') }
              </a>
            </div>

            {
              placesRange.map((currentPlace) => {
                const activeClass = city === currentPlace.city &&
                  month === currentPlace.month &&
                  year === currentPlace.year ? 'active' : '';

                return (
                  currentPlace.cover ?
                    <Link
                      to={ `/${ language }/places/${ currentPlace.year }/${ currentPlace.month }/${ currentPlace.city }` }
                      key={ `${ currentPlace.year }/${ currentPlace.month }/${ currentPlace.city }` }
                      className={ `${ activeClass }` }
                    >
                      <div className={ `col-md-2 col-lg-2 nav-block` }>
                        <div className="data">
                          <p className="city">
                            { currentPlace.city }
                            <NewLabel place={ currentPlace } />
                          </p>
                        </div>
                        <img src={ `./src/components/place/places/${ currentPlace.year }/${ currentPlace.month }/${ currentPlace.city.replace(/ /g, '') }/images/thumb.jpg` } />
                      </div>
                    </Link> : null
                );
              })
            }
          </div>
        </div>

      </div>
    );
  }
}
