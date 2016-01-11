import React, { Component } from 'react';
import { connect } from 'react-redux';
import DocumentMeta from 'react-document-meta';

// Component styles
import { styles } from './styles/styles.scss';

// Language
import Language from './locale/';

@connect(state => state.application)
export default class Work extends Component {

  static propTypes = {
    params: React.PropTypes.object,
    application: React.PropTypes.object,
  };

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

              <h2>
                { Language.translate('Emojii') }
              </h2>
              <img src={ `${ path }/emojii.jpeg` } />

              <hr />

              <h2>
                { Language.translate('Rosette') }
              </h2>
              <img src={ `${ path }/Rossete.jpg` } />

              <hr />

              <h2>
                { Language.translate('Paralympic') }
              </h2>
              <div className="no-width-image">
                <img src={ `${ path }/paralympic.jpg` } />
              </div>

              <hr />

              <h2>
                { Language.translate('Slave') }
              </h2>

              <img src={ `${ path }/rub.jpg` } />

              <h2>
                { Language.translate('Cola') }
              </h2>
              <div className="no-width-image">
                <img src={ `${ path }/cola.jpg` } />
              </div>

              <hr />

              <h2>
                { Language.translate('Sneakers') }
              </h2>
              <p>
                { Language.translate('SneakersText1') }
                <br />
                { Language.translate('SneakersText2') }
              </p>
              <img src={ `${ path }/sneakers.jpg` } />

              <hr />

              <h2>
                { Language.translate('InvertManhattan') }
              </h2>
              <img src={ `${ path }/invert_manhattan.jpg` } />

            </div>
          </div>
        </div>
      </div>
    );
  }

}
