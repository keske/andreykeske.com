import React, { Component, PropTypes } from 'react';
import { Link } from 'react-router';
import cx from 'classnames';

// Component styles
import { styles } from './styles.scss';

// Language
import Language from './locale/';

export default class Header extends Component {

  static propTypes = {
    language: PropTypes.string,
    mode: PropTypes.string,
  };

  constructor(props) {
    super(props);

    this.state = {
      showMenu: false,
    };
  }

  handleMenu = () => {
    const {
      state: {
        showMenu,
      },
    } = this;

    this.setState({
      showMenu: !showMenu,
    });
  }

  render() {
    const {
      state: {
        showMenu,
      },
      props: {
        language, mode,
      },
    } = this;

    // Set language
    Language.setLocale(language);

    const renderMenu = () =>
      <div className={cx('menu', { show: showMenu })}>
        <Link
          className="nav"
          activeClassName="active"
          onClick={() => {
            this.setState({
              showMenu: false,
            });
          }}
          to="/about"
        >
          { Language.translate('AndreyKeske') }
        </Link>

        <Link
          className="nav"
          activeClassName="active"
          onClick={() => {
            this.setState({
              showMenu: false,
            });
          }}
          to={`/${language}/works`}
        >
          { Language.translate('Works') }
        </Link>

        <Link
          className="nav"
          activeClassName="active"
          onClick={() => {
            this.setState({
              showMenu: false,
            });
          }}
          to={`/${language}/travel/${mode}` }
        >
          { Language.translate('Travel') }
        </Link>
      </div>;

    return (
      <section className={styles}>
        <span
          className="burger"
          onClick={this.handleMenu}
        >
          🍔
        </span>
        { renderMenu() }
      </section>
    );
  }
}
