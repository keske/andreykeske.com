import React, { Component, PropTypes } from 'react';
import { observer } from 'mobx-react';
import cx from 'classnames';

// Components
import * as Works from '../../Content/Works/index.js';

// Styles
import s from './index.css';

@observer
export default class WorksRender extends Component {

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
              component.push(this.capitalizeFirstLetter(word)),
            );

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
                    { [s.hide]: app.type !== 'all' && work.type !== app.type },
                  )}
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
