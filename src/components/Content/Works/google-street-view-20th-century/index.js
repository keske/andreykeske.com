import React, { PropTypes } from 'react';

// Styles
import s from './styles/index.css';

// Language
import Language from './locale/';

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

      <div className="sepia">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m0!3m2!1sen!2s!4v1450984193097!6m8!1m7!1svi6B_N4KMxCQ7a7YNK33Rg!2m2!1d59.93816577301972!2d30.31553520547882!3f356.8860847078911!4f-0.7391829729079404!5f0.7820865974627469"
          width="100%"
          height="600"
          frameBorder="0"
          allowFullScreen
        />
      </div>

      <svg id="svg-image-blur">
        <filter id="sepia">
          <feColorMatrix type="saturate" values="0" />
          <feColorMatrix
            type="matrix"
            values=".343 .669 .119 0 0
                    .249 .626 .130 0 0
                    .172 .334 .111 0 0
                    .000 .000 .000 1 0"
          />
        </filter>
      </svg>
    </div>
  );
};

Work.propTypes = {
  language: PropTypes.string,
};

export default Work;
