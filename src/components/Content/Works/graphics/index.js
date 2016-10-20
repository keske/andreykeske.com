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

      <h2>
        {Language.translate('Emojii')}
      </h2>
      <div className={s.image}> 
        <img
          src={require('./files/emojii.jpeg')}
          role="presentation"
        />
      </div>

      <h2>
        {Language.translate('Rosette')}
      </h2>
      <div className={s.image}>
        <img
          src={require('./files/Rossete.jpg')}
          role="presentation"
        />
      </div>

      <h2>
        {Language.translate('Paralympic')}
      </h2>
      <div className={s.image}>
        <img
          src={require('./files/paralympic.jpg')}
          role="presentation"
        />
      </div>

      <h2>
        {Language.translate('Slave')}
      </h2>
      <div className={s.image}>
        <img
          src={require('./files/rub.jpg')}
          role="presentation"
        />
      </div>

      <h2>
        {Language.translate('Cola')}
      </h2>
      <div className={s.image}>
        <img
          src={require('./files/cola.jpg')}
          role="presentation"
        />
      </div>

      <h2>
        {Language.translate('Sneakers')}
      </h2>
      <p>
        {Language.translate('SneakersText1')}
        <br />
        {Language.translate('SneakersText2')}
      </p>
      <div className={s.image}>
        <img
          src={require('./files/sneakers.jpg')}
          role="presentation"
        />
      </div>

      <h2>
        {Language.translate('InvertManhattan')}
      </h2>
      <div className={s.image}>
        <img
          src={require('./files/invert_manhattan.jpg')}
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
