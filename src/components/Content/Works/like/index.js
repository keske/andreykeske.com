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

      <h2>
        {Language.translate('EmpiteStateBuilding')}
      </h2>

      <h4>
        <a href="/empire.andreykeske.com/index.html">
          {Language.translate('Open')}
        </a>
      </h4>

      <a href="/empire.andreykeske.com/index.html">
        <img
          src={require('./files/empire-state.jpg')}
          role="presentation"
        />
      </a>

      <h2>
        {Language.translate('SpaceInvaders')}
      </h2>

      <h4>
        <a href="/spaceinvaders.andreykeske.com/index.html">
          {Language.translate('Open')}
        </a>
      </h4>

      <a href="/spaceinvaders.andreykeske.com/index.html">
        <img
          src={require('./files/spaceinvaders.jpg')}
          role="presentation"
        />
      </a>
    </div>
  );
};

Work.propTypes = {
  language: PropTypes.string,
};

export default Work;
