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
        {Language.translate('Normal')}
      </p>

      <img
        src={require('./files/normal.jpg')}
        role="presentation"
      />

      <hr />

      <p>
        {Language.translate('Friday')}
      </p>

      <img
        src={require('./files/friday-dock.jpg')}
        role="presentation"
      />

      <hr />

      <h4>
        <a href={`${path}/friday-apps.zip`}>
          {Language.translate('Download')}
        </a>
      </h4>
    </div>
  );
};

Work.propTypes = {
  language: PropTypes.string,
  work: PropTypes.string,
};

export default Work;

