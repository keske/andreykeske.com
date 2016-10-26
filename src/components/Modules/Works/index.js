import React, { Component, PropTypes } from 'react';
import { observer } from 'mobx-react';
import cx from 'classnames';
import R from 'ramda';

// Constants
import { path } from 'constants/config';

// Components
import * as Works from '../../Content/Works/index.js';

// Styles
import s from './index.css';

@observer
export default class Module extends Component {

  static contextTypes = {
    app: PropTypes.object,
    works: PropTypes.object,
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
              component.push(this.capitalizeFirstLetter(word))
            );

            return (
              <section>
                <a
                  name={work.link}
                  className={s.anchor}
                />
                <div
                  key={index}
                  className={cx(
                    s.work,
                    { [s.hide]: app.type !== 'all' && work.type !== app.type },
                  )}
                >
                  {
                    React.createElement(
                      Works[component.join('')],
                      {
                        ...props,
                        link: `${path}src/components/Content/Works/${work.link}/files`,
                      },
                    )
                  }
                </div>
              </section>
            );
          })
        }
      </section>
    );
  }
}
