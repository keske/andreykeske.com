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
        {Language.translate('Intro')}
      </p>
      <h2>{Language.translate('How')}</h2>
      <p>
        {Language.translate('HowText')}
      </p>
      <iframe
        width="100%"
        height="450"
        src="//www.youtube.com/embed/WrUCOit8adQ"
        frameBorder="0"
        allowFullScreen
      />
      <h2>
        {Language.translate('Repeat')}
      </h2>
      <ul>
        <li>
          {Language.translate('li_1')}
        </li>
        <li>
          {Language.translate('li_2')}
        </li>
        <li>
          {Language.translate('li_3')}
        </li>
        <li>
          {Language.translate('li_4')}
        </li>
        <li>
          {Language.translate('li_5')}
        </li>
        <li>
          {Language.translate('li_6')}
        </li>
      </ul>
      <i>
        {Language.translate('System')}
      </i>
    </div>
  );
};

Work.propTypes = {
  language: PropTypes.string,
};

export default Work;
