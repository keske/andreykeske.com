import React, { Component } from 'react';
import { connect } from 'react-redux';

// Component styles
import styles from './styles.js';

// Language
import Language from './locale/';

@connect(state => state.application)
export default class Work extends Component {

  static propTypes = {
    params: React.PropTypes.object,
    application: React.PropTypes.object,
  }

  render() {
    const { work } = this.props.params;

    // Path to photos
    const path = `./src/components/Works/Work/works/${ work }/files`;

    // Application settings
    const { application } = this.props;

    // Set language
    Language.setLocale(application.language);

    return (
      <div className={ styles }>
        <div className="container">
          <div className="row">
            <div className="col-xs-12 col-sm-12 col-md-8 col-lg-8
              col-md-offset-2 col-lg-offset-2">

              <h1>
                { Language.translate('Title') }
              </h1>
              <p>
                { Language.translate('About') }
              </p>
              <p>
                { Language.translate('Text') }
              </p>

            </div>
          </div>

          <div className="row images-block">
            <div className="col-xs-12 col-sm-12 col-md-6 col-lg-6">
              <img src={ `${path}/1.jpeg` } />
            </div>

            <div className="col-xs-12 col-sm-12 col-md-6 col-lg-6">
              <img src={ `${path}/2.jpeg` } />
            </div>
          </div>

          <br />

          <div className="row">
            <div className="col-xs-12 col-sm-12 col-md-6 col-lg-6">
              <img src={ `${path}/3.jpeg` } />
            </div>

            <div className="col-xs-12 col-sm-12 col-md-6 col-lg-6">
              <img src={ `${path}/4.jpeg` } />
            </div>
          </div>
        </div>
      </div>
    );
  }

}