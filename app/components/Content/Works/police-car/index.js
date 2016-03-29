import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import DocumentMeta from 'react-document-meta';

// Component styles
import { styles } from './styles/styles.scss';

// Language
import Language from './locale/';

@connect(state => state.application)
export default class Work extends Component {

  static propTypes = {
    params: PropTypes.object,
    language: PropTypes.string,
  };

  render() {
    // Application settings
    const { language } = this.props;

    // Set language
    Language.setLocale(language);

    const metaData = {
      title: `${ Language.translate('Title') } — ${ Language.translate('Intro') }`,
      description: Language.translate('Intro'),
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
                { Language.translate('Intro') }
              </p>

              <h2>{ Language.translate('How') }</h2>

              <p>
                { Language.translate('HowText') }
              </p>

              <div className="responsive-container">
                <iframe width="960" height="720" src="//www.youtube.com/embed/WrUCOit8adQ"
                  frameBorder="0"
                  allowFullScreen></iframe>
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
