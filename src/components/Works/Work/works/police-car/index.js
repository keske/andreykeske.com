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
                { Language.translate('Intro') }
              </p>

              <h2>{ Language.translate('How') }</h2>

              <p>
                { Language.translate('HowText') }
              </p>

              <div className="responsive-container">
                <iframe width="960" height="720" src="//www.youtube.com/embed/WrUCOit8adQ" frameborder="0" allowfullscreen></iframe>
              </div>

              <h2>
                { Language.translate('Repeat') }
              </h2>

              <ul>
                <li>
                  { Language.translate('li_1') }
                </li>
                <li>
                  { Language.translate('li_2') }
                </li>
                <li>
                  { Language.translate('li_3') }
                </li>
                <li>
                  { Language.translate('li_4') }
                </li>
                <li>
                  { Language.translate('li_5') }
                </li>
                <li>
                  { Language.translate('li_6') }
                </li>
              </ul>

              <i>
                { Language.translate('System') }
              </i>

            </div>
          </div>
        </div>
      </div>
    );
  }

}
