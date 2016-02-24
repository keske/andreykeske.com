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
      title: `${ Language.translate('Title') } — ${ Language.translate('Text') }`,
      description: Language.translate('Text'),
      meta: {
        charset: 'utf-8',
        name: {
          keywords: Language.translate('Title'),
        },
      },
    };

    return (
      <div className={styles}>
        <DocumentMeta {...metaData} />
        <div className="container">
          <div className="row">
            <div className="col-xs-12 col-sm-12 col-md-8 col-lg-8
              col-md-offset-2 col-lg-offset-2">

              <h1>
                { Language.translate('Title') }
              </h1>
              <p>
                { Language.translate('Text') }
              </p>

              <h2>
                { Language.translate('Result') }
              </h2>
              <img src={ `${ path }/ipad-1.jpg` } />

              <h2>
                { Language.translate('Closer') }
              </h2>
              <img src={ `${ path }/ipad-2.jpg` } />

              <h2>
                { Language.translate('EvenCloser') }
              </h2>
              <img src={ `${ path }/ipad-3.jpg` } />


              <h2>
                { Language.translate('How') }
              </h2>

              <ul>
                <li>
                  { Language.translate('Screenshot') }
                </li>
                <li>
                  { Language.translate('Background') }
                </li>
                <li>
                  { Language.translate('Apps') }
                </li>
                <li>
                  { Language.translate('Finally') }
                </li>
              </ul>

            </div>
          </div>
        </div>
      </div>
    );
  }

}
