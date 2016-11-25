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
        {Language.translate('Idea')}
      </p>

      <h4>
        <a
          href="http://www.andreykeske.com/upload/works/piano.andreykeske.com/do.html"
          target="_blank"
        >
          {Language.translate('Open')}
        </a>
      </h4>

      <iframe
        width="100%"
        height="450"
        src="//www.youtube.com/embed/w1VXptRjxyU"
        frameBorder="0"
        allowFullScreen
      />
    </div>
  );
};

Work.propTypes = {
  language: PropTypes.string,
};

export default Work;
