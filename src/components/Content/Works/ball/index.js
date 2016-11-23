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
          height="410"
          src="https://www.youtube.com/embed/dT1l7jtfNWw"
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
