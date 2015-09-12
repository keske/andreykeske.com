import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';

// Component styles
import styles from './NavFooter.styles.js';

// Components
import NewLabel from './../../../Card/NewLabel.js';

@connect(state => state.places)
export default class NavFooter extends Component {

  static propTypes = {
    places: React.PropTypes.array,
    language: React.PropTypes.string,
  }

  render() {
    const { places, language } = this.props;

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
              places.map((place) => {
                const city = place.city.replace(/ /g, '');

                return (
                  place.cover ?
                    <Link to={ `${ language }/places/${ place.year }/${ place.month }/${ city }` }>
                      <div className="col-md-2 col-lg-2 nav-block">
                        <div className="data">
                          <p className="city">
                            { place.city }
                            <NewLabel place={ place } />
                          </p>
                        </div>
                        <img src={ `./src/components/Travel/Components/Place/places/${ place.year }/${ place.month }/${ city }/images/thumb.jpg` } />
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
