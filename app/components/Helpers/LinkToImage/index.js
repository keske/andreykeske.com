import React, { Component, PropTypes } from 'react';

export default class LinkToImage extends Component {

  static propTypes = {
    url: PropTypes.string,
  };

  render() {
    const { url } = this.props;

    return (
      <a target="_blank" href={url}>
        <img src={url} />
      </a>
    );
  }
}
