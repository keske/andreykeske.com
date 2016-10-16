import React from 'react';
import R from 'ramda';

// Components
import Large from './Large';
import Medium from './Medium';

// Component styles
import { styles } from './styles.scss';

const Card = place =>
  <span className={styles}>
    {
      R.ifElse(
        R.equals(R.__, true),
        () => R.ifElse(
                R.equals(R.__, 'large'),
                () => <Large {...place} />,
                () => <Medium {...place} />
              )(place.viewMode),
        () => <span className="render-cities-as-text">
                {place.city}
              </span>
      )(R.prop('cover', place))
    }
  </span>;

export default Card;
