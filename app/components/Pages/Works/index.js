import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import DocumentMeta from 'react-document-meta';
import R from 'ramda';
import { Grid, Row, Col } from 'react-bootstrap';

import { setTravelViewMode } from '../../../reducers/modules/application';
import { loadWorks } from '../../../reducers/modules/works';

const me = require('./files/me-in-glitch.jpg');

// Components
import { Footer } from '../../Modules/Footer';
import Preview from '../../Helpers/Works/Preview';

// Component styles
import { styles } from './styles.scss';

// Language
import Language from '../../Modules/Header/locale/';

@connect(
  state => ({
    language: state.application.language,
    mode: state.application.mode,
    works: state.works.data,
  }),
  dispatch => bindActionCreators({
    setTravelViewMode,
    loadWorks,
  }, dispatch)
)
export default class Works extends Component {

  static propTypes = {
    language: PropTypes.string,
    params: PropTypes.object,
    works: PropTypes.array,
    loadWorks: PropTypes.func,
  };

  componentDidMount() {
    this.props.loadWorks();
  }

  render() {
    const { language, works } = this.props;

    // Set language
    Language.setLocale(language);

    if (R.isEmpty(works)) {
      return <p className="loading">⠵</p>;
    }

    const metaData = {
      title: Language.translate('Works'),
      description: Language.translate('Works'),
      meta: {
        charset: 'utf-8',
        name: {
          keywords: Language.translate('Works'),
        },
      },
    };

    return (
      <section className={styles}>
        <DocumentMeta {...metaData} />

        <Grid className="about">
          <Row>
            <Col
              xs={10} xsOffset={0}
              sm={4} smOffset={0}
              md={3} mdOffset={0}
              lg={3} lgOffset={0}
            >
              <img
                src={me}
                className="face"
                alt={Language.translate('AndreyKeske')}
              />
            </Col>

            <Col
              xs={10} xsOffset={0}
              sm={6} smOffset={0}
              md={6} mdOffset={0}
              lg={6} lgOffset={0}
            >
              <p>
                I'm Andrey Keske (29). I'm a kind of artist (artist between such disciplines as code, design, ui hacking, street art and etc).
              </p>

              <p>
                I live in Saint Petersburg, Russia.
              </p>

              <p>
                In professional life I'm working as a freelance front end developer for few companies which based in New York, San Francisco and Berlin.
              </p>

              <a href="mailto:hello@andreykeske.com">
                hello@andreykeske.com
              </a>

              <a href="https://github.com/keske">
                Github
              </a>

              <a href="https://www.facebook.com/andrey.keske">
                Facebook
              </a>

              <a href="https://instagram.com/andreykeske/">
                @andreykeske
              </a><a href="https://instagram.com/keskeandrey/">
                @keskeandrey
              </a>

            </Col>
          </Row>
          <h1 className="title">
            {Language.translate('Works')}
          </h1>
        </Grid>

        <div className="container">
          {
            works.map((work, key) => {
              const data = {
                work,
                language,
              };
              return <Preview {...data} key={key} />;
            })
          }
        </div>

        <Footer />
      </section>
    );
  }
}
