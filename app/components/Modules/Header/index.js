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

  // componentDidMount() {
  //   window.addEventListener('scroll', this.hideHeader);
  // }

  // componentWillUnmount() {
  //   window.removeEventListener('scroll', this.hideHeader);
  // }

  // Smooth hide header when scrolling
  // hideHeader = () => {
  //   const opacity = 1 - (window.pageYOffset / 50).toFixed(1);
  //   this.refs.header.style.opacity = opacity;
  // }

  // Togle language between `ru` and `en`
  toggleLanguage = () => {
    // const { dispatch, language } = this.props;

    // language === 'ru'
    //   ? dispatch(setLanguage('en'))
    //   : dispatch(setLanguage('ru'));
  }

  render() {
    const {
      props: {
        language, mode,
      },
    } = this;

    // Set language
    Language.setLocale(language);

    return (
      <section ref="header">
        <Grid className={styles}>
          <Row>
            <Col
              xs={12}
              sm={12}
              md={12}
              lg={12}
            >
              <Link
                to="/"
                className="nav"
                activeClassName="active"
              >
                { Language.translate('AndreyKeske') }
              </Link>

              <Link
                to={`/${language}/works`}
                className="nav"
                activeClassName="active"
              >
                { Language.translate('Works') }
              </Link>

              <Link
                to={`/${language}/streets`}
                className="nav"
                activeClassName="active"
              >
                { Language.translate('Streets') }
              </Link>

              <Link
                to={`/${language}/posters`}
                className="nav"
                activeClassName="active"
              >
                { Language.translate('Posters') }
              </Link>

              <Link
                to={`/${language}/travel/${mode}` }
                className="nav"
                activeClassName="active"
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
