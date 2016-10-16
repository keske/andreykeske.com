import React, { PropTypes } from 'react';
import { Link } from 'react-router';

// Utils
import { capitalizeFirstLetter } from '../../../../utils/strings';

// Component styles
import { styles } from './styles.scss';

const Preview = ({ language, work: { link } }) => {

  // Set language
  const locale = require(`../../../Content/Works/${link}/locale/${capitalizeFirstLetter(language)}.js`);

  return (
    <span className={styles}>
      <Link
        to={`/${language}/works/${link}`}
        key={`/${language}/works/${link}`}
        className="name"
      >
        {locale.Title}
        <span className="date">
          2014
        </span>
        <span className="devider">
          /
        </span>
      </Link>
    </span>
  );
};

// <img src={`./app/components/Content/Works/${link}/files/${img}`} />

Preview.propTypes = {
  language: PropTypes.string,
  work: PropTypes.object,
};

export default Preview;
