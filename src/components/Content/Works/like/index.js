import React, { PropTypes } from 'react';

// Language
import Language from './locale/';

// Styles
import s from './index.css';

const Work = ({ language }) => {
  // Set language
  Language.setLocale(language);

  return (
    <div className={s.root}>
      <h1>
        {Language.translate('Title')}
      </h1>
      <h2>
        {Language.translate('EmpiteStateBuilding')}
      </h2>
      <div className={s.images}>
        <a href="http://www.andreykeske.com/upload/works/empire.andreykeske.com/index.html">
          <img
            src={require('./files/empire-state.jpg')}
            role="presentation"
          />
        </a>
      </div>

      <br />

      <h2>
        {Language.translate('SpaceInvaders')}
      </h2>
      <div className={s.images}>
        <a href="http://www.andreykeske.com/upload/works/spaceinvaders.andreykeske.com/index.html">
          <img
            src={require('./files/spaceinvaders.jpg')}
            role="presentation"
          />
        </a>
      </div>
    </div>
  );
};

Work.propTypes = {
  language: PropTypes.string,
};

export default Work;
