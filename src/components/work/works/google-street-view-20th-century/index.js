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
                { Language.translate('Text') }
              </p>
            </div>

            <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
              <div className="responsive-container">
                <iframe src="https://www.google.com/maps/embed?pb=!1m0!3m2!1sen!2s!4v1450984193097!6m8!1m7!1svi6B_N4KMxCQ7a7YNK33Rg!2m2!1d59.93816577301972!2d30.31553520547882!3f356.8860847078911!4f-0.7391829729079404!5f0.7820865974627469"
                  width="600"
                  height="450"
                  frameBorder="0"
                  allowFullScreen />
              </div>

              <svg id="svg-image-blur">
                <filter id="sepia">
                  <feColorMatrix type="saturate" values="0"/>
                  <feColorMatrix
                    type="matrix"
                    values=".343 .669 .119 0 0
                            .249 .626 .130 0 0
                            .172 .334 .111 0 0
                            .000 .000 .000 1 0 "/>
                </filter>
              </svg>

            </div>
          </div>
        </div>
      </div>
    );
  }

}
