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
        {Language.translate('FadeTitle')}
      </h2>

      <p>
        {Language.translate('FadeText1')}
        <br />
        {Language.translate('FadeText2')}
      </p>

      <h4>
        <a href="http://www.andreykeske.com/upload/works/volume.andreykeske.com/index.html">
          {Language.translate('OpenAndScroll')}
        </a>
      </h4>

      <br />

      <a href="http://www.andreykeske.com/upload/works/volume.andreykeske.com/index.html">
        <img
          src={require('./files/fade.jpg')}
          role="presentation"
        />
      </a>

      <hr />

      <h2>
        {Language.translate('ResizeTitle')}
      </h2>

      <p>
        {Language.translate('ResizeText')}
      </p>

      <h4>
        <a href="http://www.andreykeske.com/upload/works/resize.andreykeske.com/index.html">
          {Language.translate('OpenAndResize')}
        </a>
      </h4>

      <br />

      <a href="http://www.andreykeske.com/upload/works/resize.andreykeske.com/index.html">
        <img
          src={require('./files/resize.jpg')}
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
