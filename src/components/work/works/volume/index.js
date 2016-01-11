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
      title: `${ Language.translate('Title') } — ${ Language.translate('FadeTitle') } - ${ Language.translate('ResizeTitle') }`,
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

              <h2>
                { Language.translate('FadeTitle') }
              </h2>

              <p>
                { Language.translate('FadeText1') }
                <br />
                { Language.translate('FadeText2') }
              </p>

              <h4>
                <a href={ `${path}/volume.andreykeske.com/index.html` }>
                  { Language.translate('OpenAndScroll') }
                </a>
              </h4>

              <br />

              <a href={ `${path}/volume.andreykeske.com/index.html` }>
                <img src={ `${path}/fade.jpg` } />
              </a>

              <h2>
                { Language.translate('ResizeTitle') }
              </h2>

              <p>
                { Language.translate('ResizeText') }
              </p>

              <h4>
                <a href={ `${path}/resize.andreykeske.com/index.html` }>
                  { Language.translate('OpenAndResize') }
                </a>
              </h4>

              <br />

              <a href={ `${path}/resize.andreykeske.com/index.html` }>
                <img src={ `${path}/resize.jpg` } />
              </a>

            </div>
          </div>
        </div>
      </div>
    );
  }

}
