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
      <a target="_blank" href="./files/index.html">
        <img
          src={require('./files/work.jpg')}
          role="presentation"
        />
      </a>
      <h4>
        <a target="_blank" href="./files/index.html">Open page</a>
      </h4>
    </div>
  );
};

Work.propTypes = {
  language: PropTypes.string,
};

export default Work;
