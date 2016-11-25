import React, { PropTypes } from 'react';

// Language
import Language from './locale/';

const Work = ({ language, link }) => {
  // Set language
  Language.setLocale(language);

  return (
    <div>
      <h1>
        {Language.translate('Title')}
      </h1>
      <p
        dangerouslySetInnerHTML={{
          __html:
            Language.translate('About'),
        }}
      />
      <p
        dangerouslySetInnerHTML={{
          __html:
            Language.translate('Text'),
        }}
      />
      <a href="http://www.mon3y.us/andrey_keske.html">
        <img
          src={require('./files/money-work.png')}
          role="presentation"
        />
      </a>
    </div>
  );
};

Work.propTypes = {
  language: PropTypes.string,
  link: PropTypes.string,
};

export default Work;
