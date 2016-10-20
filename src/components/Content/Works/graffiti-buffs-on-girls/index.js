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

      <div className="responsive-container">
        <iframe
          width="420"
          height="315"
          src="https://www.youtube.com/embed/oARU7GLKj3Y"
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
