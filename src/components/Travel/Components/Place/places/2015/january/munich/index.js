import React, { Component } from 'react';

// Components
import { LinkToImage } from '../../../../../../../../components/';
import NavFooter from '../../../../components/navFooter/navFooter.js';

// Component styles
import styles from './styles.js';

export default class PragueInDecember2014 extends Component {

  static propTypes = {
    params: React.PropTypes.object,
  }

  render() {
    const { year, month, city, language } = this.props.params;

    // Path to photos
    const img = `./src/components/Travel/Components/Place/places/${ year }/${ month }/${ city.replace(/ /g, '') }/images`;

    return (
      <div className={ styles }>
        <div className="container">

          <div className="row">

            <div className="photo col-xs-12 col-sm-12 col-md-6 col-lg-6">
              <LinkToImage url={ `${ img }/1.jpg` } />
            </div>

            <div className="photo col-xs-12 col-sm-12 col-md-6 col-lg-6">
              <LinkToImage url={ `${ img }/2.jpg` } />
            </div>

          </div>

        </div>

        <NavFooter style="white" year={ year * 1 } month={ month } city={ city } language={ language } />
      </div>
    );
  }

}
