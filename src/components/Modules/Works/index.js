import React, { Component, PropTypes } from 'react';
import { observer } from 'mobx-react';
import R from 'ramda';

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

    const types = ['all'];
    let filteredWorks = {};

    works.all.map((work) => {
      types.push(work.type);
    });

    if (app.type !== 'All') {
      filteredWorks = R.filter(R.propEq('type', app.type))(works.all);
    } else {
      filteredWorks = works.all;
    }

    return (
      <section className={s.root}>
        {
          R.uniq(types).map((type) =>
            <span
              className={s.type}
              onClick={() => {
                app.changeType(type);
              }}
            >
              {type}
            </span>
          )
        }
        {
          filteredWorks.map((work, index) => {
            const component = [];

            work.link.split('-').map((word) =>
              component.push(this.capitalizeFirstLetter(word))
            );

            return (
              <div
                key={index}
                className={s.work}
              >
                {
                  React.createElement(
                    Works[component.join('')],
                    props,
                  )
                }
              </div>
            );
          })
        }
      </section>
    );
  }
}
