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
      <div className={s.trad}>
        <img
          src={require('./files/Trad.png')}
          role="presentation"
        />
      </div>
      <div className={s.peace}>
        <img
          src={require('./files/Peace.png')}
          role="presentation"
        />
      </div>
      <div className={s.death}>
        <img
          src={require('./files/Death.png')}
          role="presentation"
        />
      </div>
      <div className={s.wild}>
        <img
          src={require('./files/Wild.png')}
          role="presentation"
        />
      </div>
    </div>
  );
};

Work.propTypes = {
  language: PropTypes.string,
};

export default Work;
