import React, { Component } from 'react';
import { connect } from 'react-redux';
import DocumentMeta from 'react-document-meta';

// Component styles
import { styles } from './styles/styles.scss';

// Language
import Language from './locale/';

@connect(state => state.application)
export default class StraightFlush extends Component {

  static propTypes = {
    params: React.PropTypes.object,
    application: React.PropTypes.object,
  };

  render() {
    // Application settings
    const { application } = this.props;

    // Set language
    Language.setLocale(application.language);

    const metaData = {
      title: `${Language.translate('Title')} — ${Language.translate('Text')}`,
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
            <div className={`
                col-xs-12
                col-sm-12
                col-md-8 col-md-offset-2
                col-lg-8 col-lg-offset-2
            `}
            >

              <h1>
                { Language.translate('Title') }
              </h1>
              <p>
                { Language.translate('Text') }
              </p>

              <div className="responsive-container">
                <iframe width="420" height="315" src="https://www.youtube.com/embed/oARU7GLKj3Y"
                  frameBorder="0" allowFullScreen />
              </div>

            </div>
          </div>
        </div>
      </div>
    );
  }

}