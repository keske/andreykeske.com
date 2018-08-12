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
        {Language.translate('Piece')}
      </p>

      <div className="responsive-container">
        <iframe
          width="100%"
          height="400"
          src="https://www.youtube.com/embed/h4HOWz9mmyI"
          frameBorder="0"
          allowFullScreen
        />
      </div>

      <br />

      <div className="responsive-container">
        <iframe
          width="100%"
          height="400"
          src="https://www.youtube.com/embed/WjKAlIXw-sI"
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
