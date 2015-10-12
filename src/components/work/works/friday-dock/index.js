import React, { Component } from 'react';
import { connect } from 'react-redux';
import DocumentMeta from 'react-document-meta';

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
    const path = `./src/components/work/works/${ work }/files`;

    // Application settings
    const { application } = this.props;

    // Set language
    Language.setLocale(application.language);

    const metaData = {
      title: `${ Language.translate('Title') }`,
      description: `${ Language.translate('Title') }`,
      meta: {
        charset: 'utf-8',
        name: {
          keywords: Language.translate('Title'),
        },
      },
    };

    return (
      <div className={ styles }>
        <DocumentMeta {...metaData} />
        <div className="container">
          <div className="row">
            <div className="col-xs-12 col-sm-12 col-md-8 col-lg-8
              col-md-offset-2 col-lg-offset-2">

              <h1>
                { Language.translate('Title') }
              </h1>

              <p>
                { Language.translate('Normal') }
              </p>

              <img src={ `${ path }/normal.jpg` } />

              <hr />

              <p>
                { Language.translate('Friday') }
              </p>

              <img src={ `${ path }/friday-dock.jpg` } />

              <hr />

              <h4>
                <a href={ `${ path }/friday-apps.zip` }>
                  { Language.translate('Download') }
                </a>
              </h4>

            </div>
          </div>
        </div>
      </div>
    );
  }

}
