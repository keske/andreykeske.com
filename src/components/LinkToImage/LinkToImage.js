import React, { Component } from 'react';

export default class LinkToImage extends Component {

  static propTypes = {
    url: React.PropTypes.string,
  }

  render() {
    const { url } = this.props;

    return (
      <a target="_blank" href={ url }>
        <img src={ url } />
      </a>
    );
  }
}
