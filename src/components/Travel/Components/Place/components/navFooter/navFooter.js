import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';

import _ from 'underscore';

// Component styles
import styles from './NavFooter.styles.js';

// Components
import NewLabel from './../../../Card/NewLabel.js';

@connect(state => state.places)
export default class NavFooter extends Component {

  static propTypes = {
    places: React.PropTypes.array,
    language: React.PropTypes.string,
    year: React.PropTypes.number,
    month: React.PropTypes.string,
    city: React.PropTypes.string,
  }

  render() {
    const { places, language, year, month, city } = this.props;

    // Reduce places
    const reducedPlaces = _.reduceRight(places, (a, b) => {
      return a.concat(b);
    }, []);

    // Get places with cover
    const placesWithCover = _.filter(reducedPlaces, (place) => {
      return place.cover ? place : null;
    });

    // Get current index of places in the array
    const currentPlaceIndex = _.indexOf(placesWithCover, _.findWhere(placesWithCover, { 'city': city, 'year': year, 'month': month }));

    // Length of the places array
    let startPlace = currentPlaceIndex - 2;
    let endPlace = currentPlaceIndex + 4;

    // Nav footer with cities
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
    // console.log('startPlace: ' + startPlace);
    // console.log('endPlace: ' + endPlace);
    // console.log(currentPlaceIndex);

    return (
      <div className={ styles }>
        <div className="container">

          <div className="row">

            <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
              <a href="/#/travel" className="list-of-cities">
                List of cities
              </a>
            </div>

            {
              placesRange.map((currentPlace) => {
                return (
                  currentPlace.cover ?
                    <Link to={ `${ language }/places/${ currentPlace.year }/${ currentPlace.month }/${ currentPlace.city }` }>
                      <div className="col-md-2 col-lg-2 nav-block">
                        <div className="data">
                          <p className="city">
                            { currentPlace.city }
                            <NewLabel place={ currentPlace } />
                          </p>
                        </div>
                        <img src={ `./src/components/Travel/Components/Place/places/${ currentPlace.year }/${ currentPlace.month }/${ currentPlace.city.replace(/ /g, '') }/images/thumb.jpg` } />
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
