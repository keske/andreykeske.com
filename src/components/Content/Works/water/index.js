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
      <p>
        {Language.translate('Text')}
      </p>
      <div className={s.images}>
        <img
          src={require('./files/top.jpg')}
          role="presentation"
        />
        <img
          src={require('./files/left.jpg')}
          role="presentation"
        />
        <img
          src={require('./files/right.jpg')}
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
