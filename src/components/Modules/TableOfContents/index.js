import React, { Component, PropTypes } from 'react';
import { observer } from 'mobx-react';

// Styles
import s from './index.css';

@observer
export default class Module extends Component {

  static contextTypes = {
    travel: PropTypes.object,
    works: PropTypes.object,
  };

  render() {
    const { travel, works } = this.context;

    return (
      <section className={s.root}>
        <h3>
          Table of contents
        </h3>
        <h4>
          Works
        </h4>
        {
          works.all.map((work, index) =>
            <a
              key={index}
              href={`#${work.title}`}
            >
              {work.title}
            </a>
          )
        }
        <h4>
          Trip reports
        </h4>
        {
          travel.all.map((report, index) =>
            report.cover &&
              <a
                key={index}
                href={`#${report.city}`}
              >
                {report.city}
              </a>
          )
        }
      </section>
    );
  }
}
