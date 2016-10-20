import React, { PropTypes } from 'react';

// Language
import Language from './locale/';

// Styles
import s from './styles/index.css';

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

      <div className={s.center}>
        <h4>
          {Language.translate('Home')}
        </h4>
        <img
          src={require('./files/dock-phone.png')}
          role="presentation"
        />

        <h4>
          {Language.translate('Sound')}
        </h4>
        <img
          src={require('./files/ringer-phone.png')}
          role="presentation"
        />

        <h4>
          {Language.translate('Group')}
        </h4>
        <img
          src={require('./files/group-phone.png')}
          role="presentation"
        />

        <h4>
          {Language.translate('Multitask')}
        </h4>
        <img
          src={require('./files/task-phone.png')}
          role="presentation"
        />
        <h4>
          {Language.translate('Drag')}
        </h4>
        <img
          src={require('./files/icon-phone.png')}
          role="presentation"
        />
      </div>

      <h2>
        {Language.translate('Bonus')}
      </h2>
      <iframe
        width="100%"
        height="450"
        src="//www.youtube.com/embed/n5X8ANp04b8"
        frameBorder="0"
        allowFullScreen
      />
    </div>
  );
};

Work.propTypes = {
  language: PropTypes.string,
};

export default Work;
