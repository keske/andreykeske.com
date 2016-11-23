import React, { PropTypes } from 'react';

// Language
import Language from './locale/';

const Work = ({ language }) => {
  // Set language
  Language.setLocale(language);

  return (
    <div>
      <div className="responsive-container">
        <iframe
          width="100%"
          height="430"
          src="https://www.youtube.com/embed/biVVizdYm-I"
          frameBorder="0"
          allowFullScreen
          className="only-iframe-as-content"
        />
      </div>
    </div>
  );
};

Work.propTypes = {
  language: PropTypes.string,
};

export default Work;
