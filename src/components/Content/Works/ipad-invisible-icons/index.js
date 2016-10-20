import React, { PropTypes } from 'react';

// Language
import Language from './locale/';

const Work = ({ language, work }) => {
  // Set language
  Language.setLocale(language);

  // Path to photos
  const path = `./src/components/Content/Works/${work}/files`;

  return (
    <div>
      <h1>
        {Language.translate('Title')}
      </h1>
      <p>
        {Language.translate('Text')}
      </p>

      <h2>
        {Language.translate('Result')}
      </h2>
      <img
        src={require('./files/ipad-1.jpg')}
        role="presentation"
      />

      <h2>
        {Language.translate('Closer')}
      </h2>
      <img
        src={require('./files/ipad-2.jpg')}
        role="presentation"
      />

      <h2>
        {Language.translate('EvenCloser')}
      </h2>
      <img
        src={require('./files/ipad-3.jpg')}
        role="presentation"
      />

      <h2>
        {Language.translate('How')}
      </h2>

      <ul>
        <li>
          {Language.translate('Screenshot')}
        </li>
        <li>
          {Language.translate('Background')}
        </li>
        <li>
          {Language.translate('Apps')}
        </li>
        <li>
          {Language.translate('Finally')}
        </li>
      </ul>
    </div>
  );
};

Work.propTypes = {
  language: PropTypes.string,
  work: PropTypes.string,
};

export default Work;
