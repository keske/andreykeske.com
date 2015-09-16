import React, { Component } from 'react';
import { connect } from 'react-redux';

// Components
import { LinkToImage } from '../../../../../../../../components/';
import NavFooter from '../../../../components/navFooter/navFooter.js';

// Component styles
import styles from './styles.js';

// Language
import Language from './locale/';

@connect(state => state.application)
export default class City extends Component {

  static propTypes = {
    params: React.PropTypes.object,
    application: React.PropTypes.object,
  }

  render() {
    const { year, month, city } = this.props.params;

    // Path to photos
    const img = `./src/components/Travel/Components/Place/places/${ year }/${ month }/${ city.replace(/ /g, '') }/images`;

    const { application } = this.props;

    // Set language
    Language.setLocale(application.language);

    return (
      <div className={ styles }>
        <img src={ `${ img }/top.jpg` } />

        <div className="top-page-city-name on-image">
          { Language.translate('Rome') }
        </div>

        <div className="container">
          <div className="row">

            <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
              <h2>
                { Language.translate('FirstLook') }
              </h2>
              <p>
                { Language.translate('FirstLookText') }
              </p>
            </div>

            <div className="photo col-xs-12 col-sm-12 col-md-12 col-lg-12">
              <LinkToImage url={ `${ img }/city/city-1.jpg` } />
            </div>

            <div className="photo col-xs-12 col-sm-12 col-md-12 col-lg-12">
              <LinkToImage url={ `${ img }/city/city-4.jpg` } />
            </div>

            <div className="photo col-xs-12 col-sm-12 col-md-6 col-lg-6">
              <LinkToImage url={ `${ img }/city/city-3.jpg` } />
            </div>

            <div className="photo col-xs-12 col-sm-12 col-md-6 col-lg-6">
              <LinkToImage url={ `${ img }/city/city-2.jpg` } />
            </div>

            <div className="photo col-xs-12 col-sm-12 col-md-6 col-lg-6">
              <LinkToImage url={ `${ img }/city/city-5.jpg` } />
            </div>

            <div className="photo col-xs-12 col-sm-12 col-md-6 col-lg-6">
              <LinkToImage url={ `${ img }/city/city-6.jpg` } />
            </div>

            <div className="photo col-xs-12 col-sm-12 col-md-12 col-lg-12">
              <LinkToImage url={ `${ img }/city/roof.jpg` } />
            </div>

          </div>

        </div>

        <div className="container">

          <div className="row">

            <div className="photo col-xs-12 col-sm-12 col-md-12 col-lg-12">
              <h2>
                { Language.translate('PumpDrinking') }
              </h2>

              <p>
                { Language.translate('PumpDrinkingText') }
              </p>
            </div>

            <div className="col-xs-12 col-sm-12 col-md-6 col-lg-6">
              <LinkToImage url={ `${ img }/water/drink-wrong.jpg` } />
              <p className="photo-sign">
                { Language.translate('PumpDrinkingWrong') }
              </p>
            </div>

            <div className="col-xs-12 col-sm-12 col-md-6 col-lg-6">
              <LinkToImage url={ `${ img }/water/drink.jpg` } />
              <p className="photo-sign">
                { Language.translate('PumpDrinkingRight') }
              </p>
            </div>

            <div className="photo col-xs-12 col-sm-12 col-md-4 col-lg-4">
              <LinkToImage url={ `${ img }/water/wash.jpg` } />
              <p className="photo-sign">
                { Language.translate('PumpDrinkingWash') }
              </p>
            </div>

            <div className="photo col-xs-12 col-sm-12 col-md-4 col-lg-4">
              <LinkToImage url={ `${ img }/water/bottle.jpg` } />
              <p className="photo-sign">
                { Language.translate('PumpDrinkingBottle') }
              </p>
            </div>

            <div className="photo col-xs-12 col-sm-12 col-md-4 col-lg-4">
              <LinkToImage url={ `${ img }/water/fun.jpg` } />
              <p className="photo-sign">
                { Language.translate('PumpDrinkingFun') }
              </p>
            </div>

          </div>

        </div>

        <div className="container">

          <div className="row">

            <div className="photo col-xs-12 col-sm-12 col-md-12 col-lg-12">
              <h2>
                { Language.translate('Life') }
              </h2>
            </div>

            <div className="photo col-xs-12 col-sm-12 col-md-6 col-lg-6">
              <LinkToImage url={ `${ img }/life/wedding-outside.jpg` } />
              <p className="photo-sign">
                { Language.translate('Wedding') }
              </p>
            </div>

            <div className="photo col-xs-12 col-sm-12 col-md-6 col-lg-6">
              <LinkToImage url={ `${ img }/life/wedding.jpg` } />
              <p className="photo-sign">
                { Language.translate('WeddingYeah') }
              </p>
            </div>

            <div className="photo col-xs-12 col-sm-12 col-md-8 col-lg-8">
              <LinkToImage url={ `${ img }/life/dog.jpg` } />
              <p className="photo-sign">
                { Language.translate('Dog') }
              </p>
            </div>

            <div className="photo col-xs-12 col-sm-12 col-md-4 col-lg-4">
              <LinkToImage url={ `${ img }/life/fisherman.jpg` } />
              <p className="photo-sign">
                { Language.translate('Fisherman') }
              </p>
            </div>

          </div>

        </div>

        <div className="container">
          <div className="row">

            <div className="photo col-xs-12 col-sm-12 col-md-12 col-lg-12">

              <h2>
                { Language.translate('Colosseum') }
              </h2>

            </div>

          </div>
        </div>

        <img src={ `${ img }/colosseum/pano-1.jpg` } />

        <div className="container">
          <div className="row">

            <div className="photo col-xs-12 col-sm-12 col-md-6 col-lg-6">
              <LinkToImage url={ `${ img }/colosseum/shop.jpg` } />
              <p className="photo-sign">
                { Language.translate('Shops') }
              </p>
            </div>

            <div className="photo col-xs-12 col-sm-12 col-md-6 col-lg-6">
              <LinkToImage url={ `${ img }/colosseum/bricks.jpg` } />
              <p className="photo-sign">
                { Language.translate('Bricks') }
              </p>
            </div>

          </div>
        </div>

        <div className="container">
          <div className="row">

            <div className="photo col-xs-12 col-sm-12 col-md-12 col-lg-12">

              <h2>
                { Language.translate('Parks') }
              </h2>

            </div>

          </div>
        </div>

        <img src={ `${ img }/parks/pano.jpg` } />

        <div className="container">
          <div className="row">

            <div className="photo col-xs-12 col-sm-12 col-md-12 col-lg-12">
              <LinkToImage url={ `${ img }/parks/nature-1.jpg` } />
            </div>

            <div className="photo col-xs-12 col-sm-12 col-md-12 col-lg-12">
              <LinkToImage url={ `${ img }/parks/nature-4.jpg` } />
            </div>

          </div>
        </div>

        <img src={ `${ img }/parks/nature-2.jpg` } />

        <div className="container">
          <div className="row">

            <div className="photo col-xs-12 col-sm-12 col-md-4 col-lg-4">
              <LinkToImage url={ `${ img }/parks/tadpole.jpg` } />
              <p className="photo-sign">
                { Language.translate('Tadpole') }
              </p>
            </div>

            <div className="photo col-xs-12 col-sm-12 col-md-4 col-lg-4">
              <LinkToImage url={ `${ img }/parks/tadpoles.jpg` } />
              <p className="photo-sign">
                { Language.translate('Tadpoles') }
              </p>
            </div>

            <div className="photo col-xs-12 col-sm-12 col-md-4 col-lg-4">
              <LinkToImage url={ `${ img }/parks/turtle.jpg` } />
              <p className="photo-sign">
                { Language.translate('Turtle') }
              </p>
            </div>

          </div>

        </div>

        <img src={ `${ img }/parks/japan-1.jpg` } />

        <div className="container">
          <div className="row">

            <div className="photo col-xs-12 col-sm-12 col-md-6 col-lg-6">
              <LinkToImage url={ `${ img }/parks/japan-2.jpg` } />
            </div>

            <div className="photo col-xs-12 col-sm-12 col-md-6 col-lg-6">
              <LinkToImage url={ `${ img }/parks/japan-3.jpg` } />
            </div>

          </div>

        </div>

        <div className="container">
          <div className="row">

            <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
              <h2>
                { Language.translate('Food') }
              </h2>

              <p>
                { Language.translate('FoodText') }
              </p>
            </div>

            <div className="photo col-xs-12 col-sm-12 col-md-6 col-lg-6">
              <LinkToImage url={ `${ img }/food/cafe.jpg` } />
            </div>

            <div className="photo col-xs-12 col-sm-12 col-md-6 col-lg-6">
              <LinkToImage url={ `${ img }/food/pizza.jpg` } />
            </div>

          </div>

        </div>

        <div className="container">
          <div className="row">

            <div className="photo col-xs-12 col-sm-12 col-md-12 col-lg-12">
              <h2>
                { Language.translate('Underground') }
              </h2>

              <p>
                { Language.translate('UndergroundText') }
              </p>
            </div>

          </div>
        </div>

        <img src={ `${ img }/underground/pano.jpg` } />

        <div className="container">
          <div className="row">

            <div className="photo col-xs-12 col-sm-12 col-md-8 col-lg-8">
              <LinkToImage url={ `${ img }/underground/train.jpg` } />
              <p className="photo-sign">
                { Language.translate('Trains') }
              </p>
            </div>

            <div className="photo col-xs-12 col-sm-12 col-md-4 col-lg-4">
              <LinkToImage url={ `${ img }/underground/elevator.jpg` } />
              <p className="photo-sign">
                { Language.translate('Elevator') }
              </p>
            </div>

            <div className="photo col-xs-12 col-sm-12 col-md-6 col-lg-6">
              <LinkToImage url={ `${ img }/underground/graffiti-1.jpg` } />
            </div>

            <div className="photo col-xs-12 col-sm-12 col-md-6 col-lg-6">
              <LinkToImage url={ `${ img }/underground/graffiti-2.jpg` } />
            </div>

            <div className="photo col-xs-12 col-sm-12 col-md-6 col-lg-6">
              <LinkToImage url={ `${ img }/underground/graffiti-3.jpg` } />
            </div>

            <div className="photo col-xs-12 col-sm-12 col-md-6 col-lg-6">
              <LinkToImage url={ `${ img }/underground/graffiti-4.jpg` } />
            </div>

            <div className="photo col-xs-12 col-sm-12 col-md-6 col-lg-6">
              <LinkToImage url={ `${ img }/underground/street-1.jpg` } />
            </div>

            <div className="photo col-xs-12 col-sm-12 col-md-6 col-lg-6">
              <LinkToImage url={ `${ img }/underground/street-2.jpg` } />
            </div>

          </div>

        </div>

        <div className="container">
          <div className="row">

            <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
              <h2>
                { Language.translate('Graffiti') }
              </h2>
            </div>

          </div>
        </div>

        <img src={ `${ img }/graffiti/pano-1.jpg` } />
        <img src={ `${ img }/graffiti/pano-2.jpg` } />

        <div className="container">
          <div className="row">

            <div className="photo col-xs-12 col-sm-12 col-md-6 col-lg-6">
              <LinkToImage url={ `${ img }/graffiti/graffiti-1.jpg` } />
            </div>

            <div className="photo col-xs-12 col-sm-12 col-md-6 col-lg-6">
              <LinkToImage url={ `${ img }/graffiti/graffiti-2.jpg` } />
            </div>

          </div>

        </div>

        <img src={ `${ img }/bottom.jpg` } className="photo-margin-top" />


        <NavFooter style="white bottom-on-photo" year={ year * 1 } month={ month } city={ city } language={ application.language } />
      </div>
    );
  }

}
