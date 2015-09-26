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
    const path = `./src/components/Works/Work/works/${ work }/files`;

    // Application settings
    const { application } = this.props;

    // Set language
    Language.setLocale(application.language);

    const metaData = {
      title: `${ Language.translate('Title') }`,
      description: `${ Language.translate('EmpiteStateBuilding') } ${ Language.translate('SpaceInvaders') }`,
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
                { Language.translate('EmpiteStateBuilding') }
              </h2>

              <h4>
                <a href={ `${ path }/empire.andreykeske.com/index.html` }>
                  { Language.translate('Open') }
                </a>
              </h4>

              <a href={ `${ path }/empire.andreykeske.com/index.html` }>
                <img src={ `${ path }/empire.andreykeske.com/empire-state.jpg` } />
              </a>

              <h2>
                { Language.translate('SpaceInvaders') }
              </h2>

              <h4>
                <a href={ `${ path }/spaceinvaders.andreykeske.com/index.html` }>
                  { Language.translate('Open') }
                </a>
              </h4>

              <a href={ `${ path }/spaceinvaders.andreykeske.com/index.html` }>
                <img src={ `${ path }/spaceinvaders.andreykeske.com/spaceinvaders.jpg` } />
              </a>

            </div>
          </div>
        </div>
      </div>
    );
  }

}
