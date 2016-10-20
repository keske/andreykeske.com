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
          src="//player.vimeo.com/video/42966580"
          width="100%"
          height="430"
          frameBorder="0"
          allowFullScreen
        />
      </div>

      <h4>
        <a href="works/research/chrome/source.html.zip">
          {Language.translate('Download')}
        </a>
      </h4>
    </div>
  );
};

Work.propTypes = {
  language: PropTypes.string,
};

export default Work;
