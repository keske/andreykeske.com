import React, { Component, PropTypes } from 'react';
import { Grid, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router';

// Component styles
import { styles } from './styles.scss';

// Language
import Language from './locale/';

export default class Header extends Component {

  static propTypes = {
    language: PropTypes.string,
    mode: PropTypes.string,
    dispatch: PropTypes.func,
  };

  componentDidMount() {
    window.addEventListener('scroll', this.hideHeader);
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.hideHeader);
  }

  // Smooth hide header when scrolling
  hideHeader = () => {
    const opacity = 1 - (window.pageYOffset / 50).toFixed(1);
    this.refs.header.style.opacity = opacity;
  }

  // Togle language between `ru` and `en`
  toggleLanguage = () => {
    // const { dispatch, language } = this.props;

    // language === 'ru'
    //   ? dispatch(setLanguage('en'))
    //   : dispatch(setLanguage('ru'));
  }

  render() {
    const { language, mode } = this.props;

    // Set language
    Language.setLocale(language);

    return (
      <section className={`${styles}`} ref="header">
        <Grid>
          <Row>
            <Col
              xs={4}
              sm={4}
              md={2}
              lg={2}
            >
              <Link to="/">
                { Language.translate('AndreyKeske') }
              </Link>
            </Col>

            <Col
              xs={7}
              sm={7}
              md={9}
              lg={9}
              className="header-nav"
            >
              <Link to={`/${language}/works`} className="nav">
                { Language.translate('Works') }
              </Link>

              <Link
                to={`/${language}/travel/${mode}` }
                className="nav"
              >
                { Language.translate('Travel') }
              </Link>
            </Col>
          </Row>
        </Grid>
      </section>
    );
  }
}
