import React, { PropTypes } from 'react';

// Styles
import s from './index.css';

const Work = ({ language }) => {
  return (
    <div className={s.root}>
      <iframe
        src="http://www.andreykeske.com/upload/works/infinity.andreykeske.com/index.html"
        width="100%"
        height="500"
        frameBorder="0"
        className="only-iframe-as-content"
      />
    </div>
  );
};

Work.propTypes = {
  language: PropTypes.string,
};

export default Work;
