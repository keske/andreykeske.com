import React, { PropTypes } from 'react';

// Language
import Language from './locale/';

const Work = ({ language }) => {
  // Set languag
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
        {Language.translate('Watch')}
      </p>

      <iframe
        width="100%"
        height="400"
        src="//www.youtube.com/embed/zaWOPkX4IpY"
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
