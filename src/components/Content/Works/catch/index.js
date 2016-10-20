import React, { PropTypes } from 'react';

// Language
import Language from './locale/';

const Work = ({ language }) => {
  // Set language
  Language.setLocale(language);

  return (
    <div>
      <h1>
        {Language.translate('Title')}
      </h1>
      <p>
        {Language.translate('Text')}
      </p>
      <p>
        <i>
          {Language.translate('Thanks')}
        </i>
      </p>
      <div className="responsive-container">
        <iframe
          width="100%"
          height="450"
          src="//www.youtube.com/embed/tCV8dwhAwf0"
          frameBorder="0"
          allowFullScreen
        />
      </div>
    </div>
  );
};

Work.propTypes = {
  language: PropTypes.string,
};

export default Work;
