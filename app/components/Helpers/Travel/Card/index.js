import React from 'react';
import R from 'ramda';

// Components
import Large from './Large';
import Medium from './Medium';

// Component styles
import { styles } from './styles.scss';

const Card = place => {

  const renderAsCard =
    R.ifElse(
      R.equals(R.__, 'large'),
      () => <Large {...place} />,
      () => <Medium {...place} />
    );

  const renderAsText = () =>
    <span className="render-cities-as-text">
      {
        place.city
      }
    </span>;

  const render =
    R.ifElse(
      R.equals(R.__, true),
      () => renderAsCard(place.viewMode),
      () => renderAsText()
    );

  return (

    <span className={styles}>
      {
        render(place.cover)
      }
    </span>
  );

};

export default Card;
