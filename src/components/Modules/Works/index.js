import React, { Component, PropTypes } from 'react';
import { observer } from 'mobx-react';
import cx from 'classnames';

// Constants
import { path } from 'constants/config';

// Components
import * as Works from '../../Content/Works/index.js';

// Styles
import s from './index.css';

@observer
export default class WorksPage extends Component {

  static contextTypes = {
    app: PropTypes.shape,
    works: PropTypes.shape,
  };

  capitalizeFirstLetter = (string) =>
      string.charAt(0).toUpperCase() + string.slice(1);

  render() {
    const { app, works } = this.context;

    const props = {
      ...this.props,
      language: 'en',
    };

    return (
      <section className={s.root}>
        {
          works.all.map((work, index) => {
            const component = [];

            work.link.split('-').map((word) =>
              component.push(this.capitalizeFirstLetter(word)),
            );

            return (
              <section key={index}>
                <a
                  name={work.link}
                  className={cx(
                    s.anchor,
                    { [s.hide]: app.type !== 'all' && work.type !== app.type },
                  )}
                />
                1
              </section>
            );
          })
        }
      </section>
    );
  }
}
