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
      <div className={s.links}>
        <a href="mailto:hello@andreykeske.com">
          Mail (hello@andreykeske.com)
        </a>
        <a href="https://github.com/keske">
          Github
        </a>
        <a href="https://www.facebook.com/andrey.keske">
          Facebook
        </a>
        <a href="https://instagram.com/andreykeske/">
          Instagram
        </a>
      </div>
      <div className={s.images}>
        <img
          src={require('./files/me-3.jpg')}
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
