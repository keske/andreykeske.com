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
              <div className="responsive-container">
                <iframe width="960" height="720"
                  src="//www.youtube.com/embed/8P2lZcFDNw0"
                  frameBorder="0" allowFullScreen />
              </div>

            </div>
          </div>
        </div>
      </div>
    );
  }

}
