import React, { Component } from 'react';
import { connect } from 'react-redux';
import DocumentMeta from 'react-document-meta';

// Component styles
import styles from './styles.js';

// Language
import Language from './locale/';

import Footer from '../footer';

@connect(state => state.application)
export default class About extends Component {

  static propTypes = {
    application: React.PropTypes.object,
  }

  render() {
    const { application } = this.props;

    // Set language
    Language.setLocale(application.language);

    const metaData = {
      title: Language.translate('AndreyKeske'),
      description: Language.translate('AndreyKeske'),
      meta: {
        charset: 'utf-8',
        name: {
          keywords: Language.translate('AndreyKeske'),
        },
      },
    };

    return (
      <section>
        <div className={ `${ styles } container` }>
          <DocumentMeta {...metaData} />
          <div className="row">
            <div className="col-xs-12 col-sm-12 col-md-8 col-lg-8
                col-md-offset-2 col-lg-offset-2">

              <img src="me.jpg" className="face" alt="Andrey Keske" />

              <p>
                { Language.translate('Do') }
              </p>

              <h2>
                { Language.translate('Touch') }
              </h2>

              <ul>
                <li>
                  <a href="mailto:hello@andreykeske.com">
                    hello@andreykeske.com
                  </a>
                </li>
                <li>
                  <a href="https://github.com/keske">
                    Github
                  </a>
                </li>
                <li>
                  <a href="https://www.facebook.com/andrey.keske">
                    Facebook
                  </a>
                </li>
                <li>
                  <a href="https://instagram.com/andreykeske/">
                    Instagram
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <Footer />
      </section>
    );
  }
}
