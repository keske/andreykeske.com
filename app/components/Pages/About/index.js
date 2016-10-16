import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import DocumentMeta from 'react-document-meta';
import { Grid, Row, Col } from 'react-bootstrap';

// Components
import { Footer } from '../../Modules/Footer';

// Component styles
import { styles } from './styles.scss';

// Language
import Language from './locale/';

const me = require('./files/me-in-glitch.jpg');

@connect(
  state => ({
    language: state.application.language,
  }),
)
export default class About extends Component {

  static propTypes = {
    language: PropTypes.string,
  };

  componentDidMount() {
    window.scrollTo(0, 0);
  }

  render() {
    const { language } = this.props;

    // Set language
    Language.setLocale(language);

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
              xs={10} xsOffset={1}
              sm={4}
              md={4} mdOffset={2}
              lg={4} lgOffset={2}
            >
              <img
                src={me}
                className="face"
                alt={Language.translate('AndreyKeske')}
              />
            </Col>

            <Col
              xs={10} xsOffset={1}
              sm={6} smOffset={1}
              md={6} mdOffset={0}
              lg={6} lgOffset={0}
            >
              <h1>
                Hello there!
              </h1>

              <p>
                I'm Andrey Keske (29). I'm a kind of artist (artist between such disciplines as code, design, ui hacking, street art and etc).
              </p>

              <p>
                I live in Saint Petersburg, Russia.
              </p>

              <p>
                In professional life I'm working as a freelance front end developer for few companies which based in New York, San Francisco and Berlin.
              </p>

              <h3>
                Get in touch with me
              </h3>

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
                    Instagram: personal
                  </a> / <a href="https://instagram.com/keskeandrey/">
                   art works
                  </a>
                </li>
              </ul>
            </Col>
          </Row>
          <Footer />
        </Grid>
      </section>
    );
  }
}
