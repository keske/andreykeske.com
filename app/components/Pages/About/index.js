import React, { Component } from 'react';
import DocumentMeta from 'react-document-meta';
import { Grid, Row, Col } from 'react-bootstrap';

// Component styles
import { styles } from './styles.scss';

// Language
import Language from './locale/';

import Footer from '../../Modules/Footer';
export default class About extends Component {

  static propTypes = {
    application: React.PropTypes.object,
  };

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
      <section className={styles}>
        <DocumentMeta {...metaData} />
        <Grid>
          <Row>
            <Col
              xs={12}
              sm={12}
              md={12} mdOffset={2}
              lg={12} lgOffset={2}
            >
              <img
                src={require('./files/me.jpg')}
                className="face"
                alt={ Language.translate('AndreyKeske') }
              />

              <h3>
                { Language.translate('AndreyKeske') }
              </h3>

              <p>
                { Language.translate('Do') }
              </p>

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
            </Col>
          </Row>
        </Grid>
        <Footer />
      </section>
    );
  }
}
