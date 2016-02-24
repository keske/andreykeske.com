import React, { Component } from 'react';
import DocumentMeta from 'react-document-meta';

import * as cities from './places/index.js';

// Component styles
import { styles } from './styles/styles.scss';

export default class Place extends Component {

  static propTypes = {
    routeParams: React.PropTypes.object,
    language: React.PropTypes.string,
  };

  componentDidMount() {
    window.scrollTo(0, 0);
  }

  render() {
    const { year, month, city } = this.props.routeParams;
    const component = `${city.replace(/ /g, '')}In${month}${year}`;

    const metaData = {
      title: `${city} In ${month} ${year}`,
      description: `${year} ${month} ${city}`,
      meta: {
        charset: 'utf-8',
        name: {
          keywords: `${year}, ${month}, ${city}`,
        },
      },
    };

    return (
      <div className={styles}>
        <DocumentMeta {...metaData} />
        {React.createElement(cities[component], this.props)}
      </div>
    );
  }
}
