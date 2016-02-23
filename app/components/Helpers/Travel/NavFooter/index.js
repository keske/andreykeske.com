import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';
import R from 'ramda';
import _ from 'underscore';

import { showNewLabel } from '../../../../utils/travel';

// Component styles
import { styles } from './styles.scss';

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
    application: React.PropTypes.object,
  };

  render() {
    const { style, places, language, year, month, city, application } = this.props;

    // Reduce places
    const reducedPlaces = R.reduceRight(places, (a, b) => {
      return a.concat(b);
    }, []);

    // Get places with cover
    const placesWithCover = R.filter(reducedPlaces, (place) => {
      return place.cover ? place : null;
    });

    // Get current index of places in the array
    const currentPlaceIndex = R.indexOf(placesWithCover,
      _.findWhere(placesWithCover, {
        city,
        year,
        month,
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

    const renderNewLabel = (place) => {
      return (
        showNewLabel(place.date) &&
          <span className="new">
            New
          </span>
      );
    };

    return (
      <div className={ `${ styles } ${ style }` }>
        <div className="container">

          <div className="row">

            <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
              <Link to={ `/${ application.language }/travel/card` } className="list-of-cities">
                { Language.translate('List') }
              </Link>
            </div>

            {
              placesRange.map((currentPlace) => {
                const activeClass = city === currentPlace.city &&
                  month === currentPlace.month &&
                  year === currentPlace.year ? 'active' : '';

                return (
                  currentPlace.cover &&
                    <Link
                      to={ `/${ language }/places/${ currentPlace.year }/${ currentPlace.month }/${ currentPlace.city }` }
                      key={ `${ currentPlace.year }/${ currentPlace.month }/${ currentPlace.city }` }
                      className={ `${ activeClass }` }
                    >
                      <div className={ `col-md-2 col-lg-2 nav-block` }>
                        <div className="data">
                          <p className="city">
                            { currentPlace.city }
                            { renderNewLabel(currentPlace) }
                          </p>
                        </div>
                        <img src={ `./src/components/place/places/${ currentPlace.year }/${ currentPlace.month }/${ currentPlace.city.replace(/ /g, '') }/images/thumb.jpg` } />
                      </div>
                    </Link>
                );
              })
            }
          </div>
        </div>

      </div>
    );
  }
}
