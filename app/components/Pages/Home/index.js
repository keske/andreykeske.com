import React, { Component } from 'react';
import { Link } from 'react-router';
import R from 'ramda';

import Card from '../../Helpers/Travel/Card';

// Component styles
import { styles } from './styles/styles.scss';

// Language
import Language from './locale/';

const MAX_PLACES = 3;
const MAX_WORKS = 4;

export default class Home extends Component {

  static propTypes = {
    application: React.PropTypes.object,
    params: React.PropTypes.object,
    works: React.PropTypes.array,
    places: React.PropTypes.array,
  };

  render() {
    const { language } = this.props.params;
    const { application, works, places } = this.props;

    const renderWork = (work) => (
      <Link
        to={`/${application.language}/works/${work.link}`}
        key={`/${application.language}/works/${work.link}`}
      >
        <div className="col-xs-6 col-sm-3 col-md-3 col-lg-3">
          <span className="card home-page">
            <img src={`./src/components/work/works/${work.link}/files/${work.img}`} />
            <h2>
              { work.title }
            </h2>
            <p>
              { work.info }
            </p>
          </span>
        </div>
      </Link>
    );

    const renderHacks = () => (
      <section className="hacks">
        <div className="container">
          <div className="row">
            <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
              <p className="title">
                <Link to={`/${application.language}/works`}>
                  { Language.translate('Works') }
                </Link>
              </p>
              <p className="text">
                { Language.translate('WorksDescription') }
              </p>
            </div>
          </div>
          <div className="row">
            {
              works.map((work, index) =>
                index < MAX_WORKS && renderWork(work)
              )
            }
          </div>
          <div className="row">
            <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12 text-center">
              <Link to={`/${application.language}/works`}>
                <span className="more button medium outline inline blue">
                  { Language.translate('MoreWorks') }
                </span>
              </Link>
            </div>
          </div>
        </div>
      </section>
    );

    const renderPlaces = () => (
      <section className="places">
        <div className="container">
          <div className="row">
            <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
              <p className="title">
                <Link
                  to={`/${application.language}/travel/${application.mode}`}
                >
                  { Language.translate('Travel') }
                </Link>
              </p>
              <p className="text">
                { Language.translate('TravelDescription') }
              </p>
            </div>
          </div>
          <div className="row">
            {
              R.filter(R.propEq('cover', true), places)
                .map((place, index) =>
                  place.cover && index < MAX_PLACES &&
                    <Card
                      {...this.props}
                      place={ place }
                      language={ language }
                      key={`card-${index}-${place.city}`}
                    />
                )
            }
          </div>
          <div className="row">
            <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12 text-center">
              <Link
                to={`/${application.language}/travel/${application.mode}`}
              >
                <span className="more button medium outline inline blue">
                  { Language.translate('MoreTravel') }
                </span>
              </Link>
            </div>
          </div>
        </div>
      </section>
    );

    return (
      <div className={styles}>
        {renderHacks()}
        {renderPlaces()}
      </div>
    );
  }
}
