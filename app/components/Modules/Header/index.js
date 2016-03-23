import React, { Component } from 'react';
import { Grid, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router';

// Actions
import { setLanguage } from '../../../actions/application.js';

// Component styles
import { styles } from './styles.scss';

// Language
import Language from './locale/';

export default class Header extends Component {

  static propTypes = {
    application: React.PropTypes.object,
    dispatch: React.PropTypes.func,
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
    const { dispatch, application } = this.props;

    application.language === 'ru'
      ? dispatch(setLanguage('en'))
      : dispatch(setLanguage('ru'));
  }

  render() {
    const { application } = this.props;

    // Set language
    Language.setLocale(application.language);

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
              <Link to={`/${application.language}/works`} className="nav">
                { Language.translate('Works') }
              </Link>

              <Link
                to={`/${application.language}/travel/${application.mode}` }
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
