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
        {Language.translate('Normal')}
      </p>

      <img
        src={require('./files/normal.jpg')}
        role="presentation"
      />

      <br /><br />

      <p>
        {Language.translate('Friday')}
      </p>

      <img
        src={require('./files/friday-dock.jpg')}
        role="presentation"
      />

      <h4>
        <a href="https://github.com/keske/FridayDock/blob/master/apps.zip?raw=true">
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

