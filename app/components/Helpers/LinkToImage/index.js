import React, { PropTypes } from 'react';

const LinkToImage = ({ url }) =>
  <a target="_blank" href={url}>
    <img
      src={url}
      role="presentation"
    />
  </a>;


LinkToImage.propTypes = {
  url: PropTypes.string,
};

export default LinkToImage;
