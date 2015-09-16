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

              <a target="_blank" href={ ` ${path}/index.html` }>
                <img src={ ` ${path}/work.jpg` } />
              </a>
              <h4>
                <a target="_blank" href={ ` ${path}/index.html` }>Open page</a>
              </h4>

            </div>
          </div>
        </div>
      </div>
    );
  }

}
