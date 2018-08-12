import React, { Component } from 'react';
import cx from 'classnames';

// Components
import * as Works from '../../Content/Works/index.js';

import works from '../../../constants/works';

// Styles
import s from './index.css';

export default class WorksRender extends Component {

  capitalizeFirstLetter = (string) =>
    string.charAt(0).toUpperCase() + string.slice(1);

  render() {
    const props = {
      ...this.props,
      language: 'en',
    };

    return (
      <section className={s.root}>
        {
          works.map((work, index) => {
            const component = [];

            work.link.split('-').map((word) => {
              component.push(this.capitalizeFirstLetter(word));
            });
            return (
              <section
                key={index}
                className="work"
                data-link={work.link}
              >
                <a
                  name={work.link}
                  className={cx(
                    s.anchor,
                  )}
                />
                <div
                  key={index}
                  className={cx(
                    s.work,
                  )}
                >
                  {
                    React.createElement(
                      Works[component.join('')],
                      {
                        ...props,
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
