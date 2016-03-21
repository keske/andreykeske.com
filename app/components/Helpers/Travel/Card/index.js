import React from 'react';
import R from 'ramda';

// Components
import Large from './Large';
import Medium from './Medium';

// Component styles
import { styles } from './styles.scss';

const Card = place => {

  const renderAsCard = () =>
    R.equals(place.viewMode, 'large')
      ? <Large {...place} />
      : <Medium {...place} />;

  const renderAsText = () =>
    <span className="render-cities-as-text">
      {
        `${place.city}, `
      }
    </span>;

  return (
    <span className={styles}>
      {
        R.equals(place.cover, true)
          ? renderAsCard()
          : renderAsText()
      }
    </span>
  );

};

export default Card;
