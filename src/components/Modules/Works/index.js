import React, { Component, PropTypes } from 'react';
import { observer } from 'mobx-react';

// Components
import * as Works from '../../Content/Works/index.js';

// Styles
import s from './index.css';

@observer
export default class Module extends Component {

  static contextTypes = {
    works: PropTypes.object,
  };

  capitalizeFirstLetter = (string) =>
      string.charAt(0).toUpperCase() + string.slice(1);

  render() {
    const { works } = this.context;
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
              <span key={index}>
                {
                  React.createElement(
                    Works[component.join('')],
                    props,
                  )
                }
              </span>
            );
          })
        }
      </section>
    );
  }
}
