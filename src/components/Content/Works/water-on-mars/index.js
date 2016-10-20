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
      <img
        src={require('./files/water-on-mars.jpg')}
        role="presentation"
      />
    </div>
  );
};

Work.propTypes = {
  language: PropTypes.string,
};

export default Work;
