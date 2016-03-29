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
    const { work } = this.props.params;

    // Path to photos
    const path = `./app/components/Content/Works/${work}/files`;

    // Application settings
    const { language } = this.props;

    // Set language
    Language.setLocale(language);

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

            </div>

            <div className="col-xs-12 col-sm-12 col-md-4 col-lg-4 col-md-offset-4 col-lg-offset-4 images-block">
              <h4>
                { Language.translate('Home') }
              </h4>
              <img src={ ` ${path}/dock-phone.png` } />
            </div>

            <div className="col-xs-12 col-sm-12 col-md-4 col-lg-4 col-md-offset-4 col-lg-offset-4 images-block">
              <h4>
                { Language.translate('Sound') }
              </h4>
              <img src={ ` ${path}/ringer-phone.png` } />
            </div>

            <div className="col-xs-12 col-sm-12 col-md-4 col-lg-4 col-md-offset-4 col-lg-offset-4 images-block">
              <h4>
                { Language.translate('Group') }
              </h4>
              <img src={ ` ${path}/group-phone.png` } />
            </div>

            <div className="col-xs-12 col-sm-12 col-md-4 col-lg-4 col-md-offset-4 col-lg-offset-4 images-block">
              <h4>
                { Language.translate('Multitask') }
              </h4>
              <img src={ ` ${path}/task-phone.png` } />
            </div>

            <div className="col-xs-12 col-sm-12 col-md-4 col-lg-4 col-md-offset-4 col-lg-offset-4 images-block">
              <h4>
                { Language.translate('Drag') }
              </h4>
              <img src={ ` ${path}/icon-phone.png` } />
            </div>

            <div className="col-xs-12 col-sm-12 col-md-8 col-lg-8 col-md-offset-2 col-lg-offset-2 images-block">
              <h2>
                { Language.translate('Bonus') }
              </h2>
              <div className="responsive-container">
                <iframe width="960" height="720"
                  src="//www.youtube.com/embed/n5X8ANp04b8"
                  frameBorder="0" allowFullScreen
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

}
