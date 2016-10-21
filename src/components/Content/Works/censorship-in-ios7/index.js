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
      <hr />
      <div className={s.center}>
        <img
          src={require('./files/dock-phone.png')}
          role="presentation"
        />
        <i>
          {Language.translate('Home')}
        </i>
        <hr />
        <img
          src={require('./files/ringer-phone.png')}
          role="presentation"
        />
        <i>
          {Language.translate('Sound')}
        </i>
        <hr />
        <img
          src={require('./files/group-phone.png')}
          role="presentation"
        />
        <i>
          {Language.translate('Group')}
        </i>
        <hr />
        <img
          src={require('./files/task-phone.png')}
          role="presentation"
        />
        <i>
          {Language.translate('Multitask')}
        </i>
        <hr />
        <img
          src={require('./files/icon-phone.png')}
          role="presentation"
        />
        <i>
          {Language.translate('Drag')}
        </i>
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
