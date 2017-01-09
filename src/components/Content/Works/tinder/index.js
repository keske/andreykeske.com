import React, { PropTypes } from 'react';

const Work = () => (
  <div>
    <div className="responsive-container">
      <iframe
        width="100%"
        height="500"
        src="https://www.youtube.com/embed/oM9n7OeZw1c"
        frameBorder="0"
        allowFullScreen
        className="only-iframe-as-content"
      />
    </div>
  </div>
);

Work.propTypes = {
  language: PropTypes.string,
};

export default Work;
