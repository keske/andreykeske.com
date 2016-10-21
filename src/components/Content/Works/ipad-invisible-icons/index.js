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

      <h2>
        {Language.translate('Result')}
      </h2>
      <div className={s.images}>
        <img
          src={require('./files/ipad-1.jpg')}
          role="presentation"
        />
        <img
          src={require('./files/ipad-2.jpg')}
          role="presentation"
        />
        <img
          src={require('./files/ipad-3.jpg')}
          role="presentation"
        />
      </div>

      <br />

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
};

export default Work;
